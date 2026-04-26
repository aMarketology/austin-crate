import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/medical-equipment/imaging-equipment'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Medical Imaging Equipment Shipping Austin Texas',
    description: 'Specialist shipping and crating for medical imaging equipment in Austin, Texas. X-ray machines, ultrasound units, MRI systems, CT scanners, HIPAA-compliant transport with calibration protection. Call (512) 240-9818.',
    keywords: [
      'imaging equipment shipping Austin Texas',
      'X-ray machine shipping Austin TX',
      'MRI transport Austin Texas',
      'CT scanner shipping Austin',
      'ultrasound equipment shipping Austin TX',
      'medical imaging transport Austin',
      'diagnostic imaging shipping Austin Texas',
      'fluoroscopy equipment shipping Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function ImagingEquipmentShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Medical Imaging Equipment Shipping Austin Texas',
    description: 'Specialist shipping and crating for medical imaging equipment in Austin, TX, X-ray, ultrasound, MRI, CT, and fluoroscopy systems. HIPAA-compliant with calibration protection.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Medical Imaging · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Medical Imaging Equipment Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              X-ray machines, ultrasound units, MRI systems, and CT scanners represent some of the most expensive and calibration-sensitive equipment in any clinical setting. A shipping error does not just risk physical damage, it can knock a machine out of regulatory compliance and require costly re-certification before the next patient ever sees it.
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

        {/* Why Imaging Requires Specialist Handling */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Medical Imaging Equipment Demands Specialist Transport</h2>
            <p className="text-gray-700 text-lg mb-4">
              Medical imaging systems operate to tolerances that are measured in fractions of a millimeter. MRI machines have superconducting magnets that must be transported in specific orientations and kept within tight environmental limits. CT gantries contain precision-balanced rotating assemblies that can be damaged by vibrations that would be unremarkable for a piece of furniture. X-ray tubes are vacuum-sealed glass components that shatter under point impact even through their housing.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Beyond the physical protection needs, imaging equipment in a clinical facility is governed by federal and state regulations. Moving a fluoroscope or mammography unit requires proper decommissioning documentation, chain-of-custody records, and, for units with X-ray tubes, compliance with radiation control programs. We coordinate with your biomedical engineering team to ensure transport documentation aligns with re-certification requirements at the destination.
            </p>
            <p className="text-gray-700 text-lg">
              Our crates for imaging equipment are engineered to the actual shock and vibration specifications published by the OEM where available, and to conservative safe-handling standards where they are not. Fragile components are individually immobilized using closed-cell foam inserts cut to exact profile, not generic padding that allows residual movement.
            </p>
          </div>
        </section>

        {/* How We Transport */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Transport Medical Imaging Equipment</h2>
            <p className="text-gray-600 mb-8">Engineered crating, regulatory documentation, and chain-of-custody handling at every step.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'OEM-Spec Shock Protection', desc: 'Crates and foam inserts are designed to the manufacturer\'s published shock specifications. For systems without published specs, we apply conservative biomedical equipment standards.' },
                { title: 'Orientation Control', desc: 'Many imaging systems must travel in one specific orientation. We engineer the crate so this is enforced mechanically, not just noted on a label that a freight handler may ignore.' },
                { title: 'Chain-of-Custody Documentation', desc: 'Complete sign-off documentation for every transport handover point, supporting re-certification and regulatory compliance requirements at the destination facility.' },
                { title: 'HIPAA-Compliant Handling', desc: 'All personnel involved in the pick-up, transport, and delivery handle equipment in compliance with healthcare privacy and security requirements, including storage media protocols.' },
                { title: 'Pre-Transport Assessment', desc: 'We photograph all components, document existing condition, and record serial numbers and calibration tags before anything is disconnected or moved.' },
                { title: 'Coordinated Biomedical Handoff', desc: 'Delivery is coordinated with your biomedical engineering team. We provide the transport log, shock/vibration incident report (if any), and all documentation needed for re-commissioning.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Imaging Equipment We Transport</h2>
            <p className="text-gray-600 mb-8">Full-system transport, gantries, generators, workstations, and all associated peripherals.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Portable X-ray machines (DR/CR)', 'Fixed radiography systems',
                'Fluoroscopy C-arms', 'Mammography systems',
                'Ultrasound carts & portable units', 'Ultrasound transducer arrays',
                'CT scanner gantries & tables', 'MRI scanner systems (bore transport)',
                'PET & PET-CT systems', 'Nuclear medicine gamma cameras',
                'Bone densitometry (DEXA) units', 'Dental panoramic & CBCT scanners',
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
                { q: 'Can you transport a portable X-ray unit within Austin?', a: 'Yes. Portable and mobile X-ray units are among our most common medical equipment moves. We can handle same-facility moves (between departments or floors), building-to-building moves within one campus, and off-site transport to physicians offices or imaging centers.' },
                { q: 'Do you handle the radiation control compliance documentation for X-ray transport?', a: 'We provide chain-of-custody transport documentation and work with your facility\'s radiation safety officer or biomedical team. Regulatory compliance (e.g., state radiation control program notifications) is the facility\'s responsibility, but we provide the transport records that support those filings.' },
                { q: 'Can you ship an MRI machine?', a: 'We transport MRI components, gradient coil assemblies, RF cages, patient tables, and associated electronics. Full magnet system transport (requiring magnet quench and re-ramping) requires coordination with the OEM or a specialist MRI rigging company; we can refer you to appropriate partners for that scope.' },
                { q: 'How do you protect ultrasound transducers during transport?', a: 'Transducer arrays are among the most fragile components in any imaging system, the piezoelectric elements inside crack under point impact. We individually wrap each transducer with custom profile foam inserts, and they travel in a dedicated padded case or compartment inside the main crate.' },
                { q: 'What does imaging equipment transport cost?', a: 'Local Austin transport for portable imaging units typically starts at $300–$600. Multi-component system transport (CT, fixed X-ray) is priced per project based on the component count and preparation required. Call (512) 240-9818 for a free assessment.' },
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
            <h2 className="text-3xl font-bold mb-4">Medical Imaging Equipment Transport in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">HIPAA-compliant, calibration-safe transport for X-ray, ultrasound, CT, and MRI systems. Chain-of-custody documentation included.</p>
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
                <Link href="/services/medical-equipment/lab-equipment" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Lab Equipment</Link>
                <Link href="/services/medical-equipment/diagnostic-devices" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Diagnostic Devices</Link>
                <Link href="/services/medical-equipment/surgical-equipment" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Surgical Equipment</Link>
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
