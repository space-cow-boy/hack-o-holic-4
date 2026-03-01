// src/components/sections/FaqSection.jsx
import React, { useState } from 'react';
import { FAQS } from '../../config';
import CharacterFloat from '../ui/CharacterFloat';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useScrollReveal();

  return (
    <section id="faq" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">ASK TAILS</h2>

      <CharacterFloat src="tailsFly" alt="Tails" side="left" size={180} fallbackEmoji="🦊" />

      <div ref={ref} className="reveal" style={{
        maxWidth: '700px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              style={{
                background: isOpen ? 'rgba(15,15,26,0.95)' : 'var(--card-bg)',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: isOpen ? 'var(--gold-ring)' : 'var(--border-blue)',
                borderLeftWidth: '3px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '18px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: isOpen ? 'var(--gold-ring)' : 'var(--text-primary)',
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                  textAlign: 'left',
                  transition: 'color 0.3s ease',
                }}
              >
                <span>{faq.q}</span>
                <span style={{
                  fontSize: '1.2rem',
                  transition: 'transform 0.3s ease',
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                  marginLeft: '12px',
                }}>
                  +
                </span>
              </button>

              {/* Answer */}
              <div style={{
                maxHeight: isOpen ? '200px' : '0px',
                padding: isOpen ? '0 20px 18px' : '0 20px',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease, padding 0.4s ease',
              }}>
                <p style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}>
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
