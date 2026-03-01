// src/components/sections/AboutSection.jsx
import React from 'react';
import { EVENT_CONFIG } from '../../config';
import GlowCard from '../ui/GlowCard';
import CharacterFloat from '../ui/CharacterFloat';
import SpeedDivider from '../ui/SpeedDivider';
import useScrollReveal from '../../hooks/useScrollReveal';
import getImage from '../../utils/getImage';
import { IMAGES } from '../../config';

export default function AboutSection() {
  const ref = useScrollReveal();
  const logoUni = getImage(IMAGES.logoUniversity);
  const logoClub = getImage(IMAGES.logoClub);

  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">ABOUT THE ZONE</h2>

      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
        gap: '32px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* The Stage */}
        <GlowCard borderColor="var(--blue-elec)">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            {logoUni ? (
              <img src={logoUni} alt="University" style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'contain', background: 'rgba(255,255,255,0.08)', padding: '4px' }} />
            ) : (
              <span style={{ fontSize: '2rem' }}>🏫</span>
            )}
            <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--blue-elec)' }}>
              THE STAGE
            </h3>
          </div>
          <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Graphic Era Hill University
          </h4>
          <p style={{ fontFamily: "'Exo 2', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            Dehradun, Uttarakhand — One of Northern India's premier tech campuses, hosting the region's most electrifying hackathon for the 4th consecutive year.
          </p>
        </GlowCard>

        {/* The Crew */}
        <GlowCard borderColor="var(--gold-ring)">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            {logoClub ? (
              <img src={logoClub} alt="Club" style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'contain', background: 'rgba(255,255,255,0.08)', padding: '4px' }} />
            ) : (
              <span style={{ fontSize: '2rem' }}>🎯</span>
            )}
            <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: 'var(--gold-ring)' }}>
              THE CREW
            </h3>
          </div>
          <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Tech Club — GEHU
          </h4>
          <p style={{ fontFamily: "'Exo 2', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            The student-led tech community behind 4 editions of Hack O Holic. Building tomorrow's innovators through code, collaboration, and competition.
          </p>
        </GlowCard>
      </div>

      <CharacterFloat src="tailsFly" alt="Tails" side="right" size={180} fallbackEmoji="🦊" />

      <div style={{ marginTop: '60px' }}>
        <SpeedDivider />
      </div>
    </section>
  );
}
