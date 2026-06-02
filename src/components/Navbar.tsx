import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Biodigesters', href: '#biodigesters' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Vision', href: '#vision' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    scrollTo(href)
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#ffffff',
        borderBottom: '1px solid #E5E5E5',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 200ms ease',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.125rem',
              fontWeight: 800,
              color: '#006B3C',
              letterSpacing: '-0.02em',
              fontFamily: 'inherit',
            }}
          >
            Space Clottey
          </button>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: '#111111',
                  fontFamily: 'inherit',
                  transition: 'color 200ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#006B3C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#111111')}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#join')}
              style={{
                background: '#CE1126',
                color: '#ffffff',
                border: 'none',
                borderRadius: 100,
                padding: '8px 22px',
                fontSize: '0.9375rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#a80e1f')}
              onMouseLeave={e => (e.currentTarget.style.background = '#CE1126')}
            >
              Join Us
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
            className="flex md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#ffffff', borderTop: '1px solid #E5E5E5' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '12px 24px 20px' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#111111',
                  padding: '12px 0',
                  fontFamily: 'inherit',
                  borderBottom: '1px solid #F0F0F0',
                }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#join')}
              style={{
                marginTop: 16,
                display: 'block',
                width: '100%',
                background: '#CE1126',
                color: '#ffffff',
                border: 'none',
                borderRadius: 100,
                padding: '12px 22px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
