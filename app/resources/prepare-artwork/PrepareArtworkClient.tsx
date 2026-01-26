'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'

export default function PrepareArtworkClient() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Prepare Artwork for Shipping: A Professional Guide',
    author: {
      '@type': 'Organization',
      name: 'Austin Crate & Freight'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Austin Crate & Freight',
      logo: {
        '@type': 'ImageObject',
        url: 'https://austincrate.com/logo.png'
      }
    },
    datePublished: '2024-01-15',
    dateModified: '2026-01-26',
    description: 'Comprehensive guide on preparing artwork for shipping, including materials, techniques, and professional best practices.'
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <Navigation />
      <Breadcrumbs />

      {/* Hero Section */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              Resource Guide
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How to Prepare Artwork for Shipping
            </h1>
            <p className="text-xl text-gray-600">
              A professional guide to protecting your valuable artwork during transport
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Published: January 15, 2024</span>
              <span>•</span>
              <span>Updated: January 26, 2026</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Shipping fine art requires careful preparation to ensure your valuable pieces arrive safely. Whether you're a gallery owner, collector, or artist, proper packing is essential. Here's our professional guide based on over 15 years of experience in museum-quality art shipping.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Materials You'll Need</h2>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Packing Materials:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Acid-free tissue paper or glassine</li>
                <li>• Bubble wrap (large bubble, non-static)</li>
                <li>• Corner protectors (foam or cardboard)</li>
                <li>• Packing tape (clear, high-quality)</li>
                <li>• Cardboard or foam core sheets</li>
                <li>• Sturdy corrugated boxes or custom crates</li>
                <li>• "Fragile" and "This Side Up" labels</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step-by-Step Preparation</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Document the Artwork</h3>
            <p className="text-gray-700 mb-6">
              Before packing, photograph your artwork from multiple angles. Document any existing damage, condition issues, or unique characteristics. This creates a record for insurance purposes and helps verify the artwork's condition upon arrival.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Create a Protective Barrier</h3>
            <p className="text-gray-700 mb-4">
              Start with a layer of acid-free tissue paper or glassine directly against the artwork's surface. This prevents moisture damage and provides a gentle first layer of protection.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Never let bubble wrap touch the painted surface directly, especially for oil paintings. The texture can transfer to wet or sensitive paint.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Protect Corners and Edges</h3>
            <p className="text-gray-700 mb-6">
              Frame corners are particularly vulnerable. Use foam corner protectors or create custom protection with cardboard. Ensure all four corners are well-padded before wrapping the entire piece.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Wrap with Bubble Wrap</h3>
            <p className="text-gray-700 mb-6">
              After the protective tissue layer, wrap the artwork in bubble wrap. Use at least two layers, ensuring complete coverage. Secure with packing tape, but never tape directly to the frame or artwork.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Create a Protective Sandwich</h3>
            <p className="text-gray-700 mb-6">
              Place cardboard or foam core sheets on both the front and back of the wrapped artwork. This creates a rigid "sandwich" that prevents bending and provides impact protection. Secure with tape around the edges.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Box or Crate Selection</h3>
            <p className="text-gray-700 mb-6">
              Choose a box at least 3-4 inches larger than your wrapped artwork on all sides. Fill the extra space with packing peanuts, foam, or crumpled paper. The artwork should not move when the box is closed and shaken gently.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Special Considerations</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Canvas Paintings</h4>
                <p className="text-gray-600 text-sm">
                  Protect the front surface with glassine. Avoid pressure on the canvas itself. Consider removing from stretcher bars for large pieces.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Framed Pieces with Glass</h4>
                <p className="text-gray-600 text-sm">
                  Tape an "X" across the glass with painter's tape to prevent shattering. Consider glass-free travel frames for valuable pieces.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Sculptures</h4>
                <p className="text-gray-600 text-sm">
                  Custom crating is often essential. Wrap protruding elements separately. Use foam inserts to prevent movement.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">Antiques & Collectibles</h4>
                <p className="text-gray-600 text-sm">
                  Document provenance and condition. Use archival materials. Consider climate-controlled shipping for sensitive pieces.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When to Use Professional Services</h2>
            <p className="text-gray-700 mb-4">
              While DIY packing works for small, sturdy pieces, professional packing and custom crating are recommended for:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Artwork valued over $5,000</li>
              <li>• Large pieces (over 48 inches in any dimension)</li>
              <li>• Fragile or antique items</li>
              <li>• International shipments</li>
              <li>• Museum or gallery loans</li>
              <li>• Pieces requiring climate control</li>
            </ul>

            <div className="bg-emerald-50 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Help?</h3>
              <p className="text-gray-700 mb-6">
                Austin Crate & Freight provides museum-quality packing, custom crating, and climate-controlled transport for fine art throughout Central Texas and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:(512) 240-9818"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                  Call (512) 240-9818
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Final Checklist</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Artwork photographed and documented</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Protected with acid-free materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Corners and edges protected</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Multiple layers of padding applied</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Box properly sized with void fill</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Labels applied (Fragile, This Side Up)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Insurance arranged</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/resources" className="text-emerald-600 hover:text-emerald-700 font-medium">
              ← Back to Resources
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
