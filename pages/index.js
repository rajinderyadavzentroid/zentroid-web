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
import { useRouter } from "next/navigation";
import Image from "next/image";
import Favicon from "../src/images/favicon.ico";

function ZentroidPageLoader() {
  return (
    <div className="zentroid-loader">
      <div className="zentroid-loader-ring" />
      <div className="zentroid-loader-text">Zentroid Studios</div>
    </div>
  );
}

const ModelViewer = dynamic(() => import("@/src/component/ModelViewer"), {
  ssr: false,
  loading: () => null,
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
      { rootMargin: "200px" }
    );

    // If already in viewport on mount (e.g. model switched while scrolled away), show immediately
    const rect = ref.current.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      setVisible(true);
    } else {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="lazy-model-wrap">
      {visible ? <ModelViewer {...props} /> : <ZentroidPageLoader />}
    </div>
  );
}

export default function Home() {
  const router = useRouter();

  const models = [
    {
      id: 1,
      name: "Fendi Bag",
      category: "Fashion",
      glb: "/models/fendi-bag.glb",
      poster: "/models/fendi-bag.png",
      viewerProps: {
        scale: 6,
        position: [0, -0.2, 0],
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
        scale: 8,
        position: [0, -0.2, 0],
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
        scale: 3,
        position: [0, -0.3, 0],
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
        scale: 0.06,
        position: [0, -0.01, 0],
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
        position: [0, -0.001, 0],
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
        scale: 6,
        position: [0, -0.3, 0],
        cameraPosition: [0, 1, 8],
        fov: 20,
      },
    },
  ];

  const services = [
    {
      title: "3D Modeling",
      description: "High-quality 3D models for any industry.",
      icon: Box,
    },
    {
      title: "Product Visualization",
      description: "Stunning product renders for your products.",
      icon: Package,
    },
    {
      title: "Game Assets",
      description: "Optimized game-ready assets.",
      icon: Gamepad2,
    },
    {
      title: "Architectural Models",
      description: "Detailed architectural visualizations.",
      icon: Building2,
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "Gaming Chair",
      category: "Furniture",
      image:
        "https://cdnb.artstation.com/p/assets/covers/images/090/414/647/smaller_square/zentroid-studios-zentroid-studios-02-3.jpg?1753857614",
      link: "https://www.artstation.com/artwork/ZlEXw8",
    },
    {
      id: 2,
      title: "Kuboraum J9 Sun",
      category: "Eyewear",
      image:
        "https://cdnb.artstation.com/p/assets/covers/images/090/022/269/smaller_square/zentroid-studios-zentroid-studios-seq0677.jpg?1752658538",
      link: "https://www.artstation.com/artwork/8BVGKO",
    },
    {
      id: 3,
      title: "Nike Air DT Max 96 Colorado Away Sneakers",
      category: "Shoes",
      image:
        "https://cdnb.artstation.com/p/assets/covers/images/089/986/675/smaller_square/zentroid-studios-zentroid-studios-1-1.jpg?1752557011",
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
      content:
        "Zentroid delivered exceptional 3D models that exceeded our expectations.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "TechVision Inc.",
      rating: 5,
      content:
        "Working with Zentroid transformed our product visualization pipeline.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Game Developer",
      company: "NexGen Games",
      rating: 5,
      content:
        "The game assets from Zentroid are perfectly optimized and look stunning.",
    },
  ];

  const [selectedModel, setSelectedModel] = useState(0);
  const [heroKey, setHeroKey] = useState(0);
  const [showcaseKey, setShowcaseKey] = useState(0);
  const [modelLoading, setModelLoading] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  const activeModel = models[selectedModel];

  const heroCanvasRef = useRef(null);

  useEffect(() => {
    const restoreHero = () => setHeroKey((prev) => prev + 1);

    const handleVisibility = () => { if (!document.hidden) restoreHero(); };

    window.addEventListener("pageshow", restoreHero);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pageshow", restoreHero);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const wrap = heroCanvasRef.current;
    if (!wrap) return;
    const canvas = wrap.querySelector("canvas");
    if (!canvas) return;
    const handleLost = () => setTimeout(() => setHeroKey((prev) => prev + 1), 100);
    canvas.addEventListener("webglcontextlost", handleLost);
    return () => canvas.removeEventListener("webglcontextlost", handleLost);
  }, [heroKey]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  const safeSelectModel = (index) => {
    if (modelLoading) return;
    if (index === selectedModel) return;

    setModelLoading(true);
    setSelectedModel(index);
    setShowcaseKey((prev) => prev + 1);
    setHeroKey((prev) => prev + 1);

    setTimeout(() => {
      setModelLoading(false);
    }, 1200);
  };

  const handleNext = () => {
    if (modelLoading) return;
    safeSelectModel((selectedModel + 1) % models.length);
  };

  const handlePrev = () => {
    if (modelLoading) return;
    safeSelectModel((selectedModel - 1 + models.length) % models.length);
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/shaguna-zentroid/30min",
      });
    }
  };

  console.log('test live');


  return (
    <>
      <Head>
        <title>Home - Zentroid Studios Pvt Ltd</title>
        <meta
          name="description"
          content="Professional 3D modeling services, product visualization, game assets, and architectural models."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
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
            <div className="hero-grid">
              {/* Left Side */}
              <div className="hero-left">
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
                  <button className="hero-btn-primary"><span className="hero-btn-inner" onClick={() => router.push("/portfolio")}>View Portfolio <ArrowRight className="hero-btn-icon" /></span></button>
                  <button className="hero-btn-secondary"><span className="hero-btn-inner" onClick={() => router.push("/contact")}>Start a Project <ArrowRight className="hero-btn-icon" /></span></button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="hero-stats">
                  <div><div className="hero-stat-number">500+</div><div className="hero-stat-label">Projects Completed</div></div>
                  <div><div className="hero-stat-number">100+</div><div className="hero-stat-label">Happy Clients</div></div>
                  <div><div className="hero-stat-number">5 Years</div><div className="hero-stat-label">Experience</div></div>
                </motion.div>
              </div>

              {/* Right Side */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="hero-right">
                <div className="hero-img-glow" />
                <div className="hero-img-group">
                  <div className="hero-img-corner hero-img-corner-tl" />
                  <div className="hero-img-corner hero-img-corner-br" />
                  <div className="hero-img-card">
                    <div className="hero-img-overlay" />
                    <div className="hero-img-wrap" ref={heroCanvasRef}>
                      <ModelViewer
                        key={heroKey}
                        path="/models/north-face-base-camp-rolling-2.glb"
                        scale={10}
                        position={[0, -0.6, 0]}
                        cameraPosition={[0, 1, 8]}
                        fov={20}
                        enableZoom={false}
                      />
                    </div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="hero-img-bar">
                      <div className="hero-img-bar-inner">
                        <div>
                          <div className="hero-img-bar-title">Professional 3D Solutions</div>
                          <div className="hero-img-bar-sub">Bringing your vision to reality</div>
                        </div>
                        <div className="hero-img-bar-logo"><Image src={Favicon} alt="Zentroid Logo" width={120} height={40} /></div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="hero-float-card hero-float-card-left">
                    <div className="hero-float-value">98%</div>
                    <div className="hero-float-label">Success Rate</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1.4 }} className="hero-float-card hero-float-card-right">
                    <div className="hero-float-value">24/7</div>
                    <div className="hero-float-label">Support</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Container>
          <motion.div className="hero-scroll" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="hero-scroll-outer">
              <motion.div className="hero-scroll-dot" animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </div>
          </motion.div>
        </section>

        <section className="showcase-section">
          <Container>
            <div className="showcase-header">
              <span className="showcase-label">EXPLORE OUR WORK</span>
              <h2 className="showcase-title">3D Models Showcase</h2>
              <p className="showcase-desc">
                Interact with one optimized 3D model at a time.
              </p>
            </div>

            <div className="showcase-grid">
              <div className="showcase-viewer-wrap">
                <div className="showcase-viewer">
                  <div className="showcase-glass">
                    <div className="showcase-img-wrap fixed-model-box">
                      <LazyModelViewer
                        key={`${activeModel.glb}-${showcaseKey}`}
                        path={activeModel.glb}
                        scale={activeModel.viewerProps.scale}
                        position={activeModel.viewerProps.position}
                        cameraPosition={activeModel.viewerProps.cameraPosition}
                        fov={activeModel.viewerProps.fov}
                        autoRotate={true}
                        onLoaded={() => setModelLoading(false)}
                      />

                      {modelLoading && <div className="model-click-lock" />}
                    </div>
                    <div className="showcase-glow "></div>

                  </div>

                  <button
                    onClick={handlePrev}
                    className="showcase-nav-btn showcase-nav-left mobile-hide"
                    type="button"
                    disabled={modelLoading}
                  >
                    <ChevronLeft className="showcase-nav-icon" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="showcase-nav-btn showcase-nav-right mobile-hide"
                    type="button"
                    disabled={modelLoading}
                  >
                    <ChevronRight className="showcase-nav-icon" />
                  </button>
                </div>
              </div>

              <div>
                <div className="showcase-info">
                  <h3 className="showcase-model-name">{activeModel.name}</h3>
                  <span className="showcase-model-cat">
                    {activeModel.category}
                  </span>
                  <p className="showcase-model-desc">
                    Experience high-quality 3D modeling with precise detail and
                    professional execution.
                  </p>
                </div>

                <div className="showcase-gallery">
                  <h4 className="showcase-gallery-label">Browse Models</h4>

                  <div className="showcase-gallery-grid">
                    {models.map((model, index) => (
                      <button
                        key={model.id}
                        onClick={() => safeSelectModel(index)}
                        className={`showcase-thumb ${selectedModel === index
                          ? "showcase-thumb-active"
                          : ""
                          }`}
                        type="button"
                        disabled={modelLoading}
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
              <p className="services-desc">
                Comprehensive 3D modeling solutions for every industry.
              </p>
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
                    <p className="services-card-desc">
                      {service.description}
                    </p>
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
                      <img
                        src={project.image}
                        alt={project.title}
                        className="portfolio-img"
                        loading="lazy"
                      />
                    </div>

                    <div className="portfolio-overlay">
                      <div className="portfolio-overlay-content">
                        <span className="portfolio-cat-badge">
                          {project.category}
                        </span>
                        <h3 className="portfolio-card-title">
                          {project.title}
                        </h3>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-view-btn"
                        >
                          View Project{" "}
                          <ArrowRight className="portfolio-view-icon" />
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

                    <p className="testimonials-content">
                      "{testimonial.content}"
                    </p>

                    <div className="testimonials-author">
                      <div className="testimonials-author-name">
                        {testimonial.name}
                      </div>
                      <div className="testimonials-author-role">
                        {testimonial.role}
                      </div>
                      <div className="testimonials-author-company">
                        {testimonial.company}
                      </div>
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
              Let’s discuss your project and create stunning 3D models.
            </p>

            <div className="cta-btns">
              <button
                className="cta-btn-primary"
                onClick={() => router.push("/contact")}
                type="button"
              >
                <span className="cta-btn-inner">
                  <Mail className="cta-btn-icon" />
                  Start Your Project
                  <ArrowRight className="cta-btn-arrow" />
                </span>
              </button>

              <button
                className="cta-btn-secondary"
                onClick={openCalendly}
                disabled={!calendlyReady}
                type="button"
              >
                <span className="cta-btn-inner">
                  <MessageCircle className="cta-btn-icon" />
                  {calendlyReady ? "Schedule a Call" : "Loading..."}
                  <ArrowRight className="cta-btn-arrow" />
                </span>
              </button>
            </div>
          </div>
        </section>

        <style jsx global>{`
          .hero-img-wrap,
          .showcase-img-wrap,
          .fixed-model-box {
            width: 100%;
            height: 765px;
            min-height: 765px;
            position: relative;
            overflow: hidden;
            contain: layout paint size;
            transform: translateZ(0);
          }

          .lazy-model-wrap,
          .model-viewer-safe {
            width: 100%;
            height: 100%;
            min-height: inherit;
            position: relative;
            overflow: hidden;
          }

          .model-viewer-safe canvas {
            width: 100% !important;
            height: 100% !important;
            display: block;
            touch-action: none;
            outline: none;
          }

          .zentroid-loader {
            width: 100%;
            height: 100%;
            min-height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            background: radial-gradient(
              circle,
              rgba(255, 214, 70, 0.14) 0%,
              rgba(0, 0, 0, 0) 55%
            );
          }

          .zentroid-loader-ring {
            width: 62px;
            height: 62px;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.16);
            border-top-color: #f5c542;
            border-right-color: #f5c542;
            animation: zentroidSpin 0.9s linear infinite;
            margin-bottom: 16px;
          }

          .zentroid-loader-text {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: 0.5px;
            color: #ffffff;
            animation: zentroidPulse 1.4s ease-in-out infinite;
          }

          .model-click-lock {
            position: absolute;
            inset: 0;
            z-index: 20;
            pointer-events: all;
            background: transparent;
          }

          .showcase-thumb {
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.15);
            background: #111;
            cursor: pointer;
          }

          .showcase-thumb:disabled,
          .showcase-nav-btn:disabled {
            pointer-events: none;
            opacity: 0.65;
          }

          .showcase-thumb-img {
            width: 100%;
            height: 100%;
            min-height: 110px;
            object-fit: cover;
            display: block;
          }

          .showcase-thumb-active {
            border-color: #f5c542;
            box-shadow: 0 0 0 2px rgba(245, 197, 66, 0.35);
          }

          @keyframes zentroidSpin {
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes zentroidPulse {
            0%,
            100% {
              opacity: 0.65;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.04);
            }
          }

          @media (max-width: 768px) {
            .hero-img-wrap,
            .showcase-img-wrap,
            .fixed-model-box {
              height: 360px;
              min-height: 360px;
            }

            .showcase-thumb-img {
              min-height: 90px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}