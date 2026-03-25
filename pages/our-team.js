import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Award, Briefcase, Users, TrendingUp, Instagram } from "lucide-react";
import { Container } from "react-bootstrap";
import NextImage from "next/image";
import ShagunaKhetarpal from "@/src/images/shaguna-khetarpal.jpg";

export default function OurTeam() {

  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      bio: "Award-winning 3D artist with 10+ years of experience in product visualization and game design.",
      image: "https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Marcus Johnson",
      role: "Lead 3D Modeler",
      bio: "Specialized in architectural visualization and environment design with a passion for detail.",
      image: "https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      social: { linkedin: "#" },
    },
    {
      name: "Emma Rodriguez",
      role: "Senior 3D Artist",
      bio: "Expert in character modeling and texturing with experience in AAA game development.",
      image: "https://images.unsplash.com/photo-1592206934769-67dc0e88b5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Alex Kim",
      role: "3D Designer",
      bio: "Creative designer focusing on product modeling and AR/VR experiences for innovative brands.",
      image: "https://images.unsplash.com/photo-1770894807442-108cc33c0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Jessica Williams",
      role: "Project Manager",
      bio: "Ensuring smooth project delivery and client satisfaction with excellent communication skills.",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "David Park",
      role: "Technical Artist",
      bio: "Bridging art and technology with expertise in real-time rendering and optimization.",
      image: "https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
      social: { linkedin: "#" },
    },
  ];

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
                <motion.a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGUGbFVomdF5AAAAZ0F1qPwvNCTWZuhykCOW8dn1Wvr5ob-tCHN3UjKT48ClndU2EXaVOk567JYEzMbzxfil2KXdb_md0YYkRC9SeOthtbrGxDzHbs7SUSzgGpaAPut1yPu4T4=&original_referer=https://zentroid.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshagunakhetarpal%2F" whileHover={{ scale: 1.1, x: 5 }} className="founder-side-social-btn">
                  <Linkedin className="founder-side-social-icon" />
                </motion.a>
                <motion.a href="https://www.instagram.com/shaguna_khetarpal" whileHover={{ scale: 1.1, x: 5 }} className="founder-side-social-btn">
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
                        <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGUGbFVomdF5AAAAZ0F1qPwvNCTWZuhykCOW8dn1Wvr5ob-tCHN3UjKT48ClndU2EXaVOk567JYEzMbzxfil2KXdb_md0YYkRC9SeOthtbrGxDzHbs7SUSzgGpaAPut1yPu4T4=&original_referer=https://zentroid.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshagunakhetarpal%2F" className="founder-mobile-social-btn"><Linkedin className="founder-mobile-social-icon" /></a>
                        <a href="https://www.instagram.com/shaguna_khetarpal" className="founder-mobile-social-btn"><Instagram className="founder-mobile-social-icon" /></a>
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
            <div className="team-grid">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="team-card"
                >
                  <div className="team-card-img-wrap">
                    <img src={member.image} alt={member.name} className="team-card-img" />
                  </div>
                  <div className="team-card-body">
                    <h3 className="team-card-name">{member.name}</h3>
                    <div className="team-card-role">{member.role}</div>
                    <p className="team-card-bio">{member.bio}</p>
                    <div className="team-card-socials">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="team-social-btn">
                          <Linkedin className="team-social-icon" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="team-social-btn">
                          <Twitter className="team-social-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
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
