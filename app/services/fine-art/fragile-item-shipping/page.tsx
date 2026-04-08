import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/fragile-item-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Fragile Item Shipping & Crating Austin Texas',
    description: 'Professional fragile item shipping and custom crating in Austin, Texas. Glass, ceramics, electronics, sculptures, and delicate antiques   custom foam inserts and white-glove handling. Call (512) 240-9818.',
    keywords: [
      'fragile item shipping Austin TX',
      'fragile item crating Austin',
      'delicate item shipping Austin Texas',
      'fragile shipping Austin',
      'ship fragile items Austin TX',
      'custom crating fragile items Austin',
      'glass shipping Austin Texas',
      'ceramics crating Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function FragileItemShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Fragile Item Shipping & Crating Austin Texas',
    description: 'Custom crating and white-glove shipping for fragile items in Austin, TX   glass, ceramics, electronics, sculptures, mirrors, and delicate antiques.',
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
            <Link href="/services/fine-art" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Fine Art Shipping &amp; Custom Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Fragile Item Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Standard boxes and bubble wrap are not enough for glass, ceramics, sculptures, mirrors, and delicate antiques. Austin Crate &amp; Freight builds custom wood crates with precision foam inserts that protect your fragile items through every mile of transit.
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

        {/* Why Fragile Items Break in Transit */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Fragile Items Break in Transit   And How We Prevent It</h2>
            <p className="text-gray-700 text-lg mb-4">
              The leading cause of fragile item damage during shipping is not rough handling   it is inadequate packaging. A ceramic vase wrapped in bubble wrap inside a cardboard box has no suspension from shock. When the box is dropped from 2 feet (a very normal freight event), the item inside absorbs the full impact. Glass shatters. Porcelain cracks. Sculptures chip at the most delicate points   edges, projections, and thin sections.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Custom crating works differently. The item is measured precisely, and a foam insert is cut to match its exact contours. The item floats inside the crate, suspended in foam on all six sides. When the crate takes a shock, the foam compresses and the item absorbs almost none of the impact. This is the same engineering principle used in museum shipping   and it is what we use for every fragile item we crate in Austin.
            </p>
            <p className="text-gray-700 text-lg">
              We also assess the specific vulnerability of each piece before crating. A large mirror requires edge reinforcement. An electronic device needs anti-static foam. A bronze sculpture needs all projections padded individually. There is no one-size-fits-all fragile item crate   and that is exactly why we custom-build each one.
            </p>
          </div>
        </section>

        {/* How We Protect Fragile Items */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Crate &amp; Protect Fragile Items for Shipping</h2>
            <p className="text-gray-600 mb-8">Every fragile shipment goes through the same six-step protection process at our Austin facility.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Dimensional Assessment', desc: 'We measure the item in three dimensions and assess every fragile point   edges, projections, thin sections   before selecting the right foam density and crate design.' },
                { title: 'Custom Foam Insert Fabrication', desc: 'Polyethylene foam inserts are CNC-cut to the exact shape of the item. The piece fits snugly with no movement. No packing peanuts, no loose-fill, no shifting during transit.' },
                { title: 'Structural Wood Crate', desc: 'We build a rigid wood crate around the foam-packed item   not a cardboard box and hope. Wood crates withstand the compression and impact forces of freight handling.' },
                { title: 'Anti-Static & Climate-Aware Options', desc: 'Electronics and sensitive instruments are packed in anti-static foam. Temperature-sensitive items can be packed with thermal insulation for temperature-controlled shipments.' },
                { title: 'Seal & Label as Fragile', desc: 'The crate is sealed with hardware-grade fasteners   not packing tape. All six faces are labeled fragile with orientation arrows to minimize improper stacking.' },
                { title: 'Freight Carrier Selection', desc: 'Not every freight carrier handles fragile items well. We match each shipment with carriers who have strong fragile-item track records and offer declared value coverage.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fragile Items We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fragile Items We Crate &amp; Ship in Austin</h2>
            <p className="text-gray-600 mb-8">If standard carriers have refused your item, added excessive fragile surcharges, or you simply cannot afford damage, these are the categories where custom crating pays for itself.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Large Glass Panels & Architectural Glass',
                'Antique China, Porcelain & Ceramics',
                'Flat-Screen TVs & Display Monitors (65"-100"+)',
                'Mirrors   Floor, Wall & Antique Frames',
                'Sculptures in Bronze, Stone, Ceramic & Glass',
                'Musical Instruments (Guitars, Violins, Horns)',
                'Chandeliers & Decorative Lighting Fixtures',
                'Electronics & Server Equipment',
                'Taxidermy & Natural History Specimens',
                'Collectibles, Figurines & Limited Editions',
                'Laboratory & Scientific Equipment',
                'Stained Glass Panels & Religious Artifacts',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Foam vs Bubble Wrap */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Foam Inserts vs. Standard Bubble Wrap: What&apos;s the Difference?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border-2 border-red-200 rounded-xl">
                <h3 className="font-bold text-red-700 text-lg mb-4">Standard Bubble Wrap &amp; Boxes</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span>Bubble wrap compresses and deflates under pressure   loses protective value quickly</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span>Cardboard boxes crush under stacking weight   typical at freight depots</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span>Items shift inside the box   every shift is a potential impact event</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span>No protection against drops, forks, or pallet jack bumps</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-500 font-bold mt-0.5">✗</span><span>Carriers frequently deny claims on inadequate packaging</span></li>
                </ul>
              </div>
              <div className="p-6 bg-white border-2 border-emerald rounded-xl">
                <h3 className="font-bold text-emerald text-lg mb-4">Custom Crate with Foam Insert</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><span className="text-emerald font-bold mt-0.5">✓</span><span>Polyethylene foam maintains protective density across the full shipment</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald font-bold mt-0.5">✓</span><span>Rigid wood crate withstands stacking, forklift handling, and drops</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald font-bold mt-0.5">✓</span><span>Item is immobilized   zero movement inside the crate</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald font-bold mt-0.5">✓</span><span>Meets carrier requirements for full-value insurance claims</span></li>
                  <li className="flex items-start gap-2"><span className="text-emerald font-bold mt-0.5">✓</span><span>Reusable for future shipments or storage</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Costs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fragile Item Shipping Costs in Austin, TX</h2>
            <p className="text-gray-700 text-lg mb-4">
              Crating costs depend on the item&apos;s size, fragility, and destination. As a rough guide:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                { range: '$75-$250', label: 'Small Fragile Items', desc: 'Ceramics, figurines, small glass pieces   custom foam box or small crate.' },
                { range: '$200-$600', label: 'Medium Fragile Items', desc: 'Large mirrors, flat-screen TVs, sculptures, chandeliers   mid-size wood crate with full foam insert.' },
                { range: '$500+', label: 'Large / High-Value Items', desc: 'Architectural glass, large sculptures, exhibition-grade artwork   full museum-spec crating.' },
              ].map((tier, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-center">
                  <div className="text-2xl font-bold text-emerald mb-1">{tier.range}</div>
                  <div className="font-semibold text-gray-900 mb-2">{tier.label}</div>
                  <p className="text-gray-600 text-sm">{tier.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-emerald/10 border border-emerald/30 rounded-xl p-5 text-sm text-gray-700">
              <strong>Note:</strong> Crating cost is separate from freight cost. Freight rate depends on destination and carrier. For high-value items, the crating investment is small compared to the cost of a damage claim   most insurers require professional crating for claims over $500.
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Fragile Item Shipping</h2>
            <div className="space-y-5">
              {[
                { q: 'Can FedEx or UPS ship my fragile item?', a: 'Standard carriers like FedEx and UPS will accept fragile items, but they are not responsible for damage if the item was not professionally packaged. Their terms of service explicitly state that fragile items shipped in standard boxes with bubble wrap may not qualify for damage claims. For anything valuable or breakable, professional crating is the financially sound choice.' },
                { q: 'What foam density do you use for fragile items?', a: 'We use polyethylene foam in densities ranging from 1.5 lb/ft³ (for lighter items) to 6 lb/ft³ (for heavy, dense items like stone sculptures). The right density depends on the item weight and fragility. We assess each piece individually and select the appropriate foam grade before cutting the insert.' },
                { q: 'Do you ship fragile items outside of Austin?', a: 'Yes. We crate fragile items at our Austin facility and ship anywhere in Texas or across the US. Long-distance fragile item shipments are handled with LTL (less-than-truckload) freight carriers that specialize in specialty cargo, not general parcel carriers.' },
                { q: 'Can the crate be used again after the shipment arrives?', a: 'Absolutely. Custom wood crates are reusable if the item needs to be returned or shipped again. The foam insert can be stored with the crate. Many collectors and galleries reuse their crates for years   it is one of the reasons custom crating has a lower cost-per-use than it may initially appear.' },
                { q: 'How do I know if my item needs a crate or just better packaging?', a: 'A good rule: if the item is worth more than $300, has thin sections that could break, or is irreplaceable (antique, one-of-a-kind), it warrants crating. If the item is a standard appliance or item that is easily replaceable, heavy-duty cardboard with quality foam may be sufficient. Call us and we will give you an honest assessment.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid title="Explore All Specialty Shipping Services" showSubLinks exclude={['/services/fine-art']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Fragile Item Shipping Quote in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us what you need to ship and where it is going. We will recommend the right crating solution and give you a quote   usually within a few hours.</p>
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
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Fine Art Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/fine-art/painting-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Painting Shipping</Link>
                <Link href="/services/fine-art/sculpture-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sculpture Shipping</Link>
                <Link href="/services/fine-art/art-installation-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Art Installation</Link>
                <Link href="/services/fine-art/gallery-exhibit-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Gallery Exhibits</Link>
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
                <Link href="/services/fine-art/rare-collectibles-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Rare Collectibles</Link>
                <Link href="/services/fine-art/glass-art-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Glass Art</Link>
                <Link href="/services/fine-art/museum-display-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Museum Display</Link>
                <Link href="/services/fine-art" className="px-3 py-1 border border-emerald/40 rounded-full text-emerald hover:bg-emerald/10 transition-colors">All Fine Art →</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
