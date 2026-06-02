import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// UPDATE: WhatsApp
const WA_NUMBER = '233540852639'
const WA_BASE = `https://wa.me/${WA_NUMBER}`
// UPDATE: Phone
const PHONE_1 = '0540 852 639'
const PHONE_2 = '0508 349 740'

export default function Volunteer() {
  const [phone, setPhone] = useState('')
  const { ref, visible } = useReveal()

  const handleJoin = () => {
    const cleaned = phone.trim()
    if (!cleaned) return
    const msg = encodeURIComponent(`I want to support Space Clottey. My number is ${cleaned}.`)
    window.open(`${WA_BASE}?text=${msg}`, '_blank')
    setPhone('')
  }

  return (
    <section id="join" style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={ref}
          style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}
        >
          <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ marginBottom: 8 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#006B3C' }}>
              Get Involved
            </span>
          </div>

          <h2
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}
          >
            Join the Movement
          </h2>

          <p
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ fontSize: '1rem', color: '#555555', lineHeight: 1.8, marginBottom: 40 }}
          >
            Whether you want to volunteer, share your support, or simply stay informed — become part of the campaign to transform Odododiodioo.
          </p>

          {/* Phone input + join button */}
          <div
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}
          >
            <input
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleJoin()}
              placeholder="Your phone number"
              aria-label="Your phone number"
              style={{
                flex: 1,
                minWidth: 200,
                padding: '13px 16px',
                border: '1px solid #E5E5E5',
                borderRadius: 8,
                fontSize: '1rem',
                fontFamily: 'inherit',
                outline: 'none',
                color: '#111111',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = '#006B3C')}
              onBlur={e => (e.currentTarget.style.borderColor = '#E5E5E5')}
            />
            <button
              onClick={handleJoin}
              style={{
                background: '#CE1126',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '13px 28px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
                transition: 'background 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#a80e1f')}
              onMouseLeave={e => (e.currentTarget.style.background = '#CE1126')}
            >
              Join Now
            </button>
          </div>

          {/* Divider */}
          <div
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}
          >
            <div style={{ flex: 1, height: 1, background: '#E5E5E5' }} />
            <span style={{ fontSize: '0.8125rem', color: '#888', whiteSpace: 'nowrap' }}>or connect directly on WhatsApp</span>
            <div style={{ flex: 1, height: 1, background: '#E5E5E5' }} />
          </div>

          {/* WhatsApp broadcast button */}
          {/* UPDATE: WhatsApp */}
          <div className={`reveal${visible ? ' is-visible' : ''}`} style={{ marginBottom: 36 }}>
            <a
              href={WA_BASE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#25D366',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '14px 32px',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join WhatsApp Broadcast →
            </a>
          </div>

          {/* Phone numbers */}
          {/* UPDATE: Phone */}
          <div
            className={`reveal${visible ? ' is-visible' : ''}`}
            style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}
          >
            {[PHONE_1, PHONE_2].map(p => (
              <a
                key={p}
                href={`tel:+233${p.replace(/\s/g, '').replace(/^0/, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#555555', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#006B3C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                </svg>
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
