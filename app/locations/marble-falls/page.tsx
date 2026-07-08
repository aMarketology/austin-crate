import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Marble Falls',
  description: 'Specialty shipping & custom crating in Marble Falls, TX. Fine art shipping, antique crating, furniture transport, and high-value item shipping for Hill Country lake homes and galleries. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Marble Falls TX',
    'specialty shipping Marble Falls Texas',
    'custom crating Marble Falls TX',
    'furniture shipping Marble Falls',
    'fine art shipping Marble Falls TX',
    'antique shipping Marble Falls Texas',
    'white glove shipping Marble Falls TX',
    'Hill Country lake home shipping Texas',
    'Lake LBJ shipping crating',
    'Marble Falls shipping company',
    'crating Marble Falls Texas',
    'Burnet County shipping crating',
  ],
  locationUrl: '/locations/marble-falls',
})

export default function MarbleFalls() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Marble Falls',
    description: 'Specialty shipping and custom crating services in Marble Falls, Texas',
    latitude: 30.5782,
    longitude: -98.2742,
    image: '/IMG_2983.jpg',
    serviceUrl: '/locations/marble-falls',
  })

  return (
    <SEOWrapper slug="/locations/marble-falls">
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <Navigation />
      <Breadcrumbs />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Marble Falls, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Marble Falls, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight serves Marble Falls and the Highland Lakes region with expert specialty shipping and custom wood crating. Lake LBJ estates, Hill Country ranches, galleries along Main Street — fine art, antiques, designer furniture, and oversized items handled with the white-glove care they deserve.
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
                src="/IMG_2983.jpg"
                alt="Custom crating and specialty shipping in Marble Falls Texas by Austin Crate & Freight"
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

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Marble Falls</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Marble Falls anchors the Highland Lakes area of the Texas Hill Country — a region known for affluent lake properties, a growing arts scene, and the kind of curated home collections that require specialty shipping when they move.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Museum-quality crating for Marble Falls and Highland Lakes collectors — climate-controlled transport for paintings, sculpture, and mixed media from lakeside homes and galleries.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Antique & Furniture Shipping</h3>
              <p className="text-gray-600 mb-4">Custom crating for antique furniture, heirlooms, and designer pieces from Marble Falls estates — shipping statewide or cross-country with full condition documentation.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Large safes, stone sculptures, oversized lake-home furnishings, and items too heavy for standard carriers — throughout Marble Falls, Horseshoe Bay, and Lake LBJ.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Custom crating for large outdoor sculpture, architectural features, oversized artwork, and any item too large for FedEx or UPS from the Marble Falls area.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Collection Shipping</h3>
              <p className="text-gray-600 mb-4">Coordinated specialty crating for Highland Lakes estate moves — wine collections, art, antique furniture, and curated pieces handled as a single project.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>
          </div>

          {/* Local Content */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Marble Falls & Highland Lakes Specialty Shipping</h2>
            <p className="text-gray-700 mb-6">
              The Highland Lakes — Lake LBJ, Lake Marble Falls, Lake Travis — have long been home to some of the most valuable residential real estate in Central Texas. When affluent retirees, lake-house owners, and second-home buyers move pieces between properties, those items need custom crating — not a blanket wrap tossed in a cube truck.
            </p>
            <p className="text-gray-700 mb-6">
              Marble Falls has also built a legitimate arts scene along Main Street, with galleries, studios, and dealers who serve both local buyers and out-of-state collectors. We work with Marble Falls galleries and the wider Burnet County area to provide professional crating and nationwide freight coordination for pieces that cannot afford to be damaged in transit.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Lake LBJ Estate Crating</h3>
                <p className="text-gray-600 text-sm">Custom crating for high-value furniture, art, and collections from Lake LBJ and Lake Marble Falls waterfront properties.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Marble Falls Art Gallery Shipping</h3>
                <p className="text-gray-600 text-sm">Museum-quality crating for gallery pieces moving to out-of-state buyers — proper protection for paintings, sculpture, and mixed media.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Horseshoe Bay & Burnet County</h3>
                <p className="text-gray-600 text-sm">Full Burnet County coverage — Horseshoe Bay, Llano, Kingsland, and the surrounding Hill Country communities.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Marble Falls Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'In-House Crating', body: 'We build every crate at our Austin workshop — not outsourced. Custom foam blocking and interior padding designed for the exact piece being shipped, not a generic size.' },
                { title: 'Art & Estate Expertise', body: 'We know what valuable collections require: acid-free materials, climate-controlled transport planning for Hill Country heat, and careful handling that reflects the actual value of the pieces we touch.' },
                { title: 'Hill Country Coverage', body: 'Our Austin workshop is approximately 55 miles from Marble Falls via US-281 — about 60-65 minutes. We serve the full Highland Lakes region including Horseshoe Bay, Kingsland, Llano, and Burnet.' },
                { title: 'Licensed, Bonded & Fully Insured', body: 'Every shipment is covered end-to-end. Condition is documented with photos before crating, and full insurance coverage is maintained from Marble Falls to the final destination anywhere in the US.' },
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

          {/* Blog Links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources for Marble Falls Shippers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/what-is-white-glove-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">What Is White-Glove Shipping?</h3>
                <p className="text-gray-500 text-sm">What the premium service level includes and when it's worth paying for your collection.</p>
              </Link>
              <Link href="/blog/fine-art-shipping-austin" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Fine Art Shipping in Austin: A Complete Guide</h3>
                <p className="text-gray-500 text-sm">How paintings, sculptures, and mixed media are properly crated and shipped by professionals.</p>
              </Link>
              <Link href="/blog/antique-shipping-guide" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-gray-500 text-sm">Insurance, crating, and documentation before an antique or heirloom leaves your hands.</p>
              </Link>
              <Link href="/blog/how-to-choose-specialty-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Choose a Specialty Shipping Company</h3>
                <p className="text-gray-500 text-sm">10 questions to ask any carrier before trusting them with a valuable piece.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Marble Falls TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in Marble Falls, TX?',
                  a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in Marble Falls, Texas (78654). We pick up from your Marble Falls or Highland Lakes location, build custom crates in-house at our Austin workshop, and ship locally or nationwide. We cover all of Burnet County including Horseshoe Bay, Kingsland, and Llano.',
                },
                {
                  q: 'Do you ship art and antiques from Marble Falls?',
                  a: 'Yes. We work with Marble Falls galleries, independent artists, antique dealers, and private collectors throughout the Highland Lakes area. Every piece gets a custom-built wood crate designed to its exact dimensions with foam-blocked interiors and documented condition before shipping.',
                },
                {
                  q: 'How far is Marble Falls from your Austin workshop?',
                  a: 'Our workshop at 3112 Windsor Rd, Austin TX is approximately 55 miles from Marble Falls via US-281 — about 60-65 minutes. We offer same-day pickup for urgent jobs and standard 24-48 hour scheduling for most shipments.',
                },
                {
                  q: 'Can you ship large furniture from Lake LBJ lake homes?',
                  a: 'Yes. Lake LBJ and Lake Marble Falls waterfront properties frequently have high-value furniture and art that needs specialty crating when properties change hands or owners move pieces between homes. Custom crating is the right choice for anything valuable enough to matter. Call (512) 240-9818 for a free quote.',
                },
                {
                  q: 'Do you serve Horseshoe Bay, Kingsland, and Burnet?',
                  a: 'Yes. We serve the full Highland Lakes region — Marble Falls, Horseshoe Bay, Kingsland, Llano, Burnet, and all surrounding communities. The same white-glove specialty crating service covers all of Burnet and Llano counties.',
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
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides the same white-glove specialty shipping and custom crating throughout the greater Austin area and Hill Country.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/dripping-springs', label: 'Dripping Springs, TX' },
                { href: '/locations/wimberley', label: 'Wimberley, TX' },
                { href: '/locations/cedar-park', label: 'Cedar Park, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/locations/leander', label: 'Leander, TX' },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Marble Falls?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on fine art crating, antique shipping, or any specialty shipping need in Marble Falls, TX.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Marble Falls from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves Marble Falls from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 55 miles via US-281 North. Free pickup throughout Marble Falls, Horseshoe Bay, and all of Burnet County.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Marble Falls pickup:</strong> Free throughout Burnet County (78654)</span></li>
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
                title="Austin Crate & Freight workshop serving Marble Falls TX"
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
