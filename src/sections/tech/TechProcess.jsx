import React from 'react';
import { Search, Cpu, Layers, Rocket } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import './TechProcess.css';

const steps = [
  {
    icon: <Search size={24} className="tech-step-icon" />,
    title: 'Discover',
    desc: 'Deep discovery calls, requirement mapping, and technical feasibility analysis to plan the right solution.',
  },
  {
    icon: <Layers size={24} className="tech-step-icon" />,
    title: 'Architect',
    desc: 'System design, tech stack selection, database schemas, and API contracts — documented before a single line is written.',
  },
  {
    icon: <Cpu size={24} className="tech-step-icon" />,
    title: 'Build',
    desc: 'Agile sprints with weekly demos, rigorous testing, CI/CD pipelines, and full code reviews at every merge.',
  },
  {
    icon: <Rocket size={24} className="tech-step-icon" />,
    title: 'Deploy & Maintain',
    desc: 'Zero-downtime production launch, cloud provisioning, monitoring, and ongoing 24/7 SLA-backed maintenance.',
  },
];

export default function TechProcess() {
  return (
    <section className="tech-process-section" id="tech-process">
      <div className="container">
        <ScrollReveal>
          <div className="tech-section-label">How We Work</div>
          <h2 className="tech-section-title">
            Our <span className="grad">Engineering</span> Process
          </h2>
          <p className="tech-section-desc">
            A battle-tested 4-phase methodology used across 150+ projects — from MVP to enterprise scale.
          </p>
        </ScrollReveal>

        <div className="tech-process-steps">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="tech-process-reveal-wrap">
              <div className="tech-process-step">
                <div className="tech-step-num-wrap">
                  {step.icon}
                </div>
                <h3 className="tech-step-title">{step.title}</h3>
                <p className="tech-step-desc">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
