// UPDATE: WhatsApp
const WA = 'https://wa.me/233540852639'

export default function StickyWhatsApp() {
  return (
    <div className="md:hidden" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 56, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', zIndex: 9999 }}>
      <span style={{ color: '#ffffff', fontSize: '0.8rem', fontWeight: 500 }}>Have a question or need assistance?</span>
      <a href={WA} target="_blank" rel="noopener noreferrer"
        style={{ background: '#ffffff', color: '#25D366', fontWeight: 700, fontSize: '0.8rem', padding: '7px 14px', borderRadius: 6, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 12 }}>
        Chat on WhatsApp
      </a>
    </div>
  )
}
