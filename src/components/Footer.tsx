const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// ── CONTACT & SOCIAL ───────────────────────────────────────────────────────
// Phone 1: 0540 852 639
// Phone 2: 0508 349 740
// WhatsApp: +233540852639
// Facebook: Okoe S. Clottey
// Twitter: spaceclottey
const PHONE_1 = '0540 852 639'
const PHONE_2 = '0508 349 740'
const WHATSAPP_LINK = 'https://wa.me/233540852639'
const FACEBOOK_URL = 'https://www.facebook.com/Okoe-S-Clottey'
const TWITTER_URL = 'https://twitter.com/spaceclottey'
// ────────────────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Biodigesters', href: '#biodigesters' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Vision', href: '#vision' },
  { label: 'Join Us', href: '#join' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* LEFT — Brand */}
          <div>
            <h3
              className="text-[#FCD116] font-bold text-2xl mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Space Clottey
            </h3>
            <p
              className="text-white/50 text-sm mb-6 leading-relaxed"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              NDC Candidate — Odododiodioo Constituency Chairman.
              Building a better Ghana, one constituency at a time.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook — Okoe S. Clottey"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-white/50 hover:text-[#FCD116] hover:border-[#FCD116]/50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter — @spaceclottey"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-white/50 hover:text-[#FCD116] hover:border-[#FCD116]/50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              {/* WhatsApp: +233540852639 */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 text-white/50 hover:text-[#FCD116] hover:border-[#FCD116]/50 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* MIDDLE — Quick links */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/50 hover:text-[#FCD116] text-sm transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              {/* Phone 1: 0540 852 639 */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FCD116] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a
                  href={`tel:+233${PHONE_1.replace(/\s/g, '').replace(/^0/, '')}`}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {PHONE_1}
                </a>
              </li>
              {/* Phone 2: 0508 349 740 */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#FCD116] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a
                  href={`tel:+233${PHONE_2.replace(/\s/g, '').replace(/^0/, '')}`}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  {PHONE_2}
                </a>
              </li>
              {/* WhatsApp: +233540852639 */}
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#25D366] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                >
                  +233 540 852 639
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/30 text-xs"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            &copy; {new Date().getFullYear()} Space Clottey Campaign. All rights reserved.
          </p>
          <span
            className="text-xs font-bold px-3 py-1 rounded-full"
            style={{
              backgroundColor: '#006B3C',
              color: '#FCD116',
              fontFamily: 'Barlow Condensed, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            NDC — ODODODIODIOO
          </span>
        </div>
      </div>
    </footer>
  )
}
