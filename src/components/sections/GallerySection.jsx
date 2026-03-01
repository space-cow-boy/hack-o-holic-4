// src/components/sections/GallerySection.jsx
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { GALLERY_IMAGES } from '../../config';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function GallerySection() {
  const ref = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState(null);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const animRef = useRef(null);
  const posRef = useRef(0);

  // Placeholders if no images provided
  const images = useMemo(() => {
    if (GALLERY_IMAGES.length > 0) return GALLERY_IMAGES;
    return Array.from({ length: 9 }, (_, i) => ({
      src: `https://picsum.photos/400/300?random=${i + 1}`,
      caption: `Hack O Holic 3.0 — Highlight ${i + 1}`,
      edition: '3.0',
    }));
  }, []);

  // Duplicate for seamless scroll
  const allImages = [...images, ...images];

  // JS-driven scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = 296; // 280 + 16 gap
    const totalWidth = images.length * cardWidth;
    let lastTime = null;

    function animate(time) {
      if (!lastTime) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;

      if (!paused) {
        posRef.current -= dt * 0.04; // pixels per ms speed
        if (posRef.current <= -totalWidth) {
          posRef.current += totalWidth;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused, images.length]);

  return (
    <section id="gallery" className="section" style={{ position: 'relative' }}>
      <h2 className="section-title">PAST MISSIONS</h2>

      <div
        ref={ref}
        className="reveal"
        style={{ position: 'relative', overflow: 'hidden', margin: '0 -5%', padding: '0 5%' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(90deg, var(--black), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          width: '80px',
          background: 'linear-gradient(-90deg, var(--black), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* Track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: '16px',
            width: 'max-content',
          }}
        >
          {allImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              style={{
                width: '280px',
                height: '180px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border-blue)',
                cursor: 'pointer',
                position: 'relative',
                flexShrink: 0,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,168,255,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '8px 12px',
                background: 'linear-gradient(transparent, rgba(5,5,8,0.9))',
                fontFamily: "'Exo 2', sans-serif",
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}>
                {img.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            cursor: 'pointer',
            padding: '40px',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '80vh' }}>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '12px',
                border: '1px solid var(--border-blue)',
              }}
            />
            <p style={{
              textAlign: 'center',
              marginTop: '12px',
              fontFamily: "'Exo 2', sans-serif",
              color: 'var(--text-muted)',
            }}>
              {selectedImage.caption}
            </p>
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-12px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--card-bg)',
                border: '1px solid var(--border-blue)',
                color: 'var(--text-primary)',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
