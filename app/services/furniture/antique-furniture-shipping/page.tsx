import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import Breadcrumbs from '@/app/components/Breadcrumbs'
import ServicesGrid from '@/app/components/ServicesGrid'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateServiceMetadata, generateServiceSchema, SITE_CONFIG } from '@/lib/seo-utils'
import SEOWrapper from '@/app/components/SEOWrapper'

const SLUG = '/services/furniture/antique-furniture-shipping'

export function generateMetadata(): Metadata {
  return generateServiceMetadata({
    serviceName: 'Antique Furniture Shipping Across Texas | Austin Crate & Freight',
    description: 'Expert antique furniture shipping across Texas. Custom crating, padded blanket wrap, and white-glove delivery for Victorian, Mid-Century, French Provincial, and all antique styles. Call (512) 240-9818.',
    keywords: [
      'antique furniture shipping Texas',
      'ship antique furniture Texas',
      'antique furniture transport Texas',
      'antique furniture crating Austin TX',
      'vintage furniture shipping Texas',
      'antique furniture delivery Texas',
      'ship antique furniture Austin Texas',
      'antique furniture moving Texas',
    ],
    serviceUrl: SLUG,
  })
}

export default function AntiqueFurnitureShipping() {
  const serviceSchema = generateServiceSchema({
    serviceName: 'Antique Furniture Shipping Across Texas',
    description: 'Expert antique furniture shipping and custom crating across Texas, Victorian, French Provincial, Mid-Century Modern, and all antique styles handled with museum-quality care.',
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
              ← Custom Furniture Shipping
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-grey-700 bg-grey-800/50 mb-6 ml-4">
              <span className="text-xs font-medium text-grey-300 uppercase tracking-widest">Antique Specialists · Texas-Wide Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Antique Furniture Shipping Across Texas</h1>
            <p className="text-xl text-grey-300 mb-8 max-w-3xl">
              Antique furniture carries value that cannot be replaced, financial, historical, and personal. Austin Crate &amp; Freight ships antique pieces across Texas using custom crating, padded blanket wrap, climate-aware packaging, and white-glove handling at every step.
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

        {/* Why Antique Furniture is Different */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Antique Furniture Requires a Different Approach</h2>
            <p className="text-gray-700 text-lg mb-4">
              Antique furniture is not just old, it is structurally different from modern furniture. Joints are held with animal-hide glue that becomes brittle over time. Veneer is thin and adhered with period-appropriate methods that do not tolerate moisture or vibration. Finishes have accumulated patina that cannot be replicated if damaged. A scratch on a 200-year-old secretary desk does not sell as &quot;distressed&quot;, it devalues the piece and breaks a chain of preservation.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Standard shipping methods, cardboard boxes, moving blankets thrown in a truck, plastic wrap against the finish, are not adequate for pieces worth hundreds to tens of thousands of dollars. The risk is not just damage in transit; it is the wrong packaging material degrading the finish before the piece even arrives.
            </p>
            <p className="text-gray-700 text-lg">
              We use acid-free tissue paper against all finished surfaces, padded blanket wrap for secondary protection, and custom wood crates for pieces requiring hard-shell protection. Every decision is made with the specific piece in mind, not a generic protocol applied to all furniture regardless of age or value.
            </p>
          </div>
        </section>

        {/* Our Shipping Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our White-Glove Antique Furniture Shipping Process</h2>
            <p className="text-gray-600 mb-8">Every antique shipment follows a hands-on process developed over years of handling irreplaceable pieces.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Condition Assessment Before Pickup', desc: 'We photograph and document the piece before it leaves the origin, noting any pre-existing wear, repairs, or fragile areas. This protects both you and us and establishes a baseline for insurance purposes.' },
                { title: 'Acid-Free Material Contact Layer', desc: 'Acid-free tissue paper is applied directly to all finished surfaces before any other material touches the piece. Never plastic wrap directly on lacquer, shellac, or wax finishes, moisture traps and adhesives damage period finishes.' },
                { title: 'Padded Blanket Wrap', desc: 'Thick padded moving blankets are applied over the tissue layer. Blankets are secured with stretch wrap only on the outer layer, not against the wood. For complex pieces with legs, arms, or projections, each element is padded individually.' },
                { title: 'Custom Crating When Required', desc: 'Particularly fragile, high-value, or long-distance shipments warrant a wood crate. We build the crate around the wrapped piece, adding internal blocking to prevent movement and external corner protectors to handle dock contact.' },
                { title: 'Climate-Aware Packaging Options', desc: 'For humid or temperature-variable routes across Texas, we can add moisture-barrier wrapping. Wood and veneer are sensitive to rapid humidity changes, proper packaging prevents wood movement and veneer lifting.' },
                { title: 'White-Glove Delivery & Placement', desc: 'At destination, we unwrap the piece while you are present. We will not leave until you have inspected the furniture and confirmed it arrived in the same condition it left. We document the delivery with photos as well.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Antique Styles We Ship */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Antique &amp; Vintage Furniture Styles We Specialize In</h2>
            <p className="text-gray-600 mb-8">Each period and style has specific vulnerabilities. We handle all of the following with appropriate care protocols.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Victorian & Edwardian (1837–1910), Ornate carvings, velvet upholstery',
                'French Provincial & Louis XV/XVI, Carved gilt frames, delicate legs',
                'American Federal & Empire (1780–1840), Mahogany veneer, brass hardware',
                'Arts & Crafts / Mission Style (1880–1920), Quarter-sawn oak, mortise joints',
                'Art Deco (1920s–1930s), Lacquered finishes, exotic wood veneers',
                'Mid-Century Modern (1950s–1960s), Teak, walnut, hairpin legs',
                'Rustic & Texas Primitive, Reclaimed wood, hand-wrought iron',
                'Asian Antiques, Lacquerwork, inlay panels, hand-painted surfaces',
                'European Armoires, Secretaries & Highboys (pre-1900)',
                'Antique Dining Tables & Matching Chair Sets',
                'Vintage Credenzas, Sideboards & Buffets',
                'Antique Beds, Canopy, Sleigh & Four-Poster Frames',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <svg className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Texas Statewide Coverage */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Antique Furniture Shipping Across All of Texas</h2>
            <p className="text-gray-700 text-lg mb-4">
              Texas is one of the most active antique markets in the country. Roundtop Antiques, held twice yearly near La Grange, draws buyers from across the state and nation. Houston has dozens of antique galleries along Westheimer. San Antonio&apos;s King William Historic District has significant Victorian and Mission Revival furniture. Dallas-Fort Worth has established antique dealer communities in Design District and Highland Park. Austin itself has growing collector and gallery networks.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We ship from and to every corner of Texas, from El Paso to Beaumont, from Amarillo to Brownsville. We pick up at estate sales, antique markets, galleries, and private residences. Delivery goes wherever the buyer is: apartment, ranch, storage facility, or commercial gallery.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {[
                'Austin Metro', 'Houston', 'Dallas / Fort Worth', 'San Antonio',
                'Roundtop / La Grange', 'Waco', 'Fredericksburg', 'Boerne',
                'Lubbock', 'El Paso', 'Corpus Christi', 'Beaumont',
              ].map((city, i) => (
                <div key={i} className="text-center py-3 px-4 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance & Valuation */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurance &amp; Valuation for Antique Furniture Shipments</h2>
            <p className="text-gray-700 text-lg mb-4">
              Standard freight carriers default to a liability of $0.10–$0.25 per pound. A 200 lb Victorian sideboard worth $8,000 at auction would be covered for $20–$50 under default terms. That gap is not acceptable for irreplaceable antiques.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We recommend declared value coverage at the full appraised or insured value of the piece. Before shipping a high-value antique, have it appraised in writing if you do not already have documentation. An appraisal from a certified appraiser is the best protection you have in a claim.
            </p>
            <p className="text-gray-700 text-lg">
              We provide condition reports at pickup and delivery, photograph the piece in packaging before transport, and document the complete chain of handling. This documentation supports any claim and gives our clients the strongest possible position in a dispute.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions About Antique Furniture Shipping in Texas</h2>
            <div className="space-y-5">
              {[
                { q: 'How much does it cost to ship antique furniture across Texas?', a: 'Antique furniture shipping across Texas typically ranges from $300–$900 depending on the piece size, fragility, destination, and whether a custom crate is required. A single chair shipping from Austin to Houston might be $250–$400; a large armoire requiring a custom crate shipping to Dallas might be $600–$1,200. Call us for an exact quote.' },
                { q: 'Is it safe to ship antique furniture without a crate?', a: 'For many antiques, padded blanket wrap in a dedicated specialty freight vehicle is safe. For pieces over $3,000 in value, with very fragile veneer or surface finish, or for long-distance Texas or out-of-state routes, a custom crate provides significantly better protection. We will make an honest recommendation based on the specific piece.' },
                { q: 'Can you pick up from estate sales, auctions, or antique markets?', a: 'Yes. We regularly pick up antique furniture from estate sales, auction houses, and antique markets including the Roundtop Antiques show. We can coordinate pickup to coincide with the end of an event or auction. Call us in advance to schedule, Roundtop pickups in particular book up quickly around show dates.' },
                { q: 'What should I tell you when requesting a quote?', a: 'The most helpful information is: the piece description (type, approximate age, dimensions, weight if known), origin city/zip, destination city/zip, and any known fragility issues (veneer damage, gilt that chips, structural repairs). Photos are also very helpful, you can email or text them to us.' },
                { q: 'Do you ship antique furniture out of Texas to other states?', a: 'Yes. We ship antique furniture across the US. For out-of-state shipments, we typically use LTL freight with a custom crate, which provides the safest combination of protection and cost for long-distance moves. Transit time varies by destination, typically 5–10 business days for cross-country delivery.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <ServicesGrid title="More Furniture & Specialty Shipping Services" showSubLinks exclude={['/services/furniture']} />

        {/* CTA */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get an Antique Furniture Shipping Quote</h2>
            <p className="text-grey-300 text-lg mb-8">Tell us what you have, where it needs to go, and any known concerns about the piece. We will come back with a fair quote and an honest recommendation on the best packaging approach.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald rounded-lg font-semibold text-white hover:bg-emerald/90 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-grey-600 rounded-lg font-semibold text-grey-200 hover:bg-grey-800 transition">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-grey-400">
              <Link href="/services/furniture/antique-heirloom-furniture" className="hover:text-emerald transition">Heirloom Furniture Crating →</Link>
              <Link href="/services/fine-art" className="hover:text-emerald transition">Fine Art Shipping →</Link>
              <Link href="/services/furniture" className="hover:text-emerald transition">All Furniture Shipping →</Link>
              <Link href="/buy-a-crate" className="hover:text-emerald transition">Buy a Custom Crate →</Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
