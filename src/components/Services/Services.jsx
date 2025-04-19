import React from 'react';
import { 
  FaUserMd, 
  FaProcedures, 
  FaHeartbeat, 
  FaTooth, 
  FaEye, 
  FaClinicMedical, 
  FaAmbulance, 
  FaBaby 
} from 'react-icons/fa';
import { 
  GiMedicinePills, 
  GiStethoscope, 
  GiHealthNormal 
} from 'react-icons/gi';
import { 
  RiMentalHealthLine, 
  RiHospitalLine 
} from 'react-icons/ri';
import { 
  MdElderly,
  MdVaccines
} from 'react-icons/md';
import './Services.css';

// For MdPediatrics, we'll use an alternative icon since it's not available
const MdPediatrics = FaBaby; // Using FaBaby as alternative

const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Clinical Staffing",
      description: "Immediate access to qualified healthcare professionals",
      services: [
        {
          id: 1,
          title: "General Practitioners",
          description: "On-demand primary care physicians for consultations and check-ups",
          icon: <FaUserMd className="service-icon" />,
          stats: "500+ available",
          gradient: "from-[#093C2E] to-[#0D5A48]"
        },
        {
          id: 2,
          title: "Specialist Physicians",
          description: "Board-certified specialists for temporary assignments",
          icon: <GiStethoscope className="service-icon" />,
          stats: "200+ specialists",
          gradient: "from-[#0D5A48] to-[#127A5E]"
        },
        {
          id: 3,
          title: "Nursing Staff",
          description: "RNs, LPNs, and nurse practitioners for all needs",
          icon: <GiMedicinePills className="service-icon" />,
          stats: "1000+ nurses",
          gradient: "from-[#093C2E] to-[#0D5A48]"
        },
        {
          id: 4,
          title: "Surgical Teams",
          description: "Complete surgical teams for temporary coverage",
          icon: <FaProcedures className="service-icon" />,
          stats: "150+ teams",
          gradient: "from-[#127A5E] to-[#18A07B]"
        }
      ]
    },
    {
      id: 2,
      title: "Specialty Care",
      description: "Targeted medical expertise when you need it most",
      services: [
        {
          id: 5,
          title: "Emergency Medicine",
          description: "ER physicians for hospitals and urgent care centers",
          icon: <FaAmbulance className="service-icon" />,
          stats: "24/7 coverage",
          gradient: "from-[#093C2E] to-[#0D5A48]"
        },
        {
          id: 6,
          title: "Mental Health",
          description: "Psychiatrists and therapists for counseling services",
          icon: <RiMentalHealthLine className="service-icon" />,
          stats: "300+ clinicians",
          gradient: "from-[#0D5A48] to-[#127A5E]"
        },
        {
          id: 7,
          title: "Pediatrics",
          description: "Child health specialists for hospitals and clinics",
          icon: <MdPediatrics className="service-icon" />,
          stats: "120+ pediatricians",
          gradient: "from-[#127A5E] to-[#18A07B]"
        },
        {
          id: 8,
          title: "Geriatric Care",
          description: "Specialists in elderly health and wellness",
          icon: <MdElderly className="service-icon" />,
          stats: "90+ specialists",
          gradient: "from-[#18A07B] to-[#1EC897]"
        }
      ]
    },
    {
      id: 3,
      title: "Preventive & Community Health",
      description: "Supporting public health initiatives across Kenya",
      services: [
        {
          id: 9,
          title: "Vaccination Teams",
          description: "Mobile teams for immunization programs",
          icon: <MdVaccines className="service-icon" />,
          stats: "200+ teams",
          gradient: "from-[#093C2E] to-[#0D5A48]"
        },
        {
          id: 10,
          title: "Maternal Health",
          description: "OB/GYNs and midwives for prenatal and postnatal care",
          icon: <FaBaby className="service-icon" />,
          stats: "180+ specialists",
          gradient: "from-[#0D5A48] to-[#127A5E]"
        },
        {
          id: 11,
          title: "Community Health Workers",
          description: "Trained CHWs for outreach and education",
          icon: <GiHealthNormal className="service-icon" />,
          stats: "500+ available",
          gradient: "from-[#127A5E] to-[#18A07B]"
        },
        {
          id: 12,
          title: "Telemedicine",
          description: "Remote consultations for rural communities",
          icon: <FaEye className="service-icon" />,
          stats: "Instant access",
          gradient: "from-[#18A07B] to-[#1EC897]"
        }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <div className="badge">
            <span>Healthcare Solutions</span>
          </div>
          <h1>
            <span>Comprehensive Staffing</span> 
            <span className="highlight">Solutions</span>
          </h1>
          <p className="subtitle">
            Addressing Kenya's healthcare workforce shortages through flexible, reliable staffing
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main">
        <div className="container">
          {serviceCategories.map((category) => (
            <div key={category.id} className="service-category">
              <div className="category-header">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              
              <div className="services-grid">
                {category.services.map((service) => (
                  <div 
                    key={service.id} 
                    className={`service-card ${service.id % 2 === 0 ? 'even' : 'odd'}`}
                  >
                    <div className="card-header">
                      <div className={`icon-container bg-gradient-to-br ${service.gradient}`}>
                        {service.icon}
                      </div>
                      <h3>{service.title}</h3>
                    </div>
                    <p className="description">{service.description}</p>
                    <div className="card-footer">
                      <span className="stats">{service.stats}</span>
                      <button className="cta-button">
                        Request Staff
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Can't find what you need?</h2>
          <p>We specialize in custom staffing solutions for unique healthcare challenges</p>
          <div className="cta-buttons">
            <button className="primary-cta">
              Contact Our Team
            </button>
            <button className="secondary-cta">
              View All Specialties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;