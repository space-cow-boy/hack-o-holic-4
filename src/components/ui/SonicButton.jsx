// src/components/ui/SonicButton.jsx
import React from 'react';

const primaryGrad = 'linear-gradient(135deg, #0055FF, #00BBFF)';

export default function SonicButton({ label, href, onClick, variant = 'primary', external = false, disabled = false, style = {} }) {
  const [hovered, setHovered] = React.useState(false);

  const base = {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: 700,
    fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
    padding: '14px 32px',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...style,
  };

  const primaryStyle = {
    ...base,
    background: primaryGrad,
    color: '#fff',
    border: 'none',
    boxShadow: hovered ? '0 0 30px rgba(0,100,255,0.5)' : '0 0 15px rgba(0,100,255,0.25)',
    transform: hovered ? 'translateY(-2px)' : 'none',
  };

  const outlineStyle = {
    ...base,
    background: 'transparent',
    color: 'var(--blue-elec)',
    border: '1px solid var(--border-blue)',
    boxShadow: hovered ? '0 0 20px rgba(0,168,255,0.3)' : 'none',
    transform: hovered ? 'translateY(-2px)' : 'none',
  };

  const btnStyle = variant === 'primary' ? primaryStyle : outlineStyle;

  const props = {
    style: btnStyle,
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (href && !disabled) {
    return (
      <a
        href={href}
        {...props}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }

  return (
    <button {...props} onClick={disabled ? undefined : onClick} disabled={disabled}>
      {label}
    </button>
  );
}
