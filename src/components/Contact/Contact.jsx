import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form submission logic would go here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="locum-contact-section" id="contact">
      <div className="locum-contact-container">
        <div className="locum-contact-header">
          <div className="locum-contact-icon">
            <MdHealthAndSafety />
          </div>
          <h2>Contact Our Healthcare Team</h2>
          <p>Have questions about staffing solutions? Reach out to our support team</p>
        </div>

        <div className="locum-contact-grid">
          <div className="locum-contact-info">
            <div className="locum-info-card">
              <div className="locum-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="locum-info-content">
                <h3>Our Location</h3>
                <p>123 Medical Plaza<br />Nairobi, Kenya</p>
              </div>
            </div>

            <div className="locum-info-card">
              <div className="locum-info-icon">
                <FaPhone />
              </div>
              <div className="locum-info-content">
                <h3>Phone Number</h3>
                <p>+254 700 123 456</p>
              </div>
            </div>

            <div className="locum-info-card">
              <div className="locum-info-icon">
                <FaEnvelope />
              </div>
              <div className="locum-info-content">
                <h3>Email Address</h3>
                <p>support@locumhealth.co.ke</p>
              </div>
            </div>
          </div>

          <div className="locum-contact-form-container">
            {isSubmitted && (
              <div className="locum-form-success">
                <p>Thank you! Your message has been received. Our team will respond within 24 hours.</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="locum-contact-form">
              <div className="locum-form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'locum-input-error' : ''}
                />
                {errors.name && <span className="locum-error-message">{errors.name}</span>}
              </div>

              <div className="locum-form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'locum-input-error' : ''}
                />
                {errors.email && <span className="locum-error-message">{errors.email}</span>}
              </div>

              <div className="locum-form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="locum-form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'locum-input-error' : ''}
                ></textarea>
                {errors.message && <span className="locum-error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="locum-submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;