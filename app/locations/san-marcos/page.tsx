import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'San Marcos',
  description: 'Specialty shipping & custom crating in San Marcos, TX. Furniture shipping, fine art transport, heavy item pickup, and antique shipping. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping San Marcos TX',
    'specialty shipping San Marcos Texas',
    'custom crating San Marcos TX',
    'furniture shipping San Marcos',
    'furniture crating San Marcos TX',
    'fine art shipping San Marcos',
    'antique shipping San Marcos TX',
    'heavy item pickup San Marcos',
    'oversized shipping San Marcos TX',
    'white glove shipping San Marcos',
    'San Marcos shipping company',
    'crating San Marcos Texas',
  ],
  locationUrl: '/locations/san-marcos',
})

export default function SanMarcos() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'San Marcos',
    description: 'Specialty shipping and custom crating services in San Marcos, Texas',
    latitude: 29.8827,
    longitude: -97.9411,
    image: '/IMG_2982.jpg',
    serviceUrl: '/locations/san-marcos',
  })

  return (
    <SEOWrapper slug="/locations/san-marcos">
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
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, San Marcos, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in San Marcos, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight serves San Marcos with expert specialty shipping and custom crating. From the Wimberley corridor to the Texas State University district and the antique shops along Guadalupe Street, we pick up, crate, and ship furniture, fine art, antiques, heavy items, and medical equipment — white-glove care, real Austin pricing.
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
                src="/IMG_2982.jpg"
                alt="Custom crating and specialty shipping in San Marcos Texas by Austin Crate & Freight"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in San Marcos</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">San Marcos sits at the intersection of Austin's growth corridor and the Texas Hill Country — a mix of university life, antique culture, and fast-growing residential development. We serve every corner of it, from Trace development to the Wonderland of the Americas antique row along Guadalupe.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Museum-quality crating and climate-controlled transport for San Marcos galleries, collectors, and TXST faculty collections.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Antique & Furniture Shipping</h3>
              <p className="text-gray-600 mb-4">San Marcos has one of the strongest antique scenes in Central Texas. We crate and ship antique furniture, heirlooms, and designer pieces with museum-quality protection.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Equipment</h3>
              <p className="text-gray-600 mb-4">HIPAA-aware transport for San Marcos medical facilities, Christus Santa Rosa clinics, and healthcare providers throughout Hays County.</p>
              <Link href="/services/medical-equipment" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Heavy package pickup in San Marcos for safes, appliances, exercise equipment, and items too large for standard carriers — throughout 78666 and 78667.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Items that exceed standard carrier limits — sculptures, industrial equipment, and anything too big for FedEx or UPS from San Marcos.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
            </div>
          </div>

          {/* Local Content Section */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">San Marcos Antique Shipping & Specialty Crating</h2>
            <p className="text-gray-700 mb-6">
              San Marcos is home to some of the best antique dealers in Central Texas — the antique row along Guadalupe Street, the Wimberley Antique Market, and independent dealers throughout Hays County attract buyers and collectors from across Texas. When those pieces need to move — locally, across the state, or cross-country — custom crating is the only safe option. Blanket wrap is not adequate for a Victorian dresser or a set of hand-painted china going 1,500 miles.
            </p>
            <p className="text-gray-700 mb-6">
              We work with San Marcos antique dealers, estate sale companies, and individual buyers who need reliable crating and shipping for pieces that cannot be replaced. Every crate is built in-house at our Austin workshop to the piece's exact dimensions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Antique Furniture Crating</h3>
                <p className="text-gray-600 text-sm">Custom crates for Victorian, Mid-Century, and handcrafted antique furniture from San Marcos dealers and estate sales.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Texas State University Area</h3>
                <p className="text-gray-600 text-sm">Faculty relocations, research equipment, laboratory instruments, and institutional art collections for the TXST community.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Hill Country & Wimberley</h3>
                <p className="text-gray-600 text-sm">High-value homes in the Wimberley and Canyon Lake corridor — custom furniture, sculpture, and fine art shipping for Hill Country estates.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why San Marcos Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'In-House Crating', body: 'We build every crate at our Austin workshop — not outsourced. Precision cuts, custom foam blocking, and screw-closure lids that protect your piece and allow easy opening at the destination.' },
                { title: 'Antique Expertise', body: 'We understand what antiques need: acid-free materials, climate-controlled transport for heat-sensitive finishes, and gentle handling that respects the age and fragility of older pieces.' },
                { title: 'I-35 Corridor Coverage', body: 'San Marcos is 30 miles from our Austin workshop via I-35 — we are out there fast. Same-day pickup is available for urgent jobs.' },
                { title: 'Fully Insured', body: 'Every shipment is covered. We document condition before crating and maintain full coverage throughout transit. Your item is protected from San Marcos to its final destination.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Helpful Resources for San Marcos Shippers</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Link href="/blog/antique-shipping-guide" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-gray-500 text-sm">Insurance, crating, and documentation before an antique or heirloom leaves your hands.</p>
              </Link>
              <Link href="/blog/how-to-choose-specialty-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">How to Choose a Specialty Shipping Company</h3>
                <p className="text-gray-500 text-sm">10 questions to ask before you hire — and the red flags that mean walk away.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">Custom Crating vs. Standard Boxes</h3>
                <p className="text-gray-500 text-sm">When a wood crate is the only safe option for your antique or collectible.</p>
              </Link>
              <Link href="/blog/what-is-white-glove-shipping" className="group block bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">What Is White-Glove Shipping?</h3>
                <p className="text-gray-500 text-sm">What the premium service level includes and when it is worth paying for.</p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping San Marcos TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you offer specialty shipping and crating in San Marcos, TX?',
                  a: 'Yes. Austin Crate & Freight provides comprehensive specialty shipping and custom crating in San Marcos, Texas. We pick up from your San Marcos location, build custom crates in-house at our Austin workshop, and deliver locally or ship nationwide. We cover all of Hays County including 78666 and 78667.',
                },
                {
                  q: 'Do you ship antiques from San Marcos dealers?',
                  a: 'Yes — this is one of our most common San Marcos jobs. We work with antique dealers, estate sale companies, and private collectors throughout the San Marcos area. Every antique gets a custom-built wood crate designed to its specific dimensions, with acid-free interior materials and documentation of pre-shipment condition.',
                },
                {
                  q: 'How far is San Marcos from your Austin workshop?',
                  a: 'Our workshop at 3112 Windsor Rd, Austin TX is approximately 30 miles north of San Marcos via I-35 — about 35-40 minutes. We offer same-day pickup in San Marcos and can typically schedule within 24-48 hours.',
                },
                {
                  q: 'Can you ship furniture from San Marcos to another state?',
                  a: 'Yes. We pick up in San Marcos, crate at our Austin facility, and coordinate freight nationwide. For designer furniture, antiques, or any piece where a standard mover\'s blanket wrap is not adequate, custom crating is the right approach. Call (512) 240-9818 for a specific quote.',
                },
                {
                  q: 'Do you serve the Wimberley and Canyon Lake area near San Marcos?',
                  a: 'Yes. We serve San Marcos, Wimberley, Canyon Lake, Buda, Kyle, and the full Hays County area. Hill Country estates in the Wimberley corridor frequently have high-value furniture, art, and antiques that need specialty crating — we handle that regularly.',
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
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides the same white-glove specialty shipping and custom crating throughout the greater Austin area and Central Texas.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/kyle', label: 'Kyle, TX' },
                { href: '/locations/buda', label: 'Buda, TX' },
                { href: '/locations/dripping-springs', label: 'Dripping Springs, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from San Marcos?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on antique shipping, furniture crating, heavy item pickup, or any specialty shipping need in San Marcos, TX.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving San Marcos from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight serves San Marcos from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, 30 miles north via I-35. Free pickup throughout San Marcos, Wimberley, and all of Hays County.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span> <span><strong>San Marcos pickup:</strong> Free throughout Hays County and surrounding areas</span></li>
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
                title="Austin Crate & Freight workshop serving San Marcos TX"
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
