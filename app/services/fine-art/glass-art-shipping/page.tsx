import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/glass-art-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Glass Art Shipping & Crating Austin Texas',
    description: 'Specialist glass art shipping and crating in Austin, Texas. Blown glass, cast glass, stained glass panels, glass sculpture, and studio art glass. Vibration isolation engineering and zero-crush packing. Call (512) 240-9818.',
    keywords: [
      'glass art shipping Austin TX',
      'blown glass shipping Austin Texas',
      'glass sculpture crating Austin',
      'art glass shipping Austin',
      'stained glass shipping Austin TX',
      'Chihuly style glass shipping Austin',
      'studio glass shipping Texas',
      'glass artwork crating Austin',
    ],
    serviceUrl: SLUG,
  })
}

export default function GlassArtShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Glass Art Shipping & Crating Austin Texas',
    description: 'Specialist shipping and custom crating for glass art in Austin, TX — blown glass, cast glass, stained glass, glass sculpture, and studio art glass.',
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
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Glass Art Shipping · Austin, TX</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Glass Art Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Glass art is among the most demanding of all specialty shipping categories. A single blown glass vessel can fracture from vibration alone — without any direct impact. We engineer crates specifically for glass using vibration isolation materials, orientation-specific foam engineering, and zero-clearance suspension systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-medium text-white hover:bg-emerald/90 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-grey-800/50 border border-grey-700 rounded-lg font-medium text-grey-200 hover:bg-grey-700/50 backdrop-blur-sm transition-all duration-300">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* The Unique Challenge of Glass */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Unique Challenge of Shipping Glass Art</h2>
            <p className="text-gray-700 text-lg mb-4">
              Glass fails in ways that other art materials do not. Ceramics chip and crack from direct impact. Canvas tears from puncture. But glass can fracture from resonant vibration — the sustained oscillation of truck transport can match the natural resonant frequency of a piece and cause internal structural failure with no visible external cause. A piece can arrive with its crate intact, its foam undisturbed, and a crack propagating from the inside outward where a stress concentration met a resonant vibration pattern.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              This is why glass art cannot simply be packed well — it has to be packed using vibration isolation engineering. The foam choices, the orientation of the piece within the crate, the amount of clearance between the piece and the foam walls, and the construction of the outer crate together determine whether a piece survives a 1,500-mile truck journey.
            </p>
            <p className="text-gray-700 text-lg">
              We also assess each piece&apos;s structural geometry before building a crate. A vessel with a thin neck is more vulnerable at that neck than anywhere else. A flat glass panel distributes vibration energy differently than a three-dimensional form. These differences drive different engineering decisions.
            </p>
          </div>
        </section>

        {/* Technical Approach */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Technical Approach to Glass Art Crating</h2>
            <p className="text-gray-600 mb-8">Engineered for the specific failure modes of glass — not generic fragile-item protocols.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Vibration Isolation Foam', desc: 'Low-density, high-resilience polyethylene foam layers absorb vibration energy before it reaches the glass surface. Foam density is selected based on the estimated weight and surface area of the piece — not one standard formula.' },
                { title: 'Zero-Clearance Foam Fit', desc: 'The foam cradle is cut to match the exact profile of the piece with zero clearance. Any space between foam and glass becomes a vibration amplifier. A perfect fit means the piece and foam move together.' },
                { title: 'Orientation Engineering', desc: 'We determine the optimal orientation for each piece before building the crate. Flat glass panels typically travel horizontal. Tall vessels may travel on their sides. The structural weak points of the piece determine the orientation — not shipping convenience.' },
                { title: 'First-Surface Protection', desc: 'All first-surface contact (foam touching glass) uses tissue or Tyvek barriers to prevent foam off-gassing, surface residue, or abrasion from the foam texture itself against polished glass.' },
                { title: 'Multi-Piece Crating', desc: 'When shipping multiple glass pieces in a single crate, each piece is individually foam-wrapped and suspended in its own compartment with no possibility of indirect contact or vibration transmission between pieces.' },
                { title: 'Structural Corner Protection', desc: 'The outer crate uses double-wall construction with corner blocking. Glass fractures most commonly from corner impacts on the outer container — blocked corner construction prevents energy transfer to the contents.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Glass Art We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Types of Glass Art We Ship &amp; Crate</h2>
            <p className="text-gray-600 mb-8">Every form of glass art presents different structural challenges — we handle them all.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Blown glass vessels, vases & bowls', 'Blown glass sculpture & figurative pieces',
                'Cast glass blocks & thick-section forms', 'Fused glass panels & wall art',
                'Stained glass panels & windows', 'Dichroic glass art',
                'Kiln-formed glass plates', 'Neon & cold cathode glass works',
                'Lampworked borosilicate sculpture', 'Studio glass from gallery shows',
                'Glass installation components', 'Antique art glass (Tiffany, Daum, Gallé)',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {[
                { q: 'Can you ship a piece that was damaged and repaired?', a: 'Sometimes yes, depending on the nature and quality of the repair. We assess repaired pieces individually. A well-executed cold repair with UV adhesive may ship safely; a poorly repaired break along a stress concentration may need professional conservation strengthening before shipping is advisable. We will tell you honestly.' },
                { q: 'How do you handle stained glass panels?', a: 'Stained glass panels travel flat, supported across their full face so no section of the panel bears the weight of another section. The leading and solder joints are points of structural vulnerability — we build crate shelves that carry the panel from the glass face rather than from the frame edge.' },
                { q: 'Can you ship a piece that is very thin-walled?', a: 'Thin-walled glass is among our most challenging work. We assess wall thickness and geometry before quoting. Very thin-walled pieces may require hand-carry arrangements rather than freight — we will advise you on the most appropriate transport method for your specific piece.' },
                { q: 'Do you do open-crate packing or closed crates for glass?', a: 'Closed crates only for glass. Open-top packing exposes glass to handling forces during stacking and loading. We build fully enclosed crates with lid-closing hardware, so the piece is contained at all times.' },
                { q: 'What is your lead time for glass art crating?', a: 'Standard glass crating takes 3–5 business days from assessment to ready-for-pickup. Complex multi-piece gallery shipments or very large sculptural pieces may require 7–10 business days. Call us with dimensions and we can give you a more specific timeline.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
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
            <h2 className="text-3xl font-bold mb-4">Expert Glass Art Crating in Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Send your glass art with confidence. We engineer the crate around the specific vulnerabilities of your piece.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Request a Quote
              </Link>
            </div>
            <div className="mt-8 border-t border-grey-700 pt-6">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-3">All Fine Art Services</p>
              <div className="flex flex-wrap justify-center gap-2 text-sm">
                <Link href="/services/fine-art/painting-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Painting Shipping</Link>
                <Link href="/services/fine-art/sculpture-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sculpture Shipping</Link>
                <Link href="/services/fine-art/art-installation-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Art Installation</Link>
                <Link href="/services/fine-art/fragile-item-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Fragile Items</Link>
                <Link href="/services/fine-art/gallery-exhibit-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Gallery Exhibits</Link>
                <Link href="/services/fine-art/antique-artifacts-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Antique Artifacts</Link>
                <Link href="/services/fine-art/rare-collectibles-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Rare Collectibles</Link>
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
