import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Lockhart',
  description: 'Specialty shipping & custom crating in Lockhart, TX. Furniture shipping, heavy item pickup, antique crating, and custom packaging for Lockhart homes and businesses. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Lockhart TX',
    'specialty shipping Lockhart Texas',
    'custom crating Lockhart TX',
    'furniture shipping Lockhart',
    'furniture crating Lockhart TX',
    'heavy item pickup Lockhart Texas',
    'antique shipping Lockhart TX',
    'white glove shipping Lockhart TX',
    'crating Lockhart Texas',
    'shipping company Lockhart TX',
    'Caldwell County shipping crating',
    'Lockhart TX shipping service',
  ],
  locationUrl: '/locations/lockhart',
})

export default function Lockhart() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Lockhart',
    description: 'Specialty shipping and custom crating services in Lockhart, Texas',
    latitude: 29.8852,
    longitude: -97.6702,
    image: '/IMG_2981.jpg',
    serviceUrl: '/locations/lockhart',
  })

  return (
    <SEOWrapper slug="/locations/lockhart">
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
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Lockhart, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Lockhart, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight serves Lockhart and all of Caldwell County with expert specialty shipping and custom wood crating. Furniture shipping, heavy item pickup, antique crating, and oversized freight — the white-glove service that the BBQ Capital of Texas deserves.
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
                src="/IMG_2981.jpg"
                alt="Custom crating and specialty shipping in Lockhart Texas by Austin Crate & Freight"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Lockhart</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Lockhart — the BBQ Capital of Texas — is also one of Caldwell County's fastest-growing communities, with new residents, expanding businesses, and historic downtown properties that all generate demand for reliable specialty shipping and custom crating.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture Shipping & Crating</h3>
              <p className="text-gray-600 mb-4">Custom crating for furniture shipping from Lockhart — antiques from the historic downtown, new furniture for growing households, or designer pieces that need proper protection in transit.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Safes, appliances, fitness equipment, and oversized items throughout Lockhart and Caldwell County — pickup and crating for items standard carriers won't handle.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Antique Shipping</h3>
              <p className="text-gray-600 mb-4">Lockhart's historic courthouse square and downtown have long attracted antique dealers. We crate and ship antique furniture, collectibles, and estate pieces from Lockhart throughout Texas and nationwide.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Items that exceed standard carrier limits from Lockhart homes and businesses — custom crating and freight coordination for anything too large for FedEx or UPS.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Crating</h3>
              <p className="text-gray-600 mb-4">Made-to-measure wood crates for any item in Lockhart — one-off dimensions, fragile objects, and anything that standard packaging can't protect properly.</p>
              <Link href="/buy-a-crate" className="text-emerald-600 hover:text-emerald-700 font-medium">Buy a Crate →</Link>
            </div>
          </div>

          {/* Local Content */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lockhart Specialty Shipping & Crating</h2>
            <p className="text-gray-700 mb-6">
              Lockhart has been growing steadily as Austin's metro footprint expands southward along US-183. New residential developments, renovated historic properties downtown, and small businesses throughout Caldwell County all have specialty shipping needs that standard parcel carriers can't address. When a safe is too heavy for FedEx, or a piece of furniture is too large for standard moving companies to handle without damage, that's where we come in.
            </p>
            <p className="text-gray-700 mb-6">
              We serve Lockhart for both residential and commercial shipping — whether it's a residential move of a valuable antique collection, a business relocating equipment, or a single oversized item that needs proper crating before it can go on a truck.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Historic Downtown Lockhart</h3>
                <p className="text-gray-600 text-sm">Antique dealers and estate sales around the Caldwell County Courthouse square — crating for pieces that need to survive long-distance freight.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Residential Crating</h3>
                <p className="text-gray-600 text-sm">New Lockhart residents from out of state, or families moving valuables between homes — custom crating protects what movers damage.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Small Business Shipping</h3>
                <p className="text-gray-600 text-sm">Lockhart small businesses needing reliable freight solutions for oversized, heavy, or fragile items — custom crating and freight coordination.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Lockhart Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'In-House Crating', body: 'Every crate is built at our Austin workshop — not outsourced. Custom dimensions, foam blocking, and interior padding for the exact item being shipped, not a guess.' },
                { title: 'No Job Too Small or Too Large', body: 'Whether it\'s a single antique chair or a full estate\'s worth of furniture, we handle it with the same attention to detail. No job is too small to deserve proper crating.' },
                { title: 'South Corridor Coverage', body: 'Our Austin workshop is approximately 40 miles from Lockhart via US-183 South — about 45 minutes. We serve all of Caldwell County including Lockhart, Luling, and Gonzales County.' },
                { title: 'Fully Insured', body: 'Every shipment is covered from pickup to delivery. Condition is documented with photos before we crate, and full insurance is maintained throughout transit to the final destination.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources for Lockhart Shippers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How Much Does It Cost to Ship Heavy Items?</h3>
                <p className="text-gray-500 text-sm">Full 2026 pricing guide for specialty shipping in Austin and surrounding areas including Lockhart.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Custom Crating vs. Standard Boxes</h3>
                <p className="text-gray-500 text-sm">When a wood crate is the only safe option for your item versus when standard packaging is fine.</p>
              </Link>
              <Link href="/blog/prepare-furniture-for-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Prepare Furniture for Shipping</h3>
                <p className="text-gray-500 text-sm">A practical checklist for getting furniture ready for pickup before we arrive in Lockhart.</p>
              </Link>
              <Link href="/blog/how-to-choose-specialty-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Choose a Specialty Shipping Company</h3>
                <p className="text-gray-500 text-sm">10 questions to ask any carrier before trusting them with a valuable piece.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Lockhart TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in Lockhart, TX?',
                  a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in Lockhart, Texas (78644). We pick up from your Lockhart location, build custom crates in-house at our Austin workshop, and deliver locally or ship nationwide. We cover all of Caldwell County including Lockhart, Luling, and surrounding areas.',
                },
                {
                  q: 'Can you ship heavy items from Lockhart that FedEx won\'t take?',
                  a: 'Yes. Safes, fitness equipment, large appliances, oversized furniture, and any item that exceeds standard carrier weight or size limits — we pick up in Lockhart, crate at our Austin facility, and coordinate freight to the destination. Call (512) 240-9818 for a same-day quote.',
                },
                {
                  q: 'How far is Lockhart from your Austin workshop?',
                  a: 'Our workshop at 3112 Windsor Rd, Austin TX is approximately 40 miles from Lockhart via US-183 South — about 45 minutes. We offer same-day pickup in Lockhart for urgent jobs and standard 24-48 hour scheduling.',
                },
                {
                  q: 'Do you ship antiques from Lockhart dealers?',
                  a: 'Yes. We work with Lockhart antique dealers, estate sale companies, and private buyers who need proper crating for pieces that are too valuable to risk with standard moving blankets. Custom wood crates are built to the piece\'s exact dimensions at our Austin workshop.',
                },
                {
                  q: 'Do you serve Luling and other Caldwell County cities near Lockhart?',
                  a: 'Yes. We serve all of Caldwell County including Lockhart, Luling, Prairie Lea, and surrounding areas, as well as Kyle, Buda, and the broader south Austin corridor. One call handles it all — (512) 240-9818.',
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
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides the same white-glove specialty shipping and custom crating throughout the greater Austin area and South Texas corridor.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/kyle', label: 'Kyle, TX' },
                { href: '/locations/buda', label: 'Buda, TX' },
                { href: '/locations/bastrop', label: 'Bastrop, TX' },
                { href: '/locations/san-marcos', label: 'San Marcos, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Lockhart?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on furniture crating, heavy item pickup, or any specialty shipping need in Lockhart, TX.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Lockhart from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves Lockhart from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 40 miles via US-183 South. Free pickup throughout Lockhart and all of Caldwell County.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Lockhart pickup:</strong> Free throughout Caldwell County (78644)</span></li>
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
                title="Austin Crate & Freight workshop serving Lockhart TX"
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
