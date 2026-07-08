import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/moving-to-austin-ship-valuables'

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
      'moving to Austin ship valuables',
      'shipping valuables to Austin TX',
      'relocating to Austin Texas shipping',
      'move to Austin specialty shipping',
      'ship furniture to Austin TX',
      'ship art to Austin Texas',
    ],
  }
}

export default function MovingToAustinShipValuables() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Moving to Austin? Ship Your Valuables First — A Practical Guide',
    description:
      'How to ship furniture, fine art, heirlooms, and heavy items to Austin TX before or during your move. Costs, carriers, and what not to trust to a standard mover.',
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-07-08',
    dateModified: '2026-07-08',
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
        name: 'How do I ship furniture to Austin TX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The safest way to ship furniture to Austin is through a specialty crating and freight company like Austin Crate & Freight. We pick up from your origin, build a custom wood crate specific to your piece, and coordinate white-glove delivery to your Austin address. Standard movers use blanket wrap and pads — fine for short local moves, but inadequate for cross-country transit. For valuable or designer furniture, custom crating is the right approach. Call (512) 240-9818 for a quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I ship fine art to Austin when I move?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Fine art should be shipped separately from the rest of your household goods — never in a moving truck with furniture and boxes. Austin Crate & Freight specializes in fine art crating and climate-controlled transport. Given Austin\'s extreme summer heat, climate-controlled vehicles are essential from May through October. We can coordinate the art portion of your move independently, then you handle the rest with your mover.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I not let standard movers handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard movers are not equipped for: fine art and framed paintings, antiques and heirlooms, designer or fragile furniture, sculptures, safes, motorcycles, medical equipment, or anything requiring a custom wood crate. These items need specialty handling — different packaging materials, different carriers, and handlers trained specifically for high-value goods.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to ship valuables to Austin?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Costs depend on what you are shipping and from where. A single framed painting from the East Coast typically runs $400–$1,200 including crating and white-glove delivery. A piece of designer furniture from California is usually $600–$2,500 depending on size. Heavy items like safes start around $500 for custom crating plus freight. Call (512) 240-9818 for a free quote — we will give you a real number, not a range.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer delivery to all Austin neighborhoods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Austin Crate & Freight delivers throughout Austin and the surrounding metro — including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Kyle, Buda, Dripping Springs, Lakeway, and beyond. We handle inside delivery, placement, and debris removal on every white-glove job.',
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
              Moving to Austin? Ship Your Valuables First — A Practical Guide
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              Standard movers are great for boxes and basic furniture. They are not the right call for fine art, antiques, designer pieces, or anything you cannot replace. Here is how to handle the valuables portion of your Austin move correctly.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 July 8, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/authors/max-deleonardis" className="text-emerald hover:underline">
                  Max DeLeonardis
                </Link>
              </span>
              <span>📦 Moving Guide</span>
              <span>⏱️ 7 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              Austin has been one of the fastest-growing cities in the country for the better part of a decade. People relocate here from California, New York, Colorado, and all over Texas — bringing their furniture, their art collections, their family heirlooms, and their expensive equipment. Most of them use a standard moving company for the bulk of their household and then figure out the rest later. This guide is about the "rest" — the items that standard movers are not equipped to handle and that deserve a different approach entirely.
            </p>

            <h2>Why Valuables Need a Separate Plan</h2>
            <p>
              Standard household movers pack everything into the same truck. Blanket wrap and moving pads are the standard protective method — adequate for an IKEA dresser or a basic sofa, but not for anything irreplaceable. The problems start when:
            </p>
            <ul>
              <li>A framed oil painting is stacked between mattresses</li>
              <li>An antique chest of drawers gets shifted on the truck during highway driving</li>
              <li>A bronze sculpture is wrapped in a moving blanket next to boxes of kitchen goods</li>
              <li>A designer sofa arrives with scuffs that the mover declines to cover under their liability</li>
            </ul>
            <p>
              None of this is the mover's fault, exactly. They are doing what they do — moving the volume of a household efficiently. The issue is that some items need a fundamentally different level of protection that standard moving simply does not provide.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">📦 What to Ship Separately When Moving to Austin</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ <strong>Fine art and framed paintings</strong> — requires custom crating and climate control</li>
                <li>✅ <strong>Antiques and heirlooms</strong> — fragile, irreplaceable, need specialty handling</li>
                <li>✅ <strong>Designer or custom furniture</strong> — high-value pieces that standard padding won't protect</li>
                <li>✅ <strong>Sculptures</strong> — bronze, ceramic, glass, stone — need custom cradles</li>
                <li>✅ <strong>Safes and heavy specialty items</strong> — require equipment and custom crates</li>
                <li>✅ <strong>Musical instruments</strong> — especially grands and uprights</li>
                <li>⬜ <strong>Standard furniture, boxes, appliances</strong> — fine for a regular mover</li>
              </ul>
            </div>

            <h2>The Austin Heat Problem</h2>
            <p>
              If you are moving to Austin between May and October — which is most of the moving season — you need to think carefully about temperature. Austin summers are brutal. It is not uncommon for June through September to see sustained stretches above 100°F. What does that mean for your belongings?
            </p>
            <ul>
              <li><strong>Fine art:</strong> Oil paint softens. Canvas buckles. Varnishes cloud. Temperature-sensitive mediums can be damaged in 45 minutes in an unconditioned truck.</li>
              <li><strong>Antique furniture:</strong> Wood joints expand and contract. Old glue separates at sustained high heat. Veneer lifts.</li>
              <li><strong>Leather furniture:</strong> Sustained heat accelerates cracking and drying of leather surfaces.</li>
              <li><strong>Electronics and instruments:</strong> Heat damages circuits, warps instrument bodies, and expands adhesives.</li>
            </ul>
            <p>
              A standard moving truck can reach 130–140°F inside during a Texas summer. Climate-controlled specialty freight vehicles maintain 68–72°F throughout. For anything heat-sensitive, this is not an upgrade — it is the baseline requirement.
            </p>

            <h2>Fine Art: Ship It Independently</h2>
            <p>
              The single most reliable piece of advice for anyone moving fine art to Austin: ship it separately from your household goods. Do not let it go on the moving truck.
            </p>
            <p>
              Our{' '}
              <Link href="/services/fine-art" className="text-emerald-600 hover:underline">
                fine art shipping service
              </Link>{' '}
              handles the entire process — pickup from your current location (or we coordinate with your current gallery/storage), custom wood crating at our Austin facility, and white-glove delivery to your Austin address. For the art portion of a relocation, we can be completely hands-off from your moving company's process.
            </p>
            <p>
              For most collector-level moves (5–20 pieces), we will assess each piece, crate them individually, and coordinate freight to arrive at your new Austin address on a date that works with your overall move schedule. You do not have to be there — we work with building management, property managers, and whoever is on site.
            </p>

            <h2>Antiques and Heirlooms: The Documentation Problem</h2>
            <p>
              Moving antiques involves two risks: physical damage and documentation. Physical damage is obvious. Documentation is less discussed but equally important.
            </p>
            <p>
              Before any antique or heirloom moves, you should have:
            </p>
            <ol>
              <li><strong>Photographs</strong> — detailed, in good lighting, of every surface, joint, corner, and existing imperfection. These are your proof of pre-existing condition.</li>
              <li><strong>Appraisal documentation</strong> — especially for estate pieces or anything you might need to insure or claim on. Moving companies use per-pound or declared-value coverage that rarely reflects actual worth.</li>
              <li><strong>Provenance paperwork</strong> — if you have it, keep it with the piece. A chest of drawers that came from a specific estate is worth more with its paperwork than without.</li>
            </ol>
            <p>
              We document condition before crating on every job. Photographs go on file. If anything were to happen in transit (which is exceedingly rare with custom crating), you have clear pre-shipment evidence.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Moving to Austin? Let's Handle the Valuable Stuff.</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> for a free consultation. We will figure out which items need specialty handling and give you a real quote before anything moves.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>

            <h2>Designer Furniture: When Blanket Wrap Is Not Enough</h2>
            <p>
              Most movers will tell you they can handle your designer sofa or custom dining table. They are probably right — for the move itself. The issue is what happens when something goes wrong. Standard moving company liability is either released value (typically $0.60/lb) or declared value — and even declared value does not always result in a fair settlement.
            </p>
            <p>
              For furniture that costs $3,000+ per piece — custom sectionals, designer dining tables, vintage credenzas, Italian leather sofas — a custom wood crate provides protection that blanket wrapping simply cannot. The piece is immobilized, padded, and sealed. It cannot shift in transit. It cannot be scraped by another item. The crate absorbs impact; the furniture does not.
            </p>
            <p>
              Our{' '}
              <Link href="/services/furniture" className="text-emerald-600 hover:underline">
                custom furniture shipping service
              </Link>{' '}
              handles this specific scenario regularly — people moving high-value pieces who want certainty rather than insurance claims.
            </p>

            <h2>Heavy and Specialty Items: Safes, Pianos, and More</h2>
            <p>
              Some items are heavy enough to be a liability risk for standard movers. Safes, pool tables, grand pianos, and heavy exercise equipment require equipment and technique that general movers may not have. More importantly, if they damage your floor, stairs, or the item itself, the claim process is painful.
            </p>
            <p>
              We handle{' '}
              <Link href="/services/heavy-items" className="text-emerald-600 hover:underline">
                heavy item shipping
              </Link>{' '}
              throughout Austin and Central Texas. Safes and vaults get custom crating. Pianos get padded, crated, and handled by people who know piano mechanics. Pool tables get disassembled properly (slate and felt treated separately). These items arrive intact, and we do the delivery side on our schedule — separately from your main move if that is easier.
            </p>

            <h2>What to Expect from the Process</h2>
            <p>Here is what working with us looks like for a relocation move:</p>
            <ol>
              <li><strong>Initial call or form submission</strong> — tell us what you have, where it is now, and when you need it in Austin. We ask questions; you do not need to know the terminology.</li>
              <li><strong>Quote</strong> — we give you a specific price, not a range. We quote to build specific crates and coordinate specific freight routes.</li>
              <li><strong>Pickup</strong> — we pick up from your origin location (or you drop off at a partner facility if you are local to a major city).</li>
              <li><strong>Crating</strong> — every piece gets a custom crate built to its exact dimensions at our Austin facility.</li>
              <li><strong>Delivery to Austin</strong> — we deliver to your Austin address, inside the door, on a schedule that works with your move.</li>
            </ol>
            <p>
              Most relocation shipments take 5–14 days depending on origin distance and freight routing. Rush options are available.
            </p>

            <h2>Austin Neighborhoods We Deliver To</h2>
            <p>
              We deliver throughout Austin and the metro — Hyde Park, Travis Heights, Tarrytown, Barton Hills, East Austin, Westlake, Circle C, South Congress, Domain area, and all surrounding communities including{' '}
              <Link href="/locations/round-rock" className="text-emerald-600 hover:underline">
                Round Rock
              </Link>
              ,{' '}
              <Link href="/locations/cedar-park" className="text-emerald-600 hover:underline">
                Cedar Park
              </Link>
              ,{' '}
              <Link href="/locations/pflugerville" className="text-emerald-600 hover:underline">
                Pflugerville
              </Link>
              , and{' '}
              <Link href="/locations/leander" className="text-emerald-600 hover:underline">
                Leander
              </Link>
              . Inside delivery is standard — we bring things to the room, not just the door.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>How do I ship furniture to Austin TX?</h3>
            <p>
              The safest method is specialty crating and freight. We pick up from your origin, build a custom wood crate specific to your piece, and coordinate white-glove delivery to your Austin address. For valuable or designer furniture, this is the appropriate approach — standard moving blankets are not adequate for cross-country transit of high-value pieces.
            </p>

            <h3>Can I ship fine art to Austin when I move?</h3>
            <p>
              Yes — and we strongly recommend shipping art separately from your household goods. Austin's summer heat requires climate-controlled transport from May through October. We handle the art portion of your move independently, so it does not need to interact with your mover at all.
            </p>

            <h3>What should I not let standard movers handle?</h3>
            <p>
              Fine art, antiques, heirlooms, designer furniture, sculptures, safes, motorcycles, medical equipment, and anything requiring a custom wood crate. These items need specialty handling — different packaging, different carriers, and handlers trained for high-value goods.
            </p>

            <h3>How much does it cost to ship valuables to Austin?</h3>
            <p>
              A framed painting from the East Coast typically runs $400–$1,200 including crating and white-glove delivery. Designer furniture from California is usually $600–$2,500 depending on size. Safes start around $500 for crating plus freight. Call (512) 240-9818 for an exact quote on your specific items.
            </p>

            <h3>Do you deliver to all Austin neighborhoods?</h3>
            <p>
              Yes — we deliver throughout Austin and the surrounding metro, including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Kyle, Buda, Dripping Springs, and Lakeway. Inside delivery, placement, and debris removal are standard on every white-glove job.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Ready to Plan the Valuables Portion of Your Austin Move?</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> or request a quote online. We specialize in exactly this — the items your mover is not equipped to handle.
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
            <h2 className="text-2xl font-bold mb-6 text-grey-900">Specialty Shipping Services for Austin Relocations</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link href="/services/fine-art" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Fine Art Shipping</h3>
                <p className="text-grey-600 text-sm">Museum-quality crating, climate-controlled transport, and white-glove delivery to your Austin address.</p>
              </Link>
              <Link href="/services/furniture" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Furniture Shipping & Crating</h3>
                <p className="text-grey-600 text-sm">Custom crating for designer and antique furniture. Blanket wrap is not enough for cross-country moves of valuable pieces.</p>
              </Link>
              <Link href="/services/heavy-items" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Heavy Item Shipping</h3>
                <p className="text-grey-600 text-sm">Safes, pool tables, pianos, and oversized items — custom crating and specialized delivery throughout Austin.</p>
              </Link>
              <Link href="/services/oversized-shipping" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Oversized Shipping</h3>
                <p className="text-grey-600 text-sm">Items too large for FedEx or UPS. Custom crating and freight coordination — any size, any destination in Austin.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-grey-900">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/antique-shipping-guide" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-grey-600 text-sm">Insurance, crating, and carrier selection before an antique or heirloom moves.</p>
              </Link>
              <Link href="/blog/fine-art-shipping-austin" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Fine Art Shipping in Austin, TX: The Complete 2026 Guide</h3>
                <p className="text-grey-600 text-sm">Crating methods, climate protection, insurance, and real costs for Austin art shipping.</p>
              </Link>
              <Link href="/blog/what-is-white-glove-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">What Is White-Glove Shipping? (And Is It Worth It?)</h3>
                <p className="text-grey-600 text-sm">What the premium service level actually includes and when it is the right choice.</p>
              </Link>
              <Link href="/blog/how-to-choose-specialty-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">How to Choose a Specialty Shipping Company in Austin</h3>
                <p className="text-grey-600 text-sm">What to look for, what to ask, and what to avoid when hiring a specialty shipper.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
