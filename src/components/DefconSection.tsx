'use client'

import { useState, useEffect } from 'react'

interface ThreatVector {
  name: string
  score: number
  analysis: string
}

interface DefconData {
  compositeScore: number
  summary: string
  vectors: ThreatVector[]
}

const DEFCON_LEVELS = [
  { level: 1, name: 'SECURE',   color: '#1a6b3c', range: [0, 20] },
  { level: 2, name: 'GUARDED',  color: '#2980b9', range: [21, 40] },
  { level: 3, name: 'ELEVATED', color: '#d4850a', range: [41, 60] },
  { level: 4, name: 'HIGH',     color: '#c0392b', range: [61, 80] },
  { level: 5, name: 'CRITICAL', color: '#8b0000', range: [81, 100] },
]

function getLevelForScore(score: number) {
  return DEFCON_LEVELS.find(l => score >= l.range[0] && score <= l.range[1]) || DEFCON_LEVELS[2]
}

function ScaleBar({ activeLevel }: { activeLevel: number }) {
  const segColors = ['#1a6b3c', '#2980b9', '#d4850a', '#c0392b', '#8b0000']
  const labels = ['SECURE', 'GUARDED', 'ELEVATED', 'HIGH', 'CRITICAL']
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', gap: '3px', marginBottom: '6px' }}>
        {segColors.map((color, i) => (
          <div key={i} style={{
            flex: 1, height: '10px', background: color,
            outline: (i + 1) === activeLevel ? `2px solid ${color}` : 'none',
            outlineOffset: '2px',
            opacity: (i + 1) === activeLevel ? 1 : 0.35,
            transition: 'opacity 0.4s',
          }} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '3px' }}>
        {labels.map((label, i) => (
          <div key={i} style={{
            flex: 1, fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: 'var(--dim)',
            textAlign: i === labels.length - 1 ? 'right' : 'left',
          }}>{label}</div>
        ))}
      </div>
    </div>
  )
}

function VectorCard({ vector }: { vector: ThreatVector }) {
  const level = getLevelForScore(vector.score)
  return (
    <div className="defcon-vector-card">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', color: level.color }}>
        {level.name} — {vector.score}/100
      </div>
      <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 600, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--cold-white)', marginBottom: '0.5rem' }}>
        {vector.name}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
        {vector.analysis}
      </div>
      <div style={{ height: '3px', background: 'var(--steel-light)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${vector.score}%`, background: level.color, transition: 'width 1s ease' }} />
      </div>
    </div>
  )
}

function getNextMonday(): string {
  const now = new Date()
  const day = now.getUTCDay()
  const daysUntilMonday = day === 1 ? 7 : (8 - day) % 7
  const next = new Date(now)
  next.setUTCDate(now.getUTCDate() + daysUntilMonday)
  next.setUTCHours(6, 0, 0, 0)
  return next.toUTCString().toUpperCase()
}

export default function DefconSection() {
  const [state, setState] = useState<'loading' | 'results' | 'nodata'>('loading')
  const [data, setData] = useState<DefconData | null>(null)
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('/api/defcon-read')
        const json = await res.json()
        if (json.success) {
          setData(json.data)
          setTimestamp(new Date(json.timestamp).toUTCString().toUpperCase())
          setState('results')
        } else {
          setState('nodata')
        }
      } catch {
        setState('nodata')
      }
    }
    loadData()
  }, [])

  const level = data ? getLevelForScore(data.compositeScore) : null

  return (
    <section id="defcon" style={{ background: 'var(--steel-mid)', borderTop: '1px solid var(--dim)', borderBottom: '1px solid var(--dim)' }}>
      <div className="corner-mark corner-tl" />
      <div className="corner-mark corner-tr" />
      <p className="section-tag">Live Intelligence</p>
      <h2 className="section-title condensed">Global Threat<br />Assessment</h2>
      <p className="section-desc">
        AI-powered analysis of real-world events across 6 threat vectors. Updated automatically every Monday using live web intelligence.
      </p>

      {state === 'loading' && (
        <div style={{ border: '1px solid var(--dim)', padding: '2.5rem', maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--rust)', letterSpacing: '0.15em', textTransform: 'uppercase', animation: 'blink 1.2s step-end infinite' }}>
            ▶ LOADING INTEL...
          </div>
        </div>
      )}

      {state === 'nodata' && (
        <div style={{ border: '1px solid var(--dim)', padding: '2.5rem', textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '6rem', color: 'transparent', WebkitTextStroke: '1px var(--plate)', lineHeight: 1, marginBottom: '0.25rem' }}>GZ</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            GLOBAL THREAT MATRIX — PENDING FIRST SCAN
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--dim)', letterSpacing: '0.08em', lineHeight: 1.7 }}>
            // First analysis runs Monday 6:00 AM UTC<br />
            // Or trigger manually — see README
          </div>
        </div>
      )}

      {state === 'results' && data && level && (
        <div>
          <div style={{ border: '1px solid var(--dim)', padding: '2rem', marginBottom: '1px', background: 'var(--steel)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  // COMPOSITE THREAT INDEX
                </div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '3.5rem', lineHeight: 1, textTransform: 'uppercase', letterSpacing: '0.02em', color: level.color }}>
                  DEFCON {level.level} — {level.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.1em', marginTop: '4px' }}>
                  // LAST UPDATED: {timestamp}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--dim)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>THREAT SCORE</div>
                <div style={{ fontFamily: 'var(--font-condensed)', fontWeight: 900, fontSize: '5rem', lineHeight: 1, color: level.color }}>{data.compositeScore}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--dim)', letterSpacing: '0.1em' }}>/ 100</div>
              </div>
            </div>
            <ScaleBar activeLevel={level.level} />
            <div style={{ fontFamily: 'var(--font-barlow)', fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, borderLeft: '2px solid var(--plate)', paddingLeft: '1rem' }}>
              {data.summary}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--dim)', border: '1px solid var(--dim)', borderTop: 'none' }}>
            {data.vectors.map((v, i) => <VectorCard key={i} vector={v} />)}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.1em' }}>
              // LAST SCAN: {timestamp}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--dim)', letterSpacing: '0.1em' }}>
              // NEXT SCAN: {getNextMonday()}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
