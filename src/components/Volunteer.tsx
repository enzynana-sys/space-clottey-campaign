import { useState } from 'react'

// WhatsApp number — +233540852639
const WHATSAPP_NUMBER = '233540852639'
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`

export default function Volunteer() {
  const [phone, setPhone] = useState('')

  const handleJoin = () => {
    const cleaned = phone.trim()
    if (!cleaned) return
    const msg = encodeURIComponent(
      `Hello Space Clottey! I'd like to join the movement and support your campaign. My number is ${cleaned}.`
    )
    // WhatsApp: +233540852639
    window.open(`${WHATSAPP_BASE}?text=${msg}`, '_blank')
    setPhone('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleJoin()
  }

  return (
    <section
      id="join"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#CE1126' }}
    >
      {/* Diagonal texture stripes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)',
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-white/70 font-bold text-sm uppercase tracking-widest mb-4"
          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        >
          Be Part of the Change
        </p>
        <h2
          className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Join the Movement
        </h2>
        <p
          className="text-white/85 text-base sm:text-lg mb-10 leading-relaxed max-w-lg mx-auto"
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          Whether you want to volunteer, share your support, or simply stay informed — become part of the campaign.
        </p>

        {/* Phone input + button */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Your phone number e.g. 0540 852 639"
            className="flex-1 max-w-xs sm:max-w-sm px-5 py-4 rounded-lg text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
            style={{ fontFamily: 'Barlow, sans-serif' }}
            aria-label="Your phone number"
          />
          <button
            onClick={handleJoin}
            className="bg-[#006B3C] hover:bg-[#004D2A] text-white font-bold px-8 py-4 rounded-lg transition-colors duration-200 cursor-pointer text-base"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}
          >
            JOIN NOW
          </button>
        </div>

        {/* Divider */}
        <p
          className="text-white/50 text-sm mb-5 uppercase tracking-wider"
          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
        >
          or connect directly
        </p>

        {/* WhatsApp broadcast button */}
        {/* WhatsApp: +233540852639 */}
        <a
          href={WHATSAPP_BASE}
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
          JOIN VIA WHATSAPP
        </a>
      </div>
    </section>
  )
}
