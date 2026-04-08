import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/designer-chairs'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Designer Chair Shipping & Crating Austin Texas',
    description: 'Specialist shipping and crating for designer chairs in Austin, Texas. Eames, Knoll, Herman Miller, custom armchairs, accent chairs, and dining chairs   scratch-free white-glove delivery. Call (512) 240-9818.',
    keywords: [
      'designer chair shipping Austin TX',
      'accent chair shipping Austin Texas',
      'Eames chair shipping Austin',
      'luxury chair shipping Austin TX',
      'designer armchair crating Austin',
      'ship designer chair Austin Texas',
      'Knoll chair shipping Austin',
      'white glove chair delivery Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function DesignerChairShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Designer Chair Shipping & Crating Austin Texas',
    description: 'White-glove shipping and crating for designer and luxury chairs in Austin, TX   Eames, Knoll, Herman Miller, custom armchairs, and accent seating.',
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
            <Link href="/services/furniture" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Furniture Shipping &amp; Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Designer Chairs · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Designer Chair Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              A single Eames Lounge Chair or Herman Miller Aeron is worth protecting properly. Whether you are shipping one chair or a full set of dining chairs, we handle designer seating with the same care and custom crating we apply to any high-value furniture piece.
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

        {/* Why Chairs Are Harder Than They Look */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Designer Chairs Are Harder to Ship Than They Look</h2>
            <p className="text-gray-700 text-lg mb-4">
              Chairs are deceptively tricky to ship well. Their shape   with protruding legs, arms, and backs   creates leverage points that concentrate impact forces during transit. A molded fiberglass Eames shell is vulnerable to cracking at its mounting points. A Knoll Bertoia Diamond Chair has dozens of individual wire welds that can stress under pressure. A carved wooden accent chair has delicate details that are easily chipped or snapped.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Standard box-and-peanuts packing puts a designer chair at serious risk. The chair needs to be suspended in its crate   not resting on a bottom foam pad   so that the weight of the piece distributes across the foam rather than concentrating at the legs. This is the difference between a crate built by someone who understands furniture geometry and one that is not.
            </p>
            <p className="text-gray-700 text-lg">
              For sets of dining chairs, we build multi-compartment crates where each chair sits in its own padded bay, isolated from its neighbors, so a shift during transit does not cause contact damage between pieces.
            </p>
          </div>
        </section>

        {/* How We Handle Designer Chairs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Ship &amp; Crate Designer Chairs</h2>
            <p className="text-gray-600 mb-8">Every step is oriented toward protecting the specific vulnerabilities of each chair type.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Geometry-Specific Foam Cutting', desc: 'Foam inserts are cut to match the exact profile of the chair   legs, arms, base, and back. The chair is fully supported at all contact points, not just resting on a flat pad.' },
                { title: 'Leg & Arm Padding', desc: 'Exposed legs and armrests are individually wrapped before any foam or wrap contact. This prevents surface transfer from packaging materials and impact concentration at protruding points.' },
                { title: 'Upholstery Protection', desc: 'Fabric and leather upholstery is wrapped in breathable furniture blanket, never stretch film directly on fabric, to prevent compression marks, snagging, or heat transfer.' },
                { title: 'Disassembly Where Needed', desc: 'Chairs with removable bases (office chairs, swivel bases, Herman Miller mechanisms) are disassembled and each component packed separately. All hardware is bagged and labeled.' },
                { title: 'Multi-Chair Crating', desc: 'Dining chair sets of 4, 6, or 8 are crated in shared frames with individual bays   each chair protected from its neighbors, reducing freight cost versus individual crating.' },
                { title: 'Fragile Point Reinforcement', desc: 'Known fragile attachment points   shell-to-base mounts on Eames chairs, leg-to-seat joints on carved wood pieces   get additional foam blocking to prevent flex during transit.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chairs We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Designer &amp; Luxury Chairs We Ship</h2>
            <p className="text-gray-600 mb-8">From iconic mid-century pieces to contemporary luxury seating.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Eames Lounge Chair & Ottoman (molded shell)', 'Herman Miller Aeron & Embody ergonomic chairs',
                'Knoll Bertoia Diamond & Wire chairs', 'Wassily & Barcelona chairs',
                'Custom upholstered accent chairs', 'Wing-back & Chesterfield armchairs',
                'Roche Bobois & B&B Italia lounge seating', 'Designer dining chair sets',
                'Sculptural & art chairs', 'Vintage mid-century chairs',
                'Swivel & pedestal base chairs', 'Carved wood & painted accent chairs',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'Can you ship a single Eames Lounge Chair safely?', a: 'Yes. The Eames Lounge Chair is one of the most commonly requested designer pieces we ship. The shell-to-base mount and the ottoman leg connections are the known fragile points, and we build the crate specifically to protect these. We ship chairs to collectors, buyers, and galleries nationwide.' },
                { q: 'How do you handle a set of 8 designer dining chairs?', a: 'Multi-chair sets are crated in shared frames with individual bays. Each chair occupies a padded compartment and cannot contact adjacent chairs during transit. This is more cost-effective than individual crating for each chair while providing the same per-chair protection.' },
                { q: 'Do you ship vintage mid-century chairs that might be fragile?', a: 'Yes. Older pieces with original upholstery, original finish, or known repair history are assessed before we commit to a crating approach. For very fragile vintage pieces, we may recommend additional support structures inside the crate. We will advise you honestly at the assessment stage.' },
                { q: 'Can you pick up a designer chair at an estate sale or showroom in Austin?', a: 'Yes. We pick up from estates, showrooms, auction houses, and private sellers throughout Greater Austin and the surrounding area. We bring the right materials for the pickup   no blankets borrowed from a moving truck.' },
                { q: 'What does shipping a designer chair cost?', a: 'A single chair shipped locally in Austin typically starts at $150-$250. Long-distance crated freight depends on the chair dimensions and destination. A set of dining chairs runs proportionally. Call us at (512) 240-9818 for a free, specific quote.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
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
            <h2 className="text-3xl font-bold mb-4">Ship Your Designer Chairs from Austin</h2>
            <p className="text-grey-300 text-lg mb-8">One chair or a full set   custom crating, white-glove pickup, and delivery anywhere in the US.</p>
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
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Furniture Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/furniture/designer-sofas-sectionals" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sofas &amp; Sectionals</Link>
                <Link href="/services/furniture/dining-tables-sets" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Dining Tables</Link>
                <Link href="/services/furniture/bedroom-furniture" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Bedroom Furniture</Link>
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
