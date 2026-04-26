import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/sculpture-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Sculpture Shipping & Crating Austin Texas',
    description: 'Expert sculpture shipping and custom crating in Austin, Texas. Bronze, stone, ceramic, glass, and mixed-media sculptures, custom foam mounts, vibration isolation, and white-glove handling. Call (512) 240-9818.',
    keywords: [
      'sculpture shipping Austin TX',
      'sculpture crating Austin Texas',
      'ship sculpture Austin',
      'bronze sculpture shipping Austin TX',
      'stone sculpture transport Austin',
      'ceramic sculpture crating Austin',
      'art sculpture freight Austin Texas',
      'sculpture moving Austin TX',
    ],
    serviceUrl: SLUG,
  })
}

export default function SculptureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Sculpture Shipping & Crating Austin Texas',
    description: 'Custom crating and white-glove shipping for sculptures in Austin, TX, bronze, stone, ceramic, glass, and mixed media handled with precision foam mounts and vibration isolation.',
    serviceType: 'Specialty Shipping',
  })

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-white flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <Navigation />
        <Breadcrumbs />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white pt-28 md:pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/services/fine-art" className="text-emerald hover:underline mb-4 inline-block text-sm">
              ← Fine Art Shipping &amp; Crating
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Fine Art · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sculpture Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Sculptures are three-dimensional, often heavy, and frequently have projecting elements that standard packing cannot protect. Austin Crate &amp; Freight builds custom crates with precision foam saddles and mounts designed around the specific geometry of each piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Why Sculptures Are Challenging */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Sculptures Require Custom Crating</h2>
            <p className="text-gray-700 text-lg mb-4">
              A painting has two faces and lives in one plane. A sculpture exists in three dimensions, and each dimension introduces new vulnerabilities. A bronze figure with an outstretched arm will break at the shoulder in a drop if the arm is not independently supported in its crate. A ceramic piece with a narrow neck will fracture at the neck under vibration if the body and head are not separately immobilized. A stone torso will chip at every sharp edge that contacts the crate interior.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              The solution is not more bubble wrap, it is a custom foam mount that holds the sculpture in the specific position that distributes its weight correctly and isolates every vulnerable projection. We make cardboard templates of complex sculptures before cutting foam, ensuring the mounting fits the actual piece rather than our approximation of it.
            </p>
            <p className="text-gray-700 text-lg">
              Heavy stone and bronze sculptures present an additional challenge: they are dense, so even a small size carries significant weight. A marble bust that weighs 80 lbs needs a crate rated for the weight, with internal bracing that prevents the sculpture from shifting under its own momentum during hard braking or a sudden lift.
            </p>
          </div>
        </section>

        {/* Our Crating Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Crate Sculptures for Shipping</h2>
            <p className="text-gray-600 mb-8">Our sculpture crating process is built around the individual piece, not a standard protocol applied regardless of geometry or material.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Geometry Assessment & Template Making', desc: 'For complex sculptures, we make a cardboard template of the base profile before cutting foam. This ensures the foam mount holds the piece in the correct orientation, not slightly off-axis where it would create pressure on a specific point.' },
                { title: 'Precision Foam Saddle Construction', desc: 'Foam is cut to support the sculpture at its strongest structural points, the base, major mass areas, not at thin or projecting sections. Projections are individually padded to prevent any contact with the crate interior.' },
                { title: 'Vibration Isolation Layer', desc: 'A secondary foam layer below the sculpture mount absorbs road vibration before it reaches the piece. This is particularly important for ceramic and glass sculptures, which micro-fracture under sustained vibration before any single visible impact occurs.' },
                { title: 'Individual Projection Padding', desc: 'Every element that extends from the main mass, arms, horns, handles, pedestals, thin branches, is wrapped individually before any enclosing material is applied. These are the points where sculptures fail in transit.' },
                { title: 'Surface Contact Materials', desc: 'Metal sculptures with patina (bronze, copper, silver) are wrapped in acid-free tissue to prevent chemical reaction with foam or plastic. Stone and ceramic surfaces are padded with soft foam; glass with polyethylene foam at appropriate density.' },
                { title: 'Weight-Rated Crate Construction', desc: 'Crate lumber grade is selected based on sculpture weight. A 150 lb bronze warrior requires heavier joinery and a reinforced base compared to a 10 lb ceramic vessel. Forklift entry points are engineered into large sculpture crates.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sculpture Materials We Handle */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sculpture Materials &amp; Styles We Crate in Austin</h2>
            <p className="text-gray-600 mb-8">Each material has distinct vulnerabilities. Our process is adapted to the specific material and finish of each piece.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Bronze Figures & Castings (Patinated & Polished)',
                'Marble, Granite & Stone Carving',
                'Ceramic & Stoneware Sculpture',
                'Glass Sculpture & Blown Glass',
                'Resin & Fiberglass Castings',
                'Mixed Media & Found-Object Sculpture',
                'Welded & Fabricated Steel',
                'Wood Carving & Assembled Wood Sculpture',
                'Kinetic & Moving Sculpture',
                'Outdoor & Garden Sculpture',
                'Abstract & Minimalist Forms',
                'Figurative & Portrait Sculpture',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sculpture Shipping Costs in Austin</h2>
            <p className="text-gray-700 text-lg mb-6">Cost depends on size, weight, material fragility, and destination. As a rough guide for crating at our Austin facility:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { range: '$150-$400', label: 'Small Sculpture', desc: 'Under 2 ft, light to moderate weight. Custom foam mount, small wood crate.' },
                { range: '$350-$900', label: 'Medium Sculpture', desc: '2-4 ft, up to 100 lbs. Precision foam saddle, full wood crate with vibration layer.' },
                { range: 'Custom Quote', label: 'Large / Heavy Sculpture', desc: 'Over 4 ft or over 100 lbs. Engineered crate, forklift entry, liftgate coordination.' },
              ].map((tier, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl text-center">
                  <div className="text-2xl font-bold text-emerald mb-1">{tier.range}</div>
                  <div className="font-semibold text-gray-900 mb-2">{tier.label}</div>
                  <p className="text-gray-600 text-sm">{tier.desc}</p>
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
                { q: 'Can you ship a large outdoor bronze sculpture?', a: 'Yes. Large bronze sculptures are some of the most common pieces we crate. They require weight-rated lumber, engineered internal bracing, and liftgate service at both ends. We assess large sculptures on-site before crating to confirm the approach.' },
                { q: 'What do you place against a patinated bronze surface?', a: 'Acid-free tissue paper is placed against all patinated metal surfaces. Never foam or plastic directly against bronze, both can react with or adhere to the patina over time. After tissue, soft foam padding is applied for secondary protection.' },
                { q: 'Can you ship a kinetic or moving sculpture?', a: 'Yes, with additional planning. Kinetic elements need to be immobilized or removed for packing to prevent self-damage during transit. We assess which elements can be secured in place and which should be packed separately, then document reassembly for the recipient.' },
                { q: 'Do you ship sculpture to galleries outside Austin?', a: 'Absolutely. We ship sculpture to galleries, exhibitions, and collectors across Texas and nationally. The crating standard is the same regardless of destination, only the freight method changes (local delivery vs. LTL freight vs. dedicated van).' },
                { q: 'How much insurance do I need for a valuable sculpture?', a: 'Coverage at full replacement value is always recommended. LTL carriers default to $0.10–$0.25 per pound liability, catastrophically low for a $20,000 sculpture. We coordinate declared value coverage through the freight carrier at actual insured value.' },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGrid title="More Fine Art &amp; Specialty Shipping Services" showSubLinks exclude={['/services/fine-art']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get a Sculpture Shipping Quote in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us the material, dimensions, weight (if known), and destination. Photos are always helpful and can be texted or emailed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 border-t border-grey-700 pt-6">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Fine Art Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/fine-art/painting-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Painting Shipping</Link>
                <Link href="/services/fine-art/art-installation-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Art Installation</Link>
                <Link href="/services/fine-art/fragile-item-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Fragile Items</Link>
                <Link href="/services/fine-art/gallery-exhibit-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Gallery Exhibits</Link>
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
                <Link href="/services/fine-art/rare-collectibles-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Rare Collectibles</Link>
                <Link href="/services/fine-art/glass-art-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Glass Art</Link>
                <Link href="/services/fine-art/museum-display-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Museum Display</Link>
                <Link href="/services/fine-art" className="px-3 py-1 border border-emerald/40 rounded-full text-emerald hover:bg-emerald/10 transition-colors">All Fine Art →</Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
