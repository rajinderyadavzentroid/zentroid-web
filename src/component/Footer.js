import Link from "next/link";
import { Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import LogoMain from "../images/main-logo.png";


export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div>
              <Link href="/">
                <div className="footer-logo-wrapper">
                  <Image src={LogoMain} alt="Zentroid Logo" width={120} height={40} />
                </div>
              </Link>
              <p className="footer-desc">
                Creating premium 3D models and visualizations that bring your ideas to life with unmatched quality and precision.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social-btn"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="footer-social-btn"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="footer-social-btn"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="footer-social-btn"><Github className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li><Link href="/services" className="footer-link">3D Modeling</Link></li>
                <li><Link href="/services" className="footer-link">Product Visualization</Link></li>
                <li><Link href="/services" className="footer-link">Game Assets</Link></li>
                <li><Link href="/services" className="footer-link">Architectural Models</Link></li>
                <li><Link href="/services" className="footer-link">AR/VR Solutions</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-list">
                <li><Link href="/about" className="footer-link">About Us</Link></li>
                <li><Link href="/team" className="footer-link">Our Team</Link></li>
                <li><Link href="/portfolio" className="footer-link">Portfolio</Link></li>
                <li><Link href="/contact" className="footer-link">Careers</Link></li>
                <li><Link href="/contact" className="footer-link">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <a href="mailto:hello@zentroid.com" className="footer-link">hello@zentroid.com</a>
                </li>
                <li className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
                </li>
                <li className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>123 Creative Street<br />San Francisco, CA 94103</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <p className="footer-copy">© 2026 Zentroid. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">Privacy Policy</a>
                <a href="#" className="footer-bottom-link">Terms of Service</a>
                <a href="#" className="footer-bottom-link">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
