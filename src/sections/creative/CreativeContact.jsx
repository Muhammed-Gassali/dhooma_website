import React, { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './CreativeContact.css';

const badges = [
  { icon: '✦', text: 'Free Creative Consultation' },
  { icon: '◈', text: 'First Proof in 48 Hours' },
  { icon: '❋', text: 'Unlimited Revisions' },
  { icon: '◉', text: 'Dedicated Creative Lead' },
];

export default function CreativeContact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert('🎨 Thanks! Our creative team will reach out within 24 hours.');
  };

  return (
    <section className="creative-contact-section" id="creative-contact">
      <div className="creative-contact-blobs">
        <div className="creative-contact-blob-a" />
        <div className="creative-contact-blob-b" />
      </div>

      <div className="container">
        <div className="creative-contact-inner">
          {/* Copy */}
          <ScrollReveal className="creative-contact-reveal-left" delay={0.1}>
            <div className="creative-contact-copy">
              <div className="creative-section-label">Start a Project</div>
              <h2>
                Let's Create <br /><span>Something Bold.</span>
              </h2>
              <p>
                Tell us about your brand and what you're looking to achieve. Our creative team responds within 24 hours with ideas.
              </p>
              <div className="creative-contact-badges">
                {badges.map((b, i) => (
                  <div className="creative-contact-badge" key={i}>
                    <span>{b.icon}</span> {b.text}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal className="creative-contact-reveal-right" delay={0.2}>
            <form className="creative-contact-form" onSubmit={handleSubmit}>
              <div className="creative-form-row">
                <div className="creative-form-group">
                  <label htmlFor="cc-name">Your Name</label>
                  <input id="cc-name" name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="creative-form-group">
                  <label htmlFor="cc-email">Email</label>
                  <input id="cc-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="creative-form-group">
                <label htmlFor="cc-service">What Do You Need?</label>
                <select id="cc-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option>Brand Identity & Logo Design</option>
                  <option>Social Media Creatives</option>
                  <option>Meta Ads Management</option>
                  <option>Motion Graphics & Video Reels</option>
                  <option>SEO & Digital Marketing</option>
                  <option>Content Strategy & Copywriting</option>
                </select>
              </div>
              <div className="creative-form-group">
                <label htmlFor="cc-message">Tell Us About Your Project</label>
                <textarea id="cc-message" name="message" placeholder="What's your brand, your audience, and your vision?" value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="creative-form-submit">✦ Let's Start Creating →</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
