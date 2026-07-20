import Head from "next/head";
import Layout from "@/src/component/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Container } from "react-bootstrap";

export default function Contact() {

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({ name: "", email: "", projectDetails: "" });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [calendlyReady, setCalendlyReady] = useState(false);
  const [pageLoadTime] = useState(() => Date.now());

  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    // Add Calendly JS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/shaguna-zentroid/30min" });
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) errs.name = "Name must be at least 2 characters.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Please enter a valid email address.";
    return errs;
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (!executeRecaptcha) return;
    setErrors({});
    setStatus("sending");
    try {
      const captchaToken = await executeRecaptcha("contact_form");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.projectDetails,
          website: "",
          submittedAt: pageLoadTime,
          captchaToken,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectDetails: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }, [executeRecaptcha, formData, pageLoadTime]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      const updated = { ...errors };
      if (name === "name" && value.trim().length >= 2) delete updated.name;
      if (name === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) delete updated.email;
      setErrors(updated);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "shaguna@zentroid.com", href: "mailto:shaguna@zentroid.com" },
    // { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Office Location", value: "Zentroid Studios Pvt. Ltd., S.A, S Infotech, World Tech 67, Sahibzada Ajit Singh Nagar, Punjab 160062", href: null },
  ];

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/zentroid" },
    // { icon: Twitter, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/zentroid.studios/" },
  ];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Contact - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="Get in Touch Let's Talk Schedule time with us Follow Us Behind the scenes Join Community Insights, updates Send us a message." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zentroid.com/contact" />
        <meta property="og:url" content="https://zentroid.com/contact" />
        <meta property="og:title" content="Contact - Zentroid Studios Pvt Ltd" />
        <meta property="og:description" content="Get in Touch Let's Talk Schedule time with us Follow Us Behind the scenes Join Community Insights, updates Send us a message." />
        <meta property="og:image" content="https://zentroid.com/socials/social-icon.jpg" />
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
                      <label htmlFor="name" className="contact-label">Your Name <span style={{ color: "red" }}>*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="contact-input" placeholder="John Doe" />
                      {errors.name && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "4px" }}>{errors.name}</p>}
                    </div>
                    <div className="contact-field">
                      <label htmlFor="email" className="contact-label">Email Address <span style={{ color: "red" }}>*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="contact-input" placeholder="john@example.com" />
                      {errors.email && <p style={{ color: "red", fontSize: "0.85rem", marginTop: "4px" }}>{errors.email}</p>}
                    </div>
                    <div className="contact-field">
                      <label htmlFor="projectDetails" className="contact-label">Project Details</label>
                      <textarea id="projectDetails" name="projectDetails" value={formData.projectDetails} onChange={handleChange} required rows={6} className="contact-textarea" placeholder="Tell us about your project..." />
                    </div>
                    {status === "success" && (
                      <p style={{ color: "green" }}>Message sent successfully! Our team will contact you shortly.</p>
                    )}
                    {status === "error" && <p style={{ color: "red" }}>There is some issue, please try after some time.</p>}
                    <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="contact-submit-btn">
                      <Send className="contact-submit-icon" /> {status === "sending" ? "Sending..." : "Send Message"}
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.3043660205485!2d76.72325657705456!3d30.681711388094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefaa5715d3df%3A0xd17264f32b54ae50!2sZentroid%20Studios%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1774338955197!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
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
                <a href="mailto:shaguna@zentroid.com">
                  <button className="contact-cta-btn-primary">Email Us</button>
                </a>
                <button className="contact-cta-btn-secondary" onClick={openCalendly} disabled={!calendlyReady}>
                  {calendlyReady ? "Schedule a Call" : "Loading..."}
                </button>
              </div>
            </motion.div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
