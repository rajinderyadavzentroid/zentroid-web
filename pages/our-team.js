import React from "react";
import RightArrow from "@/src/images/right-arrow.png";
import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Award, Briefcase, Users, TrendingUp, Instagram } from "lucide-react";
import { Container } from "react-bootstrap";
import NextImage from "next/image";
import ShagunaKhetarpal from "@/src/images/shaguna-khetarpal.jpg";
import teamMember1 from "@/src/images/team/akriti-hr.webp";
import teamMember2 from "@/src/images/team/team-m2.webp";
import teamMember3 from "@/src/images/team/team-m3.webp";
import teamMember4 from "@/src/images/team/team-m4.webp";
import teamMember5 from "@/src/images/team/team-m5.webp";
import teamMember6 from "@/src/images/team/team-m6.webp";
import teamMember7 from "@/src/images/team/team-m7.webp";
import teamMember8 from "@/src/images/team/team-m8.webp";
import teamMember9 from "@/src/images/team/team-m9.webp";
import teamMember10 from "@/src/images/team/team-m10.webp";
import teamMember11 from "@/src/images/team/team-m11.webp";
import teamMember12 from "@/src/images/team/team-m12.webp";
import teamMember13 from "@/src/images/team/team-m13.webp";
import teamMember14 from "@/src/images/team/team-m14.webp";
import teamMember15 from "@/src/images/team/team-m15.webp";
import teamMember16 from "@/src/images/team/team-m16.webp";
import teamMember17 from "@/src/images/team/team-m17.webp";
import teamMember18 from "@/src/images/team/team-m18.webp";
import teamMember19 from "@/src/images/team/team-m19.webp";
import teamMember20 from "@/src/images/team/team-m20.webp";
import teamMember21 from "@/src/images/team/team-m21.webp";
import teamMember22 from "@/src/images/team/team-m22.webp";
import teamMember23 from "@/src/images/team/team-m23.webp";
import teamMember24 from "@/src/images/team/team-m24.webp";
import teamMember25 from "@/src/images/team/team-m25.webp";
import teamMember26 from "@/src/images/team/team-m26.webp";
import teamMember27 from "@/src/images/team/team-m27.webp";
import teamMember28 from "@/src/images/team/team-m28.webp";
import teamMember29 from "@/src/images/team/team-m29.webp";
import teamMember30 from "@/src/images/team/team-m30.webp";
import teamMember31 from "@/src/images/team/team-m31.webp";
import teamMember32 from "@/src/images/team/team-m32.webp";
import teamMember33 from "@/src/images/team/team-m33.webp";
import teamMember34 from "@/src/images/team/team-m34.webp";
import teamMember35 from "@/src/images/team/team-m35.webp";
import teamMember36 from "@/src/images/team/team-m36.webp";
import teamMember37 from "@/src/images/team/team-m37.webp";
import teamMember38 from "@/src/images/team/team-m38.webp";
import teamMember39 from "@/src/images/team/team-m39.webp";
import teamMember40 from "@/src/images/team/team-m40.webp";
import teamMember41 from "@/src/images/team/team-m41.webp";
import teamMember42 from "@/src/images/team/team-m42.webp";
import teamMember43 from "@/src/images/team/team-m43.webp";
import teamMember44 from "@/src/images/team/team-m44.webp";
import teamMember45 from "@/src/images/team/team-m45.webp";
import teamMember46 from "@/src/images/team/team-m46.webp";
import teamMember47 from "@/src/images/team/team-m47.webp";
import teamMember48 from "@/src/images/team/team-m48.webp";
import RightArrow2 from "@/src/images/right-arrow.png";
import teamMember49 from "@/src/images/team/team-m49.webp";
import teamMember50 from "@/src/images/team/team-m50.webp";

import teamMember51 from "@/src/images/team/team-m51.webp";
import teamMember52 from "@/src/images/team/team-m52.webp";
import teamMember53 from "@/src/images/team/team-m53.webp";
import teamMember54 from "@/src/images/team/team-m54.webp";
import teamMember55 from "@/src/images/team/team-m55.webp";
import teamMember56 from "@/src/images/team/team-m56.webp";
import teamMember57 from "@/src/images/team/team-m57.webp";
import teamMember58 from "@/src/images/team/team-m58.webp";
import teamMember59 from "@/src/images/team/team-m59.webp";




