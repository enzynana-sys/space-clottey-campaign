import { useEffect, useState } from 'react'

// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639'
// Top utility bar (36px) + Navbar (64px) = 100px total fixed height
const OFFSET = 100

function go(href: string) { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Hero() {
  const [vis, setVis] = useState(false)
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t) }, [])

  return (
    <>
      <section id="home" style={{ minHeight: '100vh', display: 'flex', paddingTop: OFFSET }}>

        {/* LEFT — NDC green */}
        <div style={{ flex: '0 0 50%', background: '#006B3C', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px 56px 64px 48px' }} className="hero-left">
          {/* Badge */}
          <div className={`reveal${vis ? ' visible' : ''}`} style={{ marginBottom: 22 }}>
            <span style={{ display: 'inline-block', background: '#FCD116', color: '#003d22', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100 }}>
              NDC · Odododiodioo Constituency
            </span>
          </div>
          {/* Headline */}
          <h1 className={`reveal${vis ? ' visible' : ''}`}
            style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: 20, transitionDelay: '60ms' }}>
            Action, Progress,<br />and Real Results.
          </h1>
          {/* Sub */}
          <p className={`reveal${vis ? ' visible' : ''}`}
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: 36, maxWidth: 440, transitionDelay: '100ms' }}>
            From creating over 100 sustainable jobs to improving community health with free household biodigester toilets, we are building a stronger Odododiodioo together.
          </p>
          {/* CTAs */}
          <div className={`reveal${vis ? ' visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: 12, transitionDelay: '140ms' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', transition: 'opacity 200ms', maxWidth: 360 }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              <WaIcon /> Tap to Chat on WhatsApp →
            </a>
            <button onClick={() => go('#biodigesters')}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)', color: '#ffffff', fontWeight: 600, fontSize: '0.9375rem', padding: '13px 28px', borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 200ms, background 200ms', maxWidth: 360 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'transparent' }}>
              Our Initiatives ↓
            </button>
          </div>
        </div>

        {/* RIGHT — white, photo */}
        <div style={{ flex: '0 0 50%', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '64px 48px' }} className="hero-right">
          {/* UPDATE: Photo — replace img below with actual candidate photo */}
          {/* <img src="/clottey-1.jpg" alt="Space Clottey" loading="eager" style={{ width:'100%', maxWidth:400, borderRadius:8, objectFit:'cover', objectPosition:'center top', display:'block' }} /> */}
          <div style={{ width: '100%', maxWidth: 400, aspectRatio: '4/5', background: '#E8F5EE', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
            <img src="/clottey-1.jpg" alt="Space Clottey — NDC Candidate" loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', borderRadius: 8, display: 'block' }} />
          </div>
          <p style={{ fontSize: '1rem', color: '#CE1126', fontWeight: 700, fontStyle: 'italic', textAlign: 'center', maxWidth: 360, lineHeight: 1.6 }}>
            "A Vote for Space Clottey, is a Vote for Peace &amp; Development"
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-left  { flex: unset !important; padding: 40px 24px !important; }
          .hero-right { flex: unset !important; padding: 32px 24px 40px !important; }
          section#home { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}
