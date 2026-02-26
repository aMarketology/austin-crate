import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, generateLocalBusinessSchema, SITE_CONFIG } from '@/lib/seo-utils'
import { oversizedShippingFAQSchema } from '@/lib/faq-schema'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateServiceMetadata({
  serviceName: 'Oversized Item Shipping Austin TX',
  description:
    'Ship oversized items from Austin, Texas. Custom crating and freight for furniture, equipment, artwork, and more too large for FedEx or UPS. White-glove pickup, fully insured. Free quotes.',
  keywords: [
    'oversized item shipping Austin',
    'large package shipping Austin TX',
    'bulky item transport Austin',
    'oversized freight Austin Texas',
    'large item shipping service Austin',
    'ship large items Austin TX',
    'oversized package pickup Austin',
    'too big for UPS Austin',
    'freight shipping Austin Texas',
    'custom crating oversized items',
  ],
  serviceUrl: '/services/oversized-shipping',
  ogImage: '/IMG_4446_1703172460423.jpg',
})

export default function OversizedShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Oversized Item Shipping & Transport',
    description:
      'Oversized item shipping from Austin, Texas. Custom crating, freight coordination, and door-to-door delivery for items too large for standard carriers like FedEx and UPS.',
    serviceType: 'Oversized Shipping',
  })

  const localBusinessSchema = generateLocalBusinessSchema({
    locationName: 'Austin',
    description: 'Oversized item shipping from Austin, Texas. Custom crating and freight for items too large for FedEx or UPS. White-glove pickup, fully insured.',
    latitude: 30.2972,
    longitude: -97.7594,
  })

  return (
    <SEOWrapper slug="/services/oversized-shipping">
      <div className="min-h-screen bg-white flex flex-col">
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(oversizedShippingFAQSchema) }}
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
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Oversized Item Shipping &amp; Transport in Austin, TX
              </h1>
              <p className="text-xl text-grey-300 mb-8 max-w-2xl">
                Too big for FedEx or UPS? We specialize in shipping oversized items from Austin, Texas. Custom crating, freight coordination, and door-to-door delivery for items that standard carriers refuse.
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
          </div>
        </section>

        {/* What Counts as Oversized */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              What Counts as an Oversized Item?
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
              Standard carriers like FedEx, UPS, and USPS have strict size and weight limits. If your item exceeds any of these, you need a specialty shipper.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 border-2 border-red-200 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">FedEx Limit</h3>
                <p className="text-3xl font-bold text-red-500 mb-2">150 lbs</p>
                <p className="text-gray-600">Max 108&quot; length, 165&quot; L+girth</p>
              </div>
              <div className="p-8 rounded-xl bg-gray-50 border-2 border-gray-200 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 border-2 border-red-200 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">UPS Limit</h3>
                <p className="text-3xl font-bold text-red-500 mb-2">150 lbs</p>
                <p className="text-gray-600">Max 108&quot; length, 165&quot; L+girth</p>
              </div>
              <div className="p-8 rounded-xl bg-emerald/5 border-2 border-emerald/30 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald/10 border-2 border-emerald/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Austin Crate</h3>
                <p className="text-3xl font-bold text-emerald mb-2">No Limit</p>
                <p className="text-gray-600">Any size, any weight, any shape</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Oversized Items We Ship from Austin</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Sectional sofas',
                  'Dining tables',
                  'Pool tables',
                  'Large sculptures',
                  'Industrial equipment',
                  'Commercial safes',
                  'Gym equipment',
                  'Pianos & organs',
                  'Grandfather clocks',
                  'Marble countertops',
                  'Restaurant fixtures',
                  'Trade show displays',
                  'Arcade machines',
                  'Hot tub components',
                  'Large mirrors',
                  'Mattress sets',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Standard Carriers Refuse */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
              Why FedEx &amp; UPS Won&apos;t Ship Your Item
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  ),
                  title: 'Exceeds Weight Limits',
                  description: 'Standard ground services cap at 150 lbs. Many oversized items weigh 200-2,000+ lbs — well beyond what parcel carriers handle.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  ),
                  title: 'Exceeds Size Limits',
                  description: 'Max combined length + girth of 165 inches. A 6-foot sofa already exceeds that. Oversized items simply do not fit on their conveyor systems.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  ),
                  title: 'Irregular Shape',
                  description: 'Carriers require rectangular boxes. Sculptures, equipment, and oddly-shaped items need custom crating before they can be shipped via freight.',
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Fragility & Value',
                  description: 'Parcel conveyor systems throw, drop, and jostle packages. High-value, fragile oversized items need dedicated freight handling and custom protection.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-14 h-14 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center text-emerald flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">
              Our Oversized Shipping Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Free Assessment & Quote',
                  desc: 'Tell us what you need to ship. We evaluate dimensions, weight, fragility, and destination to provide a no-obligation quote — usually within 24 hours.',
                },
                {
                  step: 2,
                  title: 'Pickup at Your Location',
                  desc: 'Our crew arrives with a fully equipped truck, dollies, straps, ramps, and blankets. Free pickup anywhere in Greater Austin, including Round Rock, Cedar Park, and Georgetown.',
                },
                {
                  step: 3,
                  title: 'Custom Crating & Packaging',
                  desc: 'At our Austin facility, we build a custom wood crate engineered for your exact item. Reinforced framing, shock-absorbing foam, and weather-resistant barriers protect every surface.',
                },
                {
                  step: 4,
                  title: 'Freight Coordination',
                  desc: 'We book the optimal freight carrier for your shipment — LTL, full truckload, or air freight. Climate-controlled and liftgate service available for fragile or heavy items.',
                },
                {
                  step: 5,
                  title: 'Door-to-Door Delivery',
                  desc: 'Your item is delivered to the final destination with optional white-glove inside delivery, unpacking, assembly, and debris removal. We provide tracking throughout.',
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

        {/* Pricing */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Oversized Shipping Pricing from Austin
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
              Every oversized shipment is unique. Pricing depends on item size, weight, fragility, and destination. Here are typical starting ranges:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tier: 'Local',
                  range: 'Austin Metro Area',
                  price: '$150 – $400',
                  items: ['Pickup within 30 miles', 'Same-day available', 'Protective blankets included', 'Inside delivery option'],
                },
                {
                  tier: 'Regional',
                  range: 'Texas / Neighboring States',
                  price: '$300 – $800',
                  items: ['Custom crating included', 'LTL freight transport', 'Full insurance coverage', 'Door-to-door delivery'],
                },
                {
                  tier: 'National',
                  range: 'Anywhere in the US',
                  price: '$500 – $2,000+',
                  items: ['Custom crating + freight', 'Climate-controlled option', 'Liftgate delivery', 'White-glove placement'],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-xl border-2 ${i === 1 ? 'border-emerald bg-emerald/5 shadow-lg' : 'border-gray-200 bg-white'}`}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.tier}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.range}</p>
                  <p className="text-3xl font-bold text-emerald mb-6">{plan.price}</p>
                  <ul className="space-y-3">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8 text-sm">
              Prices are estimates. Call <a href="tel:(512) 240-9818" className="text-emerald font-semibold">(512) 240-9818</a> for an exact quote based on your item.
            </p>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Oversized Shipping Service Areas
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
              Free pickup for oversized items throughout the Greater Austin metro area:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { city: 'Austin', link: '/about' },
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
                <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center hover:border-emerald transition-all">
                  {area.link ? (
                    <Link href={area.link} className="flex items-center justify-center gap-2 text-gray-800 hover:text-emerald transition-colors">
                      <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">{area.city}</span>
                    </Link>
                  ) : (
                    <div className="flex items-center justify-center gap-2 text-gray-800">
                      <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold">{area.city}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Oversized Shipping FAQ
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How do I ship something too big for FedEx or UPS?',
                  a: 'Call Austin Crate & Freight at (512) 240-9818. We pick up oversized items at your location, build a custom crate at our Austin facility, and coordinate freight transport to any destination in the US. No size or weight limit.',
                },
                {
                  q: 'How much does it cost to ship an oversized item from Austin?',
                  a: 'Pricing depends on the item dimensions, weight, fragility, and destination. Local Austin-area oversized shipments typically start at $150-$400. Regional freight ranges from $300-$800. National shipments start at $500+. Call for a free quote.',
                },
                {
                  q: 'What is the largest item you can ship?',
                  a: 'We have no size limit. We have shipped 12-foot conference tables, industrial machinery, large marble sculptures, and entire trade show booth setups. If it fits in a truck, we can crate and ship it.',
                },
                {
                  q: 'Do you offer inside delivery for oversized items?',
                  a: 'Yes. Our white-glove service includes inside delivery, room placement, unpacking, assembly (if applicable), and debris removal. We deliver your oversized item exactly where you need it — not just to the curb.',
                },
                {
                  q: 'Can you ship oversized items outside of Texas?',
                  a: 'Absolutely. We ship oversized items nationwide. We custom-crate your item at our Austin facility and coordinate with trusted freight carriers for door-to-door delivery to any US destination.',
                },
                {
                  q: 'How do you protect oversized items during shipping?',
                  a: 'Every oversized item gets a custom-built wood crate with reinforced framing, shock-absorbing foam inserts, and weather-resistant barriers. We also use blanket wrapping, corner protectors, and secure strapping for maximum protection during freight transport.',
                },
                {
                  q: 'How long does oversized shipping take?',
                  a: 'Local Austin-area deliveries are often same-day or next-day. Regional freight (within Texas) takes 2-5 business days. National freight typically takes 5-10 business days. We offer expedited service when available.',
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

        {/* Related Services */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Related Specialty Shipping Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/services/heavy-items" className="group p-8 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-emerald hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 text-emerald">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">Heavy Item Pickup</h3>
                <p className="text-gray-600 text-sm">Items over 70 lbs that need specialized equipment, custom crating, and freight handling.</p>
              </Link>
              <Link href="/services/furniture" className="group p-8 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-emerald hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 text-emerald">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">Custom Furniture Shipping</h3>
                <p className="text-gray-600 text-sm">White-glove transport for designer, antique, and heavy furniture with expert disassembly and reassembly.</p>
              </Link>
              <Link href="/buy-a-crate" className="group p-8 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-emerald hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center mb-4 text-emerald">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald transition-colors">Buy a Custom Crate</h3>
                <p className="text-gray-600 text-sm">Order a custom-built wood shipping crate for your oversized item. Engineered for protection.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need to Ship Something Oversized?</h2>
            <p className="text-xl text-grey-300 mb-10">
              Get a free quote for oversized item shipping from Austin. No item is too big, too heavy, or too awkward. We handle it all.
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
