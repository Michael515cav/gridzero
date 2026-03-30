import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Prepper Security: Perimeter & Opsec — Grid Zero', description: 'Home security, operational security, and perimeter defense for preppers. How to protect your supplies, your family, and your location.' }
export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 008 · Advanced · 22 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>Prepper Security:<br />Perimeter & Opsec</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>Supplies, skills, and plans mean nothing if someone takes them from you. Security is the most uncomfortable topic in prepping and the one most people avoid until it is too late. This guide covers operational security, home hardening, and perimeter awareness.</p>
        <Section title="Operational Security (OPSEC)">
          <p>The first rule of prepping security is not talking about your preps. Every person who knows you have a year of food and supplies is a potential threat vector when resources become scarce. This is not paranoia — it is basic operational security practiced by every military and intelligence organization in the world.</p>
          <p>Keep your preparations to yourself and your immediate household. Be selective about who knows your bug-out location. On social media, do not post photos of your storage, your gear, or anything that identifies your location or capabilities.</p>
        </Section>
        <Section title="Home Hardening">
          <p>Most home break-ins happen through doors. Reinforce every exterior door with a quality deadbolt and a door reinforcement kit (Door Armor or similar) that prevents kick-in. Standard door frames are weak — a reinforced frame and longer screws into the structural framing changes the equation significantly.</p>
          <p>Windows are secondary entry points. Window security film slows breaking and entry. Window and door sensors with a battery-powered alarm system provide early warning. Exterior lighting with motion sensors deters opportunistic intruders.</p>
        </Section>
        <Section title="Perimeter Awareness">
          <p>In a grid-down scenario with extended duration, your security perimeter expands beyond your front door. You need early warning of approach — gravel driveways, perimeter alarms, a dog. Establish observation points that give you visibility of approaches without exposing yourself.</p>
          <p>Layered security works on the same principle as military base security: the further out you can detect a threat, the more time you have to respond. Each layer — perimeter alarm, exterior lighting, reinforced entry — adds time and cost to a would-be intruder.</p>
        </Section>
        <Section title="The Gray Man Concept">
          <p>In a crisis environment, standing out is dangerous. The gray man blends into the environment — unremarkable clothing, no visible tactical gear, no obvious weapons, no behavior that signals preparedness or resources. When moving through a disrupted area, you want to look like someone with nothing worth taking.</p>
          <p>This applies to your vehicle too. A blacked-out truck with tactical accessories signals resources. An older, unremarkable car signals nothing.</p>
        </Section>
        <Section title="Community Security">
          <p>The most effective long-term security is community-based. Neighbors watching out for each other, coordinated shifts, shared intelligence about threats in the area. No single family can maintain 24/7 security watch indefinitely. A neighborhood that has organized, communicates, and watches out for each other is the strongest security posture available to civilians.</p>
          <p>This is another reason the Grid Zero community matters — building those relationships before a crisis, not during one.</p>
        </Section>
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/#guides" className="btn-primary">← All Guides</Link>
          <Link href="/signup" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Join the Network →</Link>
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
