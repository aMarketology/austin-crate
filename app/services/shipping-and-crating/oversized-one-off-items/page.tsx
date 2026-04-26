import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/shipping-and-crating/oversized-one-off-items'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Oversized & One-Off Item Shipping Austin TX, When UPS & FedEx Say No',
    description:
      'Custom crating and freight for oversized, overweight, or one-of-a-kind items that standard carriers refuse in Austin, TX. We quote it, crate it, and ship it, no matter the size or shape. Call (512) 240-9818.',
    keywords: [
      'oversized item shipping Austin TX',
      'when UPS refuses to ship Austin',
      'overweight package shipping Austin',
      'one off item crating Austin TX',
      'carrier refused item shipping Austin',
      'custom freight Austin TX',
      'items carriers refuse Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function OversizedOneOffItems() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Oversized & One-Off Item Shipping Austin TX',
    description:
      'Custom crating and freight for oversized, overweight, and one-of-a-kind items that standard carriers refuse in Austin, TX.',
    serviceType: 'Oversized Item Shipping',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/services/shipping-and-crating" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Shipping & Crating Services
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Oversized Shipping · Austin, TX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Oversized One-Off Item Shipping in Austin, TX, When UPS & FedEx Say No</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              If the item is over 150 lbs, over 165&quot; combined dimensions, or just too unusual for a standard carrier to handle, we quote it, crate it, and ship it. Every single one is a custom job, and that&apos;s exactly what we do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Ship</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Items over 150 lbs or exceeding carrier size limits',
                  'Unusual-shape items with no standard packaging solution',
                  'High-value one-of-a-kind pieces',
                  'Items that standard carriers have refused',
                  'Pieces requiring liftgate, crane, or specialty handling',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Handle It</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Custom-assessed per item, no boilerplate',
                  'One project manager end-to-end',
                  'Built-to-fit crating every time',
                  'Freight carrier matched to size and value',
                  'Fully insured door-to-door',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-gray-700">
              If UPS, FedEx, and your regular freight broker have all said no, or said yes at a number that doesn&apos;t make sense, call us. We deal with these situations every week, and we have never met an item we couldn&apos;t figure out how to ship.
            </p>
          </div>
        </section>

        <ServicesGrid title="More Specialty Shipping Services" showSubLinks exclude={['/services/shipping-and-crating']} />

        <Footer />
      </div>
    </SEOWrapper>
  )
}
