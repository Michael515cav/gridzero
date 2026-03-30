import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Bugout & Shelter — Grid Zero', description: 'Whether you are evacuating or setting up a forward position, these are the bags, shelters, and sleep systems that perform when conditions are worst.' }
const ITEMS = [
  {name:"5.11 Tactical RUSH72 Backpack", tier:"Best Overall", price:"~\$160", desc:"72-liter capacity MOLLE-compatible pack. Built for hard use. Enough volume for a full 72-hour kit plus extra. Trusted by military and first responders."},
  {name:"Condor 3-Day Assault Pack", tier:"Budget", price:"~\$55", desc:"Affordable 50-liter MOLLE pack. Solid build quality for the price. A good starting point for a go-bag without breaking the budget."},
  {name:"SOL Escape Bivy", tier:"Best Overall", price:"~\$50", desc:"Emergency bivy bag that reflects 80% of body heat. Waterproof. Packs small. Far superior to a standard mylar blanket for overnight survival situations."},
  {name:"Kelty Cosmic 20 Sleeping Bag", tier:"Budget", price:"~\$120", desc:"20°F rated synthetic fill bag. Packs reasonably small. Synthetic insulation performs when wet, unlike down. Good 3-season bug-out bag option."},
  {name:"MSR Hubba Hubba 2-Person Tent", tier:"Premium", price:"~\$450", desc:"Ultralight 2-person freestanding tent. Fast setup. Proven in harsh conditions. The go-to tent when weight and reliability both matter."},
  {name:"Tact Bivvy 2.0 Emergency Sleeping Bag", tier:"Budget", price:"~\$25", desc:"Reusable emergency bivy that packs to fist size. Waterproof and windproof. Rated to -20°F reflective capability. Every go-bag needs one."}
]
export default function GearPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#gear" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Gear</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Field-Tested Recommendations</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1rem', color: 'var(--cold-white)' }}>Bugout & Shelter</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>Whether you are evacuating or setting up a forward position, these are the bags, shelters, and sleep systems that perform when conditions are worst. Affiliate links help keep Grid Zero running at no extra cost to you.</p>
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
