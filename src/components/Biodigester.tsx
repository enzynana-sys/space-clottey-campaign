import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// ── UPDATE THIS NUMBER when new installations are completed ──────────────────
const BIODIGESTERS_INSTALLED = 0
// ─────────────────────────────────────────────────────────────────────────────
const TARGET = 500

// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639'

const WaBtn = ({ text }: { text: string }) => (
  <a href={WA} target="_blank" rel="noopener noreferrer"
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '13px', borderRadius: 8, textDecoration: 'none', transition: 'opacity 200ms' }}
    onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    {text}
  </a>
)

const BENEFITS = [
  { title: 'No Pit Emptying', body: 'Waste converts to safe liquid naturally — no manual emptying ever needed.' },
  { title: 'Eco-Friendly', body: 'Zero harmful emissions to the environment or neighbours.' },
  { title: '100% Free', body: 'No cost whatsoever to any household — fully funded.' },
  { title: 'Health & Dignity', body: 'Protects families from disease and improves daily wellbeing.' },
]

export default function Biodigester() {
  const { ref, visible } = useReveal()
  const barRef = useRef<HTMLDivElement>(null)
  const [barOn, setBarOn] = useState(false)
  const pct = TARGET > 0 ? Math.round((BIODIGESTERS_INSTALLED / TARGET) * 100) : 0

  useEffect(() => {
    const el = barRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setBarOn(true) }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section id="biodigesters" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <p className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: '0.75rem', fontWeight: 700, color: '#006B3C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Flagship Initiative</p>
            <h2 className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 16 }}>
              Free Biodigester Toilets for Every Home
            </h2>
            <p className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8, marginBottom: 32 }}>
              We are delivering sanitation with dignity to every household in Odododiodioo — completely free of charge. Each biodigester converts household waste into safe liquid, eliminating open defecation and pit latrines permanently.
            </p>
            <div className={`reveal${visible ? ' visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {BENEFITS.map((b, i) => (
                <div key={b.title} style={{ background: '#ffffff', border: '1px solid #E5E5E5', borderRadius: 6, padding: 16, transitionDelay: `${i * 60}ms` }}>
                  <div style={{ width: 28, height: 28, background: '#006B3C', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <svg width="14" height="14" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111111', marginBottom: 4 }}>{b.title}</div>
                  <div style={{ fontSize: '0.8125rem', color: '#555555', lineHeight: 1.7 }}>{b.body}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right — counter card */}
          <div className={`reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div style={{ background: '#ffffff', border: '1px solid #E5E5E5', borderRadius: 8, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 6h14v3a7 7 0 0 1-14 0V6z"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/>
                  <path d="M9 16h6M10 16v3M14 16v3M8 19h8"/>
                </svg>
              </div>
              <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <div style={{ fontSize: '4rem', fontWeight: 800, color: '#006B3C', lineHeight: 1, letterSpacing: '-0.04em' }}>{BIODIGESTERS_INSTALLED}</div>
                <div style={{ fontSize: '0.8rem', color: '#555555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 8 }}>Households Served</div>
              </div>
              <div ref={barRef} style={{ marginBottom: 8 }}>
                <div style={{ height: 8, background: '#E5E5E5', borderRadius: 100, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: '#006B3C', borderRadius: 100, width: barOn ? `${Math.max(pct, BIODIGESTERS_INSTALLED > 0 ? 1 : 0)}%` : '0%', transition: 'width 900ms cubic-bezier(0.4,0,0.2,1)' }} />
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#888', textAlign: 'right', marginBottom: 28 }}>Target: {TARGET} Homes</div>
              <WaBtn text="Request a Free Toilet →" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
