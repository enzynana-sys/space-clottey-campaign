import { useReveal } from '../hooks/useReveal'

const ToiletIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 6h14v3a7 7 0 0 1-14 0V6z"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/>
    <path d="M9 16h6M10 16v3M14 16v3M8 19h8"/>
  </svg>
)
const BriefIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
)
const MicIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
)

const CARDS = [
  { icon: <ToiletIcon />, title: 'Free Biodigesters', desc: 'Installing FREE biodigester toilets into every household — delivering dignity and cleaner communities.' },
  { icon: <BriefIcon />, title: '100+ Jobs Secured', desc: 'Securing sustainable employment across 8 sectors to empower our youth and professionals.' },
  { icon: <MicIcon />, title: '20+ Years of Service', desc: 'A global media leader championing Odododiodioo\'s stories and progress for over two decades.' },
]

export default function VisionCards() {
  const { ref, visible } = useReveal()
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{ marginBottom: 48 }}>
          <p className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: '0.75rem', fontWeight: 700, color: '#006B3C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Read Our Vision</p>
          <h2 className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: 'clamp(1.75rem,3vw,2.25rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em' }}>
            A Constituency That Thrives Together
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {CARDS.map((c, i) => (
            <div key={c.title} className={`reveal${visible ? ' visible' : ''}`}
              style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #E5E5E5', transitionDelay: `${i * 80}ms`, cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}>
              {/* Card image area */}
              <div style={{ background: '#006B3C', aspectRatio: '4/3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {c.icon}
              </div>
              {/* Card body */}
              <div style={{ padding: '24px 24px 28px' }}>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#111111', marginBottom: 10, letterSpacing: '-0.01em' }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.8, marginBottom: 16 }}>{c.desc}</p>
                <button onClick={() => document.querySelector('#biodigesters')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 700, color: '#006B3C', padding: 0, letterSpacing: '-0.01em' }}>
                  Learn More ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
