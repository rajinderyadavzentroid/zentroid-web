import Head from "next/head";
import Layout from "@/src/component/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", projectDetails: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", projectDetails: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@zentroid.com", href: "mailto:hello@zentroid.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Office Location", value: "123 Creative Avenue, San Francisco, CA 94102, United States", href: null },
  ];

  const socials = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <>
      <Head>
        <title>Contact - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="From Every Angle,In Every Reality. 3D That Feels Real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="contact-hero-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="contact-hero-content">
              <h1 className="contact-hero-title">Get In Touch</h1>
              <p className="contact-hero-desc">Ready to start your 3D project? We'd love to hear from you.</p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="contact-main-section">
          <Container>
            <div className="contact-grid">

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="contact-form-card">
                  <h2 className="contact-card-title">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-field">
                      <label htmlFor="name" className="contact-label">Your Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="contact-input" placeholder="John Doe" />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="email" className="contact-label">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="contact-input" placeholder="john@example.com" />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="projectDetails" className="contact-label">Project Details</label>
                      <textarea id="projectDetails" name="projectDetails" value={formData.projectDetails} onChange={handleChange} required rows={6} className="contact-textarea" placeholder="Tell us about your project..." />
                    </div>
                    <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="contact-submit-btn">
                      <Send className="contact-submit-icon" /> Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="contact-info-col">

                <div className="contact-info-card">
                  <h2 className="contact-card-title">Contact Information</h2>
                  <div className="contact-info-list">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="contact-info-item">
                        <div className="contact-info-icon-wrap">
                          <item.icon className="contact-info-icon" />
                        </div>
                        <div>
                          <h3 className="contact-info-label">{item.label}</h3>
                          {item.href ? (
                            <a href={item.href} className="contact-info-value contact-info-link">{item.value}</a>
                          ) : (
                            <p className="contact-info-value">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="contact-social-card">
                  <h3 className="contact-social-title">Follow Us</h3>
                  <div className="contact-socials">
                    {socials.map((s, i) => (
                      <a key={i} href={s.href} className="contact-social-btn">
                        <s.icon className="contact-social-icon" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contact-map-card">
                  <div className="contact-map-placeholder">
                    <MapPin className="contact-map-icon" />
                    <p className="contact-map-label">Map View</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="contact-cta-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="contact-cta-box">
              <h2 className="contact-cta-title">Start Your 3D Project Today</h2>
              <p className="contact-cta-desc">Let's transform your ideas into stunning 3D reality</p>
              <div className="contact-cta-btns">
                <a href="mailto:hello@zentroid.com">
                  <button className="contact-cta-btn-primary">Email Us</button>
                </a>
                <a href="tel:+15551234567">
                  <button className="contact-cta-btn-secondary">Call Us</button>
                </a>
              </div>
            </motion.div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
