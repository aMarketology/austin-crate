import { NextRequest, NextResponse } from 'next/server'

// Receives lead data from the contact form and forwards it to
// a Google Sheet via a secret Apps Script webhook URL.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn('⚠️ GOOGLE_SHEETS_WEBHOOK_URL not set — skipping Sheet write')
      return NextResponse.json({ success: true, note: 'webhook not configured' })
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      console.error('❌ Google Sheets webhook returned', response.status)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ Google Sheets API error:', err)
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 })
  }
}

