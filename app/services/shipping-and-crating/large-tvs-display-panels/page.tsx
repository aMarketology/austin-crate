import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/shipping-and-crating/large-tvs-display-panels'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Large TV & Display Panel Shipping Austin TX',
    description:
      'Specialist shipping for 65"+ TVs, OLED/QLED panels, LED video walls, digital signage, and commercial displays in Austin, TX. Vertical transport and shock-isolated panel crating. Call (512) 240-9818.',
    keywords: [
      'large TV shipping Austin TX',
      'flat screen TV shipping Austin',
      'OLED TV shipping Austin TX',
      'LED video wall shipping Austin',
      'display panel crating Austin TX',
      'commercial display shipping Austin',
      'digital signage shipping Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function LargeTVsDisplayPanels() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Large TV & Display Panel Shipping Austin TX',
    description:
      'Specialist shipping for large flat-screen TVs, LED video walls, digital signage, and commercial displays in Austin, TX.',
    serviceType: 'Electronics Shipping',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Display Shipping · Austin, TX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Large TV & Display Panel Shipping in Austin, TX</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              A 75" OLED panel has one weak point   its screen. We keep it vertical, armored at every corner and edge, and locked inside a shock-isolated crate from pickup to delivery, with no carrier handling the panel flat.
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
                  '65"+ flat-screen TVs (OLED, QLED, LED)',
                  'LED video wall panels and tile modules',
                  'Digital signage and kiosk displays',
                  'Commercial monitors and touch panels',
                  'Motorized and fixed-frame projector screens',
                  'Home theater projection systems',
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
                  'Vertical-only transport throughout',
                  'Screen-surface protective film',
                  'Corner and edge armoring',
                  'Shock-isolated panel crates',
                  'Panel-spec condition documentation',
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
              Large flat panels fail under torsional stress and impact at unprotected corners. We build crates that hold the panel in-plane, eliminate racking, and prevent any point loading on the screen surface   the single most common cause of transit breakage.
            </p>
          </div>
        </section>

        <ServicesGrid title="More Specialty Shipping Services" showSubLinks exclude={['/services/shipping-and-crating']} />

        <Footer />
      </div>
    </SEOWrapper>
  )
}
