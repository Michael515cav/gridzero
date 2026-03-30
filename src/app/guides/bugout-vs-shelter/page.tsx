import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Bugging Out vs. Sheltering In Place — Grid Zero', description: 'How to decide whether to bug out or shelter in place in a disaster. Decision framework, trigger points, and planning for both scenarios.' }
export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 005 · Beginner · 10 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>Bugging Out vs.<br />Sheltering In Place</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>The most important decision you may ever make in a crisis: do you stay or do you go? Most preppers romanticize bugging out. The reality is that sheltering in place is usually the right call — but not always. Here is the framework for making that decision correctly under pressure.</p>
        <Section title="The Default Answer: Stay">
          <p>Statistically, sheltering in place is the right choice in the majority of disaster scenarios. Your home has food, water, shelter, security, and familiarity. The roads will be gridlocked. You may be moving into danger rather than away from it. Every resource you leave behind is a resource you no longer have.</p>
          <p>The prepper media glorifies the bug-out. In reality, most people who bug out during disasters fare worse than those who stayed, were better prepared at home, and waited it out.</p>
        </Section>
        <Section title="When to Bug Out">
          <p>There are scenarios where staying is not an option. Bug out when your home is physically threatened (fire, flood, structural failure), when staying means certain capture or harm (active combat zone, mandatory evacuation for legitimate hazard), when you have no supplies at home and a secure location elsewhere, or when civil order collapses to the point where your home cannot be defended.</p>
          <p>Establish your personal trigger points in advance. Write them down. Discuss them with your family. Making this decision in the moment under stress is how people make fatal mistakes.</p>
        </Section>
        <Section title="Your Bug-Out Location">
          <p>A bug-out location (BOL) is only valuable if it has supplies, shelter, and a defensible position. An empty piece of land in the woods is not a bug-out location — it's a campsite. Your BOL needs pre-positioned supplies, ideally a structure, water access, and a route that doesn't depend on major highways.</p>
          <p>The best BOLs are properties of trusted family or friends outside of urban areas who are also prepared. The second best is a rural property you own with pre-staged supplies. Know your route. Drive it. Have alternates mapped.</p>
        </Section>
        <Section title="The Bug-Out Vehicle">
          <p>Your bug-out vehicle should be reliable, have high ground clearance for off-road use if needed, have enough cargo capacity for your group and gear, and ideally run on diesel or have a large fuel tank. Keep it above half a tank always. Have fuel stored at home for an additional range extension.</p>
          <p>A vehicle that breaks down on a clogged highway during an evacuation is worse than having stayed home. Reliability beats capability every time.</p>
        </Section>
        <Section title="Shelter-In-Place Hardening">
          <p>If you're staying, make your home a fortress. This means reinforced entry points, blackout curtains so light doesn't advertise your presence, a defensive perimeter awareness plan, communications, and enough supplies to wait out whatever is happening outside.</p>
          <p>Most civil unrest events burn themselves out within days to weeks. Most natural disaster aftermaths stabilize within weeks. Your job sheltering in place is to outlast the chaos without becoming a target or a casualty.</p>
        </Section>
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/ham-radio-licensing" className="btn-primary">Next: HAM Radio Licensing →</Link>
          <Link href="/gear/bugout-shelter" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Bugout & Shelter Gear →</Link>
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
