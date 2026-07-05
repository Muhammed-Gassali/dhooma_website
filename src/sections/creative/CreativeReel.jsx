import React, { useEffect, useRef } from 'react';
import './CreativeReel.css';

/* ── First 3 real images, cycled across all 30 cards ── */
const BASE_TILES = [
  { image: '/creative-portfolio.png', tag: 'Brand Identity',  title: 'Premium Brand Design',    client: 'Multiple Clients'    },
  { image: '/creative-social.png',    tag: 'Social Media',    title: 'Instagram Creatives',     client: 'E-commerce Brands',  video: true },
  { image: '/creative-branding.png',  tag: 'Campaign',        title: 'Digital Ad Creatives',    client: 'Retail & Fashion'    },
];

/* Generate 30 cards cycling through the 3 base images */
const TILES = Array.from({ length: 30 }, (_, i) => ({
  ...BASE_TILES[i % 3],
  id: i,
}));

export default function CreativeReel() {
  const scrollRef = useRef(null);
  const pausedRef = useRef(false);

  /* ── Set viewport height = exactly 2 full card rows ── */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const setHeight = () => {
      const firstTile = el.querySelector('.creative-reel-tile');
      if (!firstTile) return;
      const cardH = firstTile.getBoundingClientRect().height;
      const gap   = 14;
      el.style.height = `${cardH * 2 + gap}px`;
    };

    // Run after images have had a chance to paint
    const timer = setTimeout(setHeight, 100);

    const ro = new ResizeObserver(setHeight);
    ro.observe(el);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    /* One "step" = height of one card row (card height + gap).
       We read it from the first tile in the grid after mount.      */
    const getRowHeight = () => {
      const firstTile = el.querySelector('.creative-reel-tile');
      if (!firstTile) return 244;                // fallback
      return firstTile.getBoundingClientRect().height + 14; // 14px gap
    };

    let intervalId = null;

    const doStep = () => {
      if (pausedRef.current) return;
      const rowH = getRowHeight();
      const maxScroll = el.scrollHeight - el.clientHeight;

      if (el.scrollTop + rowH >= maxScroll) {
        // Reached bottom — smoothly scroll back to top
        el.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ top: rowH, behavior: 'smooth' });
      }
    };

    intervalId = setInterval(doStep, 2000); // every 2 seconds

    /* Pause on hover / touch */
    const pause  = () => { pausedRef.current = true; };
    const resume = () => { pausedRef.current = false; };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend',   resume, { passive: true });

    return () => {
      clearInterval(intervalId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend',   resume);
    };
  }, []);


  return (
    <section className="creative-reel-section" id="creative-reel">
      <div className="container">
        {/* Header */}
        <div className="creative-reel-header">
          <div className="creative-section-label">Our Work</div>
          <h2 className="creative-section-title">
            Work That <span className="cgrad">Stops the Scroll.</span>
          </h2>
          <p className="creative-section-desc">
            A glimpse into the creative work we deliver — brand identities, social campaigns,
            motion graphics, and high-converting ad creatives.
          </p>
        </div>

        {/* Auto-scrolling viewport */}
        <div className="creative-reel-viewport" ref={scrollRef}>
          <div className="creative-reel-grid">
            {TILES.map((tile) => (
              <div key={tile.id} className="creative-reel-tile">
                <img src={tile.image} alt={tile.title} />
                {tile.video && <div className="reel-video-badge">▶</div>}
                <div className="reel-overlay">
                  <span className="reel-tag">{tile.tag}</span>
                  <div className="reel-title">{tile.title}</div>
                  <div className="reel-client">{tile.client}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
