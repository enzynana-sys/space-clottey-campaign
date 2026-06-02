import { useEffect, useState } from 'react'

// UPDATE: WhatsApp
const WA_LINK = 'https://wa.me/233540852639'

const STATS = [
  { value: 100, suffix: '+', label: 'Jobs Secured' },
  { value: 8, suffix: '', label: 'Sectors' },
  { value: 20, suffix: '+', label: 'Years of Leadership' },
]

function useCounter(target: number, active: boolean) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf: number
    const start = performance.now()
    const duration = 1600
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(ease * target))
      if (p < 1) raf = requestAnimationFrame(step)
      else setN(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, active])
  return n
}

function Stat({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCounter(value, active)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FCD116', lineHeight: 1, letterSpacing: '-0.03em' }}>
        {n}{suffix}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: 5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => { setVisible(true); setActive(true) }, 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 64, // navbar height
      }}
    >
      <div style={{ display: 'flex', flex: 1, minHeight: 'calc(100vh - 64px)' }} className="hero-inner">

        {/* ── LEFT PANEL — NDC green, white text ── */}
        <div style={{
          flex: '0 0 48%',
          background: '#006B3C',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 48px',
        }} className="hero-left">

          {/* Gold badge */}
          <div
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ marginBottom: 20 }}
          >
            <span style={{
              display: 'inline-block',
              background: '#FCD116',
              color: '#003d22',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: 100,
            }}>
              NDC · Odododiodioo Constituency
            </span>
          </div>

          {/* Name */}
          <h1
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: 8,
              transitionDelay: '60ms',
            }}
          >
            Space<br />
            <span style={{ color: '#FCD116' }}>Clottey</span>
          </h1>

          {/* Position */}
          <p
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.65)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 20,
              transitionDelay: '100ms',
            }}
          >
            Constituency Chairman Candidate
          </p>

          {/* Tagline */}
          <p
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6,
              marginBottom: 36,
              maxWidth: 400,
              transitionDelay: '140ms',
            }}
          >
            "Action, Progress, and Real Results — building a stronger Odododiodioo together."
          </p>

          {/* Stats */}
          <div
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{
              display: 'flex',
              gap: 24,
              marginBottom: 36,
              paddingBottom: 32,
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              transitionDelay: '180ms',
            }}
          >
            {STATS.map(s => (
              <Stat key={s.label} {...s} active={active} />
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: 12, transitionDelay: '220ms' }}
          >
            {/* UPDATE: WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: '#25D366',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9375rem',
                padding: '13px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Tap to Chat on WhatsApp →
            </a>

            <button
              onClick={() => scrollTo('#about')}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.35)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9375rem',
                padding: '12px 24px',
                borderRadius: 8,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 200ms, border-color 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
            >
              Learn More ↓
            </button>
          </div>
        </div>

        {/* ── RIGHT PANEL — Full clear photo ── */}
        <div style={{
          flex: '0 0 52%',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 480,
        }} className="hero-right">
          <img
            src="/clottey-1.jpg"
            alt="Space Clottey — NDC Candidate, Odododiodioo Constituency Chairman"
            loading="eager"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Thin left-edge fade to blend with green panel */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #006B3C 0%, transparent 12%)',
            pointerEvents: 'none',
          }} />
        </div>
      </div>

      {/* Mobile styles via a style tag */}
      <style>{`
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; }
          .hero-left  { flex: unset !important; padding: 40px 24px !important; }
          .hero-right { flex: unset !important; height: 55vw !important; min-height: 280px !important; }
        }
      `}</style>
    </section>
  )
}
