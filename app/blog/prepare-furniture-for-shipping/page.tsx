import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/prepare-furniture-for-shipping'

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
      'how to prepare furniture for shipping',
      'prepare furniture for shipping',
      'furniture shipping prep Austin TX',
      'furniture packing tips',
      'how to pack furniture for moving',
      'furniture shipping checklist',
    ],
  }
}

export default function PrepareFurnitureForShipping() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Prepare Furniture for Shipping: A Step-by-Step Checklist',
    description:
      'A practical, step-by-step guide to preparing furniture for pickup and transit — disassembly, documentation, padding, and what to leave for the pros.',
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
        name: 'Do I need to disassemble furniture before it gets picked up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the piece. For most large sofas, dining tables, and bed frames, partial disassembly — removing legs, detaching cushions, collapsing bases — makes crating safer and more cost-effective. We will advise you during the quote process on exactly what to detach. You do not need to fully strip any piece.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I wrap furniture myself before the shipper arrives?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Light wrapping for dust protection is fine, but do not apply stretch wrap tightly to finished wood surfaces — it traps moisture and can lift veneers. Leave the actual crating and heavy padding to professionals. Incorrect DIY wrapping can actually cause more damage than no wrapping at all.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I document furniture condition before shipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Photograph every face, all four corners, all legs, and any pre-existing chips, scratches, or repairs under good lighting before pickup. Save these photos with timestamps. If a claim is ever needed, your pre-shipment photo documentation is the most important evidence you can provide.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I book furniture shipping in Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For standard furniture pickups in the Austin area, 3–5 business days is usually sufficient. For large custom crating jobs, oversized pieces, or out-of-state freight, book 1–2 weeks ahead to ensure proper materials are prepped. For auction purchases or estate pieces, call us the same day — we can often accommodate same-week pickups.',
        },
      },
      {
        '@type': 'Question',
        name: 'What items should I remove from furniture before it ships?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Remove all contents from drawers, shelves, and cabinets. Take out glass inserts and have them wrapped separately. Remove hardware that could scratch the finish in transit — pulls, knobs, and hinges on antique pieces especially. Any piece with a mirror should have the mirror detached, wrapped, and crated separately.',
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
              How to Prepare Furniture for Shipping: A Step-by-Step Checklist
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              What to do before we arrive — and what to leave for the professionals — so your furniture ships without a scratch.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 June 24, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/authors/max-deleonardis" className="text-emerald hover:underline">
                  Max DeLeonardis
                </Link>
              </span>
              <span>🛋️ How-To Guide</span>
              <span>⏱️ 7 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              Most furniture damage during shipping does not happen in transit — it happens in the fifteen minutes before pickup. Drawers left loaded, legs still attached, no photos taken, no hardware removed. The good news is that preparing furniture for shipping correctly is straightforward. This guide walks through exactly what to do before your pickup, and what to leave for us to handle.
            </p>

            <h2>The Short Answer: 6 Steps Before Pickup</h2>
            <p>
              Proper prep comes down to six steps: empty it, document it, disassemble removable parts, protect the finish, secure loose hardware, and clear a path for the crew. Everything else is handled professionally at our shop.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">✅ Pre-Shipping Furniture Checklist</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ <strong>Empty all drawers, shelves, and compartments</strong> — no exceptions</li>
                <li>✅ <strong>Photograph every face and all corners</strong> under bright light</li>
                <li>✅ <strong>Remove glass inserts and mirrors</strong> — wrap and bag separately</li>
                <li>✅ <strong>Remove legs if they detach</strong> — label which leg goes where</li>
                <li>✅ <strong>Remove loose hardware</strong> (pulls, knobs) and bag with tape on the piece</li>
                <li>✅ <strong>Clear a 6-foot path</strong> from the item to the door or loading area</li>
                <li>⬜ <strong>Do NOT apply stretch wrap tightly to raw wood</strong> — it traps moisture</li>
                <li>⬜ <strong>Do NOT move antiques or heavy pieces yourself</strong> — wait for the crew</li>
              </ul>
            </div>

            <h2>Step 1: Empty Everything</h2>
            <p>
              This is the most overlooked step. Drawers, cabinets, shelving units, and armoires should be completely emptied before pickup — without exception. Loaded furniture is heavier, harder to crate safely, and the contents shift in transit, putting pressure on joints and finishes from the inside.
            </p>
            <p>
              For pieces with built-in storage (blanket chests, sideboards, buffets), pull everything out and set it aside. If you are shipping an entire room, those contents ship separately in boxes. The furniture ships empty.
            </p>

            <h2>Step 2: Document Condition with Photos</h2>
            <p>
              Before any furniture leaves your home, photograph it thoroughly. This protects you in the unlikely event of a claim, and it gives us a baseline at pickup.
            </p>
            <p>What to photograph:</p>
            <ul>
              <li>All four sides and the top of the piece</li>
              <li>All four corners and all legs up close</li>
              <li>Any pre-existing scratches, chips, repairs, or veneer lifts</li>
              <li>The underside or back if there are any markings or notable features</li>
            </ul>
            <p>
              Use your phone camera in natural light or under a bright lamp — not overhead flash, which washes out surface detail. Make sure timestamps are on (most phone cameras enable these in settings). Save these photos somewhere you can access them later.
            </p>

            <h2>Step 3: Remove Glass Inserts and Mirrors</h2>
            <p>
              Glass tabletops, cabinet door inserts, mirror panels, and display shelves should always be detached and wrapped separately. Glass ships in its own padding — flat, vertical, supported at the edges. It should never be left in a furniture piece during crating.
            </p>
            <p>
              For antique pieces with original glass doors or beveled mirrors, tell us in advance during the quote. We will bring appropriate mirror packs and glass wrap to handle these correctly on-site.
            </p>

            <h2>Step 4: Disassemble Removable Legs and Components</h2>
            <p>
              Most dining tables, sofas, bed frames, and shelving units have legs, panels, or bases that detach. Removing these before pickup reduces the crated footprint, significantly lowers your shipping cost, and eliminates the most common breakage point — furniture legs — from the equation.
            </p>
            <p>How to handle this:</p>
            <ul>
              <li>Remove legs using the original hardware and keep all bolts, screws, and washers together</li>
              <li>Tape a small zip-lock bag of hardware directly to the main piece so nothing gets lost</li>
              <li>Label each leg if the piece is asymmetrical — right front, left rear, etc.</li>
              <li>For pedestal tables, wrap the base and column separately</li>
            </ul>
            <p>
              Not sure what detaches on your piece? Call us or send photos — we will tell you exactly what to remove versus what to leave assembled.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Questions Before Pickup? We Are Here.</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> and describe your piece. We will walk you through exactly what to prep, what we handle, and give you a quote in minutes.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>

            <h2>Step 5: Remove or Secure Loose Hardware</h2>
            <p>
              Drawer pulls, cabinet knobs, decorative hinges, casters, and any hardware that is loose, wobbly, or projecting can scratch the finish of the piece or surrounding items during crating and transit.
            </p>
            <p>
              For antique or designer furniture, remove all hardware and store it in a labeled bag taped to the back or underside of the piece. This is especially important for{' '}
              <Link href="/services/furniture/antique-furniture-shipping" className="text-emerald-600 hover:underline">
                antique furniture shipments
              </Link>{' '}
              where original hardware is irreplaceable.
            </p>
            <p>
              For modern furniture with recessed or flush hardware, leave it in place — those are designed to stay.
            </p>

            <h2>Step 6: Clear the Path</h2>
            <p>
              Our crew brings equipment — dollies, straps, moving pads, crating panels — and needs room to work. Before pickup, clear a minimum six-foot path from the furniture to the nearest exterior door or loading area. Remove area rugs from the travel path if possible (dollies catch on rug edges).
            </p>
            <p>
              For upper floors, let us know in advance if there are stairs, narrow hallways, or elevator access only. This affects which equipment we bring and how we schedule the job.
            </p>

            <h2>What NOT to Do Before Shipping</h2>
            <p>
              There are a few well-intentioned prep steps that actually cause more problems than they solve:
            </p>

            <h3>Do Not Apply Stretch Wrap Directly to Wood Finishes</h3>
            <p>
              Stretch wrap is a moisture barrier. Applied tightly to lacquered, stained, or veneered surfaces, it traps humidity and can cause the finish to cloud, bubble, or separate from the substrate. This is a common mistake with antique pieces. If you want to add a protective layer, use moving paper or cotton cloth first, then plastic over that.
            </p>

            <h3>Do Not Attempt to Move Heavy Pieces Alone</h3>
            <p>
              Wait for the crew. Trying to reposition a 250 lb sideboard or drag a{' '}
              <Link href="/services/furniture/designer-sofas-sectionals" className="text-emerald-600 hover:underline">
                large sectional sofa
              </Link>{' '}
              to a more convenient spot before we arrive is how legs get snapped and backs get hurt. Our crew expects to find the piece in its normal location and handles all movement from there.
            </p>

            <h3>Do Not Pack Fragile Items Inside the Furniture</h3>
            <p>
              Nesting smaller fragile items inside a piece being shipped seems efficient but creates multiple problems. The items shift during crating, the weight distribution changes, and if a claim is needed, the presence of undisclosed contents complicates everything. Ship fragile items in proper, labeled boxes — separately.
            </p>

            <h2>Special Cases: Antique, Designer, and Heirloom Furniture</h2>
            <p>
              Standard furniture prep applies to most pieces, but antique, heirloom, and high-value designer furniture requires extra care at every step:
            </p>
            <ul>
              <li>
                <strong>Antiques:</strong> Tell us the approximate age and any known repairs or fragile areas before pickup. We adjust foam blocking and crating methods for pieces with dried glue joints, aged veneer, or original hardware.
              </li>
              <li>
                <strong>Designer and custom pieces:</strong> If the manufacturer has specific handling or storage requirements (many high-end upholstery brands do), share those with us. We follow OEM guidance when provided.
              </li>
              <li>
                <strong>Heirlooms:</strong> If a piece has personal or emotional value beyond its market value — a grandmother&apos;s secretary desk, a hand-built dining table — tell us. We will note it on the job and ensure the crew knows.
              </li>
            </ul>
            <p>
              For high-value or irreplaceable pieces, also consider whether{' '}
              <Link href="/blog/what-is-white-glove-shipping" className="text-emerald-600 hover:underline">
                white-glove shipping
              </Link>{' '}
              is the right service level. It includes full crating, climate-controlled transit options, and a two-person specialist crew from origin to destination.
            </p>

            <h2>What We Handle After Pickup</h2>
            <p>
              Once the piece is at our shop in Austin, we handle everything from crating forward:
            </p>
            <ul>
              <li>Measuring and cutting a custom crate to the exact dimensions of the piece</li>
              <li>Installing interior foam blocking and padding at all stress points</li>
              <li>Photographing the piece in-crate before sealing</li>
              <li>Labeling, weighing, and arranging freight or local delivery</li>
              <li>Coordinating delivery scheduling with the recipient</li>
            </ul>
            <p>
              Our{' '}
              <Link href="/services/furniture" className="text-emerald-600 hover:underline">
                furniture shipping service
              </Link>{' '}
              covers everything from local Austin delivery to interstate freight — including{' '}
              <Link href="/locations/round-rock" className="text-emerald-600 hover:underline">
                Round Rock
              </Link>
              , Cedar Park, and throughout Central Texas.
            </p>

            <h2>How Much Does Furniture Shipping Cost in Austin?</h2>
            <p>
              Costs vary based on piece size, crating complexity, distance, and whether the job is local or interstate. As a general range:
            </p>
            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">💰 Furniture Shipping Cost Estimates (Austin, TX)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-grey-700">
                  <thead>
                    <tr className="border-b border-grey-300">
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Item Type</th>
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Local Austin (est.)</th>
                      <th className="text-left py-2 font-bold text-grey-900">Interstate Texas (est.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Dining table (legs removed)</td>
                      <td className="py-2 pr-4">$150–$300</td>
                      <td className="py-2">$400–$900</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Sectional sofa</td>
                      <td className="py-2 pr-4">$200–$450</td>
                      <td className="py-2">$600–$1,400</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Antique cabinet / armoire</td>
                      <td className="py-2 pr-4">$250–$500</td>
                      <td className="py-2">$700–$1,800</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Bedroom set (multiple pieces)</td>
                      <td className="py-2 pr-4">$400–$800</td>
                      <td className="py-2">$1,200–$3,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-grey-500 text-xs mt-3">Estimates only. Final pricing depends on dimensions, crating requirements, and destination. Call (512) 240-9818 for an exact quote.</p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Do I need to disassemble furniture before it gets picked up?</h3>
            <p>
              It depends on the piece. For most large sofas, dining tables, and bed frames, partial disassembly — removing legs, detaching cushions, collapsing bases — makes crating safer and more cost-effective. We will advise you during the quote process on exactly what to detach. You do not need to fully strip any piece.
            </p>

            <h3>Should I wrap furniture myself before the shipper arrives?</h3>
            <p>
              Light wrapping for dust protection is fine, but do not apply stretch wrap tightly to finished wood surfaces — it traps moisture and can lift veneers. Leave the actual crating and heavy padding to professionals. Incorrect DIY wrapping can cause more damage than no wrapping at all.
            </p>

            <h3>How do I document furniture condition before shipping?</h3>
            <p>
              Photograph every face, all four corners, all legs, and any pre-existing chips, scratches, or repairs under good lighting before pickup. Save these photos with timestamps. If a claim is ever needed, your pre-shipment photo documentation is the most important evidence you can provide.
            </p>

            <h3>How far in advance should I book furniture shipping in Austin?</h3>
            <p>
              For standard furniture pickups in the Austin area, 3–5 business days is usually sufficient. For large custom crating jobs, oversized pieces, or out-of-state freight, book 1–2 weeks ahead. For auction purchases or estate pieces, call us the same day — we can often accommodate same-week pickups.
            </p>

            <h3>What items should I remove from furniture before it ships?</h3>
            <p>
              Remove all contents from drawers, shelves, and cabinets. Take out glass inserts and have them wrapped separately. Remove hardware that could scratch the finish in transit — pulls, knobs, and hinges on antique pieces especially. Any piece with a mirror should have the mirror detached, wrapped, and crated separately.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Ready to Ship? We Handle the Hard Part.</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> or request a free quote online. We serve all of Austin, Round Rock, Cedar Park, Georgetown, and throughout Central Texas.
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
            <h2 className="text-2xl font-bold mb-6 text-grey-900">Our Furniture Shipping Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link href="/services/furniture" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Furniture Shipping Austin</h3>
                <p className="text-grey-600 text-sm">Custom crating and white-glove delivery for all furniture types across Central Texas.</p>
              </Link>
              <Link href="/services/furniture/antique-furniture-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Antique Furniture Shipping</h3>
                <p className="text-grey-600 text-sm">Specialized crating and handling for antiques, heirlooms, and high-value period pieces.</p>
              </Link>
              <Link href="/services/furniture/designer-sofas-sectionals" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Designer Sofas & Sectionals</h3>
                <p className="text-grey-600 text-sm">White-glove shipping for high-end upholstered furniture, sectionals, and custom pieces.</p>
              </Link>
              <Link href="/buy-a-crate" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Buy a Crate</h3>
                <p className="text-grey-600 text-sm">Need a custom wood crate for your own shipment? We build and sell crates to spec.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-grey-900">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/ship-large-furniture-texas" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">How to Ship Large Furniture Across Texas</h3>
                <p className="text-grey-600 text-sm">Costs, crating tips, and what to expect when moving large pieces across the Lone Star State.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Custom Crating vs. Standard Boxes: When You Need a Crate</h3>
                <p className="text-grey-600 text-sm">A clear breakdown of when standard packaging is fine versus when a wood crate is the only safe option.</p>
              </Link>
              <Link href="/blog/antique-shipping-guide" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-grey-600 text-sm">Everything you need to know before shipping an antique, from insurance to crating methods.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
