import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Biodigesters', href: '#biodigesters' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Vision', href: '#vision' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-[#FCD116] ${
        scrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
      style={{ backgroundColor: '#006B3C' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <span
              style={{ fontFamily: 'Playfair Display, serif' }}
              className="text-[#FCD116] font-bold text-xl tracking-wide"
            >
              Space Clottey
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-white font-medium text-sm hover:text-[#FCD116] transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#join')}
              className="bg-[#CE1126] hover:bg-[#a80e1f] text-white font-semibold text-sm px-5 py-2 rounded transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
            >
              JOIN US
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#FCD116]/30" style={{ backgroundColor: '#004D2A' }}>
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left text-white font-medium text-base px-3 py-2.5 rounded hover:bg-[#006B3C] transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#join')}
              className="mt-2 bg-[#CE1126] text-white font-semibold text-sm px-5 py-3 rounded cursor-pointer"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
            >
              JOIN US
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
