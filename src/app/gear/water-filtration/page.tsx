import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Water Filtration — Grid Zero', description: 'The right water filtration system is the difference between survival and waterborne illness. These are the filters, purifiers, and storage solutions we actually recommend.' }
const ITEMS = [
  {name:"Berkey Big Berkey", tier:"Best Overall", price:"~\$280", desc:"Gravity-fed filtration system. Removes bacteria, protozoa, viruses, heavy metals, and chemicals. No electricity needed. 6,000 gallon filter life."},
  {name:"Sawyer Squeeze", tier:"Budget", price:"~\$35", desc:"Lightweight squeeze filter for go-bags and bugout scenarios. 0.1 micron filtration removes bacteria and protozoa. Backflushable and nearly indestructible."},
  {name:"LifeStraw Personal", tier:"Budget", price:"~\$20", desc:"Personal straw-style filter. Good for go-bags and emergency kits. Filters up to 1,000 gallons. Does not filter viruses."},
  {name:"Katadyn Pocket Filter", tier:"Premium", price:"~\$380", desc:"Military-grade ceramic filter. 13,000 gallon lifetime. Extremely durable for long-term use. The gold standard for serious preppers."},
  {name:"Aquatabs Water Purification Tablets", tier:"Budget", price:"~\$10", desc:"Chlorine dioxide tablets kill bacteria, viruses, and Giardia. Essential backup for every kit. Lightweight and long shelf life."},
  {name:"WaterBOB Emergency Water Storage", tier:"Best Overall", price:"~\$35", desc:"100-gallon bathtub bladder. Fill your tub before a crisis hits. Clean, food-grade storage that uses infrastructure you already have."}
]
export default function GearPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#gear" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Gear</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Field-Tested Recommendations</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1rem', color: 'var(--cold-white)' }}>Water Filtration</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>The right water filtration system is the difference between survival and waterborne illness. These are the filters, purifiers, and storage solutions we actually recommend. Affiliate links help keep Grid Zero running at no extra cost to you.</p>
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