function TeamCarousel({ children }) {
  const items = Array.isArray(children) ? children : [children];
  const [page, setPage] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 576px)');
    setIsMobile(mq.matches);
    const handler = (e) => { setIsMobile(e.matches); setPage(0); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  const perPage = 4;
  const total = Math.ceil(items.length / perPage);
  const slice = isMobile ? items.slice(page * perPage, page * perPage + perPage) : items;
  return (
    <div className="team-carousel">
      <div className="team-carousel-grid">{slice}</div>
      {isMobile && total > 1 && (
        <div className="team-carousel-nav">
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="team-carousel-btn"><NextImage src={RightArrow2} alt="prev" width={16} height={16} style={{ transform: "rotate(180deg)" }} /></button>
          <span>{page + 1} / {total}</span>
          <button onClick={() => setPage(p => Math.min(total - 1, p + 1))} disabled={page === total - 1} className="team-carousel-btn"><NextImage src={RightArrow2} alt="next" width={16} height={16} /></button>
        </div>
      )}
    </div>
  );
}

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
                    <div className="founder-badge-value">5+</div>
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
              <h2 className="about-why-title mb-5 text-center">The Faces Behind the Work</h2>
            </div>
            <div className="mb-4">
              <h3>Texturing Team
              </h3>
            </div>
            <TeamCarousel>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember44} alt="Promil Kumar" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Promil Kumar</h3>
                  <div className="team-card-role">Texturing Manager</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember42} alt="Atik Alam" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Atik
                    Alam</h3>
                  <div className="team-card-role">Texturing Manager</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember2} alt="Mahim Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Mahim Sood</h3>
                  <div className="team-card-role">Texturing Manager
                  </div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember18} alt="Shivam Patidar" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Shivam Patidar</h3>
                  <div className="team-card-role">Texturing Manager
                  </div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember47} alt="Chirag Panchal" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Chirag Panchal</h3>
                  <div className="team-card-role">Texturing Manager
                  </div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember38} alt="Sachin Kalshyan" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Sachin Kalshyan</h3>
                  <div className="team-card-role">Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember39} alt="Sanket Raj" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Sanket Raj</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>



              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember43} alt="Adesh Dixit" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Adesh Dixit</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember45} alt="Sumana Ghosh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Sumana Ghosh</h3>
                  <div className="team-card-role">Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember34} alt="Akshay Aggarwal" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akshay Aggarwal</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember4} alt="Priyanshu Panda" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Priyanshu Panda</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember5} alt="Vilas Deshmukh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Vilas Deshmukh</h3>
                  <div className="team-card-role">Texturing Artist
                  </div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember6} alt="Varun" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Varun</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember7} alt="Lavanya Sharma" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Lavanya sharma</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember8} alt="Rohit Singh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Rohit Singh</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember9} alt="Abhishek Bhardwaj" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Abhishek Bhardwaj</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember10} alt="Aryan Bhatia" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Aryan Bhatia</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember11} alt="Md Sahir" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Md Sahir</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember13} alt="Abhishek Pandey" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Abhishek Pandey</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember14} alt="Yash Roy" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Yash Roy</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember17} alt="Anubhav Kaushal" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Anubhav Kaushal</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember21} alt="Vishwas Nagar" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Vishwas Nagar</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember22} alt="Sujal Tiwari" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Sujal Tiwari</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember24} alt="Bhavesh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Bhavesh </h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember26} alt="Mudit Mishra" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Mudit Mishra</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember27} alt="Amit Batham" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Amit Batham</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember28} alt="Himani Sahu" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Himani Sahu</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember29} alt="Vaishnavi Srivastava" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Vaishnavi Srivastava</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember30} alt="Yash Mishra" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Yash Mishra</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember31} alt="Akhilesh Toranmal" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akhilesh Toranmal</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember32} alt="Tikam Singh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Tikam Singh</h3>
                  <div className="team-card-role">Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember35} alt="Raj Kumar Prajapati" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Raj Kumar Prajapati</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember36} alt="Ayush Yadav" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Ayush Yadav</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember37} alt="Mayank Verma" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Mayank Verma</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>


              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember48} alt="Sarthak Adaniya" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Sarthak Adaniya</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember50} alt="Yogesh Sonar" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Yogesh Sonar</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember3} alt="Abhay Singh Pate" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Abhay Singh Pate</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember51} alt="Abhishek Zala" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Abhishek Zala</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember52} alt="Ifran Khan" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Ifran Khan</h3>
                  <div className="team-card-role">Jr. Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember53} alt="Parmaan" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Parmaan</h3>
                  <div className="team-card-role">Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember54} alt="Sangam Raj Yadav" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Sangam Raj Yadav</h3>
                  <div className="team-card-role">Jr.Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember55} alt="Shovan Pal" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Shovan Pal</h3>
                  <div className="team-card-role">Jr.Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember56} alt="Simranjeet Singh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Simranjeet Singh</h3>
                  <div className="team-card-role">Jr.Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember57} alt="Umesh Kumar Bhagat" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Umesh Kumar Bhagat</h3>
                  <div className="team-card-role">Jr.Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember58} alt="Harbhajan Singh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Harbhajan Singh</h3>
                  <div className="team-card-role">Texturing Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>



            </TeamCarousel>

            <div className="mb-4 mt-4">
              <h3>Modelling Team
              </h3>
            </div>
            <TeamCarousel>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember41} alt="Kaustav Chakraborty" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Kaustav Chakraborty</h3>
                  <div className="team-card-role">Modelling Manager</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember46} alt="Abhishek Saini" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Abhishek Saini</h3>
                  <div className="team-card-role">QA manager and Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember15} alt="Shabaj Ansari" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Shabaj Ansari</h3>
                  <div className="team-card-role">Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember16} alt="Atul Kujur" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Atul Kujur</h3>
                  <div className="team-card-role">Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember20} alt="Mukul Bhati" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Mukul Bhati</h3>
                  <div className="team-card-role">Jr. Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember19} alt="Anmoldeep Singh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Anmoldeep Singh</h3>
                  <div className="team-card-role">Jr. Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember23} alt="Deepak Saraswat" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Deepak Saraswat</h3>
                  <div className="team-card-role">Jr. Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember25} alt="Samiddha Bhattacharya" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Samiddha Bhattacharya</h3>
                  <div className="team-card-role">Jr. Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember12} alt="Prasham Chakraborty" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Prasham Chakraborty</h3>
                  <div className="team-card-role">Jr. Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember59} alt="Jitender Singh" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Jitender Singh</h3>
                  <div className="team-card-role">Sr. Modelling Artist</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
            </TeamCarousel>
            <div className="mb-4 mt-4">
              <h3>Human Resources Team</h3>
            </div>
            <TeamCarousel>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember1} alt="Akriti Sood" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Akriti Sood</h3>
                  <div className="team-card-role">Human Resource Executive</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember40} alt="Mahima Sharma" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Mahima Sharma</h3>
                  <div className="team-card-role">Human Resource Executive</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember49} alt="Nishita Bhadwal" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Nishita Bhadwal</h3>
                  <div className="team-card-role">Talent Acquisition Associate</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>

            </TeamCarousel>
            <div className="mb-4 mt-4">
              <h3>Marketing Team</h3>
            </div>
            <TeamCarousel>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="team-card">
                <div className="team-card-img-wrap">
                  <NextImage src={teamMember33} alt="Rajinder Yadav" className="team-card-img" />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">Rajinder Yadav</h3>
                  <div className="team-card-role">Web & Social Media Coordinator</div>
                  {/* <p className="team-card-bio">abcd</p> */}
                </div>
              </motion.div>
            </TeamCarousel>
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
