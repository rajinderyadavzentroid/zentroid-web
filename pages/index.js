import Head from "next/head";
import Layout from "@/src/component/Layout";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Box,
  Package,
  Gamepad2,
  Building2,
  Quote,
  Star,
  Mail,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";
import Favicon from "../src/images/favicon.ico";

const ModelViewer = dynamic(() => import("@/src/component/ModelViewer"), {
  ssr: false,
  loading: () => <div className="model-loader">Loading 3D...</div>,
});

function LazyModelViewer(props) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      {visible ? <ModelViewer {...props} /> : <div className="model-loader">3D Preview</div>}
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  console.log('live test');

  const models = [
    {
      id: 1,
      name: "Fendi Bag",
      category: "Fashion",
      glb: "/models/fendi-bag.glb",
      poster: "/models/fendi-bag.png",
      viewerProps: {
        scale: 10,
        position: [0, -0.9, 0],
        cameraPosition: [0, 1, 8],
        fov: 20,
      },
    },
    {
      id: 2,
      name: "Modern Tech Product",
      category: "Product Design",
      glb: "/models/north-face-base-camp-rolling.glb",
      poster: "/models/north-face-base-camp-rolling.png",
      viewerProps: {
        scale: 10,
        position: [0, -0.7, 0],
        cameraPosition: [0, 1, 8],
        fov: 20,
      },
    },
    {
      id: 3,
      name: "Gaming Chair",
      category: "Furniture",
      glb: "/models/gaming-chair-compressed.glb",
      poster: "/models/gaming-chair-compressed.png",
      viewerProps: {
        scale: 4,
        position: [0, -0.9, 0],
        cameraPosition: [0, 1, 8],
        fov: 20,
      },
    },
    {
      id: 4,
      name: "Nike Air Sneakers",
      category: "Fashion",
      glb: "/models/nike-air-sneakers.glb",
      poster: "/models/nike-air-sneakers.png",
      viewerProps: {
        scale: 0.08,
        position: [0, -0.6, 0],
        cameraPosition: [0, 1, 10],
        fov: 20,
      },
    },
    {
      id: 5,
      name: "Kuboraum Sun",
      category: "AR/VR",
      glb: "/models/kuboraum-sun.glb",
      poster: "/models/kuboraum-sun.png",
      viewerProps: {
        scale: 0.1,
        position: [0, -0.2, 0],
        cameraPosition: [0, 1, 8],
        fov: 20,
      },
    },
    {
      id: 6,
      name: "Graham Fortress",
      category: "Product Design",
      glb: "/models/graham-fortress.glb",
      poster: "/models/graham-fortress.png",
      viewerProps: {
        scale: 8,
        position: [0, -0.8, 0],
        cameraPosition: [0, 1, 8],
        fov: 20,
      },
    },
  ];

  const services = [
    { title: "3D Modeling", description: "High-quality 3D models for any industry.", icon: Box },
    { title: "Product Visualization", description: "Stunning product renders.", icon: Package },
    { title: "Game Assets", description: "Optimized game-ready assets.", icon: Gamepad2 },
    { title: "Architectural Models", description: "Detailed architectural visualizations.", icon: Building2 },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Gaming Chair",
      category: "Furniture",
      image: "https://cdnb.artstation.com/p/assets/covers/images/090/414/647/smaller_square/zentroid-studios-zentroid-studios-02-3.jpg?1753857614",
      link: "https://www.artstation.com/artwork/ZlEXw8",
    },
    {
      id: 2,
      title: "Kuboraum J9 Sun",
      category: "Eyewear",
      image: "https://cdnb.artstation.com/p/assets/covers/images/090/022/269/smaller_square/zentroid-studios-zentroid-studios-seq0677.jpg?1752658538",
      link: "https://www.artstation.com/artwork/8BVGKO",
    },
    {
      id: 3,
      title: "Nike Air DT Max 96",
      category: "Shoes",
      image: "https://cdnb.artstation.com/p/assets/covers/images/089/986/675/smaller_square/zentroid-studios-zentroid-studios-1-1.jpg?1752557011",
      link: "https://www.artstation.com/artwork/RKWWoX",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "PixelForge Studios",
      rating: 5,
      content: "Zentroid delivered exceptional 3D models that exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "TechVision Inc.",
      rating: 5,
      content: "Their models are photorealistic and delivered on time.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Game Developer",
      company: "NexGen Games",
      rating: 5,
      content: "The game assets are perfectly optimized and look stunning.",
    },
  ];

  const [selectedModel, setSelectedModel] = useState(0);
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);

    document.head.appendChild(link);
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/shaguna-zentroid/30min",
      });
    }
  };

  const handleNext = () => setSelectedModel((prev) => (prev + 1) % models.length);
  const handlePrev = () => setSelectedModel((prev) => (prev - 1 + models.length) % models.length);

  const active = models[selectedModel];

  return (
    <>
      <Head>
        <title>Home - Zentroid Studios Pvt Ltd</title>
        <meta
          name="description"
          content="Professional 3D modeling services, product visualization, game assets, and architectural models."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className="hero-section">
          <Container>
            <div className="hero-grid">
              <div className="hero-left">
                <motion.div className="hero-badge" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <Sparkles className="hero-badge-icon" />
                  <span className="hero-badge-text">Professional 3D Modeling Services</span>
                </motion.div>

                <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="hero-title-white">High-Quality 3D Models</span>
                  <br />
                  <span className="hero-title-yellow">That Bring Ideas to Life</span>
                </motion.h1>

                <p className="hero-desc">
                  Transform your vision into stunning 3D reality. We create premium models for games, products,
                  architecture, and immersive experiences.
                </p>

                <div className="hero-btns">
                  <button className="hero-btn-primary" onClick={() => router.push("/portfolio")}>
                    <span className="hero-btn-inner">View Portfolio <ArrowRight className="hero-btn-icon" /></span>
                  </button>
                  <button className="hero-btn-secondary" onClick={() => router.push("/contact")}>
                    <span className="hero-btn-inner">Start a Project <ArrowRight className="hero-btn-icon" /></span>
                  </button>
                </div>

                <div className="hero-stats">
                  <div><div className="hero-stat-number">500+</div><div className="hero-stat-label">Projects Completed</div></div>
                  <div><div className="hero-stat-number">100+</div><div className="hero-stat-label">Happy Clients</div></div>
                  <div><div className="hero-stat-number">5 Years</div><div className="hero-stat-label">Experience</div></div>
                </div>
              </div>

              <div className="hero-right">
                <div className="hero-img-card">
                  <div className="hero-img-wrap">
                    <LazyModelViewer
                      path="/models/north-face-base-camp-rolling.glb"
                      scale={10}
                      position={[0, -0.6, 0]}
                      cameraPosition={[0, 1, 8]}
                      fov={20}
                      enableZoom={false}
                    />
                  </div>

                  <div className="hero-img-bar">
                    <div className="hero-img-bar-inner">
                      <div>
                        <div className="hero-img-bar-title">Professional 3D Solutions</div>
                        <div className="hero-img-bar-sub">Bringing your vision to reality</div>
                      </div>
                      <div className="hero-img-bar-logo">
                        <Image src={Favicon} alt="Zentroid Logo" width={120} height={40} priority />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="showcase-section">
          <Container>
            <div className="showcase-header">
              <span className="showcase-label">EXPLORE OUR WORK</span>
              <h2 className="showcase-title">3D Models Showcase</h2>
              <p className="showcase-desc">Interact with one optimized model at a time.</p>
            </div>

            <div className="showcase-grid">
              <div className="showcase-viewer-wrap">
                <div className="showcase-viewer">
                  <div className="showcase-glass">
                    <div className="showcase-img-wrap">
                      <LazyModelViewer
                        key={active.glb}
                        path={active.glb}
                        scale={active.viewerProps.scale}
                        position={active.viewerProps.position}
                        cameraPosition={active.viewerProps.cameraPosition}
                        fov={active.viewerProps.fov}
                      />
                    </div>
                  </div>

                  <button onClick={handlePrev} className="showcase-nav-btn showcase-nav-left">
                    <ChevronLeft className="showcase-nav-icon" />
                  </button>

                  <button onClick={handleNext} className="showcase-nav-btn showcase-nav-right">
                    <ChevronRight className="showcase-nav-icon" />
                  </button>
                </div>
              </div>

              <div>
                <div className="showcase-info">
                  <h3 className="showcase-model-name">{active.name}</h3>
                  <span className="showcase-model-cat">{active.category}</span>
                  <p className="showcase-model-desc">
                    Experience high-quality 3D modeling with precise detail and professional execution.
                  </p>
                </div>

                <div className="showcase-gallery">
                  <h4 className="showcase-gallery-label">Browse Models</h4>
                  <div className="showcase-gallery-grid">
                    {models.map((model, index) => (
                      <button
                        key={model.id}
                        onClick={() => setSelectedModel(index)}
                        className={`showcase-thumb ${selectedModel === index ? "showcase-thumb-active" : ""}`}
                      >
                        <img
                          src={model.poster}
                          alt={model.name}
                          className="showcase-thumb-img"
                          loading="lazy"
                        />
                        <div className="showcase-thumb-overlay" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="services-section">
          <Container>
            <div className="services-header">
              <span className="services-label">OUR SERVICES</span>
              <h2 className="services-title">What We Offer</h2>
              <p className="services-desc">Comprehensive 3D modeling solutions.</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <div key={service.title} className="services-card-wrap">
                  <div className="services-card">
                    <div className="services-icon-wrap">
                      <div className="services-icon-box">
                        <service.icon className="services-icon" />
                      </div>
                    </div>
                    <h3 className="services-card-title">{service.title}</h3>
                    <p className="services-card-desc">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="portfolio-section">
          <Container>
            <div className="portfolio-header">
              <span className="portfolio-label">OUR WORK</span>
              <h2 className="portfolio-title">Featured Projects</h2>
            </div>

            <div className="portfolio-grid">
              {portfolio.map((project) => (
                <div key={project.id} className="portfolio-card-wrap">
                  <div className="portfolio-card">
                    <div className="portfolio-img-wrap">
                      <img src={project.image} alt={project.title} className="portfolio-img" loading="lazy" />
                    </div>
                    <div className="portfolio-overlay">
                      <div className="portfolio-overlay-content">
                        <span className="portfolio-cat-badge">{project.category}</span>
                        <h3 className="portfolio-card-title">{project.title}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="portfolio-view-btn">
                          View Project <ArrowRight className="portfolio-view-icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="testimonials-section">
          <Container>
            <div className="testimonials-header">
              <span className="testimonials-label">TESTIMONIALS</span>
              <h2 className="testimonials-title">What Our Clients Say</h2>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonials-card-wrap">
                  <div className="testimonials-card">
                    <Quote className="testimonials-quote-icon" />
                    <div className="testimonials-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="testimonials-star" />
                      ))}
                    </div>
                    <p className="testimonials-content">"{testimonial.content}"</p>
                    <div className="testimonials-author">
                      <div className="testimonials-author-name">{testimonial.name}</div>
                      <div className="testimonials-author-role">{testimonial.role}</div>
                      <div className="testimonials-author-company">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              <span className="cta-title-white">Ready to Bring Your</span>
              <br />
              <span className="cta-title-yellow">Ideas to Life?</span>
            </h2>

            <p className="cta-desc">
              Let’s discuss your project and create stunning 3D models that exceed expectations.
            </p>

            <div className="cta-btns">
              <button className="cta-btn-primary" onClick={() => router.push("/contact")}>
                <span className="cta-btn-inner">
                  <Mail className="cta-btn-icon" /> Start Your Project <ArrowRight className="cta-btn-arrow" />
                </span>
              </button>

              <button className="cta-btn-secondary" onClick={openCalendly} disabled={!calendlyReady}>
                <span className="cta-btn-inner">
                  <MessageCircle className="cta-btn-icon" />
                  {calendlyReady ? "Schedule a Call" : "Loading..."}
                  <ArrowRight className="cta-btn-arrow" />
                </span>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}