import Head from "next/head";
import Layout from "@/src/component/Layout";
import { motion } from "framer-motion";
import { Shield, Mail } from "lucide-react";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Privacy Policy - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="Privacy Policy Last Updated: 28th August 2025 We values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zentroid.com/privacy-policy" />
        <meta property="og:url" content="https://zentroid.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy - Zentroid Studios Pvt Ltd" />
        <meta property="og:description" content="Privacy Policy Last Updated: 28th August 2025 We values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you." />
        <meta property="og:image" content="https://zentroid.com/socials/social-icon.jpg" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="pp-hero-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="pp-hero-content">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="pp-hero-icon-wrap">
                <Shield className="pp-hero-icon" />
              </motion.div>
              <h1 className="pp-hero-title">Privacy Policy</h1>
              <p className="pp-hero-desc">We value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit <Link href="https://zentroid.com">https://zentroid.com</Link> or use our services.</p>
              <div className="pp-hero-date">Last Updated: 28th August 2025</div>
            </motion.div>
          </Container>
        </section>

        {/* Main Content */}
        <section className="pp-main-section">
          <Container>
            <div className="pp-sections-list">

              {/* 1. Information We Collect */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">1. Information We Collect</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We may collect the following types of information when you use our website:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Personal Information: Name, email address, phone number, billing details, or other information you voluntarily provide when contacting us, signing up, or making a purchase.</li>
                    <li className="pp-item-list-item">Non-Personal Information: Browser type, IP address, device information, cookies, and usage data collected automatically to improve site performance.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 2. How We Use Your Information */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">2. How We Use Your Information</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We may use the information collected for:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Providing, operating, and improving our website and services.</li>
                    <li className="pp-item-list-item">Processing transactions and delivering products or services.</li>
                    <li className="pp-item-list-item">Responding to your inquiries or customer service requests.</li>
                    <li className="pp-item-list-item">Sending promotional emails, newsletters, or updates (you can opt out anytime).</li>
                    <li className="pp-item-list-item">Ensuring website security and preventing fraudulent activity.</li>
                  </ul>
                </div>
              </motion.div>

              {/* 3. Cookies */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">3. Cookies and Tracking Technologies</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We use cookies and similar technologies to:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Enhance user experience.</li>
                    <li className="pp-item-list-item">Analyze website traffic and usage trends.</li>
                    <li className="pp-item-list-item">Personalize content and ads (if applicable).</li>
                  </ul>
                  <p className="pp-item-text">You may disable cookies through your browser settings, but some website features may not function properly.</p>
                </div>
              </motion.div>

              {/* 4. Sharing of Information */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">4. Sharing of Information</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We do not sell or rent your personal data. We may share your information only with:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Trusted service providers who assist us in operating the website.</li>
                    <li className="pp-item-list-item">Legal authorities if required by law, regulation, or legal process.</li>
                    <li className="pp-item-list-item">Business transfers (e.g., merger, acquisition, or sale of assets).</li>
                  </ul>
                </div>
              </motion.div>

              {/* 5. Data Retention */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">5. Data Retention</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We retain your personal information only as long as necessary to provide services or comply with legal obligations.</p>
                </div>
              </motion.div>

              {/* 6. Your Rights */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">6. Your Rights</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">Depending on your location, you may have rights under GDPR, CCPA, or other laws, including:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">The right to access, correct, or delete your data.</li>
                    <li className="pp-item-list-item">The right to opt out of marketing communications.</li>
                    <li className="pp-item-list-item">The right to withdraw consent at any time.</li>
                    <li className="pp-item-list-item">The right to request data portability.</li>
                  </ul>
                  <p className="pp-item-text">To exercise these rights, contact us at <a href="mailto:shaguna@zentroid.com" className="pp-contact-email-link">shaguna@zentroid.com</a>.</p>
                </div>
              </motion.div>

              {/* 7. Data Security */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">7. Data Security</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We take appropriate technical and organizational measures to protect your information against unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.</p>
                </div>
              </motion.div>

              {/* 8. Third-Party Links */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">8. Third-Party Links</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites.</p>
                </div>
              </motion.div>

              {/* 9. Children's Privacy */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">9. Children's Privacy</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">Our services are not directed to children under 13 (or under 16 in some jurisdictions). We do not knowingly collect personal data from children.</p>
                </div>
              </motion.div>

              {/* 10. Changes to This Policy */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">10. Changes to This Policy</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <p className="pp-item-text">We may update this Privacy Policy from time to time. Updates will be posted on this page with the "Last Updated" date.</p>
                </div>
              </motion.div>

              {/* 11. Contact Us */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} viewport={{ once: true }} className="pp-card">
                <div className="pp-card-header">
                  <h2 className="pp-card-title">11. Contact Us</h2>
                  <div className="pp-card-title-line" />
                </div>
                <div className="pp-card-body">
                  <h3 className="pp-item-subtitle">Zentroid Studios Private Limited</h3>
                  <p className="pp-item-text">If you have questions about this Privacy Policy, please contact us at:</p>
                  <ul className="pp-item-list">
                    <li className="pp-item-list-item">Email: <a href="mailto:shaguna@zentroid.com" className="pp-contact-email-link">shaguna@zentroid.com</a></li>
                    <li className="pp-item-list-item">Address: S.A, S Infotech, World Tech 67, Sahibzada Ajit Singh Nagar, Punjab 160062</li>
                  </ul>
                </div>
              </motion.div>

            </div>

            {/* Contact CTA */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="pp-contact-card">
              <div className="pp-contact-blob pp-contact-blob-1" />
              <div className="pp-contact-blob pp-contact-blob-2" />
              <div className="pp-contact-inner">
                <div className="pp-contact-icon-wrap">
                  <Mail className="pp-contact-icon" />
                </div>
                <h2 className="pp-contact-title">Questions About Privacy?</h2>
                <p className="pp-contact-desc">If you have any questions or concerns about our privacy policy or how we handle your data, please don't hesitate to contact us.</p>
                <a href="mailto:shaguna@zentroid.com">
                  <button className="pp-contact-btn">Contact Us</button>
                </a>
              </div>
            </motion.div>

          </Container>
        </section>

      </Layout>
    </>
  );
}
