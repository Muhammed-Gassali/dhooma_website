import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import './CreativeHero.css';

const floatIcons = ['✦', '◈', '❋', '◉', '✿'];

export default function CreativeHero() {
  const navigate = useNavigate();

  return (
    <section className="creative-hero" id="creative-hero">
      {/* Blobs */}
      <div className="creative-blob creative-blob-1" />
      <div className="creative-blob creative-blob-2" />
      <div className="creative-blob creative-blob-3" />
      <div className="creative-grain" />

      {/* Floating decorative icons */}
      <div className="creative-hero-floats">
        {floatIcons.map((icon, i) => (
          <div className={`c-float c-float-${i + 1}`} key={i} style={{ color: ['#ec4899','#8b5cf6','#f59e0b','#f97316','#22d3ee'][i] }}>
            {icon}
          </div>
        ))}
      </div>

      <div className="container">
        <div className="creative-hero-inner">
          <div className="creative-eyebrow">
            <span className="creative-eyebrow-spark">✦</span>
            Dhooma Creative — Digital Marketing & Design
          </div>

          <h1 className="creative-hero-title">
            We Create.
            <span className="line-color">We Captivate.</span>
            We Convert.
          </h1>

          <p className="creative-hero-desc">
            Bold branding, stunning visuals, high-performance ad campaigns, and creative content strategies that make brands impossible to ignore.
          </p>

          <div className="creative-hero-cta">
            <button className="creative-btn-primary" onClick={() => {
              const el = document.getElementById('creative-services');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              See Our Work <ArrowRight size={16} />
            </button>
            <button className="creative-btn-outline" onClick={() => navigate('/')}>
              <Code2 size={15} /> Visit Dhoomatech
            </button>
          </div>

          <div className="creative-hero-client-strip">
            <span className="creative-client-label">Trusted by</span>
            <div className="creative-client-badges">
              {['Startups', 'E-commerce', 'SaaS Brands', 'Local Businesses', 'Creators'].map((b, i) => (
                <span className="creative-client-badge" key={i}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
