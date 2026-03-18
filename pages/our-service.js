import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Box, Gamepad2, Building2, Glasses, Layers } from "lucide-react";
import { Container } from "react-bootstrap";

export default function OurServices() {

  const services = [
    {
      icon: Box,
      title: "3D Product Modeling",
      description: "High-quality product models for e-commerce, marketing, and presentations. Perfect for showcasing your products in stunning detail.",
      features: ["Photo-realistic renders", "Multiple angles", "Optimized for web"],
    },
    {
      icon: Gamepad2,
      title: "Game Assets Creation",
      description: "Custom game-ready 3D assets including characters, props, environments, and more. Optimized for performance.",
      features: ["Low-poly optimization", "PBR textures", "Multiple LODs"],
    },
    {
      icon: Building2,
      title: "Architectural 3D Models",
      description: "Detailed architectural visualizations for real estate, interior design, and construction projects.",
      features: ["Interior & exterior", "Lighting design", "Material library"],
    },
    {
      icon: Sparkles,
      title: "3D Rendering & Visualization",
      description: "Professional rendering services that bring your ideas to life with stunning visual quality and realism.",
      features: ["4K rendering", "Animation support", "Quick turnaround"],
    },
    {
      icon: Glasses,
      title: "AR/VR Ready Models",
      description: "Optimized 3D models specifically designed for augmented and virtual reality applications.",
      features: ["Mobile optimized", "Interactive elements", "Cross-platform"],
    },
    {
      icon: Layers,
      title: "Custom 3D Assets",
      description: "Tailored 3D solutions for unique projects and specific requirements. We bring your vision to reality.",
      features: ["Unlimited revisions", "Full ownership", "Source files included"],
    },
  ];

  const process = [
    { step: "01", title: "Consultation", description: "We discuss your project requirements and vision" },
    { step: "02", title: "Concept Design", description: "Initial sketches and 3D concepts for approval" },
    { step: "03", title: "Production", description: "Detailed modeling, texturing, and refinement" },
    { step: "04", title: "Delivery", description: "Final renders and files in your preferred format" },
  ];

  return (
    <>
      <Head>
        <title>Service - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="From Every Angle,In Every Reality. 3D That Feels Real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="svc-hero-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="svc-hero-content">
              <h1 className="svc-hero-title">Our Services</h1>
              <p className="svc-hero-desc">Comprehensive 3D modeling solutions tailored to your needs. From concept to completion, we deliver excellence.</p>
            </motion.div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="svc-grid-section">
          <Container>
            <div className="svc-grid">
              {services.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10, scale: 1.02 }} className="svc-card">
                  <div className="svc-card-icon-wrap">
                    <service.icon className="svc-card-icon" />
                  </div>
                  <h3 className="svc-card-title">{service.title}</h3>
                  <p className="svc-card-desc">{service.description}</p>
                  <div className="svc-card-features">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="svc-card-feature">
                        <div className="svc-card-feature-dot" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact">
                    <button className="svc-card-btn">Learn More</button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="svc-process-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="svc-process-header">
              <h2 className="svc-process-title">Our Process</h2>
              <p className="svc-process-desc">A streamlined workflow for exceptional results</p>
            </motion.div>
            <div className="svc-process-grid">
              {process.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="svc-process-item">
                  <div className="svc-process-step">{item.step}</div>
                  <h3 className="svc-process-item-title">{item.title}</h3>
                  <p className="svc-process-item-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="svc-cta-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="svc-cta-box">
              <h2 className="svc-cta-title">Ready to Start Your Project?</h2>
              <p className="svc-cta-desc">Let's bring your ideas to life with stunning 3D models</p>
              <Link href="/contact">
                <button className="svc-cta-btn">Get Started Today</button>
              </Link>
            </motion.div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
