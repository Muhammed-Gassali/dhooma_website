import React, { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './TechContact.css';

const perks = [
  'Free project scoping call — no commitment',
  'Fixed-price delivery with milestone tracking',
  'Dedicated project manager from day one',
  '90-day post-launch support included',
];

export default function TechContact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert("Thanks! We'll get back to you within 24 hours.");
  };

  return (
    <section className="tech-contact-section" id="tech-contact">
      <div className="container">
        <div className="tech-contact-inner">
          {/* Copy */}
          <ScrollReveal className="tech-contact-reveal-left" delay={0.1}>
            <div className="tech-contact-copy">
              <div className="tech-section-label">Get Started</div>
              <h2>Let's Build <br /><span>Something Great.</span></h2>
              <p>
                Share your project brief and our engineering team will respond with a detailed technical proposal within 24 hours.
              </p>
              <div className="tech-contact-perks">
                {perks.map((p, i) => (
                  <div className="tech-perk" key={i}>
                    <span className="tech-perk-dot" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="tech-contact-reveal-right" delay={0.2}>
            <form className="tech-contact-form" onSubmit={handleSubmit}>
              <div className="tech-form-row">
                <div className="tech-form-group">
                  <label htmlFor="tc-name">Full Name</label>
                  <input id="tc-name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="tech-form-group">
                  <label htmlFor="tc-email">Email</label>
                  <input id="tc-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="tech-form-group">
                <label htmlFor="tc-service">Service Needed</label>
                <select id="tc-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option>Mobile App Development</option>
                  <option>Web App Development</option>
                  <option>Custom Software</option>
                  <option>Backend & APIs</option>
                  <option>Cloud & DevOps</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="tech-form-group">
                <label htmlFor="tc-message">Project Brief</label>
                <textarea id="tc-message" name="message" placeholder="Describe your project idea..." value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="tech-form-submit">Send Project Brief →</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
