import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Pflugerville',
  description: 'Specialty shipping & custom crating in Pflugerville, TX. Furniture shipping, fine art transport, heavy item pickup, and medical equipment shipping. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Pflugerville TX',
    'specialty shipping Pflugerville Texas',
    'specialty crating Pflugerville TX',
    'furniture shipping Pflugerville',
    'furniture crating Pflugerville TX',
    'fine art shipping Pflugerville',
    'heavy item pickup Pflugerville TX',
    'oversized shipping Pflugerville',
    'white glove shipping Pflugerville TX',
    'Pflugerville shipping company',
    'Pflugerville crating',
    'custom crating Pflugerville Texas',
  ],
  locationUrl: '/locations/pflugerville',
})

export default function Pflugerville() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Pflugerville',
    description: 'Specialty shipping services in Pflugerville, Texas',
    latitude: 30.4385,
    longitude: -97.6200,
    image: '/1.jpg',
    serviceUrl: '/locations/pflugerville',
  })

  return (
    <SEOWrapper slug="/locations/pflugerville">
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Pflugerville, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Pflugerville, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight brings expert specialty shipping and custom crating to Pflugerville. From Stone Hill Town Center to Cele Road, we serve Pflugerville homes and businesses with furniture shipping and crating, fine art transport, heavy item pickup, and medical equipment delivery — all with museum-quality white-glove care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(512) 240-9818"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 rounded-lg font-medium text-white hover:bg-emerald-700 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (512) 240-9818
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-lg font-medium text-gray-200 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl">
              <Image
                src="/1.jpg"
                alt="Specialty shipping and custom crating in Pflugerville Texas by Austin Crate & Freight"
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Pflugerville</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Pflugerville is one of Austin's fastest-growing suburbs, with thousands of new homes, e-commerce businesses, and tech families who need reliable specialty shipping. Every shipment comes with in-house custom crating built for your specific item.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Museum-quality crating and climate-controlled transport for Pflugerville galleries, collectors, and homeowners.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Furniture Shipping</h3>
              <p className="text-gray-600 mb-4">White-glove furniture shipping with expert disassembly and reassembly for Pflugerville homes and new builds.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Equipment</h3>
              <p className="text-gray-600 mb-4">HIPAA-compliant transport for Pflugerville medical facilities, clinics, and healthcare providers.</p>
              <Link href="/services/medical-equipment" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Heavy package pickup in Pflugerville for items too large for standard carriers — safes, appliances, machinery, and more.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Oversized item shipping for Pflugerville — items that exceed standard carrier limits. Custom crating and freight solutions.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>
          </div>

          {/* Local Content Section */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Crating & Specialty Shipping, Pflugerville, TX</h2>
            <p className="text-gray-700 mb-6">
              Pflugerville's explosive growth — from Lake Pflugerville to the Stone Hill Town Center corridor — brings a steady stream of new home builds, e-commerce businesses, and tech professionals who need specialty shipping done right. Whether you're crating furniture from a new build in Northtown, shipping fine art from a local collector, or moving heavy equipment from a Pflugerville warehouse, we build every crate in-house at our Austin facility for a precision fit.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Furniture Shipping &amp; Crating</h3>
                <p className="text-gray-600 text-sm">Custom-built crates for sofas, dining sets, bedroom furniture, and designer pieces from Pflugerville's newest neighborhoods.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Fine Art &amp; Collectibles</h3>
                <p className="text-gray-600 text-sm">Museum-standard crating for paintings, sculptures, and high-value collectibles. Private collector and gallery shipments across Pflugerville.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Heavy &amp; Oversized Items</h3>
                <p className="text-gray-600 text-sm">Custom crating for safes, exercise equipment, industrial machinery, and anything UPS or FedEx won't handle. Liftgate trucks available in Pflugerville.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pflugerville Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Local Knowledge', body: "We know Pflugerville's neighborhoods — from Cele Road to Blackhawk. Familiar with building access, parking, and local logistics for fast, smooth pickups." },
                { title: 'Fast Response', body: 'Quick turnaround for Pflugerville customers. Same-day quotes, flexible scheduling, and expedited services available when time matters.' },
                { title: 'Trusted Service', body: 'Serving the greater Austin area since 2010. Trusted by Pflugerville businesses, medical facilities, and homeowners throughout the community.' },
                { title: 'Fully Insured', body: 'Comprehensive insurance coverage for all shipments. Your valuable items are protected from pickup in Pflugerville to final delivery.' },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Pflugerville TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in Pflugerville, TX?',
                  a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in Pflugerville, Texas. We pick up from your Pflugerville location, build custom crates in-house, and deliver locally or ship nationwide.',
                },
                {
                  q: 'Can you handle furniture shipping for Pflugerville residents?',
                  a: 'Absolutely. We specialize in furniture shipping and crating for Pflugerville — from sectional sofas and dining tables to bedroom sets and office furniture. Every piece gets a custom-built wood crate for maximum protection.',
                },
                {
                  q: 'What Pflugerville neighborhoods do you serve?',
                  a: 'We serve all Pflugerville zip codes and neighborhoods including Cele Road, Northtown, Blackhawk, Stone Hill, Wells Branch, and all surrounding areas in 78660 and 78691. Same-day quotes available.',
                },
                {
                  q: 'Do you handle Pflugerville to nationwide shipping?',
                  a: 'Yes. We coordinate LTL freight nationwide for Pflugerville customers. After custom crating at our Austin facility, we work with trusted freight carriers to deliver anywhere in the US with full insurance coverage.',
                },
                {
                  q: 'How quickly can you pick up in Pflugerville?',
                  a: 'We offer fast turnaround including same-day and next-day pickups for Pflugerville depending on availability. Call (512) 240-9818 to discuss your timeline.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross-Links */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Also Serve Nearby Cities</h3>
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides the same white-glove specialty shipping and custom crating throughout the greater Austin area.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/locations/cedar-park', label: 'Cedar Park, TX' },
                { href: '/locations/georgetown', label: 'Georgetown, TX' },
                { href: '/locations/leander', label: 'Leander, TX' },
                { href: '/locations/hutto', label: 'Hutto, TX' },
                { href: '/services', label: 'All Services' },
                { href: '/buy-a-crate', label: 'Buy a Custom Crate' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship in Pflugerville?</h3>
            <p className="text-gray-600 mb-6">Contact us today for a free quote on custom furniture shipping, heavy package pickup, or any specialty shipping need in Pflugerville.</p>
            <a href="tel:(512) 240-9818" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Call (512) 240-9818
            </a>
          </div>
        </div>
      </section>

      {/* NAP + Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Pflugerville from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves Pflugerville from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, just 25 minutes from Stone Hill Town Center. Free pickup throughout Pflugerville, TX 78660 and 78691.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Pflugerville pickup:</strong> Free throughout Pflugerville, Round Rock, and Greater Austin</span></li>
              </ul>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Austin+Crate+%26+Freight+3112+Windsor+Rd+Austin+TX+78703"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all"
              >
                Get Directions on Google Maps
              </a>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=3112+Windsor+Rd+Austin+TX+78703&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Austin Crate & Freight workshop serving Pflugerville TX"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
