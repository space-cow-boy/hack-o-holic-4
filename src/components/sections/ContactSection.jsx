// src/components/sections/ContactSection.jsx
import React from 'react';
import { EVENT_CONFIG, ORGANIZERS, IMAGES } from '../../config';
import GlowCard from '../ui/GlowCard';
import SonicButton from '../ui/SonicButton';
import CharacterFloat from '../ui/CharacterFloat';
import useScrollReveal from '../../hooks/useScrollReveal';
import getImage from '../../utils/getImage';

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">NEED HELP?</h2>

      {/* Eggman ambient */}
      <CharacterFloat src="eggmanVillain" alt="Eggman" side="right" size={300} opacity={0.08} fallbackEmoji="🥚" />

      {/* Organizer cards */}
      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto 48px',
      }}>
        {ORGANIZERS.map((org, i) => {
          const charImg = getImage(IMAGES[org.character]);
          return (
            <GlowCard key={i} borderColor="var(--border-blue)" style={{ textAlign: 'center', padding: '32px 20px' }}>
              {charImg ? (
                <img src={charImg} alt={org.name} style={{
                  width: '72px',
                  height: '72px',
                  objectFit: 'contain',
                  margin: '0 auto 16px',
                  animation: 'float-bob 3s ease-in-out infinite',
                }} loading="lazy" />
              ) : (
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🦔</div>
              )}

              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                color: 'var(--gold-ring)',
                marginBottom: '4px',
              }}>
                {org.name}
              </h3>
              <p style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: '8px',
              }}>
                {org.role}
              </p>
              <p style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.85rem',
                color: 'var(--blue-elec)',
              }}>
                📞 {org.phone}
              </p>
            </GlowCard>
          );
        })}
      </div>

      {/* Social row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
        <SonicButton
          label="📸 Instagram"
          href={EVENT_CONFIG.instagram}
          external
          variant="outline"
        />
        <SonicButton
          label="💼 LinkedIn"
          href={EVENT_CONFIG.linkedin}
          external
          variant="outline"
        />
      </div>

      {/* Big CTA */}
      <div style={{ textAlign: 'center' }}>
        <SonicButton
          label="⚡ REGISTER NOW — SECURE YOUR SLOT →"
          href={EVENT_CONFIG.registrationUrl}
          external
          style={{ fontSize: 'clamp(0.7rem,1.5vw,0.9rem)', padding: '18px 40px' }}
        />
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginTop: '12px',
          opacity: 0.6,
        }}>
          Only {EVENT_CONFIG.totalSlots} slots available. Registration closes when full.
        </p>
      </div>
    </section>
  );
}
