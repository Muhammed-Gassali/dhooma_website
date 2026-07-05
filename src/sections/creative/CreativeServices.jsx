import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './CreativeServices.css';

const services = [
  { num: '01', icon: '◈', title: 'Brand Identity & Visual Design', desc: 'Logo design, brand guidelines, typography systems, color palettes, and full visual identity kits that make your brand unforgettable.' },
  { num: '02', icon: '✦', title: 'Social Media Creatives',         desc: 'Eye-catching posts, stories, reels thumbnails, and event banners crafted for maximum scroll-stopping engagement on Instagram, Facebook, and more.' },
  { num: '03', icon: '❋', title: 'Meta Ads Management',            desc: 'Full-funnel Facebook & Instagram ad strategy — audience targeting, creative testing, pixel optimization, and ROAS-driven campaign scaling.' },
  { num: '04', icon: '◉', title: 'Motion Graphics & Video Reels',  desc: 'Animated brand intros, social video reels, product explainers, and motion poster designs that bring your brand identity to life on screen.' },
  { num: '05', icon: '✿', title: 'SEO & Digital Marketing',        desc: 'Keyword strategy, on-page optimization, content planning, backlink campaigns, and Google Analytics dashboards to drive organic growth.' },
  { num: '06', icon: '✹', title: 'Content Strategy & Copywriting', desc: 'High-conversion landing page copy, social captions, email sequences, and content calendars that turn browsers into buyers.' },
];

export default function CreativeServices() {
  return (
    <section className="creative-services-section" id="creative-services">
      <div className="container">
        <ScrollReveal>
          <div className="creative-section-label">What We Do</div>
          <h2 className="creative-section-title">
            Services That <span className="cgrad">Make an Impact.</span>
          </h2>
          <p className="creative-section-desc">
            Six powerful creative and marketing services delivered by a team that lives and breathes design.
          </p>
        </ScrollReveal>

        <div className="creative-services-list">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="creative-service-row">
                <span className="creative-service-num">{s.num}</span>
                <div className="creative-service-body">
                  <span className="creative-service-title">{s.title}</span>
                  <span className="creative-service-desc">{s.desc}</span>
                </div>
                <div className="creative-service-icon-wrap">{s.icon}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
