import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Box, Gamepad2, Building2, Glasses, Layers } from "lucide-react";
import { Container } from "react-bootstrap";

export default function OurServices() {

  const services = [
    {
      icon: Layers,
      title: "Low-Poly 3D Models",
      description: "We specialise in low-poly 3D models while maintaining the utmost level of detail and quality to ensure models run smoothly on any AR platform with glitches and 0 loading time. We can cater to file sizes as low as 2MB. Note: We support all file formats like glb, gltf, usdz, obj, fbx etc.",
    },
    {
      icon: Sparkles,
      title: "3D Scan-Clean Ups",
      description: "We deal in professional Retopology of 3D scans. Note: We are highly proficient in Retopology using softwares like Maya and ZBrushFrom Shoes to Clothes, we can clean and refine everything. Note: We are highly proficient in Retopology using softwares like Maya and ZBrush.",
    },
    {
      icon: Glasses,
      title: "3D Fashion Models",
      description: "Your go to 3D partner for all your Fashion related 3D projects, from clothes to Jewellery to accessories, we can do it all for you. Note: We are proficient with: Marvellous Designer and CLO3D",
    },
    {
      icon: Box,
      title: "Render Ready 3D Models",
      description: "We can help you with render ready 3D high quality 3D models so that your render never misses out on any details. Note: Our Software Proficiency lies in: V-Ray, Arnold, Marmoset, Blender, Maya, Substance etc.",
    },
    // {
    //   icon: Glasses,
    //   title: "AR/VR Ready Models",
    //   description: "Optimized 3D models specifically designed for augmented and virtual reality applications.",
    // },
    // {
    //   icon: Layers,
    //   title: "Custom 3D Assets",
    //   description: "Tailored 3D solutions for unique projects and specific requirements. We bring your vision to reality.",
    // },
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
        <link rel="icon" href="/favicon.ico" />
        <title>Our services - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="Our Services Catering end-to-end 3D Modeling and Rendering for various industries matching the diverse use cases What truly sets us apart? Experience: Over" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zentroid.com/our-services" />
        <meta property="og:url" content="https://zentroid.com/our-services" />
        <meta property="og:title" content="Our services - Zentroid Studios Pvt Ltd" />
        <meta property="og:description" content="Our Services Catering end-to-end 3D Modeling and Rendering for various industries matching the diverse use cases What truly sets us apart? Experience: Over" />
        <meta property="og:image" content="https://zentroid.com/socials/social-icon.jpg" />
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
                  {/* <Link href="/contact">
                    <button className="svc-card-btn">Learn More</button>
                  </Link> */}
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
