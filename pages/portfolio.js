import Head from "next/head";
import Layout from "@/src/component/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Portfolio() {

  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    { id: 1, title: "Modern Tech Device", category: "Product Models", image: "https://images.unsplash.com/photo-1752134594148-11db6ad62ab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "High-fidelity product render" },
    { id: 2, title: "Futuristic Character", category: "Game Assets", image: "https://images.unsplash.com/photo-1758862493310-5e54994adf95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Game-ready character model" },
    { id: 3, title: "Modern Building Design", category: "Architecture", image: "https://images.unsplash.com/photo-1760801802787-86f7958c439e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Architectural visualization" },
    { id: 4, title: "Abstract Concept", category: "Concept Models", image: "https://images.unsplash.com/photo-1760563368624-31dc3aabd808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Futuristic concept design" },
    { id: 5, title: "Minimalist Product", category: "Product Models", image: "https://images.unsplash.com/photo-1658526064786-63d6e3603215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Clean product visualization" },
    { id: 6, title: "Fantasy Environment", category: "Game Assets", image: "https://images.unsplash.com/photo-1728198349686-c51f8899d2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Game environment scene" },
    { id: 7, title: "Colorful Shapes", category: "Concept Models", image: "https://images.unsplash.com/photo-1751644332113-2004a1b143f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Abstract 3D composition" },
    { id: 8, title: "Interior Space", category: "Architecture", image: "https://images.unsplash.com/photo-1633449227338-45d2df8c37b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Modern interior design" },
    { id: 9, title: "Tech Gadget", category: "Product Models", image: "https://images.unsplash.com/photo-1543493251-bc3e68468d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", description: "Product photography style" },
  ];

  const categories = ["All", "Product Models", "Game Assets", "Architecture", "Concept Models"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="Our Portfolio Designs Crafted with Detail Purpose Furniture Gaming Chair NoaiChairGaming chair+3 more Eyewear Kuboraum J9 Sun NoaiKuboraumSunglasses+6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zentroid.com/portfolio" />
        <meta property="og:url" content="https://zentroid.com/portfolio" />
        <meta property="og:title" content="Portfolio - Zentroid Studios Pvt Ltd" />
        <meta property="og:description" content="Our Portfolio Designs Crafted with Detail Purpose Furniture Gaming Chair NoaiChairGaming chair+3 more Eyewear Kuboraum J9 Sun NoaiKuboraumSunglasses+6" />
        <meta property="og:image" content="https://zentroid.com/socials/social-icon.jpg" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="pf-hero-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="pf-hero-content">
              <h1 className="pf-hero-title">Our Portfolio</h1>
              <p className="pf-hero-desc">Explore our collection of stunning 3D models and visualizations</p>
            </motion.div>
          </Container>
        </section>

        {/* Category Filter */}
        <section className="pf-filter-section">
          <Container>
            <div className="pf-filter-wrap">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`pf-filter-btn ${activeCategory === category ? "pf-filter-btn-active" : ""}`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </Container>
        </section>

        {/* Projects Grid */}
        <section className="pf-grid-section">
          <Container>
            <motion.div layout className="pf-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="pf-card"
                >
                  <div className="pf-card-img-wrap">
                    <img src={project.image} alt={project.title} className="pf-card-img" />
                  </div>
                  <div className="pf-card-overlay">
                    <div className="pf-card-overlay-content">
                      <div className="pf-card-cat">{project.category}</div>
                      <h3 className="pf-card-title">{project.title}</h3>
                      <p className="pf-card-desc">{project.description}</p>
                      <button className="pf-card-view-btn">
                        <ZoomIn className="pf-card-view-icon" /> View Details
                      </button>
                    </div>
                  </div>
                  <div className="pf-card-badge">{project.category}</div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pf-empty">
                <p className="pf-empty-text">No projects found in this category</p>
              </motion.div>
            )}
          </Container>
        </section>

        {/* CTA Section */}
        <section className="pf-cta-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="pf-cta-content">
              <h2 className="pf-cta-title">Like What You See?</h2>
              <p className="pf-cta-desc">Let's create something amazing together</p>
              <Link href="/contact">
                <button className="pf-cta-btn">Start Your Project</button>
              </Link>
            </motion.div>
          </Container>
        </section>

      </Layout>
    </>
  );
}
