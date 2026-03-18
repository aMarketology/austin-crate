import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/shipping-and-crating/large-custom-built-objects'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Large Custom-Built Object Shipping Austin TX',
    description:
      'Specialist shipping for art installations, film props, architectural models, custom fabrications, and branded installations in Austin, TX. Built-to-fit custom crating for non-standard shapes. Call (512) 240-9818.',
    keywords: [
      'custom built object shipping Austin TX',
      'art installation shipping Austin',
      'prop shipping Austin TX',
      'custom fabrication shipping Austin',
      'architectural model shipping Austin TX',
      'oversized custom object crating Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function LargeCustomBuiltObjects() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Large Custom-Built Object Shipping Austin TX',
    description:
      'Built-to-fit custom crating and specialty shipping for art installations, props, architectural models, and custom fabrications in Austin, TX.',
    serviceType: 'Custom Object Shipping',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Custom Object Shipping · Austin, TX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Large Custom-Built Object Shipping in Austin, TX</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              No two custom-built objects are the same — and no standard packaging solution fits them. We assess the piece, design the crate around it, and ship it. Full stop.
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
                  'Sculptural art installations',
                  'Film and TV production props',
                  'Architectural and interior models',
                  'Custom-fabricated retail fixtures',
                  'Branded experiential installations',
                  'Functional prototypes and R&D units',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald mt-1 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Protect It</h2>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Built-to-fit custom crating for non-standard shapes',
                  'Engineer-designed internal support geometry',
                  'Condition photo documentation at origin',
                  'Custom foam and blocking for point loads',
                  'Fragile component inventory logging',
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
              If you built it from scratch, we can ship it. Austin&apos;s creative community — artists, fabricators, prop houses, makers — trusts us to get one-of-a-kind pieces to their destination without damage, on time, and with full documentation.
            </p>
          </div>
        </section>

        <ServicesGrid title="More Specialty Shipping Services" showSubLinks exclude={['/services/shipping-and-crating']} />

        <Footer />
      </div>
    </SEOWrapper>
  )
}
