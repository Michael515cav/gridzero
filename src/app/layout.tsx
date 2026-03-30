import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed } from 'next/font/google'
import { Share_Tech_Mono } from 'next/font/google'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const shareTechMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GRID ZERO — Prepare. Survive. Rebuild.',
  description: 'The command center for serious preppers. Threat analysis, field-tested gear, survival guides, and a community that\'s already ready.',
  keywords: 'prepper, survival, doomsday, grid down, emergency preparedness, SHTF, bugout, off-grid',
  openGraph: {
    title: 'GRID ZERO — Prepare. Survive. Rebuild.',
    description: 'AI-powered threat intelligence, survival gear reviews, and the prepper community.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${shareTechMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
