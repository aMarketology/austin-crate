import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

/**
 * BlogSeoAtx   Google News-optimised blog layout for Austin Crate & Freight
 *
 * Props:
 *   title        - Article H1 and <title> text
 *   date         - Human-readable publish date (e.g. "March 25, 2026")
 *   isoDate      - ISO 8601 date for structured data (e.g. "2026-03-25")
 *   author       - Author display name (defaults to "Austin Crate & Freight")
 *   category     - Article category badge (e.g. "Shipping Guide")
 *   readTime     - Estimated read time (e.g. "5 min read")
 *   description  - Article sub-headline / lead sentence shown in hero
 *   children     - The article body content (React nodes)
 */

interface BlogSeoAtxProps {
  title: string
  date: string
  isoDate: string
  author?: string
  category?: string
  readTime?: string
  description?: string
  children: React.ReactNode
}

const ALL_SERVICES = [
  {
    label: 'Custom Furniture Shipping',
    href: '/services/furniture',
    subs: [
      { label: 'Luxury Sofas & Sectionals', href: '/services/furniture/designer-sofas-sectionals' },
      { label: 'Dining Tables & Sets', href: '/services/furniture/dining-tables-sets' },
      { label: 'Antique & Heirloom Furniture', href: '/services/furniture/antique-heirloom-furniture' },
      { label: 'Marble & Stone Furniture', href: '/services/furniture/marble-stone-furniture' },
      { label: 'Grandfather Clock Shipping', href: '/services/furniture/grandfather-clock-shipping' },
    ],
  },
  {
    label: 'Fine Art Shipping & Crating',
    href: '/services/fine-art',
    subs: [
      { label: 'Painting Shipping', href: '/services/fine-art/painting-shipping' },
      { label: 'Sculpture Shipping', href: '/services/fine-art/sculpture-shipping' },
      { label: 'Gallery Exhibit Shipping', href: '/services/fine-art/gallery-exhibit-shipping' },
      { label: 'Rare Collectibles', href: '/services/fine-art/rare-collectibles-shipping' },
      { label: 'Glass Art Shipping', href: '/services/fine-art/glass-art-shipping' },
    ],
  },
  {
    label: 'Medical Equipment Transport',
    href: '/services/medical-equipment',
    subs: [
      { label: 'Imaging Equipment', href: '/services/medical-equipment/imaging-equipment' },
      { label: 'Lab Equipment', href: '/services/medical-equipment/lab-equipment' },
      { label: 'Surgical Equipment', href: '/services/medical-equipment/surgical-equipment' },
      { label: 'Sensitive Electronics', href: '/services/medical-equipment/sensitive-electronics' },
    ],
  },
  {
    label: 'Specialty Shipping & Crating',
    href: '/services/shipping-and-crating',
    subs: [
      { label: 'Servers & IT Hardware', href: '/services/shipping-and-crating/servers-it-hardware' },
      { label: 'Audio Equipment & Studio Gear', href: '/services/shipping-and-crating/audio-equipment-studio-gear' },
      { label: 'Large TVs & Display Panels', href: '/services/shipping-and-crating/large-tvs-display-panels' },
      { label: 'Trade Show Booths', href: '/services/shipping-and-crating/trade-show-booths-displays' },
      { label: 'Machinery & Manufacturing', href: '/services/shipping-and-crating/machinery-manufacturing-equipment' },
    ],
  },
  {
    label: 'Heavy Item Pickup & Shipping',
    href: '/services/heavy-items',
    subs: [
      { label: 'Pool Table Shipping', href: '/services/heavy-items/pool-table-shipping' },
      { label: 'Motorcycle Crating', href: '/services/heavy-items/motorcycle-crating' },
      { label: 'Heavy Equipment Austin', href: '/services/heavy-items/heavy-equipment-austin' },
    ],
  },
  {
    label: 'Oversized Item Shipping',
    href: '/services/oversized-shipping',
    subs: [],
  },
]

export default function BlogSeoAtx({
  title,
  date,
  isoDate,
  author = 'Austin Crate & Freight',
  category,
  readTime,
  description,
  children,
}: BlogSeoAtxProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      {/* ── Hero / Article Header ─────────────────────────────────────────── */}
      <header className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-emerald hover:underline mb-5"
          >
            ← Back to Blog
          </Link>

          {/* Category badge */}
          {category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald/20 border border-emerald/40 text-emerald text-xs font-semibold uppercase tracking-widest">
                {category}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>

          {description && (
            <p className="text-lg text-grey-300 mb-6 max-w-3xl">{description}</p>
          )}

          {/* Meta row   author, date, read time (Google News signals) */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-grey-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>
                By <span className="text-white font-medium">{author}</span>
              </span>
            </span>

            <time
              dateTime={isoDate}
              className="flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </time>

            {readTime && (
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readTime}
              </span>
            )}

            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Austin, TX
            </span>
          </div>
        </div>
      </header>

      {/* ── Body: article + sidebar ──────────────────────────────────────── */}
      <div className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Article content */}
          <article className="flex-1 min-w-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-emerald prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-emerald prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1
            prose-li:text-gray-700">
            {children}

            {/* Author byline footer */}
            <div className="not-prose mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center text-white font-bold text-lg shrink-0">
                AC
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{author}</p>
                <p className="text-gray-500 text-sm">
                  Austin Crate &amp; Freight   specialty crating and white-glove shipping in Austin, TX since 2018.
                </p>
              </div>
            </div>
          </article>

          {/* ── Sidebar ─────────────────────────────────────────────────── */}
          <aside className="lg:w-72 shrink-0 space-y-6">

            {/* CTA card */}
            <div className="bg-gradient-to-br from-grey-900 to-grey-800 text-white rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-2">Need Something Shipped?</h2>
              <p className="text-grey-300 text-sm mb-5 leading-relaxed">
                Free quotes for custom crating, white-glove pickup, and specialty freight anywhere in Central Texas.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-emerald hover:bg-emerald/90 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5122409818"
                className="block text-center mt-3 text-sm text-grey-300 hover:text-white transition-colors"
              >
                📞 (512) 240-9818
              </a>
            </div>

            {/* Services nav */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Our Services</h2>
              <nav className="space-y-4">
                {ALL_SERVICES.map((svc) => (
                  <div key={svc.href}>
                    <Link
                      href={svc.href}
                      className="block font-semibold text-sm text-gray-800 hover:text-emerald transition-colors"
                    >
                      {svc.label} →
                    </Link>
                    {svc.subs.length > 0 && (
                      <ul className="mt-1.5 ml-3 space-y-1">
                        {svc.subs.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="text-xs text-gray-500 hover:text-emerald transition-colors"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <Link
                  href="/services"
                  className="text-xs font-medium text-emerald hover:underline"
                >
                  View all services →
                </Link>
              </div>
            </div>

            {/* Back to blog */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">More Articles</h2>
              <Link
                href="/blog"
                className="text-sm text-emerald font-medium hover:underline"
              >
                ← Back to Blog
              </Link>
            </div>

          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}
