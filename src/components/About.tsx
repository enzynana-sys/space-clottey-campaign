import { useReveal } from '../hooks/useReveal'

// Official campaign copy — verbatim, do not edit
const COPY_P1 = `With over two decades of leadership in global media—most notably as the founder of Voice of Africa Radio in the United Kingdom—my life's work has been dedicated to amplifying our community's stories and championing its progress. Today, that same passion drives tangible, grassroots development right here in our constituency.`

const COPY_P2 = `True leadership is measured by real results. We are transforming lives daily by delivering dignity and health through the installation of free household biodigester toilets, radically improving local sanitation. Simultaneously, we are combating unemployment by securing more than 100 sustainable jobs for our people across the construction, media, health, trade, education, security, hospitality, and technology sectors.`

const HIGHLIGHTS = [
  'Founder, Voice of Africa Radio (London, UK)',
  'Installing free biodigester toilets for households',
  'Secured 100+ jobs across 8 sectors',
  'Media consultant and corporate speaker',
]

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
    <rect width="18" height="18" rx="4" fill="#006B3C"/>
    <path d="M5 9l3 3 5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={ref}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}
        >

          {/* Left — photo placeholder */}
          {/* UPDATE: Photo — replace with <img src="/space-clottey.jpg" loading="lazy" alt="Space Clottey" style={{width:'100%',borderRadius:8,objectFit:'cover'}} /> */}
          <div className={`reveal${visible ? ' is-visible' : ''}`}>
            <div style={{
              background: '#E8F5EE',
              borderRadius: 8,
              aspectRatio: '3/4',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <span style={{ color: '#006B3C', fontSize: '0.9375rem', fontWeight: 600 }}>Candidate Photo</span>
              <span style={{ color: '#888', fontSize: '0.8125rem' }}>space-clottey.jpg</span>
            </div>
          </div>

          {/* Right — content */}
          <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            <div style={{ marginBottom: 8 }}>
              <span style={{
                fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#CE1126',
              }}>
                About the Candidate
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontWeight: 800,
              color: '#111111',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginBottom: 24,
            }}>
              A Proven Leader, A Servant of the People
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8 }}>{COPY_P1}</p>
              <p style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8 }}>{COPY_P2}</p>
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {HIGHLIGHTS.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckIcon />
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
