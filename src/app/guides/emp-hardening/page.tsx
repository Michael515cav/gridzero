import PageLayout from '@/components/PageLayout'
import Link from 'next/link'

export const metadata = { title: 'EMP Hardening Your Home — Grid Zero', description: 'How to protect your electronics and home from an electromagnetic pulse (EMP) or solar flare. Faraday cages, critical gear protection, and grid-down preparation.' }

export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 003 · Advanced · 18 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>EMP Hardening<br />Your Home</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>
          An electromagnetic pulse — whether from a nuclear detonation at altitude, a solar coronal mass ejection, or a directed EMP weapon — could instantly destroy every unprotected electronic device in its radius. Modern civilization runs on electronics. This guide shows you how to protect the devices that keep you alive.
        </p>

        <Section title="Understanding the EMP Threat">
          <p>An EMP event generates a powerful burst of electromagnetic energy that induces voltage spikes in electrical conductors — wires, circuit boards, antennas, power lines. These spikes fry semiconductors and destroy modern electronics instantly.</p>
          <p>There are three main EMP threats: nuclear EMP (NEMP) from a high-altitude detonation, coronal mass ejection (CME) from the sun, and non-nuclear EMP devices. A large CME — like the 1859 Carrington Event — would destroy unprotected electronics across entire continents and could knock out power grids for months to years.</p>
          <p>The good news: protection is achievable, affordable, and straightforward with Faraday shielding.</p>
        </Section>

        <Section title="How Faraday Cages Work">
          <p>A Faraday cage is a conductive enclosure that distributes electromagnetic charges around its exterior, protecting the interior from EMP. The charge travels around the outside of the cage rather than through it.</p>
          <p>For effective EMP protection, the cage must be fully enclosed with no gaps larger than the wavelength of the threat frequency, grounded properly, and made of conductive material. The contents must not touch the interior walls — they need to be insulated from the cage itself.</p>
        </Section>

        <Section title="Building a Faraday Cage">
          <p>The simplest effective Faraday cage for most preppers is a galvanized steel trash can with a tight-fitting lid. Line the inside with cardboard or foam to prevent contact between your electronics and the metal walls. Ensure the lid makes solid contact with the rim all the way around — use conductive tape to seal any gaps.</p>
          <p>For more critical items, use nested protection: wrap electronics in anti-static bags, then wrap in aluminum foil, then place inside the metal container. Multiple layers provide redundant protection.</p>
          <p>Larger solutions include EMP-hardened ammo cans, purpose-built Faraday bags, and for serious preppers, converting a room or shipping container into a full Faraday enclosure.</p>
        </Section>

        <Section title="What to Protect">
          <p>Prioritize by criticality to your survival. You cannot protect everything — focus on what you actually need grid-down.</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--muted)', lineHeight: 2 }}>
            <li><strong style={{ color: 'var(--cold-white)' }}>Communications</strong> — HAM radios, GMRS handhelds, shortwave receivers, battery-powered AM/FM radio</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Navigation</strong> — handheld GPS units, backup phone with offline maps</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Medical devices</strong> — any battery-operated medical equipment your family depends on</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Lighting</strong> — LED flashlights, lanterns, solar chargers</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Power generation</strong> — small inverter generators and solar charge controllers (stored unconnected)</li>
            <li><strong style={{ color: 'var(--cold-white)' }}>Data storage</strong> — hard drives with important documents, medical records, technical manuals</li>
          </ul>
        </Section>

        <Section title="Vehicles and EMP">
          <p>Modern vehicles with computerized engine management systems are vulnerable to EMP. Older vehicles — pre-1980s with carbureted engines and points-based ignition — are largely immune because they have minimal electronics.</p>
          <p>If vehicle mobility post-EMP is important to your plan, consider keeping an older backup vehicle, a motorcycle with minimal electronics, or a diesel vehicle (diesel engines are simpler and less electronics-dependent). Store critical spare electronic ignition components in a Faraday cage.</p>
        </Section>

        <Section title="The Power Grid Problem">
          <p>Even if you protect your personal electronics, a major EMP would destroy the power grid itself — transformers, substations, and the transmission infrastructure. These components take 18 months to years to manufacture and replace. There are no meaningful stockpiles.</p>
          <p>Grid-down preparedness means assuming no grid power for an extended period — potentially years. Your protected electronics need power sources that don't depend on the grid: solar panels and charge controllers (stored in Faraday protection until needed), hand-crank generators, and deep-cycle battery banks.</p>
        </Section>

        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/off-grid-water" className="btn-primary">Next: Off-Grid Water →</Link>
          <Link href="/gear/off-grid-power" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', display: 'flex', alignItems: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Off-Grid Power Gear →</Link>
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
