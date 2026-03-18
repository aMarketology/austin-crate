# Austin Crate & Freight — 10–15 Organic Clients Per Month: The Roadmap

> **Goal:** Generate 10–15 inbound quote requests per month from organic search — no paid ads.
> **Timeline:** 90 days to first consistent leads · 6 months to steady-state 10–15/mo.
> **Site:** austincrate.com (Next.js 14, ~27 indexed pages, LocalBusiness schema deployed)
> **Business:** Specialty shipping — custom crating, heavy item pickup, furniture transport, fine art, medical equipment, oversized items
> **Last updated:** March 18, 2026
>
> **Companion doc:** See [duda-js.md](duda-js.md) for the full SEO Domination Plan (keyword map, on-page optimization, technical fixes, content calendar)

---

## Table of Contents

1. [Where We Are Today](#1-where-we-are-today)
2. [Highest-ROI Pages (Existing)](#2-highest-roi-pages-existing)
3. [The Biggest Untapped Opportunity: Location + Service Pages](#3-the-biggest-untapped-opportunity-location--service-pages)
4. [Blog Content Strategy for Buyer-Intent Traffic](#4-blog-content-strategy-for-buyer-intent-traffic)
5. [On-Page & Technical SEO Improvements](#5-on-page--technical-seo-improvements)
6. [Google Business Profile + Local Citations](#6-google-business-profile--local-citations)
7. [Link Building for Domain Authority](#7-link-building-for-domain-authority)
8. [Month-by-Month Milestones](#8-month-by-month-milestones)
9. [KPIs & Measurement](#9-kpis--measurement)
10. [Lead Math: How 10–15 Clients Actually Happens](#10-lead-math-how-1015-clients-actually-happens)

---

## 1. Where We Are Today

### Assets
| Asset | Status |
|---|---|
| Indexed pages | ~27 (services, locations, blog, resources, core) |
| Service pages | 5 — Fine Art, Custom Furniture, Medical Equipment, Heavy Items, Oversized Shipping |
| Location pages | 3 — Round Rock, Cedar Park, Georgetown |
| Blog articles | 4 (3 local news + 1 shipping cost guide) |
| Buy a Crate page | ✅ Custom crate order page with keyword-rich copy |
| Resources / Prepare Artwork | ✅ Buyer-education pages |
| LocalBusiness schema | ✅ Deployed on homepage + all service pages + all location pages |
| FAQ schema | ✅ On all 5 service pages |
| Sitemap + robots.txt | ✅ Auto-generated from content registry |
| Meta titles & descriptions | ✅ All pages have unique, optimized meta via content registry |
| SEOWrapper + breadcrumbs | ✅ Every page wrapped with WebPage/BreadcrumbList schema |
| Conversion path | `/contact` → quote request form + phone `(512) 240-9818` |
| NAP (Name/Address/Phone) | Austin Crate & Freight · 3112 Windsor Rd, Austin, TX 78703 · (512) 240-9818 |

### What's Already Been Built (SEO Plan Implementation)

| Task | Status |
|---|---|
| `/services/heavy-items` page (target: "heavy package pickup Austin") | ✅ Live — ~660 words, FAQ schema, Service schema, LocalBusiness |
| `/services/oversized-shipping` page (target: "oversized item shipping Austin") | ✅ Live — full page, FAQ schema, pricing, service areas |
| Homepage SSR fix (split server/client components) | ✅ `page.tsx` (server) + `HomeClient.tsx` (client) |
| Homepage metadata + keyword optimization | ✅ Title, H2, body copy target all Tier 1 keywords |
| `/services/furniture` H1 → "Custom Furniture Shipping in Austin, Texas" | ✅ Keywords expanded |
| `/services` index page — 5 service cards + keyword-rich copy | ✅ Updated |
| `/buy-a-crate` — H1 + keywords + related service links | ✅ Updated |
| LocalBusiness schema on homepage + all 5 service pages | ✅ Injected via JSON-LD |
| Location pages — 5 service cards, cross-links, keyword expansion | ✅ All 3 updated |
| Content registry — all pages registered with meta + tags | ✅ ~27 entries |
| Internal linking across all service + location pages | ✅ 3+ links per page |
| Blog: "How Much Does It Cost to Ship Heavy Items in Austin?" | ✅ Live with Article + FAQ schema |
| FAQ schema on heavy-items + oversized-shipping | ✅ Added to `faq-schema.ts` |

### Current Weaknesses / Remaining Gaps
1. **Thin blog** — only 4 articles. Need 15+ keyword-targeted posts to build topical authority.
2. **No backlink strategy** — domain authority is low without intentional link building.
3. **Google Business Profile** — needs verification, posting cadence, review strategy.
4. **Local citations** — not yet submitted to directories (Yelp, BBB, Angi, etc.).
5. **Limited location pages** — only 3 cities. Austin's metro has 15+ cities worth targeting.
6. **No case studies or social proof pages** — testimonials are scattered, not consolidated.
7. **Core Web Vitals** — not yet audited; may have LCP or CLS issues.
8. **No Spanish-language content** — Austin has a large Spanish-speaking population.

---

## 2. Highest-ROI Pages (Existing)

These pages target keywords where the searcher is **ready to buy**. They drive the most revenue and should be prioritized for content expansion, internal linking, and backlink acquisition.

### Tier 1 — Money Pages (Highest Commercial Intent)

Estimated **6–8 leads/mo** at maturity from these pages combined.

| Page | Target Keyword Cluster | Why High ROI |
|---|---|---|
| `/services/heavy-items` | "heavy package pickup Austin", "heavy item shipping Austin TX" | Core differentiator — no competitor has a dedicated page |
| `/services/furniture` | "custom furniture shipping Austin", "furniture shipping Austin TX" | Highest search volume service term, direct revenue |
| `/` (homepage) | "Austin Texas specialty shipping", "specialty shipping Austin TX" | Brand + category keyword, captures broad intent |
| `/buy-a-crate` | "custom crating Austin TX", "wood crate near me" | Bottom-funnel — people pricing crates are ready to ship |
| `/contact` | (conversion page) | All organic traffic funnels here — optimize form conversion rate |

### Tier 2 — Service Pages (High Intent, Niche Audiences)

Estimated **3–5 leads/mo** at maturity.

| Page | Target Keyword Cluster | Monthly Search Estimate |
|---|---|---|
| `/services/fine-art` | "fine art shipping Austin", "art crating Austin TX" | 100–300 |
| `/services/medical-equipment` | "medical equipment transport Austin", "HIPAA shipping" | 50–100 |
| `/services/oversized-shipping` | "oversized item shipping Austin", "large package shipping" | 50–150 |
| `/services` (index) | "specialty shipping services Austin TX" | 50–200 |

### Tier 3 — Location Pages (Local Pack + "[service] [city]" Keywords)

Estimated **2–4 leads/mo** at maturity.

| Page | Target Keyword Cluster | Why Valuable |
|---|---|---|
| `/locations/round-rock` | "shipping Round Rock TX", "heavy item pickup Round Rock" | Pop. 135K, major suburb with businesses |
| `/locations/cedar-park` | "shipping Cedar Park TX", "furniture shipping Cedar Park" | Pop. 85K, affluent suburb |
| `/locations/georgetown` | "shipping Georgetown TX", "custom crating Georgetown" | Pop. 75K, growing fast with historic homes |

### Tier 4 — Supporting Pages (Build Authority, Not Direct Leads)

| Page | Purpose |
|---|---|
| `/about` | Trust signal, branded search, company story |
| `/gallery` | Visual proof of work, builds confidence |
| `/blog/*` | Top-of-funnel awareness, topical authority, long-tail keywords |
| `/resources/*` | Buyer education, reduces objections, earns links |

---

## 3. The Biggest Untapped Opportunity: Location + Service Pages

### The Math

Austin's metro has **15+ cities/suburbs** with real shipping demand. We currently have 3 location pages. Each new city page targets unique keywords:

**Cities to target (beyond current 3):**

> Pflugerville, Leander, Bee Cave, Lakeway, Dripping Springs, Kyle, Buda, San Marcos, Manor, Hutto, Bastrop, Elgin, Marble Falls, Wimberley

**Each city × 1 comprehensive page = 14 new landing pages**, each targeting clusters like:

| Keyword Pattern | Example | Est. Monthly Searches |
|---|---|---|
| "shipping [city] TX" | "shipping Pflugerville TX" | 10–50 per city |
| "heavy item pickup [city]" | "heavy item pickup Leander TX" | 10–30 per city |
| "custom furniture shipping [city]" | "custom furniture shipping Bee Cave" | 10–30 per city |
| "custom crating [city] TX" | "custom crating Bastrop TX" | 5–20 per city |

### Why This Works

- **Low competition** — no other Austin-area shipping company has dedicated pages for suburban cities. FedEx/UPS don't optimize for local keywords.
- **High intent** — someone searching "heavy item pickup Leander TX" needs exactly what we offer, right now.
- **Local trust** — mentioning specific neighborhoods, landmarks, and service details builds credibility with Google and the searcher.
- **Compound effect** — 3 location pages + 14 new = 17 total. Each cross-links to the others and to all 5 service pages, creating a strong internal link web.

### Recommended Build Priority

**Phase 1 (Month 1): Top 5 suburban cities**
1. Pflugerville (pop. 72K — fast-growing, lots of new homes + businesses)
2. Leander (pop. 60K — booming growth, furniture/moving demand)
3. Lakeway / Bee Cave (affluent, high-value shipments)
4. Kyle / Buda (south Austin corridor)
5. Dripping Springs (Hill Country, custom homes)

**Phase 2 (Month 2–3): Next 5 cities**
6. Hutto / Manor (northeast growth corridor)
7. Bastrop / Elgin (east side)
8. San Marcos (university town + businesses)
9. Marble Falls / Wimberley (Hill Country destinations)

**Total new pages: 11–14 location landing pages**

### Page Template (Follows Existing Pattern)

Each location page includes:
- **H1:** `Specialty Shipping in [City], TX`
- **Hero description** mentioning custom furniture shipping, heavy package pickup, fine art, oversized, medical equipment
- **5 service cards** linking to `/services/fine-art`, `/services/furniture`, `/services/medical-equipment`, `/services/heavy-items`, `/services/oversized-shipping`
- **"Why Choose Us" section** with city-specific local knowledge (neighborhoods, landmarks)
- **Cross-links** to other location pages
- **Links to** `/services`, `/buy-a-crate`, `/contact`
- **LocalBusiness schema** with city-specific lat/long
- **CTA:** Phone number + "Get Free Quote" → `/contact`
- **Content registry entry** with city-specific title, description, keywords

---

## 4. Blog Content Strategy for Buyer-Intent Traffic

### Current State
4 blog articles — 3 local news pieces (fire, marathon, lottery) and 1 shipping cost guide. The cost guide is our only keyword-targeted post.

### The Shift: Buyer-Intent Content

We need articles that attract **people who are about to ship something heavy, fragile, or valuable** — not just Austin news readers.

### Content Calendar — 2 Posts Per Month (Minimum)

#### Month 1–2: Foundation Posts (High Priority)

| # | Title | Target Keyword | Type |
|---|---|---|---|
| 1 | ~~"How Much Does It Cost to Ship Heavy Items in Austin?"~~ | ~~cost to ship heavy items Austin~~ | ✅ **DONE** |
| 2 | ~~"How to Ship Large Furniture Across Texas"~~ | ~~ship large furniture Texas~~ | ✅ **DONE** |
| 3 | ~~"Piano Shipping in Austin: Complete Guide & Costs"~~ | ~~piano shipping Austin Texas~~ | ✅ **DONE** |
| 4 | ~~"What Is White-Glove Shipping? (And Is It Worth It?)"~~ | ~~white glove shipping explained~~ | ✅ **DONE** |
| 5 | "Custom Crating vs. Standard Boxes: When You Need a Crate" | custom crating vs standard boxes | Comparison |
| 6 | "How to Prepare Furniture for Shipping (Step-by-Step)" | prepare furniture for shipping | How-To |

#### Month 3–4: Niche Service Sub-Pages (Under /services/)

> **Strategic shift:** These topics have higher commercial intent than blog posts and convert better as dedicated service sub-pages. Following the existing `/services/furniture/*` sub-page pattern, each page drives targeted "[item type] shipping Austin" searches directly into a service funnel — not a blog funnel.

| # | Page Title | URL | Parent Service | Target Keyword |
|---|---|---|---|---|
| 7 | Pool Table Shipping in Austin | `/services/heavy-items/pool-table-shipping` | Heavy Items | pool table shipping Austin TX |
| 8 | Motorcycle Crating & Shipping Austin | `/services/heavy-items/motorcycle-crating` | Heavy Items | Austin motorcycle crating |
| 9 | Fragile Item Shipping & Crating | `/services/fine-art/fragile-item-shipping` | Fine Art | fragile item shipping Austin TX |
| 10 | Antique Furniture Shipping | `/services/furniture/antique-furniture-shipping` | Furniture | antique furniture shipping Texas |
| 11 | When Carriers Refuse: Oversized Shipping Solutions | `/services/oversized-shipping/when-carriers-refuse` | Oversized Shipping | oversized package shipping options |
| 12 | Heavy Equipment Shipping for Austin Businesses | `/services/heavy-items/heavy-equipment-austin` | Heavy Items | heavy equipment shipping Austin |

#### Month 5–6: Authority + Seasonal Content

| # | Title | Target Keyword | Type |
|---|---|---|---|
| 13 | "Complete Guide to Shipping Regulations in Texas" | Texas shipping regulations | Pillar Content |
| 14 | "Moving to Austin? How to Ship Your Valuables Safely" | ship valuables to Austin TX | Seasonal |
| 15 | "Art Gallery Shipping Guide for Austin Galleries" | art gallery shipping Austin | Industry Guide |
| 16 | "How to Choose a Specialty Shipping Company in Austin" | specialty shipping company Austin | Buyer Guide |
| 17 | "Safe Shipping Austin TX: Our Most-Shipped Heavy Items" | safe shipping Austin TX | Listicle |
| 18 | "Medical Equipment Transport: HIPAA Compliance Guide" | HIPAA compliant shipping guide | Industry Guide |

### Blog → Lead Conversion Path

Every blog post must include:
1. **Quick-answer callout** near the top (Google Featured Snippet target)
2. **Pricing table or cost range** (Google rewards pages with structured pricing)
3. **CTA with phone number** at ~40% scroll: "Need to ship this? Call (512) 240-9818"
4. **Related Services section** at the bottom linking to 2–4 service pages
5. **Internal links** to at least 1 service page, 1 location page, and `/contact`
6. **FAQ section** with FAQ schema (targets People Also Ask boxes)
7. **Article schema** (JSON-LD) with author, dates, publisher

---

## 5. On-Page & Technical SEO Improvements

### Already Completed ✅

| Task | Status |
|---|---|
| Homepage SSR (server/client split) | ✅ Done |
| Service schema on all service pages | ✅ Done |
| FAQ schema on all 5 service pages | ✅ Done |
| LocalBusiness schema on homepage + all services + locations | ✅ Done |
| Content registry with meta for every page | ✅ Done |
| Breadcrumbs on all pages | ✅ Done |
| Internal link audit: 3+ cross-links per service page | ✅ Done |
| Canonical URLs via content registry | ✅ Done |
| Sitemap auto-generated from content registry | ✅ Done |

### Quick Wins (Next Sprint)

| Task | Impact | Effort |
|---|---|---|
| Add `HowTo` schema to blog how-to posts | Rich snippets in SERPs | Low |
| Compress all images, add WebP variants via `next/image` | Core Web Vitals (LCP) | Medium |
| Add keyword-rich `alt` text to all images | Image search traffic | Low |
| Add `areaServed` to Service schema covering all cities | Broader geo targeting | Low |
| Add pricing info hints to service page meta descriptions | Higher CTR in SERPs | Low |

### Medium-Term (Month 2–4)

| Task | Impact |
|---|---|
| Lighthouse audit on top 5 pages — fix LCP, CLS issues | Core Web Vitals ranking factor |
| Create an HTML sitemap page (`/sitemap`) for users + crawlers | Internal link equity boost |
| Add `next/image` priority loading on above-the-fold hero images | LCP improvement |
| Add review/testimonial structured data | Star ratings in SERPs |
| Consider Spanish-language versions of top service pages | Austin's bilingual market |

### Content Depth — Pages That Need Expansion

| Page | Current State | Action |
|---|---|---|
| `/services/fine-art` | Solid but could be deeper | Add pricing signals, before/after examples, more FAQ entries |
| `/services/medical-equipment` | Good | Add case study, compliance detail, equipment list |
| `/resources/prepare-artwork` | Buyer education | Expand to cover furniture, heavy items, not just artwork |
| `/about` | Thin | Add company history, team, certifications, service area map |
| `/gallery` | Exists | Add keyword-rich descriptions to gallery items |

---

## 6. Google Business Profile + Local Citations

### GBP Optimization (Free, Highest-Impact Local SEO)

| Action | Frequency |
|---|---|
| Post updates (completed jobs, blog posts, tips) | 2x/week |
| Request Google review after every completed shipment | After every job |
| Add photos of crating work, heavy item pickups, team | Weekly |
| Respond to all reviews within 24 hours | Ongoing |
| Add all 5 services with keyword-rich descriptions | One-time setup |
| Set service area for all Austin-metro cities | One-time setup |
| Use UTM-tagged links in GBP posts | Every post |

**Primary category:** Shipping and Mailing Service
**Secondary categories:** Crating Service, Freight Forwarding Service, Moving Company

### Review Strategy — Target: 50+ Reviews by Month 6
- Send review request text/email after every completed job
- Create a short review link: `https://g.page/r/[place-id]/review`
- Print QR code on packing slips and invoices
- Respond to every review (positive and negative)
- Goal: Month 1–2 → 20 reviews · Month 3–4 → 35 reviews · Month 5–6 → 50+

### Local Citations (NAP Consistency)

Submit consistent NAP to these directories:

**NAP:**
- **Name:** Austin Crate & Freight
- **Address:** 3112 Windsor Rd, Austin, TX 78703
- **Phone:** (512) 240-9818

| Directory | Priority | Status |
|---|---|---|
| Google Business Profile | Critical | ⬜ Verify |
| Yelp | Critical | ⬜ Submit |
| Facebook Business | High | ⬜ Submit |
| BBB (Better Business Bureau) | High | ⬜ Submit |
| Austin Chamber of Commerce | High | ⬜ Submit |
| Angi (formerly Angie's List) | High | ⬜ Submit |
| Thumbtack | Medium | ⬜ Submit |
| Apple Maps | Medium | ⬜ Submit |
| Bing Places | Medium | ⬜ Submit |
| Nextdoor Business | Medium | ⬜ Submit |
| YellowPages.com | Low | ⬜ Submit |
| Manta | Low | ⬜ Submit |
| Expertise.com | Low | ⬜ Submit |

---

## 7. Link Building for Domain Authority

### Strategy 1: Local Partnerships (Easiest, Highest Value)
- Partner with **Austin art galleries** (Davis Gallery, AMOA, Wally Workman) — offer "how to ship artwork" as a resource → gallery links back
- Partner with **Austin interior designers + furniture stores** — referral partnership → directory listing with backlink
- Join **Austin Chamber of Commerce** → directory listing with backlink
- Partner with **Austin real estate agents** — moving/shipping referrals for new homeowners
- Cross-link with **complementary businesses** (moving companies that don't do crating, antique dealers)

### Strategy 2: Content-Based Link Building (Scalable)
- **"Austin Shipping Cost Calculator"** — interactive tool for estimating heavy item shipping costs (linkable asset)
- **"Complete Guide to Shipping Regulations in Texas"** — authoritative reference other sites link to
- **"Austin Art Gallery Shipping Directory"** — list of galleries we serve (they link back)
- **Infographic: "How Custom Crating Works"** — visual content that blogs embed and link to

### Strategy 3: Guest Posts (Moderate Effort)
- Write for Austin-area blogs: interior design, home renovation, art collecting
- Target: 1–2 guest posts per month on DA 30+ sites
- Topics: "How to Ship Furniture When Renovating Your Austin Home", "Protecting Artwork During a Move"

### Strategy 4: Press & HARO
- Sign up for HARO / Connectively / Qwoted
- Respond to queries about shipping, logistics, moving, specialty transport
- Press releases for business milestones (jobs completed, new services, community involvement)
- Target: 1–2 media mentions per month

### Strategy 5: Industry Directories
- List on shipping/logistics directories (FreightCenter, uShip alternatives, shipping company lists)
- Art-specific directories (art logistics providers, gallery service providers)
- Medical equipment transport directories

### Target: Domain Authority 20+ by Month 6
(Starting from low DA as a newer domain)

---

## 8. Month-by-Month Milestones

### Month 1 (March 2026): Foundation
- [x] `/services/heavy-items` page — live with FAQ + Service + LocalBusiness schema
- [x] `/services/oversized-shipping` page — live
- [x] Homepage SSR fix + keyword optimization
- [x] All service pages optimized (H1s, keywords, internal links)
- [x] Location pages updated (5 service cards, cross-links, keywords)
- [x] Blog: "How Much Does It Cost to Ship Heavy Items in Austin?"
- [x] Blog: "How to Ship Large Furniture Across Texas" ✅ **DONE (March 18)**
- [ ] Verify Google Business Profile — claim and optimize
- [ ] Submit NAP to top 5 directories (Google, Yelp, Facebook, BBB, Chamber)
- [ ] Set up Google Search Console tracking for Tier 1 keywords
- **Expected leads: 1–3**

### Month 2 (April 2026): Scale Content + Locations
- [x] Blog: "Piano Shipping in Austin: Complete Guide" ✅ **DONE (March 18)**
- [x] Blog: "What Is White-Glove Shipping?" ✅ **DONE (March 18)**
- [ ] Build 5 new location pages (Pflugerville, Leander, Lakeway, Kyle/Buda, Dripping Springs)
- [ ] Submit NAP to next 5 directories
- [ ] Start GBP posting schedule (2x/week)
- [ ] Reach 20 Google reviews
- [ ] Expand `/about` page with company story + service area map
- [ ] Lighthouse audit on top 5 pages — fix any CWV issues
- **Expected leads: 3–5**

### Month 3 (May 2026): Authority Building
- [ ] Blog: "Custom Crating vs. Standard Boxes"
- [ ] Blog: "How to Prepare Furniture for Shipping"
- [ ] Service sub-page: `/services/heavy-items/pool-table-shipping`
- [ ] Service sub-page: `/services/heavy-items/motorcycle-crating`
- [ ] Build 5 more location pages (Hutto/Manor, Bastrop/Elgin, San Marcos, Marble Falls/Wimberley)
- [ ] Secure 2 local partnership backlinks (gallery + interior designer)
- [ ] Reach 30 Google reviews
- [ ] Create linkable asset (shipping cost calculator or infographic)
- [ ] Submit to remaining directories
- **Expected leads: 5–8**

### Month 4 (June 2026): Optimization
- [ ] Analyze Search Console data — pages with impressions but low clicks
- [ ] Rewrite meta titles/descriptions for pages with <3% CTR
- [ ] Service sub-page: `/services/fine-art/fragile-item-shipping`
- [ ] Service sub-page: `/services/furniture/antique-furniture-shipping`
- [ ] Service sub-page: `/services/oversized-shipping/when-carriers-refuse`
- [ ] Service sub-page: `/services/heavy-items/heavy-equipment-austin`
- [ ] Reach 35 Google reviews
- [ ] A/B test contact form (reduce fields, test CTA copy)
- **Expected leads: 7–10**

### Month 5 (July 2026): Compound Growth
- [ ] Double down on winning keyword clusters — expand sub-page network
- [ ] Blog: "Austin's Guide to Shipping Fragile Items" (top-of-funnel, links to `/services/fine-art/fragile-item-shipping`)
- [ ] Blog: "Antique Furniture Shipping: Protect Your Heirloom" (links to `/services/furniture/antique-furniture-shipping`)
- [ ] Secure 2 guest post backlinks (DA 30+ sites)
- [ ] Add case study / testimonial pages for completed projects
- [ ] Reach 40 Google reviews
- **Expected leads: 8–12**

### Month 6 (August 2026): Steady State
- [ ] Full content machine running: 2 blog posts/month + 2 GBP posts/week
- [ ] 17+ location pages indexed and ranking
- [ ] 18+ blog posts driving top-of-funnel traffic
- [ ] 50+ Google reviews
- [ ] DA 20+ with diverse backlink profile
- [ ] Blog: "How to Choose a Specialty Shipping Company in Austin"
- [ ] Blog: "Complete Guide to Shipping Regulations in Texas"
- **Expected leads: 10–15**

---

## 9. KPIs & Measurement

### Weekly Tracking

| Metric | Tool | Target by Month 6 |
|---|---|---|
| Organic sessions | GA4 | 1,500+/month |
| Organic clicks | Google Search Console | 1,200+/month |
| Impressions | Google Search Console | 25,000+/month |
| Keywords ranking top 10 | GSC / Ahrefs | 50+ |
| Keywords ranking top 3 | GSC / Ahrefs | 15+ |
| Leads from organic (quote requests + phone calls) | GA4 + call tracking | 10–15/month |
| Conversion rate (organic visitors → quote) | GA4 | 2–4% |
| Average position (Tier 1 keywords) | GSC | < 10 |
| Google reviews | GBP | 50+ |
| Domain authority | Ahrefs / Moz | 20+ |

### Conversion Funnel

```
Organic Search Impression (25,000/mo)
  → Click to Site (1,200/mo · ~5% CTR)
    → Visit Service/Blog/Location Page (1,200)
      → Click CTA / Call / Visit Contact Page (120 · 10% engagement)
        → Submit Quote Form or Call (12–15 · 10% form conversion)
```

### GA4 + Tracking Setup Needed
- [ ] `generate_lead` event — fire on `/contact` form submission
- [ ] Phone call tracking — use CallRail or GA4 tel: link tracking
- [ ] Organic source attribution — filter by medium = organic
- [ ] Search Console integration — link to GA4 property

---

## 10. Lead Math: How 10–15 Clients Actually Happens

### Traffic Sources at Steady State (Month 6)

| Source | Pages | Avg. Monthly Traffic/Page | Total Traffic | Conv. Rate | Leads |
|---|---|---|---|---|---|
| Core service pages (5) | 5 | 60 visits | 300 | 3% | **~9** |
| Service sub-pages (6+) | 6 | 35 visits | 210 | 4% | **~8** |
| Location pages (17) | 17 | 20 visits | 340 | 2.5% | **~9** |
| Blog posts (8–10) | 9 | 25 visits | 225 | 1% | **~2** |
| Homepage (branded + "specialty shipping Austin") | 1 | 150 visits | 150 | 2% | **~3** |
| Buy a Crate + Resources | 2 | 30 visits | 60 | 2% | **~1** |
| **Total** | **40** | — | **1,285** | **~2.5%** | **~32 leads** |

> **Why service sub-pages out-convert blog posts:** A visitor landing on `/services/heavy-items/pool-table-shipping` is searching for that specific service — not reading an article. Conversion rates for service sub-pages run 3–5× higher than blog posts. Fewer blog posts needed; each service sub-page punches harder.

Even at **half these conversion rates**, that's **13+ leads/month** — right at our target. The model is conservative with room for upside.

### Why Organic Leads Convert Better for Specialty Shipping
- **Pre-qualified** — they searched for exactly the service they need ("heavy item pickup Austin")
- **Urgent need** — people shipping heavy/valuable items usually have a deadline (moving, selling, relocating)
- **Local trust** — LocalBusiness schema, physical address, phone number builds confidence
- **No comparison shopping** — specialty shipping has far fewer competitors than web design or marketing
- **Higher ticket** — average job value is $200–$800+, with some shipments over $2,000

### Revenue Impact

At an average job value of **$300–$600**:

| Leads/Month | Close Rate | Jobs/Month | Revenue/Month |
|---|---|---|---|
| 10 | 40% | 4 | $1,200–$2,400 |
| 15 | 40% | 6 | $1,800–$3,600 |
| 15 | 60% | 9 | $2,700–$5,400 |
| 20 | 50% | 10 | $3,000–$6,000 |

**Note:** Close rate for specialty shipping is typically higher (40–60%) than for services like web design (20–30%) because the searcher has an immediate physical need. They aren't comparison-shopping — they need someone who can pick up a 500 lb safe THIS WEEK.

At higher-value jobs (cross-country furniture, art gallery contracts, medical equipment):

| Job Type | Avg. Value | Jobs/Month | Revenue/Month |
|---|---|---|---|
| Local heavy item pickup | $200–$400 | 5 | $1,000–$2,000 |
| Custom furniture shipping | $300–$600 | 3 | $900–$1,800 |
| Fine art / gallery contracts | $500–$2,000 | 2 | $1,000–$4,000 |
| Oversized / cross-country freight | $500–$2,000 | 1 | $500–$2,000 |
| **Monthly total** | — | **11** | **$3,400–$9,800** |

---

## Summary: The 3 Levers That Get Us to 10–15 Leads

| Lever | What It Does | Pages/Assets | Lead Contribution |
|---|---|---|---|
| **1. Service Pages + Sub-Pages** | Captures high-intent "[specific item] shipping Austin" searches — pool tables, motorcycles, antiques, heavy equipment, fragile items, oversized | 5 core service pages + 6+ sub-pages + homepage + buy-a-crate | 8–12 leads/mo |
| **2. Location Pages** | Captures "[service] + [city]" searches across 17 Austin-area cities | 17 location pages (3 live, 14 to build) | 3–5 leads/mo |
| **3. Buyer-Intent Blog Content** | Top-of-funnel awareness, internal links into service sub-pages; blog posts feed service pages rather than competing with them | 8–10 foundation posts | 2–3 leads/mo |

**Combined with** Google Business Profile optimization (reviews, posts), local citations (NAP consistency across 12+ directories), and link building (gallery partnerships, local business links), these three levers compound to deliver **10–15 organic quote requests per month within 6 months**.

---

## Cross-Reference: Related Documents

| Document | Contents |
|---|---|
| [duda-js.md](duda-js.md) | **SEO Domination Plan** — Full keyword map (Tier 1/2/3), on-page optimization checklist, technical SEO fixes, content calendar (March–May 2026), link building targets, competitive analysis framework, architecture status, KPIs |
| [SEO-DOCUMENTATION.md](SEO-DOCUMENTATION.md) | Technical SEO implementation details — schema types, content registry, sitemap, robots.txt |
| [SEO-QUICK-REFERENCE.md](SEO-QUICK-REFERENCE.md) | Quick-reference card for SEO utilities, metadata functions, schema generators |
| [IMPLEMENTATION-SUMMARY.md](IMPLEMENTATION-SUMMARY.md) | Summary of all SEO implementation work completed |

---

## Key Principle

> **Rank #1 by being the most helpful, most thorough, and most locally-relevant
> result for every search. Google rewards pages that comprehensively answer the
> searcher's question and prove local expertise. Every page we create must be
> the best answer on the internet for its target keyword — with structured data,
> FAQ schema, internal links, and real Austin-area authority behind it.**
>
> In specialty shipping, the bar is LOW. Most competitors have generic pages with
> no schema, no FAQ, no location targeting, and no blog content. We win by
> showing up with a better answer on every keyword they're ignoring.

---

*Austin Crate & Freight — Organic Growth Roadmap*
*Created: March 2026 · Updated: March 18, 2026*
*Next review: Monthly during milestone check-ins*
