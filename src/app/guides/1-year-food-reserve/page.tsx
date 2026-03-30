import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export const metadata = { title: 'Building a 1-Year Food Reserve — Grid Zero', description: 'A practical guide to building a one-year food supply on a budget. Calorie planning, storage methods, rotation systems, and what to buy first.' }

export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 002 · Intermediate · 24 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>Building a<br />1-Year Food Reserve</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>
          A one-year food reserve is the gold standard of prepper food security. It sounds overwhelming but it's entirely achievable on a normal budget with a methodical approach. This guide walks you through calorie planning, what to buy, how to store it, and how to build your reserve gradually without breaking the bank.
        </p>

        <Section title="Why a Full Year?">
          <p>Three days gets you through a storm. Three months gets you through a job loss or regional disaster. A full year gets you through a civilizational disruption — grid-down scenarios, supply chain collapse, or prolonged civil unrest. It's also the point at which you stop being dependent on any external system for basic survival.</p>
          <p>A year of food for one person costs roughly $800–$1,500 built over time with bulk staples. That's less than most people spend on dining out in a year. The key is building it incrementally — a little extra every grocery run.</p>
        </Section>

        <Section title="Calculate Your Calorie Target">
          <p>Start with calories. An adult needs approximately 2,000–2,500 calories per day for normal activity. In a survival scenario with manual labor, that number goes up. Plan for 2,500 calories per adult per day as your baseline.</p>
          <p>For one person for one year: 2,500 × 365 = 912,500 calories. For a family of four: roughly 3.65 million calories. That sounds like a lot until you realize a 50-pound bag of white rice contains about 80,000 calories and costs around $20.</p>
        </Section>

        <Section title="The Core Four: Bulk Staples">
          <p>The backbone of any long-term food reserve is bulk staples. These are cheap, calorie-dense, shelf-stable for decades when properly stored, and nutritionally flexible.</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: 2 }}>
            <li><strong style={{ color: 'var(--cold-white)' }}>White rice</strong> — 25–30 years shelf life sealed, extremely calorie-dense, versatile base for hundreds of meals</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Hard red or white wheat</strong> — 25+ years shelf life, grind into flour for bread, pancakes, pasta</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Dried beans and lentils</strong> — 25–30 years sealed, high protein and fiber, cheap per calorie</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Oats</strong> — 30+ years sealed, versatile, good for breakfast and baking</li>
          </ul>
          <p>These four staples alone can sustain life. Everything else you add improves variety, nutrition, and morale.</p>
        </Section>

        <Section title="Storage Methods: Mylar and Oxygen Absorbers">
          <p>The enemy of long-term food storage is oxygen, moisture, light, and pests. The solution is Mylar bags with oxygen absorbers, sealed inside food-grade buckets.</p>
          <p>The process: fill a Mylar bag with your dry bulk food, drop in the appropriate number of oxygen absorbers (300–2000cc depending on bag size and food density), heat-seal the bag with a clothes iron or hair straightener, then place the sealed bag inside a 5-gallon food-grade bucket with a gamma seal lid. Label with contents and date.</p>
          <p>Done correctly, this method preserves white rice and wheat for 25–30 years. It's cheap — Mylar bags and oxygen absorbers cost pennies per pound of food stored.</p>
        </Section>

        <Section title="Beyond Staples: Fats, Salt, and Sugar">
          <p>Bulk staples keep you alive but they're missing critical macronutrients. Fats are essential for brain function and calorie density. Store coconut oil (2-year shelf life), ghee (clarified butter, 1+ year), and shortening. Olive oil oxidizes faster — rotate it regularly.</p>
          <p>Salt is one of the most underestimated prepper supplies. It's a preservative, an electrolyte, and makes food palatable. Store far more than you think you need — at least 10 pounds per person per year. Sugar and honey are long-term calorie sources and natural preservatives. Honey stored properly never expires.</p>
        </Section>

        <Section title="Freeze-Dried vs. Home-Packed">
          <p>Commercial freeze-dried food (Mountain House, Augason Farms, Thrive Life) is convenient, nutritious, and has 25–30 year shelf lives. It's also expensive — a full year's supply from commercial sources can cost $3,000–$5,000 per person.</p>
          <p>Home-packed bulk staples cost a fraction of that. The smart approach is a hybrid: home-packed staples as your calorie base, supplemented with commercial freeze-dried proteins, vegetables, and complete meals for variety and convenience.</p>
        </Section>

        <Section title="The Rotation System">
          <p>Food storage only works if you actually eat it and replace it. The FIFO method (first in, first out) ensures nothing expires unused. Store new purchases behind older stock. Eat from your reserve regularly and replace what you use. Your food storage becomes a living pantry, not a museum.</p>
          <p>Keep a simple inventory spreadsheet tracking what you have, how much, and the earliest expiration date. Review it quarterly. You'll catch problems before they become waste.</p>
        </Section>

        <Section title="Building It Incrementally">
          <p>You don't need to spend $1,500 this week. Add $20–$50 of long-term storage food to every grocery run. A 25-pound bag of rice here, a flat of canned goods there. Within six months of consistent incremental buying, most families have a meaningful 3-month supply. Within a year, you can have six months. Within two years, a full year's reserve.</p>
          <p>Prioritize in this order: water first, then a 72-hour kit, then 30 days, then 3 months, then 6 months, then 1 year. Each level makes you meaningfully more resilient than 95% of the population.</p>
        </Section>

        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/emp-hardening" className="btn-primary">Next: EMP Hardening Your Home →</Link>
          <Link href="/gear/food-storage" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', display: 'flex', alignItems: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Food Storage Gear →</Link>
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
