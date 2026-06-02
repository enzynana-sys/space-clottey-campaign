import { useScrollAnimation } from '../hooks/useScrollAnimation'

// ── OFFICIAL CAMPAIGN COPY (verbatim — do not edit) ────────────────────────
const CAMPAIGN_COPY = `With over two decades of leadership in global media—most notably as the founder of Voice of Africa Radio in the United Kingdom—my life's work has been dedicated to amplifying our community's stories and championing its progress. Today, that same passion drives tangible, grassroots development right here in our constituency.

True leadership is measured by real results. We are transforming lives daily by delivering dignity and health through the installation of free household biodigester toilets, radically improving local sanitation. Simultaneously, we are combating unemployment by securing more than 100 sustainable jobs for our people across the construction, media, health, trade, education, security, hospitality, and technology sectors.`

const HIGHLIGHTS = [
  'Founder, Voice of Africa Radio (London)',
  'Installing free biodigester toilets across households',
  'Secured 100+ jobs across 8 sectors',
  'Media consultant and corporate speaker',
]

export default function About() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: '#FAF7F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — Photo + quote */}
          <div className={`fade-up ${visible ? 'visible' : ''}`}>

            {/*
              PHOTO PLACEHOLDER (About section)
              Replace the div below with:
              <img src="/space-clottey.jpg" alt="Space Clottey" className="w-full object-cover rounded" />
              Place space-clottey.jpg in the /public folder — no other code changes needed.
            */}
            <div className="relative">
              <div
                className="w-full aspect-[4/5] rounded flex items-center justify-center text-center"
                style={{
                  backgroundColor: '#e8e0d0',
                  border: '2px solid #CE1126',
                  outline: '6px solid transparent',
                  outlineOffset: '8px',
                  boxShadow: '0 0 0 6px #FAF7F0, 0 0 0 10px #CE1126',
                }}
              >
                <div>
                  <div className="text-5xl mb-3">📸</div>
                  <p
                    className="text-[#006B3C] font-semibold text-sm"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    CANDIDATE PHOTO
                  </p>
                  <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    Add space-clottey.jpg to /public
                  </p>
                </div>
              </div>
              {/* Red offset border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#CE1126] rounded -z-10" />
            </div>

            {/* Quote card */}
            <div
              className="mt-10 p-6 rounded-lg relative"
              style={{ backgroundColor: '#004D2A' }}
            >
              <span
                className="absolute -top-5 left-5 text-6xl leading-none text-[#FCD116] font-serif select-none"
                aria-hidden="true"
              >"</span>
              <p
                className="text-white/90 text-base leading-relaxed mt-4"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                I have devoted my life to elevating African voices. Now I dedicate myself to elevating every voice in Odododiodioo.
              </p>
              <p
                className="text-[#FCD116] font-semibold mt-3 text-sm"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
              >
                — Space Clottey
              </p>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className={`fade-up delay-200 ${visible ? 'visible' : ''}`}>
            <p
              className="text-[#CE1126] font-bold text-sm uppercase tracking-widest mb-3"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              About the Candidate
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#006B3C] mb-6 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A Proven Leader, A Servant of the People
            </h2>

            {/* Official campaign copy — verbatim */}
            <div className="space-y-4 mb-8">
              {CAMPAIGN_COPY.split('\n\n').map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed text-base"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {HIGHLIGHTS.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: '#006B3C' }}
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span
                    className="text-gray-800 font-medium text-base"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
