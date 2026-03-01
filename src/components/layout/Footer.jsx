// src/components/layout/Footer.jsx
import React from 'react';
import { EVENT_CONFIG, IMAGES } from '../../config';
import getImage from '../../utils/getImage';

const NAV_LINKS = ['Home', 'About', 'Timeline', 'Tracks', 'Prizes', 'Gallery', 'FAQ', 'Contact'];

export default function Footer() {
  const logo = getImage(IMAGES.logoEvent);
  const sonicImg = getImage(IMAGES.sonicRun);

  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid var(--border-blue)',
      background: 'var(--dark-bg)',
      padding: '48px 5% 24px',
      overflow: 'hidden',
    }}>
      {/* Sonic running across bottom */}
      {sonicImg && (
        <img
          src={sonicImg}
          alt="Sonic running"
          style={{
            position: 'absolute',
            bottom: '8px',
            width: '50px',
            height: 'auto',
            animation: 'sonic-run-footer 6s linear infinite',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Logo + Name */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
          {logo && <img src={logo} alt="Logo" style={{ width: '28px', height: '28px', borderRadius: '4px' }} />}
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--speed-cyan)',
          }}>
            {EVENT_CONFIG.name}
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px 24px', marginBottom: '24px' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--speed-cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
          <a href={EVENT_CONFIG.instagram} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '1.3rem', color: 'var(--text-muted)', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = '#E1306C'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >📸</a>
          <a href={EVENT_CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '1.3rem', color: 'var(--text-muted)', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = '#0077B5'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >💼</a>
        </div>

        {/* Copyright */}
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          opacity: 0.6,
        }}>
          © 2026 {EVENT_CONFIG.name} · {EVENT_CONFIG.tagline} ⚡
        </p>
      </div>
    </footer>
  );
}
