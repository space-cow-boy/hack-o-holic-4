// src/components/ui/GlowCard.jsx
import React from 'react';

const baseStyle = {
  background: 'var(--card-bg)',
  backdropFilter: 'blur(12px)',
  borderRadius: '12px',
  border: '1px solid',
  padding: '32px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
};

export default function GlowCard({ borderColor = 'var(--border-blue)', children, className = '', style = {}, hover = true }) {
  const [hovered, setHovered] = React.useState(false);

  const cardStyle = {
    ...baseStyle,
    borderColor: borderColor,
    boxShadow: hovered
      ? `0 0 30px ${borderColor}44, 0 8px 32px rgba(0,0,0,0.5)`
      : `0 0 20px rgba(0,100,255,0.10)`,
    transform: hovered && hover ? 'translateY(-6px) scale(1.02)' : 'none',
    ...style,
  };

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
