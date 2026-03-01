// src/components/sections/TracksSection.jsx
import React from 'react';
import { TRACKS } from '../../config';
import GlowCard from '../ui/GlowCard';
import CharacterFloat from '../ui/CharacterFloat';
import SpeedDivider from '../ui/SpeedDivider';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function TracksSection() {
  const ref = useScrollReveal();

  return (
    <section id="tracks" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">SELECT YOUR ZONE</h2>

      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {TRACKS.map((track, i) => (
          <TrackCard key={i} track={track} delay={i * 0.1} />
        ))}
      </div>

      <CharacterFloat src="knucklesFist" alt="Knuckles" side="left" size={180} fallbackEmoji="🥊" />
      <CharacterFloat src="amyCheer" alt="Amy" side="right" size={160} fallbackEmoji="🌸" />

      <div style={{ marginTop: '60px' }}>
        <SpeedDivider />
      </div>
    </section>
  );
}

function TrackCard({ track }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <GlowCard
      borderColor={hovered ? 'var(--gold-ring)' : 'var(--border-blue)'}
      style={{
        textAlign: 'center',
        padding: '32px 24px',
        cursor: 'default',
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ width: '100%', height: '100%' }}
      >
        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '16px' }}>
          {track.icon}
        </span>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          marginBottom: '8px',
        }}>
          {track.zone}
        </p>
        <h3 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
          color: 'var(--gold-ring)',
          marginBottom: '12px',
        }}>
          {track.domain}
        </h3>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
        }}>
          {track.desc}
        </p>
      </div>
    </GlowCard>
  );
}
