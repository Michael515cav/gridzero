import Link from 'next/link'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">GRID<span>ZERO</span></Link>
        <ul className="nav-links">
          <li><Link href="/#defcon">DEFCON</Link></li>
          <li><Link href="/#threats">Threats</Link></li>
          <li><Link href="/#gear">Gear</Link></li>
          <li><Link href="/#guides">Guides</Link></li>
          <li><Link href="/#community">Community</Link></li>
        </ul>
        <Link href="/signup" className="btn-primary" style={{ fontSize: '0.7rem', padding: '8px 18px', clipPath: 'none' }}>Enlist</Link>
      </nav>
      <div style={{ paddingTop: '56px', position: 'relative', zIndex: 2 }}>
        {children}
      </div>
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
