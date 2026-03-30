import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export const metadata = { title: 'The 72-Hour Survival Plan — Grid Zero', description: 'A step-by-step guide to building your 72-hour emergency survival plan. Water, food, shelter, communication, and evacuation covered.' }

export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 001 · Beginner · 12 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>The 72-Hour<br />Survival Plan</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>
          The first 72 hours after a disaster are the most critical. Emergency services are overwhelmed, supply chains are disrupted, and most people are completely unprepared. This guide gives you a concrete, actionable plan to keep yourself and your family alive through those first three days — no matter what hits.
        </p>

        <Section title="Why 72 Hours?">
          <p>FEMA and emergency management agencies universally recommend preparing for at least 72 hours of self-sufficiency. The reasoning is simple: after a major disaster, first responders are stretched thin. Roads may be impassable. Power may be out. Stores will be empty within hours of a crisis announcement.</p>
          <p>Seventy-two hours is the minimum baseline. Smart preppers plan for two weeks. But if you have nothing right now, 72 hours is where you start — today.</p>
        </Section>

        <Section title="Step 1 — Water First">
          <p>Water is your number one priority. The human body begins to fail after three days without it, sooner in heat or if you're exerting yourself. You need a minimum of one gallon per person per day — more if you have children, elderly family members, or pets.</p>
          <p>For a family of four over 72 hours, that's 12 gallons minimum. Store water in food-grade containers away from direct sunlight. Rotate your supply every six to twelve months. Never rely solely on tap water — in many disaster scenarios, municipal water becomes unsafe or unavailable within hours.</p>
          <p>Additionally, have a filtration backup. A quality gravity filter or a supply of water purification tablets gives you options if your stored water runs out or gets contaminated.</p>
        </Section>

        <Section title="Step 2 — Food That Requires No Cooking">
          <p>Your 72-hour food supply should require zero cooking. Assume no power, no gas, no way to heat anything. Focus on calorie-dense, ready-to-eat foods: canned goods, peanut butter, crackers, dried fruit, nuts, and protein bars.</p>
          <p>Aim for at least 2,000 calories per adult per day. Write down any dietary restrictions, medications that need to be taken with food, and the specific needs of children or elderly family members. Don't forget a manual can opener — this is one of the most commonly forgotten items in emergency kits.</p>
          <p>Store food in a cool, dry place. Keep it in a dedicated bag or bin that doesn't get raided for everyday snacking. Label everything with expiration dates.</p>
        </Section>

        <Section title="Step 3 — The Go-Bag">
          <p>A go-bag (also called a bug-out bag or 72-hour kit) is a pre-packed bag you can grab and leave with in under two minutes. It lives near your door or in your vehicle. Every adult in your household should have one. Children should have scaled-down versions.</p>
          <p>Core go-bag contents:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: 2 }}>
            <li>Water (at least 1 liter, plus purification tablets)</li>
            <li>Food (minimum 2,000 calories of ready-to-eat items)</li>
            <li>First aid kit</li>
            <li>Flashlight and extra batteries (or hand-crank)</li>
            <li>Multi-tool or knife</li>
            <li>Emergency mylar blankets (2 minimum)</li>
            <li>Copies of important documents (ID, insurance, bank info) in a waterproof bag</li>
            <li>Cash in small bills — ATMs go down</li>
            <li>Phone charger and backup battery</li>
            <li>Change of clothes and sturdy shoes</li>
            <li>Prescription medications (30-day supply if possible)</li>
            <li>NOAA weather radio or battery-powered AM/FM radio</li>
          </ul>
        </Section>

        <Section title="Step 4 — Communication Plan">
          <p>Assume your cell phone won't work. Cell towers get overloaded or damaged in disasters. Agree on a meeting point with your family before anything happens. Pick two — one near your home, one outside your neighborhood in case you can't get home.</p>
          <p>Designate an out-of-state contact that all family members can check in with. Local lines often jam while long-distance calls get through. Text messages use less bandwidth than calls and are more likely to go through when networks are congested.</p>
          <p>Consider a set of GMRS or FRS two-way radios for your household. They work without cell infrastructure and are invaluable when phones fail.</p>
        </Section>

        <Section title="Step 5 — Shelter and Warmth">
          <p>If you shelter in place, your home is your shelter. But be prepared for the possibility that you can't stay. Know your evacuation routes — at least two ways out of your neighborhood, and two ways out of your city. Keep your car's gas tank above half full at all times.</p>
          <p>For warmth, mylar emergency blankets are light, cheap, and can be lifesaving. If you live in a cold climate, include wool blankets, hand warmers, and cold-weather clothing in your go-bag. Hypothermia kills faster than hunger.</p>
        </Section>

        <Section title="Step 6 — Sanitation">
          <p>This is the step most people skip and then regret. If water service goes down, toilets stop working after one flush. Have a supply of waste bags designed for emergency toilet use, or know how to dig a proper cat hole latrine if outdoors. Include hand sanitizer, wet wipes, and basic hygiene supplies in your kit.</p>
          <p>Disease spreads rapidly in disaster scenarios due to poor sanitation. A few dollars spent on sanitation supplies now can prevent serious illness later.</p>
        </Section>

        <Section title="Your 72-Hour Checklist">
          <p>Before you move on to longer-term preparedness, make sure you have all of the following in place:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: 2 }}>
            <li>12+ gallons of stored water for a family of four</li>
            <li>72 hours of ready-to-eat food per person</li>
            <li>Go-bag packed and accessible for each family member</li>
            <li>Two designated family meeting points</li>
            <li>Out-of-state emergency contact established</li>
            <li>Two-way radios or alternative communication device</li>
            <li>Evacuation routes mapped and practiced</li>
            <li>Sanitation supplies stocked</li>
          </ul>
        </Section>

        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/1-year-food-reserve" className="btn-primary">Next: Building a 1-Year Food Reserve →</Link>
          <Link href="/gear/water-filtration" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', display: 'flex', alignItems: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Water Filtration Gear →</Link>
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
