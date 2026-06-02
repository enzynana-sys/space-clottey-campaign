import { useReveal } from '../hooks/useReveal'

const ACCENTS = ['#006B3C', '#CE1126', '#FCD116', '#006B3C', '#CE1126', '#FCD116']

const VISIONS = [
  {
    num: '01',
    title: 'Sanitation for All',
    desc: 'Complete the free biodigester rollout so every household has proper, dignified sanitation.',
  },
  {
    num: '02',
    title: 'Youth Employment Drive',
    desc: "Expand formal partnerships with employers across Ghana's growing sectors to create more sustainable jobs.",
  },
  {
    num: '03',
    title: 'Community Voice',
    desc: 'Use broadcast experience to create direct communication channels between the constituency and party leadership.',
  },
  {
    num: '04',
    title: 'Women & Market Traders',
    desc: 'Dedicated support for market women and female entrepreneurs through advocacy, access to capital, and trade facilitation.',
  },
  {
    num: '05',
    title: 'Unity in the NDC',
    desc: 'Strengthen internal party cohesion in Odododiodioo so every member feels valued heading into 2028.',
  },
  {
    num: '06',
    title: 'Accountability',
    desc: 'Regular town halls and community meetings to report progress and keep leadership answerable to the people.',
  },
]

export default function Vision() {
  const { ref, visible } = useReveal()

  return (
    <section id="vision" style={{ background: '#F7F9F7', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div ref={ref} style={{ marginBottom: 48 }}>
          <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ marginBottom: 8 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006B3C' }}>
              The Agenda
            </span>
          </div>
          <h2 className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            A Constituency That Thrives Together
          </h2>
        </div>

        {/* 3x2 grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {VISIONS.map((v, i) => (
            <div
              key={v.num}
              className={`reveal${visible ? ' is-visible' : ''}`}
              style={{
                background: '#ffffff',
                borderRadius: 8,
                padding: 32,
                border: '1px solid #E5E5E5',
                borderLeft: `4px solid ${ACCENTS[i]}`,
                position: 'relative',
                overflow: 'hidden',
                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* Faded background number */}
              <div style={{
                position: 'absolute',
                top: 12,
                right: 16,
                fontSize: '4rem',
                fontWeight: 800,
                color: '#F0F0F0',
                lineHeight: 1,
                userSelect: 'none',
                letterSpacing: '-0.04em',
              }}>
                {v.num}
              </div>

              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENTS[i], marginBottom: 12 }}>
                {v.num}
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#111111', marginBottom: 10, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                {v.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.8 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
