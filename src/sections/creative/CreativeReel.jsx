import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './CreativeReel.css';

const tiles = [
  { image: '/creative-portfolio.png', tag: 'Brand Identity', title: 'Premium Brand Design', client: 'Multiple Clients', tall: true },
  { image: '/creative-social.png',    tag: 'Social Media',   title: 'Instagram Creatives', client: 'E-commerce Brands', video: true },
  { image: '/creative-branding.png',  tag: 'Campaign',       title: 'Digital Ad Creatives', client: 'Retail & Fashion' },
  { colorBg: 'linear-gradient(135deg, #ec4899, #8b5cf6)', emoji: '◈', tag: 'Motion Design', title: 'Animated Reels', client: 'Lifestyle Brands', video: true },
  { colorBg: 'linear-gradient(135deg, #f59e0b, #f97316)', emoji: '✦', tag: 'Meta Ads',      title: 'Paid Campaign Art', client: 'D2C Startups' },
];

export default function CreativeReel() {
  return (
    <section className="creative-reel-section" id="creative-reel">
      <div className="container">
        <ScrollReveal>
          <div className="creative-section-label">Our Work</div>
          <h2 className="creative-section-title">
            Work That <span className="cgrad">Stops the Scroll.</span>
          </h2>
          <p className="creative-section-desc">
            A glimpse into the creative work we deliver — brand identities, social campaigns, motion graphics, and high-converting ad creatives.
          </p>
        </ScrollReveal>

        <div className="creative-reel-grid">
          {tiles.map((tile, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className={`creative-reel-tile ${tile.tall ? 'tall' : ''}`} style={{ height: '100%' }}>
                {tile.image ? (
                  <img src={tile.image} alt={tile.title} />
                ) : (
                  <div className="reel-color-block" style={{ background: tile.colorBg }}>
                    <span className="reel-color-block-symbol">{tile.emoji}</span>
                  </div>
                )}
                {tile.video && <div className="reel-video-badge">▶</div>}
                <div className="reel-overlay">
                  <span className="reel-tag">{tile.tag}</span>
                  <div className="reel-title">{tile.title}</div>
                  <div className="reel-client">{tile.client}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
