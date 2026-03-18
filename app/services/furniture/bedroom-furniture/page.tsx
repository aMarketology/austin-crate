import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'
import ServicesGrid from '@/app/components/ServicesGrid'

const SLUG = '/services/furniture/bedroom-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Bedroom Furniture Shipping Austin Texas',
    description: 'Specialist bedroom furniture shipping and crating in Austin, Texas. Platform beds, sleigh beds, dressers, armoires, and nightstands — white-glove pickup, disassembly & delivery. Call (512) 240-9818.',
    keywords: [
      'bedroom furniture shipping Austin Texas',
      'bed frame shipping Austin TX',
      'dresser shipping Austin Texas',
      'armoire shipping Austin TX',
      'bedroom set shipping Austin',
      'ship bedroom furniture Austin',
      'bed crating Austin Texas',
      'furniture shipping bedroom Austin TX',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function BedroomFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Bedroom Furniture Shipping Austin Texas',
    description: 'White-glove bedroom furniture shipping and crating in Austin, TX — beds, dressers, armoires, and full bedroom sets.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Bedroom Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Platform beds, sleigh beds, four-poster frames, dressers, armoires, and complete bedroom sets — shipped and crated safely from Austin to anywhere. Full disassembly, expert crating, and white-glove reassembly included.
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

        {/* How We Handle It */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Ship Bedroom Furniture</h2>
            <p className="text-gray-700 text-lg mb-4">
              Bedroom furniture presents a unique combination of large, heavy panels (headboards, dressers) and delicate hardware, mirrors, and finish surfaces. Tall armoires and headboards are particularly prone to tip-over damage and corner impact. Our process protects every component from pickup through placement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { title: 'Bed Frame Disassembly', desc: 'All bed frames are fully disassembled — headboards, footboards, side rails, and slats — with all hardware bagged and labeled by location.' },
                { title: 'Mirror & Glass Removal', desc: 'Dresser and armoire mirrors are removed, edge-padded, and crated separately for full protection during transit.' },
                { title: 'Drawer Removal & Padding', desc: 'Drawers are removed, wrapped, and loaded flat. This prevents them from sliding open and adds structural protection to drawer boxes.' },
                { title: 'Tall Piece Crating', desc: 'Armoires and tall dressers that are prone to tipping are fitted with rigid corner and edge bracing inside their crates.' },
                { title: 'Finish Protection', desc: 'High-gloss lacquer, painted, or hand-rubbed finishes all get breathable, non-reactive wrapping that will not transfer or damage surfaces.' },
                { title: 'Full Reassembly', desc: 'We reassemble every piece in your new space — beds fully made up on their frames, mirrors rehung, drawers returned to their correct positions.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Bedroom Furniture We Ship in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Platform & low-profile bed frames',
                'Sleigh beds & four-poster frames',
                'King & Cal-King oversized headboards',
                'Canopy & poster beds',
                'Solid wood dressers & chest of drawers',
                'Armoires & wardrobes',
                'Nightstands & bedside tables',
                'Vanity tables & mirrors',
                'Complete bedroom sets',
                'Upholstered headboards & bed frames',
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
                { q: 'Do you ship full bedroom sets from Austin?', a: 'Yes. We handle complete bedroom set shipping — bed frame, dresser, nightstands, armoire, and mirror. Every piece is tracked, wrapped, and delivered together.' },
                { q: 'Can you move a king-size bed frame and headboard?', a: 'Yes, including oversized California King and custom headboards. We disassemble, wrap, and crate at the appropriate protection level for the piece.' },
                { q: 'Do you ship bedroom furniture long distance from Austin?', a: 'Yes. We offer long-distance bedroom furniture shipping to all 50 states. Crating is recommended for cross-country shipments to protect against multiple freight handling points.' },
                { q: 'How long does bedroom furniture shipping take from Austin?', a: 'Local delivery in Austin is typically same-week. Long-distance freight to most US destinations takes 3–7 business days depending on destination and carrier. Call (512) 240-9818 for specifics.' },
                { q: 'Can you ship an upholstered headboard without damaging the fabric?', a: 'Yes. Upholstered headboards are wrapped in breathable furniture blankets — never stretch film directly on fabric, which can leave compression marks. Button-tufted headboards get individual pocket padding for each button. We adjust wrap technique to the specific upholstery type.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
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
            <h2 className="text-3xl font-bold mb-4">Ship Your Bedroom Furniture from Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Free pickup in Greater Austin. Professional crating. Nationwide delivery.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
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
                <Link href="/services/furniture/designer-chairs" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Designer Chairs</Link>
                <Link href="/services/furniture/cabinets-credenzas" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Cabinets &amp; Credenzas</Link>
                <Link href="/services/furniture/grandfather-clock-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Grandfather Clocks</Link>
                <Link href="/services/furniture/marble-stone-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Marble &amp; Stone</Link>
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
