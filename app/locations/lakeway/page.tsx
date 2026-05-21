import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { generateLocationMetadata, generateLocalBusinessSchema } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

export const metadata: Metadata = generateLocationMetadata({
  locationName: 'Lakeway',
  description: 'Specialty shipping & custom crating in Lakeway & Bee Cave, TX. Fine art shipping, luxury furniture crating, and high-value item transport. White-glove service from Austin Crate & Freight.',
  keywords: [
    'specialty shipping Lakeway TX',
    'specialty shipping Bee Cave TX',
    'specialty crating Lakeway Texas',
    'furniture shipping Lakeway',
    'furniture crating Lakeway TX',
    'fine art shipping Lakeway Texas',
    'heavy item pickup Lakeway TX',
    'white glove shipping Lakeway TX',
    'Lakeway shipping company',
    'Bee Cave shipping',
    'custom crating Lakeway Texas',
    'luxury furniture shipping Lakeway',
    'antique shipping Bee Cave TX',
  ],
  locationUrl: '/locations/lakeway',
})

export default function Lakeway() {
  const localSchema = generateLocalBusinessSchema({
    locationName: 'Lakeway',
    description: 'Specialty shipping services in Lakeway and Bee Cave, Texas',
    latitude: 30.3577,
    longitude: -97.9836,
    image: '/1.jpg',
    serviceUrl: '/locations/lakeway',
  })

  return (
    <SEOWrapper slug="/locations/lakeway">
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navigation />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm mb-6">
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Specialty Shipping & Crating, Lakeway & Bee Cave, TX</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Specialty Shipping & Crating in Lakeway & Bee Cave, TX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Austin Crate &amp; Freight brings museum-quality specialty shipping to Lakeway and Bee Cave. From Lake Travis waterfront estates to Hill Country Club Drive, we serve the area's most discerning homeowners with fine art crating, luxury furniture shipping, antique transport, and high-value item delivery.
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
              <Image src="/IMG_3832_1681922619689.jpg" alt="Specialty shipping and fine art crating in Lakeway and Bee Cave Texas" fill className="object-cover" priority fetchPriority="high" sizes="(max-width: 1024px) 100vw, 50vw" quality={80} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialty Shipping & Crating Services in Lakeway & Bee Cave</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Lakeway and Bee Cave are home to some of Austin's most affluent neighborhoods — Lake Travis waterfront estates, Hill Country custom homes, and luxury communities. That means high-value art, antiques, and designer furniture that demands expert handling. Every shipment gets in-house custom crating built to museum standards.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', title: 'Fine Art Shipping', desc: 'Museum-quality crating for paintings, sculptures, and fine art from Lakeway and Bee Cave collectors and estates.', href: '/services/fine-art' },
              { icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', title: 'Luxury Furniture Shipping', desc: 'White-glove furniture shipping for designer sofas, antiques, and custom pieces from Lakeway\'s finest homes.', href: '/services/furniture' },
              { icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z', title: 'Antique & Heirloom Transport', desc: 'Careful crating and climate-controlled shipping for antique furniture and family heirlooms from Bee Cave and Lakeway.', href: '/services/furniture/antique-furniture-shipping' },
              { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Medical Equipment', desc: 'HIPAA-compliant transport for Lakeway and Bee Cave medical facilities and healthcare providers.', href: '/services/medical-equipment' },
              { icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', title: 'Heavy Item Pickup', desc: 'Safe and vault moving, heavy art pieces, and oversized items from Lakeway and Bee Cave homes.', href: '/services/heavy-items' },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">White-Glove Crating for Lakeway & Bee Cave Estates</h2>
            <p className="text-gray-700 mb-6">
              The Lakeway and Bee Cave area is known for luxury Lake Travis waterfront properties, Hill Country Club estates, and some of Austin's highest-value homes. Residents here own fine art, antique furniture, and designer pieces worth tens of thousands of dollars — items that need crating to a museum standard. We build every crate in-house from engineered lumber, foam-lined interiors, and sealed against humidity for the Texas climate.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Fine Art &amp; Sculpture</h3><p className="text-gray-600 text-sm">Custom foam-lined wood crates for paintings, sculptures, and gallery pieces. Climate-controlled transit available.</p></div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Antiques &amp; Heirlooms</h3><p className="text-gray-600 text-sm">Expert disassembly and museum-standard crating for antique furniture, grandfather clocks, and family heirlooms.</p></div>
              <div className="bg-white rounded-xl p-5 border border-emerald-100"><h3 className="font-bold text-gray-900 mb-2">Safes &amp; Valuables</h3><p className="text-gray-600 text-sm">Safe and vault moving for Lakeway and Bee Cave homes. Heavy-lift equipment and insured transport for your most valuable possessions.</p></div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialty Shipping Lakeway TX — Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: 'Do you offer fine art shipping in Lakeway and Bee Cave, TX?', a: 'Yes. Austin Crate & Freight specializes in museum-quality fine art crating and shipping for Lakeway and Bee Cave. We build custom crates for paintings, sculptures, and high-value collectibles with climate-controlled transit options.' },
                { q: 'Can you ship luxury furniture from Lakeway estates?', a: 'Absolutely. We provide white-glove furniture shipping and custom crating for Lakeway and Bee Cave homes — from designer sofas and antique dining sets to custom-built pieces. We handle disassembly, crating, and reassembly.' },
                { q: 'Do you move safes and vaults in Lakeway?', a: 'Yes. We provide safe and vault moving for Lakeway and Bee Cave homes. We use heavy-lift equipment and fully insured transport for all safes and high-security items.' },
                { q: 'What is the service area for Lakeway and Bee Cave?', a: 'We serve all of Lakeway (78734, 78738), Bee Cave (78738), and surrounding Hill Country communities including Spicewood, Hudson Bend, and The Hills. Same-day quotes available.' },
                { q: 'How does white-glove shipping work for Lakeway?', a: 'We pick up from your Lakeway or Bee Cave home, transport items to our Austin facility for custom crating, then ship via insured freight nationwide — or deliver locally. Every step includes dedicated handling by our team.' },
              ].map(({ q, a }) => (
                <div key={q} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Also Serve Nearby Communities</h3>
            <p className="text-gray-600 mb-6">Austin Crate &amp; Freight provides white-glove specialty shipping throughout the Lake Travis corridor and greater Austin area.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/locations/dripping-springs', label: 'Dripping Springs, TX' },
                { href: '/locations/cedar-park', label: 'Cedar Park, TX' },
                { href: '/locations/round-rock', label: 'Round Rock, TX' },
                { href: '/locations/georgetown', label: 'Georgetown, TX' },
                { href: '/services/fine-art', label: 'Fine Art Shipping' },
                { href: '/services/furniture', label: 'Furniture Shipping' },
                { href: '/services', label: 'All Services' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-emerald-500 hover:text-emerald-700 transition-colors font-medium">{label}</Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Ship from Lakeway or Bee Cave?</h3>
            <p className="text-gray-600 mb-6">Contact us for a free quote on fine art crating, luxury furniture shipping, or any specialty shipping need in Lakeway or Bee Cave, TX.</p>
            <a href="tel:(512) 240-9818" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">Call (512) 240-9818</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serving Lakeway & Bee Cave from Austin</h2>
              <p className="text-gray-700 text-lg mb-6">Austin Crate &amp; Freight serves Lakeway and Bee Cave from our workshop at <strong>3112 Windsor Rd, Austin, TX 78703</strong>, approximately 30 minutes via TX-71. Free pickup throughout Lakeway 78734, 78738 and Bee Cave 78738.</p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Address:</strong> 3112 Windsor Rd, Austin, TX 78703</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Phone:</strong> <a href="tel:(512) 240-9818" className="text-emerald-600 hover:underline">(512) 240-9818</a></span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Hours:</strong> Mon-Fri 8am-6pm, Sat by appointment</span></li>
                <li className="flex gap-3"><span className="text-emerald-600 font-bold">✓</span><span><strong>Lakeway/Bee Cave pickup:</strong> Free throughout the Lake Travis corridor</span></li>
              </ul>
              <a href="https://www.google.com/maps/search/?api=1&query=Austin+Crate+%26+Freight+3112+Windsor+Rd+Austin+TX+78703" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all">Get Directions on Google Maps</a>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe src="https://www.google.com/maps?q=3112+Windsor+Rd+Austin+TX+78703&output=embed" width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Austin Crate & Freight serving Lakeway and Bee Cave TX" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
