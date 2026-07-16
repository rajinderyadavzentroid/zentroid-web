import Head from "next/head";
import Layout from "@/src/component/Layout";
import { motion } from "framer-motion";
import { CalendarDays, Images } from "lucide-react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";

// const categories = ["All Events", "Team Outings", "Celebrations", "Festivals", "Workshops", "Office Life"];
const categories = ["All Events", "Team Outings", "Celebrations", "Festivals", "Office Life"];

const galleryImages = [
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-1.webp", large: true },
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-2.webp" },
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-3.webp" },
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-4.webp" },
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-5.webp" },
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-6.webp" },
  { title: "1 Year Anniversary", date: "22 Sept 2025", category: "Celebrations", image: "/images/gallery/anniversary-2025-7.webp" },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-3.webp", large: true },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-2.webp" },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-1.webp" },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-4.webp" },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-5.webp" },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-6.webp" },
  { title: "Diwali Celebration", date: "18 Oct, 2025", category: "Festivals", image: "/images/gallery/diwali-2025-10.webp" },
  { title: "Independence Day", date: "14 Aug 2025", category: "Festivals", image: "/images/gallery/independence-2025-1.webp", large: true },
  { title: "Independence Day", date: "14 Aug 2025", category: "Festivals", image: "/images/gallery/independence-2025-2.webp" },
  { title: "Independence Day", date: "14 Aug 2025", category: "Festivals", image: "/images/gallery/independence-2025-3.webp" },
  { title: "Independence Day", date: "14 Aug 2025", category: "Festivals", image: "/images/gallery/independence-2025-4.webp" },

  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-1.webp", large: true },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-2.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-3.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-4.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-5.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-6.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-7.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-8.webp" },
  { title: "Shimla Trip", date: "30 Nov 2025", category: "Team Outings", image: "/images/gallery/shimla-2025-9.webp" },
  { title: "Tambola Night", date: "19 Jul 2025", category: "Office Life", image: "/images/gallery/tambola-2025-1.webp", large: true },
  { title: "Tambola Night", date: "19 Jul 2025", category: "Office Life", image: "/images/gallery/tambola-2025-2.webp" },
  { title: "Tambola Night", date: "19 Jul 2025", category: "Office Life", image: "/images/gallery/tambola-2025-3.webp" },
  { title: "Tambola Night", date: "19 Jul 2025", category: "Office Life", image: "/images/gallery/tambola-2025-4.webp" },
  { title: "Tambola Night", date: "19 Jul 2025", category: "Office Life", image: "/images/gallery/tambola-2025-5.webp" },
  { title: "Tambola Night", date: "19 Jul 2025", category: "Office Life", image: "/images/gallery/tambola-2025-6.webp" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Events");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === "All Events"
    ? galleryImages
    : galleryImages.filter((item) => item.category === activeCategory);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Gallery - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="Gallery Zentroid Studios Private Limited is a Chandigarh-based 3D company. We deliver exceptional 3D models, scan clean-ups, and fashion visualizations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://zentroid.com/gallery" />
        <meta property="og:url" content="https://zentroid.com/gallery" />
        <meta property="og:title" content="Gallery - Zentroid Studios Pvt Ltd" />
        <meta property="og:description" content="Gallery Zentroid Studios Private Limited is a Chandigarh-based 3D company." />
        <meta property="og:image" content="https://zentroid.com/socials/social-icon.jpg" />
      </Head>
      <Layout>

        {/* Hero */}
        <section className="glr-hero-section">
          <div className="glr-hero-blob glr-hero-blob-1" />
          <div className="glr-hero-blob glr-hero-blob-2" />
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glr-hero-content"
            >

              <h1 className="glr-hero-title">
                Our Moments,{" "}
                <span className="glr-hero-title-yellow">Our Story</span>
              </h1>
              <p className="glr-hero-desc">
                From team celebrations to learning sessions and fun-filled events — these moments make us who we are.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Gallery */}
        <section className="glr-main-section">
          <Container>

            {/* Filter */}
            <div className="glr-filter">
              {categories.map((item) => (
                <button
                  key={item}
                  className={`glr-filter-btn ${activeCategory === item ? "glr-filter-btn-active" : ""}`}
                  onClick={() => setActiveCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="glr-grid">
              {filteredImages.map((item, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className={`glr-card ${item.large ? "glr-card-large" : ""}`}
                  onClick={() => setSelectedImage(item)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="glr-card-overlay">
                    <span className="glr-card-cat">{item.category}</span>
                    <h4 className="glr-card-title">{item.title}</h4>
                    <span className="glr-card-date">
                      <CalendarDays size={14} />
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredImages.length === 0 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glr-empty">
                No photos in this category yet.
              </motion.p>
            )}

            <div className="text-center mt-5">
              <button className="glr-load-btn">Load More</button>
            </div>

          </Container>
        </section>

        {/* CTA */}
        <section className="glr-cta-section">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glr-cta-box"
            >
              <div className="glr-cta-blob glr-cta-blob-1" />
              <div className="glr-cta-blob glr-cta-blob-2" />
              <div className="glr-cta-inner">
                <h2 className="glr-cta-title">Want to Be Part of Our Story?</h2>
                <p className="glr-cta-desc">Join our team and create memories that last a lifetime.</p>
                <Link href="/contact">
                  <button className="glr-cta-btn">Get in Touch</button>
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>

      </Layout>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999, padding: "20px"
          }}
        >
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute", top: 20, right: 28,
              background: "none", border: "none", color: "#fff",
              fontSize: 36, cursor: "pointer", lineHeight: 1
            }}
          >&times;</button>
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 8, objectFit: "contain" }}
          />
        </div>
      )}

    </>
  );
}
