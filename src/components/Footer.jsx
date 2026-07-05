import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const isTech = location.pathname === '/';
  const division = isTech ? 'tech' : 'creative';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const techLinks = ['Mobile App Dev', 'Web App Dev', 'Custom Software', 'Backend & APIs', 'Cloud & DevOps'];
  const creativeLinks = ['Brand Identity', 'Social Media Creatives', 'Meta Ads', 'Motion Graphics', 'SEO & Marketing'];
  const companyLinks = [
    { label: isTech ? 'Dhooma Creative →' : 'Dhoomatech →', href: isTech ? '/creative' : '/' },
  ];

  return (
    <footer className={`dhooma-footer ${division}-footer`}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              <span className="footer-brand-name">DHOOMA</span>
              <span className={`footer-brand-tag ${division}`}>
                {isTech ? 'TECH' : 'CREATIVE'}
              </span>
            </div>
            <p className="footer-tagline">
              {isTech
                ? 'Engineering robust software solutions that power businesses from startup to enterprise scale.'
                : 'Bold creative design and digital marketing strategies that make brands impossible to ignore.'
              }
            </p>
            <div className="footer-socials">
              {['in', 'tw', 'ig', 'gh'].map((s, i) => (
                <a href="#" key={i} className="footer-social-link" aria-label={s}>{s.toUpperCase()}</a>
              ))}
            </div>
          </div>

          {/* Division services */}
          <div>
            <div className="footer-col-title">{isTech ? 'Dhoomatech' : 'Dhooma Creative'}</div>
            <div className="footer-links">
              {(isTech ? techLinks : creativeLinks).map((l, i) => (
                <button key={i} className="footer-link" onClick={() => scrollTo(isTech ? 'tech-services' : 'creative-services')}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <div className="footer-links">
              {(isTech ? [
                { label: 'Services', id: 'tech-services' },
                { label: 'How We Build', id: 'tech-process' },
                { label: 'Tech Stack', id: 'tech-stack' },
                { label: 'Testimonials', id: 'tech-testimonials' },
                { label: 'Contact', id: 'tech-contact' },
              ] : [
                { label: 'Our Work', id: 'creative-reel' },
                { label: 'Services', id: 'creative-services' },
                { label: 'Results', id: 'creative-stats' },
                { label: 'Reviews', id: 'creative-testimonials' },
                { label: 'Contact', id: 'creative-contact' },
              ]).map((l, i) => (
                <button key={i} className="footer-link" onClick={() => scrollTo(l.id)}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link to={isTech ? '/creative' : '/'} className="footer-link" style={{ textDecoration: 'none' }}>
                {isTech ? 'Dhooma Creative →' : 'Dhoomatech →'}
              </Link>
              <button className="footer-link">Privacy Policy</button>
              <button className="footer-link">Terms of Service</button>
              <button className="footer-link" onClick={() => scrollTo(isTech ? 'tech-contact' : 'creative-contact')}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dhoomatech Private Limited. All rights reserved.</span>
          <button className="footer-back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
