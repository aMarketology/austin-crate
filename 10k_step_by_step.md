# Austin Crate: 10K Impressions — Step-by-Step Action Plan
**April 7, 2026 — Working from what's already built**

> We have 70+ pages live. That's a strong foundation most sites don't have at this stage.
> The work now is **quality improvement**, **image enhancement**, and **content depth** — not just adding more pages.

---

## Unsplash API Credentials

```
Application ID:  918537
Access Key:      Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ
Secret Key:      FwcdAmo6pbja3xFPMBY3zAsLeC4qZgTVfHkGSW72L7Q
Base URL:        https://api.unsplash.com
```

**How we use it:** Every service page, location page, and blog post gets a relevant, high-quality hero image pulled from Unsplash. This improves time-on-page, reduces bounce rate, and signals content quality to Google.

---

## Current Site Inventory (70+ Pages Live)

### Core Pages
- `/` Homepage
- `/about`
- `/contact`
- `/gallery`
- `/thank-you`
- `/resources`
- `/resources/prepare-artwork`
- `/buy-a-crate`
- `/services` (index)

### Service Parent Pages (5)
- `/services/fine-art`
- `/services/furniture`
- `/services/heavy-items`
- `/services/medical-equipment`
- `/services/oversized-shipping`
- `/services/shipping-and-crating`

### Fine Art Sub-Pages (9)
- `/services/fine-art/painting-shipping`
- `/services/fine-art/sculpture-shipping`
- `/services/fine-art/glass-art-shipping`
- `/services/fine-art/fragile-item-shipping`
- `/services/fine-art/museum-display-shipping`
- `/services/fine-art/gallery-exhibit-shipping`
- `/services/fine-art/art-installation-shipping`
- `/services/fine-art/rare-collectibles-shipping`
- `/services/fine-art/antique-artifacts-shipping`

### Furniture Sub-Pages (13)
- `/services/furniture/antique-furniture-shipping`
- `/services/furniture/antique-heirloom-furniture`
- `/services/furniture/bedroom-furniture`
- `/services/furniture/cabinets-credenzas`
- `/services/furniture/custom-handmade-furniture`
- `/services/furniture/designer-chairs`
- `/services/furniture/designer-sofas-sectionals`
- `/services/furniture/dining-tables-sets`
- `/services/furniture/executive-office-furniture`
- `/services/furniture/grandfather-clock-shipping`
- `/services/furniture/marble-stone-furniture`
- `/services/furniture/outdoor-patio-furniture`
- `/services/furniture/oversized-heavy-furniture`

### Heavy Items Sub-Pages (3)
- `/services/heavy-items/pool-table-shipping`
- `/services/heavy-items/motorcycle-crating`
- `/services/heavy-items/heavy-equipment-austin`

### Medical Equipment Sub-Pages (5)
- `/services/medical-equipment/diagnostic-devices`
- `/services/medical-equipment/imaging-equipment`
- `/services/medical-equipment/lab-equipment`
- `/services/medical-equipment/sensitive-electronics`
- `/services/medical-equipment/surgical-equipment`

### Shipping & Crating Sub-Pages (9)
- `/services/shipping-and-crating/machinery-manufacturing-equipment`
- `/services/shipping-and-crating/audio-equipment-studio-gear`
- `/services/shipping-and-crating/aerospace-specialty-parts`
- `/services/shipping-and-crating/large-custom-built-objects`
- `/services/shipping-and-crating/large-tvs-display-panels`
- `/services/shipping-and-crating/oversized-one-off-items`
- `/services/shipping-and-crating/semiconductor-precision-tech`
- `/services/shipping-and-crating/servers-it-hardware`
- `/services/shipping-and-crating/trade-show-booths-displays`

### Oversized Shipping Sub-Pages (1)
- `/services/oversized-shipping/when-carriers-refuse`

### Location Pages (3)
- `/locations/round-rock`
- `/locations/cedar-park`
- `/locations/georgetown`

