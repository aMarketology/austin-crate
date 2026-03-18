import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/fine-art/painting-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Painting Shipping & Crating Austin Texas — Canvas & Framed Art',
    description: 'Expert painting shipping in Austin, Texas. Canvas and framed artwork crated in custom wood boxes with acid-free tissue, glazing protection, and full-value coverage. Galleries, collectors & estates. Call (512) 240-9818.',
    keywords: [
      'painting shipping Austin TX',
      'framed art shipping Austin Texas',
      'canvas painting crating Austin',
      'ship paintings Austin Texas',
      'art shipping Austin TX',
      'fine art shipping Austin',
      'oil painting transport Austin',
      'artwork crating Austin Texas',
    ],
    serviceUrl: SLUG,
  })
}

export default function PaintingShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Painting Shipping & Crating Austin Texas',
    description: 'Expert crating and white-glove shipping for canvas and framed paintings in Austin, TX — acid-free materials, glazing protection, custom wood crates.',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Painting Shipping &amp; Crating in Austin, Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Whether you are shipping an oil painting across Texas or a framed watercolor across the country, Austin Crate &amp; Freight builds custom crates with acid-free materials, glazing protection, and foam suspension — the same methods used by galleries and museums.
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

        {/* Why Paintings Need Specialist Crating */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Paintings Require Specialist Crating</h2>
            <p className="text-gray-700 text-lg mb-4">
              Paintings fail in transit for predictable reasons — none of which have anything to do with the carrier driving recklessly. Canvas stretches and relaxes with humidity; a painting crated without moisture control arrives with canvas slack or drum-tight. Glazing (glass or acrylic) that is not isolated from the frame can vibrate its way to a crack. Oil paint and varnish from different eras respond differently to temperature swings; an antique painting shipped in summer heat can develop cracks invisible until weeks later.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Framed paintings have additional vulnerabilities. Ornate gilt frames are exactly as fragile as they look — a small corner impact chips the gesso and tears the gilded surface. We wrap each frame corner individually with foam before any other material touches the piece. The painting face is never covered with material that traps condensation, and the back of the canvas is never compressed.
            </p>
            <p className="text-gray-700 text-lg">
              Our crating process eliminates these failure points at every step — from the material we place first against the surface to the structural engineering of the wood crate that carries it.
            </p>
          </div>
        </section>

        {/* Our Crating Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How We Crate Paintings for Shipping</h2>
            <p className="text-gray-600 mb-8">Every painting goes through the same materials protocol regardless of size or price — because the failure modes are identical for a $500 print and a $50,000 oil.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Glazing Protection First', desc: 'Glass or acrylic glazing is taped with blue painter\'s tape in a cross pattern to contain any crack that occurs in transit. If the glazing breaks, it stays in place rather than damaging the canvas or surface beneath.' },
                { title: 'Acid-Free Tissue Contact Layer', desc: 'Acid-free glassine or tissue is placed directly against the painting face. Never plastic wrap, bubble wrap, or foam — all of which can adhere to paint layers or trap moisture against the surface.' },
                { title: 'Frame Corner Padding', desc: 'Each frame corner is individually wrapped in PE foam before the painting is enclosed. Corner impact is the most common cause of gilt frame damage and we prevent it specifically.' },
                { title: 'Foam Suspension Inside the Crate', desc: 'The wrapped painting sits inside a wood crate on foam blocks spaced to absorb shock without creating pressure points. The painting floats rather than resting against a hard crate wall.' },
                { title: 'Humidity & Temperature Buffer', desc: 'For high-value or antique works, we add a moisture-buffering silica gel layer inside the enclosure. This stabilizes the microclimate inside the crate for shipments through Texas heat or humid Gulf Coast routes.' },
                { title: 'Custom Crate Sizing', desc: 'Crates are built to the painting\'s dimensions — not to a standard box size. An oversized canvas gets a crate that fits it precisely, not one with 4 inches of loose space on each side.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Paintings */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Painting Types We Crate &amp; Ship</h2>
            <p className="text-gray-600 mb-8">Each medium and format has specific vulnerabilities. Our materials protocol is adapted to each.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Oil Paintings — Canvas & Board (All Periods)',
                'Watercolors & Works on Paper',
                'Acrylic & Mixed Media on Canvas',
                'Large-Format & Oversized Canvases (6\'+ dimensions)',
                'Framed Prints & Photography (Museum Glass)',
                'Gilt & Ornate Frame Paintings',
                'Antique & Old Master Paintings',
                'Unframed Rolled Canvas',
                'Pastel & Charcoal on Paper',
                'Encaustic (Wax) Paintings',
                'Gallery Wall Collections (Multi-Piece)',
                'Artist Estate Inventory',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Hires Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Ship Paintings For in Austin</h2>
            <p className="text-gray-700 text-lg mb-4">
              Austin has a growing art market — galleries along South Congress, collector communities in Tarrytown and Westlake, and an active artist community that ships work to galleries, buyers, and exhibitions nationally. We work with all segments of the Austin art world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { title: 'Private Collectors', desc: 'Buying or selling a painting at auction, through a dealer, or privately. We pick up from residences, galleries, and auction houses. White-glove from wall to wall.' },
                { title: 'Austin Galleries', desc: 'Gallery directors managing loan exhibitions, consignment transfers, and collector deliveries. We provide consistent crating standards and documentation on every shipment.' },
                { title: 'Artists & Estates', desc: 'Artists shipping work to galleries, fairs, or exhibitions. Estate executors processing collections. We offer volume pricing for multiple-piece shipments.' },
              ].map((c, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
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
                { q: 'How much does it cost to ship a painting in Austin?', a: 'Crating a painting in Austin typically runs $100–$400 depending on size and framing complexity. A small framed print might be $80–$150; a large ornate gilt-frame oil painting might be $300–$600. Freight is separate and priced by destination and dimensions. Call us for a fast quote.' },
                { q: 'Can you ship an unframed rolled canvas?', a: 'Yes. Rolled canvas is shipped in a rigid tube with foam end caps, inner foam liner, and an outer wood or heavy cardboard crate. We do not roll canvases with existing cracks or very thick paint application — if that applies to your piece, we will advise on flat crating instead.' },
                { q: 'Do paintings need climate control during shipping?', a: 'Most Texas shipments do not require a climate-controlled truck if the transit time is short (1–3 days) and the painting is properly crated. Very old, delicate, or high-value works may warrant climate-controlled freight for longer routes. We assess each piece and recommend accordingly.' },
                { q: 'Can you pick up from an Austin gallery or auction house?', a: 'Yes. We pick up from galleries, auction houses, moving sales, storage facilities, and private residences throughout the Austin metro. Call us with the address and we will schedule pickup — usually within 1–3 business days.' },
                { q: 'Do you provide condition reports for insurance purposes?', a: 'Yes. We photograph the painting at pickup and document any pre-existing condition issues before crating. This serves as a baseline for insurance claims and gives you documentation of the piece\'s condition at the time of shipment.' },
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
            <h2 className="text-3xl font-bold mb-4">Ship Your Painting Safely from Austin</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us the painting dimensions, framing, and destination. We will come back with a crating approach and fair quote.</p>
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
                <Link href="/services/fine-art/sculpture-shipping" className="px-3 py-1 border border-grey-700 rounded-full text-grey-300 hover:text-emerald hover:border-emerald/50 transition-colors">Sculpture Shipping</Link>
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
