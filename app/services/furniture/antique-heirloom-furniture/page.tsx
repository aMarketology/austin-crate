import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/antique-heirloom-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Antique & Heirloom Furniture Shipping Austin Texas',
    description: 'Expert antique and heirloom furniture shipping and crating in Austin, Texas. Period-correct handling, custom wood crates, white-glove service for irreplaceable pieces. Call (512) 240-9818.',
    keywords: [
      'antique furniture shipping Austin Texas',
      'heirloom furniture shipping Austin TX',
      'antique furniture crating Austin',
      'ship antique furniture Austin',
      'vintage furniture transport Austin Texas',
      'antique furniture movers Austin TX',
      'antique crating Austin Texas',
      'fragile furniture shipping Austin',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function AntiqueFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Antique & Heirloom Furniture Shipping Austin Texas',
    description: 'Period-correct handling, custom crating, and white-glove service for antique and heirloom furniture in Austin, TX.',
    serviceType: 'Specialty Shipping',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/services/furniture" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Furniture Shipping & Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Antique &amp; Heirloom Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Irreplaceable pieces require more than care   they require expertise. We ship and crate antique and heirloom furniture in Austin using period-correct handling techniques and museum-quality crating built in our own shop.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes Antiques Different */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Antique Furniture Demands Specialist Handling</h2>
            <p className="text-gray-700 text-lg mb-4">
              Antique furniture was not built to modern standards because it did not need to be   it was built to last generations in a home, not to survive a freight trailer. Hide glue joints, hand-cut dovetails, gilt finishes, inlay work, and aged veneers are all highly vulnerable to the stresses of transit: vibration, humidity swings, and rough handling.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Our team is trained in identifying original construction methods, understanding how period pieces should and should not be disassembled, and selecting crating and padding materials that will not react chemically with aged finishes or wood.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'No Adhesive Tapes on Surfaces', desc: 'We never apply tape directly to antique wood, veneer, or gilt. All fastening is done with acid-free padding and wrap.' },
                { title: 'Hide Glue Joint Awareness', desc: 'Antique joints are often repaired with hide glue   we know how to move pieces without stressing joints that could fail under tension.' },
                { title: 'Veneer & Inlay Protection', desc: 'Fragile veneers and inlay work are individually padded and crated with rigid internal bracing to prevent flex.' },
                { title: 'Climate-Aware Crating', desc: 'For long-distance shipments we use moisture-resistant crating materials and can include desiccant packs to protect against humidity.' },
                { title: 'Documented Condition Reports', desc: 'We photograph your piece before and after handling so condition is documented   important for insurance and peace of mind.' },
                { title: 'Custom Fit   No Generic Boxes', desc: 'Every antique piece gets a crate built to its dimensions. We do not use generic boxes that allow movement inside.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Antique Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Antique Furniture Types We Ship in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Victorian & Edwardian Furniture',
                'Chippendale & Queen Anne Pieces',
                'French Provincial & Louis XVI',
                'Arts & Crafts / Mission Style',
                'Mid-Century Modern Vintage',
                'Tiffany & Period Case Pieces',
                'Antique Armoires & Wardrobes',
                'Secretary Desks & Escritoires',
                'Antique Dining Sets & Sideboards',
                'Heirloom Rocking Chairs & Settees',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'Can you ship an antique I bought at an Austin estate sale?', a: 'Absolutely. This is one of our most common requests. We provide pickup from private homes, estates, galleries, and auction houses anywhere in Greater Austin.' },
                { q: 'Do you disassemble antiques for shipping?', a: 'Only when necessary and safe to do so given the construction. We never force disassembly on pieces where it would risk damage. When we do disassemble, we use period-correct techniques.' },
                { q: 'Is antique furniture shipping insured?', a: 'Yes. All shipments are fully insured. We recommend declared value coverage for high-value antiques, which we can arrange through our freight partners.' },
                { q: 'How do I get a quote for shipping an antique Austin to anywhere in the US?', a: 'Call (512) 240-9818 or fill out our contact form with dimensions and destination. We will come back with an honest quote, usually within 24 hours.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ship Your Antique Furniture with Confidence</h2>
            <p className="text-grey-300 text-lg mb-8">Call us today or request a free quote. We handle irreplaceable pieces every day.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-grey-400">
              <Link href="/services/furniture/designer-sofas-sectionals" className="hover:text-emerald transition">Designer Sofas →</Link>
              <Link href="/services/furniture/bedroom-furniture" className="hover:text-emerald transition">Bedroom Furniture →</Link>
              <Link href="/services/fine-art" className="hover:text-emerald transition">Fine Art Shipping →</Link>
              <Link href="/services/furniture" className="hover:text-emerald transition">All Furniture Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
