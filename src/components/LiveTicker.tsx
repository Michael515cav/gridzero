'use client'

import { useState, useEffect } from 'react'

const FALLBACK_ITEMS = [
  'Power grid vulnerabilities increase 34% YoY',
  '72-hour supply shortages reported in 3 regions',
  'Solar flare activity elevated — EMP readiness critical',
  'Water table contamination alerts — filtration priority high',
  'New guide: building a 6-month food reserve under $800',
  'Community cache locations updated — members only',
]

export default function LiveTicker() {
  const [items, setItems] = useState<string[]>(FALLBACK_ITEMS)

  useEffect(() => {
    fetch('/api/defcon-read')
      .then(r => r.json())
      .then(json => {
        if (json.success && json.data?.vectors?.length) {
          // Build ticker items from real vector analysis text
          const live: string[] = json.data.vectors.map(
            (v: { name: string; analysis: string }) => `${v.name.toUpperCase()}: ${v.analysis}`
          )
          // Pad to keep ticker full — duplicate until we have at least 8 items
          while (live.length < 8) live.push(...live)
          setItems(live)
        }
      })
      .catch(() => {})
  }, [])

  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="ticker-wrap">
      <div className="ticker-label">INTEL FEED</div>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
