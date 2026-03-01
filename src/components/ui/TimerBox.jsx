// src/components/ui/TimerBox.jsx
import React from 'react';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  value: {
    fontFamily: "'Press Start 2P', monospace",
    fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
    color: '#F0F0FF',
    background: 'rgba(10,10,20,0.85)',
    border: '1px solid',
    borderRadius: '12px',
    padding: 'clamp(12px, 2vw, 24px) clamp(16px, 3vw, 32px)',
    minWidth: 'clamp(60px, 12vw, 100px)',
    textAlign: 'center',
    letterSpacing: '2px',
  },
  label: {
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 600,
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: '#A0A0C0',
  },
};

export default function TimerBox({ value, label, glowColor = '#00A8FF', pulse = false }) {
  const pad = String(value).padStart(2, '0');

  const boxStyle = {
    ...styles.value,
    borderColor: glowColor,
    animation: pulse ? 'live-pulse 1s ease-in-out infinite' : 'glow-pulse 2s ease-in-out infinite',
  };

  return (
    <div style={styles.box}>
      <div style={boxStyle}>{pad}</div>
      <span style={styles.label}>{label}</span>
    </div>
  );
}
