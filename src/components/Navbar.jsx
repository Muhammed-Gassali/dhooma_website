import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isTech = location.pathname === '/';
  const division = isTech ? 'tech' : 'creative';

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const techLinks  = [
    { label: 'Services', id: 'tech-services' },
    { label: 'How We Build', id: 'tech-process' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Reviews', id: 'tech-testimonials' },
    { label: 'Contact', id: 'tech-contact' },
  ];
  const creativeLinks = [
    { label: 'Our Work', id: 'creative-reel' },
    { label: 'Services', id: 'creative-services' },
    { label: 'Results', id: 'creative-stats' },
    { label: 'Reviews', id: 'creative-testimonials' },
    { label: 'Contact', id: 'creative-contact' },
  ];
  const links = isTech ? techLinks : creativeLinks;

  return (
    <>
      <nav className={`dhooma-nav ${division}-nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          {/* Logo */}
          <Link to={isTech ? '/' : '/creative'} className="nav-logo">
            <span className="nav-logo-brand">DHOOMA</span>
            <span className={`nav-logo-tag ${division}`}>
              {isTech ? 'TECH' : 'CREATIVE'}
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(l => (
              <button key={l.id} className="nav-link-btn" onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <button
              className={`nav-cta-btn ${division}-cta`}
              onClick={() => scrollTo(isTech ? 'tech-contact' : 'creative-contact')}
            >
              {isTech ? 'Get a Quote' : 'Start a Project'}
            </button>
          </div>

          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
            {open ? <X size={22} color="var(--text-secondary)" /> : (
              <>
                <span className="nav-hamburger-line" />
                <span className="nav-hamburger-line" />
                <span className="nav-hamburger-line" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-mobile-drawer ${division}-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <button key={l.id} className="mobile-nav-btn" onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
      </div>
    </>
  );
}
