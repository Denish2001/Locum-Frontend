import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I sign up as a healthcare professional?",
      answer: "Simply click 'Sign Up' and select 'Healthcare Professional'. You'll need to provide your credentials, license information, and work preferences. Our team verifies all credentials within 24-48 hours."
    },
    {
      question: "What types of healthcare facilities can request staff?",
      answer: "Hospitals, clinics, nursing homes, private practices, and any licensed healthcare facility can request temporary staff through our platform. We cater to all major medical specialties."
    },
    {
      question: "How quickly can I get staff for an urgent shift?",
      answer: "Our average fulfillment time for urgent requests is under 2 hours. For non-urgent requests, we recommend posting shifts at least 24 hours in advance for best results."
    },
    {
      question: "What are the payment terms for professionals?",
      answer: "Professionals receive payment within 48 hours of shift completion. Rates are competitive and vary by specialty, shift type, and location. You'll see the exact rate before accepting any shift."
    },
    {
      question: "How do you verify professional credentials?",
      answer: "We conduct thorough background checks, license verification, and reference checks. All professionals must maintain current certifications in their field to remain active on our platform."
    },
    {
      question: "Can I set my own schedule as a healthcare professional?",
      answer: "Absolutely! You choose which shifts to accept based on your availability. Set your preferred locations, shift types, and receive notifications for matching opportunities."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-icon-container">
            <MdOutlineHealthAndSafety className="faq-icon" />
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Get answers about our healthcare staffing platform</p>
        </div>
        
        <div className="faq-items">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className="chevron-icon" />
                ) : (
                  <FaChevronDown className="chevron-icon" />
                )}
              </div>
              <div className={`faq-answer-container ${activeIndex === index ? 'open' : ''}`}>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Still have questions about our services?</p>
          <a href="/contact" className="cta-button">
            Contact Our Support Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;