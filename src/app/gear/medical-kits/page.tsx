import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Medical Kits — Grid Zero', description: 'When clinics are overwhelmed or unreachable, your medical kit is your healthcare system. Build in layers from basic first aid to serious trauma management.' }
const ITEMS = [
  {name:"North American Rescue Individual First Aid Kit", tier:"Best Overall", price:"~\$65", desc:"Military-specification IFAK. Includes CAT tourniquet, chest seal, hemostatic gauze, compression bandage, and nasopharyngeal airway. The real thing."},
  {name:"CAT Combat Application Tourniquet", tier:"Best Overall", price:"~\$30", desc:"The tourniquet used by US military. Proven in combat. Buy genuine CAT from authorized dealers only — counterfeits exist and fail when it matters."},
  {name:"QuikClot Combat Gauze", tier:"Best Overall", price:"~\$25", desc:"Hemostatic gauze impregnated with kaolin. Stops severe bleeding faster than standard gauze. Standard of care for wound packing."},
  {name:"Adventure Medical Kits Fundamentals", tier:"Budget", price:"~\$40", desc:"Comprehensive everyday first aid kit. Good baseline for home and vehicle. Covers wound care, sprains, blisters, and minor emergencies."},
  {name:"Olaes Modular Bandage", tier:"Budget", price:"~\$12", desc:"Pressure bandage for wound compression. Compact, versatile, and trusted by military and first responders worldwide."},
  {name:"SAM Splint", tier:"Budget", price:"~\$8 each", desc:"Moldable aluminum splint for fractures and sprains. Lightweight, reusable, and effective. Stock several in every kit."}
]
export default function GearPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#gear" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Gear</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Field-Tested Recommendations</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1rem', color: 'var(--cold-white)' }}>Medical Kits</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>When clinics are overwhelmed or unreachable, your medical kit is your healthcare system. Build in layers from basic first aid to serious trauma management. Affiliate links help keep Grid Zero running at no extra cost to you.</p>
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
