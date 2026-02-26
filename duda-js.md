# Austin Crate & Freight — SEO Domination Plan

> **Goal: Rank #1 for specialty shipping keywords in Austin, Texas**
> Last updated: February 26, 2026

---

## Executive Summary

Austin Crate & Freight must own the top organic positions for high-intent keywords like **"Austin Texas specialty shipping," "custom furniture shipping Austin," and "heavy package pickup Austin."** This document is the complete SEO plan — keyword targets, on-page optimization, content strategy, technical fixes, and local SEO — built on top of the Next.js infrastructure already in place.

---

## Part 1: Target Keyword Map

### Tier 1 — Money Keywords (Highest Intent, Highest Priority)

These are searches made by people ready to buy. Every Tier 1 keyword must have a dedicated, optimized page.

| Target Keyword | Monthly Search Volume (est.) | Current Page | Status |
|---|---|---|---|
| Austin Texas specialty shipping | 50–200 | `/` (homepage) | ⚠️ Needs optimization |
| specialty shipping Austin TX | 50–200 | `/` | ⚠️ Needs optimization |
| custom furniture shipping Austin | 100–300 | `/services/furniture` | ⚠️ Needs keyword in H1 |
| furniture shipping Austin TX | 100–300 | `/services/furniture` | ⚠️ Partial match |
| heavy package pickup Austin | 50–150 | **NO PAGE** | ❌ Must create |
| heavy item shipping Austin | 50–150 | **NO PAGE** | ❌ Must create |
| custom crating Austin TX | 50–200 | `/buy-a-crate` | ⚠️ Needs optimization |
| fine art shipping Austin | 100–300 | `/services/fine-art` | ✅ Strong |
| medical equipment transport Austin | 50–100 | `/services/medical-equipment` | ✅ Strong |
| white glove shipping Austin | 50–150 | `/` | ⚠️ Mentioned, not targeted |

### Tier 2 — Supporting Keywords (Build Topical Authority)

| Target Keyword | Assign To |
|---|---|
| how to ship large furniture | Blog post (new) |
| cost to ship heavy items Austin | Blog post or FAQ (new) |
| custom wood crate near me | `/buy-a-crate` |
| antique furniture shipping Texas | `/services/furniture` |
| oversized package shipping Austin | New service page |
| fragile item shipping Austin TX | New service page or blog |
| Austin TX freight services | `/services` |
| local shipping company Austin | `/about` |
| packing and crating services Austin | `/services` |
| shipping large items across Texas | Blog post (new) |

### Tier 3 — Long-Tail / Local Keywords (Low Competition, Easy Wins)

| Target Keyword | Assign To |
|---|---|
| ship sculpture Austin TX | `/services/fine-art` |
| piano shipping Austin Texas | New blog or service page |
| heavy equipment pickup Round Rock | `/locations/round-rock` |
| furniture shipping Cedar Park TX | `/locations/cedar-park` |
| custom crating Georgetown TX | `/locations/georgetown` |
| HIPAA compliant shipping Austin | `/services/medical-equipment` |
| art crating for galleries Austin | `/services/fine-art` + blog |
| how to prepare furniture for shipping | `/resources/prepare-artwork` (rename/expand) |
| Austin motorcycle crating | Blog post (new) |
| pool table shipping Austin TX | Blog post (new) |

---

## Part 2: Pages to Create

### 2A. New Service Pages (Highest Priority)

#### Page: `/services/heavy-items`
- **Target keywords:** heavy package pickup Austin, heavy item shipping Austin, oversized package shipping Austin TX
- **H1:** Heavy Item Pickup & Shipping in Austin, Texas
- **Meta description:** Heavy package pickup and oversized item shipping in Austin, TX. We pick up, custom-crate, and ship heavy items — furniture, equipment, machinery — anywhere. Call (512) 240-9818.
- **Content outline:**
  - What qualifies as "heavy" (70+ lbs, oversized, awkward shapes)
  - Our heavy-item pickup process (free in Greater Austin)
  - Custom crating for heavy items (materials, reinforcement)
  - Pricing factors (weight, dimensions, distance, fragility)
  - FAQ section (5+ questions)
  - Service areas (Austin, Round Rock, Cedar Park, Georgetown)
  - CTA: Call for free quote
