import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/art-installation-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Art Installation Shipping & Crating Austin Texas',
    description: 'Specialist shipping and crating for art installations in Austin, Texas. Multi-component, oversized, and complex installations — component-by-component crating, documentation, and installation coordination. Call (512) 240-9818.',
    keywords: [
      'art installation shipping Austin TX',
      'art installation transport Austin Texas',
      'complex art shipping Austin',
      'multi-piece art installation Austin',
      'large art installation crating Austin',
      'contemporary art shipping Austin TX',
      'installation art freight Austin Texas',
      'art installation logistics Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function ArtInstallationShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Art Installation Shipping & Crating Austin Texas',
    description: 'Specialist shipping, crating, and logistics for art installations in Austin, TX — multi-component crating, condition documentation, and end-to-end coordination.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Fine Art · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Art Installation Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Art installations present the most complex logistics challenge in the fine art shipping world — multiple components, site-specific assembly requirements, and often materials that do not lend themselves to standard crating. Austin Crate &amp; Freight handles the full logistics process from component inventory to crating to delivery coordination.
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

        {/* The Challenge of Installation Art */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Unique Logistics Challenge of Art Installations</h2>
            <p className="text-gray-700 text-lg mb-4">
              An art installation is not a single object — it is a system. It may have 10 components or 300. Some may be fragile and irreplaceable; others may be durable structural elements. The artistic integrity of the work depends on all components arriving intact and being assembled correctly at the destination.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              This creates logistics requirements that standard art shippers are not set up to handle. Components need to be individually catalogued, crated in a way that makes deinstallation and reinstallation logical, and shipped on a schedule that coordinates with venue availability. Documentation — photographs of the fully installed work, component condition reports, assembly notes — is as important as the physical crating.
            </p>
            <p className="text-gray-700 text-lg">
              We work directly with artists, galleries, and venue coordinators to build a logistics plan for each installation before a single crate is built. The plan defines what gets crated with what, in what order, and what documentation travels with each crate. Installations that have been properly planned arrive ready for reinstallation — not requiring a frantic phone call to the artist to figure out what goes where.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Art Installation Logistics Process</h2>
            <p className="text-gray-600 mb-8">Every installation engagement begins with planning — before any crating begins.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Component Inventory & Photography', desc: 'We photograph and catalogue every component of the installation, noting pre-existing condition, material type, and any special handling requirements. This inventory travels with the shipment and is used for condition check at delivery.' },
                { title: 'Crating Plan Development', desc: 'We design a crating plan that groups components logically for reinstallation — structural elements together, fragile elements in their own crates, hardware and fasteners in labeled bags inside the relevant crates. The sequence of crate opening at destination mirrors the installation sequence.' },
                { title: 'Component-by-Component Custom Crating', desc: 'Each component group is crated with appropriate materials for its specific fragility. A neon light element gets completely different treatment than a welded steel frame element. Materials are selected for each crate, not applied uniformly across the full installation.' },
                { title: 'Assembly Documentation', desc: 'We photograph the installation in its complete state before deinstallation begins. For complex installations, we create numbered component photos and written assembly notes that travel inside the crate. The goal is that someone other than the artist can reinstall the work using the documentation.' },
                { title: 'Freight Coordination & Timing', desc: 'Installation shipping often operates on tight venue timelines. We coordinate with receiving venues on advance warehouse acceptance, loading dock scheduling, and any weight or height restrictions at the delivery location. Missed installation windows cost exhibitions and contracts.' },
                { title: 'Return Shipping Planning', desc: 'Many installation shipments are round-trips — to an exhibition and back. We retain the crating plan and can coordinate return packing at the venue after the exhibition closes, using the same documentation and crating approach for the return journey.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Art Installation Types We Handle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Site-Specific Sculptural Installations',
                'Video & Sound Installations (Equipment + Structure)',
                'Textile, Fiber & Soft Sculpture Installations',
                'Neon & Light Art Installations',
                'Found Object & Assemblage Work',
                'Interactive Installations (Electronic Components)',
                'Performance Art Set Construction & Shipping',
                'Wall-Based Installation Panels',
                'Floor-Based & Floating Ceiling Installations',
                'Photography & Print Grid Installations',
                'Museum Loan Exhibitions (Multiple Works)',
                'Public Art Commissions & Temporary Installations',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working with Artists & Galleries */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Working with Austin Artists &amp; Galleries on Installation Logistics</h2>
            <p className="text-gray-700 text-lg mb-4">
              Austin&apos;s contemporary art scene includes institutions like Blanton Museum of Art, MASS Gallery, Big Medium, Pump Project, and Canopy Studios — all of which engage artists whose work involves installation. We have experience working within gallery and museum shipping protocols, including condition reporting standards and vendor credentialing requirements.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              For traveling exhibitions — works that move from Austin to Houston, Dallas, New York, or international venues — we coordinate the full outgoing and return shipping in a single engagement, so the artist or gallery deals with one company rather than a different vendor at each venue.
            </p>
            <p className="text-gray-700 text-lg">
              We also work with SXSW and Austin Art Week exhibitors who need installation freight solutions on tight show timelines. Call us early in the planning process — installation logistics require lead time that standard package shipping does not.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'How far in advance do I need to contact you for an installation shipment?', a: 'For a complex multi-component installation, 2–3 weeks of lead time is ideal. This allows us to conduct a planning session, design the crating approach, build the crates, and coordinate freight timing. Smaller installations with fewer components can often be turned around in 5–7 business days.' },
                { q: 'Can you deinstall the work at the venue and pack it for return?', a: 'Yes. We can coordinate a return-packing visit at the receiving venue after an exhibition closes. We retain the crating documentation and component inventory from the original shipment, making return packing systematic rather than improvised.' },
                { q: 'Do you handle electronic components in an installation?', a: 'Yes, with appropriate anti-static precautions. Electronic components — projectors, media players, speakers, interactive sensors — are packed in anti-static foam and labeled with handling requirements. We do not test or program equipment, but we do ensure it arrives physically intact.' },
                { q: 'How is freight insurance handled for a multi-component installation?', a: 'The installation as a whole should be insured at its full replacement value — not component-by-component, which is both complex and potentially undervalues the work as an integrated piece. We recommend working with your fine art insurer and can provide the component inventory and condition documentation they require.' },
                { q: 'Can you ship to a venue that does not have a loading dock?', a: 'Yes. Liftgate service is available for venues without loading docks. We coordinate this when booking the freight carrier. Advance notice of the venue\'s physical access situation is important — a liftgate truck cannot access some alleys or underground loading areas.' },
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
            <h2 className="text-3xl font-bold mb-4">Plan Your Installation Shipment</h2>
            <p className="text-grey-300 text-lg mb-8">The earlier we talk, the better the outcome. Contact us to start the planning process for your installation logistics.</p>
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
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Fine Art Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/fine-art/painting-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Painting Shipping</Link>
                <Link href="/services/fine-art/sculpture-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sculpture Shipping</Link>
                <Link href="/services/fine-art/fragile-item-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Fragile Items</Link>
                <Link href="/services/fine-art/gallery-exhibit-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Gallery Exhibits</Link>
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
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
