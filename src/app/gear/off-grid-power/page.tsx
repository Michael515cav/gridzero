import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Off-Grid Power — Grid Zero', description: 'Power independence is freedom. These are the generators, solar setups, and battery systems that keep your critical gear running when the grid goes down.' }
const ITEMS = [
  {name:"Jackery Explorer 1000", tier:"Best Overall", price:"~\$999", desc:"1002Wh portable power station. Charges via solar, wall, or car. Powers small appliances, medical devices, and communications gear for days."},
  {name:"Goal Zero Yeti 500X", tier:"Premium", price:"~\$650", desc:"Compact but capable 505Wh station. Integrates with Goal Zero solar panels. Reliable and built to last."},
  {name:"Bluetti AC200P", tier:"Premium", price:"~\$1,499", desc:"2,000Wh capacity. 2,000W AC output. Can run a refrigerator. Serious long-term power solution."},
  {name:"Renogy 100W Solar Panel", tier:"Budget", price:"~\$90", desc:"Monocrystalline solar panel. Pairs with any charge controller. The building block of any DIY solar setup."},
  {name:"Champion 3500W Dual Fuel Generator", tier:"Best Overall", price:"~\$450", desc:"Runs on gasoline or propane. 3,500W surge / 3,000W running. Enough for refrigerator, lights, and communications."},
  {name:"Battle Born 100Ah LiFePO4 Battery", tier:"Premium", price:"~\$950", desc:"Lithium iron phosphate deep cycle battery. 3,000-5,000 cycle life. Superior to lead-acid in every measurable way for long-term storage."}
]
export default function GearPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#gear" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Gear</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Field-Tested Recommendations</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1rem', color: 'var(--cold-white)' }}>Off-Grid Power</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>Power independence is freedom. These are the generators, solar setups, and battery systems that keep your critical gear running when the grid goes down. Affiliate links help keep Grid Zero running at no extra cost to you.</p>
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
