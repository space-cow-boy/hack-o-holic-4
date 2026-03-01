// src/components/sections/MissionSection.jsx
import React from 'react';
import { EVENT_CONFIG } from '../../config';
import GlowCard from '../ui/GlowCard';
import CharacterFloat from '../ui/CharacterFloat';
import useScrollReveal from '../../hooks/useScrollReveal';

const MISSIONS = [
  { label: 'FORMAT', value: `${EVENT_CONFIG.duration} · ${EVENT_CONFIG.format}`, border: 'var(--blue-elec)', icon: '🎮' },
  { label: 'TEAM SIZE', value: EVENT_CONFIG.teamSize, border: 'var(--blue-elec)', icon: '👥' },
  { label: 'ELIGIBILITY', value: 'All India Students', border: 'var(--blue-elec)', icon: '🎓' },
  { label: 'VENUE', value: EVENT_CONFIG.venue, border: 'var(--blue-elec)', icon: '📍' },
  { label: 'MAX REGISTRATIONS', value: `${EVENT_CONFIG.totalSlots} Teams`, border: 'var(--gold-ring)', icon: '🏁', highlight: true },
  { label: 'FINALE ENTRIES', value: `${EVENT_CONFIG.finaleTeams} / ${EVENT_CONFIG.totalSlots}`, border: 'var(--gold-ring)', icon: '🔥', highlight: true },
];

export default function MissionSection() {
  const ref = useScrollReveal();

  return (
    <section id="mission" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">MISSION BRIEF</h2>

      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {MISSIONS.map((m, i) => (
          <GlowCard key={i} borderColor={m.border} style={m.highlight ? {
            background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(255,59,59,0.05))',
          } : {}}>
            <span style={{ fontSize: '1.8rem', marginBottom: '12px', display: 'block' }}>{m.icon}</span>
            <p style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: 'var(--text-muted)',
              marginBottom: '8px',
            }}>
              {m.label}
            </p>
            <p style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              color: m.highlight ? 'var(--gold-ring)' : 'var(--text-primary)',
            }}>
              {m.value}
            </p>
          </GlowCard>
        ))}
      </div>

      <CharacterFloat src="shadowStand" alt="Shadow" side="right" size={200} fallbackEmoji="🦔" style={{ bottom: '-20px' }} />
    </section>
  );
}
