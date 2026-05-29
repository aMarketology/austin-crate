import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/safe-vault-moving-austin'

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
      'safe moving Austin TX',
      'vault moving Austin Texas',
      'gun safe movers Austin',
      'heavy safe moving Austin',
      'how to move a safe Austin',
      'safe transport Austin TX',
      'commercial vault moving Austin',
      'gun safe shipping Austin Texas',
    ],
  }
}

export default function SafeVaultMovingAustin() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Safe & Vault Moving in Austin, TX: What It Actually Takes (2026 Guide)',
    description:
      "Everything Austin homeowners and businesses need to know before moving a safe or vault — weight limits, stair fees, what movers won't touch, and how custom crating protects your investment.",
    image: 'https://austincrate.com/og-default.jpg',
    datePublished: '2026-05-21',
    dateModified: '2026-05-21',
    author: [
      {
        '@type': 'Person',
        name: 'Peter Hall',
        url: 'https://austincrate.com/authors/peter-hall',
        jobTitle: 'Owner',
      },
    ],
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
        name: 'How much does it cost to move a safe in Austin, TX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Safe moving in Austin typically costs $175–$450 for a standard residential gun safe (300–600 lbs) on a single floor with no stairs. Stair fees run $50–$150 per flight. Large Liberty or Fort Knox safes over 800 lbs, vault doors, or commercial safes requiring freight transport start at $500 and up depending on access, destination, and whether crating is needed for long-distance shipping.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can regular movers move a gun safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most standard moving companies will not move gun safes or heavy vaults. They lack the equipment (safe dollies, stair-climbing power dollies, anchor straps rated for 800+ lbs) and the liability coverage. Even movers who say "yes" often drop the job on-site when they see a 600 lb safe at the top of a staircase. Use a specialty safe mover or a freight company like Austin Crate & Freight that has proper equipment and experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you move a 500-pound safe without damaging floors or walls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proper safe moving requires a heavy-duty safe dolly (not a standard appliance dolly), furniture sliders or plywood runners on hardwood and tile floors, corner protectors on door frames, and a crew of at least two trained people. On stairs, a stair-climbing powered dolly or a controlled rope-and-anchor system is required. DIY attempts with a standard hand truck are how walls, floors, and backs get destroyed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you ship a gun safe via UPS or FedEx?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. UPS and FedEx standard services have a 150 lb weight limit for most service levels. A typical residential gun safe weighs 250–800 lbs. Safes require LTL (less-than-truckload) freight shipping, typically on a pallet with a custom wood crate or heavy-duty strapping. Austin Crate & Freight coordinates LTL freight for safes shipped anywhere in Texas and nationally.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do safes need to be bolted down after moving?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, most safe manufacturers recommend bolting to the floor or wall for security and to prevent tipping. Many home insurance policies also require it. If the destination has a concrete slab, lag bolts through the safe\'s floor anchor holes into concrete anchors are standard. On wood subfloor, bolting through to a floor joist is preferred. Austin Crate & Freight can assist with anchor placement as part of white-glove safe delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a vault door and how is it moved differently from a safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A vault door is a standalone steel door (typically 500–2,000 lbs) installed in a framed wall opening to create a walk-in safe room. Moving or installing a vault door requires rigging equipment — engine hoists, steel rollers, or machinery skates — because standard dollies cannot handle the weight distribution. Vault doors are almost always shipped as freight on a custom crate. This is a specialty job Austin Crate & Freight handles with proper rigging.',
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
              Safe &amp; Vault Moving in Austin, TX: What It Actually Takes
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              Gun safes, Liberty safes, commercial vaults, vault doors — what regular movers won&apos;t touch, what it costs, and how to get it done right without destroying your floors.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 May 21, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/authors/peter-hall" className="text-emerald hover:underline">
                  Peter Hall
                </Link>
              </span>
              <span>🔐 Safe &amp; Vault Moving</span>
              <span>⏱️ 8 min read</span>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">

            {/* Quick answer */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-0 mb-10 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">🔐 Quick Answer</p>
              <p className="text-grey-700 text-sm leading-relaxed">
                Moving a safe in Austin costs <strong>$175–$450</strong> for a standard residential gun safe on one floor. Stairs add $50–$150 per flight. Safes over 800 lbs, vault doors, or long-distance freight moves start at $500+. Standard movers cannot handle safes safely — you need specialty equipment and experienced crew.{' '}
                <Link href="/contact" className="text-emerald-700 font-semibold hover:underline">Get a quote →</Link>
              </p>
            </div>

            <p className="lead text-xl text-grey-700 mb-8">
              A 600-pound Liberty Presidential gun safe sitting in your living room is not a furniture moving problem. It is a rigging problem. Every year, Austin homeowners hire a regular moving company, watch them struggle it onto a standard hand truck, and then spend weeks dealing with cracked tile, gouged hardwood, and a safe that never made it up the stairs. This guide covers what actually happens when you move a safe correctly — and what it costs.
            </p>

            <h2>Why Regular Movers Won&apos;t (or Shouldn&apos;t) Move Your Safe</h2>
            <p>
              Standard residential movers carry liability insurance rated for furniture and household goods. A 500 lb gun safe is not a household good in the eyes of their policy. Most will decline outright. The ones who say yes typically show up with an appliance dolly rated to 400 lbs, two guys who have never moved a safe before, and no plan for the stairs.
            </p>
            <p>
              The failure modes are predictable: the dolly tips, someone gets hurt, the safe takes out a banister, or a wheel punches through engineered hardwood. The damage bill often exceeds the cost of hiring a specialist to begin with.
            </p>
            <p>
              Safe moving requires dedicated equipment: a heavy-duty safe dolly with a 1,000+ lb rating, rubber-coated straps, stair-climbing dollies or power stair climbers for anything multi-story, plywood or Masonite runners on finished floors, and a crew who has done it before.
            </p>

            <h2>Safe Types and What Each One Requires</h2>

            <h3>Residential Gun Safes (250–800 lbs)</h3>
            <p>
              The most common job. Liberty, Browning, Fort Knox, Cannon — most residential gun safes fall in the 250–800 lb range depending on fire rating and size. A basic relocation on a single level with clear hallway access is straightforward with the right equipment. The complicating factors are:
            </p>
            <ul>
              <li><strong>Stairs</strong> — every flight adds significant complexity, time, and risk. Stair-climbing power dollies are essential for anything over 400 lbs going up or down more than one flight.</li>
              <li><strong>Door frame clearance</strong> — gun safes are often wider than interior door frames. Removing the door from its hinges is sometimes required.</li>
              <li><strong>Floor type</strong> — hardwood, tile, and luxury vinyl plank all require floor protection before a steel safe touches them.</li>
              <li><strong>Final placement and anchor</strong> — the safe needs to end up where you want it, oriented correctly, and bolted down if manufacturer specs require it.</li>
            </ul>

            <h3>Large Vault Safes and Commercial Safes (800–2,000 lbs)</h3>
            <p>
              Large commercial or residential vault safes in the 800–2,000 lb class are a different category entirely. These often require machinery skates (low-profile steel rollers), a forklift or pallet jack for loading and unloading, and an LTL freight carrier if the destination is more than local. They cannot be hand-carried on any dolly. Moving one of these without the right equipment will result in injury or structural damage.
            </p>

            <h3>Vault Doors (500–2,500 lbs)</h3>
            <p>
              A vault door is a standalone steel door unit — the kind installed in a wall to create a walk-in safe room. They are shipped as freight on custom crates, typically requiring engine hoists or steel rollers for final installation. If you are relocating a vault door or having one delivered and installed, this is a rigging job, not a moving job. Austin Crate &amp; Freight handles vault door freight and can coordinate installation rigging.
            </p>

            {/* Mid-article CTA — appears at ~40% scroll */}
            <div className="bg-grey-100 border border-grey-200 rounded-lg p-6 my-8 not-prose">
              <p className="font-semibold text-grey-900 mb-2 text-lg">Moving a safe in Austin?</p>
              <p className="text-grey-700 text-sm mb-4">
                Tell us what you have — make, model, weight, pickup address, destination, and whether there are stairs. We&apos;ll give you a firm quote, usually within the hour.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition text-center"
                >
                  Get a Free Quote →
                </Link>
                <a
                  href="tel:+15122409818"
                  className="inline-block border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition text-center"
                >
                  Call (512) 240-9818
                </a>
              </div>
            </div>

            <h2>Safe Moving Costs in Austin: What to Expect</h2>
            <p>
              Pricing for safe moving in Austin depends on four variables: weight, number of floors, distance, and whether the safe needs crating for freight transport.
            </p>

            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">💰 2026 Safe Moving Cost Guide — Austin, TX</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-grey-700">
                  <thead>
                    <tr className="border-b border-grey-300">
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Job Type</th>
                      <th className="text-left py-2 pr-4 font-bold text-grey-900">Typical Weight</th>
                      <th className="text-left py-2 font-bold text-grey-900">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Residential gun safe, single floor</td>
                      <td className="py-2 pr-4">250–500 lbs</td>
                      <td className="py-2">$175–$275</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Large residential safe, single floor</td>
                      <td className="py-2 pr-4">500–800 lbs</td>
                      <td className="py-2">$275–$450</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Stair surcharge (per flight)</td>
                      <td className="py-2 pr-4">—</td>
                      <td className="py-2">$50–$150</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Commercial vault safe (local)</td>
                      <td className="py-2 pr-4">800–2,000 lbs</td>
                      <td className="py-2">$500–$1,200+</td>
                    </tr>
                    <tr className="border-b border-grey-200">
                      <td className="py-2 pr-4">Vault door delivery &amp; install assist</td>
                      <td className="py-2 pr-4">500–2,500 lbs</td>
                      <td className="py-2">$600–$2,000+</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Safe crating + LTL freight (Texas)</td>
                      <td className="py-2 pr-4">250–800 lbs</td>
                      <td className="py-2">$350–$800 (crate + freight)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-grey-500 mt-3">Estimates for Austin metro. Exact pricing depends on access, total weight, and destination. <Link href="/contact" className="text-emerald-700 underline">Request a quote</Link> for your specific job.</p>
            </div>

            <h2>What to Do Before the Crew Arrives</h2>
            <p>
              The best thing you can do to keep the job on-time and on-budget is to make access as clear as possible before the crew shows up:
            </p>
            <ul>
              <li><strong>Clear the path:</strong> remove furniture, rugs, and anything in the hallway or stairwell between where the safe currently sits and the door/truck.</li>
              <li><strong>Measure your door frames:</strong> check every doorway the safe will pass through. If any frame is narrower than the safe + two inches, we may need to remove the door or disassemble the door frame trim.</li>
              <li><strong>Know the combination:</strong> safes need to be unlocked for the move. A locked safe with an unknown combination adds a locksmith fee.</li>
              <li><strong>Remove the contents:</strong> every pound you take out of the safe is a pound we are not lifting. More importantly, contents can shift and damage the interior if the safe tips during the move.</li>
              <li><strong>Identify the anchor location:</strong> if the safe will be bolted down at the destination, know which floor it will sit on (slab vs. wood subfloor) and roughly where. We can help with anchor placement during delivery.</li>
            </ul>

            <h2>Shipping a Safe to Another City or State</h2>
            <p>
              Safes going beyond the Austin metro need LTL freight service — they are too heavy for standard parcel carriers. The process at Austin Crate &amp; Freight:
            </p>
            <ol>
              <li><strong>Build a custom wood crate</strong> — the safe is placed on a built-up pallet base with interior blocking to prevent movement. The crate sides protect the exterior finish and prevent straps from damaging the steel.</li>
              <li><strong>Freight class assignment</strong> — safes have a specific freight class that determines shipping rates. We handle the NMFC classification so you are not overpaying.</li>
              <li><strong>Carrier coordination</strong> — we book with LTL carriers that have liftgate service at both ends if residential delivery is required. Not all LTL carriers offer liftgate; we only use ones that do for residential safe moves.</li>
              <li><strong>Delivery and uncrating</strong> — at the destination, if we are coordinating the receiving end, we uncrate and place the safe in its final location.</li>
            </ol>
            <p>
              A 500 lb gun safe shipped from Austin to Dallas or Houston typically runs $350–$600 total including crating and freight. Cross-country (Austin to California or Florida) runs $600–$1,000+ depending on destination zip and access.
            </p>

            <h2>The One Thing That Determines Whether Your Job Goes Well</h2>
            <p>
              Equipment matters. Experience matters. But the single biggest variable in a safe move going smoothly is <em>accurate information upfront</em>. Tell us the make and model (or send a photo), the exact weight if you know it, where it currently sits, how many stairs are involved, what the floors are made of, and where it is going. A job that sounds straightforward and turns out to be a 650 lb safe at the top of a tight spiral staircase is a different job than what we quoted.
            </p>
            <p>
              We do not bill surprise fees at the truck. We quote accurately because we ask the right questions first.
            </p>

            {/* Bottom CTA */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Ready to Move Your Safe?</p>
              <p className="text-grey-700 mb-4">
                Austin Crate &amp; Freight has the equipment, the crew, and the experience to move residential gun safes, commercial vaults, and vault doors anywhere in Austin and beyond.{' '}
                <strong>Call (512) 240-9818</strong> or get a quote online — we respond same business day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition text-center"
                >
                  Get a Free Quote →
                </Link>
                <Link
                  href="/services/heavy-items"
                  className="inline-block border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition text-center"
                >
                  View Heavy Items Services →
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>

            <h3>How much does it cost to move a safe in Austin, TX?</h3>
            <p>
              Safe moving in Austin typically costs $175–$450 for a standard residential gun safe (300–600 lbs) on a single floor with no stairs. Stair fees run $50–$150 per flight. Large Liberty or Fort Knox safes over 800 lbs, vault doors, or commercial safes requiring freight transport start at $500 and up depending on access, destination, and whether crating is needed for long-distance shipping.
            </p>

            <h3>Can regular movers move a gun safe?</h3>
            <p>
              Most standard moving companies will not move gun safes or heavy vaults. They lack the equipment (safe dollies, stair-climbing power dollies, anchor straps rated for 800+ lbs) and the liability coverage. Even movers who say &ldquo;yes&rdquo; often drop the job on-site when they see a 600 lb safe at the top of a staircase. Use a specialty safe mover or a freight company like Austin Crate &amp; Freight that has proper equipment and experience.
            </p>

            <h3>How do you move a 500-pound safe without damaging floors or walls?</h3>
            <p>
              Proper safe moving requires a heavy-duty safe dolly (not a standard appliance dolly), furniture sliders or plywood runners on hardwood and tile floors, corner protectors on door frames, and a crew of at least two trained people. On stairs, a stair-climbing powered dolly or a controlled rope-and-anchor system is required. DIY attempts with a standard hand truck are how walls, floors, and backs get destroyed.
            </p>

            <h3>Can you ship a gun safe via UPS or FedEx?</h3>
            <p>
              No. UPS and FedEx standard services have a 150 lb weight limit for most service levels. A typical residential gun safe weighs 250–800 lbs. Safes require LTL (less-than-truckload) freight shipping, typically on a pallet with a custom wood crate or heavy-duty strapping. Austin Crate &amp; Freight coordinates LTL freight for safes shipped anywhere in Texas and nationally.
            </p>

            <h3>Do safes need to be bolted down after moving?</h3>
            <p>
              Yes, most safe manufacturers recommend bolting to the floor or wall for security and to prevent tipping. Many home insurance policies also require it. If the destination has a concrete slab, lag bolts through the safe&apos;s floor anchor holes into concrete anchors are standard. On wood subfloor, bolting through to a floor joist is preferred. Austin Crate &amp; Freight can assist with anchor placement as part of white-glove safe delivery.
            </p>

            <h3>What is a vault door and how is it moved differently from a safe?</h3>
            <p>
              A vault door is a standalone steel door (typically 500–2,000 lbs) installed in a framed wall opening to create a walk-in safe room. Moving or installing a vault door requires rigging equipment — engine hoists, steel rollers, or machinery skates — because standard dollies cannot handle the weight distribution. Vault doors are almost always shipped as freight on a custom crate. Austin Crate &amp; Freight handles vault door freight and installation rigging.
            </p>

          </article>
        </section>

        {/* Related Articles */}
        <section className="py-12 px-4 bg-grey-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles &amp; Services</h2>
            <div className="grid gap-4">
              <Link href="/services/heavy-items" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Heavy Items Shipping &amp; Crating — Austin, TX</h3>
                <p className="text-grey-600 text-sm">Pool tables, motorcycles, safes, industrial equipment — if it&apos;s over 100 lbs and awkward, this is what we do.</p>
              </Link>
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">How Much Does It Cost to Ship Heavy Items in Austin? (2026 Guide)</h3>
                <p className="text-grey-600 text-sm">Full price breakdown for heavy package pickup, custom furniture shipping, oversized item transport, and freight solutions in Austin.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Custom Crating vs. Standard Boxes: When You Need a Crate</h3>
                <p className="text-grey-600 text-sm">A clear breakdown of when to crate vs. when standard packaging is fine — with real cost comparisons.</p>
              </Link>
              <Link href="/locations/austin" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Austin Crate &amp; Freight — Austin, TX Service Area</h3>
                <p className="text-grey-600 text-sm">We serve the full Austin metro — from South Congress to the Domain and everywhere in between.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
