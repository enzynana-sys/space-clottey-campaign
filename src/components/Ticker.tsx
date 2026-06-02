const ITEMS = [
  'Free Biodigester Toilets For Every Household',
  '100+ Jobs Created Across 8 Sectors',
  '20+ Years of Community Service',
  'A Vote for Space Clottey is a Vote for Peace & Development',
  'NDC — Building A Better Ghana',
]

export default function Ticker() {
  // Duplicate items so the marquee loops seamlessly
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className="overflow-hidden py-3 border-y-2 border-[#006B3C]"
      style={{ backgroundColor: '#FCD116' }}
      aria-label="Campaign highlights ticker"
    >
      <div className="animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-sm font-bold uppercase tracking-wider"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', color: '#003320' }}
            >
              {item}
            </span>
            <span className="mx-6 text-[#006B3C] font-black text-lg select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
