import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/medical-equipment/sensitive-electronics'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Sensitive Medical Electronics Shipping Austin Texas',
    description: 'Specialist shipping for sensitive medical electronics and calibration-critical devices in Austin, Texas. Infusion pumps, defibrillators, ventilators, and precision clinical electronics, safe transport with calibration protection. Call (512) 240-9818.',
    keywords: [
      'sensitive medical electronics shipping Austin Texas',
      'calibration equipment transport Austin TX',
      'infusion pump shipping Austin Texas',
      'defibrillator shipping Austin TX',
      'ventilator transport Austin Texas',
      'precision medical device shipping Austin',
      'medical electronics crating Austin TX',
      'calibration sensitive device shipping Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function SensitiveElectronicsShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Sensitive Medical Electronics Shipping Austin Texas',
    description: 'Specialist shipping and crating for calibration-critical medical electronics in Austin, TX, infusion pumps, defibrillators, ventilators, and precision clinical devices.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Sensitive Electronics · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sensitive Medical Electronics &amp; Calibration Device Shipping in Austin</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Infusion pumps, defibrillators, ventilators, and precision clinical electronics are calibrated to FDA-regulated tolerances. In many cases, a single calibration event costs more than the transport itself. Our job is to ensure the device arrives in the same calibration state it left, no shock events, no ESD damage, no connector stress.
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

        {/* Why Calibration Matters */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Calibration-Critical Devices Need Specialist Transport</h2>
            <p className="text-gray-700 text-lg mb-4">
              A defibrillator that delivers inconsistent energy output, an infusion pump with a flow-rate error, or a ventilator with a tidal volume drift are not just equipment problems, they are patient safety events. These devices are calibrated to be accurate within tight tolerances because clinical decisions depend on them. Shipping them incorrectly can displace internal calibration references, stress sensing elements, or introduce contact corrosion on precision connectors.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Electrostatic discharge (ESD) is a specific risk that general freight carriers ignore entirely. Handling a device with an exposed PCB or sensor port in a low-humidity environment without anti-static precautions can damage components that appear fully functional but degrade within weeks. Our team uses anti-static packaging materials and follows ESD-safe handling procedures for all electronics with exposed components or open connectors.
            </p>
            <p className="text-gray-700 text-lg">
              For biomedical engineering teams managing large fleets of infusion pumps, ventilators, or defibrillators, regular transport between facilities, to service depots, and to storage, we provide repeatable, documented processes that fit into your PM (preventive maintenance) and biomedical inventory workflows.
            </p>
          </div>
        </section>

        {/* How We Handle It */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Pack &amp; Transport Sensitive Medical Electronics</h2>
            <p className="text-gray-600 mb-8">Calibration-aware packing, anti-static handling, and connector protection throughout.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Anti-Static Packaging', desc: 'Devices with exposed PCBs, sensor ports, or open connectors are packed in anti-static foam and bags. All personnel use ESD-safe grounding procedures for these units.' },
                { title: 'Shock-Isolated Crating', desc: 'Foam density and crate design are selected to the device\'s specific weight and fragility. Internal components do not contact the crate at any point. We target shock levels well below the device\'s rated transport specification.' },
                { title: 'Connector & Port Protection', desc: 'All external connectors, power, data, probe, and accessory ports, are capped before packing to prevent contamination and mechanical stress on connector bodies during transit.' },
                { title: 'Battery Handling', desc: 'Devices with internal batteries are checked for charge state. Lithium-ion batteries must ship at less than 30% charge for ground freight. We coordinate with your biomedical team on battery preparation if needed.' },
                { title: 'Accessory Component Tracking', desc: 'All accessories (power supplies, cables, brackets, docking stations) are listed per unit serial number and packed in a labeled accessory bag inside the primary crate. Nothing goes untracked.' },
                { title: 'HIPAA-Compliant Data Handling', desc: 'Devices containing patient data, infusion pump logs, defibrillator event records, ventilator patient profiles, are handled without accessing stored data. PHI purging is your biomedical team\'s scope; we document that it was completed.' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Sensitive Medical Electronics We Transport</h2>
            <p className="text-gray-600 mb-8">Any clinical or biotech device where calibration accuracy is a patient-safety requirement.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Infusion pumps (large-volume & syringe)',
                'Defibrillators & AEDs',
                'Ventilators & respiratory therapy units',
                'Infusion system controllers & racks',
                'Drug dispensing units (Pyxis, Omnicell)',
                'Physiological simulators & calibration devices',
                'Blood gas analyzers',
                'Coagulation analyzers',
                'Immunoassay analyzers',
                'Electrophysiology recording systems',
                'EEG & polysomnography systems',
                'Wearable monitoring hubs & base stations',
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
                { q: 'Do infusion pumps need to be inspected after transport?', a: 'Yes, biomedical engineering should perform a post-transport functional check and verify calibration before returning any pump to patient use. We transport pumps in a condition that minimizes the probability of calibration shift, but post-transport verification is best practice and required by most facility PM protocols.' },
                { q: 'Can you ship a fleet of defibrillators from one hospital system to another?', a: 'Yes. We handle hospital fleet transfers regularly. We can coordinate with your biomedical and asset management teams on serial number tracking, accessory accountability, and transport documentation for each unit.' },
                { q: 'How do you handle lithium battery regulations for medical devices in transit?', a: 'Lithium-ion batteries in medical devices fall under DOT 49 CFR Part 173 regulations for shipping. We follow the applicable ground transport rules: battery state of charge at or below 30%, proper labeling, and documentation. We coordinate with your team to ensure devices are prepared correctly before pickup.' },
                { q: 'Can you transport ventilators on short notice for emergency facility needs?', a: 'We can often accommodate same-day or next-day transport for urgent clinical needs within Austin. Call (512) 240-9818 directly to discuss timeline, urgent medical equipment moves are something we prioritize.' },
                { q: 'What does sensitive medical electronics transport cost?', a: 'Individual units typically start at $150–$350 for local Austin moves. High-value or highly fragile devices that require custom crating are priced per project. Fleet moves are priced per unit at a volume rate. Call (512) 240-9818 for a free quote.' },
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
            <h2 className="text-3xl font-bold mb-4">Sensitive Medical Electronics Transport in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Anti-static handling, calibration-safe crating, and HIPAA-compliant documentation for every precision clinical device.</p>
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
                <Link href="/services/medical-equipment/surgical-equipment" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Surgical Equipment</Link>
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
