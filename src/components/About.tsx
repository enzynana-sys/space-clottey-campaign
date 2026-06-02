import { useReveal } from '../hooks/useReveal'

// Official campaign copy — verbatim, do not edit
const P1 = `With over two decades of leadership in global media—most notably as the founder of Voice of Africa Radio in the United Kingdom—my life's work has been dedicated to amplifying our community's stories and championing its progress. Today, that same passion drives tangible, grassroots development right here in our constituency.`
const P2 = `True leadership is measured by real results. We are transforming lives daily by delivering dignity and health through the installation of free household biodigester toilets, radically improving local sanitation. Simultaneously, we are combating unemployment by securing more than 100 sustainable jobs for our people across the construction, media, health, trade, education, security, hospitality, and technology sectors.`

const HIGHLIGHTS = [
  'Founder, Voice of Africa Radio (London, UK)',
  'Installing free biodigester toilets for households',
  'Secured 100+ jobs across 8 sectors',
  'Media consultant and corporate speaker',
]

export default function About() {
  const { ref, visible } = useReveal()
  return (
    <section id="about" style={{ background: '#F7F9F7', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'start' }}>

          {/* Photo */}
          {/* UPDATE: Photo — replace img with actual candidate photo */}
          <div className={`reveal${visible ? ' visible' : ''}`}>
            <img src="/clottey-2.jpg" alt="Space Clottey — A Proven Leader" loading="lazy"
              style={{ width: '100%', borderRadius: 8, objectFit: 'cover', objectPosition: 'center top', display: 'block', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
          </div>

          {/* Content */}
          <div className={`reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#006B3C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>About the Candidate</p>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 24 }}>
              A Proven Leader, A Servant of the People
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              {[P1, P2].map((p, i) => (
                <p key={i} style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {HIGHLIGHTS.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 20, height: 20, background: '#006B3C', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: '0.9375rem', color: '#111111', fontWeight: 500, lineHeight: 1.6 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
