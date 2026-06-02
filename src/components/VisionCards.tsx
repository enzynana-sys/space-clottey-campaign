import { useReveal } from '../hooks/useReveal'

// ndcuki.com "READ OUR VISION DOCUMENTS" style section
// Each card: photo-top with NDC green overlay + white text, body below

const CARDS = [
  {
    bg: '/clottey-1.jpg',
    label: 'Health & Sanitation',
    title: 'Free Biodigester Toilets',
    desc: 'Installing FREE biodigester toilets into every household — delivering dignity, cleaner communities and improved public health at zero cost to families.',
    href: '#biodigesters',
  },
  {
    bg: '/clottey-3.jpg',
    label: 'Economic Empowerment',
    title: '100+ Jobs Secured',
    desc: 'Securing sustainable employment across 8 diverse sectors to empower our youth and professionals — from construction to technology.',
    href: '#jobs',
  },
  {
    bg: '/clottey-4.jpg',
    label: 'Leadership & Media',
    title: '20+ Years of Service',
    desc: 'As founder of Voice of Africa Radio (UK), a global media leader championing Odododiodioo\'s stories and progress for over two decades.',
    href: '#about',
  },
]

export default function VisionCards() {
  const { ref, visible } = useReveal()

  return (
    <section style={{ background: '#f8f8f8', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header — ndcuki.com "READ OUR VISION DOCUMENTS" style */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: '0.75rem', fontWeight: 700, color: '#CE1126', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
            Read Our Vision
          </p>
          <h2 className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em' }}>
            A Constituency That Thrives Together
          </h2>
          <div style={{ width: 48, height: 4, background: '#006B3C', margin: '16px auto 0', borderRadius: 2 }} />
        </div>

        {/* 3-card grid — ndcuki.com vision document style */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
          {CARDS.map((c, i) => (
            <div key={c.title} className={`reveal${visible ? ' visible' : ''}`}
              style={{
                background: '#fff', overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transitionDelay: `${i * 80}ms`,
                cursor: 'pointer',
              }}
              onClick={() => document.querySelector(c.href)?.scrollIntoView({ behavior: 'smooth' })}>

              {/* Card photo top with green overlay — ndcuki.com style */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={c.bg} alt={c.title} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'transform 400ms' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                {/* NDC green overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,60,30,0.65)' }} />
                {/* Label on image */}
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span style={{
                    background: '#FCD116', color: '#003320',
                    fontSize: '0.65rem', fontWeight: 800,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '4px 10px',
                  }}>
                    {c.label}
                  </span>
                </div>
                {/* Title on image */}
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                    {c.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: '24px' }}>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.8, marginBottom: 16 }}>{c.desc}</p>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#006B3C', letterSpacing: '0.02em' }}>
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
