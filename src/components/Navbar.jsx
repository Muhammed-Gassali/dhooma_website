import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sparkles, ArrowRight } from 'lucide-react';
import './Navbar.css';
import Button from './Button';

export default function Navbar({ activeDivision, setActiveDivision }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset navbar height
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const toggleDivision = () => {
    setActiveDivision(activeDivision === 'tech' ? 'creative' : 'tech');
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-brand">DHOOMA</span>
          <span className={`logo-tag ${activeDivision}`}>
            {activeDivision === 'tech' ? 'TECH' : 'CREATIVE'}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          <button onClick={() => handleNavClick('about')} className="nav-item">About</button>
          <button onClick={() => handleNavClick('vision')} className="nav-item">Vision</button>
          <button onClick={() => handleNavClick('showcase')} className="nav-item">Divisions</button>
          <button onClick={() => handleNavClick('services')} className="nav-item">Services</button>
          <button onClick={() => handleNavClick('team')} className="nav-item">Crew</button>
          <button onClick={() => handleNavClick('testimonials')} className="nav-item">Reviews</button>
        </div>

        {/* Action Controls */}
        <div className="nav-actions-desktop">
          {/* Division Toggle Button */}
          <button 
            onClick={toggleDivision} 
            className={`division-toggle-pill ${activeDivision}`}
            title="Switch Division Visual Theme"
          >
            <span className="toggle-bg"></span>
            <span className={`toggle-option ${activeDivision === 'tech' ? 'active' : ''}`}>
              <Code size={14} /> Tech
            </span>
            <span className={`toggle-option ${activeDivision === 'creative' ? 'active' : ''}`}>
              <Sparkles size={14} /> Creative
            </span>
          </button>

          <Button 
            onClick={() => handleNavClick('contact')} 
            variant="primary"
            icon={<ArrowRight size={16} />}
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button className="nav-mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`nav-menu-mobile ${isOpen ? 'menu-open' : ''}`}>
        <div className="mobile-menu-inner">
          <button onClick={() => handleNavClick('about')} className="mobile-nav-item">About</button>
          <button onClick={() => handleNavClick('vision')} className="mobile-nav-item">Vision</button>
          <button onClick={() => handleNavClick('showcase')} className="mobile-nav-item">Divisions</button>
          <button onClick={() => handleNavClick('services')} className="mobile-nav-item">Services</button>
          <button onClick={() => handleNavClick('team')} className="mobile-nav-item">Crew</button>
          <button onClick={() => handleNavClick('testimonials')} className="mobile-nav-item">Reviews</button>

          <div className="mobile-menu-divider" />
          
          <div className="mobile-division-switch-container">
            <span className="mobile-switch-label">Select Division Theme</span>
            <div className="mobile-switch-buttons">
              <button 
                onClick={() => { setActiveDivision('tech'); setIsOpen(false); }}
                className={`mobile-switch-btn ${activeDivision === 'tech' ? 'active tech' : ''}`}
              >
                <Code size={16} /> Tech Division
              </button>
              <button 
                onClick={() => { setActiveDivision('creative'); setIsOpen(false); }}
                className={`mobile-switch-btn ${activeDivision === 'creative' ? 'active creative' : ''}`}
              >
                <Sparkles size={16} /> Creative Division
              </button>
            </div>
          </div>

          <Button 
            onClick={() => handleNavClick('contact')} 
            variant="primary" 
            className="w-full"
            icon={<ArrowRight size={16} />}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </nav>
  );
}
