// src/components/sections/HeroSection.jsx
import React, { useEffect, useRef, useMemo } from 'react';
import useEventTimer from '../../hooks/useEventTimer';
import { EVENT_CONFIG, IMAGES } from '../../config';
import getImage from '../../utils/getImage';
import TimerBox from '../ui/TimerBox';
import SonicButton from '../ui/SonicButton';
import RingCounter from '../ui/RingCounter';
import CharacterFloat from '../ui/CharacterFloat';
import ConfettiRain from '../ui/ConfettiRain';

/* ===== JS-driven background effects ===== */
function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.2,
      size: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(0,168,255,' : 'rgba(255,59,59,',
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // Lightning
    let lightnings = [];
    let lastFlash = 0;

    function spawnLightning(time) {
      if (time - lastFlash < 2000 + Math.random() * 4000) return;
      lastFlash = time;
      const isBlue = Math.random() > 0.4;
      const startX = Math.random() * canvas.width;
      lightnings.push({
        startX,
        startY: 0,
        color: isBlue ? '#00A8FF' : '#CC0000',
        alpha: 0.8,
        segments: generateLightningPath(startX, 0, startX + (Math.random() - 0.5) * 200, canvas.height * 0.7),
        life: 0,
        maxLife: 12,
      });
    }

    function generateLightningPath(x1, y1, x2, y2) {
      const segs = [];
      const steps = 8 + Math.floor(Math.random() * 6);
      let cx = x1, cy = y1;
      for (let i = 0; i < steps; i++) {
        const nx = cx + (x2 - cx) / (steps - i) + (Math.random() - 0.5) * 60;
        const ny = cy + (y2 - cy) / (steps - i);
        segs.push({ x1: cx, y1: cy, x2: nx, y2: ny });
        cx = nx; cy = ny;
      }
      return segs;
    }

    // Red fog
    const fogBlobs = [
      { x: 0.1, y: 0.85, r: 300, phase: 0 },
      { x: 0.85, y: 0.15, r: 250, phase: Math.PI },
      { x: 0.5, y: 0.5, r: 200, phase: Math.PI / 2 },
    ];

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw fog
      fogBlobs.forEach(blob => {
        const scale = 1 + 0.15 * Math.sin(time * 0.0005 + blob.phase);
        const ox = Math.sin(time * 0.0003 + blob.phase) * 20;
        const oy = Math.cos(time * 0.0004 + blob.phase) * 15;
        const grad = ctx.createRadialGradient(
          blob.x * canvas.width + ox, blob.y * canvas.height + oy, 0,
          blob.x * canvas.width + ox, blob.y * canvas.height + oy, blob.r * scale
        );
        grad.addColorStop(0, 'rgba(180,0,0,0.12)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      // Lightning
      spawnLightning(time);
      lightnings = lightnings.filter(l => l.life < l.maxLife);
      lightnings.forEach(l => {
        l.life++;
        const a = Math.max(0, l.alpha * (1 - l.life / l.maxLife));
        ctx.strokeStyle = l.color;
        ctx.globalAlpha = a;
        ctx.lineWidth = 2;
        ctx.shadowColor = l.color;
        ctx.shadowBlur = 20;
        l.segments.forEach(s => {
          ctx.beginPath();
          ctx.moveTo(s.x1, s.y1);
          ctx.lineTo(s.x2, s.y2);
          ctx.stroke();
        });
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}

/* ===== Thank You Screen (Phase 3) ===== */
function ThankYouScreen() {
  const superSonic = getImage(IMAGES.superSonic);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 2,
    }}>
      <ConfettiRain />

      {superSonic && (
        <img
          src={superSonic}
          alt="Super Sonic"
          style={{
            width: 'clamp(180px, 30vw, 300px)',
            height: 'auto',
            animation: 'gold-glow 2s ease-in-out infinite',
            marginBottom: '32px',
          }}
        />
      )}

      <h1 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
        color: 'var(--gold-ring)',
        textShadow: '0 0 30px rgba(255,215,0,0.5)',
        marginBottom: '24px',
      }}>
        🏆 HACK O HOLIC 4.0 HAS CONCLUDED! 🏆
      </h1>

      <p style={{
        fontFamily: "'Exo 2', sans-serif",
        fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
        color: 'var(--text-muted)',
        maxWidth: '600px',
        lineHeight: 1.8,
        marginBottom: '32px',
      }}>
        Thank you to all {EVENT_CONFIG.totalSlots} teams who registered
        and the {EVENT_CONFIG.finaleTeams} brave squads who competed!
      </p>

      <div style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-gold)',
        borderRadius: '12px',
        padding: '24px 32px',
        maxWidth: '500px',
        marginBottom: '40px',
      }}>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '1rem',
          color: 'var(--text-primary)',
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}>
          "You proved that great coders don't just run fast — they run SMART."
        </p>
        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          color: 'var(--gold-ring)',
          marginTop: '12px',
          textAlign: 'right',
        }}>
          — Sonic 🦔
        </p>
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <SonicButton label="🖼 View Gallery" href="#gallery" variant="outline" />
        <SonicButton label="📩 Contact Us" href="#contact" variant="outline" />
      </div>
    </div>
  );
}

