import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import LogoMain from "../images/main-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="header-nav"
      >
        <Container>
          <div className="header-container">
            <div className="header-inner">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="header-logo-wrapper"
                >
                  <Image src={LogoMain} alt="Zentroid Logo" width={120} height={40} />
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="header-desktop-nav">
                <Link href="our-service" className={`nav-link ${isActive('our-service') ? 'nav-link-active' : ''}`}>
                  Services
                </Link>
                <Link href="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'nav-link-active' : ''}`}>
                  Portfolio
                </Link>
                <Link href="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
                  About
                </Link>
                <Link href="/team" className={`nav-link ${isActive('/team') ? 'nav-link-active' : ''}`}>
                  Team
                </Link>
                <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>
                  Contact
                </Link>
                <Link href="/contact">
                  <button className="header-cta-btn">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="header-mobile-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="header-mobile-nav"
              >
                <Link href="/services" className="mobile-nav-link">Services</Link>
                <Link href="/portfolio" className="mobile-nav-link">Portfolio</Link>
                <Link href="/about" className="mobile-nav-link">About</Link>
                <Link href="/team" className="mobile-nav-link">Team</Link>
                <Link href="/contact" className="mobile-nav-link">Contact</Link>
                <Link href="/contact">
                  <button className="mobile-cta-btn">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            )}
          </div>
        </Container>
      </motion.nav>
    </header>
  );
}
