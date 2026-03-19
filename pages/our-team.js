import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { Container } from "react-bootstrap";

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
        <title>Our Team - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="From Every Angle,In Every Reality. 3D That Feels Real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