### Blog Posts (13)
- `/blog` (index)
- `/blog/cost-to-ship-heavy-items-austin`
- `/blog/piano-shipping-austin`
- `/blog/what-is-white-glove-shipping`
- `/blog/ship-large-furniture-texas`
- `/blog/custom-crating-vs-standard-boxes`
- `/blog/best-furniture-stores-austin-texas`
- `/blog/austin-marathon-2026`
- `/blog/apartment-fire-se-austin`
- `/blog/lottery-ticket-round-rock`
- `/blog/exxonmobil-redomicile-texas`
- `/blog/austin-kiva-hub-small-business-microloans`
- `/blog/moveoutatx-austin-resource-recovery-returns-in-partnership-to-ut-office-of-sustainability`
- `/blog/safety-speed-6400-panel-saw`

---

## The Revised Strategy: Quality Over Quantity

We don't need more pages as urgently as we thought. We need **Google to trust and rank the pages we already have.**

The fastest path to 10K impressions with 70+ pages:

1. **Add images to every page** (Unsplash API) — reduces bounce rate, signals quality
2. **Improve thin pages** — pages under 300 words won't rank; expand them
3. **Build missing location pages** — only 3 cities, easy wins
4. **Fix internal linking** — many sub-pages are probably orphaned
5. **Improve meta titles/descriptions** — higher CTR = more impressions counted

---

## Step 1: Unsplash Image Integration

### Set Up the API Utility

Create a reusable utility at `lib/unsplash.ts`:

```typescript
// lib/unsplash.ts
const UNSPLASH_ACCESS_KEY = 'Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ'

export async function getUnsplashImage(query: string, orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape') {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=${orientation}&client_id=${UNSPLASH_ACCESS_KEY}`
  )
  if (!res.ok) return null
  const data = await res.json()
  return {
    url: data.urls.regular,
    alt: data.alt_description || query,
    credit: data.user.name,
    creditUrl: data.user.links.html
  }
}

export async function searchUnsplashImages(query: string, count: number = 6) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`
  )
  if (!res.ok) return []
  const data = await res.json()
  return data.results.map((photo: any) => ({
    url: photo.urls.regular,
    thumb: photo.urls.thumb,
    alt: photo.alt_description || query,
    credit: photo.user.name,
    creditUrl: photo.user.links.html
  }))
}
```

### Image Search Queries by Page Type

| Page Category | Unsplash Query |
|---|---|
| Fine Art / Painting Shipping | "fine art crating shipping" |
| Sculpture Shipping | "sculpture museum shipping crate" |
| Furniture Shipping | "furniture moving professional" |
| Designer Chairs / Sofas | "designer furniture luxury interior" |
| Antique Furniture | "antique furniture restoration" |
| Medical Equipment | "medical equipment hospital" |
| Heavy Items / Pool Tables | "pool table billiards moving" |
| Motorcycle Crating | "motorcycle crating transport" |
| Servers / IT Hardware | "server rack data center" |
| Semiconductor / Precision Tech | "semiconductor clean room technology" |
| Trade Show Booths | "trade show booth exhibition" |
| Audio Equipment | "audio recording studio equipment" |
| Aerospace Parts | "aerospace manufacturing precision" |
| Location Pages (Austin area) | "Austin Texas downtown" |
| Pflugerville | "suburban Texas neighborhood" |
| Leander / Cedar Park | "Texas suburb neighborhood aerial" |
| Blog: Piano Shipping | "grand piano moving" |
| Blog: White Glove | "white glove luxury delivery service" |
| Blog: Furniture | "furniture delivery home" |

---

## Step 2: Pages to Improve This Week (Priority Order)

### Tier 1: Highest Traffic Potential — Do First

These pages target the most-searched queries. Each needs an Unsplash hero image + content check.

- [ ] **`/services/furniture`** — "furniture shipping Austin TX" (highest volume service)
  - Add Unsplash hero: query `"luxury furniture shipping white glove"`
  - Check H1 includes "Austin" and "Texas"
  - Ensure 500+ words on page
  - Verify internal links to all 13 sub-pages

