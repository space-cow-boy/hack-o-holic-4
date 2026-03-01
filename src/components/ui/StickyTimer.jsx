// src/components/ui/StickyTimer.jsx
import React, { useState, useEffect } from 'react';
import useEventTimer from '../../hooks/useEventTimer';

export default function StickyTimer() {
  const timer = useEventTimer();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 600;
      setVisible(window.scrollY > heroHeight - 100);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (timer.phase === 'ended') return null;

  const pad = (n) => String(n).padStart(2, '0');

  const phaseLabel = timer.phase === 'countdown' ? 'STARTS IN' : '🔥 LIVE';
  const timeStr = timer.phase === 'countdown'
    ? `${pad(timer.days)}d ${pad(timer.hours)}:${pad(timer.minutes)}:${pad(timer.seconds)}`
    : `${pad(timer.hours)}:${pad(timer.minutes)}:${pad(timer.seconds)}`;

  return (
    <div style={{
      position: 'fixed',
      top: '88px',
      right: '24px',
      zIndex: 999,
      background: 'rgba(5,5,8,0.80)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(0,168,255,0.35)',
      borderRadius: '12px',
      padding: '12px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(-20px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <span style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 700,
        fontSize: '0.65rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: timer.phase === 'live' ? '#FF3B3B' : 'var(--blue-elec)',
      }}>
        {phaseLabel}
      </span>
      <span style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 700,
        fontSize: '0.85rem',
        color: 'var(--text-primary)',
        letterSpacing: '1px',
      }}>
        {timeStr}
      </span>
    </div>
  );
}
