import React from 'react';
import { Code, Sparkles, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import './Hero.css';

export default function Hero({ activeDivision, setActiveDivision }) {
  
  const handleExplore = (divisionName) => {
    setActiveDivision(divisionName);
    const element = document.getElementById('services');
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
    <section className="hero-section" id="hero">
      {/* Background grids */}
      <div className="hero-mesh" />

      <div className="container hero-container">
        {/* Intro Tag */}
        <div className="hero-badge-container">
          <div className="hero-badge">
            <span className="badge-glow"></span>
            <span className="badge-text">Dhoomatech Private Limited</span>
          </div>
        </div>

        {/* Catchy Headline */}
        <h1 className="hero-title">
          Technology that <span className="tech-text font-accent">builds</span>. <br />
          Creativity that <span className="creative-text font-accent">grows</span>.
        </h1>

        {/* Corporate Description */}
        <p className="hero-subtitle">
          One powerhouse, two specialized divisions. We engineer state-of-the-art software solutions and craft high-impact marketing experiences.
        </p>

        {/* Call to Actions (Interactive Splits) */}
        <div className="hero-splits">
          {/* Dhoomatech Tech Card */}
          <GlassCard 
            className={`hero-card-split split-tech ${activeDivision === 'tech' ? 'focused' : ''}`}
            onMouseEnter={() => setActiveDivision('tech')}
          >
            <div className="split-bg-glow"></div>
            <div className="split-content">
              <div className="split-icon-wrapper">
                <Code className="split-icon" size={24} />
              </div>
              <h3>Dhoomatech</h3>
              <p>Mobile apps, backend architecture, cloud servers, custom software, and consulting.</p>
              <Button 
                onClick={() => handleExplore('tech')} 
                variant={activeDivision === 'tech' ? 'primary' : 'secondary'}
                icon={<ArrowRight size={16} />}
              >
                Explore Technology
              </Button>
            </div>
          </GlassCard>

          {/* Dhooma Creative Card */}
          <GlassCard 
            className={`hero-card-split split-creative ${activeDivision === 'creative' ? 'focused' : ''}`}
            onMouseEnter={() => setActiveDivision('creative')}
          >
            <div className="split-bg-glow"></div>
            <div className="split-content">
              <div className="split-icon-wrapper">
                <Sparkles className="split-icon" size={24} />
              </div>
              <h3>Dhooma Creative</h3>
              <p>Branding, social media, Meta campaigns, SEO optimization, and content strategies.</p>
              <Button 
                onClick={() => handleExplore('creative')} 
                variant={activeDivision === 'creative' ? 'primary' : 'secondary'}
                icon={<ArrowRight size={16} />}
              >
                Explore Creative
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
