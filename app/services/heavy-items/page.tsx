import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, generateLocalBusinessSchema, SITE_CONFIG } from '@/lib/seo-utils'
import { heavyItemsFAQSchema } from '@/lib/faq-schema'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Heavy Item Pickup & Shipping Austin TX',
  description:
    'Heavy package pickup and oversized item shipping in Austin, TX. Custom crating for furniture, equipment, and machinery. Free local pickup. Call (512) 240-9818.',
  keywords: [
    'heavy package pickup Austin',
    'heavy item shipping Austin TX',
    'oversized package shipping Austin',
    'heavy freight Austin Texas',
    'large item shipping Austin',
    'bulky item transport Austin TX',
    'heavy equipment shipping Austin',
    'oversized item pickup Austin',
    'specialty shipping heavy items',
    'custom crating heavy items Austin',
  ],
  serviceUrl: '/services/heavy-items',
  ogImage: '/IMG_4446_1703172460423.jpg',
})

export default function HeavyItemsShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Heavy Item Pickup & Shipping',
    description:
      'Heavy package pickup and oversized item shipping in Austin, TX. Custom crating, reinforced packaging, and freight transport for items too large or heavy for standard carriers.',
    serviceType: 'Heavy Item Shipping',
  })

  const localBusinessSchema = generateLocalBusinessSchema({
    locationName: 'Austin',
    description: 'Heavy package pickup and oversized item shipping in Austin, TX. Custom crating for furniture, equipment, and machinery. Free local pickup.',
    latitude: 30.2972,
    longitude: -97.7594,
  })

  return (
    <SEOWrapper slug="/services/heavy-items">
      <div className="min-h-screen bg-white flex flex-col">
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(heavyItemsFAQSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Navigation />
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 md:pb-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 backdrop-blur-sm mb-6">
                  <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">
                    Specialty Shipping
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Heavy Item Pickup &amp; Shipping in Austin, Texas
                </h1>
                <p className="text-xl text-grey-300 mb-8">
                  Too heavy for FedEx or UPS? We pick up, custom-crate, and ship heavy and
                  oversized items — furniture, equipment, machinery, and more — from anywhere in
                  the Greater Austin area. No weight limits, no size restrictions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:(512) 240-9818"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (512) 240-9818
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 hover:border-grey-600 backdrop-blur-sm transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-grey-700 shadow-xl">
                <Image
                  src="/IMG_4446_1703172460423.jpg"
                  alt="Heavy item pickup and shipping in Austin Texas - Custom crating for oversized packages"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* What Qualifies as Heavy / Oversized */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Qualifies as a Heavy or Oversized Item?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Standard carriers like FedEx, UPS, and USPS have strict weight and size limits.
                If your item exceeds these thresholds, you need a specialty shipping partner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">70+ lbs</h3>
                <p className="text-gray-600">
                  Items over 70 pounds exceed UPS and FedEx standard weight limits and require
                  freight or specialty shipping.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">108+ inches</h3>
                <p className="text-gray-600">
                  Items exceeding 108 inches in combined length and girth are considered
                  oversized and need custom packaging.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fragile or Awkward</h3>
                <p className="text-gray-600">
                  Irregularly shaped, fragile, or high-value items that standard carriers won't
                  insure or guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Heavy Items We Ship */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Heavy Items We Pick Up &amp; Ship from Austin
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              If it's too big, too heavy, or too valuable for standard carriers — we handle it.
              Here's what Austin residents and businesses trust us to ship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Heavy Furniture',
                  desc: 'Armoires, marble tables, solid-wood dining sets, pianos, and sectional sofas',
                  link: '/services/furniture',
                },
                {
                  name: 'Gym & Fitness Equipment',
                  desc: 'Treadmills, ellipticals, weight machines, squat racks, and free weights',
                  link: null,
                },
                {
                  name: 'Industrial Equipment',
                  desc: 'Machinery, generators, compressors, welding equipment, and shop tools',
                  link: null,
                },
                {
                  name: 'Medical Equipment',
                  desc: 'Imaging machines, hospital beds, surgical tables, and lab instruments',
                  link: '/services/medical-equipment',
                },
                {
                  name: 'Large Art & Sculptures',
                  desc: 'Oversized paintings, bronze sculptures, stone carvings, and installations',
                  link: '/services/fine-art',
                },
                {
                  name: 'Motorcycles & Powersports',
                  desc: 'Motorcycles, ATVs, jet skis, and recreational vehicles',
                  link: null,
                },
                {
                  name: 'Appliances',
                  desc: 'Commercial refrigerators, washers/dryers, stoves, and HVAC units',
                  link: null,
                },
                {
                  name: 'Pool Tables & Game Tables',
                  desc: 'Slate pool tables, foosball tables, ping pong tables, and arcade machines',
                  link: null,
                },
                {
                  name: 'Safes & Vaults',
                  desc: 'Gun safes, fire safes, commercial vaults, and security cabinets',
                  link: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-emerald/50 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.link ? (
                        <Link href={item.link} className="hover:text-emerald transition-colors">
                          {item.name}
                        </Link>
                      ) : (
                        item.name
                      )}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Heavy Item Shipping Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              How Heavy Item Pickup &amp; Shipping Works
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              We make shipping heavy and oversized items from Austin simple. Our white-glove
              process handles everything from pickup to delivery.
            </p>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Free Quote & Assessment',
                  desc: 'Tell us what you need shipped — dimensions, weight, pickup and delivery locations. We provide a detailed quote within 24 hours with no hidden fees.',
                },
                {
                  step: 2,
                  title: 'Scheduled Pickup at Your Location',
                  desc: 'Our team arrives at your home or business with all equipment needed — dollies, straps, ramps, and a crew trained in heavy-item handling. Free pickup in the Greater Austin area.',
                },
                {
                  step: 3,
                  title: 'Custom Crating & Reinforced Packaging',
                  desc: 'We build a custom wood crate engineered for your item\'s exact weight and dimensions. Reinforced framing, shock-absorbing foam, and weather-resistant construction protect your item in transit.',
                },
                {
                  step: 4,
                  title: 'Freight Transport or Local Delivery',
                  desc: 'Choose local delivery anywhere in Central Texas, or nationwide freight shipping via our trusted carrier network. Full insurance and tracking included on every shipment.',
                },
                {
                  step: 5,
                  title: 'White-Glove Delivery & Placement',
                  desc: 'We deliver your item inside — not just to the curb. Unpacking, placement in your desired location, and debris removal are all included.',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Heavy Item Shipping Costs in Austin
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Every heavy item is unique, so we provide custom quotes. Here's what affects pricing
              so you know what to expect.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  factor: 'Weight',
                  detail: 'Heavier items require more crew members and equipment for safe handling.',
                },
                {
                  factor: 'Dimensions',
                  detail:
                    'Oversized items need larger custom crates and may require freight shipping.',
                },
                {
                  factor: 'Fragility',
                  detail:
                    'Delicate or high-value items need extra padding, climate control, or specialized crating.',
                },
                {
                  factor: 'Distance',
                  detail:
                    'Local Austin delivery costs less than cross-state or nationwide freight.',
                },
                {
                  factor: 'Access',
                  detail:
                    'Stairs, narrow doorways, or upper-floor pickups may require additional handling.',
                },
                {
                  factor: 'Timeline',
                  detail:
                    'Standard scheduling is most affordable. Rush and weekend pickups available at premium rates.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-white rounded-lg border border-gray-200"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.factor}</h4>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center p-8 bg-emerald/5 border-2 border-emerald/20 rounded-2xl">
              <p className="text-lg text-gray-800 font-medium mb-2">
                Most local heavy item shipments in Austin start at
              </p>
              <p className="text-4xl font-bold text-emerald mb-2">$150 – $500+</p>
              <p className="text-gray-600 mb-6">
                Depending on item size, weight, and destination. Nationwide freight quotes
                available.
              </p>
              <a
                href="tel:(512) 240-9818"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call (512) 240-9818 for a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Heavy Item Pickup Areas in Central Texas
            </h2>
            <p className="text-center text-gray-600 text-lg mb-12">
              We offer free heavy item pickup throughout the Greater Austin area. We also ship
              nationwide via freight.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
              {[
                { city: 'Austin', link: null },
                { city: 'Round Rock', link: '/locations/round-rock' },
                { city: 'Cedar Park', link: '/locations/cedar-park' },
                { city: 'Georgetown', link: '/locations/georgetown' },
                { city: 'Pflugerville', link: null },
                { city: 'Leander', link: null },
                { city: 'Lakeway', link: null },
                { city: 'Bee Cave', link: null },
                { city: 'Dripping Springs', link: null },
                { city: 'Kyle', link: null },
              ].map((area, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald hover:shadow-md transition-all text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {area.link ? (
                      <Link
                        href={area.link}
                        className="text-sm font-semibold text-grey-800 hover:text-emerald transition-colors"
                      >
                        {area.city}
                      </Link>
                    ) : (
                      <span className="text-sm font-semibold text-grey-800">{area.city}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions About Heavy Item Shipping
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How much does it cost to ship a heavy item in Austin?',
                  a: 'Heavy item shipping costs in Austin depend on weight, dimensions, fragility, and destination. Most local heavy item shipments start at $150–$300. Long-distance freight starts at $300+. Call (512) 240-9818 for a free, no-obligation quote.',
                },
                {
                  q: 'Do you pick up heavy packages in Austin?',
                  a: 'Yes! Austin Crate & Freight offers free heavy package pickup throughout Greater Austin, including Round Rock, Cedar Park, Georgetown, Pflugerville, and surrounding areas. Our crew arrives with all necessary equipment — dollies, straps, ramps, and a truck.',
                },
                {
                  q: 'What is considered a heavy item for shipping?',
                  a: 'Any item over 70 lbs or too large for standard carrier boxes (over 108 inches combined length + girth) is considered heavy or oversized. This includes furniture, appliances, gym equipment, machinery, safes, pool tables, and more.',
                },
                {
                  q: 'Can you ship heavy items outside of Austin?',
                  a: 'Yes. We ship heavy and oversized items nationwide. We custom-crate your item at our Austin facility and coordinate freight transport to any destination in the US, with door-to-door delivery available.',
                },
                {
                  q: 'Do you provide custom crating for heavy items?',
                  a: 'Absolutely. Every heavy item we ship gets a custom-built wood crate engineered for its exact weight and dimensions. We use kiln-dried lumber, stainless steel hardware, shock-absorbing foam, and reinforced framing.',
                },
                {
                  q: 'How do I prepare a heavy item for pickup?',
                  a: 'No preparation needed. Just make sure we have clear access to the item. Our team handles all disassembly, wrapping, padding, and loading. We bring all equipment.',
                },
                {
                  q: 'Is my heavy item insured during shipping?',
                  a: 'Yes, all shipments include insurance coverage. For high-value items, we offer enhanced coverage options. We work with specialized insurers to ensure full protection during transit.',
                },
                {
                  q: 'What\'s the heaviest item you can ship?',
                  a: 'We have no strict weight limit. We\'ve shipped items exceeding 2,000 lbs including industrial machinery, commercial safes, and marble sculptures. If it exists, we can crate and ship it.',
                },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Austin Trusts Us With Heavy &amp; Oversized Items
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Fully Insured',
                  description:
                    'Every heavy item shipment includes comprehensive insurance. Enhanced coverage available for high-value pieces.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Trained Heavy-Lift Crew',
                  description:
                    'Our team is trained and equipped for heavy item handling — proper lifting techniques, rigging, and specialized equipment.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  title: 'Custom Crating On-Site',
                  description:
                    'We build custom crates engineered for your item\'s exact specifications. Reinforced for heavy loads, weather-sealed for protection.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'No Weight Limits',
                  description:
                    'Unlike standard carriers, we have no weight or size restrictions. We\'ve shipped items exceeding 2,000+ lbs.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  title: 'Inside Delivery',
                  description:
                    'We deliver inside your home or business — not just to the curb. Placement in your desired room included.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: '15+ Years Experience',
                  description:
                    'Over 15 years of specialty shipping in Austin. We\'ve handled thousands of heavy and oversized items safely.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald/50 hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 text-emerald">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Related Specialty Shipping Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/furniture"
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">
                  Furniture Shipping
                </h3>
                <p className="text-gray-600 text-sm">
                  White-glove transport for designer furniture, antiques, and luxury pieces.
                </p>
              </Link>
              <Link
                href="/services/fine-art"
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">
                  Fine Art Shipping
                </h3>
                <p className="text-gray-600 text-sm">
                  Museum-quality crating and climate-controlled transport for artwork.
                </p>
              </Link>
              <Link
                href="/buy-a-crate"
                className="p-6 bg-white rounded-xl border border-gray-200 hover:border-emerald hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">
                  Buy a Custom Crate
                </h3>
                <p className="text-gray-600 text-sm">
                  Order a custom-built shipping crate for any item. Built to spec in Austin.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need to Ship Something Heavy in Austin?
            </h2>
            <p className="text-xl text-grey-300 mb-10">
              Get a free quote for heavy item pickup and shipping. We handle everything — pickup,
              custom crating, and door-to-door delivery. No weight limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(512) 240-9818"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-emerald rounded-lg font-semibold text-lg text-white hover:bg-emerald/90 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (512) 240-9818
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-grey-800/50 border-2 border-grey-700 rounded-lg font-semibold text-lg text-grey-300 hover:bg-grey-700/50 hover:border-grey-600 backdrop-blur-sm transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
