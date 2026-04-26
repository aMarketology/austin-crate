import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/oversized-shipping/when-carriers-refuse'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'When UPS & FedEx Refuse: Oversized Shipping Solutions Austin Texas',
    description: 'What to do when UPS, FedEx, or USPS refuses your shipment. Specialty freight solutions for oversized, overweight, and carrier-rejected items in Austin, Texas. Call (512) 240-9818.',
    keywords: [
      'oversized package shipping options Austin',
      'when carriers refuse shipment Austin',
      'items UPS won\'t ship Austin TX',
      'FedEx refuses oversized Austin',
      'specialty freight Austin Texas',
      'oversized item shipping Austin TX',
      'carrier refused shipment solutions Austin',
      'large item shipping Austin Texas',
    ],
    serviceUrl: SLUG,
  })
}

export default function WhenCarriersRefuse() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Oversized Shipping Solutions When Carriers Refuse Austin Texas',
    description: 'Specialty freight solutions for oversized, overweight, and carrier-rejected shipments in Austin, TX, custom crating, liftgate service, and freight coordination.',
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
            <Link href="/services/oversized-shipping" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Oversized Item Shipping
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Freight · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">When UPS &amp; FedEx Refuse Your Shipment: Austin Oversized Freight Solutions</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Standard carriers have strict size and weight limits, and they enforce them. If UPS, FedEx, or USPS has rejected your shipment, Austin Crate &amp; Freight provides the specialty freight solution you need. We handle items that standard carriers cannot, will not, or should not touch.
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

        {/* Why Carriers Refuse */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why UPS, FedEx &amp; USPS Refuse Certain Shipments</h2>
            <p className="text-gray-700 text-lg mb-4">
              Standard parcel carriers run automated sorting facilities where packages move through conveyors, chutes, and scanners. Their systems are designed for boxes under 150 lbs with dimensions that fit on a conveyor belt. Anything outside those parameters breaks their process, which is why they charge penalty fees or refuse outright.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              UPS and FedEx also carry liability limits on declared value for oversized items. If your item is too large and gets damaged, their maximum claim payout may not cover your loss. This creates a situation where even if they technically accept the shipment, the coverage gap makes it a bad financial decision.
            </p>
            <p className="text-gray-700 text-lg">
              The good news: the same items that pose problems for standard carriers are exactly what specialty freight companies handle well. Custom crating, liftgate service, freight coordination, and full-value coverage are standard features of specialty shipping, not add-ons.
            </p>
          </div>
        </section>

        {/* Size & Weight Limits */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Standard Carrier Size &amp; Weight Limits (2026)</h2>
            <p className="text-gray-600 mb-8">Items outside these limits are either refused outright or charged significant oversize surcharges that make standard carriers uneconomical.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  carrier: 'UPS',
                  max_weight: '150 lbs',
                  max_length: '108 inches',
                  girth_limit: '165 inches (length + girth)',
                  surcharge: '$875+ for oversize tier 3',
                },
                {
                  carrier: 'FedEx Ground',
                  max_weight: '150 lbs',
                  max_length: '119 inches',
                  girth_limit: '165 inches',
                  surcharge: '$930+ for unauthorized oversize',
                },
                {
                  carrier: 'USPS',
                  max_weight: '70 lbs',
                  max_length: '108 inches',
                  girth_limit: '130 inches',
                  surcharge: 'Refuse most freight-class items',
                },
              ].map((c, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{c.carrier}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Max weight</span><span className="font-medium text-gray-800">{c.max_weight}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Max length</span><span className="font-medium text-gray-800">{c.max_length}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Girth limit</span><span className="font-medium text-gray-800">{c.girth_limit}</span></div>
                    <div className="mt-3 pt-3 border-t border-gray-100 text-red-600 text-xs">{c.surcharge}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-gray-700">
              <strong>Important:</strong> Carriers measure girth as the combined length + 2× width + 2× height. Many items that appear to be within size limits actually exceed the girth formula. A piece of furniture that is 72&quot; long × 36&quot; wide × 36&quot; tall has a girth measurement of 72 + (2×36) + (2×36) = 216 inches, well over the 165-inch limit for UPS and FedEx.
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Solutions for Carrier-Refused Items</h2>
            <p className="text-gray-600 mb-8">When standard carriers say no, these are the services we use to get your item to its destination safely and cost-effectively.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Custom Crating at Our Austin Facility', desc: 'We build a crate precisely sized for your item. Proper crating is required by LTL freight carriers and significantly reduces the risk of damage and claim denial.' },
                { title: 'LTL Freight Coordination', desc: 'Less-than-truckload (LTL) freight handles items up to several thousand pounds with no girth restrictions. We select the right carrier, class, and service level for your item and budget.' },
                { title: 'Liftgate Pickup & Delivery', desc: 'Freight deliveries to residential or retail addresses require a liftgate truck, which standard carriers do not provide. We coordinate liftgate service at both ends at no surprise to you.' },
                { title: 'White-Glove Inside Delivery', desc: 'Beyond curbside drop-off, we can arrange inside delivery, room-of-choice placement, and packaging removal, especially valuable for furniture, equipment, and commercial fixtures.' },
                { title: 'Full-Value Insurance Coverage', desc: 'Standard carriers cap declared value at $100 without purchase of additional coverage. Specialty freight allows full-value coverage matching the actual value of your item.' },
                { title: 'Same-Week Pickup in Austin', desc: 'We typically offer pickup within 1-3 business days in Austin and the surrounding metro area. If your item needs to move fast, call us directly and we will prioritize your shipment.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Items Carriers Refuse */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Items Standard Carriers Refuse or Penalize</h2>
            <p className="text-gray-600 mb-6">These are the most frequent categories we receive from customers after a carrier has rejected or significantly surcharged their shipment.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Large Furniture Sets (Sofas, Dining Tables, Bedroom Suites)',
                'Pool Tables & Billiard Equipment',
                'Motorcycles & Powersports Equipment',
                'Trade Show Displays & Exhibition Booths',
                'Industrial Machinery & Manufacturing Equipment',
                'Large Sculpture & Fine Art Pieces',
                'Safes, Vaults & Heavy Security Equipment',
                'Fitness Equipment (Cages, Racks, Commercial Treadmills)',
                'Large Appliances (Refrigerators, Commercial Ranges)',
                'Architectural Elements (Doors, Columns, Mantels)',
                'Oversized Electronics & Server Racks',
                'Construction & Agricultural Equipment',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Does Specialty Freight Cost vs. Standard Carriers?</h2>
            <p className="text-gray-700 text-lg mb-4">
              Specialty freight is more expensive than standard parcel shipping for small items, but for oversized items, the comparison is often closer than you think. Standard carriers apply oversize surcharges of $200–$900+ per shipment in addition to the base rate, which quickly closes the gap with specialty freight pricing.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              More importantly: the hidden cost of a damage claim at inadequate coverage levels can dwarf any savings on the rate. A $600 sofa damaged at a carrier facility, claimed at the $100 default coverage limit, is a $500 loss that no rate discount recovers.
            </p>
            <p className="text-gray-700 text-lg">
              Our specialty freight quotes factor in proper crating, full-value coverage, liftgate service, and verified carrier handling, giving you a true apples-to-apples cost. Call us at {SITE_CONFIG.phone} for a quote on your specific item and we will be straightforward about when specialty freight makes sense and when it does not.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'UPS told me my item is too large. What are my options?', a: 'Your best options are LTL freight (less-than-truckload) or specialty freight. LTL carriers handle palletized and crated freight up to several thousand pounds with no girth restrictions. We can crate your item at our Austin facility and coordinate the LTL shipment, typically within 1–3 business days.' },
                { q: 'FedEx charged me $800 in oversize surcharges. Is specialty freight cheaper?', a: 'Often yes. Once standard carriers apply their oversize tier 2 or tier 3 surcharges, specialty freight rates are competitive, and you get proper crating, liftgate service, and full-value coverage in the price. Call us with your item dimensions and destination for a direct comparison.' },
                { q: 'My item weighs over 150 lbs. Can you pick it up in Austin?', a: 'Yes. We handle items well over 150 lbs routinely. We have equipment for safe handling including furniture dollies, moving blankets, and liftgate trucks. There is no upper weight limit on what we can crate and coordinate for freight shipment.' },
                { q: 'How long does specialty freight take compared to FedEx Ground?', a: 'LTL freight transit times are longer than parcel, typically 3–7 business days within Texas and 5–10 days for cross-country shipments, versus 2–5 days for FedEx Ground. For time-sensitive oversized shipments, expedited freight options are available at a higher rate. We will quote both when timing matters.' },
                { q: 'Do you ship carrier-refused items from Austin to other states?', a: 'Absolutely. We ship regularly to destinations across the US. We build the crate in Austin, coordinate the carrier, and manage the freight process through to delivery. Long-distance shipments are quoted based on freight class, dimensions, and destination zip code.' },
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
        <ServicesGrid title="All Specialty Shipping Services in Austin" showSubLinks exclude={['/services/oversized-shipping']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Carrier Refused Your Item? We Can Ship It.</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us what you are shipping, the dimensions, and the destination. We will figure out the right solution and give you a straightforward quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-grey-400">
              <Link href="/services/oversized-shipping" className="hover:text-emerald transition">Oversized Shipping →</Link>
              <Link href="/services/heavy-items" className="hover:text-emerald transition">Heavy Item Shipping →</Link>
              <Link href="/buy-a-crate" className="hover:text-emerald transition">Buy a Custom Crate →</Link>
              <Link href="/services/heavy-items/heavy-equipment-austin" className="hover:text-emerald transition">Heavy Equipment Austin →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
