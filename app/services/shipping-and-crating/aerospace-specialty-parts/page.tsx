import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/shipping-and-crating/aerospace-specialty-parts'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Aerospace & Specialty Parts Shipping Austin TX',
    description:
      'Specialist crating and freight for aerospace components, avionics assemblies, composite panels, tooling fixtures, and precision hardware in Austin, TX. Chain-of-custody documentation and ESD protection. Call (512) 240-9818.',
    keywords: [
      'aerospace parts shipping Austin TX',
      'aerospace component shipping Austin',
      'avionics shipping Austin TX',
      'composite panel shipping Austin',
      'specialty parts crating Austin TX',
      'precision hardware shipping Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function AerospaceSpecialtyParts() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Aerospace & Specialty Parts Shipping Austin TX',
    description:
      'Specialist crating and freight for aerospace components, avionics assemblies, composite panels, and precision hardware in Austin, TX.',
    serviceType: 'Aerospace Parts Shipping',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Aerospace Shipping · Austin, TX</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Aerospace & Specialty Parts Shipping in Austin, TX</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Aerospace parts often carry traceability requirements that extend into how they are packaged and shipped. We provide the documentation chain, the ESD and vibration protection, and the chain-of-custody records to support those requirements.
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
                  'Composite structural panels and fairings',
                  'Avionics assemblies and avionics racks',
                  'Precision tooling fixtures and jigs',
                  'Satellite and spacecraft components',
                  'Structural test hardware and specimens',
                  'Precision measurement and test equipment',
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
                  'Chain-of-custody documentation at every handoff',
                  'ESD protection and vibration isolation',
                  'Dimension and weight certification',
                  'Compliance-ready packing documentation',
                  'Temperature and humidity logging for sensitive assemblies',
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
              Austin&apos;s growing aerospace and defense sector, from SpaceX Starbase logistics to private aerospace firms, demands shipping partners who understand the paperwork as well as the packaging. We do both. Call for a quote on your next parts move.
            </p>
          </div>
        </section>

        <ServicesGrid title="More Specialty Shipping Services" showSubLinks exclude={['/services/shipping-and-crating']} />

        <Footer />
      </div>
    </SEOWrapper>
  )
}
