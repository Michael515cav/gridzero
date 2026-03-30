import DefconSection from '@/components/DefconSection'
import NavAlert from '@/components/NavAlert'
import LiveTicker from '@/components/LiveTicker'

const THREATS = [
  { level: 'Critical', num: '01', name: 'Grid Failure / EMP', desc: 'Electromagnetic pulse or cascading infrastructure failure. Extended outages beyond 72 hours become civilizational events.' },
  { level: 'Critical', num: '02', name: 'Supply Chain Collapse', desc: 'Modern just-in-time logistics have zero buffer. Three missed shipments can clear grocery shelves in any metro area.' },
  { level: 'High',     num: '03', name: 'Water Contamination', desc: 'Infrastructure failures, flooding, or deliberate attack on water treatment. Filtration and storage are non-negotiables.' },
  { level: 'High',     num: '04', name: 'Pandemic / Bioevents', desc: 'Isolation protocols, long-duration food supply, and medical preparedness for sustained lockdown or quarantine.' },
  { level: 'Moderate', num: '05', name: 'Natural Disaster', desc: 'Earthquakes, hurricanes, floods, and wildfires. The most statistically likely event. Readiness here saves lives now.' },
  { level: 'Critical', num: '06', name: 'Civil Unrest', desc: 'Economic collapse, political breakdown, or social disorder can escalate rapidly. Shelter-in-place and evacuation planning essential.' },
]

const GEAR = [
  { icon: '💧', badge: 'Essential', badgeClass: '', title: 'Water Filtration', desc: 'Gravity filters, UV purifiers, and long-term storage solutions for a family of four over 90 days.' },
  { icon: '🔋', badge: 'Power',     badgeClass: 'amber', title: 'Off-Grid Power', desc: 'Solar arrays, hand-crank generators, deep-cycle batteries, and EMP-hardened Faraday storage.' },
  { icon: '🌾', badge: 'Essential', badgeClass: '', title: 'Food Storage', desc: 'Freeze-dried, mylar-sealed, and calorie-dense options with rotation systems and shelf-life tracking.' },
  { icon: '📻', badge: 'Comms',     badgeClass: 'amber', title: 'Communications', desc: 'HAM radios, shortwave receivers, GMRS handhelds, and mesh network devices for off-grid contact.' },
  { icon: '🩹', badge: 'Medical',   badgeClass: 'neutral', title: 'Medical Kits', desc: 'Trauma kits, antibiotics, suturing supplies, and long-term medication planning when clinics go dark.' },
  { icon: '🏕️', badge: 'Shelter',  badgeClass: 'neutral', title: 'Bugout & Shelter', desc: 'Bugout bags, tents, sleeping systems, and modular bunker solutions for short and extended scenarios.' },
]

const GUIDES = [
  { num: '001', title: 'The 72-Hour Survival Plan', level: 'Beginner', time: '12 min read' },
  { num: '002', title: 'Building a 1-Year Food Reserve', level: 'Intermediate', time: '24 min read' },
  { num: '003', title: 'EMP Hardening Your Home', level: 'Advanced', time: '18 min read' },
  { num: '004', title: 'Off-Grid Water: Sourcing & Purification', level: 'Intermediate', time: '15 min read' },
  { num: '005', title: 'Bugging Out vs. Sheltering In Place', level: 'Beginner', time: '10 min read' },
  { num: '006', title: 'HAM Radio Licensing Fast Track', level: 'Intermediate', time: '20 min read' },
  { num: '007', title: 'Medical Preparedness Without a Doctor', level: 'Advanced', time: '30 min read' },
  { num: '008', title: 'Prepper Security: Perimeter & Opsec', level: 'Advanced', time: '22 min read' },
]

