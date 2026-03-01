// src/components/sections/SponsorsSection.jsx
import React from 'react';
import { SPONSORS, IMAGES, EVENT_CONFIG } from '../../config';
import GlowCard from '../ui/GlowCard';
import SonicButton from '../ui/SonicButton';
import useScrollReveal from '../../hooks/useScrollReveal';
import getImage from '../../utils/getImage';

const BENEFITS = [
  { img: 'chaosEmeraldGold', title: 'Brand Visibility', desc: 'Logo on banners, posters, digital displays', icon: '🥇' },
  { img: 'chaosEmeraldBlue', title: 'Scout Top Talent', desc: 'Access to 250+ developers nationwide', icon: '🎯' },
  { img: 'chaosEmeraldRed', title: 'Mentor & Engage', desc: 'Host workshops, judge rounds, connect', icon: '🎓' },
  { img: 'goldRing', title: 'Social Impact', desc: 'Support education & innovation at scale', icon: '💚' },
];

export default function SponsorsSection() {
  const ref = useScrollReveal();

  return (
    <section id="sponsors" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">JOIN THE ALLIANCE</h2>

      {/* Benefits */}
      <div ref={ref} className="reveal" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto 48px',
      }}>
        {BENEFITS.map((b, i) => {
          const img = getImage(IMAGES[b.img]);
          return (
            <GlowCard key={i} borderColor="var(--border-blue)" style={{ textAlign: 'center', padding: '28px 20px' }}>
              {img ? (
                <img src={img} alt="" style={{ width: '48px', height: '48px', objectFit: 'contain', margin: '0 auto 12px' }} loading="lazy" />
              ) : (
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{b.icon}</div>
              )}
              <h3 style={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--gold-ring)',
                marginBottom: '8px',
              }}>
                {b.title}
              </h3>
              <p style={{
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
              }}>
                {b.desc}
              </p>
            </GlowCard>
          );
        })}
      </div>

      {/* Sponsors or CTA */}
      {SPONSORS.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <GlowCard borderColor="var(--border-gold)" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '40px 32px' }}>
            <h3 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--gold-ring)',
              marginBottom: '12px',
            }}>
              Become a Sponsor
            </h3>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}>
              Partner with {EVENT_CONFIG.name} and reach 250+ talented developers across India.
            </p>
            <SonicButton label="Get in Touch →" href="#contact" variant="outline" />
          </GlowCard>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '32px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {SPONSORS.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 24px',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-blue)',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
            }}>
              <img src={getImage(s.logo)} alt={s.name} style={{ height: '40px', objectFit: 'contain' }} />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
