import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/shipping-and-crating/semiconductor-precision-tech'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Semiconductor & Precision Tech Equipment Shipping Austin TX',
    description:
      'Specialist shipping for semiconductor equipment, wafer inspection systems, probe stations, metrology tools, and ESD-sensitive devices in Austin, TX. Vibration-isolated crating and chain-of-custody documentation. Call (512) 240-9818.',
    keywords: [
      'semiconductor equipment shipping Austin TX',
      'precision tech shipping Austin',
      'wafer inspection equipment shipping Austin',
      'probe station shipping Austin TX',
      'metrology equipment shipping Austin',
      'ESD sensitive equipment crating Austin',
      'cleanroom equipment shipping Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function SemiconductorPrecisionTech() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Semiconductor & Precision Tech Equipment Shipping Austin TX',
    description:
      'Specialist shipping and crating for semiconductor equipment, wafer inspection systems, and precision instruments in Austin, TX.',
    serviceType: 'Precision Equipment Shipping',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Precision Tech · Austin, TX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Semiconductor & Precision Tech Equipment Shipping in Austin, TX</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Wafer inspection systems, probe stations, and precision metrology tools can lose calibration from a single vibration event during transit. We isolate, document, and deliver them as if re-calibration after arrival is not an option.
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
                  'Wafer inspection and metrology systems',
                  'Probe stations and wire bonders',
                  'Lithography and deposition equipment',
                  'PCB test and burn-in systems',
                  'Precision optical measurement instruments',
                  'Cleanroom-grade diagnostic tools',
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
                  'Full ESD protection throughout',
                  'Vibration-isolated custom crating',
                  'Cleanroom-compatible packaging materials',
                  'Chain-of-custody documentation at every handoff',
                  'Calibration-status logging at origin',
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
              Austin&apos;s semiconductor and advanced manufacturing sector moves equipment constantly between fabs, labs, and customer sites. We understand the technical handling requirements and the documentation those moves demand. Get a quote before your next tool move.
            </p>
          </div>
        </section>

        <ServicesGrid title="More Specialty Shipping Services" showSubLinks exclude={['/services/shipping-and-crating']} />

        <Footer />
      </div>
    </SEOWrapper>
  )
}
