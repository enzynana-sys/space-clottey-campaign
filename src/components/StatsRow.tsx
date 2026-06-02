import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 100, suffix: '+', label: 'Jobs Secured' },
  { value: 8, suffix: '', label: 'Sectors Represented' },
  { value: 20, suffix: '+', label: 'Years of Leadership' },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    let raf: number
    const start = performance.now()
    const d = 1500
    const step = (now: number) => {
      const p = Math.min((now - start) / d, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(ease * target))
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div ref={ref} style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'stretch' }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{ display: 'contents' }}>
            {i > 0 && <div style={{ width: 1, background: '#E5E5E5', flexShrink: 0 }} />}
            <div style={{ flex: 1, textAlign: 'center', padding: '0 32px' }}>
              <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#006B3C', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: 10 }}>
                <Counter target={s.value} suffix={s.suffix} active={active} />
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#555555', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
