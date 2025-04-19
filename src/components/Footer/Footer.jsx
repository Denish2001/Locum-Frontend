import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#093C2E"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#093C2E"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#093C2E"></path>
        </svg>
      </div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Our Services</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Get Help</h4>
            <ul className="footer-links">
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/shipping" className="footer-link">Shipping</Link></li>
              <li><Link to="/returns" className="footer-link">Returns</Link></li>
            </ul>
          </div>
          
          {/* Resources Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/developers" className="footer-link">Developers</Link></li>
              <li><Link to="/docs" className="footer-link">Documentation</Link></li>
              <li><Link to="/support" className="footer-link">Support</Link></li>
            </ul>
          </div>
          
          {/* Newsletter + Socials */}
          <div className="footer-col">
            <h4 className="footer-heading">Join Our Community</h4>
            <div className="footer-socials">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
            
            <div className="footer-newsletter">
              <p>Get the latest updates</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="newsletter-input" 
                  required 
                />
                <button type="submit" className="newsletter-button">
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Locum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;