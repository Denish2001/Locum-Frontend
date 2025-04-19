import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserMd, FaUserNurse } from 'react-icons/fa';
import './NavBar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items data structure
  const navItems = [
    { path: '/', label: 'Home', icon: <FaUserMd /> },
    { path: '/about', label: 'About', icon: <FaUserNurse /> },
    { path: '/services', label: 'Services', icon: <FaUserMd /> },
    { path: '/faq', label: 'FAQs', icon: <FaUserNurse /> },
    { path: '/contact', label: 'Contact', icon: <FaUserMd /> }
  ];

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`locum-navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="locum-navbar-container">
        {/* Logo */}
        <Link to="/" className="locum-navbar-logo">
          <img src="/logob_4.png" alt="Locum Health Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="locum-nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="locum-nav-item">
              <Link 
                to={item.path} 
                className={`locum-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons - Desktop */}
        <div className="locum-auth-buttons">
          <Link to="/login" className="locum-auth-btn locum-login-btn">
            Login
          </Link>
          <Link to="/signup" className="locum-auth-btn locum-signup-btn">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="locum-mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="locum-mobile-menu-overlay">
          <ul className="locum-mobile-nav-menu">
            {navItems.map((item) => (
              <li key={item.path} className="locum-mobile-nav-item">
                <Link 
                  to={item.path} 
                  className={`locum-mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="locum-mobile-auth-buttons">
              <Link to="/login" className="locum-mobile-auth-btn locum-mobile-login-btn">
                Login
              </Link>
              <Link to="/signup" className="locum-mobile-auth-btn locum-mobile-signup-btn">
                Sign Up
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;