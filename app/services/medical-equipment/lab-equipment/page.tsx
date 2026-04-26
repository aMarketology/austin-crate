import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/medical-equipment/lab-equipment'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Laboratory Equipment Shipping Austin Texas',
    description: 'Specialist laboratory equipment shipping and crating in Austin, Texas. Centrifuges, analyzers, microscopes, PCR machines, incubators, and biotech instruments, HIPAA-compliant transport. Call (512) 240-9818.',
    keywords: [
      'lab equipment shipping Austin Texas',
      'laboratory equipment transport Austin TX',
      'centrifuge shipping Austin Texas',
      'microscope shipping Austin TX',
      'biotech equipment shipping Austin',
      'PCR machine shipping Austin Texas',
      'analyzer transport Austin TX',
      'scientific instrument shipping Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function LabEquipmentShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Laboratory Equipment Shipping Austin Texas',
    description: 'Specialist shipping and crating for laboratory and biotech equipment in Austin, TX, centrifuges, analyzers, microscopes, PCR machines, and scientific instruments.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Lab Equipment · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Laboratory Equipment Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Laboratory equipment ranges from benchtop analyzers worth $5,000 to multi-station genomics platforms worth $500,000. All of it is precision-calibrated, often fragile at the rotor and optical level, and frequently shared between lab facilities that require transport without interrupting calibration state or contaminating sterile components.
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

        {/* Why Lab Equipment Is Challenging */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Laboratory Equipment Requires Specialist Shipping</h2>
            <p className="text-gray-700 text-lg mb-4">
              Centrifuges contain high-speed rotors balanced to micron tolerances. A bump that shifts a rotor assembly, even slightly, can turn a $50,000 centrifuge into a hazard the moment it is spun up at the destination. Microscopes with motorized stages, confocal systems, and electron microscopes are even more vulnerable: optical alignments that took a service engineer a full day to establish can be disturbed by a single 2G shock event during freight transit.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              PCR machines and liquid handling robots have precise optical or mechanical systems that are not designed to be shipped without specific preparation. Reagent systems often have residual liquids that must be purged before transport. Incubators and biosafety cabinets must be sterilized or decontaminated before they can leave a lab environment.
            </p>
            <p className="text-gray-700 text-lg">
              We work with your lab manager or biomedical team during the pre-transport preparation phase, documenting calibration state, confirming decontamination sign-off, removing rotors and accessories per OEM transport instructions, and creating the packing documentation that the receiving lab will need at commissioning.
            </p>
          </div>
        </section>

        {/* How We Handle It */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Pack &amp; Transport Lab Equipment</h2>
            <p className="text-gray-600 mb-8">OEM transport protocols, rotor protection, and sterile handling where required.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'OEM Transport Protocols', desc: 'We follow manufacturer published transport instructions where available, including rotor removal, locking of motorized assemblies, and optical system protection requirements specific to each instrument.' },
                { title: 'Rotor & Spindle Protection', desc: 'Centrifuge rotors are removed, individually wrapped in anti-static foam, and packed separately. Rotor chambers are blocked to prevent any contact between the spindle and the chamber walls during transit.' },
                { title: 'Optical System Immobilization', desc: 'Microscope objectives, confocal scanheads, and optical fiber connections are immobilized using custom foam inserts. Motorized stages are locked per manufacturer instructions before packing.' },
                { title: 'Anti-Static Packaging', desc: 'Electronic instruments with sensitive PCBs or detector arrays are packed in anti-static foam and bags where required to prevent electrostatic damage during handling.' },
                { title: 'Decontamination Documentation', desc: 'For equipment moving out of a clinical or regulated lab, we require and document decontamination clearance before transport. We can coordinate with your biosafety officer.' },
                { title: 'Condition & Calibration Logging', desc: 'We document calibration status, serial numbers, attached accessories, and pre-transport condition with time-stamped photos, providing the receiving lab a full baseline for recommissioning.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Lab Equipment We Ship in Austin</h2>
            <p className="text-gray-600 mb-8">Clinical, research, and biotech instruments of all types and configurations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Centrifuges (benchtop, floor, ultra)',
                'PCR & real-time PCR machines',
                'Clinical chemistry analyzers',
                'Hematology analyzers',
                'Light & fluorescence microscopes',
                'Confocal & multi-photon microscopes',
                'Liquid handling robots & dispensers',
                'Biosafety cabinets (Class II)',
                'CO₂ incubators & ovens',
                'Flow cytometers',
                'Spectrophotometers & plate readers',
                'Gel electrophoresis & imaging systems',
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
                { q: 'Do I need to remove the rotor before shipping a centrifuge?', a: 'Yes, and we will do it for you during the packing appointment. The rotor must be removed, wrapped in anti-static foam, and packed separately. Shipping a centrifuge with the rotor installed, even locked, risks rotor bearing damage that is expensive to repair and can create a safety hazard at the destination.' },
                { q: 'Can you move a biosafety cabinet between Austin labs?', a: 'Yes. Class II biosafety cabinets require decontamination certification before relocation, typically with formaldehyde fumigation by a certified technician. We coordinate this step with your biosafety officer. We then handle the transport and coordinate recertification on the receiving side.' },
                { q: 'Can you ship a confocal microscope long-distance?', a: 'Yes. Confocal systems require the most careful handling of any optical instrument, objectives removed, scanhead locking, motorized stage locking, and vibration-isolated crating. We ship confocal and multi-photon systems to other Texas facilities and out of state.' },
                { q: 'What is your coverage for lab equipment in Austin?', a: 'We pick up and deliver throughout Greater Austin, the UT campus area, the Domain area, medical district facilities, and surrounding cities including Round Rock, Cedar Park, Georgetown, and Pflugerville.' },
                { q: 'How much does lab equipment shipping cost?', a: 'Benchtop analyzers and small instruments typically start at $200-$400 for local Austin moves. Larger systems (flow cytometers, biosafety cabinets, wide-field microscopes) are priced per project. Call (512) 240-9818 for a free quote.' },
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
            <h2 className="text-3xl font-bold mb-4">Laboratory Equipment Shipping in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Rotor removal, OEM-protocol packing, decontamination coordination, and calibration-safe transport for every lab instrument type.</p>
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
