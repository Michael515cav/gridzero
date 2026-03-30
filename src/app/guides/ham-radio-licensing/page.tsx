import PageLayout from '@/components/PageLayout'
import Link from 'next/link'
export const metadata = { title: 'HAM Radio Licensing Fast Track — Grid Zero', description: 'How to get your HAM radio Technician license quickly. Study resources, exam tips, and the best radios for preppers after you pass.' }
export default function Guide() {
  return (
    <PageLayout>
      <article style={{ maxWidth: '780px', margin: '0 auto', padding: '4rem 2.5rem' }}>
        <Link href="/#guides" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}>← Back to Guides</Link>
        <div style={{ marginTop: '2rem', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Module 006 · Intermediate · 20 min read</div>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>HAM Radio<br />Licensing Fast Track</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, borderLeft: '2px solid var(--rust)', paddingLeft: '1.25rem', marginBottom: '3rem' }}>When cell networks fail, HAM radio works. It is the backbone of emergency communication worldwide and one of the most valuable skills a prepper can have. Getting licensed is easier than most people think — here is how to do it in under a month.</p>
        <Section title="Why HAM Radio for Preppers">
          <p>HAM radio operates completely independently of any commercial infrastructure. No towers, no internet, no cell network, no subscription. With the right setup, you can communicate locally, regionally, or globally. During every major disaster in modern history — hurricanes, earthquakes, grid failures — HAM radio operators provided communication when everything else went dark.</p>
        </Section>
        <Section title="The Three License Levels">
          <p>The Technician license is your entry point and covers VHF/UHF frequencies — enough for local and regional communication using repeaters. This is the license most preppers start with and it serves the majority of emergency communication needs.</p>
          <p>The General license adds HF (high frequency) privileges, enabling long-distance and international communication. The Amateur Extra is the top tier with full privileges. For preparedness purposes, Technician plus General gives you everything you realistically need.</p>
        </Section>
        <Section title="Passing the Technician Exam">
          <p>The Technician exam is 35 questions drawn from a published question pool of about 400 questions. You need a 74% to pass — 26 correct answers. The exam costs around $15 and is administered by volunteer examiner teams across the country.</p>
          <p>The fastest study method: use HamStudy.org or the HamRadioPrep app. Study the question pool with spaced repetition flashcards. Most people pass after 10-20 hours of study spread over 2-3 weeks. The questions are not trick questions — they are straightforward technical and regulatory questions with a published answer key.</p>
        </Section>
        <Section title="Finding an Exam Session">
          <p>Visit arrl.org/find-an-amateur-radio-license-exam-session to find exam sessions near you. Many are now available online through remote testing. Bring a valid ID, payment, and a pencil. Results are usually immediate — you walk out licensed.</p>
        </Section>
        <Section title="Your First Radio">
          <p>For a new Technician, a handheld VHF/UHF dual-band radio (HT) is the right starting point. The Baofeng UV-5R is the budget choice at around $25. The Yaesu FT-60 and Kenwood TH-D74 are more reliable options at higher price points.</p>
          <p>Program your radio with local repeater frequencies before you need them. The RepeaterBook app lists every repeater nationwide. Learn how to use your radio before a crisis — not during one.</p>
        </Section>
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--dim)', paddingTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/guides/medical-preparedness" className="btn-primary">Next: Medical Preparedness →</Link>
          <Link href="/gear/communications" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--rust)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Communications Gear →</Link>
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
