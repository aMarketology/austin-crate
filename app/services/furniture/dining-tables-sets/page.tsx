import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'
import ServicesGrid from '@/app/components/ServicesGrid'

const SLUG = '/services/furniture/dining-tables-sets'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Dining Table & Set Shipping Austin Texas',
    description: 'Specialty shipping and crating for dining tables and sets in Austin, Texas. Large tables, chairs, china cabinets, and buffets, white-glove pickup and delivery. Call (512) 240-9818.',
    keywords: [
      'dining table shipping Austin Texas',
      'dining set shipping Austin TX',
      'ship dining table Austin',
      'dining table crating Austin',
      'large table shipping Austin Texas',
      'furniture shipping Austin dining room',
      'china cabinet shipping Austin TX',
      'buffet shipping Austin Texas',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function DiningTableShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Dining Table & Set Shipping Austin Texas',
    description: 'Specialty shipping and crating for dining tables, chairs, china cabinets, and buffets in Austin, TX.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dining Table &amp; Set Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Large dining tables, complete dining sets, china cabinets, and buffets are notoriously difficult to ship safely. We do it every week. Custom crating and white-glove delivery across Austin and nationwide.
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

        {/* Challenges & Solutions */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenges of Shipping Dining Tables</h2>
            <p className="text-gray-700 text-lg mb-4">
              A dining table seems straightforward, until you try to ship one. Large single-slab tables, extension tables with leaves, glass tops, pedestal bases, and fragile leg assemblies all create specific risks that standard carriers handle poorly. A glass-top table dropped once is gone forever. A cracked table leg on a $6,000 custom piece is a serious problem.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We ship dining tables by building the crate around them, not by finding a box they will fit in. Tables get their legs removed, surfaces face-padded, glass tops crated separately, and every piece rides in a rigid wood frame with internal blocking.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Leg Removal & Labeling', desc: 'Table legs are removed, individually wrapped, and labeled for precise reinstallation at delivery.' },
                { title: 'Glass Top Crating', desc: 'Glass tops travel in their own dedicated crate, face-padded, with foam edge protection and rigid framing.' },
                { title: 'Extension Leaf Management', desc: 'Table leaves are wrapped together and labeled in order, no guessing which goes where on delivery day.' },
                { title: 'Chair Bundling & Wrapping', desc: 'Chair sets are wrapped individually and bundled together, stacked safely to minimize footprint and prevent contact damage.' },
                { title: 'China Cabinet Glass Protection', desc: 'Cabinet glass panes are padded and braced inside the crate, or removed and crated separately for long-distance freight.' },
                { title: 'Surface Finish Protection', desc: 'Lacquered, oiled, and stained table tops are wrapped in breathable pads that will not transfer or stick to fine finishes.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Ship */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dining Room Pieces We Ship &amp; Crate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Solid wood dining tables (any size)',
                'Live-edge & single-slab tables',
                'Glass-top dining tables',
                'Extension & leaf tables',
                'Pedestal & trestle base tables',
                'Complete dining sets (table + chairs)',
                'China cabinets & hutches',
                'Buffets & sideboards',
                'Bar carts & wine cabinets',
                'Upholstered dining chairs',
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
                { q: 'Can you ship a very large dining table in Austin?', a: 'Yes. We have shipped tables up to 12 feet long. Our Safety Speed 6400 panel saw lets us build crates for any dimension. There is no table too large for us to crate properly.' },
                { q: 'Do you handle glass-top dining tables?', a: 'Yes. Glass tops travel in a dedicated crate, independently padded on all sides with foam and rigid framing. We do not combine glass tops with the table base in the same crate.' },
                { q: 'Will you disassemble and reassemble my dining table?', a: 'Yes. Leg removal and reinstallation is included in our service. All hardware is bagged and labeled. We reassemble at delivery and level the table in place.' },
                { q: 'How much does dining table shipping cost in Austin?', a: 'Local dining table shipping in Austin starts around $200–$350. Long-distance crated freight depends on dimensions and destination. Call (512) 240-9818 for a free, itemized quote.' },
                { q: 'Can you ship a live-edge or single-slab dining table?', a: 'Yes. Live-edge and single-slab tables are some of the most challenging pieces, they are often very heavy, irregularly shaped, and have finished undersides as well as tops. We build the crate for the exact shape of the slab with continuous edge support and foam blocking to prevent any flex along the grain.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Furniture Shipping Services" showSubLinks exclude={['/services/furniture']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Dining Table or Set?</h2>
            <p className="text-grey-300 text-lg mb-8">We pick up anywhere in Greater Austin and ship nationwide. Get a free quote today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 border-t border-grey-700 pt-6">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Furniture Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/furniture/designer-sofas-sectionals" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sofas &amp; Sectionals</Link>
                <Link href="/services/furniture/bedroom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Bedroom Furniture</Link>
                <Link href="/services/furniture/designer-chairs" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Designer Chairs</Link>
                <Link href="/services/furniture/cabinets-credenzas" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Cabinets &amp; Credenzas</Link>
                <Link href="/services/furniture/grandfather-clock-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Grandfather Clocks</Link>
                <Link href="/services/furniture/marble-stone-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Marble &amp; Stone</Link>
                <Link href="/services/furniture/antique-heirloom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Heirloom</Link>
                <Link href="/services/furniture/oversized-heavy-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Oversized Furniture</Link>
                <Link href="/services/furniture" className="px-3 py-1 border border-emerald/40 rounded-full text-emerald hover:bg-emerald/10 transition-colors">All Furniture →</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
