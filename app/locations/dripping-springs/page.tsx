import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Dripping Springs',
  description: 'Specialty shipping & custom crating in Dripping Springs, TX. Fine art, luxury furniture, antique transport, and high-value item shipping. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Dripping Springs TX',
    'specialty shipping Dripping Springs Texas',
    'specialty crating Dripping Springs TX',
    'furniture shipping Dripping Springs',
    'fine art shipping Dripping Springs TX',
    'antique shipping Dripping Springs Texas',
    'heavy item pickup Dripping Springs TX',
    'white glove shipping Dripping Springs TX',
    'Dripping Springs shipping company',
    'custom crating Dripping Springs Texas',
    'Hill Country specialty shipping',
  ],
  locationUrl: '/locations/dripping-springs',
})

export default function DrippingSprings() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Dripping Springs',
    description: 'Specialty shipping services in Dripping Springs, Texas',
    latitude: 30.1905,
    longitude: -98.0861,
    image: '/1.jpg',
    serviceUrl: '/locations/dripping-springs',
  })

  return (
    <SEOWrapper slug="/locations/dripping-springs">
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navigation />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Dripping Springs, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Dripping Springs, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight brings expert specialty shipping to Dripping Springs and the Texas Hill Country. From custom Hill Country homes to Mercer Street wineries, we serve Dripping Springs with fine art crating, antique furniture shipping, luxury home delivery, and oversized freight — all with white-glove precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 rounded-lg font-medium text-white hover:bg-emerald-700 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  (512) 240-9818
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-lg font-medium text-gray-200 hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300">
                  Get Free Quote
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl">
              <Image src="/IMG_3954_1686069785125.jpg" alt="Specialty shipping and custom crating in Dripping Springs Texas Hill Country" fill className="object-cover" priority fetchPriority="high" sizes="(max-width: 1024px) 100vw, 50vw" quality={80} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Dripping Springs</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Dripping Springs — the "Wedding Capital of Texas" and Hill Country gateway — is home to custom estates, art collectors, and winery owners who need shipping done right. High ceilings, custom furniture, and valuable art collections are the norm here. Every job gets in-house crating and dedicated white-glove handling.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Fine Art Shipping', desc: 'Museum-quality crating for paintings, sculptures, and fine art from Dripping Springs estates and collections.', href: '/services/fine-art' },
              { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', title: 'Luxury Furniture Shipping', desc: 'White-glove furniture shipping for custom Hill Country home builds and high-end designer pieces.', href: '/services/furniture' },
              { icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z', title: 'Antique & Heirloom Transport', desc: 'Expert crating for antique furniture, heirlooms, and collectibles from Dripping Springs homes.', href: '/services/furniture/antique-furniture-shipping' },
              { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', title: 'Heavy Item Pickup', desc: 'Safes, vaults, heavy equipment, and oversized items from Dripping Springs homes and properties.', href: '/services/heavy-items' },
              { icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7', title: 'Oversized Shipping', desc: 'Custom freight solutions for oversized Hill Country deliveries that standard carriers won\'t handle.', href: '/services/oversized-shipping' },
            ].map(({ icon, title, desc, href }) => (
              <div key={title} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} /></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <Link href={href} className="text-emerald-600 hover:text-emerald-700 font-medium">Learn More →</Link>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hill Country Crating & Specialty Shipping, Dripping Springs, TX</h2>
            <p className="text-gray-700 mb-6">
              Dripping Springs has become one of Central Texas's most sought-after communities — custom homes on large acreage, Hill Country wineries, and estates with art collections that rival small galleries. Whether you're moving a valuable sculpture from a Caliterra estate, shipping designer furniture from a custom home build, or crating antique pieces for nationwide delivery, we treat every Dripping Springs shipment with the care it deserves.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Fine Art &amp; Sculpture</h3><p className="text-gray-600 text-sm">Custom foam-lined crates for paintings, bronzes, and gallery pieces. Climate-controlled transit available for sensitive works.</p></div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Antiques &amp; Heirlooms</h3><p className="text-gray-600 text-sm">Expert crating for antique furniture, grandfather clocks, and family heirlooms from Hill Country estates.</p></div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Oversized &amp; Custom Items</h3><p className="text-gray-600 text-sm">Custom Hill Country home furniture, large format pieces, and anything standard carriers won't touch.</p></div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Dripping Springs TX — FAQs</h2>
            <div className="space-y-6">
              {[
                { q: 'Do you offer specialty shipping in Dripping Springs, TX?', a: 'Yes. Austin Crate & Freight provides specialty shipping and custom crating throughout Dripping Springs and the Texas Hill Country. We pick up from your location, build custom crates in-house, and ship locally or nationwide.' },
                { q: 'Can you ship fine art from Dripping Springs estates?', a: 'Absolutely. We specialize in fine art crating for Dripping Springs collectors and homeowners — custom foam-lined wood crates, climate-controlled options, and full insurance coverage for every piece.' },
                { q: 'Do you handle antique furniture shipping from Hill Country homes?', a: 'Yes. We provide expert antique furniture crating and shipping from Dripping Springs, Wimberley, and surrounding Hill Country communities. Every antique gets a custom crate built to protect it in transit.' },
                { q: 'What areas of Dripping Springs do you serve?', a: 'We serve all of Dripping Springs (78620) including Caliterra, Headwaters, Sunset Canyon, Arrowhead Ranch, and surrounding Hill Country communities. Free pickup throughout the area.' },
                { q: 'How long does it take to get from Austin to Dripping Springs?', a: 'Our Austin workshop is approximately 35-40 minutes from downtown Dripping Springs via US-290. We schedule pickups and deliveries throughout the week with flexible timing for Hill Country properties.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Also Serve Nearby Hill Country Communities</h3>
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides white-glove specialty shipping throughout the Hill Country and greater Austin area.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/lakeway', label: 'Lakeway / Bee Cave, TX' },
                { href: '/locations/wimberley', label: 'Wimberley, TX' },
                { href: '/locations/marble-falls', label: 'Marble Falls, TX' },
                { href: '/locations/cedar-park', label: 'Cedar Park, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/services/fine-art', label: 'Fine Art Shipping' },
                { href: '/services/furniture/antique-furniture-shipping', label: 'Antique Furniture Shipping' },
                { href: '/services', label: 'All Services' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">{label}</Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Dripping Springs?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on fine art crating, antique shipping, or any specialty shipping need in Dripping Springs, TX.</p>
            <a href="tel:(512) 240-9818" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">Call (512) 240-9818</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Dripping Springs from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">Austin Crate &amp; Freight serves Dripping Springs from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 35 minutes via US-290. Free pickup throughout Dripping Springs and the surrounding Hill Country (78620).</p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Dripping Springs pickup:</strong> Free throughout Dripping Springs and Hill Country</span></li>
              </ul>
              <a href="https://www.google.com/maps/search/?api=1&query=Austin+Crate+%26+Freight+3112+Windsor+Rd+Austin+TX+78703" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all">Get Directions on Google Maps</a>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe src="https://www.google.com/maps?q=3112+Windsor+Rd+Austin+TX+78703&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Austin Crate & Freight serving Dripping Springs TX" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
