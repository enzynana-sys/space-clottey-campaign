import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const PHOTOS = [
  {
    src: '/clottey-1.jpg',
    alt: 'Space Clottey — NDC Odododiodioo Constituency',
    caption: 'NDC Odododiodioo Constituency',
  },
  {
    src: '/clottey-2.jpg',
    alt: 'Space Clottey at a leadership event',
    caption: 'Leadership & Community Engagement',
  },
  {
    src: '/clottey-3.jpg',
    alt: 'Space Clottey — Constituency candidate',
    caption: 'A Servant of the People',
  },
  {
    src: '/clottey-4.jpg',
    alt: 'Space Clottey at a conference',
    caption: 'Representing Odododiodioo',
  },
]

export default function Gallery() {
  const { ref, visible } = useReveal()
  const [lightbox, setLightbox] = useState<number | null>(null)

  const prev = () => setLightbox(i => (i! > 0 ? i! - 1 : PHOTOS.length - 1))
  const next = () => setLightbox(i => (i! < PHOTOS.length - 1 ? i! + 1 : 0))

  return (
    <section id="gallery" style={{ background: '#F7F9F7', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div ref={ref} style={{ marginBottom: 48 }}>
          <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ marginBottom: 8 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006B3C' }}>
              Photo Gallery
            </span>
          </div>
          <h2
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.2 }}
          >
            Space Clottey in Action
          </h2>
        </div>

        {/* Photo grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`reveal${visible ? ' is-visible' : ''}`}
              style={{
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer',
                transitionDelay: `${i * 70}ms`,
                position: 'relative',
              }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: i === 0 ? '1/1' : i === 2 ? '3/4' : '4/3',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  transition: 'transform 300ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Caption overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 16px 14px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
              }}>
                <p style={{ color: '#ffffff', fontSize: '0.8125rem', fontWeight: 600, margin: 0 }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
          onClick={() => setLightbox(null)}
        >
          {/* Image */}
          <img
            src={PHOTOS[lightbox].src}
            alt={PHOTOS[lightbox].alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: 8,
              boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
            }}
            onClick={e => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            style={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              width: 44,
              height: 44,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next() }}
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: '#fff',
              width: 44,
              height: 44,
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next photo"
          >
            ›
          </button>

          {/* Caption */}
          <div style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#ffffff',
            fontSize: '0.875rem',
            fontWeight: 500,
            textAlign: 'center',
            background: 'rgba(0,0,0,0.4)',
            padding: '6px 16px',
            borderRadius: 100,
            whiteSpace: 'nowrap',
          }}>
            {PHOTOS[lightbox].caption} · {lightbox + 1} / {PHOTOS.length}
          </div>
        </div>
      )}
    </section>
  )
}
