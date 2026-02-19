/**
 * scripts/ping-google.ts
 *
 * Post-deploy script: notify Google (and Bing) that the sitemap has been
 * updated, and optionally request indexing for pages published in the last 24 h.
 *
 * Run automatically via Vercel post-deploy hook, or manually:
 *   npx ts-node --project tsconfig.json scripts/ping-google.ts
 *
 * To enable the Google Indexing API (direct fast indexing for breaking news):
 *   1. Create a service account in Google Search Console
 *   2. Set the GOOGLE_SERVICE_ACCOUNT_JSON env variable with the JSON key
 *
 * Environment variables (optional):
 *   GOOGLE_SERVICE_ACCOUNT_JSON  - Service account JSON string for Indexing API
 *   SITE_URL                     - Override the default site URL
 */

import { contentRegistry } from '../lib/content-registry'

const SITE_URL = process.env.SITE_URL ?? 'https://austincrate.com'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`

// ── Sitemap ping (free, no auth required) ────────────────────────────────────

async function pingSitemapToGoogle(): Promise<void> {
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  try {
    const res = await fetch(pingUrl)
    console.log(`[google] Sitemap ping → ${res.status} ${res.statusText}`)
  } catch (err) {
    console.error('[google] Sitemap ping failed:', err)
  }
}

async function pingSitemapToBing(): Promise<void> {
  const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`
  try {
    const res = await fetch(pingUrl)
    console.log(`[bing]   Sitemap ping → ${res.status} ${res.statusText}`)
  } catch (err) {
    console.error('[bing]   Sitemap ping failed:', err)
  }
}

// ── Google Indexing API (requires service account) ────────────────────────────

/**
 * Returns entries published or modified within the last `withinHours` hours.
 */
function getRecentEntries(withinHours = 24) {
  const cutoff = new Date(Date.now() - withinHours * 60 * 60 * 1000)
  return contentRegistry.filter((entry) => {
    const modified = new Date(entry.modifiedDate)
    const published = new Date(entry.publishDate)
    return modified >= cutoff || published >= cutoff
  })
}

async function requestIndexingViaAPI(slug: string, accessToken: string): Promise<void> {
  const pageUrl = slug === '/' ? SITE_URL : `${SITE_URL}${slug}`
  try {
    const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: pageUrl,
        type: 'URL_UPDATED',
      }),
    })
    const body = await res.json()
    if (res.ok) {
      console.log(`[indexing api] ✓ Requested indexing for ${pageUrl}`)
    } else {
      console.error(`[indexing api] ✗ ${pageUrl} → ${JSON.stringify(body)}`)
    }
  } catch (err) {
    console.error(`[indexing api] ✗ ${pageUrl}:`, err)
  }
}

async function getGoogleAccessToken(serviceAccountJson: string): Promise<string | null> {
  try {
    // Dynamic import so this script doesn't fail when google-auth-library is absent
    // Install if needed: npm i google-auth-library
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { GoogleAuth } = require('google-auth-library')
    const credentials = JSON.parse(serviceAccountJson)
    const auth = new GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    })
    const client = await auth.getClient()
    const tokenResponse = await client.getAccessToken()
    return tokenResponse.token ?? null
  } catch {
    console.warn('[indexing api] google-auth-library not available; skipping direct indexing.')
    return null
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n🔔 Post-deploy SEO ping — ${new Date().toISOString()}\n`)
  console.log(`   Site:    ${SITE_URL}`)
  console.log(`   Sitemap: ${SITEMAP_URL}\n`)

  // 1. Ping sitemaps (always runs, no auth needed)
  await Promise.all([pingSitemapToGoogle(), pingSitemapToBing()])

  // 2. Google Indexing API for recently changed pages (optional, requires auth)
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (serviceAccountJson) {
    const accessToken = await getGoogleAccessToken(serviceAccountJson)
    if (accessToken) {
      const recentEntries = getRecentEntries(24)
      if (recentEntries.length === 0) {
        console.log('\n[indexing api] No pages modified in the last 24 h — nothing to index.')
      } else {
        console.log(`\n[indexing api] Requesting indexing for ${recentEntries.length} recently updated page(s):`)
        for (const entry of recentEntries) {
          await requestIndexingViaAPI(entry.slug, accessToken)
        }
      }
    }
  } else {
    console.log('\n[indexing api] GOOGLE_SERVICE_ACCOUNT_JSON not set — skipping direct indexing.')
    console.log('   To enable fast indexing, add your service account JSON as an env variable.')
  }

  console.log('\n✅ Ping complete.\n')
}

main().catch((err) => {
  console.error('Ping script error:', err)
  process.exit(1)
})
