import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Georgetown',
  description: 'Expert specialty shipping in Georgetown, TX — custom furniture shipping, heavy package pickup, fine art transport, oversized item shipping & HIPAA-compliant medical equipment crating. Serving Georgetown with care.',
  keywords: ['Georgetown shipping', 'Georgetown crating', 'specialty freight Georgetown', 'art shipping Georgetown', 'custom furniture shipping Georgetown', 'heavy package pickup Georgetown', 'oversized shipping Georgetown', 'heavy item pickup Georgetown TX'],
  locationUrl: '/locations/georgetown',
})

export default function Georgetown() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Georgetown',
    description: 'Specialty shipping services in Georgetown, Texas',
    latitude: 30.6327,
    longitude: -97.6779,
  })

  return (
    <SEOWrapper slug="/locations/georgetown">
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
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Local Service Area</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping in Georgetown, TX</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Premium white-glove shipping for Georgetown's historic downtown, Sun City, and surrounding communities. Custom furniture shipping, heavy package pickup, fine art crating, oversized item transport, and medical equipment delivery — all with museum-quality care.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Services in Georgetown</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fine Art Shipping</h3>
              <p className="text-gray-600 mb-4">Museum-quality transport for Georgetown galleries, the Williamson Museum, and private collections.</p>
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
              <p className="text-gray-600 mb-4">White-glove custom furniture shipping for Georgetown's beautiful historic homes and luxury properties.</p>
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
              <p className="text-gray-600 mb-4">HIPAA-compliant service for Georgetown healthcare providers and medical centers.</p>
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
              <p className="text-gray-600 mb-4">Heavy package pickup in Georgetown for items too large for standard carriers — safes, pianos, appliances, and more.</p>
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
              <p className="text-gray-600 mb-4">Oversized item shipping for Georgetown — items that exceed standard carrier limits. Custom crating and freight solutions.</p>
              <Link href="/services/oversized-shipping" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Georgetown's Trusted Shipping Partner</h2>
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
                  <h3 className="font-bold text-gray-900 mb-2">Historic Home Specialists</h3>
                  <p className="text-gray-600">Experience with Georgetown's Victorian architecture and historic properties. We navigate narrow doorways and stairs with care.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Senior Living Expertise</h3>
                  <p className="text-gray-600">Specialized service for Sun City and other Georgetown senior communities. Patient, professional assistance.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Community Focused</h3>
                  <p className="text-gray-600">Supporting Georgetown businesses, galleries, and residents since 2010. We're invested in the community.</p>
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
                  <h3 className="font-bold text-gray-900 mb-2">Antique Expertise</h3>
                  <p className="text-gray-600">Specialized handling for antiques and vintage pieces. Georgetown's antique lovers trust us.</p>
                </div>
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
              <Link href="/locations/cedar-park" className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">
                Cedar Park, TX
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving Georgetown with Pride</h3>
            <p className="text-gray-600 mb-6">Contact us for expert custom furniture shipping, heavy package pickup, and specialty shipping throughout Georgetown and Williamson County.</p>
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
