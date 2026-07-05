import React, { useRef, useEffect, useState } from 'react';
import './CreativeServices.css';

const CARDS = [
  {
    id: 'linkedin',
    num: '01',
    tag: 'Professional Identity',
    title: 'LinkedIn Marketing',
    description: 'Build authority, grow your network, and turn your LinkedIn presence into a pipeline of high-value leads.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    accent: '#0077b5',
  },
  {
    id: 'meta',
    num: '02',
    tag: 'Performance Marketing',
    title: 'Meta Ads',
    description: 'Full-funnel Facebook & Instagram campaigns — audience targeting, creative testing, and ROAS-driven scaling.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    accent: '#e1306c',
  },
  {
    id: 'seo',
    num: '03',
    tag: 'Organic Growth',
    title: 'Search Engine Optimization',
    description: 'Keyword strategy, on-page optimization, and backlink campaigns that drive sustained organic traffic.',
    videoUrl: '/what we do video.mp4',
    accent: '#22c55e',
  },
  {
    id: 'design',
    num: '04',
    tag: 'Visual Identity',
    title: 'Creative Design',
    description: 'Brand identities, social creatives, motion graphics, and campaign visuals that stop the scroll.',
    videoUrl: '/digital marketing.mp4',
    accent: '#a855f7',
  },
  {
    id: 'google',
    num: '05',
    tag: 'Paid Search',
    title: 'Google Ads',
    description: 'Search, Display, and YouTube campaigns engineered for maximum click-through and conversion rate.',
    videoUrl: '/what we do video.mp4',
    accent: '#f59e0b',
  },
];

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function ServiceCard({ card, index }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`csvc-card${hovered ? ' csvc-card--hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ '--accent': card.accent }}
    >
      {/* Video */}
      <div className="csvc-video-wrap">
        <video
          ref={videoRef}
          className="csvc-video"
          src={card.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Always-visible dark overlay */}
        <div className="csvc-overlay" />
        {/* Accent tint on hover */}
        <div className="csvc-accent-tint" />
      </div>

      {/* Content */}
      <div className="csvc-content">
        <div className="csvc-top">
          <span className="csvc-num">{card.num}</span>
          <span className="csvc-tag">{card.tag}</span>
        </div>
        <div className="csvc-bottom">
          <h3 className="csvc-title">{card.title}</h3>
          <p className="csvc-desc">{card.description}</p>
          <div className="csvc-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreativeServices() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);

  return (
    <section className="csvc-section" id="creative-services">
      <div className="csvc-radial" />

      <div className="csvc-header-wrap">
        <div
          ref={headerRef}
          className={`csvc-header${headerVisible ? ' csvc-header--visible' : ''}`}
        >
          <div className="csvc-header-left">
            <span className="csvc-label">— SERVICES / WHAT WE DO</span>
            <h2 className="csvc-title-main">What we do</h2>
          </div>
          <span className="csvc-header-sub">Our services</span>
        </div>
      </div>

      {/* All 5 cards — no scroll */}
      <div className="csvc-grid">
        {CARDS.map((card, i) => (
          <ServiceCard key={card.id} card={card} index={i} />
        ))}
      </div>

    </section>
  );
}
