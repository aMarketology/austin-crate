import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'
import ServicesGrid from '@/app/components/ServicesGrid'

const SLUG = '/services/furniture/designer-sofas-sectionals'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Designer Sofa & Sectional Shipping Austin Texas',
    description: 'Specialist shipping and crating for designer sofas and sectionals in Austin, Texas. White-glove pickup, custom crating, and scratch-free delivery for luxury seating brands. Call (512) 240-9818.',
    keywords: [
      'designer sofa shipping Austin Texas',
      'sectional shipping Austin TX',
      'luxury sofa shipping Austin',
      'ship designer couch Austin',
      'sofa crating Austin Texas',
      'white glove sofa delivery Austin',
      'sectional crating Austin TX',
      'luxury furniture shipping Austin',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function DesignerSofaShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Designer Sofa & Sectional Shipping Austin Texas',
    description: 'White-glove shipping and crating for designer sofas and sectionals in Austin, TX.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Designer Sofa &amp; Sectional Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Your RH, Restoration Hardware, Natuzzi, or custom sectional deserves more than bubble wrap and a truck. We ship and crate designer sofas and sectionals across Austin and nationwide, with white-glove handling and a scratch-free guarantee.
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

        {/* Why It's Different */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Designer Sofas Need Specialist Shipping</h2>
            <p className="text-gray-700 text-lg mb-6">
              A standard moving company treats a $12,000 sectional the same way they treat a $400 IKEA sofa. At Austin Crate &amp; Freight, we do not. Designer sofas and sectionals present unique challenges: exposed fabric, delicate legs, modular connectors, down fills, and high-gloss or leather finishes that scratch, scuff, or crease under ordinary wrap-and-go handling.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Our process starts with the right wrap materials for the finish, breathable blankets for leather, stretch film for fabric, and ends with custom wood crating when the piece is going long-distance or through an LTL freight network where multiple handlers will touch it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                { title: 'Fabric & Upholstery Protection', desc: 'Breathable furniture blankets and acid-free wrapping prevent crushing, snagging, and compression marks on delicate upholstery.' },
                { title: 'Leather & Vinyl Care', desc: 'We use specific wrap techniques and padding profiles that prevent creasing, cracking, or surface transfer on premium leather.' },
                { title: 'Modular & Sectional Disassembly', desc: 'Sectional connectors are carefully documented, removed, and bagged so your sofa reassembles perfectly at delivery.' },
                { title: 'Custom Crating for Long-Haul', desc: 'Cross-country shipments get a bespoke wood crate built in our Austin shop, exact dimensions, interior blocking, screw lid.' },
                { title: 'Leg & Hardware Protection', desc: 'Exposed wooden or metal legs are individually wrapped and padded to prevent impact damage during transit.' },
                { title: 'White-Glove Placement', desc: 'We bring the piece inside, position it where you want it, reassemble all sections, and remove all packing materials.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands We Ship */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Designer Sofa Brands We Ship in Austin</h2>
            <p className="text-gray-600 mb-8 text-lg">We have shipped sofas and sectionals from the following brands and many more.</p>
            <div className="flex flex-wrap gap-3">
              {['Restoration Hardware (RH)', 'Natuzzi', 'Roche Bobois', 'B&B Italia', 'Poliform', 'Cassina', 'Ligne Roset', 'Mitchell Gold + Bob Williams', 'Room & Board', 'Article', 'West Elm (designer lines)', 'Pottery Barn (premium)', 'Ethan Allen', 'Crate & Barrel (luxury)', 'Local Austin Artisan Sofas'].map((brand) => (
                <span key={brand} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm">{brand}</span>
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
                { q: 'Can you pick up my designer sofa in Austin?', a: 'Yes, we offer free pickup anywhere in Greater Austin, Round Rock, Cedar Park, Georgetown, and surrounding areas. Our crew arrives with all the right equipment and materials.' },
                { q: 'Do you ship sectionals in one piece or disassembled?', a: 'We assess each sectional individually. Most large sectionals ship disassembled into their modular sections, with all hardware carefully bagged and labeled. We reassemble on delivery.' },
                { q: 'Will you crate my sofa for cross-country shipping?', a: 'Yes. For any long-distance shipment going through LTL freight, we strongly recommend a custom wood crate built in our Austin shop. We provide this end-to-end.' },
                { q: 'How much does sofa shipping cost in Austin?', a: 'Local designer sofa delivery in Austin typically starts at $200-$400 depending on size and access. Long-distance crated freight starts at $400+. Call (512) 240-9818 for a free quote.' },
                { q: 'Can you ship a European brand sectional (Roche Bobois, B&B Italia)?', a: 'Yes. We ship international designer sectionals regularly. Pieces from Ligne Roset, Roche Bobois, B&B Italia, and Cassina require specialist handling due to precision-fit modular connections and premium leather or fabric finishes. We photograph every connection point and bag all hardware for correct reassembly at the destination.' },
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
            <h2 className="text-3xl font-bold mb-4">Ship Your Designer Sofa the Right Way</h2>
            <p className="text-grey-300 text-lg mb-8">Call us or get a free quote online. We serve all of Greater Austin and ship nationwide.</p>
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
                <Link href="/services/furniture/dining-tables-sets" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Dining Tables</Link>
                <Link href="/services/furniture/bedroom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Bedroom Furniture</Link>
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
