import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Hutto',
  description: 'Specialty shipping & custom crating in Hutto, TX. Furniture shipping, fine art transport, heavy item pickup, and oversized freight. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Hutto TX',
    'specialty shipping Hutto Texas',
    'specialty crating Hutto TX',
    'furniture shipping Hutto',
    'furniture crating Hutto TX',
    'fine art shipping Hutto Texas',
    'heavy item pickup Hutto TX',
    'oversized shipping Hutto',
    'white glove shipping Hutto TX',
    'Hutto shipping company',
    'custom crating Hutto Texas',
  ],
  locationUrl: '/locations/hutto',
})

export default function Hutto() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Hutto',
    description: 'Specialty shipping services in Hutto, Texas',
    latitude: 30.5427,
    longitude: -97.5461,
    image: '/1.jpg',
    serviceUrl: '/locations/hutto',
  })

  return (
    <SEOWrapper slug="/locations/hutto">
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navigation />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Hutto, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Hutto, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight brings expert specialty shipping and custom crating to Hutto. From Star Ranch to Brushy Creek, we serve Hutto homes and businesses with furniture shipping, fine art transport, heavy item pickup, and industrial freight — all with white-glove care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 rounded-lg font-medium text-white hover:bg-emerald-700 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  (512) 240-9818
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-lg font-medium text-gray-200 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300">
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl">
              <Image src="/2.jpg" alt="Specialty shipping and custom crating in Hutto Texas by Austin Crate & Freight" fill className="object-cover" priority fetchPriority="high" sizes="(max-width: 1024px) 100vw, 50vw" quality={80} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Hutto</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Hutto is one of the NE Austin corridor's fastest-growing cities, with expanding residential neighborhoods and a growing warehouse and industrial presence. From new home builds near Star Ranch to commercial businesses along SH 130, we provide specialty shipping built for Hutto's unique mix of residential and industrial customers.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Fine Art Shipping', desc: 'Museum-quality crating and transport for Hutto collectors and homeowners.', href: '/services/fine-art' },
              { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', title: 'Custom Furniture Shipping', desc: 'White-glove furniture shipping and custom crating for Hutto homes and new construction.', href: '/services/furniture' },
              { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Medical Equipment', desc: 'HIPAA-compliant transport for Hutto medical facilities and healthcare providers.', href: '/services/medical-equipment' },
              { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', title: 'Heavy Item Pickup', desc: 'Heavy item pickup in Hutto for industrial equipment, safes, and items standard carriers won\'t handle.', href: '/services/heavy-items' },
              { icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7', title: 'Oversized & Industrial Shipping', desc: 'Custom freight for industrial equipment, trade show displays, and oversized items from Hutto warehouses.', href: '/services/shipping-and-crating' },
            ].map(({ icon, title, desc, href }) => (
              <div key={title} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <Link href={href} className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Crating & Specialty Shipping, Hutto, TX</h2>
            <p className="text-gray-700 mb-6">
              Hutto's position on SH 130 and proximity to the Samsung Taylor semiconductor plant makes it a growing center for industrial and commercial businesses. Combined with rapidly expanding residential neighborhoods like Star Ranch and Riverwalk, Hutto has both residential customers needing furniture and art shipping, and commercial customers needing industrial crating and freight. We serve both.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Residential Shipping</h3><p className="text-gray-600 text-sm">Furniture, fine art, and household specialty items from Hutto homes and new builds.</p></div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Commercial & Industrial</h3><p className="text-gray-600 text-sm">Equipment crating, trade show materials, and industrial freight from Hutto warehouses and businesses.</p></div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Heavy Item Pickup</h3><p className="text-gray-600 text-sm">Safes, machinery, and oversized items. Liftgate trucks and two-man crews available in Hutto.</p></div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Hutto TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'Do you offer specialty shipping and crating in Hutto, TX?', a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in Hutto, Texas. We pick up from your Hutto location, build custom crates in-house, and deliver locally or ship nationwide.' },
                { q: 'Can you handle industrial and commercial crating in Hutto?', a: 'Absolutely. We serve Hutto businesses with industrial equipment crating, trade show display shipping, machinery crating, and custom freight solutions for large commercial items.' },
                { q: 'What Hutto neighborhoods do you serve?', a: 'We serve all of Hutto (78634) including Star Ranch, Riverwalk, Brushy Creek, and surrounding areas. We also serve commercial customers along SH 130 and FM 685.' },
                { q: 'Do you handle Hutto to nationwide shipping?', a: 'Yes. We coordinate LTL freight nationwide for Hutto customers — both residential and commercial. After custom crating at our Austin facility, we deliver anywhere in the US with full insurance.' },
                { q: 'How quickly can you pick up in Hutto?', a: 'We offer fast turnaround including same-day and next-day pickups for Hutto depending on availability. Call (512) 240-9818 to discuss your timeline.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Also Serve Nearby Cities</h3>
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides white-glove specialty shipping throughout the greater Austin and NE corridor.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/pflugerville', label: 'Pflugerville, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/locations/manor', label: 'Manor, TX' },
                { href: '/locations/georgetown', label: 'Georgetown, TX' },
                { href: '/services', label: 'All Services' },
                { href: '/buy-a-crate', label: 'Buy a Custom Crate' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">{label}</Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship in Hutto?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on custom furniture shipping, industrial crating, or any specialty shipping need in Hutto, TX.</p>
            <a href="tel:(512) 240-9818" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">Call (512) 240-9818</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Hutto from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">Austin Crate &amp; Freight serves Hutto from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 30 minutes via SH 130 or US-79. Free pickup throughout Hutto, TX 78634.</p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Hutto pickup:</strong> Free throughout Hutto, Pflugerville, and Greater Austin</span></li>
              </ul>
              <a href="https://www.google.com/maps/search/?api=1&query=Austin+Crate+%26+Freight+3112+Windsor+Rd+Austin+TX+78703" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all">Get Directions on Google Maps</a>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe src="https://www.google.com/maps?q=3112+Windsor+Rd+Austin+TX+78703&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Austin Crate & Freight workshop serving Hutto TX" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
