import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer({ activeDivision }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Company Identity Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="logo-brand">DHOOMA</span>
            <span className={`logo-tag ${activeDivision}`}>
              {activeDivision === 'tech' ? 'TECH' : 'CREATIVE'}
            </span>
          </div>
          <p className="footer-description">
            Dhoomatech Private Limited combines top-tier software engineering and marketing creativity to build digital excellence.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </div>

        {/* Tech Division Services Column */}
        <div className="footer-links-col">
          <h4>Dhoomatech</h4>
          <ul className="footer-links-list">
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Mobile App Dev</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Web App Dev</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Custom Software</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Backend & APIs</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Server & Maintenance</a></li>
          </ul>
        </div>

        {/* Creative Division Services Column */}
        <div className="footer-links-col">
          <h4>Dhooma Creative</h4>
          <ul className="footer-links-list">
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Branding & Logos</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Poster Designing</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Social Media Creatives</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Meta Ads Management</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>SEO & Campaigns</a></li>
          </ul>
        </div>

        {/* Corporate Column */}
        <div className="footer-links-col">
          <h4>Company</h4>
          <ul className="footer-links-list">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Us</a></li>
            <li><a href="#vision" onClick={(e) => { e.preventDefault(); handleNavClick('vision'); }}>Vision & Mission</a></li>
            <li><a href="#team" onClick={(e) => { e.preventDefault(); handleNavClick('team'); }}>Our Crew</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact Form</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p>© {new Date().getFullYear()} Dhoomatech Private Limited. All rights reserved.</p>
          <button onClick={scrollToTop} className="scroll-top-btn" title="Back to Top">
            Back to top <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
