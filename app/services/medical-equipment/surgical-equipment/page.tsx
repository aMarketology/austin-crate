import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/medical-equipment/surgical-equipment'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Surgical Equipment Shipping Austin Texas',
    description: 'Specialist surgical equipment shipping and crating in Austin, Texas. Operating tables, surgical lights, laparoscopic towers, robotic surgery systems, and sterile instrument sets. HIPAA-compliant. Call (512) 240-9818.',
    keywords: [
      'surgical equipment shipping Austin Texas',
      'operating table shipping Austin TX',
      'surgical instrument transport Austin',
      'laparoscopic equipment shipping Austin Texas',
      'robotic surgery system shipping Austin TX',
      'OR equipment transport Austin Texas',
      'surgical light shipping Austin TX',
      'sterile instrument set shipping Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function SurgicalEquipmentShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Surgical Equipment Shipping Austin Texas',
    description: 'Specialist shipping and crating for surgical equipment in Austin, TX, operating tables, surgical lights, laparoscopic towers, robotic systems, and sterile instrument sets.',
    serviceType: 'Medical Equipment Transport',
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
            <Link href="/services/medical-equipment" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Medical Equipment Transport
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Surgical Equipment · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Surgical Equipment Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Surgical equipment must arrive sterile, intact, and fully functional. An operating table with a bent column, a laparoscopic tower with a cracked insufflation port, or a robotic surgery system with a damaged arm joint cannot go into the OR. The cost of a delayed surgical schedule far exceeds the cost of doing the move correctly the first time.
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

        {/* Why Surgical Equipment Is High-Stakes */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The High Stakes of Surgical Equipment Transport</h2>
            <p className="text-gray-700 text-lg mb-4">
              Surgical equipment operates in environments where failure has immediate patient-safety consequences. This shapes how transport must be approached: every component that could be damaged in transit, a motor drive in an OR table, a light head in a surgical ceiling pendant, a camera head in a laparoscopic tower, needs to be individually assessed and protected, not generically wrapped.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              OR tables and surgical positioning equipment are heavy, have multiple articulating sections, and often contain hydraulic or electrical systems that must be transported in specific configurations. Surgical lights contain precision-balanced multi-LED arrays and counterbalanced suspension arms that can be damaged if the arm is transported extended. Laparoscopic and endoscopic towers combine rack-mounted electronics with high-resolution camera systems, light sources, and insufflation equipment that all have individual fragility profiles.
            </p>
            <p className="text-gray-700 text-lg">
              For robotic surgery systems, da Vinci and similar platforms, transport is a multi-component project requiring close coordination with your facility's clinical engineering team and the OEM's field service group. We handle the physical protection and logistics; clinical engineering handles the commissioning on the other end. We have done it before and know what documentation each party needs.
            </p>
          </div>
        </section>

        {/* How We Handle It */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Pack &amp; Transport Surgical Equipment</h2>
            <p className="text-gray-600 mb-8">Component-specific preparation, sterile barrier protection, and heavy-equipment rigging where needed.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Articulating Section Securing', desc: 'OR table sections, surgical chair backs, and articulating components are locked in the transport position before the unit is moved. This prevents hydraulic drift and mechanical stress on pivot points.' },
                { title: 'Sterile Barrier Maintenance', desc: 'Sterile-field components, drapes, instrument trays, wrapped sets, are handled with gloves and kept in sealed packaging during transport. We do not break sterile packaging.' },
                { title: 'Optical Component Protection', desc: 'Laparoscope and endoscope optics, camera heads, and light guide cables are individually wrapped in foam and transported in padded cases separate from the main tower.' },
                { title: 'Heavy Rigging Capability', desc: 'OR tables and large surgical systems often exceed 500 lbs. We use hydraulic hand trucks and appliance dollies rated for the actual weight, with two-person crews for any item over 300 lbs.' },
                { title: 'Fluid System Preparation', desc: 'Insufflation units and fluid management systems require purging and drying of all internal lines before transport. We coordinate this step with your clinical engineering team.' },
                { title: 'Delivery Coordination', desc: 'Surgical equipment delivery is coordinated with your OR schedule and clinical engineering team to ensure the receiving space is prepared and the unit can be commissioned immediately on arrival.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment List */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Surgical Equipment We Transport</h2>
            <p className="text-gray-600 mb-8">OR suites, procedural rooms, and sterile processing environments, all equipment types handled.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Operating room tables (electric & hydraulic)',
                'Surgical ceiling pendants & booms',
                'Surgical lights & LED OR lighting',
                'Laparoscopic towers (full stack)',
                'Endoscopy towers & processors',
                'Electrosurgical generators (ESU)',
                'Robotic surgery system components',
                'Surgical microscopes (ceiling & floor)',
                'C-arm fluoroscopes (OR)',
                'Sterile instrument sets & trays',
                'Anesthesia machines & workstations',
                'Suction & fluid management units',
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
                { q: 'Can you move an OR table within the same hospital?', a: 'Yes, within-facility moves are common and we handle them regularly. We work within your OR schedule windows (typically overnight or weekend) and coordinate with your facilities and clinical engineering teams.' },
                { q: 'Can you ship a laparoscopic tower to another facility in Texas?', a: 'Yes. Laparoscopic towers ship as multi-component systems. We document and pack the rack unit, all associated components (insufflator, light source, camera processor, monitor), and the scope cases separately.' },
                { q: 'Do you transport anesthesia machines?', a: 'Yes. Anesthesia machines require the vaporizer(s) to be removed and transported separately (they are shipped upright to prevent liquid anesthetic from migrating into the vaporizer internals). We handle this step and label all components for correct reassembly.' },
                { q: 'What preparation does my facility need to do before you pick up surgical equipment?', a: 'Primarily: decontamination sign-off for any equipment that has been in the OR, vaporizer removal from anesthesia machines, and fluid system purging for insufflators and fluid management units. We will walk through the checklist with your clinical engineering team at scheduling.' },
                { q: 'How much does surgical equipment transport cost?', a: 'Local within-Austin transport for single OR items typically starts at $350–$600. Multi-item OR suite relocation projects are priced per scope of work. Call (512) 240-9818 for a free project assessment.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Medical Equipment Services" showSubLinks exclude={['/services/medical-equipment']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Surgical Equipment Transport in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">OR-schedule-aware coordination, sterile barrier protection, and heavy-equipment rigging for surgical suites across Austin and Texas.</p>
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
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Medical Equipment Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/medical-equipment/imaging-equipment" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Imaging Equipment</Link>
                <Link href="/services/medical-equipment/lab-equipment" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Lab Equipment</Link>
                <Link href="/services/medical-equipment/diagnostic-devices" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Diagnostic Devices</Link>
                <Link href="/services/medical-equipment/sensitive-electronics" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sensitive Electronics</Link>
                <Link href="/services/medical-equipment" className="px-3 py-1 border border-emerald/40 rounded-full text-emerald hover:bg-emerald/10 transition-colors">All Medical Equipment →</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
