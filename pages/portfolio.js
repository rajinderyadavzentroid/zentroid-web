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
    { id: 1, title: "Gaming Chair", category: "Furniture", image: "https://cdnb.artstation.com/p/assets/covers/images/090/414/647/smaller_square/zentroid-studios-zentroid-studios-02-3.jpg?1753857614", description: "High-fidelity gaming chair product render", link: "https://www.artstation.com/artwork/ZlEXw8" },
    { id: 2, title: "Kuboraum J9 Sun", category: "Eyewear", image: "https://cdnb.artstation.com/p/assets/covers/images/090/022/269/smaller_square/zentroid-studios-zentroid-studios-seq0677.jpg?1752658538", description: "Luxury eyewear 3D visualization", link: "https://www.artstation.com/artwork/8BVGKO" },
    { id: 3, title: "Nike Air DT Max 96 Colorado Away Sneakers", category: "Shoes", image: "https://cdnb.artstation.com/p/assets/covers/images/089/986/675/smaller_square/zentroid-studios-zentroid-studios-1-1.jpg?1752557011", description: "Photorealistic sneaker product render", link: "https://www.artstation.com/artwork/RKWWoX" },
    { id: 4, title: "Graham Fortress City GMT Red", category: "Watches", image: "https://cdnb.artstation.com/p/assets/covers/images/089/987/879/smaller_square/zentroid-studios-zentroid-studios-render-5.jpg?1752562296", description: "Premium luxury watch 3D render", link: "https://www.artstation.com/artwork/JrRR1v" },
    { id: 7, title: "Alain Mikli A0 5066", category: "Eyewear", image: "https://cdnb.artstation.com/p/assets/covers/images/090/057/605/smaller_square/zentroid-studios-zentroid-studios-1-1.jpg?1752757225", description: "Designer eyewear product visualization", link: "https://www.artstation.com/artwork/YG2YeX" },
    { id: 14, title: "Puma Speedcat OG Red Sneakers", category: "Shoes", image: "https://cdna.artstation.com/p/assets/covers/images/090/840/342/smaller_square/zentroid-studios-zentroid-studios-2-2.jpg?1755061505", description: "High-detail sneaker 3D model", link: "https://www.artstation.com/artwork/DL6N0G" },
    { id: 18, title: "Onitsuka Tiger Mexico", category: "Shoes", image: "https://cdnb.artstation.com/p/assets/covers/images/090/777/353/smaller_square/zentroid-studios-zentroid-studios-3-1.jpg?1754891891", description: "Classic sneaker product render", link: "https://www.artstation.com/artwork/dyqy3Q" },
    { id: 20, title: "Balmain Swan Sneakers", category: "Shoes", image: "https://cdna.artstation.com/p/assets/covers/images/090/414/792/smaller_square/zentroid-studios-zentroid-studios-04-5.jpg?1753858170", description: "Luxury fashion sneaker visualization", link: "https://www.artstation.com/artwork/L4yBok" },
    { id: 17, title: "Arnette Fresa", category: "Eyewear", image: "https://cdna.artstation.com/p/assets/covers/images/089/963/786/smaller_square/zentroid-studios-zentroid-studios-preview-02-4.jpg?1752494930", description: "Stylish eyewear 3D product render", link: "https://www.artstation.com/artwork/x3PNQm" },
    { id: 10, title: "Signature C de Cartier", category: "Eyewear", image: "https://cdnb.artstation.com/p/assets/covers/images/089/887/279/smaller_square/zentroid-studios-zentroid-studios-2.jpg?1752231088", description: "Iconic Cartier eyewear visualization", link: "https://www.artstation.com/artwork/Ez8O8A" },
    { id: 5, title: "Bed", category: "Furniture", image: "https://cdnb.artstation.com/p/assets/covers/images/090/414/449/smaller_square/zentroid-studios-zentroid-studios-05-1.jpg?1753856942", description: "Detailed bedroom furniture render", link: "https://www.artstation.com/artwork/qJXYge" },
    { id: 6, title: "DiorSignature S14F", category: "Eyewear", image: "https://cdna.artstation.com/p/assets/covers/images/089/859/288/smaller_square/zentroid-studios-zentroid-studios-thmnl.jpg?1752147566", description: "Elegant Dior eyewear 3D model", link: "https://www.artstation.com/artwork/6LVO20" },
    { id: 15, title: "Prada Milano", category: "Eyewear", image: "https://cdnb.artstation.com/p/assets/covers/images/089/963/907/smaller_square/zentroid-studios-zentroid-studios-preview-03-4.jpg?1752495291", description: "Premium Prada eyewear visualization", link: "https://www.artstation.com/artwork/Ez82nA" },
    { id: 11, title: "Givenchy GV 40030U", category: "Eyewear", image: "https://cdnb.artstation.com/p/assets/covers/images/089/991/831/smaller_square/zentroid-studios-zentroid-studios-01-1.jpg?1752574267", description: "High-end Givenchy eyewear render", link: "https://www.artstation.com/artwork/BkLl39" },
    { id: 8, title: "Ferragamo Buckle Leather Loafers", category: "Shoes", image: "https://cdna.artstation.com/p/assets/covers/images/090/879/370/20250814053204/smaller_square/zentroid-studios-zentroid-studios-thumbnail.jpg?1755167524", description: "Luxury leather loafers product render", link: "https://www.artstation.com/artwork/zxY0gw" },
    { id: 12, title: "Rayban Clubmaster Way", category: "Eyewear", image: "https://cdna.artstation.com/p/assets/covers/images/089/860/034/smaller_square/zentroid-studios-zentroid-studios-preview-02-3.jpg?1752149180", description: "Classic Ray-Ban eyewear 3D model", link: "https://www.artstation.com/artwork/qJnNkn" },
    { id: 9, title: "Almirah", category: "Furniture", image: "https://cdnb.artstation.com/p/assets/covers/images/090/414/023/smaller_square/zentroid-studios-zentroid-studios-4-1.jpg?1753854959", description: "Detailed wardrobe furniture visualization", link: "https://www.artstation.com/artwork/V2v4ER" },
    { id: 13, title: "Ray Ban Ferrari RB2217M", category: "Eyewear", image: "https://cdna.artstation.com/p/assets/covers/images/089/859/878/smaller_square/zentroid-studios-zentroid-studios-preview-03-2.jpg?1752148970", description: "Ray-Ban Ferrari edition eyewear render", link: "https://www.artstation.com/artwork/rlL2kO" },
    { id: 16, title: "Persol 009", category: "Eyewear", image: "https://cdna.artstation.com/p/assets/covers/images/089/859/726/smaller_square/zentroid-studios-zentroid-studios-preview-1-1.jpg?1752148633", description: "Classic Persol eyewear 3D visualization", link: "https://www.artstation.com/artwork/y4eNY5" },
    { id: 19, title: "BOSS Leather Boots", category: "Shoes", image: "https://cdna.artstation.com/p/assets/covers/images/090/415/450/20250730023446/smaller_square/zentroid-studios-zentroid-studios-05-5.jpg?1753860886", description: "Premium BOSS leather boots render", link: "https://www.artstation.com/artwork/QK6Bbl" },
  ];

  const categories = ["All", "Furniture", "Eyewear", "Shoes", "Watches"];

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
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="pf-card-view-btn">
                        <ZoomIn className="pf-card-view-icon" /> View Details
                      </a>
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
