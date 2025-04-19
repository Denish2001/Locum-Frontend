import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Emergency Physician',
    content: 'Locum Health has transformed how I work. I can now choose shifts that fit my family life while earning competitive rates. The platform is so easy to use!',
    rating: 5,
    avatar: '/doctor.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Nursing Home Administrator',
    content: 'We rely on Locum Health for last-minute staffing needs. The quality of professionals is consistently excellent, and the booking process takes minutes.',
    rating: 5,
    avatar: '/doctor.jpg'
  },
  {
    id: 3,
    name: 'Nurse David Okafor',
    role: 'ICU Nurse',
    content: 'As a traveling nurse, I love the flexibility. I can work in different facilities without long-term commitments. Payments are always prompt too.',
    rating: 4,
    avatar: '/doctor.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Healthcare Professionals & Facilities</h2>
          <p>Here's what our community says about their experience</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? 'filled' : 'empty'} 
                  />
                ))}
              </div>
              
              <div className="author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="avatar"
                  onError={(e) => {
                    e.target.src = '/avatars/default.jpg'; // Fallback image
                  }}
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;