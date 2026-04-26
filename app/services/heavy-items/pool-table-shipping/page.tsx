import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/heavy-items/pool-table-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Pool Table Shipping & Crating Austin Texas',
    description: 'Professional pool table shipping, disassembly, and crating in Austin, Texas. Slate protection, felt preservation, and white-glove reassembly at destination. Call (512) 240-9818.',
    keywords: [
      'pool table shipping Austin TX',
      'pool table moving Austin Texas',
      'pool table crating Austin',
      'ship pool table Austin',
      'billiard table shipping Austin Texas',
      'pool table disassembly Austin TX',
      'pool table transport Austin',
      'move pool table Austin Texas',
    ],
    serviceUrl: SLUG,
  })
}

export default function PoolTableShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Pool Table Shipping & Crating Austin Texas',
    description: 'Professional pool table disassembly, crating, and shipping in Austin, TX, slate protection, felt preservation, white-glove reassembly.',
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
            <Link href="/services/heavy-items" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Heavy Item Shipping &amp; Pickup
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pool Table Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Pool tables require expert disassembly, professional slate crating, and precision reassembly at destination. Austin Crate &amp; Freight handles every step, from the first bolt to the final level.
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

        {/* Why Pool Tables Are Different */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pool Tables Require Specialist Handling</h2>
            <p className="text-gray-700 text-lg mb-4">
              A standard 8-foot pool table weighs 700–1,000 lbs, much of that in three separate slate pieces that must be crated individually and reassembled level to within 1/32&quot;. Move a pool table wrong and you end up with cracked slate, warped felt, broken rails, or a permanently uneven playing surface.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We disassemble, crate, transport, and reassemble pool tables in Austin and throughout Texas. Every step follows a proven process designed to protect the slate, preserve the felt, and ensure the table plays as well after the move as it did before.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Slate Disassembly &amp; Individual Crating', desc: 'Each slate piece is carefully removed, wrapped in protective padding, and crated in its own custom wood enclosure to prevent cracking in transit.' },
                { title: 'Felt Preservation', desc: 'The felt is rolled (not folded) and stored separately to prevent permanent crease lines. New felt installation available at destination if preferred.' },
                { title: 'Rail &amp; Pocket Protection', desc: 'Rails are padded and strapped to prevent chip or scratch damage to the wood finish. Pockets are bagged and packed with the hardware.' },
                { title: 'Frame &amp; Leg Handling', desc: 'The frame and legs are wrapped and moved with furniture dollies designed for the weight, no dragging, no tipping, no floor damage.' },
                { title: 'Precision Leveling at Destination', desc: 'Reassembly includes precise slate leveling using a precision spirit level. We do not leave until the table plays correctly.' },
                { title: 'Full-Service or Crate-Only', desc: 'We offer full disassembly + ship + reassembly, or crate-only for customers who have their own movers. Flexible to your needs.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pool Table Types We Crate &amp; Ship in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '7-Foot Bar Tables (Coin-Op & Home)',
                '8-Foot Standard Home Tables',
                '9-Foot Tournament & Pro Tables',
                'Snooker Tables (12-Foot)',
                'Antique & Vintage Billiard Tables',
                'Combination Pool/Dining Tables',
                'Outdoor Pool Tables',
                'Brunswick, Olhausen, Diamond & All Major Brands',
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
                { q: 'How much does it cost to ship a pool table in Austin?', a: 'Local Austin pool table moves (under 50 miles) typically run $400-$800 including disassembly and reassembly. Long-distance Texas shipping adds freight carrier costs. Call (512) 240-9818 for a fast quote based on your specific table and move.' },
                { q: 'Do you reassemble the pool table at the destination?', a: 'Yes. We provide full reassembly including precise slate leveling, felt stretching, and rail installation. We do not leave until the table is level and playable.' },
                { q: 'Can you ship a pool table from Austin to another state?', a: 'Absolutely. We have crated and shipped pool tables across the US. We build custom slate crates at our Austin facility and coordinate with vetted freight carriers for long-haul moves.' },
                { q: 'Do I need new felt after the move?', a: 'Not necessarily. Felt in good condition can be removed, preserved, and reinstalled. Felt that is already worn or has existing damage is a good candidate for replacement during the move, we can arrange that.' },
                { q: 'How long does pool table shipping take?', a: 'Local Austin moves are typically completed in one day. Long-distance Texas and interstate shipments vary by destination, usually 3–7 business days after crating.' },
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
            <h2 className="text-3xl font-bold mb-4">Get a Pool Table Shipping Quote in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us the table brand, size, and destination. We will come back with a fair quote, usually within a few hours.</p>
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
              <Link href="/services/heavy-items/motorcycle-crating" className="hover:text-emerald transition">Motorcycle Crating →</Link>
              <Link href="/services/heavy-items/heavy-equipment-austin" className="hover:text-emerald transition">Heavy Equipment →</Link>
              <Link href="/services/heavy-items" className="hover:text-emerald transition">All Heavy Item Shipping →</Link>
              <Link href="/services/oversized-shipping" className="hover:text-emerald transition">Oversized Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