- **Internal links to:** `/services`, `/services/furniture`, `/buy-a-crate`, `/contact`
- **Schema:** Service, FAQPage, LocalBusiness
- **Word count target:** 1,500–2,000 words

#### Page: `/services/oversized-shipping`
- **Target keywords:** oversized item shipping Austin, large package shipping Austin TX, bulky item transport
- **H1:** Oversized Item Shipping & Transport in Austin, TX
- **Meta description:** Ship oversized items from Austin, Texas. Custom crating and freight for furniture, equipment, artwork, and more. White-glove pickup and door-to-door delivery. Free quotes.
- **Content outline:**
  - What counts as oversized (dimensions, FedEx/UPS limits)
  - Why standard carriers can't handle it
  - Our oversized shipping process
  - Before/after crating examples
  - Pricing guide
  - FAQ section
- **Internal links to:** `/services/heavy-items`, `/services/furniture`, `/buy-a-crate`
- **Schema:** Service, FAQPage
- **Word count target:** 1,500 words

### 2B. New Blog Posts (Supporting Content)

| Blog Post Title | Target Keyword | Priority |
|---|---|---|
| "How Much Does It Cost to Ship Heavy Items in Austin?" | cost to ship heavy items Austin | High |
| "How to Ship Large Furniture Across Texas" | how to ship large furniture Texas | High |
| "Piano Shipping in Austin: Complete Guide" | piano shipping Austin Texas | Medium |
| "How to Ship a Pool Table — Austin Guide" | pool table shipping Austin TX | Medium |
| "Motorcycle Crating & Shipping from Austin" | Austin motorcycle crating | Medium |
| "What Is White-Glove Shipping? (And Is It Worth It?)" | white glove shipping explained | Medium |
| "Austin's Guide to Shipping Fragile Items Safely" | fragile item shipping Austin TX | Medium |
| "Antique Furniture Shipping: Protect Your Heirloom" | antique furniture shipping Texas | Low |
| "Why Standard Carriers Won't Ship Your Oversized Package" | oversized package shipping options | Low |
| "Custom Crating vs. Standard Boxes: When You Need a Crate" | custom crating vs standard boxes | Low |

---

## Part 3: On-Page Optimization for Existing Pages

### 3A. Homepage (`/`)

**Current title:** Austin Crate & Freight | White-Glove Specialty Shipping in Austin, TX
**Optimized title:** Austin Specialty Shipping | Custom Crating & Heavy Item Pickup | Austin Crate & Freight

**Current H1:** "Austin Crate & Freight" (branding only)
**Optimized H1:** Keep brand name, but add an **H2 visible to crawlers:**
> "Austin's Premier Specialty Shipping — Custom Crating, Furniture Transport & Heavy Package Pickup"

**Actions:**
- [ ] Add "specialty shipping Austin Texas" to first paragraph of visible body copy
- [ ] Add "custom furniture shipping" to the furniture service card description
- [ ] Add "heavy package pickup" to a new service card or the process section
- [ ] Add "heavy item shipping" and "oversized shipping" mentions in body copy
- [ ] Ensure the homepage is server-rendered (currently `'use client'` — **this is a problem**, see Part 5)

### 3B. Services Page (`/services`)

**Current title:** Specialty Shipping Services | Austin Crate & Freight
**Optimized title:** Specialty Shipping Services Austin TX | Furniture, Art & Heavy Items | Austin Crate & Freight

**Actions:**
- [ ] Add "heavy item pickup" and "oversized shipping" as a visible service offering
- [ ] Add a link to the new `/services/heavy-items` page
- [ ] Add a link to `/services/oversized-shipping`
- [ ] Ensure "Austin Texas specialty shipping" appears in body content

### 3C. Furniture Page (`/services/furniture`)

**Current H1:** Designer Furniture Shipping
**Optimized H1:** Custom Furniture Shipping in Austin, Texas

**Current meta keywords:** furniture shipping Austin, white glove movers Austin TX, designer furniture transport...
**Add these keywords:**
- custom furniture shipping Austin
- heavy furniture pickup Austin TX
- antique furniture shipping Texas
- furniture crating Austin