/* ===== Main Hero ===== */
export default function HeroSection() {
  const timer = useEventTimer();
  const logoUni = getImage(IMAGES.logoUniversity);
  const logoClub = getImage(IMAGES.logoClub);
  const landingImg = getImage(IMAGES.heroImage);

  const isLive = timer.phase === 'live';
  const isEnded = timer.phase === 'ended';
  const isCountdown = timer.phase === 'countdown';

  if (isEnded) {
    return (
      <section id="hero" style={{ position: 'relative', minHeight: '100vh', background: 'var(--black)' }}>
        <AnimatedBackground />
        <ThankYouScreen />
      </section>
    );
  }

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '100px 20px 60px',
      overflow: 'hidden',
    }}>
      <AnimatedBackground />

      {/* Logos top-left */}
      <div style={{
        position: 'absolute',
        top: '80px',
        left: '24px',
        display: 'flex',
        gap: '12px',
        zIndex: 3,
      }}>
        {logoUni && <img src={logoUni} alt="University" style={{ width: '36px', height: '36px', borderRadius: '6px', objectFit: 'contain', background: 'rgba(255,255,255,0.1)', padding: '2px' }} />}
        {logoClub && <img src={logoClub} alt="Club" style={{ width: '36px', height: '36px', borderRadius: '6px', objectFit: 'contain', background: 'rgba(255,255,255,0.1)', padding: '2px' }} />}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: '900px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(0,168,255,0.1)',
          border: '1px solid var(--border-blue)',
          borderRadius: '50px',
          padding: '8px 24px',
          marginBottom: '24px',
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
          color: 'var(--blue-elec)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          ⚡ A NATIONAL LEVEL HACKATHON — MARCH 2026
        </div>

        {/* Landing page image — characters + title baked in */}
        {landingImg && (
          <div style={{
            width: 'clamp(340px, 75vw, 800px)',
            margin: '0 auto 16px',
            pointerEvents: 'none',
          }}>
            <img
              src={landingImg}
              alt="Hack O Holic 4.0"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 40px rgba(0,102,255,0.3)) drop-shadow(0 0 80px rgba(255,215,0,0.15))',
              }}
            />
          </div>
        )}

        {/* Tagline */}
        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
          color: 'var(--text-muted)',
          marginBottom: '24px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>
          {EVENT_CONFIG.tagline}
        </p>

        {/* Event meta */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px 24px',
          marginBottom: '40px',
          fontFamily: "'Exo 2', sans-serif",
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          color: 'var(--text-muted)',
        }}>
          <span>📅 28 March 2026</span>
          <span>|</span>
          <span>📍 GEHU Dehradun</span>
          <span>|</span>
          <span>⏱ 24 Hours</span>
        </div>

        {/* Live heading */}
        {isLive && (
          <h3 style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1rem, 3vw, 1.6rem)',
            animation: 'live-pulse 1s ease-in-out infinite',
            marginBottom: '16px',
            color: '#FF3B3B',
          }}>
            🔥 HACK O HOLIC 4.0 IS LIVE! 🔥
          </h3>
        )}

        {/* Timer label */}
        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '20px',
        }}>
          {isCountdown ? 'EVENT STARTS IN' : 'TIME ELAPSED'}
        </p>

        {/* Timer boxes */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(8px, 2vw, 24px)',
          marginBottom: '24px',
          flexWrap: 'wrap',
        }}>
          {isCountdown && (
            <TimerBox value={timer.days} label="Days" glowColor="#00A8FF" />
          )}
          <TimerBox
            value={timer.hours}
            label="Hours"
            glowColor={isLive ? '#FF3B3B' : '#00A8FF'}
            pulse={isLive}
          />
          <span style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
            color: 'var(--text-muted)',
            alignSelf: 'center',
            paddingBottom: '28px',
          }}>:</span>
          <TimerBox
            value={timer.minutes}
            label="Minutes"
            glowColor={isLive ? '#FF3B3B' : '#00A8FF'}
            pulse={isLive}
          />
          <span style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 'clamp(1.4rem, 4vw, 2.4rem)',
            color: 'var(--text-muted)',
            alignSelf: 'center',
            paddingBottom: '28px',
          }}>:</span>
          <TimerBox
            value={timer.seconds}
            label="Seconds"
            glowColor={isLive ? '#FF3B3B' : '#00A8FF'}
            pulse={isLive}
          />
        </div>

        {/* Hours remaining (Phase 2) */}
        {isLive && (
          <p style={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
            color: 'var(--gold-ring)',
            marginBottom: '32px',
          }}>
            ⚡ {timer.hoursRemaining} hours remaining ⚡
          </p>
        )}

        {/* Stats row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px 32px',
          marginBottom: '40px',
        }}>
          <RingCounter value={EVENT_CONFIG.totalSlots} label="Teams" icon="🏆" />
          <RingCounter value={EVENT_CONFIG.finaleTeams} label="Selected" icon="✅" />
          <RingCounter value="24H" label="Duration" icon="⏱" />
          <RingCounter value="₹1L+" label="Prizes" icon="💰" />
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {isLive ? (
            <SonicButton
              label="Registration Closed 🔒"
              disabled
            />
          ) : (
            <SonicButton
              label="⚡ Register Now →"
              href={EVENT_CONFIG.registrationUrl}
              external
            />
          )}
          <SonicButton
            label="Learn More ↓"
            href="#about"
            variant="outline"
          />
        </div>
      </div>

      {/* Characters at edges */}
      <CharacterFloat src="sonicRun" alt="Sonic" side="left" size={200} fallbackEmoji="🦔"
        style={{ animation: 'sonic-entrance 1s ease-out forwards, float-bob 3s ease-in-out 1s infinite' }} />
      <CharacterFloat src="eggmanVillain" alt="Eggman" side="right" size={250} opacity={0.15} fallbackEmoji="🥚" />
    </section>
  );
}
