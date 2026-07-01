import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/fine-art-shipping-austin'

export function generateMetadata(): Metadata {
  const entry = getEntry(SLUG)
  return {
    title: entry?.title,
    description: entry?.description,
    alternates: { canonical: `https://austincrate.com${SLUG}` },
    openGraph: {
      type: 'article',
      title: entry?.title,
      description: entry?.description,
      url: `https://austincrate.com${SLUG}`,
      publishedTime: entry?.publishDate,
      modifiedTime: entry?.modifiedDate,
    },
    keywords: [
      'fine art shipping Austin TX',
      'how to ship fine art Austin',
      'art crating Austin Texas',
      'painting shipping Austin',
      'gallery shipping Austin',
      'fine art transport Austin',
    ],
  }
}

export default function FineArtShippingAustin() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fine Art Shipping in Austin, TX: The Complete 2026 Guide',
    description:
      'How to ship fine art in Austin, Texas — crating methods, insurance, carrier selection, climate concerns, and real costs from Austin Crate & Freight.',
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    author: {
      '@type': 'Person',
      name: 'Peter Hall',
      url: 'https://austincrate.com/authors/peter-hall',
      jobTitle: 'Owner & Master Crate Builder',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Austin Crate & Freight',
      url: 'https://austincrate.com',
    },
    mainEntityOfPage: `https://austincrate.com${SLUG}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does fine art shipping cost in Austin, TX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fine art shipping costs in Austin depend on the size, value, and destination of the piece. Local Austin-area art deliveries start around $200–$500. Custom crating adds $150–$800 depending on dimensions. Cross-country shipments typically run $600–$3,000 including crating. Call (512) 240-9818 for a free quote on your specific piece.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a custom crate to ship a painting in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For any painting over 24×36 inches, valued over $500, or going via freight (not local delivery), a custom wood crate is strongly recommended. Cardboard tubes and standard boxes provide no rigid protection against compression, which is the primary cause of canvas damage on loading docks. A crate built to the painting\'s exact dimensions is the only way to guarantee rigid protection.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can standard carriers like FedEx ship fine art?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard parcel carriers will accept art shipments, but claims for damage are routinely denied when the packaging is deemed "inadequate" — and inadequate is defined by the carrier after the fact. For any piece worth more than $500, specialty freight or white-glove transport is the appropriate choice. Standard carriers do not use climate-controlled vehicles, do not have trained art handlers, and put packages through automated sort facilities that can exceed 200 lbs of compression force.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Austin\'s heat affect art shipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Austin regularly exceeds 100°F in summer. Extreme heat causes oil paint to soften and shift, acrylic mediums to become tacky, canvas to loosen or buckle, adhesives in framed work to fail, and temperature-sensitive coatings to cloud or crack. For any art shipment in Austin between May and October, climate-controlled transport is not optional — it is the standard of care.',
        },
      },
      {
        '@type': 'Question',
        name: 'What galleries and museums do you serve in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve galleries, collectors, and institutions throughout Austin including the South Congress gallery district, West Austin art spaces, Hyde Park collections, and work involving the Blanton Museum area and The Contemporary Austin. We handle exhibition loan transport, gallery rotation logistics, estate collection moves, and individual collector shipments across Central Texas and nationwide.',
        },
      },
    ],
  }

  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-grey-50 flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <Navigation />

        {/* Hero */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-emerald hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fine Art Shipping in Austin, TX: The Complete 2026 Guide
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              Crating methods, climate protection, insurance, carrier selection, and real costs — everything Austin collectors and galleries need to know before art leaves the wall.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 July 1, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/authors/peter-hall" className="text-emerald hover:underline">
                  Peter Hall
                </Link>
              </span>
              <span>🖼️ Fine Art Shipping</span>
              <span>⏱️ 8 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              Austin has a serious art scene — from the galleries along South Congress to private collections in Westlake and the Hill Country estates outside Dripping Springs. And with that comes a real need to move art carefully, whether it is a collector rotating pieces, a gallery shipping to a fair, or an estate that needs to get a grandfather's paintings to family across the country. This guide covers everything you need to know about fine art shipping in Austin in 2026.
            </p>

            <h2>Why Fine Art Shipping Is Different from Regular Freight</h2>
            <p>
              The word "freight" suggests bulk, volume, and efficiency. Fine art is the opposite — it is about individual attention, controlled conditions, and zero tolerance for damage. The gap between standard freight and proper art shipping is not a matter of degree; it is a different category of service entirely.
            </p>
            <p>What distinguishes proper fine art shipping:</p>
            <ul>
              <li><strong>Custom crating</strong>, not cardboard or pallet wrap</li>
              <li><strong>Climate-controlled transport</strong>, not standard van or box truck</li>
              <li><strong>Trained art handlers</strong>, not general freight workers</li>
              <li><strong>Condition documentation</strong> before and after transit</li>
              <li><strong>Declared value insurance</strong> with a carrier that understands art valuation</li>
            </ul>
            <p>
              Skip any of these and you are gambling with something irreplaceable. In Austin, where summer temperatures routinely exceed 100°F, the climate piece alone eliminates most standard shipping options.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">🖼️ Fine Art Shipping Non-Negotiables (Austin, TX)</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ <strong>Climate-controlled vehicle</strong> — critical May through October in Austin</li>
                <li>✅ <strong>Custom wood crate</strong> for any piece over 24×36" or valued over $500</li>
                <li>✅ <strong>Photo documentation</strong> of condition before crating</li>
                <li>✅ <strong>Declared value insurance</strong> — not per-pound coverage</li>
                <li>✅ <strong>Specialist freight</strong> — not UPS, FedEx, or standard LTL</li>
                <li>⬜ <strong>Never use stretch wrap directly</strong> on painted or lacquered surfaces</li>
              </ul>
            </div>

            <h2>Austin's Climate Problem for Art</h2>
            <p>
              Central Texas summers are brutal for artwork. The heat is obvious, but the real danger is the combination of heat and the rapid temperature changes as you move between climate-controlled interiors and outdoor loading areas. Oil paint softens at high temperatures. Canvas and linen supports expand and contract unevenly. Acrylic mediums become tacky. Wood frames and stretchers shift.
            </p>
            <p>
              Art that survives a studio in Austin for years can be damaged in forty-five minutes in the back of an unconditioned truck during a July pickup. We see this consistently — especially from customers who tried a standard mover first and are now dealing with the aftermath.
            </p>
            <p>
              For all fine art shipments in Austin between May and October, climate-controlled transport is the standard of care, not an upgrade. Our vehicles maintain 68–72°F regardless of outside temperature. We also pre-cool before loading and schedule pickups in the early morning when possible to minimize thermal stress on the piece.
            </p>

            <h2>Crating Fine Art: What It Actually Involves</h2>
            <p>
              "Custom crating" is a phrase that gets thrown around loosely. Here is what it actually means when we do it:
            </p>

            <h3>Assessment</h3>
            <p>
              Before we build anything, we assess the piece — dimensions, medium, frame construction, any pre-existing fragility (loose canvas, cracked gesso, restored areas, fragile glazing). These inform how the crate is built and where the interior blocking goes.
            </p>

            <h3>Panel Cutting</h3>
            <p>
              We run every panel through our{' '}
              <Link href="/blog/safety-speed-6400-panel-saw" className="text-emerald-600 hover:underline">
                Safety Speed 6400 vertical panel saw
              </Link>{' '}
              — precision cuts to within 1/32" of the piece's outer dimensions plus clearance for interior foam. No gaps, no slop. The crate fits the artwork the way a case fits a watch.
            </p>

            <h3>Interior Blocking</h3>
            <p>
              The painting floats inside the crate on closed-cell polyethylene foam. The face is never in contact with any hard surface. Corners — the most vulnerable point on any framed piece — get individual foam corners. For works on panel or heavy canvas, we add a face frame inside the crate that prevents any flexion of the support.
            </p>

            <h3>Screw Closure</h3>
            <p>
              Crate lids are screw-closed, not nailed. This matters at delivery: the recipient or their art handler can open the crate without tools and without risking a pry bar next to a canvas. It also means the crate can be reused if the piece needs to return.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Shipping Art from Austin? Get a Quote Today.</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> or request a quote online. We will assess your piece, recommend the right crating approach, and give you an honest price before anything moves.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>

            <h2>Carrier Selection: Who Actually Should Ship Fine Art</h2>
            <p>
              There are essentially four tiers of carrier for fine art, and only two of them are appropriate for valuable pieces:
            </p>

            <h3>Standard Parcel (UPS, FedEx, USPS) — Avoid for Valuable Art</h3>
            <p>
              Standard parcel networks use automated sorting facilities. Packages travel on conveyor belts, through chutes and rollers, and are sorted by machines that cannot distinguish a $15,000 painting from a box of hardware. Compression forces in these systems can exceed 200 lbs. Damage claims are routinely denied on grounds of "inadequate packaging."
            </p>

            <h3>Standard LTL Freight — Use with Caution</h3>
            <p>
              LTL freight is better than parcel for large works, but shipments are loaded and unloaded multiple times at distribution hubs. Palletized freight also gets stacked. A crate is mandatory, and you must declare full value at booking. Even then, LTL damage claims have a poor resolution rate for art.
            </p>

            <h3>Specialty / White-Glove Freight — Correct for Valuable Art</h3>
            <p>
              Specialty freight uses trained handlers, non-automated loading, and often dedicated trucks for art shipments. The piece does not share a terminal with general freight. This is the appropriate service level for any piece over $2,000 or any work that is irreplaceable.
            </p>

            <h3>Dedicated Art Transport — For High-Value Institutional Work</h3>
            <p>
              For museum loans, very high-value works ($50,000+), or international shipments, dedicated art transport with a courier is the standard. We coordinate this tier for clients when appropriate.
            </p>

            <h2>Insurance for Art Shipments: What You Actually Have</h2>
            <p>
              Most people significantly overestimate their insurance coverage for art in transit. Here is the reality:
            </p>
            <ul>
              <li><strong>Standard parcel carrier declared value:</strong> Usually capped at $100 default, with per-pound rates for additional coverage. For a 40 lb painting, additional coverage might pay $80–$160. Not the $8,000 the painting is worth.</li>
              <li><strong>LTL freight declared value:</strong> Better, but still requires you to pay for additional coverage at booking, and the claim process is adversarial.</li>
              <li><strong>Homeowners insurance:</strong> Most standard policies do not cover art in transit. Floater or rider policies might, but check the language before assuming.</li>
              <li><strong>Specialty transit insurance:</strong> The correct solution for valuable art. Single-shipment policies typically run 1–3% of declared value. For a $10,000 painting, that is $100–$300 for full transit coverage.</li>
            </ul>
            <p>
              We work with clients on insurance options before every high-value shipment. Don't assume you are covered — confirm it.
            </p>

            <h2>Fine Art Shipping Costs in Austin: What to Expect</h2>
            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">💰 Fine Art Shipping Cost Estimates (Austin, TX — 2026)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-grey-700">
                  <thead>
                    <tr className="border-b border-grey-300">
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Service</th>
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Local Austin</th>
                      <th className="text-left py-2 font-bold text-grey-900">Interstate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Small framed work (under 24×36")</td>
                      <td className="py-2 pr-4">$150–$300</td>
                      <td className="py-2">$400–$900</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Medium painting + custom crate</td>
                      <td className="py-2 pr-4">$250–$500</td>
                      <td className="py-2">$700–$1,800</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Large canvas (48"+ / oversized)</td>
                      <td className="py-2 pr-4">$400–$800</td>
                      <td className="py-2">$1,200–$3,500</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Sculpture — custom cradle + crate</td>
                      <td className="py-2 pr-4">$350–$900</td>
                      <td className="py-2">$900–$4,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-grey-500 text-xs mt-3">Estimates only. Final pricing depends on dimensions, fragility, and destination. Call (512) 240-9818 for an exact quote.</p>
            </div>

            <h2>Gallery, Exhibition, and Estate Shipping in Austin</h2>
            <p>
              Beyond individual collectors, we handle three common commercial scenarios in Austin:
            </p>

            <h3>Gallery Rotations and Exhibition Shipping</h3>
            <p>
              Austin has an active gallery scene. Shows rotate frequently, and works need to move between venues, collectors, and storage with professional documentation and handling. We work with Austin galleries on exhibition logistics — scheduled pickups and deliveries, condition reports, and the precise timing that gallery openings require. Our{' '}
              <Link href="/services/fine-art/gallery-exhibit-shipping" className="text-emerald-600 hover:underline">
                gallery exhibit shipping service
              </Link>{' '}
              covers full show logistics for venues of any size.
            </p>

            <h3>Estate and Collection Moves</h3>
            <p>
              We regularly handle estate art collections — often dozens of pieces of varying sizes, condition, and value that need to be inventoried, crated, and shipped to multiple destinations. These jobs require organization, care, and the ability to adapt to what the collection contains. We assess each piece individually and crate accordingly.
            </p>

            <h3>Art Fair Shipping (Austin, Houston, Dallas)</h3>
            <p>
              Texas has active art fairs in Austin, Houston, and Dallas. Transporting work to and from fairs involves tight deadlines, specific crate labeling requirements, and often multiple pickups from multiple galleries. We have coordinated art fair transport across the Texas Triangle and understand the logistics involved.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>How much does fine art shipping cost in Austin, TX?</h3>
            <p>
              Local Austin art deliveries start around $200–$500. Custom crating adds $150–$800 depending on dimensions. Cross-country shipments typically run $600–$3,000 including crating. Call (512) 240-9818 for a free quote on your specific piece.
            </p>

            <h3>Do I need a custom crate to ship a painting in Austin?</h3>
            <p>
              For any painting over 24×36", valued over $500, or going via freight, a custom wood crate is strongly recommended. Cardboard provides no rigid protection against compression. A crate built to the painting's exact dimensions is the only way to guarantee rigid side-to-side and face protection.
            </p>

            <h3>Can standard carriers like FedEx ship fine art?</h3>
            <p>
              Standard parcel carriers will accept art shipments, but claims for damage are routinely denied when packaging is deemed "inadequate." For any piece worth more than $500, specialty freight or white-glove transport is the appropriate choice.
            </p>

            <h3>How does Austin's heat affect art shipping?</h3>
            <p>
              Austin regularly exceeds 100°F in summer. Heat causes oil paint to soften, acrylic mediums to become tacky, canvas to buckle, and adhesives in framed work to fail. For any art shipment in Austin between May and October, climate-controlled transport is not optional.
            </p>

            <h3>What galleries and museums do you serve in Austin?</h3>
            <p>
              We serve galleries and collectors throughout Austin — South Congress galleries, West Austin art spaces, Hyde Park collections, and work involving institutions near the Blanton Museum and The Contemporary Austin. We handle exhibition loan transport, gallery rotation logistics, estate moves, and individual collector shipments across Central Texas and nationwide.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Ready to Ship Your Art Safely?</p>
              <p className="text-grey-700 mb-4">
                We specialize in fine art crating and shipping throughout Austin and Central Texas. Call <strong>(512) 240-9818</strong> or request a quote online.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>
          </article>
        </section>

        {/* Related Services */}
        <section className="py-12 px-4 bg-grey-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-grey-900">Our Fine Art Shipping Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link href="/services/fine-art" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Fine Art Shipping Austin</h3>
                <p className="text-grey-600 text-sm">Museum-quality crating, climate-controlled transport, and white-glove delivery for all fine art.</p>
              </Link>
              <Link href="/services/fine-art/painting-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Painting Shipping</h3>
                <p className="text-grey-600 text-sm">Canvas, framed art, oil paintings, and watercolors. Acid-free crating with face frame protection.</p>
              </Link>
              <Link href="/services/fine-art/sculpture-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Sculpture Shipping</h3>
                <p className="text-grey-600 text-sm">Bronze, stone, ceramic, and glass sculpture with custom cradles and vibration isolation.</p>
              </Link>
              <Link href="/services/fine-art/gallery-exhibit-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Gallery & Exhibit Shipping</h3>
                <p className="text-grey-600 text-sm">Full show logistics for Austin galleries and art fair transport across Texas.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-grey-900">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/what-is-white-glove-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">What Is White-Glove Shipping? (And Is It Worth It?)</h3>
                <p className="text-grey-600 text-sm">What the premium service actually includes and when it makes sense for your piece.</p>
              </Link>
              <Link href="/blog/antique-shipping-guide" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-grey-600 text-sm">Insurance, crating, and carrier selection before an antique or heirloom moves.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Custom Crating vs. Standard Boxes</h3>
                <p className="text-grey-600 text-sm">When a wood crate is the only safe option — and when standard packaging will do.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
