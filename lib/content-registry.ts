/**
 * Content Registry — Single source of truth for all page metadata.
 *
 * Every URL on the site should have an entry here. The sitemap, SEOWrapper,
 * structured data, and related-content systems all pull from this file.
 *
 * When you publish or edit a page:
 *   1. Add or update the entry below
 *   2. Set `modifiedDate` to today's date
 *
 * Last updated: 2026-02-26
 */

export interface ContentEntry {
  /** URL path, e.g. "/blog/austin-marathon-2026" */
  slug: string
  /** Full page title (also used as OG title) */
  title: string
  /** Meta description — keep under 160 characters */
  description: string
  /** ISO date string "YYYY-MM-DD" */
  publishDate: string
  /** ISO date string "YYYY-MM-DD" — update on every edit */
  modifiedDate: string
  /** Primary category for related-content matching */
  category: 'Services' | 'Locations' | 'Resources' | 'Blog' | 'Core'
  /** Topic tags for related-content matching */
  tags: string[]
  /** Author display name */
  author: string
  /** Sitemap priority 0.0–1.0 */
  priority: number
  /** How often this page changes (sitemap hint) */
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
}

export const contentRegistry: ContentEntry[] = [
  // ── Core Pages ──────────────────────────────────────────────────────────────
  {
    slug: '/',
    title: 'Austin Specialty Shipping | Custom Crating & Heavy Item Pickup | Austin Crate & Freight',
    description:
      'Austin, Texas specialty shipping company. White-glove services for fine art, custom furniture shipping, heavy package pickup, and medical equipment transport. Museum-quality crating. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Core',
    tags: ['specialty shipping', 'white glove', 'Austin TX', 'fine art', 'furniture', 'medical equipment', 'heavy items', 'custom crating'],
    author: 'Austin Crate & Freight',
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    slug: '/about',
    title: 'About Austin Crate & Freight | Specialty Shipping Experts Since 2010',
    description:
      "Learn about Austin Crate & Freight, Central Texas's premier white-glove specialty shipping company. Serving Austin since 2010 with museum-quality care for art, furniture, and medical equipment.",
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['about', 'Austin Crate', 'company history', 'specialty shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/contact',
    title: 'Contact Austin Crate & Freight | Get a Free Quote',
    description:
      'Contact Austin Crate & Freight for a free quote on specialty shipping. Call (512) 240-9818 or send us a message. Serving Austin, Round Rock, Cedar Park & Central Texas.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['contact', 'quote', 'Austin TX', 'specialty shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/gallery',
    title: 'Gallery | Austin Crate & Freight Specialty Shipping Work',
    description:
      'Browse our gallery of specialty shipping projects — custom crates for fine art, designer furniture, and medical equipment. See the quality and craftsmanship behind every shipment.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['gallery', 'custom crating', 'fine art', 'furniture', 'medical equipment'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/buy-a-crate',
    title: 'Custom Wood Shipping Crates Austin TX | Buy a Crate | Austin Crate & Freight',
    description:
      'Order custom wood shipping crates in Austin, Texas. Museum-quality crating for fine art, heavy items, oversized packages, and furniture. Built to spec, fully insured. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Core',
    tags: ['custom crating Austin', 'wood crates', 'custom shipping crate', 'crating near me', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },

  // ── Services ────────────────────────────────────────────────────────────────
  {
    slug: '/services',
    title: 'Specialty Shipping Services Austin TX | Furniture, Art & Heavy Items | Austin Crate & Freight',
    description:
      'Austin, Texas specialty shipping services. Custom furniture shipping, heavy item pickup, fine art crating, oversized freight, and medical equipment transport. White-glove, fully insured.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['specialty shipping', 'fine art', 'furniture', 'medical equipment', 'heavy items', 'oversized shipping', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/services/fine-art',
    title: 'Fine Art Shipping Austin TX | Museum-Quality Crating & Transport',
    description:
      'Premier fine art shipping in Austin, Texas. Museum-quality crating, climate-controlled transport, expert art handlers, and full insurance. Serving galleries, collectors, and museums across Central Texas.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Services',
    tags: ['fine art shipping', 'art crating', 'museum transport', 'climate controlled', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/furniture',
    title: 'Custom Furniture Shipping Austin TX | White-Glove Crating & Transport',
    description:
      'Custom furniture shipping in Austin, Texas. White-glove pickup, expert disassembly, protective crating, and precision reassembly for designer, antique & heavy furniture. Scratch-free guarantee.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['custom furniture shipping', 'furniture crating', 'heavy furniture pickup', 'antique furniture shipping', 'designer furniture', 'white glove', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/medical-equipment',
    title: 'Medical Equipment Transport Austin TX | HIPAA-Compliant Shipping',
    description:
      'HIPAA-compliant medical equipment transport in Austin, TX. Secure shipping for surgical instruments, imaging machines, lab equipment, and sensitive devices. Fully insured and bonded.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Services',
    tags: ['medical equipment', 'HIPAA', 'medical transport', 'surgical instruments', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/services/heavy-items',
    title: 'Heavy Item Pickup & Shipping Austin TX | Austin Crate & Freight',
    description:
      'Heavy package pickup and oversized item shipping in Austin, TX. Custom crating for furniture, equipment, and machinery. Free local pickup. Call (512) 240-9818.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['heavy items', 'heavy package pickup', 'oversized shipping', 'Austin TX', 'custom crating', 'specialty shipping'],
    author: 'Austin Crate & Freight',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/services/oversized-shipping',
    title: 'Oversized Item Shipping Austin TX | Large Package Transport',
    description:
      'Ship oversized items from Austin, Texas. Custom crating and freight for items too large for FedEx or UPS. White-glove pickup, fully insured. Free quotes.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    category: 'Services',
    tags: ['oversized shipping', 'large items', 'freight', 'Austin TX', 'custom crating', 'bulky items'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'weekly',
  },

  // ── Locations ────────────────────────────────────────────────────────────────
  {
    slug: '/locations/round-rock',
    title: 'Specialty Shipping Round Rock TX | Custom Furniture & Heavy Items | Austin Crate',
    description:
      'White-glove specialty shipping in Round Rock, TX — custom furniture shipping, heavy package pickup, fine art crating, oversized item transport & medical equipment. Local experts.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Locations',
    tags: ['Round Rock', 'specialty shipping', 'custom furniture shipping', 'heavy package pickup', 'oversized shipping', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/locations/cedar-park',
    title: 'Specialty Shipping Cedar Park TX | Custom Furniture & Heavy Items | Austin Crate',
    description:
      'Professional specialty shipping in Cedar Park, TX — custom furniture shipping, heavy package pickup, fine art crating, oversized item transport & medical equipment shipping.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Locations',
    tags: ['Cedar Park', 'specialty shipping', 'custom furniture shipping', 'heavy package pickup', 'oversized shipping', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/locations/georgetown',
    title: 'Specialty Shipping Georgetown TX | Custom Furniture & Heavy Items | Austin Crate',
    description:
      'Expert specialty shipping in Georgetown, TX — custom furniture shipping, heavy package pickup, fine art crating, oversized item transport & medical equipment. Serving Williamson County.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Locations',
    tags: ['Georgetown', 'specialty shipping', 'custom furniture shipping', 'heavy package pickup', 'oversized shipping', 'Williamson County'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },

  // ── Resources ────────────────────────────────────────────────────────────────
  {
    slug: '/resources',
    title: 'Shipping Resources & Guides | Austin Crate & Freight',
    description:
      'Expert guides and resources for shipping fine art, furniture, and medical equipment. Learn how to prepare items for shipment, understand insurance, and more.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-10',
    category: 'Resources',
    tags: ['shipping guides', 'resources', 'how to ship', 'fine art', 'furniture'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'weekly',
  },
  {
    slug: '/resources/prepare-artwork',
    title: 'How to Prepare Artwork for Shipping | Austin Crate & Freight',
    description:
      'Step-by-step guide to preparing paintings, sculptures, and artwork for safe shipping. Tips from the experts at Austin Crate & Freight for protecting your valuable art.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Resources',
    tags: ['prepare artwork', 'art shipping tips', 'paintings', 'sculptures', 'how to'],
    author: 'Austin Crate & Freight',
    priority: 0.5,
    changeFrequency: 'monthly',
  },

  // ── Blog ─────────────────────────────────────────────────────────────────────
  {
    slug: '/blog',
    title: 'Austin Local News & Shipping Tips | Austin Crate & Freight Blog',
    description:
      'Austin local news, industry updates, and expert tips on specialty shipping for fine art, furniture, and medical equipment from Austin Crate & Freight.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-26',
    category: 'Blog',
    tags: ['blog', 'Austin news', 'shipping tips', 'local'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'weekly',
  },
  {
    slug: '/blog/apartment-fire-se-austin',
    title: 'Partial Structural Collapse Reported in SE Austin Abandoned Apartment Fire',
    description:
      'Austin Fire Department crews responded to a major fire at an abandoned apartment complex in Southeast Austin where a partial structural collapse was reported. No injuries confirmed.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'Blog',
    tags: ['Austin news', 'fire', 'Southeast Austin', 'Austin Fire Department', 'local news'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/austin-marathon-2026',
    title: 'Austin Marathon 2026: Everything You Need to Know',
    description:
      'Complete guide to the 2026 Austin Marathon on February 15, 2026. Course map, road closures, parking, tips for spectators, and race weekend schedule for 30,000 runners.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'Blog',
    tags: ['Austin Marathon', 'Austin events', 'running', '2026', 'road closures'],
    author: 'Austin Crate & Freight',
    priority: 0.6,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/lottery-ticket-round-rock',
    title: '$1 Million Scratch Lottery Ticket Sold at Round Rock Gas Station',
    description:
      'A lucky lottery player in Round Rock is $1 million richer after purchasing a winning scratch-off ticket at a Chevron station on I-35. Texas Lottery Commission confirmed the winning ticket.',
    publishDate: '2026-02-03',
    modifiedDate: '2026-02-03',
    category: 'Blog',
    tags: ['lottery', 'Round Rock', 'Texas Lottery', 'local news', 'Austin area'],
    author: 'Austin Crate & Freight',
    priority: 0.5,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog/cost-to-ship-heavy-items-austin',
    title: 'How Much Does It Cost to Ship Heavy Items in Austin? (2026 Price Guide)',
    description:
      'Complete pricing guide for shipping heavy items in Austin, TX. Compare costs for heavy package pickup, custom furniture shipping, oversized item transport, and freight solutions.',
    publishDate: '2026-02-26',
    modifiedDate: '2026-02-26',
    category: 'Blog',
    tags: ['cost to ship heavy items Austin', 'heavy package pickup', 'custom furniture shipping', 'oversized shipping', 'pricing guide', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
]

/**
 * Lookup a single entry by slug.
 * Returns `undefined` if the slug isn't registered.
 */
export function getEntry(slug: string): ContentEntry | undefined {
  return contentRegistry.find((e) => e.slug === slug)
}

/**
 * Return entries that share at least one tag or the same category,
 * sorted by relevance score, excluding the current slug.
 */
export function getRelatedEntries(
  currentSlug: string,
  { limit = 5 }: { limit?: number } = {}
): ContentEntry[] {
  const current = getEntry(currentSlug)
  if (!current) return []

  return contentRegistry
    .filter((e) => e.slug !== currentSlug)
    .map((e) => ({
      entry: e,
      score:
        (e.category === current.category ? 3 : 0) +
        e.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => entry)
}
