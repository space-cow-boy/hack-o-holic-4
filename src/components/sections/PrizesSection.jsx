// src/components/sections/PrizesSection.jsx
import React from 'react';
import { PRIZES, IMAGES } from '../../config';
import GlowCard from '../ui/GlowCard';
import CharacterFloat from '../ui/CharacterFloat';
import useScrollReveal from '../../hooks/useScrollReveal';
import getImage from '../../utils/getImage';

export default function PrizesSection() {
  const ref = useScrollReveal();

  return (
    <section id="prizes" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">LOOT & RINGS</h2>

      {/* Total pool */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '8px',
        }}>
          TOTAL PRIZE POOL
        </p>
        <p style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: 'var(--gold-ring)',
          animation: 'gold-pulse 2s ease-in-out infinite alternate',
        }}>
          {PRIZES.pool}
        </p>
      </div>

      {/* Prize tiers */}
      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto 48px',
        alignItems: 'end',
      }}>
        {PRIZES.tiers.map((tier, i) => {
          const emeraldImg = getImage(IMAGES[tier.emerald]);
          const isWinner = i === 0;

          return (
            <GlowCard
              key={i}
              borderColor={tier.glowColor}
              style={{
                textAlign: 'center',
                padding: '40px 24px',
                transform: isWinner ? 'scale(1.05)' : 'none',
                zIndex: isWinner ? 2 : 1,
                background: isWinner
                  ? 'linear-gradient(135deg, rgba(255,215,0,0.08), var(--card-bg))'
                  : 'var(--card-bg)',
              }}
            >
              {/* Emerald */}
              {emeraldImg ? (
                <img src={emeraldImg} alt="Emerald" style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'contain',
                  margin: '0 auto 16px',
                  animation: 'float-bob 3s ease-in-out infinite',
                }} loading="lazy" />
              ) : (
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>💎</div>
              )}

              {/* Place badge */}
              <span style={{
                display: 'inline-block',
                padding: '6px 20px',
                borderRadius: '50px',
                border: `1px solid ${tier.glowColor}`,
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                fontSize: '0.7rem',
                color: tier.glowColor,
                marginBottom: '12px',
              }}>
                {tier.place}
              </span>

              {/* Reward */}
              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: tier.glowColor,
                marginBottom: '8px',
              }}>
                {tier.reward}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}>
                {tier.description}
              </p>
            </GlowCard>
          );
        })}
      </div>

      {/* Perks */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text-primary)',
          marginBottom: '20px',
        }}>
          Additional Power-Ups
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
          {PRIZES.perks.map((perk, i) => (
            <span key={i} style={{
              display: 'inline-block',
              padding: '8px 18px',
              borderRadius: '50px',
              background: 'rgba(0,168,255,0.08)',
              border: '1px solid var(--border-blue)',
              fontFamily: "'Exo 2', sans-serif",
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
            }}>
              ⚡ {perk}
            </span>
          ))}
        </div>
      </div>

      <CharacterFloat src="superSonic" alt="Super Sonic" side="right" size={200} fallbackEmoji="✨"
        style={{ animation: 'gold-glow 2s ease-in-out infinite, float-bob 3s ease-in-out infinite' }} />
    </section>
  );
}
