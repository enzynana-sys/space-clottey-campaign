import { useEffect, useRef, useState } from 'react'

const STATS = [
  {
    value: 100, suffix: '+', label: 'Jobs Secured',
    desc: 'Space Clottey has secured over 100 sustainable jobs for constituency residents across 8 key sectors.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    value: 8, suffix: '', label: 'Sectors Represented',
    desc: 'From construction and healthcare to technology and education — opportunities across 8 diverse sectors.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    value: 20, suffix: '+', label: 'Years of Leadership',
    desc: 'Over two decades as founder of Voice of Africa Radio (UK), championing community stories on the global stage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      </svg>
    ),
  },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf: number
    const start = performance.now(), d = 1600
    const step = (now: number) => {
      const p = Math.min((now - start) / d, 1)
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) raf = requestAnimationFrame(step); else setN(target)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, active])
  return <>{n}{suffix}</>
}

export default function StatsRow() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.4 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section id="stats" style={{ background: '#ffffff', padding: '80px 0', borderBottom: '1px solid #E5E5E5' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 0 }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            textAlign: 'center', padding: '0 32px',
            borderRight: i < STATS.length - 1 ? '1px solid #E5E5E5' : 'none',
          }}>
            {/* Circle icon */}
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: '#006B3C', color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              {s.icon}
            </div>
            {/* Number */}
            <div style={{
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800,
              color: '#006B3C', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 8,
            }}>
              <Counter target={s.value} suffix={s.suffix} active={active} />
            </div>
            {/* Label */}
            <div style={{
              fontSize: '0.8rem', fontWeight: 700, color: '#111111',
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12,
            }}>
              {s.label}
            </div>
            {/* Desc */}
            <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
