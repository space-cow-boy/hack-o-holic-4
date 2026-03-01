// src/components/ui/CharacterFloat.jsx
import React from 'react';
import getImage from '../../utils/getImage';
import { IMAGES } from '../../config';

export default function CharacterFloat({ src, alt = '', side = 'right', size = 220, fallbackEmoji = '🦔', opacity = 1, style = {} }) {
  // Resolve image — src can be a key from IMAGES or a direct filename
  const filename = IMAGES[src] || src;
  const imgUrl = getImage(filename);

  const containerStyle = {
    position: 'absolute',
    bottom: '0',
    [side]: '0',
    width: `${size}px`,
    pointerEvents: 'none',
    animation: 'float-bob 3s ease-in-out infinite',
    opacity,
    zIndex: 2,
    ...style,
  };

  const placeholderStyle = {
    fontSize: `${size * 0.4}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${size}px`,
    height: `${size}px`,
    opacity: 0.5,
  };

  return (
    <div className="hide-mobile" style={containerStyle}>
      {imgUrl ? (
        <img
          src={imgUrl}
          alt={alt}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          loading="lazy"
        />
      ) : (
        <div style={placeholderStyle}>{fallbackEmoji}</div>
      )}
    </div>
  );
}
