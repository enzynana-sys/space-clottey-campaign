import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639'

// ndcuki.com "NDC AND THE PEOPLE" style gallery
// UPDATE: Photo — replace placeholder tiles with real campaign photos
const TILES = [
  { type: 'photo', src: '/clottey-1.jpg', alt: 'Space Clottey — NDC Odododiodioo' },
  { type: 'photo', src: '/clottey-2.jpg', alt: 'Space Clottey at a leadership event' },
  { type: 'photo', src: '/clottey-3.jpg', alt: 'Space Clottey — Constituency Candidate' },
  { type: 'photo', src: '/clottey-4.jpg', alt: 'Space Clottey at a conference' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
]

const photos = TILES.filter(t => t.type === 'photo') as { type: string; src: string; alt: string }[]

export default function Gallery() {
  const { ref, visible } = useReveal()
  const [light, setLight] = useState<number | null>(null)

  const photoIndex = (tileIdx: number) => TILES.slice(0, tileIdx + 1).filter(t => t.type === 'photo').length - 1

  return (
    <section id="gallery" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header — ndcuki.com "NDC AND THE PEOPLE" style */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CE1126', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            On the Ground
          </p>
          <h2 className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em' }}>
            SPACE CLOTTEY &amp; THE COMMUNITY
          </h2>
          <div style={{ width: 48, height: 4, background: '#006B3C', margin: '16px auto 0', borderRadius: 2 }} />
        </div>

        {/* 4x2 photo grid — ndcuki.com style */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 40 }} className="gallery-grid">
          {TILES.map((tile, i) => (
            <div key={i} className={`reveal${visible ? ' visible' : ''}`}
              style={{
                aspectRatio: '4/3', overflow: 'hidden',
                cursor: tile.type === 'photo' ? 'pointer' : 'default',
                transitionDelay: `${i * 40}ms`, position: 'relative',
              }}
              onClick={() => tile.type === 'photo' && setLight(photoIndex(i))}>
              {tile.type === 'photo' ? (
                <>
                  <img src={(tile as any).src} alt={(tile as any).alt} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'transform 400ms' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                  {/* Hover overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,60,30,0)', transition: 'background 300ms', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,60,30,0.45)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,60,30,0)')}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" style={{ opacity: 0, transition: 'opacity 300ms' }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                      onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                  </div>
                </>
              ) : (
                /* UPDATE: Photo — replace with campaign photo */
                <div style={{ width: '100%', height: '100%', background: '#006B3C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', fontWeight: 500 }}>Add photo</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ndcuki.com style CTA below gallery */}
        <div style={{ textAlign: 'center' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '13px 28px', borderRadius: 0, textDecoration: 'none', transition: 'opacity 200ms' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Share a Photo with Us →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {light !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
          onClick={() => setLight(null)}>
          <img src={photos[light].src} alt={photos[light].alt}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', display: 'block' }} onClick={e => e.stopPropagation()} />
          <button onClick={e => { e.stopPropagation(); setLight(null) }} style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          <button onClick={e => { e.stopPropagation(); setLight(i => (i! > 0 ? i! - 1 : photos.length - 1)) }} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <button onClick={e => { e.stopPropagation(); setLight(i => (i! < photos.length - 1 ? i! + 1 : 0)) }} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>
      )}
      <style>{`@media(max-width:768px){.gallery-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  )
}
