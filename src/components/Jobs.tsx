import { useScrollAnimation } from '../hooks/useScrollAnimation'

// WhatsApp number — +233540852639
const WHATSAPP_CV_LINK = 'https://wa.me/233540852639?text=Hello%20Space%20Clottey%2C%20I%20would%20like%20to%20submit%20my%20CV%20for%20job%20opportunities%20in%20the%20constituency.'

const SECTORS = [
  { emoji: '🏗️', name: 'Construction' },
  { emoji: '📡', name: 'Media & Comms' },
  { emoji: '🏥', name: 'Healthcare' },
  { emoji: '🛒', name: 'Trade & Retail' },
  { emoji: '🎓', name: 'Education' },
  { emoji: '🔒', name: 'Security' },
  { emoji: '🍽️', name: 'Hospitality' },
  { emoji: '💻', name: 'Technology' },
]

export default function Jobs() {
  const { ref, visible } = useScrollAnimation()

  return (
    <section id="jobs" className="py-20 lg:py-28" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className="text-center mb-14">
          <p
            className={`text-[#CE1126] font-bold text-sm uppercase tracking-widest mb-3 fade-up ${visible ? 'visible' : ''}`}
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Economic Empowerment
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-[#006B3C] leading-tight fade-up delay-100 ${visible ? 'visible' : ''}`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Putting Odododiodioo to Work
          </h2>
          <p
            className={`text-gray-600 text-base mt-4 max-w-xl mx-auto fade-up delay-200 ${visible ? 'visible' : ''}`}
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            Over 100 sustainable jobs secured across 8 key sectors — and we're just getting started.
          </p>
        </div>

        {/* 4×2 Sector grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {SECTORS.map((sector, i) => (
            <div
              key={sector.name}
              className={`bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:border-[#006B3C] hover:shadow-md transition-all duration-300 cursor-default fade-up ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="text-4xl mb-3" role="img" aria-label={sector.name}>
                {sector.emoji}
              </div>
              <p
                className="font-bold text-[#006B3C] text-base leading-tight"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.03em' }}
              >
                {sector.name}
              </p>
              <p
                className="text-gray-400 text-xs mt-1 uppercase tracking-widest"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                jobs
              </p>
            </div>
          ))}
        </div>

        {/* CTA box */}
        <div
          className={`rounded-xl p-8 border-2 border-[#006B3C] text-center fade-up delay-400 ${visible ? 'visible' : ''}`}
          style={{ backgroundColor: '#fff' }}
        >
          <p
            className="text-[#006B3C] font-bold text-lg mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Looking for work?
          </p>
          <p
            className="text-gray-600 text-base mb-6 max-w-lg mx-auto"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            Space Clottey is actively finding opportunities for constituency residents. Send your CV directly via WhatsApp and we'll connect you to the right opportunity.
          </p>
          {/* WhatsApp: +233540852639 */}
          <a
            href={WHATSAPP_CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold text-white px-8 py-4 rounded-lg transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            style={{
              backgroundColor: '#25D366',
              fontFamily: 'Barlow Condensed, sans-serif',
              letterSpacing: '0.05em',
              fontSize: '1rem',
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            SEND YOUR CV VIA WHATSAPP
          </a>
        </div>
      </div>
    </section>
  )
}
