import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Biodigesters', href: '#biodigesters' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Vision', href: '#vision' },
]

function go(href: string) {
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

  return (
    <nav style={{
      position: 'fixed', top: 36, left: 0, right: 0, zIndex: 1000, height: 64,
      background: '#ffffff', borderBottom: '1px solid #E5E5E5',
      boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 200ms',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1.1rem', fontWeight: 800, color: '#006B3C', letterSpacing: '-0.02em' }}>
          Space Clottey
        </button>
        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 28 }}>
          {LINKS.map(({ label, href }) => (
            <button key={href} onClick={() => go(href)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9375rem', fontWeight: 500, color: '#111111', transition: 'color 150ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#006B3C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#111111')}>
              {label}
            </button>
          ))}
          <button onClick={() => go('#join')}
            style={{ background: '#CE1126', color: '#fff', border: 'none', borderRadius: 100, padding: '8px 22px', fontSize: '0.9375rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 150ms' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a80e1f')}
            onMouseLeave={e => (e.currentTarget.style.background = '#CE1126')}>
            Join Us
          </button>
        </div>
        {/* Mobile hamburger */}
        <button className="flex md:hidden" onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round">
            {open ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>) : (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)}
          </svg>
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #E5E5E5' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: '8px 24px 16px' }}>
            {LINKS.map(({ label, href }) => (
              <button key={href} onClick={() => { go(href); setOpen(false) }}
                style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', fontWeight: 500, color: '#111', padding: '11px 0', borderBottom: '1px solid #F0F0F0' }}>
                {label}
              </button>
            ))}
            <button onClick={() => { go('#join'); setOpen(false) }}
              style={{ marginTop: 14, display: 'block', width: '100%', background: '#CE1126', color: '#fff', border: 'none', borderRadius: 100, padding: '12px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
              Join Us
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
