import { useState, useEffect } from 'react'

// NDC Umbrella logo — inline SVG
const NdcLogo = () => (
  <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Umbrella canopy */}
    <path d="M10 52 Q10 20 50 15 Q90 20 90 52 Z" fill="#006B3C"/>
    {/* Canopy segments */}
    <path d="M10 52 Q30 35 50 33 Q70 35 90 52" stroke="#CE1126" strokeWidth="2.5" fill="none"/>
    <path d="M50 15 L50 52" stroke="#CE1126" strokeWidth="2"/>
    {/* Handle */}
    <line x1="50" y1="52" x2="50" y2="80" stroke="#111111" strokeWidth="4" strokeLinecap="round"/>
    <path d="M50 80 Q50 90 42 90 Q36 90 36 84" stroke="#111111" strokeWidth="4" strokeLinecap="round" fill="none"/>
    {/* Stars/NDC dots */}
    <circle cx="32" cy="40" r="3" fill="#FCD116"/>
    <circle cx="50" cy="35" r="3" fill="#FCD116"/>
    <circle cx="68" cy="40" r="3" fill="#FCD116"/>
  </svg>
)

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Campaign', href: '#vision' },
  { label: 'Media', href: '#gallery' },
  { label: 'The Blog', href: '#stats' },
]

function go(href: string) {
  if (href === '#home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const handleNav = (href: string) => { setOpen(false); go(href) }

  return (
    <nav style={{
      position: 'fixed', top: 36, left: 0, right: 0, zIndex: 1000,
      height: 72, background: '#ffffff',
      borderBottom: '1px solid #E5E5E5',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 200ms',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo — NDC umbrella + candidate name */}
        <button
          onClick={() => go('#home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, padding: 0 }}
        >
          <NdcLogo />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#006B3C', lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: 'inherit' }}>
              Space Clottey
            </div>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, color: '#CE1126', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1 }}>
              NDC · Odododiodioo
            </div>
          </div>
        </button>

        {/* Desktop nav links — ndcuki.com style */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4 }}>
          {LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNav(href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 600,
                color: '#111111', padding: '8px 14px', letterSpacing: '0.01em',
                textTransform: 'uppercase', transition: 'color 150ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#006B3C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#111111')}
            >
              {label}
            </button>
          ))}

          {/* Join Us — outlined */}
          <button
            onClick={() => handleNav('#join')}
            style={{
              background: 'none', border: '2px solid #006B3C', color: '#006B3C',
              fontWeight: 700, fontSize: '0.875rem', padding: '7px 18px',
              borderRadius: 0, cursor: 'pointer', fontFamily: 'inherit',
              textTransform: 'uppercase', letterSpacing: '0.05em',
              transition: 'background 200ms, color 200ms', marginLeft: 8,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#006B3C'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#006B3C' }}
          >
            Join Us!
          </button>

          {/* Donate Now — filled red */}
          <a
            href="https://wa.me/233540852639?text=I%20want%20to%20donate%20to%20the%20Space%20Clottey%20campaign."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#CE1126', color: '#ffffff',
              fontWeight: 700, fontSize: '0.875rem', padding: '9px 18px',
              borderRadius: 0, textDecoration: 'none',
              textTransform: 'uppercase', letterSpacing: '0.05em',
              marginLeft: 6, transition: 'background 200ms',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a80e1f')}
            onMouseLeave={e => (e.currentTarget.style.background = '#CE1126')}
          >
            Donate Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round">
            {open
              ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>)
              : (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #E5E5E5', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 24px 20px' }}>
            {LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 600,
                  color: '#111', padding: '12px 0',
                  borderBottom: '1px solid #F0F0F0',
                  textTransform: 'uppercase', letterSpacing: '0.05em',
                }}
              >
                {label}
              </button>
            ))}
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                onClick={() => handleNav('#join')}
                style={{
                  flex: 1, border: '2px solid #006B3C', background: 'none', color: '#006B3C',
                  fontWeight: 700, fontSize: '0.875rem', padding: '11px',
                  borderRadius: 0, cursor: 'pointer', fontFamily: 'inherit',
                  textTransform: 'uppercase',
                }}
              >
                Join Us!
              </button>
              <a
                href="https://wa.me/233540852639?text=I%20want%20to%20donate%20to%20the%20Space%20Clottey%20campaign."
                target="_blank" rel="noopener noreferrer"
                style={{
                  flex: 1, background: '#CE1126', color: '#fff',
                  fontWeight: 700, fontSize: '0.875rem', padding: '11px',
                  textDecoration: 'none', textAlign: 'center',
                  textTransform: 'uppercase', display: 'block',
                }}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
