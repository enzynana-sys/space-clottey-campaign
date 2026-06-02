import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639'
// UPDATE: Phone numbers
const PHONE_1 = '0540 852 639'
const PHONE_2 = '0508 349 740'

export default function Volunteer() {
  const [phone, setPhone] = useState('')
  const { ref, visible } = useReveal()

  const handleJoin = () => {
    const n = phone.trim(); if (!n) return
    window.open(`${WA}?text=${encodeURIComponent(`I want to support Space Clottey. My number is ${n}.`)}`, '_blank')
    setPhone('')
  }

  return (
    <section id="join" style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #E5E5E5' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* ndcuki.com "want to getting start. join us!!" style CTA block */}
        <div
          ref={ref}
          style={{
            background: '#006B3C',
            padding: '64px 48px',
            textAlign: 'center',
          }}
        >
          <p className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FCD116', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
            Get Involved
          </p>
          <h2 className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: 'clamp(1.75rem,3.5vw,3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 16, transitionDelay: '60ms' }}>
            Want to Join the Movement?<br />
            <span style={{ color: '#FCD116' }}>Join Us Now!!</span>
          </h2>
          <p className={`reveal${visible ? ' visible' : ''}`}
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 40px', transitionDelay: '100ms' }}>
            Whether you want to volunteer, share your support, or simply stay informed — become part of the campaign to transform Odododiodioo.
          </p>

          {/* Input + Button — ndcuki.com style */}
          <div className={`reveal${visible ? ' visible' : ''}`}
            style={{ display: 'flex', gap: 0, maxWidth: 480, margin: '0 auto 24px', transitionDelay: '140ms' }}>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleJoin()}
              placeholder="Enter your phone number"
              style={{ flex: 1, padding: '14px 16px', border: 'none', borderRadius: 0, fontSize: '0.9375rem', fontFamily: 'inherit', color: '#111', outline: 'none', background: '#fff' }} />
            <button onClick={handleJoin}
              style={{ background: '#CE1126', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '14px 24px', border: 'none', borderRadius: 0, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', transition: 'background 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#a80e1f')}
              onMouseLeave={e => (e.currentTarget.style.background = '#CE1126')}>
              Join Now
            </button>
          </div>

          {/* Divider */}
          <div className={`reveal${visible ? ' visible' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: 16, maxWidth: 480, margin: '0 auto 24px', transitionDelay: '180ms' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.2)' }} />
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8125rem' }}>or connect directly on WhatsApp</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.2)' }} />
          </div>

          {/* WhatsApp button */}
          <div className={`reveal${visible ? ' visible' : ''}`} style={{ marginBottom: 32, transitionDelay: '200ms' }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px 32px', borderRadius: 0, textDecoration: 'none', transition: 'opacity 200ms' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Join WhatsApp Broadcast →
            </a>
          </div>

          {/* Phone numbers */}
          <div className={`reveal${visible ? ' visible' : ''}`}
            style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', transitionDelay: '220ms' }}>
            {[PHONE_1, PHONE_2].map(p => (
              <a key={p} href={`tel:+233${p.replace(/\s/g,'').replace(/^0/,'')}`}
                style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'rgba(255,255,255,0.72)', textDecoration: 'none', fontSize: '0.9375rem', fontWeight: 500, transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/></svg>
                {p}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
