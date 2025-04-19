import React from 'react';
import { FaUserMd, FaClinicMedical, FaMobileAlt, FaSearchLocation } from 'react-icons/fa';
import { MdHealthAndSafety, MdOutlineVerifiedUser } from 'react-icons/md';
import { GiHospitalCross } from 'react-icons/gi';
import heroImage from '../../assets/Team.jpg'; // Replace with your image
import './Hero.css'; // Import your CSS file
import Testimonials from '../Testimonials/Testimonials'; // Import Testimonials component

const Hero = () => {
  return (
    <section className="locum-hero">
      {/* Background Gradient */}
      <div className="locum-hero-gradient"></div>
      
      {/* Hero Content */}
      <div className="locum-hero-container">
        <div className="locum-hero-content">
          <div className="locum-hero-badge">
            <MdOutlineVerifiedUser className="icon" />
            <span>Trusted Healthcare Staffing Platform</span>
          </div>
          
          <h1>
            <span>Bridging Kenya's</span>
            <span className="highlight">Healthcare Gap</span>
          </h1>
          
          <p className="locum-hero-subtitle">
            Connecting qualified medical professionals with facilities in need. 
            Flexible staffing solutions for hospitals, clinics, and homecare.
          </p>
          
          <div className="locum-hero-cta">
            <a href="/signup" className="locum-primary-btn">
              Find Staff
            </a>
            <a href="/register" className="locum-secondary-btn">
              Join as Professional
            </a>
          </div>
          
          {/* Stats Grid */}
          <div className="locum-hero-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <FaUserMd />
              </div>
              <div className="stat-content">
                <span className="stat-number">1,500+</span>
                <span className="stat-label">Verified Professionals</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <FaClinicMedical />
              </div>
              <div className="stat-content">
                <span className="stat-number">200+</span>
                <span className="stat-label">Partner Facilities</span>
              </div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <GiHospitalCross />
              </div>
              <div className="stat-content">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Urgent Coverage</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="locum-hero-image">
          <img src={heroImage} alt="Healthcare professionals working together" />
          <div className="image-highlight"></div>
          
          {/* Floating Features */}
          <div className="locum-floating-feature feature-1">
            <div className="feature-icon">
              <FaMobileAlt />
            </div>
            <p>Instant mobile access</p>
          </div>
          
          <div className="locum-floating-feature feature-2">
            <div className="feature-icon">
              <MdHealthAndSafety />
            </div>
            <p>Verified credentials</p>
          </div>
          
          <div className="locum-floating-feature feature-3">
            <div className="feature-icon">
              <FaSearchLocation />
            </div>
            <p>Nationwide coverage</p>
          </div>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="locum-wave-divider">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#093C2E"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#093C2E"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#093C2E"></path>
        </svg>
      </div>
    </section>
    
  );
};

export default Hero;