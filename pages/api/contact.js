import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ message: "Name, email, and message are required" });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      // to: "rajinder@zentroid.com",
      to: `"${email}"`,
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden">
        <!-- Header -->
        <div style="background:#0f0f0f;padding:24px 32px;text-align:center;border-bottom:3px solid #6c63ff">
          <img src="https://i.ibb.co/C3GYFQh6/logo-white.png" alt="Zentroid Studios" border="0" style="max-height:48px" />
        </div>

        <!-- Body -->
        <div style="padding:32px;background:#ffffff">
          <h2 style="margin:0 0 20px;color:#1a1a1a;font-size:20px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 14px;background:#f5f5f5;border:1px solid #e0e0e0;width:30%;font-weight:bold;color:#555">Name</td>
              <td style="padding:10px 14px;border:1px solid #e0e0e0;color:#1a1a1a">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#f5f5f5;border:1px solid #e0e0e0;font-weight:bold;color:#555">Email</td>
              <td style="padding:10px 14px;border:1px solid #e0e0e0;color:#1a1a1a">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 14px;background:#f5f5f5;border:1px solid #e0e0e0;font-weight:bold;color:#555">Phone</td>
              <td style="padding:10px 14px;border:1px solid #e0e0e0;color:#1a1a1a">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 14px;background:#f5f5f5;border:1px solid #e0e0e0;font-weight:bold;color:#555;vertical-align:top">Message</td>
              <td style="padding:10px 14px;border:1px solid #e0e0e0;color:#1a1a1a;white-space:pre-line">${message}</td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="background:#0f0f0f;padding:18px 32px;text-align:center;border-top:3px solid #6c63ff">
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
