import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/custom-handmade-furniture'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Custom & Handmade Furniture Shipping Austin Texas',
    description: 'Specialty shipping and crating for custom and handmade furniture in Austin, Texas. One-of-a-kind pieces built by local craftsmen deserve museum-quality protection. Call (512) 240-9818.',
    keywords: [
      'custom furniture shipping Austin Texas',
      'handmade furniture shipping Austin TX',
      'ship custom furniture Austin',
      'artisan furniture shipping Austin',
      'custom furniture crating Austin Texas',
      'local furniture maker shipping Austin',
      'one of a kind furniture shipping Austin TX',
      'bespoke furniture transport Austin',
    ],
    serviceUrl: SLUG,
    ogImage: '/2.jpg',
  })
}

export default function CustomFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Custom & Handmade Furniture Shipping Austin Texas',
    description: 'Specialty shipping and custom crating for one-of-a-kind and handmade furniture pieces in Austin, TX.',
    serviceType: 'Specialty Shipping',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />

        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/services/furniture" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Furniture Shipping & Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Specialty Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Custom &amp; Handmade Furniture Shipping in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Austin is home to world-class furniture craftsmen. When a local maker builds something irreplaceable for a buyer across the country, we make sure it arrives the way it left the shop, perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* For Makers Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">We Partner with Austin Furniture Makers</h2>
            <p className="text-gray-700 text-lg mb-4">
              If you build custom furniture in Austin and sell to buyers outside the area, Austin Crate &amp; Freight is your shipping partner. We pick up directly from your shop, build a custom crate around your piece in our facility, and coordinate delivery to your customer anywhere in the country.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              We understand what it means when a craftsperson puts weeks of work into a single piece. A damaged delivery is not just a financial loss, it&apos;s a time loss and a reputation loss. We prevent that.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🏭', title: 'Shop Pickup', desc: 'We come directly to your workshop, studio, or warehouse anywhere in Greater Austin.' },
                { icon: '🪚', title: 'Custom Crating', desc: 'Every piece gets a crate built to its exact dimensions in our Austin shop, no generic boxes.' },
                { icon: '🚚', title: 'Nationwide Delivery', desc: 'Your customer receives a white-glove delivery anywhere in the US, with crate removal and placement.' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-xl text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Challenges */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Custom Furniture Is Not Like Shipping Production Furniture</h2>
            <p className="text-gray-700 text-lg mb-8">
              Production furniture from a big brand has been engineered for flat-pack shipping. A handmade live-edge table or welded steel-frame bench has not. Every custom piece has unique dimensions, weight distribution, finish requirements, and structural considerations. We assess each individually and build protection accordingly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Irregular Shapes & Dimensions', desc: 'Our Safety Speed 6400 panel saw lets us cut crating panels to any size. No piece is too large or oddly-shaped to crate.' },
                { title: 'Sensitive & Experimental Finishes', desc: 'Hand-oiled, waxed, painted, or custom-blended finishes get wrap materials selected specifically to avoid chemical reaction or surface transfer.' },
                { title: 'Mixed Material Construction', desc: 'Steel + wood, concrete + wood, resin + wood, we understand how different materials behave in transit and crate accordingly.' },
                { title: 'Fragile Joinery & Delicate Details', desc: 'Hand-cut joinery, inlaid details, and delicate hardware get individual attention and padding before the outer crate is built.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'I am a furniture maker in Austin, can you be my regular shipping partner?', a: 'Absolutely. We work with multiple Austin makers on a recurring basis. Call (512) 240-9818 to discuss your volume and we will work out a streamlined process for your shop.' },
                { q: 'Can you ship a very large or heavy custom piece?', a: 'Yes. We have shipped custom pieces weighing hundreds of pounds and spanning multiple feet. Our crating equipment can handle any size.' },
                { q: 'Do you provide certificate of packing or condition reports?', a: 'Yes. We can provide pre-shipment condition photographs and a certificate of packing on request, useful for insurance and high-value custom commissions.' },
                { q: 'Can you ship a custom piece I bought from an Austin maker to my home in another state?', a: 'Yes. This is one of our most common scenarios. We coordinate pickup from the maker\'s studio and delivery to your home, you do not have to be involved in the logistics.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ship Your Custom Piece the Right Way</h2>
            <p className="text-grey-300 text-lg mb-8">Whether you are the maker or the buyer, we handle every detail from Austin to the destination.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(512) 240-9818" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-grey-400">
              <Link href="/services/furniture/antique-heirloom-furniture" className="hover:text-emerald transition">Antique Furniture →</Link>
              <Link href="/services/furniture/oversized-heavy-furniture" className="hover:text-emerald transition">Oversized Furniture →</Link>
              <Link href="/buy-a-crate" className="hover:text-emerald transition">Buy a Custom Crate →</Link>
              <Link href="/services/furniture" className="hover:text-emerald transition">All Furniture Shipping →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
