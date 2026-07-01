import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateMetadata({
  title: 'About Austin Crate & Freight | Meet the Team — Peter Hall & Max DeLeonardis',
  description:
    'Meet the team behind Austin Crate & Freight — Peter Hall (Founder & Master Crate Builder) and Max DeLeonardis (Marketing Manager). Central Texas\'s premier white-glove specialty shipping company since 2010.',
  keywords: [
    'about Austin Crate & Freight',
    'Peter Hall Austin Crate',
    'Max DeLeonardis Austin Crate',
    'specialty shipping Austin TX team',
    'white glove movers Austin founders',
  ],
  canonicalUrl: '/about',
  ogImage: '/og-image.jpg',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Austin Crate & Freight',
  url: 'https://austincrate.com',
  foundingDate: '2010',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  employee: [
    {
      '@type': 'Person',
      name: 'Peter Hall',
      jobTitle: 'Owner & Master Crate Builder',
      url: 'https://austincrate.com/authors/peter-hall',
    },
    {
      '@type': 'Person',
      name: 'Max DeLeonardis',
      jobTitle: 'Marketing Manager',
      url: 'https://austincrate.com/authors/max-deleonardis',
    },
  ],
  description:
    'Central Texas\'s premier white-glove specialty shipping company. Custom crating, fine art shipping, medical equipment transport, and specialty freight since 2010.',
}

export default function About() {
  return (
    <SEOWrapper slug="/about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />
        <Breadcrumbs />

        {/* Page Header */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">About Austin Crate &amp; Freight</h1>
            <p className="text-xl text-gray-300">Central Texas's Premier White-Glove Specialty Shipping Experts</p>
          </div>
        </section>

        {/* Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in 2010, Austin Crate &amp; Freight has established itself as Central Texas's most trusted specialty shipping company. We recognized the need for professional, white-glove services for high-value items — fine art, designer furniture, and sensitive medical equipment — that demand more than standard freight handling.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              What started as a small custom crating operation has grown into a full-service specialty shipping company serving galleries, museums, interior designers, medical facilities, and private collectors throughout Austin, Round Rock, Cedar Park, Georgetown, and beyond.
            </p>

            {/* ── Real shop photos strip ─────────────────────────────────────── */}
            <div className="grid grid-cols-3 gap-3 my-10 rounded-2xl overflow-hidden">
              {[
                { src: '/IMG_2980.jpg', alt: 'Custom crate build in progress at Austin Crate & Freight shop' },
                { src: '/IMG_3037.jpg', alt: 'Large item custom crate — Austin Crate & Freight' },
                { src: '/IMG_3092.jpg', alt: 'Crate assembly in the Austin Crate workshop' },
                { src: '/IMG_2983.jpg', alt: 'Freight secured and ready for pickup — Austin TX' },
                { src: '/IMG_2984.jpg', alt: 'White-glove packing prep — Austin Crate & Freight' },
                { src: '/IMG_3155.jpg', alt: 'Completed job — Austin Crate & Freight' },
              ].map((photo, i) => (
                <div key={i} className="relative h-44 rounded-xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    quality={75}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 text-center mb-10 -mt-4">
              Photos from our shop at 3112 Windsor Rd, Austin, TX.{' '}
              <Link href="/gallery" className="text-emerald-600 hover:underline">See the full gallery →</Link>
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide museum-quality care and white-glove service for every shipment, treating each item with the attention and expertise it deserves. We're committed to protecting what matters most to you, whether it's irreplaceable artwork, luxury furnishings, or life-saving medical equipment.
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mb-6 mt-12">Why Choose Austin Crate &amp; Freight?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                <p className="text-gray-700">Professional handling from start to finish, including disassembly, secure packing, careful transport, inside delivery, and reassembly when needed.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-3">Local Knowledge</h3>
                <p className="text-gray-700">Based in Austin and deeply familiar with Central Texas. We understand local logistics, building access, and community needs.</p>
              </div>
            </div>

            {/* ── Meet the Team ─────────────────────────────────────────────── */}
            <div className="border-t border-gray-100 pt-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Meet the Team</h2>
              <p className="text-lg text-gray-500 mb-10">
                Every article on the Austin Crate blog is written by the same people who pack and ship your items — experts with real, hands-on experience.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Peter Hall */}
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                      PH
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Peter Hall</h3>
                      <p className="text-emerald-600 text-sm font-medium">Owner &amp; Master Crate Builder</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    Peter founded Austin Crate &amp; Freight in 2010 after nearly a decade in logistics and museum artifact transport. He personally oversees custom-crate builds for fine art, antiques, heavy safes, and medical equipment — and writes about the craft from firsthand field experience. 15+ years specialty freight expertise.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2.5 py-1 rounded-full">Custom Crating</span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2.5 py-1 rounded-full">Fine Art Shipping</span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2.5 py-1 rounded-full">White-Glove Logistics</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/authors/peter-hall"
                      className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Full Profile →
                    </Link>
                    <Link
                      href="/blog"
                      className="flex-1 text-center border border-emerald-200 text-emerald-600 hover:bg-emerald-50 text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Read Articles
                    </Link>
                  </div>
                </div>

                {/* Max DeLeonardis */}
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-2xl shrink-0">
                      MD
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Max DeLeonardis</h3>
                      <p className="text-sky-600 text-sm font-medium">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    Max runs day-to-day freight operations at Austin Crate &amp; Freight — routing shipments, coordinating carriers, managing the crating crew, and keeping complex jobs on time and on budget. He writes with a cost-transparency focus, breaking down freight pricing and logistics for Austin-area businesses and homeowners.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="text-xs bg-sky-50 text-sky-700 font-medium px-2.5 py-1 rounded-full">Freight Logistics</span>
                    <span className="text-xs bg-sky-50 text-sky-700 font-medium px-2.5 py-1 rounded-full">Equipment Transport</span>
                    <span className="text-xs bg-sky-50 text-sky-700 font-medium px-2.5 py-1 rounded-full">LTL &amp; FTL Freight</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/authors/max-deleonardis"
                      className="flex-1 text-center bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Full Profile →
                    </Link>
                    <Link
                      href="/blog"
                      className="flex-1 text-center border border-sky-200 text-sky-600 hover:bg-sky-50 text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
                    >
                      Read Articles
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Editorial Standards (EEAT) ─────────────────────────────── */}
            <div className="mt-16 border-t border-gray-100 pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Editorial Standards</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Every article published on the Austin Crate &amp; Freight blog is written or reviewed by a member of our operational team — people who actively crate, ship, and move specialty freight in Austin every day. We don't publish generic shipping advice; we write from direct experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                <li>All pricing and cost data is drawn from real Austin Crate &amp; Freight job histories</li>
                <li>Technical crating and packing guidance reflects current field practice</li>
                <li>Articles are updated when practices, costs, or local logistics change</li>
                <li>Named authors with verified professional backgrounds — no anonymous content</li>
              </ul>
              <Link
                href="/blog"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Read Our Blog →
              </Link>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
              <p className="text-gray-700 mb-4">
                Ready to ship with confidence? Contact our specialty shipping experts for a free consultation and detailed quote.
              </p>
              <a
                href="tel:(512) 240-9818"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition"
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
