import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Food Storage — Grid Zero', description: 'Long-term food security requires the right containers, preservation methods, and calorie-dense supplies. These are the products that serious preppers rely on.' }
const ITEMS = [
  {name:"Augason Farms 30-Day Emergency Food Supply", tier:"Best Overall", price:"~\$160", desc:"1,800+ calories per day, 30-day supply for one person. Variety of meals. 25-year shelf life. Good starting point for building your reserve."},
  {name:"5-Gallon Food-Grade Buckets with Gamma Lids", tier:"Budget", price:"~\$12 each", desc:"The container backbone of any bulk food storage system. Airtight, stackable, rodent-proof. Gamma lids allow easy access without full removal."},
  {name:"Mylar Bags (5-gallon, 5mil)", tier:"Budget", price:"~\$25 for 50", desc:"Essential for long-term grain and legume storage. Paired with oxygen absorbers, extends shelf life to 25+ years. Heat-seal with a clothes iron."},
  {name:"Oxygen Absorbers 2000cc (100 pack)", tier:"Budget", price:"~\$18", desc:"Remove residual oxygen from sealed Mylar bags. Critical for long-term storage. Use 2000cc absorbers for 5-gallon bags of dense foods."},
  {name:"Mountain House Classic Bucket", tier:"Premium", price:"~\$150", desc:"Freeze-dried meals with 30-year shelf life. Just-add-water preparation. High quality taste that actually matters for long-term morale."},
  {name:"LEM Vacuum Sealer", tier:"Best Overall", price:"~\$80", desc:"For sealing dehydrated foods, jerky, and medium-term storage items. Extends shelf life of processed foods 3-5x over unsealed storage."}
]
export default function GearPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#gear" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Gear</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Field-Tested Recommendations</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1rem', color: 'var(--cold-white)' }}>Food Storage</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>Long-term food security requires the right containers, preservation methods, and calorie-dense supplies. These are the products that serious preppers rely on. Affiliate links help keep Grid Zero running at no extra cost to you.</p>
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
