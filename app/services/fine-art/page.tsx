import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import { fineArtFAQSchema } from '@/lib/faq-schema'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Fine Art Specialty Shipping Austin Texas | Museum-Quality Transport',
  description: 'Premier fine art specialty shipping in Austin, Texas. Museum-quality crating, climate-controlled transport, expert art handlers, and full insurance. Serving Austin, Round Rock, Cedar Park & Central Texas galleries, collectors, and museums.',
  keywords: [
    'fine art specialty shipping Austin Texas',
    'fine art shipping Austin',
    'art crating Austin TX',
    'museum transport Austin',
    'painting shipping Austin Texas',
    'sculpture transport Austin',
    'gallery shipping services Austin',
    'climate controlled art transport',
    'art handlers Austin Texas',
    'white glove art shipping Austin',
  ],
  serviceUrl: '/services/fine-art',
  ogImage: '/1.jpg',
})

export default function FineArtShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Fine Art Shipping',
    description: 'Museum-quality crating and climate-controlled transport for paintings, sculptures, and collectibles',
    serviceType: 'Specialty Shipping',
  })

  return (
    <SEOWrapper slug="/services/fine-art">
    <div className="min-h-screen bg-white flex flex-col">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fineArtFAQSchema) }}
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Fine Art Specialty Shipping in Austin, Texas</h1>
              <p className="text-xl text-grey-300 mb-8">
                Premier museum-quality crating and climate-controlled transport for paintings, sculptures, and collectibles across Austin, Round Rock, Cedar Park, and Central Texas. <Link href="/" className="text-emerald hover:text-emerald/80 underline transition-colors">Austin Crate & Freight</Link> delivers white-glove care your valuable artwork deserves.
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
                src="/1.jpg"
                alt="Fine art specialty shipping Austin Texas - Professional museum-quality art transport and crating services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Austin Crate & Freight for Fine Art Specialty Shipping?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving Austin, Round Rock, Cedar Park, and Central Texas with museum-quality art transportation trusted by galleries, collectors, and institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: 'Climate-Controlled Transport',
                description: 'Our specialized vehicles maintain precise temperature (68-72°F) and humidity (45-55% RH) levels throughout transit. Essential for protecting oil paintings, watercolors, and temperature-sensitive materials from warping, cracking, or moisture damage during Austin\'s hot summers and humid conditions.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                title: 'Custom Museum-Quality Crating',
                description: (
                  <>
                    Built-to-spec wooden crates engineered for each artwork&apos;s unique dimensions and fragility. We use archival materials, acid-free padding, and shock-absorbing corner blocks. Every crate is designed to museum standards used by the Blanton Museum and Contemporary Austin galleries. Need just a crate without shipping? Visit our <Link href="/buy-a-crate" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">buy a crate</Link> page for standalone crating services.
                  </>
                )
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Comprehensive Art Insurance',
                description: 'Full replacement value insurance coverage from pickup to delivery. We work with specialized fine art insurers who understand the unique value of paintings, sculptures, and collectibles. Coverage includes transit damage, theft, and environmental incidents.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Certified Art Handlers',
                description: 'Our team includes professionally trained art handlers with extensive experience in gallery installations, museum exhibitions, and private collection management. Each handler understands proper lifting techniques, glove protocols, and artwork-specific handling requirements for paintings, sculptures, and delicate pieces.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: '24/7 GPS Tracking',
                description: 'Monitor your artwork\'s exact location in real-time through our secure tracking portal. Receive automatic notifications at each milestone: pickup confirmation, transit updates, and delivery completion. Available for local Austin deliveries and nationwide shipments.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'White-Glove Installation',
                description: 'Professional art installation and hanging services in Austin and surrounding areas. Our installers bring museum-quality hardware, leveling tools, and expertise to properly mount paintings, mirrors, and wall sculptures. We ensure perfect placement and secure mounting for your peace of mind.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Flexible Scheduling',
                description: 'We work around your gallery openings, exhibition deadlines, and installation schedules. Evening and weekend services available for Austin-area deliveries. Same-day emergency art transport available for time-sensitive shipments within Central Texas.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: 'Condition Documentation',
                description: 'Detailed photographic documentation before packing, during crating, and upon delivery. Complete condition reports provided for insurance purposes and your records. Essential for high-value artwork and gallery-quality pieces.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: 'International Shipping',
                description: 'Experienced in customs documentation, export paperwork, and international art shipping regulations. We handle the complexities of cross-border fine art transport while ensuring your pieces are protected throughout their journey.'
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald/50 hover:shadow-lg transition-all group">
                <div className="w-16 h-16 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 text-emerald group-hover:bg-emerald/20 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Ship Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">What We Ship</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From paintings to sculptures, we handle all types of fine art. We also specialize in <Link href="/services/furniture" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">designer furniture shipping</Link> and <Link href="/services/medical-equipment" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">medical equipment transport</Link> across Austin, Texas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Oil Paintings & Canvases', desc: 'Any size, properly stretched and protected' },
              { name: 'Sculptures & Statues', desc: 'Stone, bronze, wood, or mixed media' },
              { name: 'Framed Artwork', desc: 'Prints, photographs, and framed pieces' },
              { name: 'Glass & Mirrors', desc: 'Specialized crating for fragile items' },
              { name: 'Antiques', desc: 'Historical pieces and collectibles' },
              { name: 'Gallery Collections', desc: 'Full exhibition transport and setup' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center p-8 bg-white rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 mb-4">
              <strong>Looking for other specialty shipping services?</strong> We also provide expert <Link href="/services/furniture" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">furniture shipping</Link> for designers and collectors, and secure <Link href="/services/medical-equipment" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">medical equipment transport</Link> for healthcare facilities across Central Texas.
            </p>
            <p className="text-gray-700">
              Need custom crating without full shipping service? <Link href="/buy-a-crate" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">Buy a crate</Link> built to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Fine Art Shipping Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our proven white-glove process ensures your artwork is protected at every step. Learn about our other <Link href="/services" className="text-emerald hover:text-emerald/80 font-semibold underline transition-colors">specialty shipping services</Link>.
          </p>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Initial Consultation', desc: 'We discuss your artwork, dimensions, value, and any special handling requirements.' },
              { step: 2, title: 'Custom Crating Design', desc: 'Our team designs and builds custom crates specifically for your pieces.' },
              { step: 3, title: 'Professional Packing', desc: 'Expert handlers carefully wrap and secure artwork in climate-controlled crates.' },
              { step: 4, title: 'Climate-Controlled Transport', desc: 'Your art is transported in our temperature and humidity-regulated vehicles.' },
              { step: 5, title: 'Delivery & Installation', desc: 'White-glove delivery with optional professional hanging and placement services.' }
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fine Art Specialty Shipping FAQs</h2>
            <p className="text-xl text-gray-600">
              Common questions about our fine art shipping services in Austin, Texas
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: 'What makes fine art specialty shipping different from regular shipping in Austin?',
                answer: 'Fine art specialty shipping in Austin, Texas requires museum-quality standards that regular freight services cannot provide. Our specialized service includes climate-controlled vehicles (maintaining 68-72°F and 45-55% RH), custom-built archival crating, trained art handlers, comprehensive insurance, and white-glove delivery. We understand the unique requirements of paintings, sculptures, and valuable collectibles that need protection from Austin\'s extreme heat, humidity, and temperature fluctuations during transport.'
              },
              {
                question: 'How much does fine art shipping cost in Austin?',
                answer: (
                  <>
                    Fine art shipping costs in Austin depend on artwork size, value, destination, and special requirements. Local Austin deliveries typically start around $200-500, while custom crating adds $300-1,000+ depending on dimensions. Cross-country shipments range from $800-3,000+. We provide free detailed quotes after discussing your specific artwork. Factors include: piece dimensions and weight, insurance value, pickup/delivery locations in Austin or Central Texas, timeframe, and any special handling needs. Need just a custom crate? Visit our <Link href="/buy-a-crate" className="text-emerald font-semibold hover:underline">buy a crate page</Link> for standalone crating services. Contact us at (512) 240-9818 for a precise shipping estimate.
                  </>
                )
              },
              {
                question: 'Do you ship artwork to and from Austin galleries and museums?',
                answer: 'Yes, we regularly provide fine art specialty shipping services for Austin galleries, museums, private collectors, and art dealers throughout Central Texas. Our team has experience with exhibition installations, gallery rotations, museum loans, art fair transport, auction house pickups and deliveries, and estate collection transfers. We work with venues like The Contemporary Austin, Blanton Museum area, and private galleries throughout Austin, Round Rock, Cedar Park, and Georgetown. We understand gallery schedules and can coordinate with your installation timeline.'
              },
              {
                question: 'How do you protect artwork during hot Austin summers?',
                answer: 'Austin\'s summer temperatures (often exceeding 100°F) pose serious risks to fine art. Our climate-controlled vehicles maintain consistent 68-72°F temperatures regardless of outside conditions. We also: pre-cool vehicles before loading, minimize time artwork spends in non-climate zones, schedule early morning pickups/deliveries when possible, use insulated blankets for additional protection, and monitor interior temperature throughout transit. This is crucial for oil paintings, acrylics, watercolors, antique frames, and mixed media pieces that can warp, crack, or suffer adhesive failure in extreme heat.'
              },
              {
                question: 'What types of art can you ship from Austin?',
                answer: (
                  <>
                    We handle all types of fine art shipping from Austin, Texas including: oil paintings and canvases (any size), framed artwork and prints, sculptures (stone, bronze, wood, metal, ceramic), glass art and mirrors, antiques and collectibles, photography and giclée prints, mixed media installations, wall-mounted pieces and reliefs, 3D art and assemblages, and full gallery collections. From small watercolors to large-scale sculptures, our Austin team has the expertise and equipment to safely transport your valuable art. We also offer specialized crating for oversized or irregularly shaped pieces. Beyond fine art, we also provide expert <Link href="/services/furniture" className="text-emerald font-semibold hover:underline">designer furniture shipping</Link> and <Link href="/services/medical-equipment" className="text-emerald font-semibold hover:underline">medical equipment transport</Link> services.
                  </>
                )
              },
              {
                question: 'Do you provide art installation services in Austin?',
                answer: 'Yes, our white-glove fine art installation service is available throughout Austin, Round Rock, Cedar Park, Georgetown, and Central Texas. Our professional installers bring museum-quality mounting hardware, precision leveling tools, and years of gallery experience. Services include: artwork hanging and placement, mirror installation, sculpture positioning and mounting, gallery lighting consultation, wall preparation assessment, and multi-piece collection installation. We ensure proper weight distribution, secure mounting, and perfect alignment. Installation can be scheduled with your delivery or as a separate service.'
              },
              {
                question: 'How far in advance should I schedule fine art shipping in Austin?',
                answer: 'For local Austin-area shipments, we can often accommodate 2-3 days notice, with same-day emergency service available for urgent needs. For custom crating projects (recommended for high-value or fragile pieces), allow 5-7 days. Long-distance or international shipments typically need 1-2 weeks advance notice. Gallery exhibition installations and museum loans should be scheduled 2-3 weeks ahead. However, we understand art world deadlines and will work to accommodate your timeline. For Austin art fair transport or last-minute gallery needs, call (512) 240-9818 to discuss expedited options.'
              },
              {
                question: 'Is my artwork insured during shipping from Austin?',
                answer: 'Yes, comprehensive insurance coverage is included in our fine art specialty shipping service. We work with specialized fine art insurance carriers who understand artwork valuation and provide full replacement value coverage. Insurance covers: transit damage from any cause, theft or loss, environmental damage (moisture, temperature), handling accidents, and loading/unloading incidents. You\'ll receive a certificate of insurance before shipment. For high-value pieces (over $50,000), we coordinate with your existing art insurance provider or arrange specialized coverage. All artwork is documented with condition reports and photos before transport from Austin.'
              },
              {
                question: 'Can you ship artwork internationally from Austin, Texas?',
                answer: 'Absolutely. Austin Crate & Freight provides international fine art shipping with expertise in customs documentation, export regulations, and cross-border art transport. We handle: customs declarations and paperwork, CITES permits for regulated materials (ivory, exotic woods), temporary import bonds (TIB) for exhibitions, cultural property documentation, duty and tax coordination, and international insurance coverage. We ship to/from Europe, Asia, South America, and worldwide. Our Austin team manages the entire international shipping process so your artwork clears customs smoothly and arrives safely at galleries, museums, or private collections globally.'
              },
              {
                question: 'What areas around Austin do you serve for fine art shipping?',
                answer: (
                  <>
                    <Link href="/" className="text-emerald font-semibold hover:underline">Austin Crate & Freight</Link> provides fine art specialty shipping throughout Central Texas including: Austin (all neighborhoods - Downtown, West Lake Hills, Tarrytown, Hyde Park, South Congress), Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Lakeway, Bee Cave, Dripping Springs, and surrounding Hill Country areas. We also service the Texas Triangle: San Antonio (90 miles), Houston (165 miles), and Dallas-Fort Worth (195 miles). For nationwide shipping, we transport fine art from Austin to any U.S. destination. Local same-day service available within the Austin metro area. Visit our <Link href="/locations/round-rock" className="text-emerald font-semibold hover:underline">Round Rock</Link>, <Link href="/locations/cedar-park" className="text-emerald font-semibold hover:underline">Cedar Park</Link>, and <Link href="/locations/georgetown" className="text-emerald font-semibold hover:underline">Georgetown</Link> location pages for area-specific information. We also offer <Link href="/services/furniture" className="text-emerald font-semibold hover:underline">furniture shipping</Link> and <Link href="/services/medical-equipment" className="text-emerald font-semibold hover:underline">medical equipment transport</Link> services.
                  </>
                )
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <div className="text-gray-700 leading-relaxed">{faq.answer}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Have more questions about fine art specialty shipping in Austin? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(512) 240-9818"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (512) 240-9818
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 border-2 border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-200 transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Ship Your Fine Art in Austin, Texas?</h2>
          <p className="text-xl text-grey-300 mb-8">
            Get a free quote from our fine art specialty shipping specialists serving Austin, Round Rock, Cedar Park, and Central Texas. We're here to ensure your valuable artwork arrives safely with museum-quality care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald rounded-lg font-semibold text-lg text-white hover:bg-emerald/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (512) 240-9818
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-grey-800/50 border-2 border-grey-700 rounded-lg font-semibold text-lg text-grey-300 hover:bg-grey-700/50 hover:border-grey-600 backdrop-blur-sm transition-all duration-300"
            >
              Request a Free Quote
            </Link>
          </div>
          <div className="border-t border-grey-700 pt-8">
            <p className="text-grey-400 mb-4">Also explore our other specialty shipping services:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/furniture" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                Designer Furniture Shipping
              </Link>
              <span className="text-grey-600">•</span>
              <Link href="/services/medical-equipment" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                Medical Equipment Transport
              </Link>
              <span className="text-grey-600">•</span>
              <Link href="/services" className="text-emerald hover:text-emerald/80 font-medium transition-colors">
                View All Services
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
