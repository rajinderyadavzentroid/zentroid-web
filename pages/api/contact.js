import nodemailer from "nodemailer";

// ---------------------------------------------------------------------------
// In-memory rate limit store: { ip -> { count, windowStart } }
// This resets on server restart. Good enough for Pages Router serverless.
// ---------------------------------------------------------------------------
const rateLimitStore = new Map();
const RATE_LIMIT_MAX = 5;       // max requests
const RATE_LIMIT_WINDOW = 60000; // per 60 seconds (ms)

// ---------------------------------------------------------------------------
// Allowed origins — only requests from these domains pass the origin check.
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = [
  "https://zentroid.com",
  "https://www.zentroid.com",
];

// ---------------------------------------------------------------------------
// Simple logger — prints IP, User-Agent, timestamp, and accept/block reason.
// ---------------------------------------------------------------------------
function log(ip, userAgent, accepted, reason) {
  console.log(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      ip,
      userAgent: userAgent || "unknown",
      accepted,
      reason,
    })
  );
}

// ---------------------------------------------------------------------------
// Rate limiter — returns true if the IP has exceeded the limit.
// ---------------------------------------------------------------------------
function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW) {
    // First request in this window — reset counter
    rateLimitStore.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// Email validator — basic RFC-compliant regex check.
// ---------------------------------------------------------------------------
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  // Derive IP — works behind Vercel / proxies
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  const userAgent = req.headers["user-agent"] || "";
  const origin = req.headers["origin"] || "";

  // ── 1. FEATURE FLAG ────────────────────────────────────────────────────────
  // Set CONTACT_FORM_ENABLED=false in .env.local to kill the form instantly.
  if (process.env.CONTACT_FORM_ENABLED === "false") {
    log(ip, userAgent, false, "feature_disabled");
    return res.status(503).json({
      success: false,
      message: "Contact form is temporarily unavailable.",
    });
  }

  // ── 2. METHOD CHECK ────────────────────────────────────────────────────────
  if (req.method !== "POST") {
    log(ip, userAgent, false, `method_not_allowed:${req.method}`);
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  // ── 3. ORIGIN CHECK ────────────────────────────────────────────────────────
  // Block requests that don't come from the production domain.
  // Allows empty origin only in dev (localhost) so local testing still works.
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev && origin && !ALLOWED_ORIGINS.includes(origin)) {
    log(ip, userAgent, false, `forbidden_origin:${origin}`);
    return res.status(403).json({ success: false, message: "Forbidden" });
  }

  // ── 4. RATE LIMITING ───────────────────────────────────────────────────────
  if (isRateLimited(ip)) {
    log(ip, userAgent, false, "rate_limited");
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please wait a moment and try again.",
    });
  }

  // ── 5. BODY VALIDATION ─────────────────────────────────────────────────────
  const { name, email, phone, message, website, submittedAt } = req.body || {};

  // 5a. Honeypot — bots fill hidden fields, humans don't.
  if (website) {
    log(ip, userAgent, false, "honeypot_triggered");
    // Return 200 to fool the bot into thinking it succeeded.
    return res.status(200).json({ success: true });
  }

  // 5b. Timing check — reject if form was submitted in under 3 seconds.
  if (submittedAt) {
    const elapsed = Date.now() - Number(submittedAt);
    if (elapsed < 3000) {
      log(ip, userAgent, false, `submitted_too_fast:${elapsed}ms`);
      return res.status(400).json({
        success: false,
        message: "Form submitted too quickly. Please try again.",
      });
    }
  }

  // 5c. Field validation
  if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    log(ip, userAgent, false, "invalid_name");
    return res.status(400).json({ success: false, message: "Name must be between 2 and 100 characters." });
  }

  if (!email || !isValidEmail(email.trim())) {
    log(ip, userAgent, false, "invalid_email");
    return res.status(400).json({ success: false, message: "A valid email address is required." });
  }

  if (!message || typeof message !== "string" || message.trim().length === 0 || message.trim().length > 2000) {
    log(ip, userAgent, false, "invalid_message");
    return res.status(400).json({ success: false, message: "Message must be between 1 and 2000 characters." });
  }

  // ── 6. ALL CHECKS PASSED — send email ─────────────────────────────────────
  log(ip, userAgent, true, "accepted");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Zentroid Studios <${process.env.SMTP_USER}>`,
      to: "shaguna@zentroid.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid E0E0E0_1;border-radius:8px;overflow:hidden">
<!-- Header -->
<div style="background:#0f0f0f;padding:24px 32px;text-align:center;border-bottom:3px solid 6C63FF_1">
<img src="https://i.postimg.cc/NjcjPjPv/logo-white.png" alt="Zentroid Studios" border="0" style="max-height:48px" />
</div>
<!-- Body -->
<div style="padding:32px;background:#ffffff">
<h2 style="margin:0 0 20px;color:#1a1a1a;font-size:20px">New Contact Form Submission</h2>
<table style="width:100%;border-collapse:collapse">
<tr>
<td style="padding:10px 14px;background:#f5f5f5;border:1px solid E0E0E0_1;width:30%;font-weight:bold;color:#555">Name</td>
<td style="padding:10px 14px;border:1px solid E0E0E0_1;color:#1a1a1a">${name}</td>
</tr>
<tr>
<td style="padding:10px 14px;background:#f5f5f5;border:1px solid E0E0E0_1;font-weight:bold;color:#555">Email</td>
<td style="padding:10px 14px;border:1px solid E0E0E0_1;color:#1a1a1a">${email}</td>
</tr>
 ${phone ? `
<tr>
<td style="padding:10px 14px;background:#f5f5f5;border:1px solid E0E0E0_1;font-weight:bold;color:#555">Phone</td>
<td style="padding:10px 14px;border:1px solid E0E0E0_1;color:#1a1a1a">${phone}</td>
</tr>` : ""}
<tr>
<td style="padding:10px 14px;background:#f5f5f5;border:1px solid E0E0E0_1;font-weight:bold;color:#555;vertical-align:top">Message</td>
<td style="padding:10px 14px;border:1px solid E0E0E0_1;color:#1a1a1a;white-space:pre-line">${message}</td>
</tr>
</table>
</div>
<!-- Footer -->
<div style="background:#0f0f0f;padding:18px 32px;text-align:center;border-top:3px solid 6C63FF_1">
<p style="margin:0;color:#888;font-size:13px">&copy; 2026 Zentroid Studios Pvt Ltd. All rights reserved.</p>
</div>
</div>
 `,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
}
