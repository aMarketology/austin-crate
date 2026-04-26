import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/heavy-items/heavy-equipment-austin'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Heavy Equipment Shipping for Austin Businesses',
    description: 'Heavy equipment shipping and crating in Austin, Texas. Industrial machinery, manufacturing equipment, trade show displays, and commercial fixtures, liftgate service and LTL freight. Call (512) 240-9818.',
    keywords: [
      'heavy equipment shipping Austin',
      'industrial equipment transport Austin TX',
      'machinery shipping Austin Texas',
      'heavy equipment crating Austin TX',
      'trade show display shipping Austin',
      'commercial equipment freight Austin',
      'liftgate delivery Austin Texas',
      'industrial freight Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function HeavyEquipmentAustin() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Heavy Equipment Shipping for Austin Businesses',
    description: 'Heavy equipment and industrial machinery shipping in Austin, TX, custom crating, liftgate service, and LTL freight coordination for businesses throughout the Austin metro.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Industrial Freight · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Heavy Equipment Shipping for Austin Businesses</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              When your business needs to move machinery, trade show equipment, manufacturing tools, or commercial fixtures, you need a freight partner who understands the stakes. Austin Crate &amp; Freight provides custom crating, liftgate service, and LTL freight coordination for businesses throughout Central Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Get a Business Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Who Needs This Service */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Uses Heavy Equipment Shipping in Austin</h2>
            <p className="text-gray-700 text-lg mb-4">
              Austin&apos;s economy includes manufacturing plants, technology companies, healthcare systems, construction contractors, and a growing trade show and events industry. Each sector regularly needs to move heavy, specialized equipment that standard parcel carriers cannot accommodate.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              A manufacturing company relocating CNC machinery. A healthcare clinic decommissioning an MRI and shipping it to a new facility. A tech company that needs to get a trade show booth from Austin to Las Vegas and back in one piece. An Austin restaurant group moving commercial kitchen equipment to a second location. These are the businesses we serve.
            </p>
            <p className="text-gray-700 text-lg">
              We are not a moving company. We do not move households. We specialize in industrial, commercial, and high-value equipment that requires professional crating, proper freight classification, and experienced handling from dock to dock.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Heavy Equipment Shipping Process</h2>
            <p className="text-gray-600 mb-8">Every heavy equipment shipment follows a structured process designed to protect your asset, meet carrier requirements, and keep your project on schedule.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'On-Site Assessment & Crate Design', desc: 'For large or complex equipment, we assess the item at your Austin location before building the crate. We measure, photograph, and identify any disassembly required for safe crating and transit.' },
                { title: 'Custom Wood Crate Construction', desc: 'Heavy equipment crates use heavier lumber grades and reinforced joinery compared to standard crates. Crate design accounts for forklift entry points, stacking weight, and internal bracing to prevent equipment movement.' },
                { title: 'Freight Classification & Carrier Selection', desc: 'LTL freight is priced by freight class (1–500), which is based on density, stowability, handling characteristics, and liability. We classify your shipment correctly to avoid reclassification charges and select the best carrier for the equipment type.' },
                { title: 'Liftgate Coordination at Both Ends', desc: 'Business locations without loading docks require a liftgate truck for both pickup and delivery. We coordinate this at both the origin and destination so there are no surprises on arrival day.' },
                { title: 'Chain-of-Custody Documentation', desc: 'For regulated equipment (medical devices, hazmat-adjacent machinery) we provide condition reports, crate inspection records, and carrier POD documentation. This protects you in insurance claims and compliance audits.' },
                { title: 'Shipping Insurance & Declared Value', desc: 'We ensure your equipment is covered at its actual replacement value, not LTL carriers\' default $0.10/lb rate, which would leave a $20,000 machine valued at only $200 in their liability calculation.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Heavy Equipment We Crate &amp; Ship from Austin</h2>
            <p className="text-gray-600 mb-8">We ship equipment in all of the following categories and have handled dozens of variations within each. If you do not see your equipment type listed, call us, we almost certainly can help.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'CNC Machines & Manufacturing Equipment',
                'Trade Show Displays, Booths & Exhibition Fixtures',
                'Industrial Compressors & Pneumatic Equipment',
                'Commercial Kitchen Equipment (Ranges, Ovens, Refrigeration)',
                'Printing & Finishing Equipment',
                'Medical Imaging Equipment (MRI, CT, X-Ray)',
                'Server Racks, Data Center Equipment & UPS Units',
                'Broadcast & Production Studio Equipment',
                'Laboratory Instruments & Scientific Equipment',
                'Woodworking & Metal Fabrication Machinery',
                'HVAC Equipment & Industrial Chillers',
                'Electrical Switchgear & Power Distribution Equipment',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trade Show Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trade Show &amp; Exhibition Equipment Shipping from Austin</h2>
            <p className="text-gray-700 text-lg mb-4">
              Austin is home to major events including SXSW, the Austin City Limits Music Festival, and a growing roster of business and technology conferences. Companies exhibiting at Austin events and shipping their displays to other national venues need reliable, repeatable freight solutions.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Trade show displays present a unique combination of challenges: they are large and heavy, they have fragile branded graphics and lighting components, and they operate on hard deadlines. A display that arrives damaged or late does not just cost the repair, it costs the entire show investment.
            </p>
            <p className="text-gray-700 text-lg">
              We build crates specifically designed for exhibit components, with internal dividers, foam padding on graphic faces, and labeled packing lists so reinstallation at destination is straightforward. We also coordinate advance warehouse delivery and show-floor timing when required by the venue.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Heavy Equipment Shipping Costs in Austin</h2>
            <p className="text-gray-700 text-lg mb-6">
              Cost depends on equipment dimensions, weight, freight classification, destination, and services required (liftgate, inside delivery, declared value coverage). As a rough guide:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {[
                { range: '$300–$800', label: 'Small Equipment', desc: 'Single-piece equipment under 500 lbs, local or short-haul Texas shipment, standard crate.' },
                { range: '$800–$2,500', label: 'Mid-Size Equipment', desc: 'Pallet-rated equipment 500–2,000 lbs, LTL freight to any Texas destination, full-value coverage.' },
                { range: 'Custom Quote', label: 'Large & Complex Equipment', desc: 'Multi-piece or multi-pallet equipment, custom crate design, cross-country LTL freight, white-glove delivery.' },
              ].map((tier, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-center">
                  <div className="text-2xl font-bold text-emerald mb-1">{tier.range}</div>
                  <div className="font-semibold text-gray-900 mb-2">{tier.label}</div>
                  <p className="text-gray-600 text-sm">{tier.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Call {SITE_CONFIG.phone} or submit a quote request with your equipment type, dimensions, weight, and destination. We provide quotes quickly and without obligation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'Do you require a loading dock for heavy equipment pickup?', a: 'Not necessarily. We have liftgate trucks for pickup at locations without loading docks, manufacturing facilities, retail locations, residences, and construction sites. Tell us your pickup location and we will send the right truck.' },
                { q: 'Can you disassemble equipment before crating?', a: 'For equipment that requires partial disassembly for safe transport (removing large appendages, lifting arms, detachable components), we can coordinate disassembly. For equipment requiring specialized technical knowledge, we work alongside your technicians to ensure proper procedure.' },
                { q: 'How is LTL freight classified for heavy equipment?', a: 'LTL freight class is determined by four factors: density, stowability, handling, and liability. Most heavy industrial equipment falls into class 50–85, which are the lower-cost classes. Equipment with high liability (sensitive electronics, medical devices) is classified higher. We assess your equipment and classify it correctly to avoid expensive reclassification at the carrier facility.' },
                { q: 'Do you ship heavy equipment to trade show venues like Las Vegas or Chicago?', a: 'Yes. We ship to major trade show venues across the US including Las Vegas Convention Center, McCormick Place Chicago, Orange County Convention Center, and others. We coordinate advance warehouse delivery and show move-in timing when required.' },
                { q: 'How much insurance do I need for heavy equipment shipments?', a: 'LTL carriers default to a liability of approximately $0.10–$0.25 per pound, which is catastrophically low for valuable equipment. A 1,000 lb machine worth $15,000 would only be covered for $100–$250 under default terms. We strongly recommend declared value coverage at actual replacement cost for all commercial equipment shipments.' },
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
        <ServicesGrid title="More Specialty Shipping Services in Austin" showSubLinks exclude={['/services/heavy-items']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Heavy Equipment Shipping Quote</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us your equipment type, dimensions, weight, and destination. We will send back a complete quote covering crating, freight, and all services needed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Business Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-grey-400">
              <Link href="/services/heavy-items/pool-table-shipping" className="hover:text-emerald transition">Pool Table Shipping →</Link>
              <Link href="/services/heavy-items/motorcycle-crating" className="hover:text-emerald transition">Motorcycle Crating →</Link>
              <Link href="/services/oversized-shipping/when-carriers-refuse" className="hover:text-emerald transition">When Carriers Refuse →</Link>
              <Link href="/services/medical-equipment" className="hover:text-emerald transition">Medical Equipment →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
