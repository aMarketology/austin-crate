import { NextResponse } from 'next/server'

// Email is now sent client-side via EmailJS.
// This route is kept as a no-op so any cached requests don't 404.
export async function POST() {
  return NextResponse.json({ success: true })
}

