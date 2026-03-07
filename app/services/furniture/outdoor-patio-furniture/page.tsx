import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/outdoor-patio-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Outdoor & Patio Furniture Shipping Austin Texas',
    description: 'Specialist outdoor and patio furniture shipping and crating in Austin, Texas. Teak, wrought iron, wicker, and high-end outdoor collections — white-glove service. Call (512) 240-9818.',
    keywords: [
      'outdoor furniture shipping Austin Texas',
      'patio furniture shipping Austin TX',
      'teak furniture shipping Austin',
      'outdoor furniture crating Austin',
      'ship patio furniture Austin Texas',
      'patio set shipping Austin TX',
      'wrought iron furniture shipping Austin',
      'luxury outdoor furniture shipping Austin Texas',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function OutdoorFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Outdoor & Patio Furniture Shipping Austin Texas',
    description: 'White-glove shipping and crating for outdoor and patio furniture in Austin, TX — teak, wrought iron, wicker, and premium outdoor collections.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Outdoor &amp; Patio Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Premium outdoor furniture — teak dining sets, wrought iron collections, luxury wicker, and high-end patio pieces — is worth protecting properly. We ship and crate outdoor furniture in Austin and nationwide with the same care we give fine art.
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

        {/* Why Specialty Shipping */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Outdoor Furniture Needs Specialist Shipping</h2>
            <p className="text-gray-700 text-lg mb-4">
              People assume outdoor furniture is tough. In some ways it is — but premium teak, wrought iron, powder-coated aluminum, and all-weather wicker are all vulnerable to specific transit risks: surface scratches, bending, broken welds, and finish damage from improper wrapping or impact.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              A high-end teak dining set or a Gloster outdoor sofa collection represents a significant investment. We treat it accordingly — proper disassembly, material-specific wrapping, and custom crating for anything going long-distance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Teak & Hardwood Handling', desc: 'Teak and ipe furniture are heavy and dense. We use proper lift equipment and face-pad wood surfaces to prevent transit scratches on oiled or finished faces.' },
                { title: 'Powder-Coat & Paint Protection', desc: 'Aluminum and steel frames with powder-coat finishes are wrapped in non-reactive padding to prevent scratching or chipping during transit.' },
                { title: 'Wicker & Resin Weave Care', desc: 'All-weather wicker and resin weave panels are fragile under point impact. We build rigid crates around wicker pieces to prevent crush damage.' },
                { title: 'Glass Tabletop Crating', desc: 'Outdoor glass tabletops — tempered or otherwise — travel in dedicated crates with foam edge and face padding, separately from table bases.' },
                { title: 'Umbrella & Accessory Handling', desc: 'Outdoor umbrella bases, parasols, and accessories are padded and crated to ship alongside the main furniture set.' },
                { title: 'Set Coordination', desc: 'Large patio sets with multiple chairs, ottomans, a table, and umbrella are inventoried and shipped together with a complete packing list.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands & Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Outdoor &amp; Patio Furniture We Ship in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Teak & ipe dining sets',
                'Wrought iron table & chair sets',
                'Powder-coated aluminum furniture',
                'All-weather wicker & rattan',
                'Outdoor sectionals & lounge sets',
                'Luxury patio dining sets (Gloster, Dedon, etc.)',
                'Outdoor daybeds & sun loungers',
                'Patio umbrellas & bases',
                'Outdoor dining chairs (set shipping)',
                'Fire pit tables (propane-cleared)',
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
                { q: 'Can you ship a complete patio dining set from Austin?', a: 'Yes. We inventory, wrap, and crate complete outdoor dining sets — table, chairs, umbrella, and base — and ship them together with a complete manifest.' },
                { q: 'Do you ship teak furniture from Austin?', a: 'Yes. Teak is one of the heavier outdoor furniture materials and benefits from proper lift equipment and our liftgate trucks. We wrap teak surfaces to prevent transit scratches on aged or oiled finishes.' },
                { q: 'Can you ship outdoor furniture cross-country from Austin?', a: 'Yes. We regularly ship outdoor furniture from Austin to all 50 states. Custom crating is strongly recommended for long-distance outdoor furniture shipments.' },
                { q: 'How much does patio furniture shipping cost in Austin?', a: 'Local patio furniture shipping in Austin starts at $200–$400 for a chair-and-table set. Long-distance crated freight for a full patio set starts at $500+. Call (512) 240-9818 for an accurate quote.' },
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
            <h2 className="text-3xl font-bold mb-4">Ship Your Outdoor Furniture from Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Free pickup in Greater Austin. Professional crating. Nationwide white-glove delivery.</p>
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
              <Link href="/services/furniture/oversized-heavy-furniture" className="hover:text-emerald transition">Oversized Furniture →</Link>
              <Link href="/services/furniture/dining-tables-sets" className="hover:text-emerald transition">Dining Tables →</Link>
              <Link href="/services/furniture/designer-sofas-sectionals" className="hover:text-emerald transition">Designer Sofas →</Link>
              <Link href="/services/furniture" className="hover:text-emerald transition">All Furniture Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
