import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './DivisionShowcase.css';

export default function DivisionShowcase({ activeDivision, setActiveDivision }) {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  const handleSelect = (divisionName) => {
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
    <section className="section showcase-section" id="showcase">
      <div className="container">
        {/* Section header */}
        <div className="showcase-header">
          <h4 className="section-subtitle">Our Powerhouses</h4>
          <h2 className="section-title">Two Strengths. One Unified Entity.</h2>
          <p className="showcase-header-desc">
            Explore our two specialized divisions. Hover over either to preview their capabilities, or click to explore their service catalogues below.
          </p>
        </div>

        {/* Interactive Split Gateway Container */}
        <div className="split-gateway-container">
          
          {/* Tech division panel */}
          <div 
            className={`gateway-panel panel-tech ${hoveredPanel === 'tech' ? 'expanded' : ''} ${hoveredPanel === 'creative' ? 'shrunk' : ''} ${activeDivision === 'tech' ? 'active-border' : ''}`}
            onMouseEnter={() => setHoveredPanel('tech')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <div className="panel-grid-overlay"></div>
            <div className="panel-background-glow"></div>
            
            <div className="panel-inner-content">
              <span className="panel-tag">Division 01</span>
              <h3>Dhoomatech</h3>
              <p className="panel-lead">
                State-of-the-art software engineering, secure API integrations, and robust cloud support designed for enterprise performance.
              </p>



              <div className="panel-footer mt-auto">
                <Button 
                  onClick={() => handleSelect('tech')}
                  variant="primary"
                  icon={<ArrowRight size={16} />}
                  className="w-full justify-between"
                >
                  Explore Tech Services
                </Button>
              </div>
            </div>
          </div>

          {/* Creative division panel */}
          <div 
            className={`gateway-panel panel-creative ${hoveredPanel === 'creative' ? 'expanded' : ''} ${hoveredPanel === 'tech' ? 'shrunk' : ''} ${activeDivision === 'creative' ? 'active-border' : ''}`}
            onMouseEnter={() => setHoveredPanel('creative')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <div className="panel-organic-overlay"></div>
            <div className="panel-background-glow"></div>

            <div className="panel-inner-content">
              <span className="panel-tag">Division 02</span>
              <h3>Dhooma Creative</h3>
              <p className="panel-lead">
                Innovative branding layouts, conversion-driven social media assets, and targeted marketing campaigns that scale.
              </p>



              <div className="panel-footer mt-auto">
                <Button 
                  onClick={() => handleSelect('creative')}
                  variant="primary"
                  icon={<ArrowRight size={16} />}
                  className="w-full justify-between"
                >
                  Explore Creative Services
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
