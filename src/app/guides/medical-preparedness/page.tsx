import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'Medical Preparedness Without a Doctor — Grid Zero', description: 'How to build a serious medical kit, treat common emergencies, and prepare for healthcare disruption in a grid-down scenario.' }
export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 007 · Advanced · 30 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>Medical Preparedness<br />Without a Doctor</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>In a serious grid-down scenario, hospitals may be overwhelmed or unreachable. Minor injuries become life-threatening without treatment. This guide covers building a serious medical kit, acquiring skills, and preparing for the healthcare challenges of a long-term crisis.</p>
        <Section title="Training First, Gear Second">
          <p>Medical gear is useless without the knowledge to use it. Before buying anything, take a Stop the Bleed course — it is free, takes 2 hours, and teaches tourniquet application and wound packing that saves lives. Then pursue a Wilderness First Aid (WFA) or Wilderness First Responder (WFR) certification. These courses train you to manage medical emergencies when evacuation is not possible.</p>
          <p>CPR and basic first aid certification should be considered the absolute floor — every adult in your household should have it.</p>
        </Section>
        <Section title="The Trauma Kit">
          <p>Trauma is the immediate killer. Your trauma kit needs to address the top causes of preventable death: severe bleeding, airway obstruction, and tension pneumothorax. Build your kit around these priorities.</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: 2 }}>
            <li><strong style={{ color: 'var(--cold-white)' }}>Tourniquets</strong> — CAT or SOFTT-W, at least two. Learn to apply one-handed.</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Hemostatic gauze</strong> — QuikClot or Combat Gauze for wound packing</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Pressure bandages</strong> — Israeli bandages for wound compression</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Chest seals</strong> — for penetrating chest wounds</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Nasopharyngeal airway</strong> — for unconscious patients with airway issues</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Decompression needle</strong> — for tension pneumothorax (training required)</li>
          </ul>
        </Section>
        <Section title="The Extended Medical Kit">
          <p>Beyond trauma, prepare for the infections, illnesses, and chronic conditions that will become crises without access to a pharmacy or clinic. Work with a physician to obtain prescription antibiotics for storage — amoxicillin, ciprofloxacin, and metronidazole cover a broad range of bacterial infections.</p>
          <p>Stock over-the-counter medications in depth: ibuprofen, acetaminophen, diphenhydramine, loperamide, antacids, and oral rehydration salts. These manage the most common acute illnesses and can prevent minor problems from becoming serious ones.</p>
        </Section>
        <Section title="Dental Emergencies">
          <p>Dental infections can become life-threatening without treatment. Stock temporary filling material (Dentemp), dental picks, and clove oil for pain. Learn to recognize the signs of a spreading dental infection — swelling in the jaw, neck, or floor of the mouth is a medical emergency requiring antibiotics immediately.</p>
        </Section>
        <Section title="Chronic Medication Planning">
          <p>Identify every prescription medication your household depends on. Work with your doctor to obtain a 90-day supply. For insulin-dependent diabetics, understand that insulin requires refrigeration and plan accordingly with a cooler and ice rotation, or investigate newer insulin formulations with longer unrefrigerated stability.</p>
        </Section>
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/prepper-security" className="btn-primary">Next: Prepper Security →</Link>
          <Link href="/gear/medical-kits" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Medical Gear →</Link>
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
