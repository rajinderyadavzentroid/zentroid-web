import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Award, Clock, Users, Target, Eye } from "lucide-react";
import { Container } from "react-bootstrap";

export default function AboutUs() {

  const whyUs = [
    { icon: Award, title: "Exceptional 85% First-Pass Rate", description: "We maintain an 85% first-pass completion rate, ensuring most projects meet client specifications on the first submission, resulting in faster delivery and lower costs." },
    { icon: Clock, title: "In-House QA & Training", description: "Our dedicated QA team and training programs ensure consistent model quality, with rigorous checks reducing rework and accelerating delivery." },
    { icon: Target, title: "Commitment to Licensed Software", description: "We use only fully licensed, industry-standard software unlike most peers—ensuring compatibility, security, and access to the latest features, with licenses procured as needed for projects." },
    { icon: Sparkles, title: "Client-Centric Collaboration", description: "We offer flexible, time-zone-aligned support with seamless workflows and swift, responsive communication for smooth collaboration and timely project delivery." },
    { icon: Users, title: "Scalable Talent Pool", description: "India’s large 3D talent pool enables rapid project scaling without affecting quality, communication, or collaborative workflows." },
    { icon: Eye, title: "Safe and Stable Work Environment", description: "Our office in Chandigarh, one of India’s cleanest and safest cities, provides a secure, stable, and highly productive environment for our team." },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "8+", label: "Years of Experience" },
  ];

  return (
    <>
      <Head>
        <title>About Us - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="From Every Angle,In Every Reality. 3D That Feels Real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="about-hero-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="about-hero-content">
              <h1 className="about-hero-title">About Zentroid</h1>
              <p className="about-hero-desc">
                Zentroid Studios Private Limited is a Chandigarh-based 3D  company.
              </p>
              <p className="about-hero-desc">
                We deliver exceptional 3D models, scan clean-ups, and fashion visualizations tailored to e-commerce and AR/VR applications.
              </p>
              <p className="about-hero-desc">
                To date, we’ve delivered 5,000+ models and built a 30+ person team, reflecting our rapid growth and experience.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Company Story */}
        <section className="about-story-section">
          <Container>
            <div className="about-story-grid">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="about-story-title">Our Core Values</h2>
                <p className="about-story-text">
                  At Zentroid Studios, our culture is built on a foundation of client-first thinking, creativity, and collaboration. We believe in bold ideas, open communication, and attention to detail—values that drive us to deliver outstanding outcomes. Every project is approached with accountability and integrity, ensuring that freedom is balanced with responsibility.
                </p>
                <p className="about-story-text">
                  We foster an environment of continuous learning, diversity, and inclusivity, where every voice is valued and respected. Our people are encouraged to take ownership of their work, recognizing the impact they create for our clients and the team. Along the way, we celebrate every success—big or small—because we know that collective achievement fuels excellence and inspires us to keep pushing creative limits.
                </p>
                {/* <p className="about-story-text">
                  From concept to final render, we work closely with our clients to ensure every project exceeds
                  expectations and stands out in today's competitive digital landscape.
                </p> */}
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="about-story-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1755985022555-09c0ec136e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative workspace"
                  className="about-story-img"
                />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="about-mv-section">
          <Container>
            <div className="about-mv-grid">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="about-mv-card">
                <div className="about-mv-icon-wrap">
                  <Target className="about-mv-icon" />
                </div>
                <h3 className="about-mv-title">Our Mission</h3>
                <p className="about-mv-desc">
                  To empower businesses and creators with exceptional 3D models and visualizations that bring
                  their ideas to life. We strive to deliver quality, innovation, and creativity in every project,
                  making cutting-edge 3D technology accessible to everyone.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="about-mv-card">
                <div className="about-mv-icon-wrap">
                  <Eye className="about-mv-icon" />
                </div>
                <h3 className="about-mv-title">Our Vision</h3>
                <p className="about-mv-desc">
                  To become the world's most trusted 3D modeling studio, recognized for pushing creative boundaries
                  and setting new standards in digital art. We envision a future where immersive 3D experiences are
                  at the heart of every industry.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="about-why-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="about-why-header">
              <h2 className="about-why-title">Why Choose Us</h2>
              <p className="about-why-desc">What sets us apart in the world of 3D modeling</p>
            </motion.div>
            <div className="about-why-grid">
              {whyUs.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} whileHover={{ y: -5, scale: 1.02 }} className="about-why-card">
                  <div className="about-why-icon-wrap">
                    <item.icon className="about-why-icon" />
                  </div>
                  <h3 className="about-why-card-title">{item.title}</h3>
                  <p className="about-why-card-desc">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Statistics */}
        <section className="about-stats-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="about-stats-header">
              <h2 className="about-stats-title">Our Achievements</h2>
              <p className="about-stats-desc">Numbers that speak for themselves</p>
            </motion.div>
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="about-stat-card">
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
