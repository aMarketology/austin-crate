import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Taylor',
  description: 'Specialty shipping & custom crating in Taylor, TX. Industrial equipment crating, furniture shipping, fine art transport, and heavy item pickup. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Taylor TX',
    'specialty shipping Taylor Texas',
    'custom crating Taylor TX',
    'industrial equipment shipping Taylor',
    'furniture shipping Taylor TX',
    'heavy item pickup Taylor Texas',
    'oversized shipping Taylor TX',
    'white glove shipping Taylor',
    'Taylor TX shipping company',
    'crating Taylor Texas',
    'semiconductor equipment shipping Taylor TX',
  ],
  locationUrl: '/locations/taylor',
})

export default function Taylor() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Taylor',
    description: 'Specialty shipping and custom crating services in Taylor, Texas',
    latitude: 30.5710,
    longitude: -97.4097,
    image: '/IMG_3037.jpg',
    serviceUrl: '/locations/taylor',
  })

  return (
    <SEOWrapper slug="/locations/taylor">
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
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Taylor, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Taylor, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Taylor, Texas is in the middle of one of the most significant industrial expansions in the state. With Samsung's semiconductor fab and wave of supporting businesses transforming Williamson County, the demand for precision shipping and specialty crating has never been higher. Austin Crate &amp; Freight serves Taylor with expert industrial equipment crating, heavy item pickup, and white-glove specialty shipping — built to the standards that high-value equipment demands.
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
                src="/IMG_3037.jpg"
                alt="Large item custom crating for Taylor TX industrial and specialty shipping by Austin Crate & Freight"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Taylor</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Taylor's transformation from a small Williamson County city to a major industrial hub has created demand for precision shipping that did not exist five years ago. We serve the full range — from Samsung-adjacent suppliers needing precision equipment crating to Taylor's longtime residents who need furniture and antique shipping done right.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial & Precision Equipment Crating</h3>
              <p className="text-gray-600 mb-4">Custom wood crating for industrial equipment, precision instruments, manufacturing tools, and semiconductor-adjacent components. Built to spec, shipped with care.</p>
              <Link href="/services/shipping-and-crating/machinery-manufacturing-equipment" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Equipment</h3>
              <p className="text-gray-600 mb-4">Calibration-safe transport for medical devices, imaging equipment, and sensitive healthcare technology in the Taylor and Williamson County area.</p>
              <Link href="/services/medical-equipment" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Furniture Shipping</h3>
              <p className="text-gray-600 mb-4">White-glove furniture shipping and crating for Taylor residents — new builds, relocating professionals, and anyone needing more care than a standard mover provides.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Museum-quality crating and climate-controlled transport for Taylor collectors, galleries, and professionals relocating to the area.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Heavy item pickup and custom crating in Taylor for items too large for standard carriers — safes, appliances, and oversized industrial components.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>
          </div>

          {/* Local Content Section */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Taylor TX: Industrial Shipping for a Changing City</h2>
            <p className="text-gray-700 mb-6">
              The Samsung semiconductor fab at Taylor is one of the largest industrial investments in Texas history. The suppliers, contractors, and support businesses drawn to the area have created demand for specialty crating and precision shipping that the traditional Texas freight market was not prepared for. Semiconductor components, precision instruments, clean-room equipment, and industrial tooling all require custom crating that goes far beyond what standard freight packaging provides.
            </p>
            <p className="text-gray-700 mb-6">
              Austin Crate & Freight builds crates designed for this class of item — precision-cut panels, vibration-isolating foam blocking, anti-static materials when required, and screw-closure designs that allow careful unpacking without power tools. If you are working in or around the Taylor industrial corridor and need crating that meets supply chain requirements, we have the facility and the experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Precision Equipment Crating</h3>
                <p className="text-gray-600 text-sm">Custom wood crates for industrial machinery, precision tools, and semiconductor-adjacent components requiring careful transport.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Professional Relocations</h3>
                <p className="text-gray-600 text-sm">Professionals relocating to Taylor for the Samsung buildout need white-glove shipping for their furniture, art, and valuables. We handle that separately from the standard moving truck.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Nationwide Freight Coordination</h3>
                <p className="text-gray-600 text-sm">Once crated at our Austin facility, we coordinate freight nationwide — LTL, white-glove, or specialty freight depending on what your equipment requires.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Taylor Businesses Choose Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Industrial Crating Capability', body: 'We build crates for heavy, precision, and oddly-shaped industrial equipment. Our Safety Speed panel saw cuts panels to exact specifications. Every crate is engineered for the specific item, not templated.' },
                { title: 'Close to the Corridor', body: 'Taylor is 35 miles northeast of our Austin workshop via TX-79 — a straightforward run. We can pick up in Taylor same-day or next-day for urgent jobs.' },
                { title: '15+ Years in Austin', body: 'We have been building specialty crates in Central Texas since 2010. The Taylor market is new; our expertise is not. We bring the same standards to every job regardless of location.' },
                { title: 'Full Insurance Coverage', body: 'Every shipment is covered from pickup to delivery. We document condition before crating and maintain full coverage throughout transit — essential for high-value industrial and precision equipment.' },
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

          {/* From Our Blog */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources for Taylor Shippers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/how-to-choose-specialty-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Choose a Specialty Shipping Company</h3>
                <p className="text-gray-500 text-sm">10 questions to ask before hiring — including licensing, in-house crating, and claims process.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Custom Crating vs. Standard Boxes</h3>
                <p className="text-gray-500 text-sm">When a wood crate is the only safe option for industrial and precision equipment.</p>
              </Link>
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Cost to Ship Heavy Items in Austin</h3>
                <p className="text-gray-500 text-sm">Real pricing for heavy item pickup, crating, and freight from Central Texas.</p>
              </Link>
              <Link href="/blog/moving-to-austin-ship-valuables" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Moving to Austin? Ship Your Valuables First</h3>
                <p className="text-gray-500 text-sm">What standard movers can't handle — and the right approach for high-value items.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Taylor TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in Taylor, TX?',
                  a: 'Yes. Austin Crate & Freight provides specialty shipping and custom crating throughout Taylor, Texas and Williamson County. We pick up from your Taylor location, build custom crates in-house at our Austin workshop, and ship locally or nationwide. We cover 76574 and the full Taylor area.',
                },
                {
                  q: 'Can you crate industrial equipment for the Taylor semiconductor corridor?',
                  a: 'Yes. We build custom wood crates for industrial equipment, precision instruments, and manufacturing tools. Our crates are engineered to the specific item — not templated — with appropriate interior blocking, foam isolation, and secure closure methods that protect precision equipment in transit.',
                },
                {
                  q: 'How far is Taylor from your Austin workshop?',
                  a: 'Our workshop at 3112 Windsor Rd, Austin TX is approximately 35 miles southwest of Taylor via TX-79 — about 40 minutes. We offer same-day and next-day pickup in Taylor.',
                },
                {
                  q: 'Do you handle relocations for professionals moving to Taylor?',
                  a: 'Yes. With Taylor\'s rapid growth, many professionals are relocating there who have designer furniture, fine art, and high-value items that need specialty crating — not just a standard moving truck. We handle the specialty portion of your move independently, then you use a standard mover for the rest.',
                },
                {
                  q: 'What other Williamson County cities do you serve near Taylor?',
                  a: 'We serve Taylor, Georgetown, Hutto, Round Rock, Pflugerville, Cedar Park, Leander, and all of Williamson County. Same Austin-quality service throughout the entire metro.',
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
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides the same white-glove specialty shipping and custom crating throughout Williamson County and the greater Austin metro.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/georgetown', label: 'Georgetown, TX' },
                { href: '/locations/hutto', label: 'Hutto, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/locations/pflugerville', label: 'Pflugerville, TX' },
                { href: '/locations/cedar-park', label: 'Cedar Park, TX' },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Taylor, TX?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on industrial equipment crating, heavy item pickup, furniture shipping, or any specialty shipping need in Taylor.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Taylor from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves Taylor from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, 35 miles southwest via TX-79. Free pickup throughout Taylor and Williamson County.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Taylor pickup:</strong> Free throughout Taylor and Williamson County</span></li>
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
                title="Austin Crate & Freight workshop serving Taylor TX"
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
