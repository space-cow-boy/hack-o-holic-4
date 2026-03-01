// src/components/sections/TimelineSection.jsx
import React, { useEffect, useRef } from 'react';
import { STAGES, IMAGES } from '../../config';
import GlowCard from '../ui/GlowCard';
import CharacterFloat from '../ui/CharacterFloat';
import getImage from '../../utils/getImage';

export default function TimelineSection() {
  const containerRef = useRef(null);

  // JS-based scroll reveal with stagger
  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.timeline-card');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0) translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const sonicImg = getImage(IMAGES.sonicRun);
  const trophyImg = getImage(IMAGES.trophySonic);

  return (
    <section id="timeline" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">THE EVOLUTION PATH</h2>

      <div ref={containerRef} style={{
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
      }}>
        {/* Connecting line */}
        <div className="hide-mobile" style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          right: '5%',
          height: '3px',
          background: 'linear-gradient(90deg, var(--speed-cyan), var(--gold-ring), var(--red-bright), var(--gold-ring))',
          boxShadow: '0 0 15px rgba(0,168,255,0.3)',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }} />

        {/* Stage cards in ascending staircase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          position: 'relative',
          zIndex: 1,
        }}>
          {STAGES.map((stage, i) => {
            const charImg = getImage(IMAGES[stage.character]);
            return (
              <div
                key={stage.id}
                className="timeline-card"
                style={{
                  opacity: 0,
                  transform: `translateY(${40 - i * 10}px) translateX(${i % 2 === 0 ? '-30px' : '30px'})`,
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  marginTop: `${(3 - i) * 20}px`, // Ascending staircase
                }}
              >
                <GlowCard borderColor={stage.borderColor}>
                  {/* Stage number orb */}
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${stage.borderColor}, transparent)`,
                    border: `2px solid ${stage.borderColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    color: '#fff',
                    marginBottom: '12px',
                    boxShadow: `0 0 15px ${stage.borderColor}55`,
                  }}>
                    {stage.id}
                  </div>

                  {/* Badge */}
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    border: `1px solid ${stage.borderColor}`,
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.65rem',
                    color: stage.borderColor,
                    letterSpacing: '2px',
                    marginBottom: '8px',
                  }}>
                    {stage.label}
                  </span>

                  {/* Zone */}
                  <p style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    marginBottom: '6px',
                  }}>
                    {stage.zone}
                  </p>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                    color: 'var(--gold-ring)',
                    marginBottom: '8px',
                  }}>
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                  }}>
                    {stage.description}
                  </p>

                  {/* Date + mode */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                  }}>
                    <span>📅 {stage.date}</span>
                    <span>📡 {stage.mode}</span>
                  </div>

                  {/* Character at bottom */}
                  {charImg && (
                    <img src={charImg} alt="" style={{
                      width: '50px',
                      height: 'auto',
                      position: 'absolute',
                      bottom: '-8px',
                      right: '8px',
                      opacity: 0.25,
                      pointerEvents: 'none',
                    }} loading="lazy" />
                  )}
                </GlowCard>
              </div>
            );
          })}
        </div>

        {/* Trophy at peak */}
        {trophyImg && (
          <div className="hide-mobile" style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'gold-glow 2s ease-in-out infinite',
          }}>
            <img src={trophyImg} alt="Trophy" style={{ width: '50px', height: 'auto' }} />
            <span style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '0.6rem',
              color: 'var(--gold-ring)',
              marginTop: '4px',
            }}>
              GRAND FINALE 🏆
            </span>
          </div>
        )}
      </div>

      {/* Sonic on the path */}
      {sonicImg && (
        <div className="hide-mobile" style={{
          position: 'absolute',
          bottom: '40%',
          left: '55%',
          width: '60px',
          zIndex: 5,
          animation: 'float-bob 2s ease-in-out infinite',
          pointerEvents: 'none',
        }}>
          <img src={sonicImg} alt="Sonic" style={{ width: '100%', filter: 'drop-shadow(0 0 10px rgba(0,168,255,0.5))' }} />
        </div>
      )}
    </section>
  );
}
