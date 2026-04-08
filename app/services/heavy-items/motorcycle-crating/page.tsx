import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/heavy-items/motorcycle-crating'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Motorcycle Crating & Shipping Austin Texas',
    description: 'Professional motorcycle crating and shipping in Austin, Texas. Custom wood crates for all bike types   sport bikes, cruisers, vintage motorcycles. Nationwide freight coordination. Call (512) 240-9818.',
    keywords: [
      'motorcycle crating Austin Texas',
      'Austin motorcycle crating',
      'motorcycle shipping Austin TX',
      'ship motorcycle Austin Texas',
      'motorcycle crate Austin',
      'motorcycle freight Austin TX',
      'crate motorcycle for shipping Austin',
      'motorcycle transport Austin Texas',
    ],
    serviceUrl: SLUG,
  })
}

export default function MotorcycleCrating() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Motorcycle Crating & Shipping Austin Texas',
    description: 'Custom motorcycle crating and shipping in Austin, TX   sport bikes, cruisers, vintage motorcycles, and all bike types. Nationwide freight coordination.',
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
            <Link href="/services/heavy-items" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Heavy Item Shipping &amp; Pickup
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Motorcycle Crating &amp; Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              We build custom wood crates for motorcycles and coordinate freight shipping to anywhere in the US. Your bike arrives the way it left   protected, upright, and undamaged.
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

        {/* Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Crate a Motorcycle for Shipping</h2>
            <p className="text-gray-700 text-lg mb-4">
              Standard freight carriers will not accept a loose motorcycle. It must be crated   ideally in a structurally rigid wood crate that prevents the bike from moving, tipping, or contacting the crate walls during transit. A well-built motorcycle crate looks like a box; a bad one lets the bike shift and arrive with scratched fairings, bent levers, or damaged exhaust systems.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We build motorcycle crates at our Austin shop with a floor base rated for the weight, internal tie-down points to immobilize the wheels, foam padding at all contact points, and a closed top and sides that prevent handling damage on the loading dock.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Custom-Sized Floor Base', desc: 'The crate base is cut to the wheelbase of your specific bike   not a generic pallet. The bike sits flat and stable, not tilted or propped.' },
                { title: 'Internal Wheel Chocks', desc: 'Wood wheel chocks are built into the floor base, locking both wheels in position. The bike cannot roll forward or backward inside the crate.' },
                { title: 'Foam Padding at All Contact Points', desc: 'Handlebars, pegs, mirrors, and exhaust are individually padded at any point where metal could contact the crate interior.' },
                { title: 'Fuel Drain Compliance', desc: 'Freight carriers require fuel tanks to be drained below 1/4 tank. We advise you on this before pickup and ensure compliance so the shipment is not rejected.' },
                { title: 'Battery Disconnect', desc: 'For long-distance shipments, we disconnect the battery and secure it separately inside the crate   preventing drain and eliminating any fire risk concern from carriers.' },
                { title: 'Freight Coordination', desc: 'We work directly with freight carriers who handle crated motorcycles   not general cargo handlers who have no experience with bikes. We coordinate pickup, tracking, and delivery.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bike Types */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Motorcycle Types We Crate in Austin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Sport Bikes & Superbikes',
                'Cruisers & Touring Bikes',
                'Harley-Davidson (All Models)',
                'Vintage & Classic Motorcycles',
                'Adventure / Dual-Sport Bikes',
                'Dirt Bikes & Motocross',
                'Custom & Chopper Builds',
                'Scooters & Mopeds',
                'Electric Motorcycles',
                'Three-Wheelers (Can-Am, Slingshot)',
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
                { q: 'How much does it cost to crate and ship a motorcycle from Austin?', a: 'Motorcycle crating in Austin typically runs $200-$400 depending on bike size. Freight costs to other states vary by destination   typically $300-$800 for domestic shipments. Call (512) 240-9818 for a quote.' },
                { q: 'Do I need to drain the fuel before shipping?', a: 'Yes   major freight carriers require fuel tanks below 1/4 tank, and some require full drain. We advise on this before we arrive and ensure your shipment meets carrier requirements.' },
                { q: 'Can you ship a vintage or custom motorcycle without damaging the finish?', a: 'Absolutely. Vintage and custom bikes get extra care   foam-padded contact points, no straps on painted surfaces, and careful positioning to prevent any contact between the bike and crate walls.' },
                { q: 'How long does motorcycle shipping from Austin take?', a: 'Austin to nearby Texas cities: 1-2 days. Cross-country shipments: 5-10 business days depending on the freight carrier route and destination.' },
                { q: 'Do you offer pickup from my home or dealership?', a: 'Yes. We provide pickup from residential addresses, dealerships, garages, and storage facilities throughout greater Austin.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Motorcycle Crating Quote in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us the bike type, weight, and destination. We come back with a flat price   usually within a few hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-grey-400">
              <Link href="/services/heavy-items/pool-table-shipping" className="hover:text-emerald transition">Pool Table Shipping →</Link>
              <Link href="/services/heavy-items/heavy-equipment-austin" className="hover:text-emerald transition">Heavy Equipment →</Link>
              <Link href="/services/heavy-items" className="hover:text-emerald transition">All Heavy Item Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
