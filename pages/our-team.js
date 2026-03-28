import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase, Users, TrendingUp, Instagram } from "lucide-react";
import { Container } from "react-bootstrap";
import NextImage from "next/image";
import ShagunaKhetarpal from "@/src/images/shaguna-khetarpal.jpg";
import teamMember1 from "@/src/images/team/akriti-hr.jpg";
import teamMember2 from "@/src/images/team/team-m2.jpg";
import teamMember3 from "@/src/images/team/team-m3.jpg";
import teamMember4 from "@/src/images/team/team-m4.jpg";
import teamMember5 from "@/src/images/team/team-m5.jpg";
import teamMember6 from "@/src/images/team/team-m6.jpg";
import teamMember7 from "@/src/images/team/team-m7.jpg";
import teamMember8 from "@/src/images/team/team-m8.jpg";
import teamMember9 from "@/src/images/team/team-m9.jpg";
import teamMember10 from "@/src/images/team/team-m10.jpg";
import teamMember11 from "@/src/images/team/team-m11.jpg";
import teamMember12 from "@/src/images/team/team-m12.jpg";
import teamMember13 from "@/src/images/team/team-m13.jpg";
import teamMember14 from "@/src/images/team/team-m14.jpg";
import teamMember15 from "@/src/images/team/team-m15.jpg";
import teamMember16 from "@/src/images/team/team-m16.jpg";
import teamMember17 from "@/src/images/team/team-m17.jpg";
import teamMember18 from "@/src/images/team/team-m18.jpg";
import teamMember19 from "@/src/images/team/team-m19.jpg";
import teamMember20 from "@/src/images/team/team-m20.jpg";
import teamMember21 from "@/src/images/team/team-m21.jpg";
import teamMember22 from "@/src/images/team/team-m22.jpg";
import teamMember23 from "@/src/images/team/team-m23.jpg";
import teamMember24 from "@/src/images/team/team-m24.jpg";
import teamMember25 from "@/src/images/team/team-m25.jpg";
import teamMember26 from "@/src/images/team/team-m26.jpg";
import teamMember27 from "@/src/images/team/team-m27.jpg";
import teamMember28 from "@/src/images/team/team-m28.jpg";
import teamMember29 from "@/src/images/team/team-m29.jpg";
import teamMember30 from "@/src/images/team/team-m30.jpg";
import teamMember31 from "@/src/images/team/team-m31.jpg";
import teamMember32 from "@/src/images/team/team-m32.jpg";
import teamMember33 from "@/src/images/team/team-m33.jpg";
import teamMember34 from "@/src/images/team/team-m34.jpg";
import teamMember35 from "@/src/images/team/team-m35.jpg";
import teamMember36 from "@/src/images/team/team-m36.jpg";
import teamMember37 from "@/src/images/team/team-m37.jpg";
import teamMember38 from "@/src/images/team/team-m38.jpg";
import teamMember39 from "@/src/images/team/team-m39.jpg";
import teamMember40 from "@/src/images/team/team-m40.jpg";
import teamMember41 from "@/src/images/team/team-m41.jpg";
import teamMember42 from "@/src/images/team/team-m42.jpg";
import teamMember43 from "@/src/images/team/team-m43.jpg";
import teamMember44 from "@/src/images/team/team-m44.jpg";




