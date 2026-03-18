import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/cabinets-credenzas'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Cabinet & Credenza Shipping Austin Texas',
    description: 'Specialist cabinet and credenza shipping in Austin, Texas. Display cabinets, media credenzas, china cabinets, bar cabinets, and sideboards — custom crating and white-glove delivery. Call (512) 240-9818.',
    keywords: [
      'cabinet shipping Austin Texas',
      'credenza shipping Austin TX',
      'china cabinet shipping Austin',
      'media credenza shipping Austin TX',
      'sideboard shipping Austin Texas',
      'cabinet crating Austin TX',
      'buffet shipping Austin Texas',
      'display cabinet shipping Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function CabinetsCredenazasShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Cabinet & Credenza Shipping Austin Texas',
    description: 'Specialist shipping and crating for cabinets, credenzas, sideboards, and china cabinets in Austin, TX — custom wood crates, glass protection, and white-glove delivery.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Cabinets &amp; Credenzas · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cabinet &amp; Credenza Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Cabinets and credenzas combine weight, glass, delicate hardware, and high-quality finishes in a single piece. Shipping them requires more than blanket wrap — it requires crating that protects the glass, supports the case structure, and keeps doors and drawers from shifting during transit.
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

        {/* What Makes Cabinets Difficult */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Makes Cabinets &amp; Credenzas Difficult to Ship</h2>
            <p className="text-gray-700 text-lg mb-4">
              A credenza looks like a straightforward box — but it is actually a complex assembly of panels, doors, hinges, shelving, hardware, and often glass, all of which behave differently under the stresses of freight transport. The case panels flex; the doors can jar open; drawer slides can misalign if the piece is racked; glass doors or panels can crack if the outer crate is stressed.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Cabinets are also commonly very heavy, which compounds the risk. A solid hardwood sideboard at 200 lbs becomes a battering ram inside an under-built crate if it shifts. Our crates are built to hold position — the piece does not move inside the crate, at all, from origin to destination.
            </p>
            <p className="text-gray-700 text-lg">
              China cabinets and display cabinets with large glass panel areas need glass-specific protection — face padding that prevents the glass from flexing at the frame edges, and reinforced crate panels so no impact force reaches the glass directly.
            </p>
          </div>
        </section>

        {/* How We Crate */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Crate Cabinets &amp; Credenzas</h2>
            <p className="text-gray-600 mb-8">Tailored to the specific construction and vulnerabilities of each piece.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Door Securing', desc: 'Cabinet doors are secured closed with temporary fasteners or foam wedges so they cannot open under vibration or when the piece is tilted. This prevents door-to-frame impact and hinge stress.' },
                { title: 'Drawer Blocking', desc: 'Drawers are removed or blocked in place. Removed drawers are wrapped and packed flat. Blocked drawers are fitted with internal foam so the drawer face cannot contact the case edge.' },
                { title: 'Glass Panel Protection', desc: 'Glass panels and doors are face-padded with foam and Tyvek before any blanket contact. Crate panels are reinforced to prevent flex from reaching the glass.' },
                { title: 'Leg Protection', desc: 'Cabinet legs are individually wrapped. If legs are removable, we remove them and pack them separately to eliminate the most common fracture point during transit.' },
                { title: 'Finish-Safe Wrapping', desc: 'Lacquered, painted, oiled, or veneered surfaces all receive breathable wrapping that will not transfer, mark, or damage the finish. No stretch film directly on finished wood.' },
                { title: 'Custom-Sized Crate', desc: 'We build the crate to the exact outside dimensions of the piece plus the required clearance for foam layers. No shipping a credenza in a slightly-too-large crate with extra movement.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Cabinets &amp; Credenzas We Ship</h2>
            <p className="text-gray-600 mb-8">Every style and construction handled with appropriate specialist care.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Mid-century modern credenzas', 'Media consoles & entertainment credenzas',
                'China cabinets & hutches', 'Display cabinets with glass panels',
                'Bar cabinets & liquor cabinets', 'Sideboards & buffets',
                'Built-to-order custom credenzas', 'Antique corner cabinets',
                'Filing cabinets (executive/lateral)', 'Gun cabinets & secure storage',
                'Curio cabinets', 'Vintage industrial storage cabinets',
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
                { q: 'Can you ship a large china cabinet with multiple glass panels?', a: 'Yes. China cabinets are among our most common requests. We remove glass doors where possible, face-pad in-place glass where removal is not practical, and build crates with reinforced front panels to prevent impacts reaching glass surfaces.' },
                { q: 'Do you remove cabinet legs before shipping?', a: 'When legs are designed to be removable, yes — we remove them, wrap them, and label them for reinstallation. Fixed-leg cabinets have their legs individually wrapped with foam padding to protect against impact at the vulnerable joint between leg and case.' },
                { q: 'Can you move a credenza that is very long (over 8 feet)?', a: 'Yes. We have built crates for credenzas and sideboards up to 12 feet in length. Long pieces are susceptible to mid-span flex in transit, so our crate design adds longitudinal reinforcement along the crate floor.' },
                { q: 'What is your coverage area for cabinet pickup in Austin?', a: 'We pick up throughout Greater Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and surrounding areas. For larger pieces, we send a two-person crew with appliance dollies and furniture pads for building-safe movement from the room to our truck.' },
                { q: 'How much does shipping a credenza cost?', a: 'A local Austin credenza delivery typically starts around $200–$350. Long-distance crated freight pricing depends on dimensions and destination. Contact us at (512) 240-9818 for a free itemized quote.' },
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
            <h2 className="text-3xl font-bold mb-4">Expert Cabinet &amp; Credenza Shipping in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Custom crating for every cabinet type. White-glove pickup and delivery throughout Austin and nationwide.</p>
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
                <Link href="/services/furniture/designer-chairs" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Designer Chairs</Link>
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
