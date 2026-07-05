import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './TechTestimonials.css';

const testimonials = [
  {
    initials: 'RK', name: 'Rahul Kumar', role: 'CTO, FinFlow Systems',
    text: 'Dhoomatech delivered our entire backend API suite in 8 weeks — fully documented, tested, and deployed on AWS with zero issues at launch. Exceptional engineering culture.',
  },
  {
    initials: 'PM', name: 'Priya Menon', role: 'Founder, Nudge Health',
    text: 'They built our React Native app for iOS and Android simultaneously. The performance is incredible — 60fps animations and sub-100ms response times. Exactly what we needed.',
  },
  {
    initials: 'AS', name: 'Arjun Sharma', role: 'VP Product, LogiTrack',
    text: 'The custom ERP they built replaced three legacy tools overnight. The Dhoomatech team understood our domain perfectly and delivered something our team actually loves using.',
  },
];

export default function TechTestimonials() {
  return (
    <section className="tech-testimonials-section" id="tech-testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="tech-section-label">Client Reviews</div>
          <h2 className="tech-section-title">
            Trusted by <span className="grad">Builders.</span>
          </h2>
          <p className="tech-section-desc">
            What our engineering clients say after working with the Dhoomatech team.
          </p>
        </ScrollReveal>

        <div className="tech-testimonials-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="tech-testimonial-card">
                <div className="tech-testimonial-stars">
                  {[...Array(5)].map((_, j) => <span className="tech-star" key={j}>★</span>)}
                </div>
                <p className="tech-testimonial-text">"{t.text}"</p>
                <div className="tech-testimonial-author">
                  <div className="tech-author-avatar">{t.initials}</div>
                  <div>
                    <div className="tech-author-name">{t.name}</div>
                    <div className="tech-author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
