import { useState, useEffect } from 'react'

// NDC official logo
const NdcLogo = () => (
  <img src="/ndc-logo.png" alt="NDC Logo" style={{ width: 52, height: 52, objectFit: 'contain', display: 'block' }} />
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
            <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#CE1126', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.3 }}>
              VOTE · Odododiodioo Constituency<br />CHAIRMAN HOPEFUL
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
