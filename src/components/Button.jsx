import React from 'react';
import './Button.css';

/**
 * Premium Button with micro-animations and division-aware styles.
 */
export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', // 'primary', 'secondary', 'ghost'
  type = 'button',
  disabled = false,
  className = '',
  icon
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`premium-btn btn-${variant} ${className}`}
    >
      <span className="btn-glow"></span>
      <span className="btn-content">
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </span>
    </button>
  );
}
