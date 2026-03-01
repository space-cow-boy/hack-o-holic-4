// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { EVENT_CONFIG, IMAGES } from '../../config';
import getImage from '../../utils/getImage';
import SonicButton from '../ui/SonicButton';

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = getImage(IMAGES.logoEvent);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 clamp(16px, 4vw, 48px)',
    height: '72px',
    background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
    backdropFilter: scrolled ? 'blur(24px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
    borderBottom: scrolled ? '1px solid transparent' : 'none',
    borderImage: scrolled ? 'linear-gradient(90deg, var(--red-bright), var(--blue-elec)) 1' : 'none',
    transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      {/* Left — Logo + Name */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        {logo && (
          <img src={logo} alt="Logo" style={{ width: '36px', height: '36px', borderRadius: '6px', objectFit: 'contain' }} />
        )}
        <span style={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(0.7rem, 1.8vw, 1rem)',
          color: 'var(--speed-cyan)',
          letterSpacing: '1px',
          whiteSpace: 'nowrap',
        }}>
          HACK O HOLIC 4.0
        </span>
      </a>

      {/* Desktop Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
      }}
        className="hide-mobile"
      >
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'color 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--speed-cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link.label}
          </a>
        ))}
        <SonicButton
          label="Register Now →"
          href={EVENT_CONFIG.registrationUrl}
          external
          style={{ padding: '10px 20px', fontSize: '0.75rem' }}
        />
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          fontSize: '1.5rem',
          color: 'var(--text-primary)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1001,
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          background: 'rgba(5,5,8,0.97)',
          backdropFilter: 'blur(20px)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          borderBottom: '1px solid var(--border-blue)',
          animation: 'fade-in-up 0.3s ease',
          zIndex: 999,
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                padding: '8px 0',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <SonicButton
            label="Register Now →"
            href={EVENT_CONFIG.registrationUrl}
            external
            style={{ textAlign: 'center', justifyContent: 'center' }}
          />
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
