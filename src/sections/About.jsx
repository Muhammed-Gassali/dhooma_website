import React from 'react';
import { Cpu, Palette, Users, TrendingUp } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import './About.css';

export default function About() {
  const pillars = [
    {
      icon: <Cpu className="pillar-icon tech" size={24} />,
      title: "Engineering Excellence",
      description: "Robust architectures, secure APIs, and custom software designed to scale with your enterprise.",
      colorClass: "tech"
    },
    {
      icon: <Palette className="pillar-icon creative" size={24} />,
      title: "Creative Innovation",
      description: "Eye-catching branding, stunning graphic design, and unique aesthetics that establish category leaders.",
      colorClass: "creative"
    },
    {
      icon: <Users className="pillar-icon corporate" size={24} />,
      title: "Unified Teamwork",
      description: "Two dedicated divisions working under one corporate banner, aligning technology directly with marketing strategy.",
      colorClass: "corporate"
    },
    {
      icon: <TrendingUp className="pillar-icon growth" size={24} />,
      title: "Client-Centric Growth",
      description: "From SEO campaigns to customized databases, everything we build is engineered to deliver measurable ROI.",
      colorClass: "growth"
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Text Content */}
          <div className="about-text-content">
            <h4 className="section-subtitle">Who We Are</h4>
            <h2 className="section-title">
              Crafting Digital Solutions. <br />
              Accelerating Brand Growth.
            </h2>
            <p className="about-body">
              Dhoomatech Private Limited is a premier corporate agency operating with two specialized divisions. We believe software is only as good as its execution, and creative design is only as effective as the technology backing it up.
            </p>
            <p className="about-body">
              By merging advanced software engineering with ROI-focused digital marketing, we provide our clients with a cohesive strategy that eliminates the disconnect between technology and sales.
            </p>

            <div className="about-stats-strip">
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Pillars Showcase */}
          <div className="about-pillars-grid">
            {pillars.map((pillar, i) => (
              <GlassCard key={i} className={`pillar-card ${pillar.colorClass}`}>
                <div className="pillar-header">
                  <div className="pillar-icon-wrapper">
                    {pillar.icon}
                  </div>
                  <h3>{pillar.title}</h3>
                </div>
                <p>{pillar.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
