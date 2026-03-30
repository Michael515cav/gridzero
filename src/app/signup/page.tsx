import PageLayout from '@/components/PageLayout'

export const metadata = { title: 'Join the Network — Grid Zero', description: 'Sign up for Grid Zero. Weekly threat intelligence, new survival guides, gear reviews, and community access.' }

export default function SignupPage() {
  return (
    <PageLayout>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '6rem 2.5rem', textAlign: 'center' }}>
        <div className="corner-mark corner-tl" style={{ position: 'absolute', top: '5rem', left: '2.5rem' }} />
        <div className="corner-mark corner-tr" style={{ position: 'absolute', top: '5rem', right: '2.5rem' }} />

        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>[ Access Granted ]</p>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', textTransform: 'uppercase', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--cold-white)' }}>Enlist in<br />the Network</h1>
        <p style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '3rem' }}>
          Weekly DEFCON intel drops. New survival guides first. Gear reviews before they hit the main site. No spam. No government agencies. No data brokers.
        </p>

        <div style={{ background: 'var(--steel-mid)', border: '1px solid var(--dim)', padding: '2.5rem', textAlign: 'left' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Call Sign (Name)</label>
            <input type="text" placeholder="John" style={{ width: '100%', background: 'var(--steel)', border: '1px solid var(--dim)', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--cold-white)', outline: 'none' }} />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Secure Channel (Email)</label>
            <input type="email" placeholder="you@email.com" style={{ width: '100%', background: 'var(--steel)', border: '1px solid var(--dim)', padding: '12px 16px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--cold-white)', outline: 'none' }} />
          </div>
          <button type="button" className="btn-primary" style={{ width: '100%', textAlign: 'center', fontSize: '1rem' }}>
            Transmit — Join the Network
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.08em', lineHeight: 1.8 }}>
            // What you get after enlisting:<br />
            // · Weekly global threat assessment (DEFCON report)<br />
            // · First access to new survival guides<br />
            // · Gear reviews and affiliate deals<br />
            // · Community forum access when it launches<br />
            // · Zero spam. Unsubscribe any time.
          </p>
        </div>

        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1px', background: 'var(--dim)', border: '1px solid var(--dim)' }}>
          {[
            { stat: '0', label: 'Members', sub: 'Just launched' },
            { stat: 'Free', label: 'Forever', sub: 'No paid tiers' },
            { stat: '100%', label: 'Signal', sub: 'No noise' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--steel-mid)', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '2rem', color: 'var(--rust)', lineHeight: 1 }}>{item.stat}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>{item.label}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--dim)', marginTop: '2px' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
