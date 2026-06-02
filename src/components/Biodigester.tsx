import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// ── UPDATE THIS NUMBER to reflect current installations ──────────────────────
const BIODIGESTERS_INSTALLED = 0
// ─────────────────────────────────────────────────────────────────────────────
const BIODIGESTERS_TARGET = 500

// UPDATE: WhatsApp
const WA_LINK = 'https://wa.me/233540852639'

const BENEFITS = [
  {
    title: 'No Pit Emptying',
    body: 'Waste converts to safe liquid naturally — no manual emptying ever needed.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly',
    body: 'Zero harmful emissions to the environment or neighbouring homes.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
      </svg>
    ),
  },
  {
    title: '100% Free',
    body: 'No cost whatsoever to any household — fully funded by the campaign.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"/>
      </svg>
    ),
  },
  {
    title: 'Health & Dignity',
    body: 'Protects families from disease and improves daily community wellbeing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
]

export default function Biodigester() {
  const { ref, visible } = useReveal()
  const barRef = useRef<HTMLDivElement>(null)
  const [barActive, setBarActive] = useState(false)
  const progress = BIODIGESTERS_TARGET > 0 ? Math.round((BIODIGESTERS_INSTALLED / BIODIGESTERS_TARGET) * 100) : 0

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarActive(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="biodigesters" style={{ background: '#F7F9F7', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={ref}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}
        >

          {/* Left */}
          <div>
            <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ marginBottom: 8 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006B3C' }}>
                Flagship Initiative
              </span>
            </div>
            <h2
              className={`reveal${visible ? ' is-visible' : ''}`}
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 16 }}
            >
              Free Biodigester Toilets for Every Home
            </h2>
            <p
              className={`reveal${visible ? ' is-visible' : ''}`}
              style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8, marginBottom: 32 }}
            >
              We are delivering sanitation with dignity to every household in Odododiodioo — completely free of charge. Each biodigester converts household waste into safe liquid, eliminating open defecation and pit latrines permanently.
            </p>

            {/* 2x2 benefit cards */}
            <div
              className={`reveal${visible ? ' is-visible' : ''}`}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
            >
              {BENEFITS.map((b, i) => (
                <div key={b.title}
                  style={{
                    background: '#ffffff',
                    borderRadius: 6,
                    padding: 16,
                    transitionDelay: `${i * 60}ms`,
                  }}
                >
                  <div style={{ marginBottom: 10 }}>{b.icon}</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111111', marginBottom: 4 }}>{b.title}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#555555', lineHeight: 1.7 }}>{b.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — counter card */}
          <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ transitionDelay: '120ms' }}>
            <div style={{
              background: '#ffffff',
              borderRadius: 8,
              padding: 32,
              border: '1px solid #E5E5E5',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              {/* Toilet SVG */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 6h14v3a7 7 0 0 1-14 0V6z"/>
                  <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/>
                  <path d="M9 16h6M10 16v3M14 16v3"/>
                  <path d="M8 19h8"/>
                </svg>
              </div>

              {/* Counter */}
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: '4rem', fontWeight: 800, color: '#006B3C', lineHeight: 1, letterSpacing: '-0.04em' }}>
                  {BIODIGESTERS_INSTALLED}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#555555', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>
                  Households Served
                </div>
              </div>

              {/* Progress bar */}
              <div ref={barRef} style={{ marginBottom: 8 }}>
                <div style={{ height: 8, background: '#E5E5E5', borderRadius: 100, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    background: '#006B3C',
                    borderRadius: 100,
                    width: barActive ? `${Math.max(progress, BIODIGESTERS_INSTALLED > 0 ? 2 : 0)}%` : '0%',
                    transition: 'width 800ms cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#888', textAlign: 'right', marginBottom: 28 }}>
                Target: {BIODIGESTERS_TARGET} Homes
              </div>

              {/* UPDATE: WhatsApp */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  padding: '14px',
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
                Request a Free Toilet →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
