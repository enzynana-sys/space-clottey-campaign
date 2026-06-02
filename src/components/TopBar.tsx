// UPDATE: Phone numbers & social links
const PHONE_1 = '0540 852 639'
const PHONE_2 = '0508 349 740'
const FB_URL = 'https://facebook.com/OkoeSClottey'
const TW_URL = 'https://twitter.com/spaceclottey'
const WA_URL = 'https://wa.me/233540852639' // UPDATE: WhatsApp

const FbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)
const TwIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const WaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
  </svg>
)

export default function TopBar() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001,
      height: 36, background: '#006B3C',
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Phones */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {[PHONE_1, PHONE_2].map(p => (
            <a key={p} href={`tel:+233${p.replace(/\s/g,'').replace(/^0/,'')}`}
              style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'rgba(255,255,255,0.9)', textDecoration: 'none', fontSize: '0.78rem', fontWeight: 500 }}>
              <PhoneIcon /> {p}
            </a>
          ))}
        </div>
        {/* Socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {[
            { href: FB_URL, icon: <FbIcon />, label: 'Facebook' },
            { href: TW_URL, icon: <TwIcon />, label: 'Twitter' },
            { href: WA_URL, icon: <WaIcon />, label: 'WhatsApp' },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