- [ ] **`/services/heavy-items`** — "heavy item shipping Austin"
  - Add Unsplash hero: query `"heavy equipment freight professional"`
  - Link to pool-table, motorcycle, heavy-equipment sub-pages
  - Add FAQ schema if missing

- [ ] **`/services/heavy-items/pool-table-shipping`** — "pool table moving Austin TX"
  - Add Unsplash hero: query `"pool table billiards room"`
  - 400+ words, local Austin references
  - Schema: Service + FAQ + LocalBusiness

- [ ] **`/services/heavy-items/pool-table-shipping`** — "piano moving Austin TX"
  - Confirm this exists or create `/services/heavy-items/piano-moving`
  - Add Unsplash hero: query `"grand piano concert hall"`

- [ ] **`/services/fine-art`** — "fine art shipping Austin"
  - Add Unsplash hero: query `"fine art gallery museum crating"`
  - Link to all 9 sub-pages in a grid/list
  - 500+ words

- [ ] **`/`** Homepage
  - Ensure Unsplash or local images on all service cards
  - Verify clickable image links (already done April 7) go to correct pages
  - Check meta title and description

### Tier 2: Sub-Pages Needing Images

These sub-pages likely have thin content or no hero images. Add Unsplash images + verify content depth.

**Fine Art (9 sub-pages):**
- [ ] `/services/fine-art/painting-shipping` — query: `"painting canvas art shipping museum"`
- [ ] `/services/fine-art/sculpture-shipping` — query: `"sculpture bronze art installation"`
- [ ] `/services/fine-art/glass-art-shipping` — query: `"glass art installation gallery"`
- [ ] `/services/fine-art/fragile-item-shipping` — query: `"fragile packaging bubble wrap careful"`
- [ ] `/services/fine-art/museum-display-shipping` — query: `"museum exhibit display case"`
- [ ] `/services/fine-art/gallery-exhibit-shipping` — query: `"art gallery exhibition opening"`
- [ ] `/services/fine-art/art-installation-shipping` — query: `"art installation contemporary museum"`
- [ ] `/services/fine-art/rare-collectibles-shipping` — query: `"rare collectibles display case"`
- [ ] `/services/fine-art/antique-artifacts-shipping` — query: `"antique artifacts museum collection"`

**Furniture (13 sub-pages):**
- [ ] `/services/furniture/designer-sofas-sectionals` — query: `"designer sofa luxury living room"`
- [ ] `/services/furniture/dining-tables-sets` — query: `"dining table luxury home"`
- [ ] `/services/furniture/marble-stone-furniture` — query: `"marble table luxury interior"`
- [ ] `/services/furniture/grandfather-clock-shipping` — query: `"grandfather clock antique home"`
- [ ] `/services/furniture/outdoor-patio-furniture` — query: `"outdoor patio furniture luxury"`
- [ ] `/services/furniture/bedroom-furniture` — query: `"luxury bedroom furniture interior"`
- [ ] `/services/furniture/cabinets-credenzas` — query: `"wood cabinet credenza interior design"`
- [ ] `/services/furniture/custom-handmade-furniture` — query: `"custom handmade wood furniture craftsman"`
- [ ] `/services/furniture/designer-chairs` — query: `"designer chair eames luxury interior"`
- [ ] `/services/furniture/executive-office-furniture` — query: `"executive office desk luxury"`
- [ ] `/services/furniture/oversized-heavy-furniture` — query: `"oversized furniture delivery home"`
- [ ] `/services/furniture/antique-furniture-shipping` — query: `"antique furniture restoration auction"`
- [ ] `/services/furniture/antique-heirloom-furniture` — query: `"heirloom antique furniture family"`

