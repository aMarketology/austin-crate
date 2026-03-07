import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Cedar Park',
  description: 'Specialty shipping & custom crating in Cedar Park, TX — furniture shipping and crating, fine art transport, heavy item pickup, oversized shipping & medical equipment. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Cedar Park TX',
    'specialty shipping Cedar Park Texas',
    'specialty crating Cedar Park TX',
    'specialty crating Cedar Park Texas',
    'furniture shipping and crating Cedar Park',
    'furniture crating Cedar Park TX',
    'custom furniture shipping Cedar Park',
    'fine art shipping Cedar Park',
    'heavy package pickup Cedar Park',
    'heavy item pickup Cedar Park TX',
    'oversized shipping Cedar Park',
    'white glove shipping Cedar Park TX',
    'Cedar Park shipping company',
    'Cedar Park crating',
  ],
  locationUrl: '/locations/cedar-park',
})

export default function CedarPark() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Cedar Park',
    description: 'Specialty shipping services in Cedar Park, Texas',
    latitude: 30.5051,
    longitude: -97.8203,
  })

  return (
    <SEOWrapper slug="/locations/cedar-park">
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating — Cedar Park, TX</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Cedar Park, TX</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Austin Crate &amp; Freight brings museum-quality specialty shipping and custom crating to Cedar Park. From furniture shipping and crating to fine art transport, heavy item pickup, and medical equipment delivery — we serve the H-E-B Center area, Buttercup Creek, Anderson Mill, and all of Cedar Park with expert white-glove care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 rounded-lg font-medium text-white hover:bg-emerald-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (512) 240-9818
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-lg font-medium text-gray-200 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Cedar Park</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Every service we offer in Cedar Park is backed by custom crating expertise built in-house. Whether you need furniture shipping and crating, fine art transport, or heavy item pickup, we deliver with the same white-glove standard as our Austin location.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Custom crating and climate-controlled transport for Cedar Park art collectors and interior designers.</p>
              <Link href="/services/fine-art" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Furniture Shipping</h3>
              <p className="text-gray-600 mb-4">Professional custom furniture shipping with white-glove care for Cedar Park luxury homes and new construction.</p>
              <Link href="/services/furniture" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Equipment</h3>
              <p className="text-gray-600 mb-4">HIPAA-compliant transport for Cedar Park medical practices and healthcare facilities.</p>
              <Link href="/services/medical-equipment" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Item Pickup</h3>
              <p className="text-gray-600 mb-4">Heavy package pickup in Cedar Park for items too large for UPS or FedEx — safes, appliances, equipment, and more.</p>
              <Link href="/services/heavy-items" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Oversized Shipping</h3>
              <p className="text-gray-600 mb-4">Oversized item shipping for Cedar Park — items that exceed standard carrier limits. Custom crating and freight solutions.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>

          {/* Specialty Crating Section */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Crating & Specialty Shipping — Cedar Park, TX</h2>
            <p className="text-gray-700 mb-6">
              Need specialty crating in Cedar Park? We build every custom crate in-house at our Austin facility using our Safety Speed 6400 panel saw — cutting each piece to exact dimensions for a perfect fit. Cedar Park residents and businesses rely on us for crating furniture before long-distance moves, protecting art collections during home renovations, and shipping oversized items that standard carriers won't touch.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Furniture Shipping &amp; Crating</h3>
                <p className="text-gray-600 text-sm">Custom-built crates for sofas, dining tables, antiques, bedroom sets, and designer pieces. Full furniture shipping and crating service Cedar Park residents trust.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Fine Art &amp; Collectibles</h3>
                <p className="text-gray-600 text-sm">Museum-standard crating for paintings, sculptures, and gallery pieces. Interior designers across Cedar Park use us for art collection moves and installations.</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100">
                <h3 className="font-bold text-gray-900 mb-2">Oversized &amp; Heavy Items</h3>
                <p className="text-gray-600 text-sm">Custom crating for safes, medical equipment, industrial machinery, and anything UPS or FedEx won't ship. Liftgate-equipped trucks and two-man crews available.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Cedar Park Chooses Austin Crate &amp; Freight</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Growing Community Partner</h3>
                  <p className="text-gray-600">Proud to serve Cedar Park's thriving community. We understand the unique needs of this growing Northwest Austin suburb.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Work around your schedule. Evening and weekend appointments available for Cedar Park residents.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Professional Team</h3>
                  <p className="text-gray-600">Experienced, background-checked professionals who respect your home and belongings.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Fair, transparent pricing with no hidden fees. Free quotes for all Cedar Park shipments.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Cedar Park TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you offer specialty shipping and crating in Cedar Park, TX?</h3>
                <p className="text-gray-600">Yes. Austin Crate &amp; Freight provides full specialty shipping and custom crating services throughout Cedar Park, Texas — including pickup from your Cedar Park home or business, in-house crating at our Austin facility, and delivery anywhere in the US.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can you handle furniture shipping and crating for Cedar Park residents?</h3>
                <p className="text-gray-600">Absolutely. We specialize in furniture shipping and crating for Cedar Park — from designer sectionals and antique dining tables to bedroom sets and executive office furniture. We custom-build every crate in-house for a perfect fit and maximum protection.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">What areas of Cedar Park do you serve?</h3>
                <p className="text-gray-600">We serve all Cedar Park neighborhoods and zip codes including Anderson Mill, Buttercup Creek, Brushy Creek, the H-E-B Center area, Crystal Falls, Forest Creek, and all surrounding communities. Same-day quotes available.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">How much does specialty shipping cost in Cedar Park?</h3>
                <p className="text-gray-600">Pricing depends on the size, weight, and destination of your shipment. We always provide free, no-obligation quotes. Call us at (512) 240-9818 or submit a quote request online and we'll respond same day.</p>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do you ship from Cedar Park to other states?</h3>
                <p className="text-gray-600">Yes — we handle both local Cedar Park deliveries and nationwide freight. We coordinate with trusted LTL (less-than-truckload) carriers for cross-country shipments, ensuring your items are crated and protected for the full journey.</p>
              </div>
            </div>
          </div>

          {/* Cross-Links to Other Locations */}
          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Also Serve Nearby Cities</h3>
            <p className="text-gray-600 mb-6">Austin Crate & Freight provides the same white-glove specialty shipping, custom furniture shipping, and heavy package pickup throughout the greater Austin area.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/locations/round-rock" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">
                Round Rock, TX
              </Link>
              <Link href="/locations/georgetown" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">
                Georgetown, TX
              </Link>
              <Link href="/services" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">
                All Services
              </Link>
              <Link href="/buy-a-crate" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">
                Buy a Custom Crate
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Shipping in Cedar Park?</h3>
            <p className="text-gray-600 mb-6">Get your free quote today for custom furniture shipping, heavy package pickup, or any specialty shipping service.</p>
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
            >
              Call (512) 240-9818
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
