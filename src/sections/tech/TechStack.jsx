import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './TechStack.css';

const row1 = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis'];
const row2 = ['React Native', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Firebase', 'Supabase', 'Swift', 'Kotlin'];

function MarqueRow({ items, reverse }) {
  const doubled = [...items, ...items, ...items, ...items]; // Quadruple to prevent spacing gaps on large screens
  return (
    <div className="tech-marquee-row">
      <div className={`tech-marquee-track ${reverse ? 'reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span className="tech-badge-pill" key={i}>
            <span className="badge-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="container">
        <ScrollReveal>
          <div className="tech-section-label">Technologies We Use</div>
          <h2 className="tech-section-title">
            Our Modern <span className="grad">Tech Stack</span>
          </h2>
          <p className="tech-section-desc">
            We select the optimal tools for each project, ensuring security, scalability, and long-term maintainability.
          </p>
        </ScrollReveal>
      </div>

      <div className="tech-marquee-container">
        <MarqueRow items={row1} />
        <MarqueRow items={row2} reverse />
      </div>
    </section>
  );
}
