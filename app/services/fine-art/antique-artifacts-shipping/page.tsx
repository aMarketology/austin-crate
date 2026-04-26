import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/antique-artifacts-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Antique Artifact Shipping & Crating Austin Texas',
    description: 'Expert antique artifact shipping and crating in Austin, Texas. Museum-quality crating for pre-Columbian objects, Asian antiques, tribal artifacts, and archaeological pieces. Material-specific protocols. Call (512) 240-9818.',
    keywords: [
      'antique artifact shipping Austin TX',
      'archaeological artifact transport Austin',
      'antique object crating Austin Texas',
      'antiquities shipping Austin TX',
      'pre-Columbian artifact shipping Texas',
      'tribal art shipping Austin',
      'antique crating Austin Texas',
      'artifact freight Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function AntiqueArtifactsShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Antique Artifact Shipping & Crating Austin Texas',
    description: 'Museum-quality crating and specialty freight for antique artifacts, pre-Columbian objects, Asian antiques, tribal art, and archaeological pieces in Austin, TX.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Antique Artifacts · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Antique Artifact Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Antique artifacts carry irreplaceable cultural and historical significance, and physical vulnerabilities that standard freight carriers are not equipped to handle. We build museum-quality crates tailored to each object&apos;s materials, weight distribution, and fragility profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Why Artifacts Need Specialist Crating */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Antique Artifacts Need Specialist Crating</h2>
            <p className="text-gray-700 text-lg mb-4">
              Artifacts are not homogeneous. A 2,000-year-old terracotta vessel has fundamentally different structural vulnerabilities than a 16th-century bronze statue or a Qing dynasty jade pendant. Standard box-and-peanuts packing fails artifacts because it treats them as a category rather than as individual objects with specific pressure sensitivity, weight distribution issues, and material properties.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Terracotta is brittle and can crack along internal fault lines not visible on the surface. Bronze develops patinas that can flake under atmospheric pressure changes. Jade pieces with previous repairs are at risk of re-separation if vibrated at certain frequencies. Lacquerwork is exquisitely sensitive to humidity swings. Each material demands a different crating approach, and the crating builder needs to understand materials in addition to engineering.
            </p>
            <p className="text-gray-700 text-lg">
              We assess every artifact before building its crate, using appropriate foam densities, support structures, and secondary containment to isolate movement at every axis.
            </p>
          </div>
        </section>

        {/* Crating Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Crate Antique Artifacts</h2>
            <p className="text-gray-600 mb-8">Museum-standard protocols applied to each individual object.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Pre-Crating Condition Assessment', desc: 'Before we touch anything, we document the current state of the piece with photographs and written condition notes. This record protects both parties in any transit damage dispute.' },
                { title: 'Custom-Cut Foam Cradles', desc: 'We cut foam cradles to the exact profile of the object, not an approximate fit. Ethafoam and Volara are common choices depending on object material and required density. Acid-neutral, no off-gassing that could affect patinas or surface treatments.' },
                { title: 'Material-Specific Protocols', desc: 'Terracotta packed horizontally to avoid base-point loading. Bronze with patina wrapped in acid-free tissue before foam contact. Lacquerwork in sealed moisture-barrier film. Jade wrapped to prevent any hard-contact edge stresses.' },
                { title: 'Secondary Containment', desc: 'The primary crate sits inside an outer shipping container for multi-modal journeys. Air gap and secondary foam layer protect against corner impacts and the significant g-forces possible when freight is dropped during loading.' },
                { title: 'Documentation Package', desc: 'Complete shipping documentation: condition report, packing list, CITES compliance where applicable, insurance certificate, chain-of-custody record. Your piece is documented from our hands to its destination.' },
                { title: 'Arrival Unpacking Guidance', desc: 'We provide unpacking instructions with each crate so the receiving party does not inadvertently damage the piece during unboxing. For museum deliveries, we offer to be present at unpacking if the institution requires it.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artifact Types We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Antique Artifacts We Ship &amp; Crate</h2>
            <p className="text-gray-600 mb-8">We handle a broad range of historical and cultural objects with the care each material demands.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Pre-Columbian terracotta figurines & vessels', 'Mesoamerican stone carvings & stelae',
                'Asian bronze vessels & statuary', 'Chinese porcelain & ceramic ware',
                'Qing & Ming dynasty lacquerwork', 'Japanese netsuke & inro collections',
                'African tribal masks & ritual objects', 'Oceanic carved wood artifacts',
                'Near Eastern cylinder seals & cuneiform tablets', 'Egyptian faience & ushabti',
                'Ancient Greek & Roman ceramics', 'Pre-Islamic metalwork & jewelry',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Ship For */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Uses Our Antique Artifact Shipping Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Private Collectors', desc: 'Collectors moving works between residences, lending to exhibitions, selling to dealers, or entrusting pieces to institutions for conservation. We provide the documentation that serious collectors require for their records.' },
                { title: 'Dealers & Auction Houses', desc: 'Antique dealers and auction specialists sending consignments for appraisal, preview, or buyer delivery. We work to auction house timelines and meet the condition standards required for high-value transactions.' },
                { title: 'Museums & Institutions', desc: 'UT Austin, Austin museums, and Texas institutions borrowing or lending pieces for traveling exhibitions. We meet the technical packing requirements specified by institutional curatorial and registrar staff.' },
              ].map((card, i) => (
                <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
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
                { q: 'How do you handle objects with previous repairs or known fragile areas?', a: 'We photograph and document any pre-existing repairs at intake. When building the crate, we design foam support around the repair point so that no pressure or vibration can be transmitted to it during transit. Objects with major structural repairs may require consultation before we commit to a crating approach.' },
                { q: 'Can you ship items internationally?', a: 'Yes. We handle domestic crating and freight coordination. For international shipments, we work with customs brokers experienced in cultural property and CITES requirements. Export documentation and country-specific import regulations are part of the planning process. Lead time for international artifact shipments is typically 3–6 weeks from inquiry.' },
                { q: 'What conditioning paper and foam materials do you use for artifacts?', a: 'We use acid-free tissue, Ethafoam, Volara, and Tyvek depending on the material. All contact materials are chemically inert, no sulfur-containing materials near metals, no acidic materials near organic objects. Museum conservator recommendations are incorporated into our material choices for particularly sensitive pieces.' },
                { q: 'Do you provide CITES documentation for regulated materials?', a: 'We can assist in identifying what CITES documentation may be required and connect you with the appropriate brokers for obtaining permits. Objects containing ivory, certain woods, or other CITES-regulated materials require documentation before shipping, call us early in your planning process.' },
                { q: 'What is your process for an object I have never shipped before?', a: 'Call or email us with photos and basic dimensions. We will give you an initial assessment of the crating approach and a rough estimate. For unusual or very high-value pieces, we prefer to see the object in person before finalizing the approach. We offer on-site assessments for objects that cannot be transported to us first.' },
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
            <h2 className="text-3xl font-bold mb-4">Expert Crating for Your Antique Artifacts</h2>
            <p className="text-grey-300 text-lg mb-8">Every piece is unique. Call us to discuss the specific requirements of your object before we commit to a crating approach.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Request a Quote
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
