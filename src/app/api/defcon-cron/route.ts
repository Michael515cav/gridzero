import Anthropic from '@anthropic-ai/sdk'
import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export const maxDuration = 60

export async function GET(request: Request) {
  // Security check — only Vercel's cron system or you can trigger this
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const prompt = `You are a global threat analyst for a prepper intelligence platform. Using your web search tool, research current world events RIGHT NOW to assess the global threat level across 6 categories.

Search for current news on: active military conflicts, economic conditions and supply chains, natural disasters, disease outbreaks, cyber attacks on critical infrastructure, and political/civil unrest.

After researching, respond ONLY with a valid JSON object (no markdown, no backticks, no extra text) in this exact format:
{
  "compositeScore": <integer 0-100>,
  "summary": "<2-3 sentence plain-language assessment of the current global threat landscape based on what you found>",
  "vectors": [
    {"name": "Geopolitical Conflict & War", "score": <0-100>, "analysis": "<1-2 sentences on current conflicts, tensions, or military escalations you found>"},
    {"name": "Economic Stability & Supply Chains", "score": <0-100>, "analysis": "<1-2 sentences on current economic indicators, trade disruptions, or financial instability>"},
    {"name": "Natural Disaster & Climate Events", "score": <0-100>, "analysis": "<1-2 sentences on active or recent major disasters, extreme weather, or environmental crises>"},
    {"name": "Pandemic & Biological Threats", "score": <0-100>, "analysis": "<1-2 sentences on any active disease outbreaks, biosecurity concerns, or health emergencies>"},
    {"name": "Infrastructure & Cyber Security", "score": <0-100>, "analysis": "<1-2 sentences on recent cyber attacks, infrastructure vulnerabilities, or grid threats>"},
    {"name": "Civil Unrest & Political Instability", "score": <0-100>, "analysis": "<1-2 sentences on protests, political crises, or social instability events>"}
  ]
}

Scoring guide: 0-20 = secure/normal baseline, 21-40 = guarded/watchful, 41-60 = elevated concern, 61-80 = high threat, 81-100 = critical/severe.
The compositeScore should be a weighted average of the 6 vectors. Be accurate and grounded in real current events — do not exaggerate. If a category has no notable current events, score it 10-20.`

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1200,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }] as any,
      messages: [{ role: 'user', content: prompt }],
    })

    let text = ''
    for (const block of response.content) {
      if (block.type === 'text') text += block.text
    }

    text = text.replace(/```json|```/g, '').trim()
    const start = text.indexOf('{')
    const end = text.lastIndexOf('}')
    if (start === -1 || end === -1) throw new Error('No JSON in response')
    text = text.slice(start, end + 1)

    const data = JSON.parse(text)
    const payload = { data, timestamp: new Date().toISOString() }

    // Save to KV — persists until next cron run
    await kv.set('defcon:latest', JSON.stringify(payload))

    console.log('DEFCON cron completed. Score:', data.compositeScore)
    return NextResponse.json({ success: true, score: data.compositeScore })

  } catch (err) {
    console.error('DEFCON cron error:', err)
    return NextResponse.json({ success: false, error: 'Cron failed' }, { status: 500 })
  }
}
