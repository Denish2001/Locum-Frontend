import React from 'react';
import { FaClinicMedical, FaUserNurse, FaMobileAlt, FaBalanceScale } from 'react-icons/fa';
import { MdHealthAndSafety, MdAccessible } from 'react-icons/md';
import teamImg from '../../assets/team.jpg';
import './About.css';

const About = () => {
  return (
    <div className="locum-about-container">
      {/* Hero Section */}
      <section className="locum-about-hero">
        <div className="locum-about-hero-overlay">
          <div className="locum-about-hero-content">
            <h1 className="locum-about-hero-title">Transforming Healthcare Access in Kenya</h1>
            <p className="locum-about-hero-subtitle">Bridging the gap between healthcare professionals and communities in need</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="locum-about-problem-section">
        <div className="locum-about-container-inner">
          <h2 className="locum-about-section-title">The Healthcare Challenge in Kenya</h2>
          <div className="locum-about-stats-grid">
            <div className="locum-about-stat-item">
              <div className="locum-about-stat-icon"><FaUserNurse /></div>
              <span className="locum-about-stat-number">1:16,000</span>
              <span className="locum-about-stat-label">Doctor to Patient Ratio</span>
            </div>
            <div className="locum-about-stat-item">
              <div className="locum-about-stat-icon"><MdHealthAndSafety /></div>
              <span className="locum-about-stat-number">1:1,200</span>
              <span className="locum-about-stat-label">Nurse to Patient Ratio</span>
            </div>
            <div className="locum-about-stat-item">
              <div className="locum-about-stat-icon"><FaClinicMedical /></div>
              <span className="locum-about-stat-number">70%</span>
              <span className="locum-about-stat-label">Rural Access Challenges</span>
            </div>
          </div>
          <div className="locum-about-problem-text">
            <p>
              Kenya's healthcare system faces critical staffing shortages, with urban centers better served than rural areas where over 70% of the population struggles to access care. Our platform addresses this imbalance by connecting qualified healthcare professionals with facilities and patients in need.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="locum-about-solution-section">
        <div className="locum-about-container-inner">
          <div className="locum-about-solution-content">
            <h2 className="locum-about-section-title">Our Innovative Solution</h2>
            <p className="locum-about-solution-text">
              We've created Kenya's first digital locum staffing platform to dynamically match healthcare professionals with facilities and patients. Our technology addresses four critical needs:
            </p>
          </div>
          <div className="locum-about-solution-grid">
            <div className="locum-about-solution-card">
              <div className="locum-about-solution-icon">
                <FaUserNurse />
              </div>
              <h3 className="locum-about-card-title">Professional Opportunities</h3>
              <p className="locum-about-card-text">Connecting unemployed/underemployed health workers with flexible short-term positions</p>
            </div>
            <div className="locum-about-solution-card">
              <div className="locum-about-solution-icon">
                <MdAccessible />
              </div>
              <h3 className="locum-about-card-title">Homecare Access</h3>
              <p className="locum-about-card-text">Patients can request qualified professionals for home visits and chronic care</p>
            </div>
            <div className="locum-about-solution-card">
              <div className="locum-about-solution-icon">
                <FaClinicMedical />
              </div>
              <h3 className="locum-about-card-title">Community Health</h3>
              <p className="locum-about-card-text">On-demand access to CHWs for immunizations, maternal checkups, and education</p>
            </div>
            <div className="locum-about-solution-card">
              <div className="locum-about-solution-icon">
                <FaBalanceScale />
              </div>
              <h3 className="locum-about-card-title">Workforce Optimization</h3>
              <p className="locum-about-card-text">Matching professionals with facilities experiencing shortages, especially in rural areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="locum-about-team-section">
        <div className="locum-about-container-inner">
          <div className="locum-about-team-image">
            <img src={teamImg} alt="Our healthcare team" />
          </div>
          <div className="locum-about-team-content">
            <h2 className="locum-about-section-title">Our Mission</h2>
            <p className="locum-about-team-text">
              Founded to address Kenya's healthcare workforce crisis, we're building a platform that:
            </p>
            <ul className="locum-about-mission-list">
              <li className="locum-about-mission-item">Reduces facility staffing costs by 30% compared to traditional agencies</li>
              <li className="locum-about-mission-item">Increases practitioner earnings by 25% through direct hiring</li>
              <li className="locum-about-mission-item">Cuts patient wait times by 40% in partner facilities</li>
              <li className="locum-about-mission-item">Provides rigorous credential verification and quality assurance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="locum-about-values-section">
        <div className="locum-about-container-inner">
          <h2 className="locum-about-section-title">Our Core Principles</h2>
          <div className="locum-about-values-grid">
            <div className="locum-about-value-card">
              <div className="locum-about-value-icon">
                <FaMobileAlt />
              </div>
              <h3 className="locum-about-card-title">Accessibility</h3>
              <p className="locum-about-card-text">Mobile-first platform designed for Kenya's unique healthcare landscape</p>
            </div>
            <div className="locum-about-value-card">
              <div className="locum-about-value-icon">
                <MdHealthAndSafety />
              </div>
              <h3 className="locum-about-card-title">Quality Care</h3>
              <p className="locum-about-card-text">Verified professionals with transparent ratings and reviews</p>
            </div>
            <div className="locum-about-value-card">
              <div className="locum-about-value-icon">
                <FaBalanceScale />
              </div>
              <h3 className="locum-about-card-title">Fairness</h3>
              <p className="locum-about-card-text">Ethical wages, anti-exploitation safeguards, and transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="locum-about-cta-section">
        <div className="locum-about-container-inner">
          <h2 className="locum-about-cta-title">Join the Healthcare Revolution</h2>
          <p className="locum-about-cta-text">Whether you're a healthcare professional or facility, we can help you achieve better outcomes</p>
          <div className="locum-about-cta-buttons">
            <button className="locum-about-cta-button locum-about-cta-primary">I Need Staff</button>
            <button className="locum-about-cta-button locum-about-cta-secondary">I'm a Professional</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;