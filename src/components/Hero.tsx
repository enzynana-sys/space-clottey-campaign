import { useEffect, useState } from 'react'

// ── HERO STATS ─────────────────────────────────────────────────────────────
const STATS = [
  { value: 100, suffix: '+', label: 'Jobs Secured' },
  { value: 8, suffix: '', label: 'Sectors Represented' },
  { value: 20, suffix: '+', label: 'Years of Leadership' },
]

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1800
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target, active])
  return count
}

function StatCounter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(value, active)
  return (
    <div className="text-center">
      <div
        className="text-4xl md:text-5xl font-bold text-[#FCD116]"
        style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
      >
        {count}{suffix}
      </div>
      <div className="text-white/80 text-sm mt-1 uppercase tracking-widest"
        style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
      >
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ backgroundColor: '#006B3C' }}
    >
      {/* Diagonal stripe — right side */}
      <div
        className="absolute right-0 top-0 bottom-0 w-2/5 hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, transparent 30%, #004D2A 30%)',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #FCD116 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Content */}
          <div>
            {/* Live badge */}
            <div
              className={`inline-flex items-center gap-2 mb-6 fade-up ${visible ? 'visible' : ''}`}
            >
              <span className="w-2 h-2 rounded-full bg-[#FCD116] animate-pulse" />
              <span
                className="text-[#FCD116] text-xs font-bold uppercase tracking-[0.2em] border border-[#FCD116]/40 px-3 py-1 rounded-full"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                NDC Odododiodioo 2024
              </span>
            </div>

            {/* Name */}
            <h1
              className={`leading-none mb-4 fade-up delay-100 ${visible ? 'visible' : ''}`}
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              <span className="block text-white text-6xl sm:text-7xl lg:text-8xl font-black">
                Space
              </span>
              <span className="block text-[#FCD116] text-6xl sm:text-7xl lg:text-8xl font-black">
                Clottey
              </span>
            </h1>

            {/* Position */}
            <p
              className={`text-white/70 text-base sm:text-lg mb-4 fade-up delay-200 ${visible ? 'visible' : ''}`}
              style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
            >
              NDC CANDIDATE — ODODODIODIOO CONSTITUENCY CHAIRMAN
            </p>

            {/* Tagline */}
            <p
              className={`text-white text-xl sm:text-2xl font-semibold mb-10 max-w-md leading-snug fade-up delay-300 ${visible ? 'visible' : ''}`}
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              "A Vote for Space Clottey, is a Vote for <span className="text-[#FCD116]">Peace & Development</span>"
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 mb-10 fade-up delay-400 ${visible ? 'visible' : ''}`}>
              {STATS.map((s) => (
                <StatCounter key={s.label} {...s} active={visible} />
              ))}
            </div>

            {/* CTA buttons */}
            <div className={`flex flex-wrap gap-4 fade-up delay-500 ${visible ? 'visible' : ''}`}>
              <button
                onClick={() => scrollTo('#join')}
                className="bg-[#CE1126] hover:bg-[#a80e1f] text-white font-bold px-8 py-3.5 rounded transition-colors duration-200 cursor-pointer text-base"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
              >
                JOIN THE MOVEMENT
              </button>
              <button
                onClick={() => scrollTo('#biodigesters')}
                className="border-2 border-white text-white hover:bg-white hover:text-[#006B3C] font-bold px-8 py-3.5 rounded transition-colors duration-200 cursor-pointer text-base"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
              >
                OUR INITIATIVES
              </button>
            </div>
          </div>

          {/* RIGHT — Candidate photo */}
          <div className={`flex justify-center lg:justify-end fade-up delay-300 ${visible ? 'visible' : ''}`}>
            {/*
              PHOTO PLACEHOLDER
              Replace the div below with:
              <img src="/space-clottey.jpg" alt="Space Clottey" className="rounded-lg w-full max-w-sm object-cover shadow-2xl" />
              Place space-clottey.jpg in the /public folder — no other code changes needed.
            */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-96 lg:h-[500px]">
              <div
                className="absolute inset-0 rounded-lg border-2 border-dashed border-[#FCD116]/50 flex flex-col items-center justify-center text-center p-6"
                style={{ backgroundColor: '#004D2A' }}
              >
                <div className="text-5xl mb-4">📸</div>
                <p
                  className="text-[#FCD116] font-semibold text-sm mb-2"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  CANDIDATE PHOTO
                </p>
                <p className="text-white/50 text-xs" style={{ fontFamily: 'Barlow, sans-serif' }}>
                  Add space-clottey.jpg to /public and replace this placeholder
                </p>
              </div>
              {/* Gold accent corner */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#FCD116]/30 rounded-lg -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
