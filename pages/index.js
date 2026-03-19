import Head from "next/head";
import Layout from "@/src/component/Layout";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, Box, Package, Gamepad2, Building2, Quote, Star, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";

const ModelViewer = dynamic(() => import("@/src/component/ModelViewer"), { ssr: false });
const ModelThumb = dynamic(() => import("@/src/component/ModelViewer").then(m => ({ default: m.ModelThumb })), { ssr: false });

export default function Home() {

  const models = [
    { id: 1, name: "Fendi Bag", category: "Fashion", glb: "/models/fendi-bag.glb" },         // Replace: /models/model-2.glb
    { id: 2, name: "Modern Tech Product", category: "Product Design", glb: "/models/north-face-base-camp-rolling.glb" },  // Replace: /models/model-3.glb
    { id: 3, name: "Architectural Render", category: "Architecture", glb: "/models/fendi-bag.glb" },   // Replace: /models/model-4.glb
    { id: 4, name: "Game Character", category: "Gaming", glb: "/models/fendi-bag.glb" },              // Replace: /models/model-5.glb
    { id: 5, name: "VR Experience", category: "AR/VR", glb: "/models/fendi-bag.glb" },               // Replace: /models/model-6.glb
    { id: 6, name: "Industrial Design", category: "Product Design", glb: "/models/fendi-bag.glb" },   // Replace: /models/model-7.glb
  ];

  const services = [
    { title: "3D Modeling", description: "High-quality 3D models for any industry with precise detail and professional execution.", icon: Box },
    { title: "Product Visualization", description: "Stunning product renders that showcase your items in the best possible light.", icon: Package },
    { title: "Game Assets", description: "Optimized game-ready assets for any engine including Unity and Unreal.", icon: Gamepad2 },
    { title: "Architectural Models", description: "Detailed architectural visualizations that bring your designs to life.", icon: Building2 },
  ];

  const portfolio = [
    { id: 1, title: "Modern Furniture Collection", category: "Product Design", image: "https://images.unsplash.com/photo-1720970228640-ac22842d782a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, title: "Futuristic Vehicle Concept", category: "Automotive", image: "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, title: "Luxury Watch Render", category: "Jewelry & Accessories", image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, title: "Sci-Fi Environment", category: "Game Assets", image: "https://images.unsplash.com/photo-1726201726432-d8725c9acacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 5, title: "Sneaker Product Visualization", category: "Fashion", image: "https://images.unsplash.com/photo-1728724794795-681832a6afd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 6, title: "Corporate Building", category: "Architecture", image: "https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  const testimonials = [
    { id: 1, name: "Sarah Johnson", role: "Creative Director", company: "PixelForge Studios", rating: 5, content: "Zentroid delivered exceptional 3D models that exceeded our expectations. The attention to detail and quality of work is unmatched in the industry." },
    { id: 2, name: "Michael Chen", role: "Product Manager", company: "TechVision Inc.", rating: 5, content: "Working with Zentroid transformed our product visualization pipeline. Their models are photorealistic and delivered on time, every time." },
    { id: 3, name: "Emily Rodriguez", role: "Game Developer", company: "NexGen Games", rating: 5, content: "The game assets from Zentroid are perfectly optimized and look stunning in our engine. They understand technical requirements like no other studio." },
  ];

  const [selectedModel, setSelectedModel] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/your-username" });
    }
  };

  const handleNext = () => setSelectedModel((prev) => (prev + 1) % models.length);
  const handlePrev = () => setSelectedModel((prev) => (prev - 1 + models.length) % models.length);

  return (
    <>
      <Head>
        <title>Home - Zentroid Studios Pvt Ltd</title>
        <meta name="description" content="From Every Angle,In Every Reality. 3D That Feels Real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg">
            <motion.div className="hero-blob hero-blob-1" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="hero-blob hero-blob-2" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="hero-blob hero-blob-3" animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          </div>
          <div className="hero-shapes">
            <motion.div className="hero-shape hero-shape-1" style={{ transformStyle: "preserve-3d" }} animate={{ y: [0, -30, 0], rotateX: [0, 360], rotateY: [0, 360] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="hero-shape hero-shape-2" animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="hero-shape hero-shape-3" animate={{ y: [0, -40, 0], rotate: [0, 180, 360] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <Container>
            <div className="hero-content">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-badge">
                <Sparkles className="hero-badge-icon" />
                <span className="hero-badge-text">Professional 3D Modeling Services</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hero-title">
                <span className="hero-title-white">High-Quality 3D Models</span>
                <br />
                <span className="hero-title-yellow">That Bring Ideas to Life</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="hero-desc">
                Transform your vision into stunning 3D reality. We create premium models for games, products, architecture, and immersive experiences.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="hero-btns">
                <button className="hero-btn-primary"><span className="hero-btn-inner">View Portfolio <ArrowRight className="hero-btn-icon" /></span></button>
                <button className="hero-btn-secondary"><span className="hero-btn-inner">Start a Project <ArrowRight className="hero-btn-icon" /></span></button>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="hero-stats">
                <div><div className="hero-stat-number">500+</div><div className="hero-stat-label">Projects Completed</div></div>
                <div><div className="hero-stat-number">100+</div><div className="hero-stat-label">Happy Clients</div></div>
                <div><div className="hero-stat-number">5 Years</div><div className="hero-stat-label">Experience</div></div>
              </motion.div>
            </div>
          </Container>
          <motion.div className="hero-scroll" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="hero-scroll-outer">
              <motion.div className="hero-scroll-dot" animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
          </motion.div>
        </section>

        {/* Showcase Section */}
        <section className="showcase-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="showcase-header">
              <span className="showcase-label">EXPLORE OUR WORK</span>
              <h2 className="showcase-title">3D Models Showcase</h2>
              <p className="showcase-desc">Interact with our premium 3D models. Rotate, zoom, and explore every detail.</p>
            </motion.div>
            <div className="showcase-grid">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="showcase-viewer-wrap">
                <div className="showcase-viewer">
                  <div className="showcase-glass">
                    <div className="showcase-img-wrap">
                      <ModelViewer
                        path={models[selectedModel].glb}
                        scale={6}
                        position={[0, 0, 0]}
                        cameraPosition={[0, 0, 10]}
                        fov={15}
                      />
                    </div>
                    <div className="showcase-glow" />
                  </div>
                  <button onClick={handlePrev} className="showcase-nav-btn showcase-nav-left"><ChevronLeft className="showcase-nav-icon" /></button>
                  <button onClick={handleNext} className="showcase-nav-btn showcase-nav-right"><ChevronRight className="showcase-nav-icon" /></button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="showcase-info">
                  <h3 className="showcase-model-name">{models[selectedModel].name}</h3>
                  <span className="showcase-model-cat">{models[selectedModel].category}</span>
                  <p className="showcase-model-desc">Experience high-quality 3D modeling with precise detail and professional execution.</p>
                </div>
                <div className="showcase-gallery">
                  <h4 className="showcase-gallery-label">Browse Models</h4>
                  <div className="showcase-gallery-grid">
                    {models.map((model, index) => (
                      <button key={model.id} onClick={() => setSelectedModel(index)} className={`showcase-thumb ${selectedModel === index ? 'showcase-thumb-active' : ''}`}>
                        <ModelThumb
                          path={model.glb}
                          scale={8}               
                          position={[0, -0.7, 0]} 
                          cameraPosition={[0, 0, 7]}
                          fov={20}
                        />
                        <div className="showcase-thumb-overlay" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>


        {/* Services Section */}
        <section className="services-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="services-header">
              <span className="services-label">OUR SERVICES</span>
              <h2 className="services-title">What We Offer</h2>
              <p className="services-desc">Comprehensive 3D modeling solutions for every industry and use case</p>
            </motion.div>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} className="services-card-wrap">
                  <div className="services-card">
                    <div className="services-card-glow" />
                    <div className="services-card-glow2" />
                    <div className="services-icon-wrap">
                      <div className="services-icon-box"><service.icon className="services-icon" /></div>
                    </div>
                    <div className="services-card-content">
                      <h3 className="services-card-title">{service.title}</h3>
                      <p className="services-card-desc">{service.description}</p>
                    </div>
                    <div className="services-card-accent" />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="services-cta">
              <button className="services-cta-btn">
                <span className="services-cta-inner">View All Services <ArrowRight className="services-cta-icon" /></span>
              </button>
            </motion.div>
          </Container>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="portfolio-header">
              <span className="portfolio-label">OUR WORK</span>
              <h2 className="portfolio-title">Featured Projects</h2>
              <p className="portfolio-desc">Explore our portfolio of stunning 3D models and visualizations</p>
            </motion.div>
            <div className="portfolio-grid">
              {portfolio.map((project, index) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} className="portfolio-card-wrap">
                  <div className="portfolio-card">
                    <div className="portfolio-img-wrap">
                      <img src={project.image} alt={project.title} className="portfolio-img" />
                    </div>
                    <div className="portfolio-overlay">
                      <div className="portfolio-overlay-content">
                        <span className="portfolio-cat-badge">{project.category}</span>
                        <h3 className="portfolio-card-title">{project.title}</h3>
                        <button className="portfolio-view-btn">View Project <ArrowRight className="portfolio-view-icon" /></button>
                      </div>
                    </div>
                    <div className="portfolio-cat-tag">{project.category}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }} className="portfolio-cta">
              <button className="services-cta-btn">
                <span className="services-cta-inner">View Full Portfolio <ArrowRight className="services-cta-icon" /></span>
              </button>
            </motion.div>
          </Container>
        </section>



        {/* Testimonials Section */}
        <section className="testimonials-section">
          <Container>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="testimonials-header">
              <span className="testimonials-label">TESTIMONIALS</span>
              <h2 className="testimonials-title">What Our Clients Say</h2>
              <p className="testimonials-desc">Trusted by leading companies across industries</p>
            </motion.div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <motion.div key={testimonial.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="testimonials-card-wrap">
                  <div className="testimonials-card">
                    <div className="testimonials-quote-bg"><Quote className="testimonials-quote-icon" /></div>
                    <div className="testimonials-card-inner">
                      <div className="testimonials-stars">
                        {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="testimonials-star" />))}
                      </div>
                      <p className="testimonials-content">"{testimonial.content}"</p>
                      <div className="testimonials-author">
                        <div className="testimonials-author-name">{testimonial.name}</div>
                        <div className="testimonials-author-role">{testimonial.role}</div>
                        <div className="testimonials-author-company">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="testimonials-card-hover" />
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="testimonials-stats">
              {[
                { label: "Client Satisfaction", value: "99%" },
                { label: "Projects Delivered", value: "500+" },
                { label: "Happy Clients", value: "150+" },
                { label: "Years Experience", value: "8+" },
              ].map((stat, index) => (
                <div key={index} className="testimonials-stat-card">
                  <div className="testimonials-stat-value">{stat.value}</div>
                  <div className="testimonials-stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </Container>
        </section>


        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-bg">
            <motion.div className="cta-blob cta-blob-1" animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="cta-blob cta-blob-2" animate={{ scale: [1, 1.3, 1], x: [0, -100, 0], y: [0, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="cta-blob cta-blob-3" animate={{ rotate: [0, 360] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
          </div>
          <div className="cta-grid-overlay">
            <div className="cta-grid-pattern" />
          </div>
          <div className="cta-content">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="cta-badge">
                <div className="cta-badge-dot" />
                <span className="cta-badge-text">Let's Create Something Amazing</span>
              </div>
              <h2 className="cta-title">
                <span className="cta-title-white">Ready to Bring Your</span>
                <br />
                <span className="cta-title-yellow">Ideas to Life?</span>
              </h2>
              <p className="cta-desc">Let's discuss your project and create stunning 3D models that exceed expectations</p>
              <div className="cta-btns">
                <button className="cta-btn-primary">
                  <span className="cta-btn-inner"><Mail className="cta-btn-icon" /> Start Your Project <ArrowRight className="cta-btn-arrow" /></span>
                </button>
                <button className="cta-btn-secondary" onClick={openCalendly} disabled={!calendlyReady}>
                  <span className="cta-btn-inner"><MessageCircle className="cta-btn-icon" /> {calendlyReady ? "Schedule a Call" : "Loading..."} <ArrowRight className="cta-btn-arrow" /></span>
                </button>
              </div>
              <div className="cta-features">
                {[
                  { label: "Fast Turnaround", desc: "Quick delivery without compromising quality", path: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { label: "Quality Guaranteed", desc: "Unlimited revisions until perfect", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Expert Team", desc: "Industry veterans with proven track record", path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                ].map((f, i) => (
                  <div key={i} className="cta-feature">
                    <div className="cta-feature-icon-wrap">
                      <svg className="cta-feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.path} /></svg>
                    </div>
                    <div className="cta-feature-label">{f.label}</div>
                    <div className="cta-feature-desc">{f.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="cta-bottom-line" />
        </section>

      </Layout>
    </>
  );
}
