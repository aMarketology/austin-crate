import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Bastrop',
  description: 'Specialty shipping & custom crating in Bastrop, TX. Furniture shipping, antique crating, heavy item pickup, and fine art transport for Bastrop homes and businesses. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Bastrop TX',
    'specialty shipping Bastrop Texas',
    'custom crating Bastrop TX',
    'furniture shipping Bastrop',
    'furniture crating Bastrop TX',
    'antique shipping Bastrop Texas',
    'heavy item pickup Bastrop TX',
    'fine art shipping Bastrop',
    'white glove shipping Bastrop TX',
    'crating Bastrop Texas',
    'shipping company Bastrop TX',
    'Bastrop County shipping crating',
  ],
  locationUrl: '/locations/bastrop',
})

export default function Bastrop() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Bastrop',
    description: 'Specialty shipping and custom crating services in Bastrop, Texas',
    latitude: 30.1107,
    longitude: -97.3155,
    image: '/IMG_3112.jpg',
    serviceUrl: '/locations/bastrop',
  })

  return (
    <SEOWrapper slug="/locations/bastrop">
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
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Bastrop, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Bastrop, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight serves Bastrop with expert specialty shipping and custom wood crating. Historic homes, antique collections, growing residential neighborhoods, and the east Austin corridor — furniture shipping, fine art crating, heavy items, and oversized freight handled with white-glove care.
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
                src="/IMG_3112.jpg"
                alt="Custom crating and specialty shipping in Bastrop Texas by Austin Crate & Freight"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Bastrop</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Bastrop is one of the fastest-growing communities on the Austin metro's eastern edge — a mix of historic downtown charm, Colorado River estates, and new residential development driving a constant need for specialty shipping and careful furniture crating.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Antique & Furniture Shipping</h3>
              <p className="text-gray-600 mb-4">Bastrop's historic downtown has some of the best antique dealers in the Austin region. We crate and ship antique furniture, heirlooms, and estate pieces throughout Texas and cross-country.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Museum-quality crating for Bastrop artists, gallery pieces, and private collections — climate-controlled transport for paintings, prints, and mixed media.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Safes, appliances, fitness equipment, and oversize items throughout Bastrop County — pickup and crating for items standard carriers won't touch.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Equipment</h3>
              <p className="text-gray-600 mb-4">HIPAA-aware transport for medical facilities, clinics, and healthcare providers throughout Bastrop County — precision crating for sensitive instruments.</p>
              <Link href="/services/medical-equipment" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Items exceeding standard carrier limits — large furniture, machinery, industrial pieces, and custom objects from Bastrop businesses and homes.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>
          </div>

          {/* Local Content */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bastrop Antique & Specialty Shipping</h2>
            <p className="text-gray-700 mb-6">
              Bastrop's historic Main Street has been an antique destination for decades — Victorian-era storefronts housing dealers who sell to buyers statewide and nationally. When those pieces leave Bastrop, they need custom crating, not blanket wrap. A Civil War-era secretary desk or hand-carved armoire can't survive a cross-country freight run in a standard moving blanket.
            </p>
            <p className="text-gray-700 mb-6">
              Bastrop is also growing fast — one of the highest-growth zip codes in Texas as the eastern Austin corridor expands. New residents arriving from out of state regularly need specialty crating for the furniture and art they're bringing with them, or shipping items from their old homes to their new Bastrop properties.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Historic Downtown Antiques</h3>
                <p className="text-gray-600 text-sm">Custom crating for antiques from Bastrop's Main Street dealers — proper packaging for pieces that need to arrive intact anywhere in the country.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Colorado River Estates</h3>
                <p className="text-gray-600 text-sm">Specialty crating for high-value items in Colorado River estate homes along Hwy 71 and FM 969 — furniture, art, and curated collections.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Relocation Crating</h3>
                <p className="text-gray-600 text-sm">New Bastrop residents relocating from out of state need specialty crating for items that standard movers mishandle. We handle furniture, art, and antiques properly.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Bastrop Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'In-House Crating', body: 'Every crate is built at our Austin workshop — not outsourced, not a reseller. Custom foam blocking, precise dimension cuts, and screw-closure lids that can be opened at the destination without damage.' },
                { title: 'Antique & Historic Item Expertise', body: 'Bastrop has some of the finest antique dealers in Central Texas. We understand what century-old furniture needs: acid-free materials, careful blocking, and documentation of condition before it ships.' },
                { title: 'East Corridor Coverage', body: 'Our Austin workshop is approximately 35 miles from Bastrop via Hwy 71 — about 40 minutes. We offer same-day pickup in Bastrop and standard 24-48 hour scheduling for most jobs.' },
                { title: 'Fully Insured & Documented', body: 'Every shipment is covered from pickup to delivery. We photograph condition before crating, provide documentation, and maintain full insurance coverage throughout transit.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources for Bastrop Shippers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/antique-shipping-guide" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-gray-500 text-sm">Insurance, crating, and documentation before an antique or heirloom leaves your hands.</p>
              </Link>
              <Link href="/blog/prepare-furniture-for-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Prepare Furniture for Shipping (Step-by-Step)</h3>
                <p className="text-gray-500 text-sm">A practical checklist for getting furniture ready for pickup before we arrive.</p>
              </Link>
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How Much Does It Cost to Ship Heavy Items in Austin?</h3>
                <p className="text-gray-500 text-sm">Full 2026 pricing guide for specialty shipping in Austin and surrounding areas.</p>
              </Link>
              <Link href="/blog/how-to-choose-specialty-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Choose a Specialty Shipping Company</h3>
                <p className="text-gray-500 text-sm">10 questions to ask any carrier before trusting them with a valuable piece.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Bastrop TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in Bastrop, TX?',
                  a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in Bastrop, Texas (78602). We pick up from your Bastrop location, build custom crates in-house at our Austin workshop, and deliver locally or ship nationwide. We cover all of Bastrop County including Bastrop, Cedar Creek, Smithville, and surrounding areas.',
                },
                {
                  q: 'Do you ship antiques from Bastrop dealers?',
                  a: 'Yes — antique shipping from Bastrop\'s historic Main Street is one of the most common jobs we handle in this area. We work with antique dealers, estate sale companies, and private buyers who need professional crating for pieces purchased in Bastrop. Every antique gets a custom-built wood crate designed to its specific dimensions.',
                },
                {
                  q: 'How far is Bastrop from your Austin workshop?',
                  a: 'Our workshop at 3112 Windsor Rd, Austin TX is approximately 35 miles from Bastrop via Hwy 71 East — about 40 minutes. We offer same-day pickup in Bastrop for urgent jobs and standard 24-48 hour scheduling.',
                },
                {
                  q: 'Can you ship large furniture from new Bastrop construction homes?',
                  a: 'Yes. Bastrop is one of the fastest-growing areas in Texas and we regularly handle furniture shipping for new residents relocating to the area or moving high-value items between properties. Custom crating protects pieces that standard movers damage. Call (512) 240-9818 for a free quote.',
                },
                {
                  q: 'Do you serve Smithville, Cedar Creek, and other Bastrop County areas?',
                  a: 'Yes. We serve all of Bastrop County including Bastrop, Smithville, Cedar Creek, Elgin, and McDade. The same white-glove specialty crating service covers the full eastern Austin corridor.',
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
                { href: '/locations/elgin', label: 'Elgin, TX' },
                { href: '/locations/kyle', label: 'Kyle, TX' },
                { href: '/locations/buda', label: 'Buda, TX' },
                { href: '/locations/lockhart', label: 'Lockhart, TX' },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Bastrop?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on antique shipping, furniture crating, heavy item pickup, or any specialty shipping need in Bastrop, TX.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Bastrop from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves Bastrop from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 35 miles via Hwy 71 East. Free pickup throughout Bastrop, Cedar Creek, and all of Bastrop County.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Bastrop pickup:</strong> Free throughout Bastrop County (78602)</span></li>
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
                title="Austin Crate & Freight workshop serving Bastrop TX"
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
