import { useScrollAnimation } from '../hooks/useScrollAnimation'

const VISIONS = [
  {
    num: '01',
    title: 'Sanitation for All',
    desc: 'Complete the biodigester rollout until every household in Odododiodioo has a clean, free, functional toilet.',
    accent: '#006B3C',
  },
  {
    num: '02',
    title: 'Youth Employment Drive',
    desc: 'Forge formal partnerships with employers to create structured, sustained employment pathways for our youth.',
    accent: '#CE1126',
  },
  {
    num: '03',
    title: 'Community Voice',
    desc: 'Build direct communication channels between residents and leadership so no concern goes unheard.',
    accent: '#FCD116',
  },
  {
    num: '04',
    title: 'Women & Market Traders',
    desc: 'Provide targeted support, micro-financing access, and training for female entrepreneurs and market traders.',
    accent: '#006B3C',
  },
  {
    num: '05',
    title: 'Unity in the NDC',
    desc: 'Strengthen internal party cohesion, heal divisions, and present a united front for the constituency.',
    accent: '#CE1126',
  },
  {
    num: '06',
    title: 'Accountability',
    desc: 'Regular town halls, community meetings, and published progress reports — leadership you can hold to account.',
    accent: '#FCD116',
  },
]

export default function Vision() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section id="vision" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <p
            className={`text-[#CE1126] font-bold text-sm uppercase tracking-widest mb-3 fade-up ${visible ? 'visible' : ''}`}
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            The Road Ahead
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-[#006B3C] leading-tight fade-up delay-100 ${visible ? 'visible' : ''}`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A Constituency That Thrives Together
          </h2>
        </div>

        {/* 3×2 Vision grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISIONS.map((v, i) => (
            <div
              key={v.num}
              className={`relative p-7 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 fade-up ${visible ? 'visible' : ''}`}
              style={{
                transitionDelay: `${i * 100}ms`,
                borderLeft: `4px solid ${v.accent}`,
              }}
            >
              {/* Faded number */}
              <div
                className="absolute top-4 right-5 text-6xl font-black leading-none select-none"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  color: v.accent,
                  opacity: 0.08,
                }}
              >
                {v.num}
              </div>

              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-2 py-0.5 rounded"
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  backgroundColor: `${v.accent}18`,
                  color: v.accent,
                }}
              >
                {v.num}
              </span>

              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {v.title}
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
