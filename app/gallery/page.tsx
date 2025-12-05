'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Gallery() {
  const galleryImages = [
    { id: 1, title: 'Fine Art Crating - Project 1', category: 'Fine Art' },
    { id: 2, title: 'Designer Furniture Transport - Project 2', category: 'Furniture' },
    { id: 3, title: 'Medical Equipment Shipping - Project 3', category: 'Medical' },
    { id: 4, title: 'Custom Crating Solution - Project 4', category: 'Fine Art' },
    { id: 5, title: 'White-Glove Delivery - Project 5', category: 'Furniture' },
    { id: 6, title: 'HIPAA Compliant Transport - Project 6', category: 'Medical' },
    { id: 7, title: 'Museum Quality Packing - Project 7', category: 'Fine Art' },
    { id: 8, title: 'Luxury Furniture Handling - Project 8', category: 'Furniture' },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-300">View our completed projects</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="flex-1 py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-300 h-64">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold group-hover:from-orange-400 group-hover:to-orange-500 transition">
                  {image.title}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to see your project here?</h2>
        <a 
          href="tel:(727) 743-7242" 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded inline-block transition"
        >
          Call Now
        </a>
      </section>

      <Footer />
    </div>
  )
}
