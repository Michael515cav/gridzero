import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Off-Grid Water: Sourcing & Purification — Grid Zero', description: 'Complete guide to finding, collecting, and purifying water off-grid. Natural sources, filtration methods, chemical treatment, and long-term water security.' }
export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 004 · Intermediate · 15 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>Off-Grid Water:<br />Sourcing & Purification</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>When municipal water fails, most people have no plan. This guide covers every method of finding and purifying water in a grid-down scenario — from rainwater collection to wilderness sourcing to chemical treatment.</p>
        <Section title="Your Water Hierarchy">
          <p>In any water shortage scenario, work down this priority list: stored water first, then rainwater collection, then surface water with treatment, then ground water. Never drink untreated water from any source — the risk of waterborne illness in an already-stressed survival situation can be fatal.</p>
        </Section>
        <Section title="Rainwater Collection">
          <p>Rainwater is one of the cleanest natural water sources available. Set up collection systems from your roof gutters into food-grade barrels. A 1,000 square foot roof can collect 600 gallons from just one inch of rainfall. First-flush diverters eliminate the dirtiest water from the initial flush of a rainfall. Filter and purify before drinking.</p>
          <p>Check your state laws — some states regulate rainwater collection, though this is increasingly being repealed. Store collection barrels in a cool, dark location to prevent algae growth.</p>
        </Section>
        <Section title="Natural Water Sources">
          <p>Moving water is generally safer than still water — rivers and streams have more oxygenation and less stagnation. Spring water emerging directly from the ground is often the cleanest natural source. Avoid water downstream of agriculture, industry, or human habitation whenever possible.</p>
          <p>Visual clarity does not mean safety. Crystal-clear water can carry Giardia, Cryptosporidium, bacteria, and viruses. Every drop from a natural source must be treated.</p>
        </Section>
        <Section title="Filtration Methods">
          <p>Gravity filters like the Berkey or Sawyer systems remove bacteria, protozoa, and sediment but do not remove viruses. For wilderness use in North America where viral contamination is less common, this is often sufficient. For disaster scenarios with potential sewage contamination, you need additional treatment.</p>
          <p>Reverse osmosis systems remove everything including viruses but require water pressure to operate. In a grid-down scenario without pressure, they're not practical without a pump. Ceramic filters are durable, long-lasting, and effective against bacteria and protozoa.</p>
        </Section>
        <Section title="Chemical Treatment">
          <p>Unscented household bleach (sodium hypochlorite, 6-8.25%) kills most pathogens in clear water: 8 drops per gallon, wait 30 minutes. For cloudy water, double the dose and filter first. Bleach loses potency over time — rotate your supply annually.</p>
          <p>Water purification tablets (iodine or chlorine dioxide) are lightweight, cheap, and effective. Chlorine dioxide tablets are superior — they kill Cryptosporidium, which iodine does not. They're essential in every go-bag.</p>
        </Section>
        <Section title="Boiling">
          <p>Boiling is the most reliable water purification method when fuel is available. A rolling boil for one minute (three minutes at elevation above 6,500 feet) kills all biological contaminants. It does not remove chemical or heavy metal contamination. Let water cool in a covered, clean container before drinking.</p>
        </Section>
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/bugout-vs-shelter" className="btn-primary">Next: Bugout vs Shelter In Place →</Link>
          <Link href="/gear/water-filtration" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Water Filtration Gear →</Link>
        </div>
      </article>
    </PageLayout>
  )
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--cold-white)', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--dim)' }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>{children}</div>
    </div>
  )
}
