import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/medical-equipment/diagnostic-devices'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Diagnostic Device Shipping Austin Texas',
    description: 'Specialist shipping and transport for diagnostic medical devices in Austin, Texas. Patient monitors, ECG machines, pulse oximeters, blood pressure systems, and portable diagnostic equipment. Call (512) 240-9818.',
    keywords: [
      'diagnostic device shipping Austin Texas',
      'patient monitor shipping Austin TX',
      'ECG machine shipping Austin Texas',
      'diagnostic equipment transport Austin',
      'portable diagnostic equipment shipping Austin TX',
      'medical monitor shipping Austin Texas',
      'vital signs monitor transport Austin',
      'diagnostic analyzer shipping Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function DiagnosticDevicesShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Diagnostic Device Shipping Austin Texas',
    description: 'Specialist shipping and crating for diagnostic medical devices in Austin, TX, patient monitors, ECG machines, portable diagnostic equipment, and clinical analyzers.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Diagnostic Devices · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Diagnostic Device Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Diagnostic devices, from patient monitors to portable ECG units to point-of-care analyzers, are the workhorses of clinical environments. They are purchased, leased, refurbished, and relocated constantly. Each move carries the same risk: a device that arrived appearing intact but arrives with an internal calibration error or a damaged display connector that only shows up in the next patient encounter.
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

        {/* Why Diagnostic Devices Need Specialist Handling */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Diagnostic Devices Need Specialist Handling</h2>
            <p className="text-gray-700 text-lg mb-4">
              Patient monitors and diagnostic devices look rugged on the outside, they have to be, in a clinical environment. But their internal electronics, display panels, and connected probe assemblies are not designed for the shock profiles of freight handling. A 5G shock event, common during LTL freight loading, is outside the operating specification of most clinical monitors. Displays are particularly vulnerable: a cracked backplane on a bedside monitor may not be visually apparent but will fail within weeks of return to service.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Probes and accessories, SpO₂ probes, NIBP cuffs, ECG lead sets, temperature probes, are often the most expensive peripherals and the most commonly damaged in transit because they are packed alongside the main unit without proper individual protection. We pack accessories separately and log every component against the unit's serial number.
            </p>
            <p className="text-gray-700 text-lg">
              For devices being sold, leased, or transferred between facilities, we provide the condition documentation that biomedical engineers and equipment leasing companies require before the transaction can close, a time-stamped photo log of all components and a transport event log showing the custody chain from pickup to delivery.
            </p>
          </div>
        </section>

        {/* How We Handle It */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Transport Diagnostic Devices</h2>
            <p className="text-gray-600 mb-8">Component-level protection, accessory tracking, and full condition documentation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Display Panel Protection', desc: 'Monitor screens are covered with foam-backed display protectors before any outer wrap is applied. No hard objects can contact the screen during packing, loading, or unloading.' },
                { title: 'Probe & Accessory Logging', desc: 'Every probe, lead set, and accessory is listed by type and photographed against the main unit before packing. Accessories are individually wrapped and packed in a separate labeled compartment.' },
                { title: 'Anti-Static Handling', desc: 'Devices with exposed PCBs or diagnostic ports are handled in anti-static environments. Connector ports are capped to prevent contamination or ESD damage during transit.' },
                { title: 'Shock-Isolated Crating', desc: 'We use closed-cell foam at density appropriate to the device weight and fragility. Devices do not touch the crate walls at any point.' },
                { title: 'Storage Media Protocols', desc: 'Devices that store patient data are handled per HIPAA requirements. We do not access, transfer, or inspect data storage components. PHI handling is coordinated with your facility\'s privacy officer.' },
                { title: 'Condition Documentation', desc: 'Time-stamped photo documentation of every unit, screens, connectors, housing condition, attached accessories, before and after transport. Suitable for equipment sale or lease transactions.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Diagnostic Devices We Transport</h2>
            <p className="text-gray-600 mb-8">Bedside, portable, and point-of-care diagnostic equipment of all types.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Bedside patient monitors (multi-parameter)',
                'Standalone ECG / EKG machines',
                'Holter monitors & ambulatory ECG',
                'Pulse oximeters (tabletop & handheld)',
                'Non-invasive blood pressure units',
                'Capnography monitors',
                'Point-of-care analyzers (i-STAT, etc.)',
                'Spirometers & pulmonary function systems',
                'Otoscopes & ophthalmoscopes (clinic sets)',
                'Audiometers & tympanometers',
                'Glucose & metabolic analyzers',
                'Fetal monitors & CTG machines',
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
                { q: 'Can you pick up multiple patient monitors at once from a hospital?', a: 'Yes. We regularly handle multi-unit pickups for hospital equipment relocation and fleet refurbishment projects. We bring serial-number tracking sheets and condition photo logs for each unit.' },
                { q: 'How do you handle patient data stored on diagnostic devices?', a: 'We do not access, inspect, or interact with patient data in any way. Devices that require data wiping or PHI removal before transport must be cleared by your facility\'s biomedical or IT team before we take custody. We can coordinate timing with that process.' },
                { q: 'Can you move diagnostic equipment between Austin medical facilities?', a: 'Yes, between hospitals, outpatient clinics, physician offices, urgent care centers, and storage facilities anywhere in Greater Austin. We can work within your facility\'s vendor credentialing requirements.' },
                { q: 'Do you transport diagnostic devices for equipment dealers and remarketers?', a: 'Yes. We work with medical equipment dealers, hospital liquidators, and biomedical refurbishment companies. We provide the condition documentation photos and chain-of-custody records that equipment transactions require.' },
                { q: 'What does diagnostic device shipping cost?', a: 'Single-unit local moves start at $150-$300 depending on device size and access. Multi-unit projects are priced per project. Call (512) 240-9818 for a free quote.' },
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
            <h2 className="text-3xl font-bold mb-4">Diagnostic Device Transport in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Component-level packing, full accessory logging, HIPAA-compliant handling. Serving Austin hospitals, clinics, and equipment dealers.</p>
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
