import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Communications — Grid Zero', description: 'When cell networks fail, these radios and devices keep you connected. Every serious prepper needs redundant communication capability at multiple ranges.' }
const ITEMS = [
  {name:"Baofeng UV-5R Dual Band Radio", tier:"Budget", price:"~\$25", desc:"The entry-level HAM radio used worldwide. VHF/UHF, GMRS, MURS, and weather frequencies. Requires HAM license for full use. Buy several."},
  {name:"Yaesu FT-60R Dual Band HT", tier:"Best Overall", price:"~\$190", desc:"More reliable and durable than Baofeng. Excellent receiver sensitivity. The radio many experienced HAM operators recommend for emergency use."},
  {name:"Midland X-Talker T77VP5 GMRS Radios", tier:"Budget", price:"~\$90 pair", desc:"License-required GMRS handhelds with 38-mile range claim (realistic 2-5 miles). Good family communication option without HAM license."},
  {name:"Kaito KA500 Emergency Radio", tier:"Budget", price:"~\$50", desc:"Hand-crank and solar AM/FM/SW/NOAA radio. Receives NOAA weather alerts. USB phone charging. Essential for receiving emergency broadcasts."},
  {name:"Garmin inReach Mini 2", tier:"Premium", price:"~\$350 + subscription", desc:"Satellite communicator with two-way texting from anywhere on Earth. No cell network required. The ultimate backup when everything else fails."},
  {name:"Icom IC-7300 HF Transceiver", tier:"Premium", price:"~\$1,100", desc:"The top-rated HF radio for General and Extra class HAM operators. Worldwide communication capability. Your link to the global HAM network."}
]
export default function GearPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#gear" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Gear</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Field-Tested Recommendations</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1rem', color: 'var(--cold-white)' }}>Communications</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>When cell networks fail, these radios and devices keep you connected. Every serious prepper needs redundant communication capability at multiple ranges. Affiliate links help keep Grid Zero running at no extra cost to you.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--dim)', border: '1px solid var(--dim)' }}>
          {ITEMS.map((item: {name: string; tier: string; price: string; desc: string}, i: number) => (
            <div key={i} style={{ background: 'var(--steel-mid)', padding: '1.75rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: item.tier === 'Budget' ? 'var(--amber)' : item.tier === 'Premium' ? 'var(--rust)' : 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid currentColor', padding: '2px 8px' }}>{item.tier}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--cold-white)' }}>{item.price}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--cold-white)', marginBottom: '0.5rem' }}>{item.name}</div>
              <div style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{item.desc}</div>
              <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>View on Amazon →</a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.08em', lineHeight: 1.7 }}>
          // Grid Zero participates in affiliate programs. Clicking links may earn a small commission at no cost to you. We only recommend gear we would actually use.
        </div>
      </div>
    </PageLayout>
  )
}
