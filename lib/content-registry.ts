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
 * Last updated: 2026-02-19
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
    title: 'Austin Crate & Freight | White-Glove Specialty Shipping in Austin, TX',
    description:
      'Premier specialty shipping in Austin, Texas. White-glove services for fine art, designer furniture, and medical equipment. Museum-quality crating, HIPAA-compliant transport. Call (512) 240-9818.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-19',
    category: 'Core',
    tags: ['specialty shipping', 'white glove', 'Austin TX', 'fine art', 'furniture', 'medical equipment'],
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
    title: 'Buy a Crate | Custom Wood Crates Austin TX',
    description:
      'Order custom wood shipping crates from Austin Crate & Freight. Museum-quality crating built to spec for art, antiques, equipment, and more. Austin, TX local pickup and delivery.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Core',
    tags: ['buy a crate', 'custom crates', 'wood crates', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  // ── Services ────────────────────────────────────────────────────────────────
  {
    slug: '/services',
    title: 'Specialty Shipping Services | Austin Crate & Freight',
    description:
      'Expert specialty shipping services in Austin, TX: fine art crating, designer furniture transport, and HIPAA-compliant medical equipment shipping. Request a free quote today.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Services',
    tags: ['specialty shipping', 'fine art', 'furniture', 'medical equipment', 'Austin TX'],
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
    title: 'Designer Furniture Shipping Austin TX | White-Glove Transport',
    description:
      'White-glove designer furniture shipping and transport in Austin, Texas. Antiques, luxury pieces, and custom furnishings handled with museum-quality care. Serving Central Texas.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Services',
    tags: ['furniture shipping', 'designer furniture', 'white glove', 'antiques', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.8,
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

  // ── Locations ────────────────────────────────────────────────────────────────
  {
    slug: '/locations/round-rock',
    title: 'Specialty Shipping Round Rock TX | Austin Crate & Freight',
    description:
      'White-glove specialty shipping serving Round Rock, TX. Fine art crating, furniture transport, and medical equipment shipping. Local experts serving Round Rock and North Austin.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Locations',
    tags: ['Round Rock', 'specialty shipping', 'white glove', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/locations/cedar-park',
    title: 'Specialty Shipping Cedar Park TX | Austin Crate & Freight',
    description:
      'White-glove specialty shipping serving Cedar Park, TX. Fine art crating, furniture transport, and medical equipment shipping. Serving Cedar Park and Northwest Austin.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Locations',
    tags: ['Cedar Park', 'specialty shipping', 'white glove', 'Austin TX'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/locations/georgetown',
    title: 'Specialty Shipping Georgetown TX | Austin Crate & Freight',
    description:
      'White-glove specialty shipping serving Georgetown, TX. Fine art crating, furniture transport, and medical equipment shipping. Serving Georgetown and surrounding Williamson County.',
    publishDate: '2024-01-01',
    modifiedDate: '2026-02-01',
    category: 'Locations',
    tags: ['Georgetown', 'specialty shipping', 'white glove', 'Williamson County'],
    author: 'Austin Crate & Freight',
    priority: 0.7,
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
    modifiedDate: '2026-02-19',
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
