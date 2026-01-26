import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo-utils'

export const metadata: Metadata = generateMetadata({
  title: 'Gallery | Austin Crate & Freight - See Our Work',
  description: 'View photos of our custom crating, white-glove furniture handling, fine art shipping, and medical equipment transport services. See the quality of Austin Crate & Freight.',
  keywords: ['Austin shipping gallery', 'crating photos Austin', 'white glove service photos', 'art shipping examples'],
  canonicalUrl: '/gallery',
})

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: '/1.jpg', title: 'Fine Art Crating', category: 'Fine Art' },
    { id: 2, src: '/2.jpg', title: 'Furniture Transport', category: 'Furniture' },
    { id: 3, src: '/3.jpg', title: 'Medical Equipment', category: 'Medical' },
    { id: 4, src: '/IMG_3105.jpg', title: 'Custom Crating Solution', category: 'Crating' },
    { id: 5, src: '/IMG_3112.jpg', title: 'Specialty Packaging', category: 'Packaging' },
    { id: 6, src: '/IMG_3114.jpg', title: 'Secure Transport Setup', category: 'Transport' },
    { id: 7, src: '/IMG_3611.jpg', title: 'White-Glove Delivery', category: 'Delivery' },
    { id: 8, src: '/IMG_3748.jpg', title: 'Professional Handling', category: 'Handling' },
    { id: 9, src: '/IMG_3760.jpg', title: 'Freight Services', category: 'Freight' },
    { id: 10, src: '/IMG_3770.jpg', title: 'Warehouse Operations', category: 'Operations' },
    { id: 11, src: '/IMG_3832_1681922619689.jpg', title: 'Museum-Quality Crating', category: 'Crating' },
    { id: 12, src: '/IMG_3954_1686069785125.jpg', title: 'Delicate Item Packaging', category: 'Packaging' },
    { id: 13, src: '/IMG_3979_1686773817157.jpg', title: 'Climate-Controlled Storage', category: 'Storage' },
    { id: 14, src: '/IMG_4196_1695841417957.jpg', title: 'Oversized Item Shipping', category: 'Shipping' },
    { id: 15, src: '/IMG_4446_1703172460423.jpg', title: 'General Shipping & Crates', category: 'General' },
    { id: 16, src: '/IMG_5091_1714149760004.jpg', title: 'Secure Loading', category: 'Loading' },
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-grey-300">Professional crating, packaging, and shipping solutions</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="flex-1 py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-grey-100 h-64">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAARBRITISJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AMW4q5Hj5RUtVJY5F+m0fkjAycrbI7E7Oc1qhZB3JP/Z"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-grey-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-bold text-lg">{image.title}</p>
                  <p className="text-sm text-grey-300">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-grey-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-grey-900 mb-4">Need Custom Crating or Shipping?</h2>
        <p className="text-grey-600 mb-8 max-w-2xl mx-auto">
          From fine art to medical equipment, we handle your most valuable items with museum-quality care.
        </p>
        <a 
          href="tel:(512) 240-9818" 
          className="bg-emerald hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-lg inline-flex items-center gap-3 transition shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call (512) 240-9818
        </a>
      </section>

      <Footer />
    </div>
  )
}