const COMMUNITY = [
  { stat: '14K+', label: 'Registered Members', desc: 'Active preppers across 48 states and 6 countries. Regional sub-groups for local coordination and resource sharing.' },
  { stat: '380+', label: 'Local Cells Active', desc: 'Local preparedness groups organized by county. Meet-ups, skills training, and coordinated supply caches.' },
  { stat: '96',   label: 'Skills Categories', desc: 'From bushcraft and HAM radio to field medicine and security operations. Find expertise you need. Share what you have.' },
  { stat: '24/7', label: 'Intel Channel', desc: 'Members-only real-time threat monitoring, regional alerts, and curated intel drops from verified sources.' },
]

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">GRID<span>ZERO</span></a>
        <ul className="nav-links">
          <li><a href="#defcon">DEFCON</a></li>
          <li><a href="#threats">Threats</a></li>
          <li><a href="#gear">Gear</a></li>
          <li><a href="#guides">Guides</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
        <NavAlert />
      </nav>

      {/* TICKER */}
      <LiveTicker />

      {/* HERO */}
      <div className="hero">
        <div className="bg-text" style={{ bottom: '-3rem', right: '-2rem', opacity: 0.4 }}>ZERO</div>
        <div className="corner-mark corner-tl" />
        <div className="corner-mark corner-tr" />
        <div className="corner-mark corner-bl" />
        <div className="corner-mark corner-br" />
        <p className="hero-tag mono">OPERATIONAL STATUS: ACTIVE</p>
        <h1>
          WHEN THE<br />
          <span className="line2">GRID GOES</span><br />
          <span className="accent">DARK.</span>
        </h1>
        <p className="hero-sub">
          Grid Zero is the command center for serious preppers. Threat analysis, field-tested gear, step-by-step survival guides, and a community that&apos;s already ready.
        </p>
        <div className="hero-actions">
          <a href="#guides" className="btn-primary">Start Prepping</a>
          <a href="#community" className="btn-secondary">▶ Join the Network</a>
        </div>
      </div>

      {/* STATUS BAR */}
      <div className="status-bar">
        <div className="status-item">
          <div className="status-dot" />
          <span className="status-label">Solar Activity</span>
          <span className="status-value mono">ELEVATED</span>
        </div>
        <div className="status-item">
          <div className="status-dot amber" />
          <span className="status-label">Grid Stability</span>
          <span className="status-value mono">72.4%</span>
        </div>
        <div className="status-item">
          <div className="status-dot green" />
          <span className="status-label">Forum Activity</span>
          <span className="status-value mono">ONLINE</span>
        </div>
        <div className="status-item">
          <div className="status-dot" />
          <span className="status-label">Supply Index</span>
          <span className="status-value mono">STRAINED</span>
        </div>
        <div className="status-item">
          <div className="status-dot green" />
          <span className="status-label">Members Active</span>
          <span className="status-value mono">1,204</span>
        </div>
      </div>

      {/* DEFCON — AI powered */}
      <DefconSection />

      {/* THREATS */}
      <section id="threats" style={{ background: 'var(--steel)' }}>
        <div className="corner-mark corner-tl" />
        <p className="section-tag">Module 01</p>
        <h2 className="section-title condensed">Know Your<br />Threats</h2>
        <p className="section-desc">Every collapse scenario demands a different response. Identify your highest-risk threats and build your plan accordingly.</p>
        <div className="threat-grid">
          {THREATS.map((t) => (
            <div key={t.num} className="threat-card">
              <div className={`threat-level ${t.level === 'High' ? 'amber' : t.level === 'Moderate' ? 'green' : ''}`}>{t.level}</div>
              <div className="threat-num">{t.num}</div>
              <div className="threat-name">{t.name}</div>
              <div className="threat-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GEAR */}
      <section id="gear" className="gear-section">
        <p className="section-tag">Module 02</p>
        <h2 className="section-title condensed">Field-Tested<br />Gear</h2>
        <p className="section-desc">No sponsored junk. Every product reviewed by preppers who&apos;ve actually tested it under pressure. Affiliate links keep the lights on.</p>
        <div className="gear-grid">
          {GEAR.map((g) => (
            <div key={g.title} className="gear-card">
              <span className="gear-icon">{g.icon}</span>
              <div className={`gear-badge ${g.badgeClass}`}>{g.badge}</div>
              <div className="gear-title">{g.title}</div>
              <div className="gear-desc">{g.desc}</div>
              <a href="#" className="gear-link">View Recommendations</a>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" style={{ background: 'var(--steel)' }}>
        <p className="section-tag">Module 03</p>
        <h2 className="section-title condensed">Operational<br />Guides</h2>
        <p className="section-desc">Step-by-step field manuals written for real-world execution — not theory. Start with the 72-hour plan and build from there.</p>
        <div className="guides-grid">
          {GUIDES.map((g) => (
            <a key={g.num} href="#" className="guide-row">
              <span className="guide-num mono">{g.num}</span>
              <div className="guide-content">
                <div className="guide-title">{g.title}</div>
                <div className="guide-meta">{g.level} · {g.time}</div>
              </div>
              <span className="guide-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" style={{ background: 'var(--steel-mid)', borderTop: '1px solid var(--dim)' }}>
        <p className="section-tag">Module 04</p>
        <h2 className="section-title condensed">The Network</h2>
        <p className="section-desc">You don&apos;t survive alone. Grid Zero&apos;s community connects preppers across regions, skill levels, and scenarios.</p>
        <div className="community-grid">
          {COMMUNITY.map((c) => (
            <div key={c.label} className="comm-card">
              <div className="comm-stat">{c.stat}</div>
              <div className="comm-label mono">{c.label}</div>
              <div className="comm-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="corner-mark corner-tl" />
        <div className="corner-mark corner-tr" />
        <p className="section-tag">Access Granted</p>
        <h2 className="section-title condensed">Join the<br />Network</h2>
        <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
          Weekly intel drops. Early access to new guides. Community forum access. No spam — only signal.
        </p>
        <div className="cta-email-form">
          <input type="email" placeholder="your@email.com" />
          <button type="button">Enlist</button>
        </div>
        <p className="cta-fine mono">// No government agencies. No data brokers. Encrypted at rest.</p>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">GRID<span>ZERO</span></div>
        <div className="footer-mono">
          <div>© 2025 GRIDZERO.IO — ALL COMMS MONITORED</div>
          <div style={{ marginTop: '4px' }}>OPERATIONAL STATUS: NOMINAL // BUILD 1.0.0</div>
        </div>
      </footer>
    </>
  )
}
