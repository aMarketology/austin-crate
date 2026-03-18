import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/shipping-and-crating'

export const metadata = generateServiceMetadata({
  serviceName: 'Specialty Shipping & Custom Crating Austin TX',
  description:
    'Custom crating and specialty freight for tech equipment, IT hardware, audio gear, large TVs, machinery, trade show displays, and oversized one-off items in Austin, TX. Call (512) 240-9818.',
  keywords: [
    'specialty shipping Austin TX',
    'custom crating Austin Texas',
    'tech equipment shipping Austin',
    'machinery shipping Austin TX',
    'trade show shipping Austin',
    'oversized item crating Austin',
    'IT hardware shipping Austin',
    'audio equipment crating Austin TX',
  ],
  serviceUrl: SLUG,
})

export default function ShippingAndCrating() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Specialty Shipping & Custom Crating Austin TX',
    description:
      'Custom crating and specialty freight for tech equipment, IT hardware, audio gear, large TVs, machinery, trade show displays, and oversized items in Austin, TX.',
    serviceType: 'Specialty Shipping',
  })

  const techServices = [
    {
      href: '/services/shipping-and-crating/servers-it-hardware',
      title: 'Servers & IT Hardware',
      desc: 'Rack servers, storage arrays, networking gear — anti-static crating and component logging.',
    },
    {
      href: '/services/shipping-and-crating/audio-equipment-studio-gear',
      title: 'Audio Equipment & Studio Gear',
      desc: 'Studio monitors, mixing consoles, outboard rack gear, PA systems, and instruments.',
    },
    {
      href: '/services/shipping-and-crating/large-tvs-display-panels',
      title: 'Large TVs & Display Panels',
      desc: '65"+ flat panels, LED video walls, digital signage, and commercial displays.',
    },
    {
      href: '/services/shipping-and-crating/semiconductor-precision-tech',
      title: 'Semiconductor & Precision Tech',
      desc: 'Wafer inspection, probe stations, metrology tools, and ESD-sensitive equipment.',
    },
  ]

  const heavyServices = [
    {
      href: '/services/shipping-and-crating/machinery-manufacturing-equipment',
      title: 'Machinery & Manufacturing Equipment',
      desc: 'CNC machines, laser cutters, presses, robotic cells, and industrial equipment.',
    },
    {
      href: '/services/shipping-and-crating/trade-show-booths-displays',
      title: 'Trade Show Booths & Displays',
      desc: 'Modular exhibits, LED lightboxes, pop-up displays, and demo units on deadline.',
    },
    {
      href: '/services/shipping-and-crating/large-custom-built-objects',
      title: 'Large Custom-Built Objects',
      desc: 'Art installations, props, architectural models, prototypes, and custom fabrications.',
    },
    {
      href: '/services/shipping-and-crating/aerospace-specialty-parts',
      title: 'Aerospace & Specialty Parts',
      desc: 'Composite panels, avionics assemblies, tooling fixtures, and precision hardware.',
    },
    {
      href: '/services/shipping-and-crating/oversized-one-off-items',
      title: 'Oversized One-Off Items',
      desc: 'Anything UPS and FedEx refuse — custom-quoted and custom-crated every time.',
    },
  ]

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Custom Crating in Austin, TX</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              When standard carriers say no — or when your item is too valuable to risk them saying yes — Austin Crate &amp; Freight builds the crate, coordinates the freight, and gets it there.
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

        {/* Tech & Electronics */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tech & Electronics Shipping</h2>
            <p className="text-gray-600 mb-8">
              ESD-safe packaging, shock-isolated crating, and component-level documentation for high-value tech and precision equipment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {techServices.map(({ href, title, desc }) => (
                <a
                  key={href}
                  href={href}
                  className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-emerald-600 group-hover:underline">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Heavy / Industrial */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Heavy, Industrial & Oversized Shipping</h2>
            <p className="text-gray-600 mb-8">
              Heavy rigging, freight coordination, and built-to-fit crates for items that defy standard carrier limits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {heavyServices.map(({ href, title, desc }) => (
                <a
                  key={href}
                  href={href}
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-emerald-600 group-hover:underline">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Specialty Shipping Services" showSubLinks />

        <Footer />
      </div>
    </SEOWrapper>
  )
}
