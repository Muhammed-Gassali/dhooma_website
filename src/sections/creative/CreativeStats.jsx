import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import './CreativeStats.css';

function AnimCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now) => {
          const elapsed = now - t0;
          const p = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setCount(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="creative-stat-num">{count}{suffix}</span>;
}

const stats = [
  { icon: '✦', value: 500, suffix: '+', name: 'Creatives Delivered' },
  { icon: '◈', value: 3, suffix: 'x', name: 'Avg Engagement Lift' },
  { icon: '❋', value: 200, suffix: '+', name: 'Brand Projects' },
  { icon: '◉', value: 98, suffix: '%', name: 'Client Retention' },
];

export default function CreativeStats() {
  return (
    <section className="creative-stats-section" id="creative-stats">
      <div className="container">
        <div className="creative-stats-grid">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.08} className="creative-stats-reveal-wrap">
              <div className="creative-stat-box">
                <span className="creative-stat-icon">{s.icon}</span>
                <AnimCounter target={s.value} suffix={s.suffix} />
                <span className="creative-stat-name">{s.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
