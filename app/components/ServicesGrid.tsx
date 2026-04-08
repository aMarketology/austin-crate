/**
 * ServicesGrid   Reusable SEO-optimized service cards component.
 *
 * Displays all primary service categories with keyword-rich descriptions and
 * links to every service page and key sub-pages. Embed this on location pages,
 * the services index, and sub-pages to reinforce topical authority and
 * commercial-intent internal linking.
 *
 * Usage:
 *   import ServicesGrid from '@/app/components/ServicesGrid'
 *   <ServicesGrid />
 *   <ServicesGrid title="Specialty Shipping Services in Round Rock, TX" showSubLinks />
 */

import Link from 'next/link'

interface ServicesGridProps {
  /** Override the default section heading */
  title?: string
  /** Show sub-page links beneath each service card */
  showSubLinks?: boolean
  /** Exclude specific slugs (e.g., the current page's parent) */
  exclude?: string[]
}

const SERVICES = [
  {
    slug: '/services/furniture',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 10V7a2 2 0 012-2h14a2 2 0 012 2v3M3 10v8a1 1 0 001 1h16a1 1 0 001-1v-8M8 10V7m8 3V7" />
      </svg>
    ),
    title: 'Custom Furniture Shipping',
    description:
      'White-glove furniture shipping and custom crating across Austin and all of Texas. Sofas, dining sets, bedroom furniture, antiques, and pieces too large or fragile for standard carriers.',
    subLinks: [
      { label: 'Luxury Sofas & Sectionals', href: '/services/furniture/designer-sofas-sectionals' },
      { label: 'Dining Tables & Sets', href: '/services/furniture/dining-tables-sets' },
      { label: 'Bedroom Furniture', href: '/services/furniture/bedroom-furniture' },
      { label: 'Designer Chairs', href: '/services/furniture/designer-chairs' },
      { label: 'Cabinets & Credenzas', href: '/services/furniture/cabinets-credenzas' },
      { label: 'Grandfather Clock Shipping', href: '/services/furniture/grandfather-clock-shipping' },
      { label: 'Marble & Stone Furniture', href: '/services/furniture/marble-stone-furniture' },
      { label: 'Antique & Heirloom Furniture', href: '/services/furniture/antique-heirloom-furniture' },
      { label: 'Antique Furniture Shipping Texas', href: '/services/furniture/antique-furniture-shipping' },
      { label: 'Custom & Handmade Furniture', href: '/services/furniture/custom-handmade-furniture' },
      { label: 'Executive Office Furniture', href: '/services/furniture/executive-office-furniture' },
      { label: 'Outdoor & Patio Furniture', href: '/services/furniture/outdoor-patio-furniture' },
      { label: 'Oversized & Heavy Furniture', href: '/services/furniture/oversized-heavy-furniture' },
    ],
  },
  {
    slug: '/services/fine-art',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Fine Art Shipping & Crating',
    description:
      'Museum-quality crating and transport for paintings, sculptures, limited editions, and gallery collections. Climate-aware handling, custom foam inserts, and full-value insurance.',
    subLinks: [
      { label: 'Painting Shipping', href: '/services/fine-art/painting-shipping' },
      { label: 'Sculpture Shipping', href: '/services/fine-art/sculpture-shipping' },
      { label: 'Art Installation Shipping', href: '/services/fine-art/art-installation-shipping' },
      { label: 'Fragile Item Shipping', href: '/services/fine-art/fragile-item-shipping' },
      { label: 'Gallery Exhibit Shipping', href: '/services/fine-art/gallery-exhibit-shipping' },
      { label: 'Antique Artifacts', href: '/services/fine-art/antique-artifacts-shipping' },
      { label: 'Rare Collectibles', href: '/services/fine-art/rare-collectibles-shipping' },
      { label: 'Glass Art Shipping', href: '/services/fine-art/glass-art-shipping' },
      { label: 'Museum Display Shipping', href: '/services/fine-art/museum-display-shipping' },
    ],
  },
  {
    slug: '/services/heavy-items',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
      </svg>
    ),
    title: 'Heavy Item Pickup & Shipping',
    description:
      'Pickup and crating for items over 150 lbs that standard carriers refuse. Safe jacks, furniture dollies, liftgate service, and freight coordination   anywhere in Texas.',
    subLinks: [
      { label: 'Pool Table Shipping', href: '/services/heavy-items/pool-table-shipping' },
      { label: 'Motorcycle Crating', href: '/services/heavy-items/motorcycle-crating' },
      { label: 'Heavy Equipment Austin', href: '/services/heavy-items/heavy-equipment-austin' },
    ],
  },
  {
    slug: '/services/medical-equipment',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Medical Equipment Transport',
    description:
      'HIPAA-aware shipping for surgical instruments, imaging machines, lab equipment, and sensitive diagnostic devices. Secure custom crating, tamper-evident seals, and chain-of-custody documentation.',
    subLinks: [
      { label: 'Imaging Equipment', href: '/services/medical-equipment/imaging-equipment' },
      { label: 'Lab Equipment', href: '/services/medical-equipment/lab-equipment' },
      { label: 'Diagnostic Devices', href: '/services/medical-equipment/diagnostic-devices' },
      { label: 'Surgical Equipment', href: '/services/medical-equipment/surgical-equipment' },
      { label: 'Sensitive Electronics', href: '/services/medical-equipment/sensitive-electronics' },
    ],
  },
  {
    slug: '/services/shipping-and-crating',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Specialty Shipping & Custom Crating',
    description:
      'Custom crating and freight for tech equipment, IT hardware, audio gear, large TVs, machinery, trade show displays, aerospace parts, and oversized one-off items that standard carriers refuse.',
    subLinks: [
      { label: 'Servers & IT Hardware', href: '/services/shipping-and-crating/servers-it-hardware' },
      { label: 'Audio Equipment & Studio Gear', href: '/services/shipping-and-crating/audio-equipment-studio-gear' },
      { label: 'Large TVs & Display Panels', href: '/services/shipping-and-crating/large-tvs-display-panels' },
      { label: 'Semiconductor & Precision Tech', href: '/services/shipping-and-crating/semiconductor-precision-tech' },
      { label: 'Machinery & Manufacturing Equipment', href: '/services/shipping-and-crating/machinery-manufacturing-equipment' },
      { label: 'Trade Show Booths & Displays', href: '/services/shipping-and-crating/trade-show-booths-displays' },
      { label: 'Large Custom-Built Objects', href: '/services/shipping-and-crating/large-custom-built-objects' },
      { label: 'Aerospace & Specialty Parts', href: '/services/shipping-and-crating/aerospace-specialty-parts' },
      { label: 'Oversized One-Off Items', href: '/services/shipping-and-crating/oversized-one-off-items' },
    ],
  },
  {
    slug: '/services/oversized-shipping',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      </svg>
    ),
    title: 'Oversized Item Shipping',
    description:
      'Custom freight solutions for items too large or heavy for FedEx and UPS. Trade show displays, industrial equipment, large sculptures, and commercial fixtures shipped safely across the US.',
    subLinks: [
      { label: 'When Carriers Refuse Your Item', href: '/services/oversized-shipping/when-carriers-refuse' },
    ],
  },
]

export default function ServicesGrid({
  title = 'Our Specialty Shipping Services',
  showSubLinks = false,
  exclude = [],
}: ServicesGridProps) {
  const filtered = SERVICES.filter((s) => !exclude.includes(s.slug))

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">{title}</h2>
        <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
          Austin Crate &amp; Freight serves the entire Austin metro   custom crating, white-glove pickup, and specialty freight for items that standard carriers cannot handle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((svc) => (
            <div
              key={svc.slug}
              className="group p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-emerald hover:shadow-md transition-all duration-200"
            >
              <div className="text-emerald mb-3">{svc.icon}</div>
              <Link href={svc.slug} className="block">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-emerald transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
              </Link>
              {showSubLinks && svc.subLinks.length > 0 && (
                <ul className="mt-4 space-y-1 border-t border-gray-200 pt-3">
                  {svc.subLinks.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="text-xs text-gray-500 hover:text-emerald transition-colors"
                      >
                        {sub.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:underline"
          >
            View all services and pricing →
          </Link>
        </div>
      </div>
    </section>
  )
}
