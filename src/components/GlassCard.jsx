import React, { useRef, useState } from 'react';
import './GlassCard.css';

/**
 * GlassCard renders a premium glassmorphic card with a mouse-tracking spotlight border.
 */
export default function GlassCard({ children, className = '', hoverGlow = true, ...rest }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !hoverGlow) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    if (rest.onMouseMove) rest.onMouseMove(e);
  };

  return (
    <div
      ref={cardRef}
      {...rest}
      onMouseMove={handleMouseMove}
      onMouseEnter={(e) => {
        setIsFocused(true);
        if (rest.onMouseEnter) rest.onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setIsFocused(false);
        if (rest.onMouseLeave) rest.onMouseLeave(e);
      }}
      className={`glass-card ${className}`}
      style={{
        '--mouse-x': `${coords.x}px`,
        '--mouse-y': `${coords.y}px`,
        ...rest.style
      }}
    >
      {hoverGlow && (
        <div 
          className="card-spotlight"
          style={{
            opacity: isFocused ? 1 : 0
          }}
        />
      )}
      <div className="card-inner">
        {children}
      </div>
    </div>
  );
}
