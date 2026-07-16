import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import LogoMain from "../images/logo-white.png";


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
                {/* <a href="#" className="footer-social-btn"><svg viewBox="0 0 24 24" fill="currentColor" style={{width:"20px",height:"20px"}}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a> */}
                <a href="https://www.linkedin.com/company/zentroid" className="footer-social-btn"><Linkedin className="w-5 h-5" /></a>
                <a href="https://www.instagram.com/zentroid.studios/" className="footer-social-btn"><Instagram className="w-5 h-5" /></a>
                {/* <a href="#" className="footer-social-btn"><Facebook className="w-5 h-5" /></a> */}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li><Link href="/our-service" className="footer-link">Low-Poly 3D Models
                </Link></li>
                <li><Link href="/our-service" className="footer-link">3D Scan-Clean Ups
                </Link></li>
                <li><Link href="/our-service" className="footer-link">3D Fashion Models
                </Link></li>
                <li><Link href="/our-service" className="footer-link">Render Ready 3D Models
                </Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-list">
                <li><Link href="/portfolio" className="footer-link">Portfolio</Link></li>
                <li><Link href="/about-us" className="footer-link">About Us</Link></li>
                <li><Link href="/gallery" className="footer-link">Gallery</Link></li>
                <li><Link href="/our-team" className="footer-link">Our Team</Link></li>
                <li><Link href="/contact" className="footer-link">
                  Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="footer-heading">Contact</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <Mail className="footer-contact-icon" />
                  <a href="mailto:shaguna@zentroid.com" className="footer-link">shaguna@zentroid.com</a>
                </li>
                {/* <li className="footer-contact-item">
                  <Phone className="footer-contact-icon" />
                  <a href="tel:+1234567890" className="footer-link">+1 (234) 567-890</a>
                </li> */}
                <li className="footer-contact-item">
                  <MapPin className="footer-contact-icon" />
                  <span>Zentroid Studios Pvt. Ltd., S.A, S Infotech, World Tech 67, Sahibzada Ajit Singh Nagar, Punjab 160062</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-inner">
              <p className="footer-copy">© 2026 Zentroid Studios Pvt Ltd.</p>
              <div className="footer-bottom-links">
                <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
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