**Actions:**
- [ ] Change H1 to include "Custom Furniture Shipping" and "Austin, Texas"
- [ ] Add a section about heavy furniture handling (pianos, armoires, marble tables)
- [ ] Add pricing signals ("starting at" or "contact for quote" — Google likes price mentions)
- [ ] Add 2-3 more FAQ entries targeting "how much to ship furniture in Austin" etc.

### 3D. Fine Art Page (`/services/fine-art`)

**Status:** Already well-optimized. Minor tweaks only.

**Actions:**
- [ ] Add internal links to `/services/heavy-items` for sculptures/large art
- [ ] Add FAQ: "Can you ship oversized sculptures from Austin?"
- [ ] Add "Austin TX" to 2-3 more subheadings

### 3E. Buy a Crate Page (`/buy-a-crate`)

**Current title:** Buy a Crate | Custom Wood Crates Austin TX
**Optimized title:** Custom Wood Shipping Crates Austin TX | Buy a Crate | Austin Crate & Freight

**Actions:**
- [ ] Add "custom crating near me" and "wood crate Austin" to content
- [ ] Add a pricing table or size guide (Google rewards pages with structured pricing)
- [ ] Add FAQ: "How much does a custom shipping crate cost?"
- [ ] Link to `/services/heavy-items` and `/services/oversized-shipping`

### 3F. Location Pages (`/locations/*`)

**Actions for all location pages:**
- [ ] Add "heavy package pickup" to each location page's service list
- [ ] Add "custom furniture shipping [City Name]" to each page
- [ ] Add unique local content (2-3 sentences about serving that specific area)
- [ ] Add more FAQs specific to each city
- [ ] Cross-link between all location pages

---

## Part 4: Technical SEO Fixes

### 4A. CRITICAL: Homepage Is Client-Side Rendered

**Problem:** The homepage (`app/page.tsx`) has `'use client'` at the top. This means:
- Google's crawler may not see all content on first pass
- Meta tags are not set via Next.js `metadata` export
- Structured data is injected client-side
- This directly hurts rankings for money keywords

**Fix:** Split the homepage into a server-rendered `page.tsx` (with metadata export) and a client component `HomeClient.tsx` — just like you already did for `/services`, `/contact`, etc.

```
app/
  page.tsx          ← Server component (metadata + SEOWrapper + layout)
  HomeClient.tsx    ← Client component (animations, interactions)
```

This is the **single highest-impact technical change** in this plan.

### 4B. Content Registry Updates

Add new pages to `lib/content-registry.ts`:

```typescript
{
  slug: '/services/heavy-items',
  title: 'Heavy Item Pickup & Shipping Austin TX | Austin Crate & Freight',
  description: 'Heavy package pickup and oversized item shipping in Austin, TX. Custom crating for furniture, equipment, and machinery. Free quotes. Call (512) 240-9818.',
  publishDate: '2026-02-26',
  modifiedDate: '2026-02-26',
  category: 'Services',
  tags: ['heavy items', 'heavy package pickup', 'oversized shipping', 'Austin TX', 'custom crating'],
  author: 'Austin Crate & Freight',
  priority: 0.9,
  changeFrequency: 'weekly',
},
{
  slug: '/services/oversized-shipping',
  title: 'Oversized Item Shipping Austin TX | Large Package Transport',
  description: 'Ship oversized and bulky items from Austin, Texas. Custom crating and freight for items too large for standard carriers. White-glove service, fully insured.',
  publishDate: '2026-02-26',
  modifiedDate: '2026-02-26',
  category: 'Services',
  tags: ['oversized shipping', 'large items', 'freight', 'Austin TX', 'custom crating'],
  author: 'Austin Crate & Freight',
  priority: 0.8,
  changeFrequency: 'weekly',
},
```

### 4C. FAQ Schema Expansion

Add new FAQ schemas to `lib/faq-schema.ts` for heavy items:

```typescript
export const heavyItemsFAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to ship a heavy item in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Heavy item shipping costs in Austin depend on weight, dimensions, fragility, and destination. Most local heavy item shipments start at $150–$300. Call (512) 240-9818 for a free quote.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you pick up heavy packages in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Austin Crate & Freight offers free heavy package pickup throughout Greater Austin, Round Rock, Cedar Park, and Georgetown. We bring all equipment needed for safe loading.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is considered a heavy item for shipping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any item over 70 lbs or too large for standard carrier boxes (over 108 inches combined length + girth) is considered heavy/oversized. This includes furniture, appliances, gym equipment, and machinery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you ship heavy items outside of Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We ship heavy and oversized items nationwide. We custom-crate your item in Austin and coordinate freight transport to any destination in the US, with door-to-door delivery available.'
      }
    },
  ]
}
```

### 4D. Sitemap Accuracy

The current sitemap (`app/sitemap.ts`) already reads from `contentRegistry` — good. But ensure:
- [ ] Every new page gets added to the registry **before** deploy
- [ ] `modifiedDate` is updated whenever page content changes
- [ ] `ping-google.ts` runs after every Vercel deploy

### 4E. Internal Linking Strategy

Every page should link to at least 3 other pages on the site. Current gaps:

| Page | Links to These Pages | Missing Links To |
|---|---|---|
| Homepage | Services, Fine Art, Furniture, Medical | Heavy Items, Oversized, Contact |
| `/services` | Fine Art, Furniture, Medical | Heavy Items, Oversized, Buy a Crate |
| `/services/furniture` | Contact | Heavy Items, Fine Art, Buy a Crate, Locations |
| `/services/fine-art` | Contact | Heavy Items, Furniture, Buy a Crate |
| `/buy-a-crate` | Contact | Services, Heavy Items, Furniture |
| Location pages | Contact | Each other, Services, Heavy Items |
| Blog posts | (minimal) | Services, Contact, Locations |

**Rule:** Every blog post must link to at least 1 service page, 1 location page, and the contact page.

---

## Part 5: Local SEO Strategy

### 5A. Google Business Profile

- [ ] Verify Google Business Profile is claimed and active
- [ ] Primary category: "Shipping and Mailing Service"
- [ ] Secondary categories: "Crating Service," "Freight Forwarding Service," "Moving Company"
- [ ] Add all services as GBP services with descriptions
- [ ] Post weekly Google Business updates (can be repurposed blog content)
- [ ] Add photos of crating work, facility, team
- [ ] Respond to every Google review within 24 hours
- [ ] Ensure NAP (Name, Address, Phone) matches website exactly:
  - **Name:** Austin Crate & Freight
  - **Address:** 3112 Windsor Rd, Austin, TX 78703
  - **Phone:** (512) 240-9818

### 5B. Local Citations (Directory Listings)

Submit consistent NAP to these directories:

| Directory | Priority | Status |
|---|---|---|
| Google Business Profile | Critical | Check |
| Yelp | Critical | Check |
| Facebook Business | High | Check |
| BBB (Better Business Bureau) | High | Submit |
| Austin Chamber of Commerce | High | Submit |
| Angi (formerly Angie's List) | Medium | Submit |
| Thumbtack | Medium | Submit |
| Apple Maps | Medium | Submit |
| Bing Places | Medium | Submit |
| Nextdoor Business | Medium | Submit |
| YellowPages.com | Low | Submit |
| Manta | Low | Submit |

### 5C. Review Strategy

Google reviews directly impact local pack rankings.

- [ ] Goal: 50+ Google reviews by end of Q2 2026
- [ ] Send review request email/text after every completed job
- [ ] Create a short review link: `https://g.page/r/[your-place-id]/review`
- [ ] Print QR code on packing slips / invoices
- [ ] Respond to every review (positive and negative)

### 5D. LocalBusiness Schema on Every Page

The `generateLocalBusinessSchema()` function exists in `seo-utils.ts`. Ensure it's injected on:
- [ ] Homepage
- [ ] All service pages
- [ ] All location pages
- [ ] Contact page

---

## Part 6: Content Calendar (March–May 2026)

### March 2026

| Week | Action | Target Keyword |
|---|---|---|
| Week 1 | Create `/services/heavy-items` page | heavy package pickup Austin |
| Week 1 | Create `/services/oversized-shipping` page | oversized item shipping Austin |
| Week 2 | Blog: "How Much Does It Cost to Ship Heavy Items in Austin?" | cost to ship heavy items Austin |
| Week 2 | Optimize homepage (H1, body copy, metadata) | Austin Texas specialty shipping |
| Week 3 | Blog: "How to Ship Large Furniture Across Texas" | ship large furniture Texas |
| Week 3 | Optimize `/services/furniture` H1 + content | custom furniture shipping Austin |
| Week 4 | Blog: "What Is White-Glove Shipping?" | white glove shipping explained |
| Week 4 | Fix homepage SSR (split client/server components) | (technical, all keywords) |

### April 2026

| Week | Action | Target Keyword |
|---|---|---|
| Week 1 | Blog: "Piano Shipping in Austin: Complete Guide" | piano shipping Austin Texas |
| Week 1 | Optimize all location pages (keywords + content) | [city] specialty shipping |
| Week 2 | Blog: "Custom Crating vs. Standard Boxes" | custom crating vs standard boxes |
| Week 2 | Optimize `/buy-a-crate` with pricing + FAQ | custom crating Austin TX |
| Week 3 | Blog: "Austin's Guide to Shipping Fragile Items" | fragile item shipping Austin |
| Week 3 | Submit to 10 local directories (citations) | local SEO |
| Week 4 | Blog: "Antique Furniture Shipping: Protect Your Heirloom" | antique furniture shipping Texas |
| Week 4 | Add internal links across all pages | site architecture |

### May 2026

| Week | Action | Target Keyword |
|---|---|---|
| Week 1 | Blog: "Pool Table Shipping Austin Guide" | pool table shipping Austin TX |
| Week 1 | Blog: "Motorcycle Crating & Shipping from Austin" | Austin motorcycle crating |
| Week 2 | Lighthouse audit + Core Web Vitals fixes | page speed / CWV |
| Week 2 | Build backlink outreach list (Austin businesses) | domain authority |
| Week 3 | Google Business Profile optimization sprint | local pack ranking |
| Week 3 | Blog: "Why Standard Carriers Won't Ship Your Oversized Package" | oversized package options |
| Week 4 | Review strategy launch (QR codes, follow-up emails) | reviews / local SEO |
| Week 4 | Comprehensive SEO audit with Search Console data | all keywords |

---

## Part 7: Link Building Strategy

### 7A. Local Backlink Targets

Backlinks from Austin-area websites are the most valuable for local rankings.

| Target | Approach | Value |
|---|---|---|
| Austin Chamber of Commerce | Membership + directory listing | High |
| Austin art galleries (AMOA, Davis Gallery, etc.) | Offer "how to ship artwork" as resource | High |
| Austin interior designers / furniture stores | Referral partnership | High |
| UT Austin departments (art, engineering) | Educational resource link | High |
| Austin real estate blogs | Guest post on shipping fine furniture | Medium |
| Local Austin news sites (Austin360, CultureMap) | Press release on business milestone | Medium |
| Texas medical facility directories | List as equipment transport provider | Medium |
| Moving company referral partners | Cross-referral listing | Medium |

### 7B. Content-Based Link Building

Create **linkable assets** — content that other sites will naturally reference:

1. **"Austin Shipping Cost Calculator"** — Interactive tool for estimating heavy item shipping costs
2. **"Complete Guide to Shipping Regulations in Texas"** — Authoritative reference guide
3. **"Austin Art Gallery Shipping Directory"** — List of galleries we serve (they'll link back)
4. **Infographic: "How Custom Crating Works"** — Visual content that blogs embed

---

## Part 8: Competitive Analysis Framework

### Who Are We Competing Against?

Search for each Tier 1 keyword and document:

| Keyword | Current #1 Result | Their Word Count | Their Backlinks | Our Gap |
|---|---|---|---|---|
| Austin specialty shipping | (Research needed) | — | — | — |
| custom furniture shipping Austin | (Research needed) | — | — | — |
| heavy package pickup Austin | (Research needed) | — | — | — |

**Action:** Research the top 3 competitors for each Tier 1 keyword. Note:
- What content they have that we don't
- Their schema markup
- Their word count
- Their backlink profile (use Ahrefs or SEMrush free tier)
- Their Google Review count and rating

---

## Part 9: SEO Architecture Status (Current vs. Target)

| System | Current State | Target State | Priority |
|---|---|---|---|
| Homepage SSR | ❌ Client-rendered | ✅ Server-rendered with metadata | P0 |
| Heavy Items page | ❌ Doesn't exist | ✅ Full service page with FAQ | P0 |
| Content Registry | ✅ Implemented | ✅ Add new pages | P1 |
| Sitemap with real `lastmod` | ✅ Uses content registry | ✅ Keep updated | P1 |
| Structured data every page | ✅ SEOWrapper on most | ✅ Every page | P1 |
| FAQ Schema on service pages | ✅ 3 service pages | ✅ All 5 service pages | P1 |
| Breadcrumbs every page | ✅ Most pages | ✅ Every page | P2 |
| LocalBusiness schema | ⚠️ Location pages only | ✅ Homepage + all services | P2 |
| Internal linking | ⚠️ Sparse | ✅ 3+ links per page | P2 |
| Google Business Profile | ⚠️ Unknown status | ✅ Fully optimized | P1 |
| Local citations | ⚠️ Unknown | ✅ 15+ directories | P2 |
| Google Reviews | ⚠️ Unknown count | ✅ 50+ reviews | P2 |
| Blog content pipeline | ⚠️ 3 posts (news only) | ✅ 2 posts/month (keyword-targeted) | P1 |
| Post-deploy Google ping | ✅ Script exists | ✅ Automate in CI | P3 |
| Core Web Vitals | ⚠️ Untested | ✅ All green | P2 |
| Meta description on every page | ✅ Content registry | ✅ Verify all pages | P3 |

---

## Part 10: KPIs & Tracking

### Monthly Metrics to Track

| Metric | Tool | Current Baseline | 90-Day Target |
|---|---|---|---|
| Organic clicks/month | Google Search Console | (Measure now) | +200% |
| Impressions for "specialty shipping Austin" | Search Console | (Measure now) | Top 10 |
| Impressions for "heavy package pickup Austin" | Search Console | 0 (no page) | Top 20 |
| Impressions for "custom furniture shipping" | Search Console | (Measure now) | Top 10 |
| Google Business Profile views | GBP Insights | (Measure now) | +150% |
| Indexed pages | Search Console | ~20 | 30+ |
| Average position (all queries) | Search Console | (Measure now) | < 15 |
| Core Web Vitals (LCP, FID, CLS) | PageSpeed Insights | (Measure now) | All green |
| Google Reviews | Google Maps | (Count now) | 50+ |
| Referring domains | Ahrefs / Search Console | (Measure now) | +10 |
| Organic phone calls | Call tracking / GA4 | (Measure now) | +100% |

### Quarterly Review Checklist

- [ ] Pull Search Console data for all Tier 1 keywords
- [ ] Check rankings for each target keyword
- [ ] Review competitor changes
- [ ] Update content calendar based on results
- [ ] Audit internal links and fix orphan pages
- [ ] Update content registry `modifiedDate` for all changed pages
- [ ] Run Lighthouse audit on top 5 pages

---

## Quick-Start Checklist (Do This Week)

- [ ] **Create `/services/heavy-items` page** — Biggest keyword gap
- [ ] **Fix homepage SSR** — Split into server/client components
- [ ] **Update homepage title & H2** — Add "specialty shipping Austin Texas"
- [ ] **Update `/services/furniture` H1** — "Custom Furniture Shipping in Austin, Texas"
- [ ] **Add heavy items to content registry** — For sitemap + SEO wrapper
- [ ] **Verify Google Business Profile** — Ensure it's claimed and active
- [ ] **Measure current Search Console baselines** — Can't improve what you don't measure

---

## Key Principle

> **Rank #1 by being the most helpful, most thorough, and most locally-relevant
> result for every search. Google rewards pages that comprehensively answer the
> searcher's question and prove local expertise. Every page we create must be
> the best answer on the internet for its target keyword — with structured data,
> FAQ schema, internal links, and real Austin-area authority behind it.**

---

*SEO Plan authored by Austin Crate & Freight Engineering, February 2026.*
