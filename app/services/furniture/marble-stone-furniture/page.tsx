import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/marble-stone-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Marble & Stone Furniture Shipping Austin Texas',
    description: 'Expert marble and stone furniture shipping and crating in Austin, Texas. Marble dining tables, marble top dressers, travertine, granite, and custom stone pieces   safe delivery nationwide. Call (512) 240-9818.',
    keywords: [
      'marble furniture shipping Austin Texas',
      'stone table shipping Austin TX',
      'marble top shipping Austin Texas',
      'granite furniture shipping Austin TX',
      'marble dining table shipping Austin',
      'travertine top crating Austin Texas',
      'heavy stone furniture shipping Austin',
      'marble slab shipping Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function MarbleStoneFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Marble & Stone Furniture Shipping Austin Texas',
    description: 'Specialist shipping and crating for marble and stone furniture in Austin, TX   marble dining tables, travertine tops, granite surfaces, and carved stone pieces. Custom weight-rated crating.',
    serviceType: 'Specialty Shipping',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/services/furniture" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Furniture Shipping &amp; Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Marble &amp; Stone · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Marble &amp; Stone Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Stone and marble furniture is unforgiving during transit. Marble cracks along invisible crystalline grain lines under flex stress. Polished edges chip from single impacts. And the sheer weight of stone   a marble dining table can exceed 400 lbs   means that the crate structure must be engineered to distribute load, not just contain the piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Stone &amp; Marble Furniture Needs Specialist Crating</h2>
            <p className="text-gray-700 text-lg mb-4">
              Marble and stone present risks that wood furniture does not. The first is weight   a large marble dining table can weigh twice what an equivalent wood table weighs, and that weight produces much higher impact forces during any loading, corner, or braking event. Standard furniture crates are sized and built for wood-weight assumptions; undersized crate floors can fail under stone.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              The second risk is stone&#39;s tendency to crack along grain lines under flex. A marble slab that is allowed to flex even slightly during transit   because it is under-supported midspan   can propagate existing micro-fractures into visible cracks. Face-up vs. face-down orientation is a meaningful engineering decision: face-up for thick slabs, face-down with edge-pad support for thin ones.
            </p>
            <p className="text-gray-700 text-lg">
              Tops and bases typically ship separately. We detach the marble or stone top, crate it independently on a foam-lined plywood base with corner foam blocks, and crate the base separately. This keeps each element fully supported and eliminates any relative movement between stone and wood/metal during transit.
            </p>
          </div>
        </section>

        {/* How We Crate */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Crate Marble &amp; Stone Furniture</h2>
            <p className="text-gray-600 mb-8">Weight-rated crating, orientation engineering, and surface protection at every step.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Weight-Rated Crate Floors', desc: 'Crate floor panels are selected and framed to the actual weight of the stone piece. We calculate point loads at support contact areas to ensure no single crate stringer is over-loaded.' },
                { title: 'Top/Base Separation', desc: 'Stone tabletops are detached and crated independently. This eliminates the risk of the heavy top shifting and cracking, and allows each piece to be perfectly supported.' },
                { title: 'Polished Edge Protection', desc: 'Polished stone edges are the most vulnerable point. We use dense polyethylene foam cut to the exact edge profile, then overwrap with foam padding. No rigid material contacts the polished surface.' },
                { title: 'Corner &amp; Chipped-Edge Prevention', desc: 'Stone corners are individually padded with shaped foam blocks. Corners are where chipping almost universally initiates during transit, and our corner protection eliminates relative movement at these points.' },
                { title: 'Surface Protection', desc: 'Polished marble faces are covered with a layer of Tyvek (to prevent transfer), dense foam pad, then the outer crate panel. No stretch film, no moving blankets alone, no direct foam on polished surfaces.' },
                { title: 'Midspan Support', desc: 'For large marble slabs (60\"+ dining tables), we add midspan support blocks under the slab so the crate floor is effectively continuous support from edge to edge. This prevents any flex during transit.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Stone &amp; Marble Furniture We Ship</h2>
            <p className="text-gray-600 mb-8">Every stone type and application, from residential dining tables to gallery pedestals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Marble dining tables (round, oval, rectangular)',
                'Travertine dining and coffee tables',
                'Granite countertop sections & islands',
                'Marble coffee and side tables',
                'Stone fireplace surrounds & mantels',
                'Carved stone pedestal bases',
                'Marble console tables & hall tables',
                'Onyx tops and decorative panels',
                'Limestone furniture & architectural pieces',
                'Terrazzo tops',
                'Alabaster decorative pieces',
                'Custom fabricated stone furniture',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'Is marble furniture safe to ship cross-country?', a: 'Yes, with proper crating. Marble that is fully supported across its span, with polished edges protected by dense foam, and loaded in the correct orientation, will arrive safely across any distance. The risk comes from under-built crates or improper orientation   both of which we engineer against.' },
                { q: 'Can you ship a large round marble dining table?', a: 'Yes. Round and oval tops are among the pieces most prone to chipping at the edges during shipping (because the entire perimeter is edge). We use continuous edge foam that follows the full circumference of the table, not just corner blocks.' },
                { q: 'Do I need to detach the marble top before you arrive?', a: 'No   we will detach it during the packing appointment. We document the original assembly with photos so the top can be reinstalled correctly at the destination.' },
                { q: 'How much does marble furniture shipping cost?', a: 'Local Austin marble table delivery typically starts at $350-$600 depending on weight and dimensions. Long-distance pricing depends on the freight lane and crate size. Call (512) 240-9818 for a specific quote for your piece.' },
                { q: 'What is the difference between shipping marble vs. granite?', a: 'Granite is generally harder and less prone to flex-cracking than marble, but it is often heavier   both require the same weight-rated crating approach. Our process is the same for both: separated top crating, continuous edge protection, and oriented face-up with midspan support.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
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
            <h2 className="text-3xl font-bold mb-4">Marble &amp; Stone Furniture Shipping in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Weight-rated crating, polished surface protection, and safe delivery for every stone type. Serving Austin and all of Texas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
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
                <Link href="/services/furniture/dining-tables-sets" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Dining Tables</Link>
                <Link href="/services/furniture/bedroom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Bedroom Furniture</Link>
                <Link href="/services/furniture/designer-chairs" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Designer Chairs</Link>
                <Link href="/services/furniture/cabinets-credenzas" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Cabinets &amp; Credenzas</Link>
                <Link href="/services/furniture/grandfather-clock-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Grandfather Clocks</Link>
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
