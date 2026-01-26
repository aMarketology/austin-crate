'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import Link from 'next/link'

export default function ResourcesClient() {
  const articles = [
    {
      title: 'How to Prepare Artwork for Shipping',
      description: 'Comprehensive guide on museum-quality packing techniques, materials needed, and best practices for shipping fine art safely.',
      href: '/resources/prepare-artwork',
      category: 'Fine Art',
      readTime: '8 min read',
      date: 'January 15, 2024'
    },
    {
      title: 'Furniture Moving Best Practices',
      description: 'Expert tips for moving designer furniture, including disassembly, protective wrapping, and reassembly guidelines for luxury pieces.',
      href: '/resources/furniture-moving',
      category: 'Furniture',
      readTime: '6 min read',
      date: 'February 3, 2024'
    },
    {
      title: 'Medical Equipment Transport Guidelines',
      description: 'HIPAA-compliant shipping procedures, calibration protection, and documentation requirements for medical device transport.',
      href: '/resources/medical-equipment-transport',
      category: 'Medical Equipment',
      readTime: '7 min read',
      date: 'March 12, 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Shipping Resources & Guides</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert advice and best practices from Austin Crate & Freight's specialty shipping professionals
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium mb-4">
                    {article.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                  <div className="mt-4 flex items-center text-emerald-600 font-medium group-hover:gap-2 transition-all">
                    <span>Read More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-emerald-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our specialty shipping experts are here to help. Get personalized advice for your specific shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(512) 240-9818"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Call (512) 240-9818
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-white transition-colors font-medium"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
