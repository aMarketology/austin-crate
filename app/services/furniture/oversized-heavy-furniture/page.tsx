import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/oversized-heavy-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Oversized & Heavy Furniture Shipping Austin Texas',
    description: 'Specialist oversized and heavy furniture shipping and crating in Austin, Texas. Pieces too large or heavy for standard carriers, custom crating, liftgate, and white-glove delivery. Call (512) 240-9818.',
    keywords: [
      'oversized furniture shipping Austin Texas',
      'heavy furniture shipping Austin TX',
      'large furniture crating Austin',
      'ship oversized furniture Austin',
      'heavy furniture pickup Austin Texas',
      'oversized furniture crating Austin TX',
      'freight furniture shipping Austin',
      'large item shipping Austin Texas',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function OversizedFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Oversized & Heavy Furniture Shipping Austin Texas',
    description: 'Custom crating and freight shipping for oversized and heavy furniture in Austin, TX, pieces too large or heavy for standard carriers.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Oversized &amp; Heavy Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              When your furniture is too large, too heavy, or too valuable for standard carriers, Austin Crate &amp; Freight steps in. We crate it in our Austin shop and move it anywhere in the country using specialty freight, no dropped claims, no damaged deliveries.
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

        {/* When Standard Carriers Fail */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When Standard Carriers Cannot Help, We Can</h2>
            <p className="text-gray-700 text-lg mb-4">
              Standard parcel carriers like UPS and FedEx have weight limits around 150 lbs and dimensional restrictions that exclude most oversized furniture. Standard movers are not equipped for high-value single-piece shipments going through an LTL network. That leaves a gap, and we fill it.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We handle oversized and heavy furniture from the assessment through to final placement. Custom crating protects against the rough handling that large pieces inevitably experience in freight networks.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-emerald-800 mb-3 text-lg">What Counts as &quot;Oversized or Heavy&quot;?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><span className="text-emerald font-bold">•</span> Over 150 lbs combined weight</li>
                <li className="flex items-start gap-2"><span className="text-emerald font-bold">•</span> Over 108&quot; on any single dimension, or 165&quot; length + girth combined</li>
                <li className="flex items-start gap-2"><span className="text-emerald font-bold">•</span> Pieces that require two people or equipment to move safely</li>
                <li className="flex items-start gap-2"><span className="text-emerald font-bold">•</span> High-value items where standard carrier insurance is insufficient</li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Liftgate Service', desc: 'Our trucks are equipped with liftgates for heavy pieces that cannot be hand-carried. No dock required at pickup or delivery.' },
                { title: 'Two-Man Crew for Heavy Items', desc: 'All oversized furniture shipments are handled by a two-person crew with proper equipment, dollies, straps, and protective gear.' },
                { title: 'Heavy-Duty Custom Crating', desc: 'Large and heavy pieces get reinforced crates with additional internal blocking, corner protection, and base skids for forklift access.' },
                { title: 'Specialty LTL Freight', desc: 'We use freight carriers experienced with high-value oversized goods, not the cheapest carrier, but the right one for your piece.' },
                { title: 'Stairs & Difficult Access', desc: 'We have the equipment and crew experience to navigate tight stairwells, elevators, and awkward entry points safely.' },
                { title: 'Full Insurance Coverage', desc: 'All oversized furniture shipments are fully insured with declared value coverage available for high-value pieces.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Oversized &amp; Heavy Furniture We Ship in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Oversized sectionals & extra-large sofas',
                'King & Cal-King bed frames',
                'Solid stone & concrete furniture',
                'Pool tables & game room tables',
                'Safes & security furniture',
                'Gym & fitness equipment furniture',
                'Commercial-grade shelving & storage',
                'Piano stools, benches & accessories',
                'Industrial & warehouse furniture',
                'Oversized armoires & entertainment centers',
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
                { q: 'How do you ship furniture that is too heavy for standard carriers?', a: 'We build a custom wood crate around the piece in our Austin shop, load it onto a liftgate truck with a two-person crew, and ship via specialty LTL freight with full insurance and tracking.' },
                { q: 'Can you pick up heavy furniture from my home in Austin?', a: 'Yes. We offer free heavy furniture pickup anywhere in Greater Austin. We bring a two-person trained crew and all necessary equipment, you do not need to help lift anything.' },
                { q: 'How much does heavy furniture shipping cost from Austin?', a: 'Heavy furniture shipping from Austin starts at $300 for local delivery. Long-distance heavy freight starts at $500+ depending on dimensions, weight, and destination. Call (512) 240-9818 for a free quote.' },
                { q: 'Do you ship pool tables or game room furniture?', a: 'Yes. Pool tables require professional disassembly and proper slate handling, which our crew is trained to perform. We crate all components and ship via specialty freight.' },
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
            <h2 className="text-3xl font-bold mb-4">No Piece Too Large, Too Heavy, or Too Valuable</h2>
            <p className="text-grey-300 text-lg mb-8">If you have been told a piece cannot be shipped, call us. We have heard that before.</p>
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
              <Link href="/services/heavy-items" className="hover:text-emerald transition">Heavy Item Shipping →</Link>
              <Link href="/services/furniture/custom-handmade-furniture" className="hover:text-emerald transition">Custom Furniture →</Link>
              <Link href="/services/furniture/executive-office-furniture" className="hover:text-emerald transition">Office Furniture →</Link>
              <Link href="/services/furniture" className="hover:text-emerald transition">All Furniture Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
