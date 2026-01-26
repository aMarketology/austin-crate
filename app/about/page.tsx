import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo-utils'

export const metadata: Metadata = generateMetadata({
  title: 'About Austin Crate & Freight | Specialty Shipping Experts',
  description: 'Learn about Austin Crate & Freight, Central Texas\'s premier white-glove specialty shipping company. Serving Austin since 2010 with museum-quality care for art, furniture, and medical equipment.',
  keywords: ['Austin shipping company history', 'specialty freight Austin', 'white glove movers Austin', 'about Austin Crate'],
  canonicalUrl: '/about',
  ogImage: '/og-image.jpg',
})

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Breadcrumbs />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">About Austin Crate & Freight</h1>
          <p className="text-xl text-gray-300">Central Texas's Premier White-Glove Specialty Shipping Experts</p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Founded in 2010, Austin Crate & Freight has established itself as Central Texas's most trusted specialty shipping company. We recognized the need for professional, white-glove services for high-value items—fine art, designer furniture, and sensitive medical equipment—that demand more than standard freight handling.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            What started as a small custom crating operation has grown into a full-service specialty shipping company serving galleries, museums, interior designers, medical facilities, and private collectors throughout Austin, Round Rock, Cedar Park, Georgetown, and beyond.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            To provide museum-quality care and white-glove service for every shipment, treating each item with the attention and expertise it deserves. We're committed to protecting what matters most to you—whether it's irreplaceable artwork, luxury furnishings, or life-saving medical equipment.
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-12">Why Choose Austin Crate & Freight?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-3">Specialized Expertise</h3>
              <p className="text-gray-700">Over 15 years of experience in specialty shipping with certified handlers trained in museum-standard practices, HIPAA compliance, and luxury furniture care.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-3">Premium Protection</h3>
              <p className="text-gray-700">Custom crating, climate-controlled transport, and comprehensive insurance coverage. Your items are protected at every stage of the journey.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-3">White-Glove Service</h3>
              <p className="text-gray-700">Professional handling from start to finish—including disassembly, secure packing, careful transport, inside delivery, and reassembly when needed.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 mb-3">Local Knowledge</h3>
              <p className="text-gray-700">Based in Austin and deeply familiar with Central Texas. We understand local logistics, building access, and community needs.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
            <p className="text-gray-700 mb-4">
              Ready to ship with confidence? Contact our specialty shipping experts for a free consultation and detailed quote.
            </p>
            <a 
              href="tel:(512) 240-9818" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded inline-block transition"
            >
              Call (512) 240-9818
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
