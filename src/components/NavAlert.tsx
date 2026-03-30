'use client'

import { useState, useEffect } from 'react'

const LEVEL_LABELS: Record<number, string> = {
  1: 'SECURE',
  2: 'GUARDED',
  3: 'ELEVATED',
  4: 'HIGH',
  5: 'CRITICAL',
}

function scoreToLevel(score: number): number {
  if (score <= 20) return 1
  if (score <= 40) return 2
  if (score <= 60) return 3
  if (score <= 80) return 4
  return 5
}

export default function NavAlert() {
  const [label, setLabel] = useState('ELEVATED')

  useEffect(() => {
    fetch('/api/defcon-read')
      .then(r => r.json())
      .then(json => {
        if (json.success && json.data?.compositeScore !== undefined) {
          const lvl = scoreToLevel(json.data.compositeScore)
          setLabel(LEVEL_LABELS[lvl])
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="nav-alert">⚠ THREAT LEVEL: {label}</div>
  )
}
