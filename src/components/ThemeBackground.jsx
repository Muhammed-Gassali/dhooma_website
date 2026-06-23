import React from 'react';
import './ThemeBackground.css';

/**
 * ThemeBackground renders dynamic mesh grids and floating blurred organic gradient blobs
 * which animate and morph depending on whether the user is in Dhoomatech (Tech) or Dhooma Creative (Creative) mode.
 */
export default function ThemeBackground({ activeDivision }) {
  return (
    <div className={`theme-background-wrapper`}>
      {/* Structural grid overlay, visible primarily in tech mode */}
      <div className={`tech-grid-overlay ${activeDivision === 'tech' ? 'active' : ''}`} />

      {/* Floating dynamic blobs */}
      <div className="blobs-container">
        <div className="floating-blob blob-primary" />
        <div className="floating-blob blob-secondary" />
        <div className="floating-blob blob-accent" />
      </div>
    </div>
  );
}
