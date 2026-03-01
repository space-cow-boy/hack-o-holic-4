// src/components/ui/RingCounter.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function RingCounter({ value, label, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const eased = 1 - (1 - progress) * (1 - progress);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      padding: '12px 20px',
    }}>
      <span style={{ fontSize: '1.6rem' }}>{icon}</span>
      <span style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
        color: 'var(--gold-ring)',
      }}>
        {typeof value === 'string' ? value : count}
      </span>
      <span style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontWeight: 600,
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        color: 'var(--text-muted)',
      }}>
        {label}
      </span>
    </div>
  );
}
