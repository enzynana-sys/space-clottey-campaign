import { useReveal } from '../hooks/useReveal'

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
    <section id="about" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Section header — ndcuki.com centred style */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CE1126', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            About the Candidate
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Welcome to the Space Clottey Campaign
          </h2>
          <div style={{ width: 48, height: 4, background: '#006B3C', margin: '16px auto 0', borderRadius: 2 }} />
        </div>

        {/* 2-col layout — ndcuki.com welcome section style */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 64, alignItems: 'center' }}>

          {/* Photo */}
          {/* UPDATE: Photo */}
          <div className={`reveal${visible ? ' visible' : ''}`}>
            <div style={{ position: 'relative' }}>
              <img src="/clottey-2.jpg" alt="Space Clottey — A Proven Leader" loading="lazy"
                style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }} />
              {/* NDC green accent bar */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: '#006B3C' }} />
            </div>
          </div>

          {/* Content */}
          <div className={`reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: '80ms' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem,2.5vw,1.85rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 20 }}>
              A Proven Leader,<br />A Servant of the People
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              {[P1, P2].map((p, i) => (
                <p key={i} style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>
            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {HIGHLIGHTS.map(h => (
                <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 22, height: 22, background: '#006B3C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ fontSize: '0.9375rem', color: '#111111', fontWeight: 500, lineHeight: 1.6 }}>{h}</span>
                </div>
              ))}
            </div>
            {/* ndcuki.com style CTA button */}
            <div style={{ marginTop: 28 }}>
              <button
                onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: '#006B3C', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '13px 32px', border: 'none', borderRadius: 0, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '0.03em', transition: 'background 200ms' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#CE1126')}
                onMouseLeave={e => (e.currentTarget.style.background = '#006B3C')}>
                Join the Campaign →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
