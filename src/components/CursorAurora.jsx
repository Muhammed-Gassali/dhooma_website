import React, { useRef, useEffect } from 'react';
import './CursorAurora.css';

/**
 * CursorAurora — Medium-weight cursor aurora.
 * Draws the main cursor halo + a short trail of 6 ghost glows.
 * Total draw calls per frame: 3 (main) + 6 (trail) = 9 max. Very light.
 */
export default function CursorAurora({ activeDivision }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  const mouse   = useRef({ x: -500, y: -500 });
  const current = useRef({ x: -500, y: -500 });
  const hueRef  = useRef(0);

  // Trail: ring buffer of last N smoothed positions
  const TRAIL_LEN = 6;
  const trail = useRef(Array.from({ length: TRAIL_LEN }, () => ({ x: -500, y: -500 })));
  const trailPtr = useRef(0);

  const PALETTES = {
    tech:     [186, 217, 174],  // cyan, blue, teal
    creative: [330, 272, 38],   // rose, violet, amber
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      hueRef.current = (hueRef.current + 1.5) % 360;
    };
    window.addEventListener('mousemove', onMove);

    const loop = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Smooth-follow the cursor
      const ease = 0.1;
      current.current.x += (mouse.current.x - current.current.x) * ease;
      current.current.y += (mouse.current.y - current.current.y) * ease;
      const cx = current.current.x;
      const cy = current.current.y;

      // Push smoothed position into trail ring buffer every frame
      trail.current[trailPtr.current % TRAIL_LEN] = { x: cx, y: cy };
      trailPtr.current++;

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'screen';

      const hues  = PALETTES[activeDivision] ?? PALETTES.tech;
      const angle = hueRef.current;
      const h1 = (hues[0] + angle * 0.5)  % 360;
      const h2 = (hues[1] + angle * 0.35) % 360;
      const h3 = (hues[2] + angle * 0.6)  % 360;

      // ── Trail glows (oldest → faintest) ──────────────────────
      for (let i = 0; i < TRAIL_LEN; i++) {
        // Walk backwards from oldest to newest in ring buffer
        const idx  = (trailPtr.current - TRAIL_LEN + i + TRAIL_LEN) % TRAIL_LEN;
        const pos  = trail.current[idx];
        const t    = i / TRAIL_LEN;          // 0 = oldest, 1 = newest
        const r    = 30 + t * 55;            // radius 30–85 px
        const a    = 0.04 + t * 0.10;        // opacity fades with age
        const hue  = (h2 + i * 18) % 360;   // each dot slightly different hue

        const g = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, r);
        g.addColorStop(0,   `hsla(${hue},90%,65%, ${a.toFixed(2)})`);
        g.addColorStop(0.5, `hsla(${(hue+30)%360},85%,60%, ${(a * 0.4).toFixed(2)})`);
        g.addColorStop(1,   `hsla(${hue},80%,55%, 0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Outer soft bloom ─────────────────────────────────────
      const outer = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
      outer.addColorStop(0,    `hsla(${h1},90%,65%, 0.15)`);
      outer.addColorStop(0.45, `hsla(${h2},85%,60%, 0.07)`);
      outer.addColorStop(0.8,  `hsla(${h3},80%,55%, 0.025)`);
      outer.addColorStop(1,    `hsla(${h1},80%,50%, 0)`);
      ctx.fillStyle = outer;
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.fill();

      // ── Inner vivid core ─────────────────────────────────────
      const inner = ctx.createRadialGradient(cx, cy, 0, cx, cy, 55);
      inner.addColorStop(0,   `hsla(${h2},100%,78%, 0.40)`);
      inner.addColorStop(0.5, `hsla(${h3},95%,65%,  0.15)`);
      inner.addColorStop(1,   `hsla(${h1},90%,60%,  0)`);
      ctx.fillStyle = inner;
      ctx.beginPath();
      ctx.arc(cx, cy, 55, 0, Math.PI * 2);
      ctx.fill();

      // ── Bright centre dot ────────────────────────────────────
      const dot = ctx.createRadialGradient(cx, cy, 0, cx, cy, 12);
      dot.addColorStop(0,  `hsla(${h3},100%,92%, 0.75)`);
      dot.addColorStop(1,  `hsla(${h3},100%,80%, 0)`);
      ctx.fillStyle = dot;
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fill();

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [activeDivision]);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-aurora-canvas"
      aria-hidden="true"
    />
  );
}
