import React, { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children and adds .revealed class
 * when element enters viewport, triggering CSS animations.
 * Usage: <ScrollReveal delay={0.1}><YourComponent /></ScrollReveal>
 */
export default function ScrollReveal({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-wrap ${className}`} style={style}>
      {children}
    </div>
  );
}
