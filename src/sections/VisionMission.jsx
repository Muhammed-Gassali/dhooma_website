import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import './VisionMission.css';

export default function VisionMission() {
  const values = [
    { title: "Continuous Innovation", desc: "Always pushing technological boundaries." },
    { title: "Transparency & Trust", desc: "Honest consulting and verified code deliverables." },
    { title: "Creative Synergy", desc: "Fusing logic and beauty to achieve peak conversion." },
    { title: "Long-Term Impact", desc: "Building systems that scale for decades, not days." }
  ];

  return (
    <section className="section vision-section" id="vision">
      <div className="container">
        {/* Section header */}
        <div className="vision-header">
          <h4 className="section-subtitle">Values & Purpose</h4>
          <h2 className="section-title">Driven by Vision. Defined by Action.</h2>
          <p className="vision-header-desc">
            We are committed to delivering products that don't just solve immediate problems but establish a foundation for permanent scale.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="vision-mission-cards">
          {/* Vision card */}
          <GlassCard className="vision-card-container">
            <div className="icon-badge compass">
              <Compass size={28} />
            </div>
            <h3>Our Corporate Vision</h3>
            <p className="card-statement">
              To be the global benchmark of a unified digital agency—where high-performance software engineering meets world-class creative storytelling under one seamless banner.
            </p>
            <div className="card-accent-bar cyan"></div>
          </GlassCard>

          {/* Mission card */}
          <GlassCard className="vision-card-container">
            <div className="icon-badge target">
              <Target size={28} />
            </div>
            <h3>Our Corporate Mission</h3>
            <p className="card-statement">
              To empower enterprises with custom-built software architectures, modern design layouts, and scalable advertising systems that accelerate operational efficiency and fuel brand growth.
            </p>
            <div className="card-accent-bar rose"></div>
          </GlassCard>
        </div>

        {/* Corporate Values */}
        <div className="values-showcase-container">
          <h3 className="values-title">Our Core Operating Values</h3>
          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-item">
                <CheckCircle2 className="value-check-icon" size={20} />
                <div className="value-texts">
                  <h5>{val.title}</h5>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
