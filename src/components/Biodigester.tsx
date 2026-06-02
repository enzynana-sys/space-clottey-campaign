import { useScrollAnimation } from '../hooks/useScrollAnimation'

// ── UPDATE THIS NUMBER when new installations are completed ─────────────────
// This is the ONLY place you need to change the installed count.
const BIODIGESTERS_INSTALLED = 47
const BIODIGESTERS_TARGET = 500
// ────────────────────────────────────────────────────────────────────────────

// WhatsApp number — update here if it changes
// +233540852639
const WHATSAPP_LINK = 'https://wa.me/233540852639'

const BENEFITS = [
  { title: 'No Pit Emptying', desc: 'Waste converts to safe liquid — no manual emptying ever needed.' },
  { title: 'Eco-Friendly', desc: 'Zero harmful emissions. Safe for the environment and neighbours.' },
  { title: '100% Free', desc: 'No cost to any household. Fully funded by the campaign.' },
  { title: 'Health & Dignity', desc: 'Protects families from disease and improves daily wellbeing.' },
]

export default function Biodigester() {
  const { ref, visible } = useScrollAnimation()
  const progress = Math.round((BIODIGESTERS_INSTALLED / BIODIGESTERS_TARGET) * 100)

  return (
    <section id="biodigesters" className="py-20 lg:py-28" style={{ backgroundColor: '#004D2A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — Initiative info */}
          <div>
            <p
              className={`text-[#FCD116] font-bold text-sm uppercase tracking-widest mb-3 fade-up ${visible ? 'visible' : ''}`}
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Flagship Initiative
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight fade-up delay-100 ${visible ? 'visible' : ''}`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Free Biodigester Toilets for Every Home
            </h2>
            <p
              className={`text-white/75 text-base leading-relaxed mb-10 fade-up delay-200 ${visible ? 'visible' : ''}`}
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              We are delivering sanitation dignity directly to households in Odododiodioo — completely free of charge. Each biodigester converts household waste into safe liquid, eliminating open defecation, pit latrines, and the need for emptying services forever.
            </p>

            {/* 2×2 benefit cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.title}
                  className={`p-5 rounded-lg border border-white/10 fade-up ${visible ? 'visible' : ''}`}
                  style={{
                    backgroundColor: '#003320',
                    transitionDelay: `${(i + 3) * 100}ms`,
                  }}
                >
                  <h3
                    className="text-[#FCD116] font-bold text-base mb-1.5"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.03em' }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Counter card */}
          <div className={`fade-up delay-200 ${visible ? 'visible' : ''}`}>
            <div
              className="rounded-xl p-8 border border-white/10"
              style={{ backgroundColor: '#003320' }}
            >
              {/* Toilet emoji */}
              <div className="text-center mb-6">
                <span className="text-7xl" role="img" aria-label="Toilet">🚽</span>
              </div>

              {/* Installed counter */}
              <div className="text-center mb-8">
                <div
                  className="text-7xl font-black text-[#FCD116] leading-none"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {BIODIGESTERS_INSTALLED}
                </div>
                <p
                  className="text-white/60 text-sm uppercase tracking-widest mt-2"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  Households Installed
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-2">
                  <span
                    className="text-white/60 uppercase tracking-wider"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    Progress
                  </span>
                  <span
                    className="text-[#FCD116] font-bold"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {BIODIGESTERS_INSTALLED} / {BIODIGESTERS_TARGET} homes ({progress}%)
                  </span>
                </div>
                <div className="h-3 rounded-full overflow-hidden" style={{ backgroundColor: '#004D2A' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #FCD116, #f5b800)',
                    }}
                  />
                </div>
                <p
                  className="text-white/40 text-xs mt-2 text-right"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  Target: {BIODIGESTERS_TARGET} homes
                </p>
              </div>

              {/* WhatsApp CTA */}
              {/* WhatsApp: +233540852639 */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-3 w-full py-4 rounded-lg font-bold text-base transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  fontFamily: 'Barlow Condensed, sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                REQUEST VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
