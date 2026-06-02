import { useEffect, useRef, useState } from 'react'

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
    const duration = 1400
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setN(Math.floor(ease * target))
      if (progress < 1) raf = requestAnimationFrame(step)
      else setN(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, active])
  return n
}

function Counter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const n = useCounter(value, active)
  return (
    <div style={{ flex: 1, textAlign: 'center', padding: '0 16px' }}>
      <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#006B3C', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
        {n}{suffix}
      </div>
      <div style={{ fontSize: '0.8125rem', color: '#555555', marginTop: 6, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => { setVisible(true); setActive(true) }, 120)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      style={{
        paddingTop: 'calc(64px + 80px)',
        paddingBottom: 80,
        background: '#ffffff',
      }}
    >
      <div
        ref={ref}
        style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
      >
        {/* Gold badge */}
        <div
          className={`reveal${visible ? ' is-visible' : ''}`}
          style={{ marginBottom: 24 }}
        >
          <span style={{
            display: 'inline-block',
            background: '#FCD116',
            color: '#111111',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: 100,
          }}>
            NDC · Odododiodioo Constituency
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`reveal${visible ? ' is-visible' : ''}`}
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
            fontWeight: 800,
            color: '#111111',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: 24,
            maxWidth: 800,
            margin: '0 auto 24px',
          }}
        >
          Action, Progress, and Real Results.
        </h1>

        {/* Subheadline */}
        <p
          className={`reveal${visible ? ' is-visible' : ''}`}
          style={{
            fontSize: '1.125rem',
            color: '#555555',
            lineHeight: 1.8,
            maxWidth: 600,
            margin: '0 auto 40px',
          }}
        >
          From creating over 100 sustainable jobs to improving community health with free household biodigester toilets, we are building a stronger Odododiodioo together.
        </p>

        {/* Candidate photo */}
        <div
          className={`reveal${visible ? ' is-visible' : ''}`}
          style={{ marginBottom: 40 }}
        >
          <img
            src="/clottey-1.jpg"
            alt="Space Clottey — NDC Candidate, Odododiodioo Constituency Chairman"
            loading="eager"
            style={{
              maxWidth: 320,
              width: '100%',
              borderRadius: 8,
              objectFit: 'cover',
              objectPosition: 'top',
              margin: '0 auto',
              display: 'block',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              border: '4px solid #006B3C',
            }}
          />
        </div>

        {/* Stats row */}
        <div
          className={`reveal${visible ? ' is-visible' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            maxWidth: 560,
            margin: '0 auto 40px',
            border: '1px solid #E5E5E5',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {STATS.map((s, i) => (
            <div key={s.label} style={{ display: 'contents' }}>
              {i > 0 && <div style={{ width: 1, background: '#E5E5E5', flexShrink: 0 }} />}
              <div style={{ flex: 1, padding: '24px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#006B3C', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  <Counter value={s.value} suffix={s.suffix} label={s.label} active={active} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className={`reveal${visible ? ' is-visible' : ''}`}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
        >
          {/* UPDATE: WhatsApp */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#25D366',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.0625rem',
              padding: '14px 32px',
              borderRadius: 8,
              textDecoration: 'none',
              transition: 'opacity 200ms',
              width: '100%',
              maxWidth: 380,
              justifyContent: 'center',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Tap to Chat on WhatsApp →
          </a>

          <button
            onClick={() => scrollTo('#biodigesters')}
            style={{
              background: 'none',
              border: '2px solid #CE1126',
              color: '#CE1126',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '12px 28px',
              borderRadius: 8,
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'background 200ms, color 200ms',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#CE1126'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#CE1126' }}
          >
            Our Initiatives ↓
          </button>
        </div>
      </div>
    </section>
  )
}
