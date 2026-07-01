import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/antique-shipping-guide'

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
      'antique shipping guide',
      'how to ship antiques safely',
      'antique furniture shipping Texas',
      'shipping heirlooms',
      'antique crating Austin TX',
      'how to pack antiques for shipping',
    ],
  }
}

export default function AntiqueShippingGuide() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Antique Shipping Guide: How to Protect Heirlooms in Transit',
    description:
      'Everything you need to know before shipping an antique — insurance, crating methods, what carriers to avoid, and how to document your piece before it moves.',
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-06-24',
    dateModified: '2026-06-24',
    author: {
      '@type': 'Person',
      name: 'Max DeLeonardis',
      url: 'https://austincrate.com/authors/max-deleonardis',
      jobTitle: 'Marketing Manager',
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
        name: 'Can I ship antiques with standard carriers like UPS or FedEx?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Technically yes, but we strongly advise against it for valuable antiques. Standard parcel carriers use automated sorting equipment that can exert hundreds of pounds of force on packages. Antiques with dried glue joints, veneer, hand-applied finishes, or delicate legs are at high risk. For antiques over $500 in value, specialty freight or white-glove shipping is the appropriate choice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does homeowners insurance cover antiques during shipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard homeowners policies typically do not cover items in transit. Some high-value item riders or floater policies will cover in-transit losses, but you need to check your policy language carefully. Declared-value coverage through a freight carrier covers a per-pound rate, not the actual value of the antique. For high-value pieces, a standalone fine art and antiques transit insurance policy is worth the cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get an antique appraised before shipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For insurance purposes, you want a written appraisal from an accredited appraiser — look for ASA (American Society of Appraisers) or AAA (Appraisers Association of America) credentials. For estate pieces or auction purchases, auction house estimates also serve as documentation. Get the appraisal before the piece moves.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the safest way to ship antique furniture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The safest method for antique furniture is custom wood crating with interior foam blocking tailored to the specific piece, followed by specialist freight handling (not standard LTL palletized freight). The crate should be built to the exact dimensions of the piece with no internal movement possible. Climate-controlled transit is recommended for lacquered or veneered surfaces on cross-country moves.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to ship an antique piece of furniture?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For antique furniture shipped within Texas, costs typically run $300–$900 depending on size and crating complexity. Interstate antique furniture shipments (Austin to New York, for example) generally run $600–$2,500 including custom crating. The crating cost itself — which is the critical part — is usually $150–$500 for most antique furniture pieces.',
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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-emerald hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Antique Shipping Guide: How to Protect Heirlooms in Transit
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              Insurance, crating, documentation, and the carriers to avoid — everything you need to know before an antique leaves your hands.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 June 24, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/authors/max-deleonardis" className="text-emerald hover:underline">
                  Max DeLeonardis
                </Link>
              </span>
              <span>🪑 Shipping Guide</span>
              <span>⏱️ 8 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              Antiques are different from regular furniture in every way that matters for shipping — dried glue joints, aged veneer, original hardware, irreplaceable patina, and a value that is not reflected in any store catalog. A scratch that costs $40 to fix on a modern piece can require a $2,000 conservation treatment on an 18th century cabinet. This guide covers everything you need to do before an antique moves, so it arrives exactly the way it left.
            </p>

            <h2>The Core Rule: Treat Every Antique as Irreplaceable</h2>
            <p>
              Modern furniture can be replaced. Antiques cannot, at least not in the way we mean when we say &ldquo;replace.&rdquo; A damaged 1920s secretary desk can be repaired, but the repair changes it. The original finish is gone. The piece&apos;s provenance — the thing that gives it value — is diminished. Every shipping decision should be made from this starting point.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">🪑 Antique Shipping: The Non-Negotiables</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ <strong>Custom wood crating</strong> — not moving blankets, not cardboard</li>
                <li>✅ <strong>Written appraisal or documented value</strong> before the piece moves</li>
                <li>✅ <strong>Photo documentation</strong> of all surfaces, joints, and existing condition</li>
                <li>✅ <strong>Specialty freight or white-glove carrier</strong> — not standard LTL</li>
                <li>✅ <strong>Declared value or standalone transit insurance</strong></li>
                <li>⬜ <strong>Never ship antiques in standard parcel service</strong> (UPS Ground, FedEx Ground)</li>
                <li>⬜ <strong>Never use cardboard boxes</strong> for any antique over 50 lbs</li>
              </ul>
            </div>

            <h2>Step 1: Appraise and Document Before It Moves</h2>
            <p>
              If you do not have a documented value for your antique, get one before it ships. This is not bureaucracy — it is the only way to have a legitimate insurance claim if something goes wrong. Carriers pay based on declared value (which you set at booking) or a per-pound rate (which is almost always far below actual value). Without documentation, you are fighting a carrier&apos;s claims adjuster with nothing in your hand.
            </p>

            <h3>What Documentation to Gather</h3>
            <ul>
              <li><strong>Written appraisal:</strong> From an accredited appraiser (ASA or AAA credentials). Most insurance carriers require this for items over $2,000.</li>
              <li><strong>Purchase receipts or auction records:</strong> Auction house estimates are acceptable documentation and often include provenance.</li>
              <li><strong>Previous insurance records:</strong> If the piece was covered under a prior home or collector policy, pull those records.</li>
              <li><strong>High-resolution photos:</strong> Photograph every face, all joints, all hardware, any markings or maker&apos;s stamps, and any pre-existing damage. Use natural light or a bright work lamp — phone cameras in good light work fine.</li>
            </ul>

            <h2>Step 2: Choose the Right Carrier Type</h2>
            <p>
              This is where most antique shipping mistakes are made. Carrier type matters as much as packaging.
            </p>

            <h3>Standard Parcel Carriers (UPS, FedEx, USPS) — Avoid for Antiques</h3>
            <p>
              Standard parcel carriers use automated conveyor sorting systems. Packages pass through chutes, rollers, and stackers. The per-piece impact statistics for these systems are not published, but the damage rates on fragile freight are well documented. An antique with 200-year-old dried glue joints, hand-cut dovetails, and a lacquer finish has no business going through an automated sort facility.
            </p>
            <p>
              In addition, standard parcel claims for antiques are routinely denied on grounds of inadequate packaging. Carriers assess &ldquo;adequacy&rdquo; after the fact, using their own standards — not yours.
            </p>

            <h3>Standard LTL Freight — Use with Caution</h3>
            <p>
              Less-than-truckload freight is better than parcel for large antiques, but it comes with risks. LTL shipments are loaded, unloaded, and reloaded multiple times at distribution terminals. The piece needs to be crated for this — a moving blanket wrap is not sufficient. If you use LTL freight for antiques, use a custom wood crate and declare the full value at booking.
            </p>

            <h3>Specialty / White-Glove Freight — The Right Choice</h3>
            <p>
              For valuable antiques, specialty freight or{' '}
              <Link href="/blog/what-is-white-glove-shipping" className="text-emerald-600 hover:underline">
                white-glove shipping
              </Link>{' '}
              is the correct service level. The piece is handled by trained specialists, not general freight handlers. It does not go through automated sort facilities. The same team that crates it handles the delivery. That continuity of care is what antiques require.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Shipping an Antique from Austin?</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> to describe your piece. We will recommend the right crating approach, give you a quote, and walk you through insurance options before anything moves.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>

            <h2>Step 3: Custom Crating for Antiques</h2>
            <p>
              A custom wood crate is the non-negotiable packaging solution for antique furniture. Here is what the crating process looks like for an antique piece:
            </p>

            <h3>Assessment</h3>
            <p>
              We examine the piece for fragile areas — thin legs, dried glue joints at mortise-and-tenon connections, veneer edges, glass panels, original hardware. These are the points where blocking needs to be precise. A crate that does not account for these areas can actually concentrate impact force at exactly the wrong place.
            </p>

            <h3>Dimension and Build</h3>
            <p>
              The crate is built to the exact outer dimensions of the piece, plus clearance for interior foam blocking. We cut the panels with a precision panel saw (our{' '}
              <Link href="/blog/safety-speed-6400-panel-saw" className="text-emerald-600 hover:underline">
                Safety Speed 6400
              </Link>{' '}
              handles this) and assemble with screws for consistent clamping force and rebuildability.
            </p>

            <h3>Interior Blocking</h3>
            <p>
              Closed-cell polyethylene foam is cut to create a cradle that holds the piece immobile inside the crate. Every contact point between the piece and the crate interior is padded. Legs are individually supported. Any projecting element — a finial, a carved pediment, a brass escutcheon — gets its own foam nest.
            </p>

            <h3>Documentation In-Crate</h3>
            <p>
              We photograph the piece loaded in the crate before the lid is attached. This gives you a complete photographic record: piece before crating, piece in crate, crate sealed. That chain of documentation is significant if you ever need to make a claim.
            </p>

            <h2>Step 4: Insurance for Antique Shipments</h2>
            <p>
              Shipping insurance for antiques is more complicated than standard freight coverage. Here are your options:
            </p>

            <h3>Carrier Declared Value</h3>
            <p>
              When you book freight, you can declare a value at the time of booking. This is not insurance — it is a contractual cap on the carrier&apos;s liability. For most carriers, declared value coverage runs $0.50–$2.00 per pound unless you purchase additional coverage at booking. On a 60-lb antique sideboard, that is $30–$120 in default coverage. The piece may be worth $8,000. Declare the full value and pay the additional coverage fee.
            </p>

            <h3>Fine Art and Antiques Transit Insurance</h3>
            <p>
              For high-value antiques (generally $5,000+), a standalone transit insurance policy is the appropriate solution. These policies cover the actual appraised value of the piece, including for mysterious disappearance and transit damage. Premiums typically run 1–3% of declared value for a single-shipment policy.
            </p>

            <h3>Homeowners or Collector Floater Policies</h3>
            <p>
              Some homeowners insurance policies include in-transit coverage for scheduled personal property. If you have a floater policy for antiques or fine art, review it before the piece ships. The policy may require notification before transit or have geographic exclusions.
            </p>

            <h2>Special Antique Types and Their Specific Risks</h2>

            <h3>Veneered Furniture</h3>
            <p>
              Veneer — thin decorative wood bonded to a substrate — is vulnerable to three things: moisture, impact, and temperature change. In transit, the primary risk is moisture from stretch wrap applied directly to the surface and temperature swings on un-climate-controlled freight. We always wrap veneered surfaces in acid-free tissue paper before foam contact, never plastic directly on the veneer.
            </p>

            <h3>Lacquered and Gilded Pieces</h3>
            <p>
              Asian lacquerware, gilded frames, and japanned pieces require zero abrasive contact with any surface. The finish is applied in layers that can flake and chip under even light friction. These pieces need foam cradles with no contact between the lacquered surface and any hard material — all contact is foam-to-foam.
            </p>

            <h3>Marble and Stone Inlay</h3>
            <p>
              Furniture with marble tops, pietra dura inlay, or stone inserts requires the stone to be removed and crated separately whenever possible. Stone has a significantly different thermal expansion rate than wood; in interstate moves with temperature variation, the differential movement can crack inlay or lift marble tops from their frames.
            </p>

            <h3>Clocks and Mechanical Pieces</h3>
            <p>
              Antique clocks with mechanical movements must have the pendulum removed and the movement immobilized before shipping. Movement damage from shipping vibration is common and expensive to repair. We always ask about clock pendulums, and if you forget to tell us, we will find it and secure it before the crate closes.
            </p>

            <h2>Antique Shipping Costs: What to Expect</h2>
            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">💰 Antique Shipping Cost Ranges (from Austin, TX)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-grey-700">
                  <thead>
                    <tr className="border-b border-grey-300">
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Piece Type</th>
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Within Texas</th>
                      <th className="text-left py-2 font-bold text-grey-900">Interstate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Small cabinet / side table</td>
                      <td className="py-2 pr-4">$250–$500</td>
                      <td className="py-2">$600–$1,200</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Antique dresser / armoire</td>
                      <td className="py-2 pr-4">$400–$800</td>
                      <td className="py-2">$900–$2,000</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Antique secretary desk</td>
                      <td className="py-2 pr-4">$350–$700</td>
                      <td className="py-2">$800–$1,800</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Antique dining table (+ chairs)</td>
                      <td className="py-2 pr-4">$500–$1,200</td>
                      <td className="py-2">$1,200–$3,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-grey-500 text-xs mt-3">Estimates include custom crating. Final pricing depends on dimensions, fragility, and destination. Call (512) 240-9818 for an exact quote.</p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Can I ship antiques with standard carriers like UPS or FedEx?</h3>
            <p>
              Technically yes, but we strongly advise against it for valuable antiques. Standard parcel carriers use automated sorting equipment that can exert hundreds of pounds of force on packages. Antiques with dried glue joints, veneer, hand-applied finishes, or delicate legs are at high risk. For antiques over $500 in value, specialty freight or white-glove shipping is the appropriate choice.
            </p>

            <h3>Does homeowners insurance cover antiques during shipping?</h3>
            <p>
              Standard homeowners policies typically do not cover items in transit. Some high-value item riders or floater policies will cover in-transit losses, but you need to check your policy language carefully. For high-value pieces, a standalone fine art and antiques transit insurance policy is worth the cost.
            </p>

            <h3>How do I get an antique appraised before shipping?</h3>
            <p>
              For insurance purposes, you want a written appraisal from an accredited appraiser — look for ASA (American Society of Appraisers) or AAA (Appraisers Association of America) credentials. For estate pieces or auction purchases, auction house estimates also serve as documentation. Get the appraisal before the piece moves.
            </p>

            <h3>What is the safest way to ship antique furniture?</h3>
            <p>
              The safest method is custom wood crating with interior foam blocking tailored to the specific piece, followed by specialist freight handling. The crate should be built to the exact dimensions of the piece with no internal movement possible. Climate-controlled transit is recommended for lacquered or veneered surfaces on cross-country moves.
            </p>

            <h3>How much does it cost to ship an antique piece of furniture?</h3>
            <p>
              For antique furniture shipped within Texas, costs typically run $300–$900 depending on size and crating complexity. Interstate antique furniture shipments generally run $600–$2,500 including custom crating. Call us at (512) 240-9818 for an exact quote on your specific piece.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Ready to Ship Your Antique Safely?</p>
              <p className="text-grey-700 mb-4">
                We specialize in antique furniture crating and shipping throughout Austin, Central Texas, and nationwide. Call <strong>(512) 240-9818</strong> or request a quote online.
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
            <h2 className="text-2xl font-bold mb-6 text-grey-900">Our Antique & Fine Art Shipping Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link href="/services/furniture/antique-furniture-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Antique Furniture Shipping</h3>
                <p className="text-grey-600 text-sm">Custom crating and specialist handling for antique furniture, period pieces, and high-value heirlooms.</p>
              </Link>
              <Link href="/services/furniture/antique-heirloom-furniture" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Heirloom Furniture Shipping</h3>
                <p className="text-grey-600 text-sm">Family heirlooms and estate pieces handled with the care and documentation they deserve.</p>
              </Link>
              <Link href="/services/fine-art" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Fine Art Shipping</h3>
                <p className="text-grey-600 text-sm">Paintings, sculpture, prints, and rare collectibles crated and shipped with museum-grade care.</p>
              </Link>
              <Link href="/services/fine-art/rare-collectibles-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Rare Collectibles Shipping</h3>
                <p className="text-grey-600 text-sm">Vintage items, rare collectibles, and one-of-a-kind pieces shipped with full documentation.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-grey-900">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/prepare-furniture-for-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">How to Prepare Furniture for Shipping (Step-by-Step)</h3>
                <p className="text-grey-600 text-sm">A practical checklist for getting furniture ready for pickup — what to do before we arrive.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Custom Crating vs. Standard Boxes: When You Need a Crate</h3>
                <p className="text-grey-600 text-sm">Understand when standard packaging is fine versus when a wood crate is the only safe option.</p>
              </Link>
              <Link href="/blog/what-is-white-glove-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">What Is White-Glove Shipping? (And Is It Worth It?)</h3>
                <p className="text-grey-600 text-sm">What white-glove delivery actually includes, and when it is the right choice for your piece.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