**Shipping & Crating (9 sub-pages):**
- [ ] `/services/shipping-and-crating/machinery-manufacturing-equipment` — query: `"industrial machinery manufacturing floor"`
- [ ] `/services/shipping-and-crating/audio-equipment-studio-gear` — query: `"recording studio audio equipment mixing"`
- [ ] `/services/shipping-and-crating/aerospace-specialty-parts` — query: `"aerospace engineering precision manufacturing"`
- [ ] `/services/shipping-and-crating/large-custom-built-objects` — query: `"custom fabrication large object warehouse"`
- [ ] `/services/shipping-and-crating/large-tvs-display-panels` — query: `"large display screen tv professional"`
- [ ] `/services/shipping-and-crating/oversized-one-off-items` — query: `"oversized freight logistics warehouse"`
- [ ] `/services/shipping-and-crating/semiconductor-precision-tech` — query: `"semiconductor clean room chip manufacturing"`
- [ ] `/services/shipping-and-crating/servers-it-hardware` — query: `"server data center rack hardware"`
- [ ] `/services/shipping-and-crating/trade-show-booths-displays` — query: `"trade show booth exhibition convention"`

**Medical Equipment (5 sub-pages):**
- [ ] `/services/medical-equipment/diagnostic-devices` — query: `"medical diagnostic equipment hospital"`
- [ ] `/services/medical-equipment/imaging-equipment` — query: `"mri ct scan imaging medical"`
- [ ] `/services/medical-equipment/lab-equipment` — query: `"laboratory equipment science research"`
- [ ] `/services/medical-equipment/sensitive-electronics` — query: `"sensitive electronics laboratory precision"`
- [ ] `/services/medical-equipment/surgical-equipment` — query: `"surgical instruments operating room"`

---

## Step 3: Location Pages to Build (8 Cities)

These are the highest-impact new pages. Each one targets real "[service] [city] TX" searches.

| Priority | City | URL | Est. Weekly Impressions |
|---|---|---|---|
| 1 | Pflugerville | `/locations/pflugerville` | 150-250 |
| 2 | Leander | `/locations/leander` | 120-200 |
| 3 | Kyle | `/locations/kyle` | 100-180 |
| 4 | Lakeway / Bee Cave | `/locations/lakeway` | 80-150 |
| 5 | Dripping Springs | `/locations/dripping-springs` | 60-120 |
| 6 | Buda | `/locations/buda` | 60-100 |
| 7 | Hutto | `/locations/hutto` | 50-100 |
| 8 | Manor | `/locations/manor` | 40-80 |

**Unsplash image for each:** query `"[city name] Texas aerial neighborhood"` or `"Texas suburb neighborhood homes"`

---

## Step 4: Blog Posts to Write (Buyer-Intent Only)

The 3 local news posts (fire, marathon, lottery) and the panel saw post have very low buyer intent. Focus all new blog content on people actively looking to ship something.

**Priority posts to write next:**

| # | Title | URL | Unsplash Query | Est. Weekly Impressions |
|---|---|---|---|---|
| 1 | "Safe and Vault Moving Austin TX" | `/blog/safe-vault-moving-austin` | `"safe vault security moving"` | 80-150 |
| 2 | "How to Prepare Furniture for Shipping" | `/blog/prepare-furniture-for-shipping` | `"furniture wrapping packaging moving"` | 60-120 |
| 3 | "Moving to Austin? Ship Your Valuables First" | `/blog/moving-to-austin-ship-valuables` | `"moving boxes Austin Texas"` | 50-100 |
| 4 | "Antique Shipping Guide: Protecting Heirlooms" | `/blog/antique-shipping-guide` | `"antique furniture estate auction"` | 40-80 |
| 5 | "How to Choose a Specialty Shipping Company" | `/blog/how-to-choose-specialty-shipping` | `"shipping logistics professional team"` | 30-70 |

---

## Step 5: Internal Linking Audit

Many of our 70+ sub-pages are probably not linked from their parent pages. Every orphaned page = invisible to Google.

**Check each parent page links to ALL its children:**

- [ ] `/services/fine-art` links to all 9 fine-art sub-pages
- [ ] `/services/furniture` links to all 13 furniture sub-pages
- [ ] `/services/heavy-items` links to pool-table, motorcycle, heavy-equipment
- [ ] `/services/medical-equipment` links to all 5 sub-pages
- [ ] `/services/shipping-and-crating` links to all 9 sub-pages
- [ ] `/services/oversized-shipping` links to when-carriers-refuse
- [ ] `/blog` index page lists all 13 posts with links
- [ ] `/locations/round-rock`, `/cedar-park`, `/georgetown` each cross-link to the other two
- [ ] Homepage links to all 6 service parent pages
- [ ] `/services` index page links to all 6 service parent pages

