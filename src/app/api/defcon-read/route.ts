import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const raw = await kv.get<string>('defcon:latest')

    if (!raw) {
      // No data yet — cron hasn't run yet
      return NextResponse.json({ success: false, error: 'No data yet' }, { status: 404 })
    }

    const payload = typeof raw === 'string' ? JSON.parse(raw) : raw
    return NextResponse.json({ success: true, ...payload })

  } catch (err) {
    console.error('DEFCON read error:', err)
    return NextResponse.json({ success: false, error: 'Read failed' }, { status: 500 })
  }
}
