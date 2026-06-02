import { useEffect, useState } from 'react'

// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639'
const OFFSET = 100 // topbar 36px + navbar 64px

function go(href: string) { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

export default function Hero() {
  const [vis, setVis] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t) }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        paddingTop: OFFSET,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // UPDATE: Photo — hero background image
        background: `url('/clottey-2.jpg') center top / cover no-repeat`,
      }}
    >
      {/* Dark overlay — like ndcuki.com */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,60,30,0.88) 0%, rgba(0,30,15,0.78) 100%)',
      }} />

      {/* Centred content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 780, margin: '0 auto',
        padding: '80px 24px', textAlign: 'center', width: '100%',
      }}>

        {/* Gold badge */}
        <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 24 }}>
          <span style={{
            display: 'inline-block', background: '#FCD116',
            color: '#003320', fontSize: '0.72rem', fontWeight: 800,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '6px 18px', borderRadius: 0,
          }}>
            NDC · Odododiodioo Constituency · Ghana
          </span>
        </div>

        {/* Main headline — ndcuki.com style large centred */}
        <h1 className={`reveal${vis ? ' visible' : ''}`}
          style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', fontWeight: 800,
            color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1,
            marginBottom: 24, transitionDelay: '80ms',
          }}>
          The Trustworthy<br />
          <span style={{ color: '#FCD116' }}>Candidate for Change</span>
        </h1>

        {/* Sub */}
        <p className={`reveal${vis ? ' visible' : ''}`}
          style={{
            fontSize: '1.125rem', color: 'rgba(255,255,255,0.88)',
            lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px',
            transitionDelay: '140ms',
          }}>
          "A Vote for Space Clottey, is a Vote for Peace &amp; Development" — building a stronger, healthier and more employed Odododiodioo together.
        </p>

        {/* CTAs — ndcuki.com style */}
        <div className={`reveal${vis ? ' visible' : ''}`}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', transitionDelay: '200ms' }}>
          <button onClick={() => go('#about')}
            style={{
              background: '#006B3C', color: '#ffffff', fontWeight: 700,
              fontSize: '0.9375rem', padding: '14px 32px', border: 'none',
              borderRadius: 0, cursor: 'pointer', fontFamily: 'inherit',
              letterSpacing: '0.03em', transition: 'background 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#FCD116')}
            onMouseLeave={e => (e.currentTarget.style.background = '#006B3C')}>
            Learn More About Our Vision
          </button>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'transparent', color: '#ffffff', fontWeight: 700,
              fontSize: '0.9375rem', padding: '13px 32px',
              border: '2px solid rgba(255,255,255,0.5)',
              borderRadius: 0, textDecoration: 'none',
              transition: 'border-color 200ms, background 200ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`reveal${vis ? ' visible' : ''}`}
          style={{ marginTop: 60, transitionDelay: '300ms' }}>
          <button onClick={() => go('#stats')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, fontFamily: 'inherit', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 auto' }}>
            <span>Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
