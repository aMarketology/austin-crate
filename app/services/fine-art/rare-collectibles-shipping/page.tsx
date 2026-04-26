import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/rare-collectibles-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Rare Collectibles Shipping & Crating Austin Texas',
    description: 'Specialist shipping for rare collectibles in Austin, Texas, coins, sports memorabilia, graded cards, vintage toys, autographed items, and numismatic collections. Tamper-evident, insured, and documented. Call (512) 240-9818.',
    keywords: [
      'rare collectibles shipping Austin TX',
      'coin collection shipping Austin Texas',
      'sports memorabilia shipping Austin TX',
      'graded card shipping Austin Texas',
      'PSA slab shipping Austin',
      'numismatic collection shipping Austin',
      'vintage toy shipping Austin TX',
      'rare collectibles crating Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function RareCollectiblesShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Rare Collectibles Shipping & Crating Austin Texas',
    description: 'Specialist shipping and crating for rare collectibles in Austin, TX, coins, sports memorabilia, graded cards, vintage toys, autographed items, and numismatic collections.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Collectibles Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Rare Collectibles Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Rare collectibles represent decades of patient accumulation and serious financial investment. Whether you are shipping a numismatic collection, a graded sports card collection, or an estate&apos;s worth of vintage memorabilia, we handle every piece with the documented care that high-value collectibles demand.
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

        {/* Why Collectibles Need Specialist Shipping */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Rare Collectibles Need Specialist Shipping</h2>
            <p className="text-gray-700 text-lg mb-4">
              Rare collectibles are not just fragile, they are grade-sensitive. A graded PSA or BGS slab dropped during shipping is not just physically damaged; its holder is cracked, its grade is compromised, and its resale value may be permanently impacted even after re-holdering. A rare coin pressed against a rigid surface in an inadequate package develops bag marks that reduce its grade. An autographed item exposed to humidity sees ink migration that can ruin a signature worth thousands.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Standard carriers are not set up to recognize these risks. Their handlers do not know what a PSA 10 population report means, or why a coin in a PCGS holder that shifts inside its packing is being damaged by the act of transit itself. We do, and we build the packing around these specific threat vectors.
            </p>
            <p className="text-gray-700 text-lg">
              We also provide tamper-evident sealing and chain-of-custody documentation so that when a valuable collectible arrives and any party questions what happened during shipping, you have a complete record.
            </p>
          </div>
        </section>

        {/* How We Handle Collectibles */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Handle Rare Collectibles</h2>
            <p className="text-gray-600 mb-8">Every aspect of packing is designed to preserve the grade, condition, and documentation trail.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Item-Level Documentation', desc: 'Each individual collectible is photographed and catalogued before packing. For graded cards and coins, we record the holder serial number and grade. For memorabilia, we document the authentication certificate number. This becomes your chain-of-custody record.' },
                { title: 'Tamper-Evident Sealing', desc: 'Once packed, boxes are sealed with tamper-evident tape. Any breach of the seal is visible on arrival. For very high-value collections, we can use serialized security tape that shows attempted re-entry.' },
                { title: 'Grade-Safe Foam Density', desc: 'Graded slabs (PSA, BGS, CGC) are packed in foam that prevents the slab from moving at all, not just from bouncing. The slab holder should arrive with zero evidence of internal movement.' },
                { title: 'Coin-Safe Materials', desc: 'All coin-contact materials are chemically inert. No PVC in any soft packaging layer. Holders are individually immobilized. Sulfur-free tissue where tissue contact is needed.' },
                { title: 'Humidity Protection', desc: 'Autographed items, vintage trading cards, and paper-based collectibles are sealed inside polyethylene barrier layers before outer packing. Desiccant packets where appropriate for long-distance shipments.' },
                { title: 'Insurance Coordination', desc: 'We can advise on declared value requirements for your shipment. We document replacement value based on current market grades when you provide supporting documentation.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collectibles We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Rare Collectibles We Ship</h2>
            <p className="text-gray-600 mb-8">High-value collectibles in every category, treated with the same care as fine art.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Graded sports cards (PSA, BGS, SGC slabs)', 'Raw vintage trading cards & unopened wax',
                'Numismatic collections (PCGS, NGC, raw)', 'Currency & banknote collections',
                'Signed sports memorabilia & jerseys', 'Autographed photographs & prints',
                'Vintage video games (sealed & graded)', 'Vintage toy collections & action figures',
                'Comic book collections (CGC & raw)', 'Signed first editions & rare books',
                'Sports equipment used by professionals', 'Championship rings & trophies',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Ships With Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Trusts Us with Their Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Private Collectors', desc: 'Collectors selling or buying on the secondary market, consigning to auction, or moving collections between storage locations or residences. We provide the professional packing documentation that high-end consignment houses require.' },
                { title: 'Dealers & Show Vendors', desc: 'Dealers attending national trade shows and conventions, Dallas, Houston, Chicago, New York. Show inventory packing, booth display shipping, and return logistics handled by a crating company that understands the value of what it is handling.' },
                { title: 'Estate Administrators', desc: 'Estates that include valuable collectible holdings require specialist handling. We work with estate attorneys and administrators to document, pack, and ship collections for appraisal, division, or auction consignment.' },
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
                { q: 'Do you handle large coin collection moves?', a: 'Yes. Large numismatic collections require careful cataloguing, item-level documentation, and appropriate containment so individual coins cannot rub against each other or against holder edges. We can manage collections of hundreds or thousands of individual items.' },
                { q: 'Can you ship graded cards in bulk (dealer inventory)?', a: 'Yes. Dealer card inventory, mixed grades, raw, and graded slabs, is a standard request. We pack slabs in foam trays, raw cards in rigid containers with foam backing and separators. Full inventory list provided on request.' },
                { q: 'What is your process for ensuring tamper evidence on high-value shipments?', a: 'Boxes are sealed with tamper-evident security tape after final documentation. We photograph the sealed package before handoff. The seal signature and photo form part of your chain-of-custody documentation. Any tampering is detectable on arrival.' },
                { q: 'How do you document autographed items before shipping?', a: 'We photograph each autographed piece at close range under controlled lighting before packing, showing the signature clearly. Authentication certificate numbers are noted. This record establishes pre-shipping condition in detail.' },
                { q: 'Can you ship across state lines or to other countries?', a: 'Yes to both. Domestic interstate shipping is routine for us. International shipping requires appropriate customs documentation and carrier selection. For registered firearms or regulated items, additional documentation requirements apply, contact us early in your planning.' },
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
            <h2 className="text-3xl font-bold mb-4">Protect Your Collection During Transit</h2>
            <p className="text-grey-300 text-lg mb-8">Grade-safe packing, full documentation, tamper-evident sealing. Call to discuss your specific collection.</p>
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
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
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
