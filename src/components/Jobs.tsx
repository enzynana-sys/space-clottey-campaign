import { useReveal } from '../hooks/useReveal'

// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639?text=Hello%20Space%20Clottey%2C%20I%20would%20like%20to%20submit%20my%20CV%20for%20a%20job%20opportunity.'

const SECTORS = [
  { name: 'Construction', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l8-6 8 6v10"/><path d="M10 20v-6h4v6"/></svg> },
  { name: 'Media & Comms', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/></svg> },
  { name: 'Healthcare', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
  { name: 'Trade & Retail', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
  { name: 'Education', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { name: 'Security', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { name: 'Hospitality', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> },
  { name: 'Technology', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#006B3C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> },
]

export default function Jobs() {
  const { ref, visible } = useReveal()
  return (
    <section id="jobs" style={{ background: '#F7F9F7', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{ marginBottom: 48 }}>
          <p className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: '0.75rem', fontWeight: 700, color: '#006B3C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Employment Impact</p>
          <h2 className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: 'clamp(1.75rem,3vw,2.25rem)', fontWeight: 800, color: '#111111', letterSpacing: '-0.02em', marginBottom: 12 }}>Putting Odododiodioo to Work</h2>
          <p className={`reveal${visible ? ' visible' : ''}`} style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.8, maxWidth: 560 }}>Space Clottey actively searches and secures real, paying jobs for constituency residents across multiple sectors.</p>
        </div>
        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginBottom: 32 }} className="jobs-grid">
          {SECTORS.map((s, i) => (
            <div key={s.name} className={`reveal${visible ? ' visible' : ''}`}
              style={{ background: '#ffffff', border: '1px solid #E5E5E5', borderRadius: 8, padding: 24, textAlign: 'center', transitionDelay: `${i * 50}ms`, cursor: 'default', transition: 'border-color 200ms, opacity 400ms ease, transform 400ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#006B3C')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#E5E5E5')}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111111', marginBottom: 4 }}>{s.name}</div>
              <div style={{ fontSize: '0.75rem', color: '#888888', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Jobs Secured</div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className={`reveal${visible ? ' visible' : ''}`}
          style={{ background: '#ffffff', borderRadius: 8, padding: 32, border: '1px solid #E5E5E5', borderLeft: '4px solid #006B3C', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#111111', marginBottom: 6 }}>Looking for work?</div>
            <div style={{ fontSize: '0.9375rem', color: '#555555', lineHeight: 1.7, maxWidth: 480 }}>Space Clottey is actively finding opportunities for constituency residents.</div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25D366', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '12px 24px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, transition: 'opacity 200ms' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send Your CV on WhatsApp →
          </a>
        </div>
      </div>
      <style>{`@media(max-width:768px){.jobs-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  )
}
