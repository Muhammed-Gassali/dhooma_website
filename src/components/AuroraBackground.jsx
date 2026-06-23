import React, { useRef, useEffect, useCallback } from 'react';
import './AuroraBackground.css';

/**
 * AuroraBackground — Canvas-based aurora borealis effect.
 * Color palette morphs smoothly when activeDivision changes.
 *
 * Tech:     Cyan (#06b6d4) → Blue (#3b82f6) → Teal (#2dd4bf)
 * Creative: Pink (#ec4899) → Amber (#f59e0b) → Violet (#8b5cf6)
 */
export default function AuroraBackground({ activeDivision }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const divisionRef = useRef(activeDivision);

  // Keep a mutable ref of activeDivision so the animation loop can read it
  // without needing to restart when the value changes.
  useEffect(() => {
    divisionRef.current = activeDivision;
  }, [activeDivision]);

  // -----------------------------------------------------------------
  // Utility: hex → [r, g, b]
  // -----------------------------------------------------------------
  const hexToRgb = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  };

  // -----------------------------------------------------------------
  // Utility: lerp between two RGB triples by t ∈ [0, 1]
  // -----------------------------------------------------------------
  const lerpRgb = (a, b, t) => [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];

  const rgbStr = ([r, g, b], a = 1) => `rgba(${r},${g},${b},${a})`;

  // -----------------------------------------------------------------
  // Colour palettes  (base, mid, accent for each division)
  // -----------------------------------------------------------------
  const PALETTES = {
    tech: {
      base:   hexToRgb('#06b6d4'),  // cyan
      mid:    hexToRgb('#3b82f6'),  // royal blue
      accent: hexToRgb('#2dd4bf'),  // teal
      bg:     '#030712',
    },
    creative: {
      base:   hexToRgb('#ec4899'),  // rose pink
      mid:    hexToRgb('#8b5cf6'),  // violet
      accent: hexToRgb('#f59e0b'),  // amber
      bg:     '#0d0416',
    },
  };

  // -----------------------------------------------------------------
  // Streamer data – each "wave" animates independently
  // -----------------------------------------------------------------
  const createStreamers = (count) =>
    Array.from({ length: count }, (_, i) => ({
      phase:     (i / count) * Math.PI * 2,          // offset
      speed:     0.0003 + Math.random() * 0.0004,    // wave speed
      amplitude: 0.15  + Math.random() * 0.25,       // vertical swing (frac of H)
      yBase:     0.15  + (i / count) * 0.65,         // base Y (frac of H)
      width:     0.35  + Math.random() * 0.45,       // horizontal spread (frac of W)
      xOffset:   -0.15 + Math.random() * 0.3,        // lateral nudge
      alpha:     0.12  + Math.random() * 0.20,       // opacity cap
      colorT:    Math.random(),                       // blend position in palette
      thickness: 80    + Math.random() * 180,         // vertical gradient spread (px)
    }));

  const streamers = useRef(createStreamers(9));

  // -----------------------------------------------------------------
  // Smooth palette transition state
  // -----------------------------------------------------------------
  const paletteState = useRef({
    current: { ...PALETTES.tech },
    target:  { ...PALETTES.tech },
    t: 1,          // 1 = transition complete
    speed: 0.008,  // per-frame step
  });

  // Watch activeDivision and kick off palette transition
  useEffect(() => {
    const p = paletteState.current;
    p.current = {
      base:   [...p.current.base.map((v, i) => Math.round(v + (p.target.base[i]   - v) * p.t))],
      mid:    [...p.current.mid.map((v, i)  => Math.round(v + (p.target.mid[i]    - v) * p.t))],
      accent: [...p.current.accent.map((v, i)=> Math.round(v + (p.target.accent[i]- v) * p.t))],
      bg:     p.target.bg,
    };
    p.target = { ...PALETTES[activeDivision] };
    p.t = 0;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDivision]);

  // -----------------------------------------------------------------
  // Main draw loop
  // -----------------------------------------------------------------
  const draw = useCallback((canvas, ctx, ts) => {
    const W = canvas.width;
    const H = canvas.height;

    // ── 1. Advance palette lerp ──────────────────────────────────
    const ps = paletteState.current;
    if (ps.t < 1) {
      ps.t = Math.min(1, ps.t + ps.speed);
    }
    const t = ps.t;
    const pal = {
      base:   lerpRgb(ps.current.base,   ps.target.base,   t),
      mid:    lerpRgb(ps.current.mid,    ps.target.mid,    t),
      accent: lerpRgb(ps.current.accent, ps.target.accent, t),
      bg:     ps.target.bg,
    };

    // ── 2. Dark base fill ────────────────────────────────────────
    ctx.fillStyle = pal.bg;
    ctx.fillRect(0, 0, W, H);

    // ── 3. Far, large glow ───────────────────────────────────────
    const bigGlow = ctx.createRadialGradient(
      W * 0.5, H * 0.2, 0,
      W * 0.5, H * 0.2, W * 0.7
    );
    bigGlow.addColorStop(0,   rgbStr(pal.base,   0.12));
    bigGlow.addColorStop(0.5, rgbStr(pal.mid,    0.05));
    bigGlow.addColorStop(1,   rgbStr(pal.base,   0));
    ctx.fillStyle = bigGlow;
    ctx.fillRect(0, 0, W, H);

    // ── 4. Individual aurora streamers ───────────────────────────
    for (const s of streamers.current) {
      // Animate phase
      s.phase += s.speed * (ts || 16);

      // Choose color by mixing base, mid, accent
      const c = s.colorT < 0.5
        ? lerpRgb(pal.base, pal.mid,    s.colorT * 2)
        : lerpRgb(pal.mid,  pal.accent, (s.colorT - 0.5) * 2);

      // Compute wave-path centerY across screen width
      const segments = 80;
      const segW = W / segments;

      ctx.save();
      ctx.globalCompositeOperation = 'screen'; // additive glow

      for (let seg = 0; seg < segments; seg++) {
        const xFrac = seg / segments;
        const x     = seg * segW;

        // Sine-wave vertical drift
        const wave  = Math.sin(s.phase + xFrac * Math.PI * 3)
                    * Math.cos(s.phase * 0.4 + xFrac * Math.PI * 1.5);
        const yFrac = s.yBase + wave * s.amplitude;
        const cy    = yFrac * H + s.xOffset * H * 0.2;

        // Envelope: streamer fades at its horizontal edges
        const env = Math.sin(
          Math.PI * Math.max(0, Math.min(1,
            (xFrac - (0.5 - s.width * 0.5)) / s.width
          ))
        );
        if (env <= 0) continue;

        const alpha = s.alpha * env;

        // Vertical gradient for the streamer band
        const grad = ctx.createLinearGradient(x, cy - s.thickness, x, cy + s.thickness);
        grad.addColorStop(0,    rgbStr(c, 0));
        grad.addColorStop(0.3,  rgbStr(c, alpha * 0.35));
        grad.addColorStop(0.5,  rgbStr(c, alpha));
        grad.addColorStop(0.7,  rgbStr(c, alpha * 0.35));
        grad.addColorStop(1,    rgbStr(c, 0));

        ctx.fillStyle = grad;
        ctx.fillRect(x, cy - s.thickness, segW + 1, s.thickness * 2);
      }

      ctx.restore();
    }

    // ── 5. Subtle star-field glitter ─────────────────────────────
    ctx.save();
    // Paint just a few sparkles per frame for a twinkling feel
    for (let i = 0; i < 4; i++) {
      const sx = Math.random() * W;
      const sy = Math.random() * H * 0.6;    // stars in upper half
      const sr = Math.random() * 1.2;
      const sa = Math.random() * 0.6;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${sa})`;
      ctx.fill();
    }
    ctx.restore();

    // ── 6. Ground-level vignette gradient ────────────────────────
    const vignette = ctx.createLinearGradient(0, H * 0.6, 0, H);
    vignette.addColorStop(0, 'rgba(0,0,0,0)');
    vignette.addColorStop(1, 'rgba(0,0,0,0.75)');
    ctx.fillStyle = vignette;
    ctx.fillRect(0, H * 0.6, W, H * 0.4);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -----------------------------------------------------------------
  // Mount: resize canvas + start animation loop
  // -----------------------------------------------------------------
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

    let lastTs = 0;
    const loop = (ts) => {
      const delta = ts - lastTs;
      lastTs = ts;
      draw(canvas, ctx, delta);
      animationRef.current = requestAnimationFrame(loop);
    };
    animationRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);

  return (
    <div className="aurora-bg-wrapper">
      <canvas ref={canvasRef} className="aurora-canvas" />
    </div>
  );
}
