import React from 'react';
import { Cpu, Palette, Users, TrendingUp } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import ScrollReveal from '../../components/ScrollReveal';
import './WhoWeAre.css';

const points = [
  {
    icon: <Cpu size={22} className="whoweare-icon" />,
    title: 'Engineering Excellence',
    desc: 'Robust architectures, secure APIs, and custom software designed to scale with your enterprise.',
  },
  {
    icon: <Palette size={22} className="whoweare-icon" />,
    title: 'Creative Innovation',
    desc: 'Eye-catching branding, stunning graphic design, and unique aesthetics that establish category leaders.',
  },
  {
    icon: <Users size={22} className="whoweare-icon" />,
    title: 'Unified Teamwork',
    desc: 'Two dedicated divisions working under one corporate banner, aligning technology directly with marketing strategy.',
  },
  {
    icon: <TrendingUp size={22} className="whoweare-icon" />,
    title: 'Client-Centric Growth',
    desc: 'From SEO campaigns to customized databases, everything we build is engineered to deliver measurable ROI.',
  },
];

export default function WhoWeAre() {
  return (
    <section className="whoweare-section" id="whoweare">
      <div className="container">
        <div className="whoweare-layout">
          {/* Copy Side */}
          <ScrollReveal delay={0.1} className="whoweare-reveal-left">
            <div className="whoweare-copy">
              <div className="tech-section-label">Who We Are</div>
              <h2 className="whoweare-title">
                <span className="grad">
                  Crafting Digital Solutions. <br />
                  Accelerating Brand Growth.
                </span>
              </h2>
              <p className="whoweare-desc-text">
                Dhoomatech Private Limited is a premier corporate agency operating with two specialized divisions. We believe software is only as good as its execution, and creative design is only as effective as the technology backing it up.
              </p>
              <p className="whoweare-desc-text">
                By merging advanced software engineering with ROI-focused digital marketing, we provide our clients with a cohesive strategy that eliminates the disconnect between technology and sales.
              </p>
              <div className="footer-socials" style={{ marginTop: '16px' }}>
                <a href="https://www.linkedin.com/company/dhoomatech/about/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
                <a href="https://www.instagram.com/dhoomatech/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram"><FaInstagram size={16} /></a>
                <a href="https://www.facebook.com/p/DhoomaTech-61550937094280/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook"><FaFacebook size={16} /></a>
              </div>
            </div>
          </ScrollReveal>

          {/* Cards Side */}
          <div className="whoweare-grid">
            {points.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="whoweare-card-reveal">
                <div className="whoweare-card">
                  <div className="whoweare-icon-wrap">{p.icon}</div>
                  <h3 className="whoweare-card-title">{p.title}</h3>
                  <p className="whoweare-card-desc">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
