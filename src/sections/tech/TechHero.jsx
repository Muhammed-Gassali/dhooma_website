import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Terminal, Zap, Code2, Globe } from 'lucide-react';
import './TechHero.css';

export default function TechHero() {
  const navigate = useNavigate();

  return (
    <section className="tech-hero" id="tech-hero">
      <video
        className="tech-hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/174086-850404739_medium.mp4"
          type="video/mp4"
        />
      </video>
      <div className="tech-hero-grid" />
      <div className="tech-hero-blob-1" />
      <div className="tech-hero-blob-2" />

      {/* Floating code cards */}
      <div className="tech-hero-floats">
        <div className="float-card float-card-1">
          <span style={{ color: '#64748b' }}>const</span>{' '}
          <span style={{ color: '#22d3ee' }}>app</span>{' '}
          <span style={{ color: '#64748b' }}>=</span>{' '}
          <span style={{ color: '#818cf8' }}>build</span>
          <span style={{ color: '#f8fafc' }}>(</span>
          <span style={{ color: '#34d399' }}>'production'</span>
          <span style={{ color: '#f8fafc' }}>);</span>
        </div>
        <div className="float-card float-card-2">
          <span style={{ color: '#64748b' }}>$ </span>
          <span style={{ color: '#22d3ee' }}>deploy</span>
          <span style={{ color: '#f59e0b' }}> --cloud</span>
          <span style={{ color: '#34d399' }}> aws</span>
        </div>
        <div className="float-card float-card-3">
          <span style={{ color: '#64748b' }}>✓ </span>
          <span style={{ color: '#34d399' }}>Build successful</span>
          <span style={{ color: '#64748b' }}> 1.2s</span>
        </div>
      </div>

      <div className="container">
        <div className="tech-hero-inner">
          <div className="tech-badge">
            <span className="tech-badge-dot" />
            Dhoomatech — Software Engineering
          </div>

          <h1 className="tech-hero-title">
            Engineering the <br />
            <span className="line-grad">Digital Future.</span>
          </h1>

          <p className="tech-hero-subtitle">
            We build robust mobile apps, scalable backends, cloud infrastructure, and custom software that powers businesses from startup to enterprise.
          </p>

          <div className="tech-hero-cta">
            <button className="tech-btn-primary" onClick={() => {
              const el = document.getElementById('tech-services');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}>
              Explore Services <ArrowRight size={16} />
            </button>
            <button className="tech-btn-secondary" onClick={() => navigate('/creative')}>
              <Zap size={15} /> See Dhooma Creative
            </button>
          </div>

          <div className="tech-hero-stats">
            <div className="tech-hero-stat-item">
              <span className="tech-hero-stat-value">150+</span>
              <span className="tech-hero-stat-label">Projects Shipped</span>
            </div>
            <div className="tech-hero-stat-item">
              <span className="tech-hero-stat-value">99.9%</span>
              <span className="tech-hero-stat-label">Uptime SLA</span>
            </div>
            <div className="tech-hero-stat-item">
              <span className="tech-hero-stat-value">50+</span>
              <span className="tech-hero-stat-label">Enterprise Clients</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-hero-scroll">
        <div className="scroll-line" />
        SCROLL
      </div>
    </section>
  );
}
