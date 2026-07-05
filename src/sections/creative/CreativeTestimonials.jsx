import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './CreativeTestimonials.css';

const reviews = [
  {
    avatarBg: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    initials: 'NF',
    name: 'Nadia Faris',
    role: 'Founder, Bloom Boutique',
    text: 'Dhooma Creative completely transformed our Instagram. Our engagement tripled in 6 weeks and the branding they designed is absolutely stunning. Every post gets compliments.',
    accentColor: 'linear-gradient(to right, #ec4899, #8b5cf6)',
  },
  {
    avatarBg: 'linear-gradient(135deg, #f59e0b, #f97316)',
    initials: 'KR',
    name: 'Kiran Raj',
    role: 'Marketing Head, SpiceBox',
    text: "Their Meta Ads team scaled our ROAS from 1.8x to 4.3x in just 10 weeks. The ad creatives they design are unlike anything I've seen — they just convert.",
    accentColor: 'linear-gradient(to right, #f59e0b, #f97316)',
  },
  {
    avatarBg: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
    initials: 'SM',
    name: 'Sara Mohammed',
    role: 'CEO, Luminary Labs',
    text: 'We needed a full rebrand in 3 weeks for a major product launch. Dhooma Creative delivered a complete visual identity — logos, brand guide, social kit — and it was perfect.',
    accentColor: 'linear-gradient(to right, #8b5cf6, #22d3ee)',
  },
];

export default function CreativeTestimonials() {
  return (
    <section className="creative-testimonials-section" id="creative-testimonials">
      <div className="container">
        <ScrollReveal>
          <div className="creative-section-label">Client Love</div>
          <h2 className="creative-section-title">
            Real Results. <span className="cgrad">Real Brands.</span>
          </h2>
          <p className="creative-section-desc">
            What our creative clients say about working with Dhooma Creative.
          </p>
        </ScrollReveal>

        <div className="creative-testimonials-grid">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="creative-testimonials-reveal-wrap">
              <div className="creative-tcard" style={{ '--card-accent': r.accentColor }}>
                <div className="creative-tcard-quote">"</div>
                <p className="creative-tcard-text">{r.text}</p>
                <div className="creative-tcard-author">
                  <div className="creative-tcard-avatar" style={{ background: r.avatarBg }}>{r.initials}</div>
                  <div>
                    <div className="creative-tcard-name">{r.name}</div>
                    <div className="creative-tcard-role">{r.role}</div>
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
