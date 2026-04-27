import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, generateLocalBusinessSchema, SITE_CONFIG } from '@/lib/seo-utils'
import { furnitureFAQSchema } from '@/lib/faq-schema'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Furniture Shipping & Crating Austin Texas',
  description: 'Expert furniture shipping and crating in Austin, Texas. Custom wood crates built in-house, white-glove pickup, expert disassembly & reassembly for designer, antique & heavy furniture. Scratch-free guarantee. Call (512) 240-9818.',
  keywords: [
    'furniture shipping and crating Austin Texas',
    'furniture crating Austin TX',
    'custom furniture crating Austin',
    'furniture shipping Austin Texas',
    'furniture shipping Austin TX',
    'furniture crating Austin Texas',
    'antique furniture shipping Texas',
    'white glove furniture movers Austin',
    'heavy furniture pickup Austin TX',
    'designer furniture transport Austin',
    'luxury furniture shipping Austin',
    'furniture shipping crating Central Texas',
  ],
  serviceUrl: '/services/furniture',
  ogImage: '/2.jpg',
})

export default function FurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Furniture Shipping & Crating Austin Texas',
    description: 'Furniture shipping and crating in Austin, Texas. Custom wood crates built in-house, white-glove handling for designer, antique, and heavy furniture with expert disassembly, protective wrapping, and precision reassembly.',
    serviceType: 'Specialty Shipping',
  })

  const localBusinessSchema = generateLocalBusinessSchema({
    locationName: 'Austin',
    description: 'Custom furniture shipping in Austin, Texas. White-glove pickup, expert disassembly, custom crating, and precision reassembly for designer, antique, and heavy furniture.',
    latitude: 30.2972,
    longitude: -97.7594,
    image: '/2.jpg',
    serviceUrl: '/services/furniture',
  })

  return (
    <SEOWrapper slug="/services/furniture">
    <div className="min-h-screen bg-white flex flex-col">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(furnitureFAQSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 md:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Furniture Shipping &amp; Crating in Austin, Texas</h1>
              <p className="text-xl text-grey-300 mb-8">
                Austin&apos;s specialist in furniture shipping and crating. We build every crate in-house at our Austin shop, and provide white-glove pickup, expert disassembly, and precision reassembly for designer, antique, and heavy furniture, locally and nationwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(512) 240-9818"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (512) 240-9818
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 hover:border-grey-600 backdrop-blur-sm transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-grey-700 shadow-xl">
              <Image
                src="/2.jpg"
                alt="Designer furniture shipping and custom wood crating in Austin Texas by Austin Crate & Freight"
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

      {/* Trust Bar */}
      <section className="py-6 px-4 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <span className="flex items-center gap-2">✅ Crates Built In-House, Austin, TX</span>
            <span className="flex items-center gap-2">✅ Scratch-Free Guarantee</span>
            <span className="flex items-center gap-2">✅ Fully Insured &amp; Licensed</span>
            <span className="flex items-center gap-2">✅ Free Local Pickup</span>
            <span className="flex items-center gap-2">✅ Serving Austin Since 2010</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Austin Crate &amp; Freight for Furniture Shipping?</h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
            We are not a moving company, we are a specialty shipping and crating company based in Austin, Texas. That distinction matters when you are protecting something valuable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                title: 'White-Glove Service',
                description: 'Premium handling from pickup to placement, ensuring your luxury furniture receives the care it deserves.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Expert Assembly',
                description: 'Professional disassembly before shipping and precise reassembly at your destination.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: 'Protective Wrapping',
                description: 'Multi-layer protection with premium blankets, shrink wrap, and custom crating when needed.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Scratch-Free Guarantee',
                description: 'Specialized equipment and techniques to ensure zero damage during transport.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Inside Delivery',
                description: 'We place furniture exactly where you want it, not just at your doorstep.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                ),
                title: 'Debris Removal',
                description: 'We remove all packing materials and dispose of them responsibly.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 text-emerald">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Crating Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-4 uppercase tracking-widest">Built In Austin</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Furniture Crating, Built In-House</h2>
              <p className="text-gray-700 text-lg mb-4">
                Most shipping companies wrap furniture in blankets and hope for the best. We go further. For valuable, fragile, or oversized furniture, we build a <strong>custom wood crate around your piece</strong>, engineered to its exact dimensions, right here at our Austin, Texas shop.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                Our shop runs a <strong>Safety Speed 6400 vertical panel saw</strong> that cuts every panel to within 1/32&quot; accuracy. That means your crate fits tight, closes flush, and protects your furniture the way museum-quality shipping demands.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Crates built to your furniture\'s exact dimensions',
                  'Interior foam blocking and padding included',
                  'Screw-closure lids for easy inspection at delivery',
                  'Moisture-resistant plywood, no warping in Texas heat',
                  'Suitable for LTL freight, air freight, and international shipping',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">When Do You Need a Furniture Crate?</h3>
              <div className="space-y-4">
                {[
                  { trigger: 'Antique or heirloom pieces', reason: 'Irreplaceable items need hard-shell protection, not just blankets.' },
                  { trigger: 'LTL freight or cross-country shipping', reason: 'Multiple handling points mean higher impact risk without a solid crate.' },
                  { trigger: 'International or air freight', reason: 'Customs and air carriers require ISPM-15 compliant crating.' },
                  { trigger: 'Oversized or awkward pieces', reason: 'Custom crates stabilize irregular shapes that standard carriers cannot handle.' },
                  { trigger: 'High-value designer furniture', reason: 'Your investment deserves more than a cardboard box.' },
                ].map((row, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-grey-50 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-emerald mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">{row.trigger}</p>
                      <p className="text-gray-600 text-sm">{row.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-sm text-emerald-800">
                <strong>Not sure if you need a crate?</strong> Call us at (512) 240-9818 and we will advise you honestly, no upsell, no pressure.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Ship Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Furniture We Ship &amp; Crate in Austin</h2>
          <p className="text-center text-gray-600 text-lg mb-12">If it is worth something to you, it is worth crating properly.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Designer Sofas & Sectionals', desc: 'Luxury seating from top brands, properly wrapped and crated', href: '/services/furniture/designer-sofas-sectionals' },
              { name: 'Antique & Heirloom Furniture', desc: 'Period-correct handling for furniture that cannot be replaced', href: '/services/furniture/antique-heirloom-furniture' },
              { name: 'Dining Tables & Sets', desc: 'Large tables, chairs, buffets, and china cabinets', href: '/services/furniture/dining-tables-sets' },
              { name: 'Bedroom Furniture', desc: 'Platform beds, sleigh beds, dressers, and armoires', href: '/services/furniture/bedroom-furniture' },
              { name: 'Custom & Handmade Pieces', desc: 'One-of-a-kind builds by local Austin craftsmen', href: '/services/furniture/custom-handmade-furniture' },
              { name: 'Executive & Office Furniture', desc: 'Desks, conference tables, and credenzas', href: '/services/furniture/executive-office-furniture' },
              { name: 'Oversized & Heavy Furniture', desc: 'Pieces too large or heavy for standard carriers', href: '/services/furniture/oversized-heavy-furniture' },
              { name: 'Outdoor & Patio Furniture', desc: 'Teak, wrought iron, and high-end outdoor collections', href: '/services/furniture/outdoor-patio-furniture' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-emerald/50 hover:shadow-md transition-all group">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald transition-colors">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                  <span className="text-emerald text-sm font-medium">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Furniture Shipping &amp; Crating Process</h2>
          <p className="text-center text-gray-600 text-lg mb-12">From your Austin home or business to anywhere in the country, here is how we do it.</p>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Free Quote & Assessment', desc: 'Call (512) 240-9818 or fill out our contact form. We assess your furniture, ask the right questions, and give you an honest quote, no surprises.' },
              { step: 2, title: 'Pickup Anywhere in Greater Austin', desc: 'Our crew arrives with the right equipment: moving blankets, dollies, straps, and lift-gate trucks. We cover Austin, Round Rock, Cedar Park, Georgetown, and surrounding areas.' },
              { step: 3, title: 'Expert Disassembly', desc: 'For beds, sectionals, and large case pieces, we carefully disassemble using proper techniques, hardware is bagged and labeled so nothing gets lost.' },
              { step: 4, title: 'Custom Crating or Premium Wrapping', desc: 'Valuable or fragile pieces get a custom wood crate built in our Austin shop. Other pieces receive multi-layer furniture blankets and stretch wrap.' },
              { step: 5, title: 'Secure Transport', desc: 'Furniture rides in our climate-controlled trucks, fully padded and strapped. For long-haul, we use insured LTL freight carriers with specialty freight experience.' },
              { step: 6, title: 'Reassembly & White-Glove Delivery', desc: 'We place and reassemble your furniture exactly where you want it, remove all packing materials, and leave your space clean.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Furniture Shipping &amp; Crating Across Greater Austin</h2>
          <p className="text-gray-600 text-lg mb-10">
            We serve the entire Austin metro area. If you are not sure whether we cover your location, just call, we almost certainly do.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville',
              'Kyle', 'Buda', 'Lakeway', 'Bee Cave', 'Manor', 'Bastrop', 'San Marcos',
              'Leander', 'Liberty Hill', 'Hutto', 'Taylor',
            ].map((city) => (
              <span key={city} className="px-4 py-2 bg-grey-50 border border-gray-200 rounded-full text-gray-700 text-sm font-medium">
                {city}, TX
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Furniture Shipping &amp; Crating, Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much does furniture shipping and crating cost in Austin, Texas?',
                a: 'Local furniture shipping in Austin typically starts at $200–$500 depending on size, weight, and whether crating is needed. Custom furniture crating starts around $150–$400 depending on dimensions. Long-distance furniture freight is priced by weight-class and destination. Call (512) 240-9818 for a free, no-obligation quote.',
              },
              {
                q: 'Do you build custom furniture crates in Austin?',
                a: 'Yes, we build every crate in-house at our Austin, Texas shop. We do not order generic crates or use cardboard. Each crate is built to the exact dimensions of your furniture piece, with interior foam blocking and a screw-closure lid for easy inspection.',
              },
              {
                q: 'Can you ship antique furniture without damaging it?',
                a: 'Absolutely. Antique furniture is one of our specialties. We use period-correct handling techniques, avoid adhesives or materials that could damage finishes, and build custom crates for pieces that cannot be padded adequately. Our team is trained in proper disassembly for antique joinery.',
              },
              {
                q: 'Do you offer furniture pickup in Austin?',
                a: 'Yes. We offer free furniture pickup throughout Greater Austin and surrounding communities including Round Rock, Cedar Park, Georgetown, Pflugerville, Kyle, and Buda. Our crew arrives with all necessary equipment, no trip to a drop-off location required.',
              },
              {
                q: 'Can you ship furniture across the country from Austin?',
                a: 'Yes. We ship furniture from Austin to all 50 states. For long-distance shipments we use fully insured specialty LTL freight carriers experienced with high-value goods. Crating is strongly recommended for cross-country furniture shipments.',
              },
              {
                q: 'What is the difference between furniture shipping and furniture moving?',
                a: 'Furniture movers handle local household moves and are optimized for volume and speed. We are a specialty shipping company, we focus on single valuable pieces or small jobs where craftsmanship and protection are the priority. We crate, wrap, and ship furniture the same way museums ship fine art.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Specialist Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Furniture Specialist Services</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every furniture type has its own shipping challenges. We specialize in all of them, click to learn about your specific piece.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: '/services/furniture/designer-sofas-sectionals', title: 'Luxury Sofas & Sectionals', desc: 'RH, Natuzzi, Roche Bobois, and custom sectionals, fabric and leather-safe wrapping, modular disassembly, and white-glove placement.' },
              { href: '/services/furniture/dining-tables-sets', title: 'Dining Tables & Sets', desc: 'Large solid-wood, live-edge, glass-top, and extension tables, leg removal, separate glass crating, and chair bundling.' },
              { href: '/services/furniture/bedroom-furniture', title: 'Bedroom Furniture', desc: 'Beds, dressers, armoires, and complete bedroom sets, full disassembly, mirror crating, and reassembly at delivery.' },
              { href: '/services/furniture/designer-chairs', title: 'Designer Chairs', desc: 'Eames, Herman Miller, Knoll, and Barcelona chairs, geometry-specific crating for exposed frames and delicate upholstery.' },
              { href: '/services/furniture/cabinets-credenzas', title: 'Cabinets & Credenzas', desc: 'Media credenzas, china cabinets, sideboards, and display cabinets, glass panel protection and door-securing crating.' },
              { href: '/services/furniture/grandfather-clock-shipping', title: 'Grandfather Clocks', desc: 'Pendulum removal, weight packaging, chime rod padding, and tall-case crating for floor clocks and longcase movements.' },
              { href: '/services/furniture/marble-stone-furniture', title: 'Marble & Stone Furniture', desc: 'Marble dining tables, travertine tops, granite surfaces, weight-rated crating, edge protection, and top/base separation.' },
              { href: '/services/furniture/antique-heirloom-furniture', title: 'Antique & Heirloom Furniture', desc: 'Museum-safe techniques for period furniture, no adhesives on antique finishes, custom joinery-aware disassembly.' },
              { href: '/services/furniture/antique-furniture-shipping', title: 'Antique Furniture Shipping TX', desc: 'Texas-wide and nationwide shipping for antique dealers, auction houses, and private collectors.' },
              { href: '/services/furniture/custom-handmade-furniture', title: 'Custom & Handmade Furniture', desc: 'One-of-a-kind pieces from Austin artisans and custom woodworkers, shipping your custom piece like it was made to be shipped.' },
              { href: '/services/furniture/executive-office-furniture', title: 'Executive Office Furniture', desc: 'Executive desks, credenzas, conference tables, and high-value workstations, professional crating for office relocations.' },
              { href: '/services/furniture/outdoor-patio-furniture', title: 'Outdoor & Patio Furniture', desc: 'Heavy teak, wrought iron, and luxury outdoor sets, protected shipping for weather-grade and designer patio pieces.' },
              { href: '/services/furniture/oversized-heavy-furniture', title: 'Oversized & Heavy Furniture', desc: 'Pieces too large or heavy for standard carriers, liftgate service, two-person crews, and freight-rated crating.' },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-emerald/50 hover:shadow-sm transition-all duration-200">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Furniture Crating &amp; Shipping Projects in Austin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A look inside our Austin workshop at 3112 Windsor Rd, where every furniture crate is handbuilt for designer pieces, antiques, and luxury furniture shipped across Texas and the U.S.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/IMG_3114.jpg', alt: 'Custom wood crate being built for furniture shipping in Austin Texas at Austin Crate & Freight workshop' },
              { src: '/IMG_3832_1681922619689.jpg', alt: 'Furniture crating in progress at Austin Crate & Freight workshop, 3112 Windsor Rd Austin TX' },
              { src: '/IMG_3954_1686069785125.jpg', alt: 'Designer furniture packed in custom crate for white-glove shipping from Austin Texas' },
              { src: '/IMG_3979_1686773817157.jpg', alt: 'Austin craftsman building furniture shipping crate for local white-glove pickup' },
              { src: '/IMG_4196_1695841417957.jpg', alt: 'Completed furniture shipping crate ready for LTL freight from Austin Texas' },
              { src: '/IMG_5091_1714149760004.jpg', alt: 'Antique furniture wrapped and crated for safe transport by Austin Crate & Freight' },
            ].map((img, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  quality={70}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Workshop / NAP + Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Austin Crating Workshop</h2>
              <p className="text-gray-700 text-lg mb-6">
                Austin Crate &amp; Freight is locally based at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, minutes from major furniture districts and luxury home showrooms. We offer free furniture pickup throughout the Austin metro and ship nationwide.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald font-bold">✓</span> <span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald font-bold">✓</span> <span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald font-bold">✓</span> <span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald font-bold">✓</span> <span><strong>Service area:</strong> Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Lakeway, Bee Cave, Dripping Springs</span></li>
              </ul>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Austin+Crate+%26+Freight+3112+Windsor+Rd+Austin+TX+78703"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white rounded-lg font-semibold hover:bg-emerald/90 transition-all"
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
                title="Austin Crate & Freight location at 3112 Windsor Rd, Austin, TX 78703"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Furniture Shipping or Crating in Austin?</h2>
          <p className="text-xl text-grey-300 mb-10">
            Whether it&apos;s a designer sofa, a family heirloom, or a commercial delivery, Austin Crate &amp; Freight builds the crate and ships it right. Free pickup anywhere in Greater Austin. Get a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald rounded-lg font-semibold text-lg text-white hover:bg-emerald/90 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (512) 240-9818
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-grey-800/50 border-2 border-grey-700 rounded-lg font-semibold text-lg text-grey-300 hover:bg-grey-700/50 hover:border-grey-600 backdrop-blur-sm transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>

          {/* Related Services Links */}
          <div className="mt-12 pt-8 border-t border-grey-700">
            <p className="text-grey-400 mb-4 text-sm uppercase tracking-widest">Related Services</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/heavy-items" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                Heavy Item Pickup &rarr;
              </Link>
              <Link href="/services/fine-art" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                Fine Art Shipping &rarr;
              </Link>
              <Link href="/buy-a-crate" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                Buy a Custom Crate &rarr;
              </Link>
              <Link href="/locations/round-rock" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                Round Rock Service &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
