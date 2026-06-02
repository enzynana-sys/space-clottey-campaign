import { useReveal } from '../hooks/useReveal'

const PILLARS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: '100+ Jobs Secured',
    body: 'Secured over 100 verifiable jobs across diverse sectors to empower our youth and professionals — Construction & Trade, Health & Education, Security & Hospitality, Media & Tech.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <circle cx="12" cy="6" r="1" fill="#006B3C" stroke="none"/>
      </svg>
    ),
    title: 'Free Biodigester Toilets',
    body: 'Delivering dignity and cleaner communities by installing FREE biodigester toilets directly into constituency households at zero cost to any family.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
    title: '20+ Years of Proven Leadership',
    body: 'As founder of Voice of Africa Radio (UK), a trusted voice with over two decades of media experience championing our community\'s stories and progress on the global stage.',
  },
]

export default function Pillars() {
  const { ref, visible } = useReveal()

  return (
    <section id="pillars" style={{ background: '#F7F9F7', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div ref={ref} style={{ marginBottom: 48 }}>
          <div className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ marginBottom: 8 }}>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#006B3C',
            }}>
              What We Stand For
            </span>
          </div>
          <h2 className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Real Work. Real Results.
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`reveal${visible ? ' is-visible' : ''}`}
              style={{
                background: '#ffffff',
                borderRadius: 8,
                padding: 32,
                borderLeft: '4px solid #006B3C',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{ marginBottom: 20 }}>{p.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#111111', marginBottom: 12, letterSpacing: '-0.01em' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8 }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
