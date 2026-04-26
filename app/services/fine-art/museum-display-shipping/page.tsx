import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/museum-display-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Museum Display Shipping & Logistics Austin Texas',
    description: 'Institutional-grade museum display shipping and logistics in Austin, Texas. Object ID documentation, condition reporting, courier coordination, and climate consideration for museum loan and exhibit transport. Call (512) 240-9818.',
    keywords: [
      'museum display shipping Austin TX',
      'museum artifact transport Austin',
      'museum exhibit logistics Austin Texas',
      'museum shipping services Austin',
      'museum loan packing Austin TX',
      'institutional art shipping Austin',
      'museum freight Austin Texas',
      'exhibition transport Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function MuseumDisplayShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Museum Display Shipping & Logistics Austin Texas',
    description: 'Institutional-grade museum display shipping and logistics in Austin, TX, condition reports, Object ID documentation, loan agreement compliance, and courier coordination for museums and institutions.',
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
            <Link href="/services/fine-art" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Fine Art Shipping &amp; Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Museum Logistics · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Museum Display Shipping &amp; Logistics in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Museum-quality shipping means meeting institutional standards, not just handling pieces carefully. We provide the documentation, condition reporting, and protocol compliance that museums and institutional lenders require when objects leave or enter their collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Institutional Inquiry
              </Link>
            </div>
          </div>
        </section>

        {/* What Museum-Standard Means */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What &ldquo;Museum-Standard&rdquo; Shipping Actually Means</h2>
            <p className="text-gray-700 text-lg mb-4">
              The phrase &ldquo;museum quality&rdquo; is used loosely in the shipping industry. For us, it means meeting the specific requirements that institutional registrars and collections managers actually impose on outgoing loan shipments. These requirements are codified in loan agreements and cannot be papered over with generalities.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Museum-standard shipping means: condition reports that match the format required by the lending institution, packing materials that pass museum conservation standards (no acidic materials, no PVC, no sulfur-containing products), crate construction to AAM or AAMD-referenced standards, and documentation that creates an unambiguous record of the object&apos;s state at every transfer of custody.
            </p>
            <p className="text-gray-700 text-lg">
              When objects are borrowed by museums from private collections, the institutional requirements travel with them. We help private collectors and smaller institutions meet those requirements so their loans are accepted and their objects are protected.
            </p>
          </div>
        </section>

        {/* Services for Institutions */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Museum &amp; Institution Logistics Services</h2>
            <p className="text-gray-600 mb-8">From a single loan object to a full traveling exhibition.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Condition Reporting', desc: 'Standardized condition reports completed at intake and at delivery against a agreed baseline. Photographic documentation at close range under consistent lighting. Reports formatted to institutional standards where provided.' },
                { title: 'Object ID Documentation', desc: 'Object ID fields documented for each piece in a shipment, identifying characteristics, dimensions, material, inscriptions, provenance summary. Reduces risk of misidentification at delivery and is good practice for objects of cultural significance.' },
                { title: 'Loan Agreement Compliance', desc: 'We review the packing and transit requirements specified in the institution\'s loan agreement and confirm compliance before accepting the job. If requirements exceed our standard service, we discuss the gap and find solutions.' },
                { title: 'Crate Build to Specification', desc: 'Some institutions specify crate dimensions, hardware, or construction standards. We build to specification. Lids with butterfly latches, recessed screws, specific lumber dimensions, institutional specs are followed.' },
                { title: 'Courier Coordination', desc: 'Some loans require a courier to accompany the object in transit. We coordinate with the courier, provide documentation for the journey, and ensure the courier has what they need to supervise handling at origin, destination, and intermediate points.' },
                { title: 'Return Condition Verification', desc: 'On return shipments, we verify and document condition against the intake report. Any changes noted during the exhibition period are recorded. This closes the loan cycle with a clean documentary record.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Austin Museum Context */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Austin&apos;s Museum Ecosystem</h2>
            <p className="text-gray-700 text-lg mb-4">
              Austin has a significant institutional art environment, the Blanton Museum of Art at UT Austin, the Austin Museum of Art (Laguna Gloria), the Mexic-Arte Museum, the Harry Ransom Center, and a range of university and academic collections. The city&apos;s growth has brought increasing institutional borrowing from Austin-area collectors and increased outgoing loans from Austin institutions to national and international venues.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We support this institutional ecosystem with a physical presence in Austin, meaning we can respond when something changes, assess objects in person before quoting, and be present at origin and destination for high-stakes shipments in a way that a national broker-only operation cannot.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              {[
                'Blanton Museum Area', 'UT Campus Collections', 'Laguna Gloria',
                'Harry Ransom Center', 'Mexic-Arte Museum', 'Private Austin Collections',
              ].map((inst, i) => (
                <div key={i} className="text-center py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                  {inst}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Object Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Museum Display Object Types We Ship</h2>
            <p className="text-gray-600 mb-8">Objects held by or loaned to institutions across all collection areas.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Paintings on loan to traveling exhibitions', 'Works on paper including drawings & prints',
                'Sculpture and three-dimensional works', 'Archaeological and historical artifacts',
                'Decorative arts and furniture', 'Textiles and fiber works',
                'Photographic prints and historic photographs', 'Digital and new media hardware',
                'Natural history objects and specimens', 'Archival documents and rare books',
                'Installation components', 'Ceremonial and cultural material objects',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
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
                { q: 'Can you work to a museum registrar\'s specific packing requirements?', a: 'Yes. Loan agreements often specify particular packing standards, including crate dimensions, hardware types, climate buffering materials, and condition report formats. We review these requirements before accepting a job and confirm in writing that we will meet them.' },
                { q: 'Do you provide climate-buffered crating?', a: 'We provide passive climate buffering using silica gel conditioning systems appropriate for the object type and expected transit environment. For objects requiring active climate control during transport, we coordinate with specialist climate-controlled transport carriers.' },
                { q: 'Can a private collector use your services to lend to a museum?', a: 'Yes. Collectors lending to institutional exhibitions are a significant part of our museum-adjacent work. We help collectors meet the institutional packing and documentation requirements that come with the loan agreement, making the borrowing process smoother for both parties.' },
                { q: 'How do you handle objects that the institution requires a courier to accompany?', a: 'We coordinate with the courier completely, providing itineraries, documentation packages, handling instructions for each object, and contact information for receiving parties. The courier travels with the shipment; we handle everything that happens before and after the courier portion.' },
                { q: 'What is your process for acquiring a quote for an institutional shipment?', a: 'Contact us with the loan agreement, object dimensions and weights, origin and destination, and the required delivery date. For institutional work, we prefer to receive the packing requirements specification from the loan agreement before quoting, so we can be accurate about what the job requires.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Fine Art &amp; Specialty Shipping Services" showSubLinks exclude={['/services/fine-art']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Institutional-Grade Shipping from Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Museum loan compliance, condition documentation, and expert crating, managed by a local Austin team that can respond when requirements change.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Institutional Inquiry
              </Link>
            </div>
            <div className="mt-8 border-t border-grey-700 pt-6">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Fine Art Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/fine-art/painting-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Painting Shipping</Link>
                <Link href="/services/fine-art/sculpture-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sculpture Shipping</Link>
                <Link href="/services/fine-art/art-installation-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Art Installation</Link>
                <Link href="/services/fine-art/fragile-item-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Fragile Items</Link>
                <Link href="/services/fine-art/gallery-exhibit-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Gallery Exhibits</Link>
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
                <Link href="/services/fine-art/rare-collectibles-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Rare Collectibles</Link>
                <Link href="/services/fine-art/glass-art-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Glass Art</Link>
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