---

## Step 6: Meta Title and Description Audit

Every page needs a unique, keyword-optimized title under 60 characters.

**Formula:**
- Service pages: `"[Item] Shipping Austin TX | Austin Crate & Freight"`
- Location pages: `"Specialty Shipping [City] TX | Austin Crate & Freight"`
- Blog posts: `"[Title] | Austin Crate & Freight"`

**Pages most likely to have weak meta titles (check these first):**
- All shipping-and-crating sub-pages (aerospace, semiconductor, audio, servers)
- All medical equipment sub-pages
- Location pages (Round Rock, Cedar Park, Georgetown)
- Blog posts (local news posts have no shipping keyword relevance)

---

## Week-by-Week Execution Schedule

### Week 1 (April 7-13): Images + Tier 1 Pages
- [ ] Create `lib/unsplash.ts` utility
- [ ] Add Unsplash images to 5 Tier 1 pages (furniture, heavy-items, fine-art, pool-table, homepage)
- [ ] Verify internal links on all parent service pages
- [ ] Run build, confirm no errors

### Week 2 (April 14-20): Sub-Page Image Sweep
- [ ] Add Unsplash images to all 9 fine-art sub-pages
- [ ] Add Unsplash images to all 13 furniture sub-pages
- [ ] Check word count on each — flag any under 300 words for expansion

### Week 3 (April 21-27): Shipping & Medical Images + Location Pages
- [ ] Add Unsplash images to all 9 shipping-and-crating sub-pages
- [ ] Add Unsplash images to all 5 medical equipment sub-pages
- [ ] Build `/locations/pflugerville` and `/locations/leander`

### Week 4 (April 28 - May 4): Location Pages + Blog
- [ ] Build `/locations/kyle`, `/locations/lakeway`, `/locations/dripping-springs`
- [ ] Write + publish blog post: "Safe and Vault Moving Austin TX"
- [ ] Meta title audit on all 70+ pages — fix any that are duplicate or missing keywords

### Week 5-6 (May 5-18): Remaining Locations + Blog
- [ ] Build `/locations/buda`, `/locations/hutto`, `/locations/manor`
- [ ] Write + publish 2 more buyer-intent blog posts
- [ ] Submit updated sitemap to Google Search Console
- [ ] Request indexing for all new pages in GSC

### Week 7-8 (May 19 - June 1): CTR Optimization
- [ ] Pull GSC data — identify pages with >200 impressions but <3% CTR
- [ ] Rewrite meta titles/descriptions for low-CTR pages
- [ ] Add FAQ schema to any blog posts missing it
- [ ] Verify LocalBusiness schema on all location pages

---

## Impression Checkpoints

| Date | Target | How to Check |
|---|---|---|
| April 30 | 2,000+/week | Google Search Console > Performance > Date range: Last 7 days |
| May 31 | 3,500+/week | GSC > Performance |
| June 30 | 5,000+/week | GSC > Performance |
| July 31 | 7,000+/week | GSC > Performance |
| September 30 | 10,000+/week | GSC > Performance |

---

## Quick Reference: Unsplash API Usage

```bash
# Test the API in terminal
curl "https://api.unsplash.com/photos/random?query=furniture+shipping&client_id=Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ"

# Search multiple photos
curl "https://api.unsplash.com/search/photos?query=fine+art+crating&per_page=6&client_id=Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ"
```

**Important:** Per Unsplash guidelines, always display photographer credit when showing their images. The `lib/unsplash.ts` utility above returns `credit` and `creditUrl` for this purpose.

---

*Austin Crate & Freight -- Step-by-Step 10K Impressions Plan*
*Created: April 7, 2026*
*Based on 70+ pages already live as of April 7, 2026*
