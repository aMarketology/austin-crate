import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Elgin',
  description: 'Specialty shipping & custom crating in Elgin, TX. Furniture shipping, heavy item pickup, industrial crating, and custom packaging for Elgin homes and businesses. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Elgin TX',
    'specialty shipping Elgin Texas',
    'custom crating Elgin TX',
    'furniture shipping Elgin',
    'furniture crating Elgin TX',
    'heavy item pickup Elgin Texas',
    'industrial crating Elgin TX',
    'white glove shipping Elgin TX',
    'crating Elgin Texas',
    'shipping company Elgin TX',
    'Bastrop County Elgin shipping',
    'east Austin corridor shipping crating',
  ],
  locationUrl: '/locations/elgin',
})

export default function Elgin() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Elgin',
    description: 'Specialty shipping and custom crating services in Elgin, Texas',
    latitude: 30.3521,
    longitude: -97.3701,
    image: '/IMG_3092.jpg',
    serviceUrl: '/locations/elgin',
  })

  return (
    <SEOWrapper slug="/locations/elgin">
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
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Elgin, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Elgin, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight serves Elgin and the eastern Austin corridor with expert specialty shipping and custom wood crating. Furniture shipping, heavy item pickup, industrial crating, and oversized freight — professional service for one of the fastest-growing communities in Bastrop County.
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
                src="/IMG_3092.jpg"
                alt="Custom crating and specialty shipping in Elgin Texas by Austin Crate & Freight"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Elgin</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Elgin is growing fast along the east Austin corridor — new residential communities, light industrial activity, and a steady stream of residents relocating to one of Central Texas's most affordable zip codes who still need white-glove specialty shipping for their high-value items.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Furniture Shipping & Crating</h3>
              <p className="text-gray-600 mb-4">Custom crating for furniture shipping from Elgin — antiques, new furniture, designer pieces, and heirlooms that standard movers damage. We build each crate to the exact dimensions of your piece.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Safes, appliances, fitness equipment, and oversized items throughout Elgin and Bastrop County — we pick up anything standard carriers won't take and handle it properly.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial & Equipment Crating</h3>
              <p className="text-gray-600 mb-4">Custom crating for light industrial equipment, machinery, manufacturing tools, and precision instruments from Elgin businesses along the US-290 corridor.</p>
              <Link href="/services/shipping-and-crating" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Items that exceed standard carrier limits from Elgin homes and businesses — custom crating and freight coordination for anything too large for standard parcel carriers.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Crating</h3>
              <p className="text-gray-600 mb-4">Made-to-measure wood crates for any item in Elgin — odd dimensions, fragile objects, and anything that needs more than a cardboard box to ship safely.</p>
              <Link href="/buy-a-crate" className="text-emerald-600 hover:text-emerald-700 font-medium">Buy a Crate →</Link>
            </div>
          </div>

          {/* Local Content */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Elgin Specialty Shipping & Custom Crating</h2>
            <p className="text-gray-700 mb-6">
              Elgin — the Sausage Capital of Texas — sits on US-290 East, one of the most active growth corridors in the Austin metro. New subdivisions have been breaking ground every year as buyers seek affordable housing within commuting distance of Austin, Round Rock, and the broader Williamson County tech corridor. With that growth comes demand for specialty shipping services that suburban zip codes have historically lacked access to.
            </p>
            <p className="text-gray-700 mb-6">
              We serve Elgin for both residential and light commercial shipping needs — furniture crating for new homeowners, heavy item pickup for renovating homeowners, and industrial equipment crating for businesses along the US-290 corridor. From a single antique picked up at the Elgin Main Street Market to a pallet of equipment relocating to a new facility, we handle it properly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">New Resident Crating</h3>
                <p className="text-gray-600 text-sm">Elgin's fast growth means constant new residents — many with high-value furniture and art from out of state that needs proper specialty crating for the last leg of their move.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">US-290 Corridor Coverage</h3>
                <p className="text-gray-600 text-sm">We serve the full US-290 East corridor from Austin through Elgin to Bastrop — light industrial, small commercial, and residential across Bastrop County.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Same-Day Pickup Available</h3>
                <p className="text-gray-600 text-sm">Elgin is approximately 30 miles from our Austin workshop — we can often offer same-day pickup for urgent jobs. Call (512) 240-9818 to check availability.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Elgin Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'In-House Crating', body: 'Every crate is built at our Austin workshop — not outsourced. Custom dimensions, foam blocking, and precise interior padding for the exact item being shipped.' },
                { title: 'East Corridor Specialists', body: 'We regularly serve the US-290 East corridor — Manor, Elgin, Bastrop, McDade. If you\'re in Bastrop County and need specialty shipping, we know the area and can be there fast.' },
                { title: 'Close to Elgin — 30 Min Away', body: 'Our Austin workshop at 3112 Windsor Rd is approximately 30 miles from Elgin via US-290 East — about 35 minutes. Same-day pickup is often available.' },
                { title: 'Fully Insured & Documented', body: 'Every shipment is covered from pickup to delivery. We document condition with photos before crating and maintain full insurance coverage throughout transit.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources for Elgin Shippers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How Much Does It Cost to Ship Heavy Items?</h3>
                <p className="text-gray-500 text-sm">Full 2026 pricing guide for specialty shipping in Austin and surrounding areas including Elgin.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Custom Crating vs. Standard Boxes</h3>
                <p className="text-gray-500 text-sm">When a wood crate is the only safe option — and when standard packaging is fine for your item.</p>
              </Link>
              <Link href="/blog/moving-to-austin-ship-valuables" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Moving to Austin? Here's How to Ship Your Valuables</h3>
                <p className="text-gray-500 text-sm">What to ship separately — and how — when relocating to the Austin area including Elgin.</p>
              </Link>
              <Link href="/blog/how-to-choose-specialty-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Choose a Specialty Shipping Company</h3>
                <p className="text-gray-500 text-sm">10 questions to ask any carrier before trusting them with a valuable piece.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Elgin TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in Elgin, TX?',
                  a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in Elgin, Texas (78621). We pick up from your Elgin location, build custom crates in-house at our Austin workshop, and deliver locally or ship nationwide. We cover all of western Bastrop County including Elgin, McDade, and surrounding areas.',
                },
                {
                  q: 'Can you pick up heavy items in Elgin that standard carriers won\'t take?',
                  a: 'Yes. Safes, fitness equipment, large appliances, oversized furniture, and any item that exceeds standard carrier weight or size limits — we pick up in Elgin, crate at our Austin facility, and coordinate freight to the destination. Call (512) 240-9818 for a same-day quote.',
                },
                {
                  q: 'How far is Elgin from your Austin workshop?',
                  a: 'Our workshop at 3112 Windsor Rd, Austin TX is approximately 30 miles from Elgin via US-290 East — about 35 minutes. We can typically offer same-day pickup in Elgin and standard 24-48 hour scheduling for most jobs.',
                },
                {
                  q: 'Do you handle furniture shipping for new Elgin residents relocating from out of state?',
                  a: 'Yes. Many new Elgin residents are relocating from out of state and need specialty crating for furniture, art, and high-value items that standard movers mishandle. We pick up in Elgin, crate properly, and coordinate freight from the origin or deliver the final leg to your Elgin home. Call (512) 240-9818.',
                },
                {
                  q: 'Do you serve Bastrop, Manor, and other nearby cities from Elgin?',
                  a: 'Yes. We serve the full eastern Austin corridor — Elgin, Manor, Bastrop, McDade, Cedar Creek, and surrounding areas. One number handles it all: (512) 240-9818.',
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
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides the same white-glove specialty shipping and custom crating throughout the greater Austin area and eastern corridor.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/manor', label: 'Manor, TX' },
                { href: '/locations/bastrop', label: 'Bastrop, TX' },
                { href: '/locations/pflugerville', label: 'Pflugerville, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/locations/georgetown', label: 'Georgetown, TX' },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Elgin?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on furniture crating, heavy item pickup, or any specialty shipping need in Elgin, TX.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Elgin from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves Elgin from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 30 miles via US-290 East. Free pickup throughout Elgin and western Bastrop County.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Elgin pickup:</strong> Free throughout Elgin (78621) and western Bastrop County</span></li>
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
                title="Austin Crate & Freight workshop serving Elgin TX"
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
