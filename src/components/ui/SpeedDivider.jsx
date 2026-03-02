// src/components/ui/SpeedDivider.jsx
import React from 'react';

export default function SpeedDivider() {
  return (
    <div style={{
      width: '85%',
      height: '3px',
      margin: '0 auto',
      background: 'linear-gradient(90deg, transparent, var(--red-bright), var(--blue-elec), transparent)',
      boxShadow: '0 0 12px rgba(0,168,255,0.3), 0 0 12px rgba(255,59,59,0.3)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
        backgroundSize: '200px 100%',
        animation: 'speed-lines 1.5s linear infinite',
      }} />
    </div>
  );
}