export default function OurTeam() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Our Team - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="Our Team Founder Shaguna Khetarpal Driven by curiosity and an entrepreneurial spirit, I founded Zentroid Studios after years in sales, HR, and the 3D industry." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zentroid.com/our-team" />
        <meta property="og:url" content="https://zentroid.com/our-team" />
        <meta property="og:title" content="Our Team - Zentroid Studios Pvt Ltd" />
        <meta property="og:description" content="Our Team Founder Shaguna Khetarpal Driven by curiosity and an entrepreneurial spirit, I founded Zentroid Studios after years in sales, HR, and the 3D industry." />
        <meta property="og:image" content="https://zentroid.com/socials/social-icon.jpg" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="team-hero-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="team-hero-content">
              <h1 className="team-hero-title">Meet Our Team</h1>
              <p className="team-hero-desc">Talented artists and designers dedicated to bringing your 3D visions to life</p>
            </motion.div>
          </Container>
        </section>

        {/* Founder Section */}
        <section className="founder-section">
          <div className="founder-bg">
            <div className="founder-blob founder-blob-1" />
            <div className="founder-blob founder-blob-2" />
          </div>
          <Container>
            <div className="founder-inner">

              {/* Left Social Icons */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="founder-side-socials">
                <motion.a href="https://www.linkedin.com/in/shagunakhetarpal/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, x: 5 }} className="founder-side-social-btn">
                  <Linkedin className="founder-side-social-icon" />
                </motion.a>
                <motion.a href="https://www.instagram.com/shaguna_khetarpal" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, x: 5 }} className="founder-side-social-btn">
                  <Instagram className="founder-side-social-icon" />
                </motion.a>
              </motion.div>

              {/* Cards Container */}
              <div className="founder-cards-wrap">

                {/* Main Profile Card */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="founder-main-card">
                  <div className="founder-card-corner founder-card-corner-tl" />
                  <div className="founder-card-corner founder-card-corner-br" />
                  <div className="founder-profile-row">
                    {/* Image */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} className="founder-img-wrap">
                      <NextImage className="founder-img" src={ShagunaKhetarpal} alt="Shaguna Khetarpal - Founder" />
                      <div className="founder-img-glow" />
                    </motion.div>
                    {/* Info */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="founder-info">
                      <h3 className="founder-name">Shaguna Khetarpal</h3>
                      <p className="founder-role">Founder</p>
                      <p className="founder-bio">Driven by curiosity and an entrepreneurial spirit, I founded Zentroid Studios after years in sales, HR, and the 3D industry. Today, we create immersive AR/VR experiences, virtual try-ons, and 360 product viewers with a passion for innovation and a client-first approach, redefining how brands connect with the world.</p>
                      {/* Mobile Socials */}
                      <div className="founder-mobile-socials">
                        <a href="https://www.linkedin.com/in/shagunakhetarpal/" target="_blank" rel="noopener noreferrer" className="founder-mobile-social-btn"><Linkedin className="founder-mobile-social-icon" /></a>
                        <a href="https://www.instagram.com/shaguna_khetarpal" target="_blank" rel="noopener noreferrer" className="founder-mobile-social-btn"><Instagram className="founder-mobile-social-icon" /></a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Badge Card - Top Right */}
                <motion.div initial={{ opacity: 0, x: 30, y: -20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="founder-badge-card founder-badge-card-tr">
                  <div className="founder-badge-icon-wrap"><Award className="founder-badge-icon" /></div>
                  <div>
                    <div className="founder-badge-value">150+</div>
                    <p className="founder-badge-label">Projects Completed</p>
                  </div>
                </motion.div>

                {/* Badge Card - Bottom Left */}
                <motion.div initial={{ opacity: 0, x: -30, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="founder-badge-card founder-badge-card-bl">
                  <div className="founder-badge-icon-wrap"><Briefcase className="founder-badge-icon" /></div>
                  <div>
                    <div className="founder-badge-value">15+</div>
                    <p className="founder-badge-label">Years Experience</p>
                  </div>
                </motion.div>

                {/* Stats Card - Middle Right */}
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} whileHover={{ y: -5 }} className="founder-stats-card">
                  <div className="founder-stat-row">
                    <div className="founder-stat-icon-wrap"><Users className="founder-stat-icon" /></div>
                    <div><div className="founder-stat-value">50+</div><p className="founder-stat-label">Team Members</p></div>
                  </div>
                  <div className="founder-stat-row">
                    <div className="founder-stat-icon-wrap"><TrendingUp className="founder-stat-icon" /></div>
                    <div><div className="founder-stat-value">98%</div><p className="founder-stat-label">Success Rate</p></div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="founder-mobile-stats">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }} className="founder-mobile-stat-card">
                <Users className="founder-mobile-stat-icon" />
                <div className="founder-badge-value">50+</div>
                <p className="founder-badge-label">Team Members</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} viewport={{ once: true }} className="founder-mobile-stat-card">
                <TrendingUp className="founder-mobile-stat-icon" />
                <div className="founder-badge-value">98%</div>
                <p className="founder-badge-label">Success Rate</p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Team Grid */}
        <section className="team-grid-section">
          <Container>
            <div>
              <h2 className="about-why-title mb-5">The Faces Behind the Work</h2>
            </div>
            <div className="team-grid">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember1} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember2} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember3} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember4} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember5} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember6} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember7} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember8} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember9} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember10} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember11} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember12} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember13} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember14} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember15} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember16} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember17} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember18} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember19} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember20} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember21} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember22} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember23} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember24} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember25} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember26} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember27} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember28} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember29} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember30} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember31} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember32} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember33} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember34} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember35} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember36} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember37} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember38} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember39} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember40} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember41} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember42} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember43} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember44} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>


            </div>
          </Container>
        </section>

        {/* Join Team CTA */}
        <section className="team-cta-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="team-cta-content">
              <h2 className="team-cta-title">Want to Join Our Team?</h2>
              <p className="team-cta-desc">We're always looking for talented 3D artists and designers to join our creative studio</p>
              <Link href="/contact">
                <button className="team-cta-btn">Get In Touch</button>
              </Link>
            </motion.div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
