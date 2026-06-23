import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

export default function Contact({ activeDivision }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    division: activeDivision,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, division: activeDivision }));
  }, [activeDivision]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', division: activeDivision, message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-container">
        
        {/* Contact details left column */}
        <div className="contact-info-col">
          <h4 className="section-subtitle">Let's Connect</h4>
          <h2 className="section-title">Let's build something grand.</h2>
          <p className="contact-lead-desc">
            Ready to deploy custom software systems, scale advertising traffic, or completely modernize your brand layout? Get in touch with our team today.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-item">
              <div className="detail-icon-wrapper">
                <Mail size={20} />
              </div>
              <div className="detail-texts">
                <span>Email Us</span>
                <a href="mailto:hello@dhoomatech.com">hello@dhoomatech.com</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon-wrapper">
                <Phone size={20} />
              </div>
              <div className="detail-texts">
                <span>Call Us</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div className="detail-texts">
                <span>Visit Office</span>
                <address>Dhoomatech Private Limited, Bengaluru, India</address>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form right column */}
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="contact-form glass-panel">
            <h3>Send Inquiry</h3>
            <p className="form-subtext">Our average response time is under 12 hours.</p>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Rohit Sharma"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="rohit@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="division">Inquiry Division Channel</label>
              <select
                id="division"
                name="division"
                value={formData.division}
                onChange={handleInputChange}
              >
                <option value="tech">Dhoomatech (Software & Tech)</option>
                <option value="creative">Dhooma Creative (Digital Marketing)</option>
                <option value="both">Both Divisions (Unified Project)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Inquiry Details</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Provide a brief summary of what you are looking to build or scale..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            {submitted ? (
              <div className="success-banner">
                <CheckCircle className="success-icon" size={20} />
                <span>Inquiry submitted! We will reach out shortly.</span>
              </div>
            ) : (
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full justify-between"
                icon={<ArrowRight size={16} />}
              >
                {loading ? 'Submitting...' : 'Send Message'}
              </Button>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}
