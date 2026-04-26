import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/executive-office-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Executive & Office Furniture Shipping Austin Texas',
    description: 'Specialist office and executive furniture shipping and crating in Austin, Texas. Executive desks, conference tables, credenzas, and full office sets, white-glove service. Call (512) 240-9818.',
    keywords: [
      'office furniture shipping Austin Texas',
      'executive desk shipping Austin TX',
      'conference table shipping Austin',
      'office furniture crating Austin Texas',
      'ship office furniture Austin TX',
      'credenza shipping Austin Texas',
      'commercial furniture shipping Austin',
      'executive furniture transport Austin TX',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function OfficeFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Executive & Office Furniture Shipping Austin Texas',
    description: 'White-glove office and executive furniture shipping and crating in Austin, TX, desks, conference tables, credenzas, and complete office sets.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Executive &amp; Office Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Moving offices, furnishing a new space from an Austin dealer, or shipping an executive desk across the country, we provide the crating, logistics, and white-glove service your commercial furniture requires.
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

        {/* Commercial Context */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Office Furniture Shipping Done Right</h2>
            <p className="text-gray-700 text-lg mb-4">
              Executive and office furniture presents specific shipping challenges: large glass surfaces, veneered wood panels, heavy stone or machined tops, and complex modular systems that need to arrive and install correctly the first time. Standard freight carriers are not equipped to handle this reliably.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We work with Austin businesses, interior designers, commercial furniture dealers, and individuals to ship office furniture locally and nationwide with the level of care it deserves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Executive Desk Crating', desc: 'Large L-shape and U-shape desks are disassembled, each panel individually wrapped, and crated with labeled hardware for clean reassembly.' },
                { title: 'Conference Table Shipping', desc: 'Conference tables, including glass, stone, and solid wood tops, get their own custom crates with rigid edge protection and foam face padding.' },
                { title: 'Credenza & Lateral File Protection', desc: 'Glass-front credenzas have glass removed and crated separately. Lateral file drawers are secured and padded before crating.' },
                { title: 'Modular System Coordination', desc: 'For system furniture (Knoll, Herman Miller, Haworth), we photograph, label, and document every component before disassembly to ensure correct reinstallation.' },
                { title: 'Dealer & Showroom Pickups', desc: 'We pick up directly from Austin furniture showrooms and deliver to your office, home office, or commercial space anywhere in the US.' },
                { title: 'Debris-Free Installation', desc: 'We remove all crating materials and packing debris so your space is clean and ready to use from the moment we finish.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Office Furniture We Ship &amp; Crate in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Executive desks (L-shape, U-shape, standing)',
                'Conference & boardroom tables',
                'Credenzas & media units',
                'Lateral & vertical file cabinets',
                'Bookshelves & library units',
                'Reception desks & counters',
                'Herman Miller, Knoll, Steelcase pieces',
                'Custom & boutique office furniture',
                'Office chairs & task seating (sets)',
                'Lounge & waiting room furniture',
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
                { q: 'Can you ship a large executive desk from Austin to another state?', a: 'Yes. We ship executive desks nationwide regularly. We disassemble, crate each component, and coordinate LTL freight with a white-glove delivery carrier at the destination.' },
                { q: 'Do you work with Austin office furniture dealers and showrooms?', a: 'Yes. We pick up directly from dealers and showrooms. Many Austin-area commercial furniture dealers refer their clients to us for specialty shipping.' },
                { q: 'Can you ship an entire office worth of furniture?', a: 'Yes. For larger jobs we assess the full scope, provide a detailed quote, and coordinate staging and loading to ensure everything is packed and tracked together.' },
                { q: 'How much does office furniture shipping cost in Austin?', a: 'A single executive desk shipped locally starts at $250–$400. Long-distance crated freight for an executive desk starts at $500+. Call (512) 240-9818 for an itemized quote.' },
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
            <h2 className="text-3xl font-bold mb-4">Ship Your Office Furniture from Austin</h2>
            <p className="text-grey-300 text-lg mb-8">From a single executive desk to a full office, we crate it, ship it, and deliver it right.</p>
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
              <Link href="/services/furniture/oversized-heavy-furniture" className="hover:text-emerald transition">Oversized Furniture →</Link>
              <Link href="/services/furniture/custom-handmade-furniture" className="hover:text-emerald transition">Custom Furniture →</Link>
              <Link href="/services/medical-equipment" className="hover:text-emerald transition">Medical Equipment →</Link>
              <Link href="/services/furniture" className="hover:text-emerald transition">All Furniture Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
