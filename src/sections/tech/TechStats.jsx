import React, { useEffect, useRef, useState } from 'react';
import { Activity, Users, Star, Clock } from 'lucide-react';
import ScrollReveal from '../../components/ScrollReveal';
import './TechStats.css';

function Counter({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
          else setCount(target);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="tech-stat-number">{count}{suffix}</span>;
}

const stats = [
  { icon: <Activity size={20} />, value: 150, suffix: '+', label: 'Projects Shipped' },
  { icon: <Users size={20} />, value: 50, suffix: '+', label: 'Enterprise Clients' },
  { icon: <Star size={20} />, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: <Clock size={20} />, value: 5, suffix: 'yrs', label: 'Industry Experience' },
];

export default function TechStats() {
  return (
    <section className="tech-stats-section">
      <div className="container">
        <div className="tech-stats-grid">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="tech-stats-reveal-wrap">
              <div className="tech-stat-item">
                <div className="tech-stat-icon">{s.icon}</div>
                <Counter target={s.value} suffix={s.suffix} />
                <span className="tech-stat-label">{s.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
