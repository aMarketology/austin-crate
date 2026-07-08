import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/how-to-choose-specialty-shipping'

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
      'how to choose specialty shipping company Austin',
      'best specialty shipping Austin TX',
      'specialty freight company Austin',
      'white glove shipping company Austin',
      'custom crating company Austin Texas',
      'shipping company for valuables Austin',
    ],
  }
}

export default function HowToChooseSpecialtyShipping() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Choose a Specialty Shipping Company in Austin, TX',
    description:
      'What to look for, what questions to ask, and what red flags to avoid when hiring a specialty shipping and crating company in Austin, Texas.',
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
        name: 'What is a specialty shipping company?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A specialty shipping company handles items that standard carriers like UPS, FedEx, and general movers are not equipped for — fine art, antiques, designer furniture, heavy items, medical equipment, and anything requiring custom crating. They offer specialized packaging (typically custom wood crates), trained handlers, appropriate carriers, and higher standards of care than general freight.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if a shipping company can handle fine art?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ask three questions: (1) Do you build custom wood crates in-house? (2) Do you use climate-controlled vehicles? (3) What is your claims rate and resolution process? A legitimate fine art shipper will answer all three with specifics. If they pivot to "we use high-quality packing materials" without mentioning custom crating, they are not equipped for fine art.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I ask a specialty shipping company before hiring them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Key questions: Do you build crates in-house or outsource? Are you licensed and insured? What carriers do you use for freight? Do you do climate-controlled transport? Can you provide references or reviews? What does your claims process look like? How do you document condition before and after shipping? Get answers to all of these before committing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Austin Crate & Freight licensed and insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Austin Crate & Freight is licensed, bonded, and fully insured. We build custom crates in-house at our Austin facility at 3112 Windsor Rd, document condition before every shipment, and work with vetted freight carriers for nationwide delivery. We have been serving the Austin area since 2010.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a mover and a specialty shipper?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Movers handle household volume — lots of items, quickly, with blanket wrap and pads. Specialty shippers focus on individual high-value or fragile items that require custom packaging, specific handling, and appropriate freight carriers. They are not competing services — they are complementary. Use a mover for your household; use a specialty shipper for your art, antiques, and valuables.',
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
              How to Choose a Specialty Shipping Company in Austin, TX
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              There are movers, there are parcel carriers, and then there are specialty shippers. Knowing the difference — and what to ask before you hire — can mean the difference between a safe delivery and a painful insurance claim.
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 July 8, 2026</span>
              <span>
                ✍️{' '}
                <Link href="/authors/max-deleonardis" className="text-emerald hover:underline">
                  Max DeLeonardis
                </Link>
              </span>
              <span>🚚 Buyer Guide</span>
              <span>⏱️ 8 min read</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-grey-700 mb-8">
              Austin has dozens of moving companies and parcel carriers. It has a handful of companies that actually specialize in the kind of shipping that high-value items require — custom crating, climate-controlled transport, trained handlers, and the right freight network. This guide explains how to tell them apart and what to ask before you hand over something irreplaceable.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">📋 Quick Answer: What Makes a Specialty Shipper Legitimate?</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li>✅ Builds custom wood crates <strong>in-house</strong> (not outsourced)</li>
                <li>✅ Licensed, bonded, and fully insured</li>
                <li>✅ Climate-controlled vehicles for heat-sensitive items</li>
                <li>✅ Documents condition before and after every job</li>
                <li>✅ Works with vetted specialty freight carriers (not just UPS/FedEx)</li>
                <li>✅ Can give you a specific quote — not just a range</li>
                <li>✅ Has verifiable reviews and a real Austin presence</li>
              </ul>
            </div>

            <h2>What Is Specialty Shipping, Exactly?</h2>
            <p>
              The term gets used loosely. At its core, specialty shipping is the transport of items that standard carriers — UPS, FedEx, USPS, general moving companies — are not designed to handle safely. This includes:
            </p>
            <ul>
              <li>Fine art, paintings, and sculptures</li>
              <li>Antiques and irreplaceable heirlooms</li>
              <li>Designer and custom furniture</li>
              <li>Medical and scientific equipment</li>
              <li>Heavy items: safes, pool tables, industrial equipment</li>
              <li>Oversized items that exceed carrier limits</li>
              <li>Anything requiring a custom-built wood crate</li>
            </ul>
            <p>
              The defining characteristic is not price or service level — it is capability. A specialty shipper has the tools, training, and infrastructure to handle things that would be damaged, refused, or inadequately protected by standard carriers.
            </p>

            <h2>The Three Tiers of Shipping — and Where Each Belongs</h2>
            <p>
              Understanding this clearly will help you make the right choice for each item:
            </p>

            <h3>Tier 1: Standard Parcel (UPS, FedEx, USPS)</h3>
            <p>
              Best for: books, clothing, non-fragile goods, small packages under 50 lbs. Standard parcel networks are efficient, trackable, and inexpensive. They are also automated — packages pass through sorting machines that can exert 200+ lbs of compression force, and claims for damage are notoriously difficult to win. They are not appropriate for anything fragile, high-value, or oversized.
            </p>

            <h3>Tier 2: General Moving Companies</h3>
            <p>
              Best for: household moves — boxes, standard furniture, appliances. Moving companies are good at volume and logistics. Their standard protective method (blanket wrap and moving pads) is adequate for everyday furniture. It is not adequate for fine art, antiques, custom pieces, or anything that cannot be replaced. Their liability is also typically limited — either $0.60/lb released value or declared value that requires separate purchase.
            </p>

            <h3>Tier 3: Specialty Shippers</h3>
            <p>
              Best for: everything in the first two categories doesn't cover. Custom crating, trained handlers, appropriate freight carriers, climate control. The correct choice for art, antiques, high-value furniture, heavy specialty items, and anything irreplaceable. Higher cost, proportionately higher certainty.
            </p>

            <h2>10 Questions to Ask Before Hiring a Specialty Shipper</h2>

            <h3>1. Do you build crates in-house?</h3>
            <p>
              This is the most important question. In-house crating means the company controls quality, timeline, and fit. Outsourcing crating introduces a third party who has not seen your item and is working from measurements someone else took. In-house is non-negotiable for high-value work.
            </p>

            <h3>2. Are you licensed, bonded, and insured?</h3>
            <p>
              Any legitimate specialty shipper will answer this immediately with "yes" and be able to provide documentation. If you get hedging or they pivot to "we have been doing this for years," that is a red flag. Licensed and bonded is the baseline. Insured means their coverage protects your item, not just their business.
            </p>

            <h3>3. What carriers do you use for freight?</h3>
            <p>
              For local Austin delivery, this matters less. For interstate shipments, the carrier choice matters a great deal. Legitimate specialty shippers work with vetted white-glove or specialty freight networks — not just standard LTL brokers. Ask specifically: "Do you use specialty art freight or white-glove carriers, or standard LTL?"
            </p>

            <h3>4. Do you have climate-controlled vehicles?</h3>
            <p>
              In Austin, this is essential from May through October. If you are shipping anything heat-sensitive — art, antiques, instruments, leather furniture, electronics — and the shipper does not have climate-controlled transport, find someone who does. Austin summers will damage items in a standard truck.
            </p>

            <h3>5. How do you document condition?</h3>
            <p>
              Before crating, and after delivery. Photos at minimum. Some operations use formal condition reports. The key is that there is a documented pre-shipment condition record that protects both parties if anything happens.
            </p>

            <h3>6. What is your claims process?</h3>
            <p>
              You hope not to need this. Ask anyway. "How do you handle a damage claim?" A company that handles this clearly, with a direct answer, has been through it and has a fair process. Vague answers suggest they either have not dealt with claims or do not handle them well.
            </p>

            <h3>7. Can you provide references or reviews?</h3>
            <p>
              Google reviews are the most transparent indicator for a local Austin business. Look for reviews that mention specific item types (art, furniture, heavy items) and specific outcomes. Be skeptical of companies with only 5-star reviews across the board and no reviews that mention what was actually shipped.
            </p>

            <h3>8. What is your quote process?</h3>
            <p>
              A legitimate specialty shipper should be able to give you a specific price after asking specific questions about dimensions, weight, origin, destination, and item type. If you get "it depends" without follow-up questions, or a range so wide it is meaningless ($200–$2,000 for a single painting), they are either not being systematic or are not interested in your job.
            </p>

            <h3>9. How long have you been in Austin?</h3>
            <p>
              Tenure matters for specialty shipping. It means they have the local freight relationships, the track record, and the community accountability that comes from operating in one market for years. New entrants may be fine — but verify more carefully.
            </p>

            <h3>10. Can you handle the whole process, or just part of it?</h3>
            <p>
              Some companies crate but do not ship. Some ship but do not crate. A full-service specialty shipper handles pickup, custom crating, carrier coordination, and delivery — the whole chain. Fewer handoffs mean fewer opportunities for damage.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 See How We Answer These Questions.</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> and ask us anything on this list. We will give you straight answers and a real quote before anything moves.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition"
              >
                Get a Free Quote →
              </Link>
            </div>

            <h2>Red Flags to Watch For</h2>

            <h3>No physical address</h3>
            <p>
              A specialty shipper builds crates. That requires a workshop. If a company lists only a PO box or a phone number, they are likely a broker — someone who takes your money and hands you off to a carrier without adding any expertise to the packaging. Brokers have their place; for specialty crating, you want the company that builds your crate to also manage your shipment.
            </p>

            <h3>No Google reviews or very new profile</h3>
            <p>
              In Austin, every legitimate local business has Google reviews. Zero reviews or a profile created last month should prompt deeper research.
            </p>

            <h3>Won't give a specific price</h3>
            <p>
              "We will price it after we see it" is reasonable for unusually complex jobs. For a standard painting, sofa, or safe, a legitimate shipper should be able to give you a number after asking the right questions. Persistent vagueness on pricing is a pattern that often leads to unexpected costs at delivery.
            </p>

            <h3>Quotes significantly lower than everyone else</h3>
            <p>
              Specialty shipping costs what it costs because quality materials and trained labor cost real money. A quote that is 60% lower than competitive offers usually means something was left out — insurance, crating, inside delivery, or the quality of the freight carrier. Ask what is specifically included before accepting a dramatically low price.
            </p>

            <h3>No mention of crating for fragile or high-value items</h3>
            <p>
              If you describe a valuable painting and the shipper's response is "we will wrap it carefully," they are not a specialty shipper. They are a mover or broker using specialty language. Custom crating should be part of the conversation immediately for any fragile, high-value, or oversized item.
            </p>

            <h2>How Austin Crate & Freight Fits This Picture</h2>
            <p>
              We have been operating in Austin since 2010 out of our workshop at 3112 Windsor Rd. We build every crate in-house on our{' '}
              <Link href="/blog/safety-speed-6400-panel-saw" className="text-emerald-600 hover:underline">
                Safety Speed 6400 panel saw
              </Link>{' '}
              — precision cuts, tight tolerances, right fit. We are licensed, bonded, and insured. We have climate-controlled vehicles. We document condition before and after every job. And we give specific quotes after asking specific questions.
            </p>
            <p>
              Our services cover{' '}
              <Link href="/services/fine-art" className="text-emerald-600 hover:underline">
                fine art shipping
              </Link>
              ,{' '}
              <Link href="/services/furniture" className="text-emerald-600 hover:underline">
                furniture crating and shipping
              </Link>
              ,{' '}
              <Link href="/services/heavy-items" className="text-emerald-600 hover:underline">
                heavy item pickup
              </Link>
              , and{' '}
              <Link href="/services/medical-equipment" className="text-emerald-600 hover:underline">
                medical equipment transport
              </Link>{' '}
              throughout Austin and Central Texas.
            </p>
            <p>
              You can read more about{' '}
              <Link href="/blog/what-is-white-glove-shipping" className="text-emerald-600 hover:underline">
                what white-glove shipping actually includes
              </Link>{' '}
              and{' '}
              <Link href="/blog/custom-crating-vs-standard-boxes" className="text-emerald-600 hover:underline">
                when custom crating is the right choice vs. standard packaging
              </Link>
              .
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>What is a specialty shipping company?</h3>
            <p>
              A specialty shipping company handles items that standard carriers are not equipped for — fine art, antiques, designer furniture, heavy items, medical equipment. They offer custom crating, trained handlers, appropriate freight carriers, and higher standards of care than general freight.
            </p>

            <h3>How do I know if a company can handle fine art?</h3>
            <p>
              Ask: Do you build custom wood crates in-house? Do you use climate-controlled vehicles? What is your claims rate and resolution process? A legitimate fine art shipper answers all three with specifics. If they pivot to "high-quality packing materials" without mentioning custom crating, they are not equipped.
            </p>

            <h3>What should I ask before hiring?</h3>
            <p>
              Do you build crates in-house or outsource? Are you licensed and insured? What carriers do you use? Do you offer climate-controlled transport? Can you provide references? What does your claims process look like? How do you document condition? Get real answers to all of these before committing.
            </p>

            <h3>What is the difference between a mover and a specialty shipper?</h3>
            <p>
              Movers handle household volume — lots of items, quickly, with blanket wrap. Specialty shippers focus on individual high-value or fragile items requiring custom packaging and appropriate freight. They are complementary services — use a mover for your household, a specialty shipper for your art, antiques, and valuables.
            </p>

            <h3>Is Austin Crate & Freight licensed and insured?</h3>
            <p>
              Yes. Austin Crate & Freight is licensed, bonded, and fully insured. We build custom crates in-house at our Austin facility, document condition before every shipment, and work with vetted freight carriers for nationwide delivery. Serving the Austin area since 2010.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Questions? We Have Straightforward Answers.</p>
              <p className="text-grey-700 mb-4">
                Call <strong>(512) 240-9818</strong> or use our contact form. We will walk you through exactly what your item needs and give you a real price.
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
            <h2 className="text-2xl font-bold mb-6 text-grey-900">Austin Crate & Freight Services</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <Link href="/services/fine-art" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Fine Art Shipping</h3>
                <p className="text-grey-600 text-sm">Museum-quality crating and climate-controlled transport for paintings, sculptures, and collectibles.</p>
              </Link>
              <Link href="/services/furniture" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Furniture Shipping & Crating</h3>
                <p className="text-grey-600 text-sm">Custom wood crates for designer and antique furniture. White-glove delivery throughout Austin.</p>
              </Link>
              <Link href="/services/heavy-items" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Heavy Item Pickup</h3>
                <p className="text-grey-600 text-sm">Safes, pool tables, industrial equipment — custom crating and specialized delivery throughout Central Texas.</p>
              </Link>
              <Link href="/services/medical-equipment" className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition group">
                <h3 className="font-bold text-lg text-grey-900 group-hover:text-emerald-600 transition-colors mb-1">Medical Equipment Transport</h3>
                <p className="text-grey-600 text-sm">Chain-of-custody documentation, calibration-safe handling, HIPAA-aware transport for Austin medical facilities.</p>
              </Link>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-grey-900">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/what-is-white-glove-shipping" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">What Is White-Glove Shipping? (And Is It Worth It?)</h3>
                <p className="text-grey-600 text-sm">What the premium service level actually includes and when it is the right choice for your item.</p>
              </Link>
              <Link href="/blog/custom-crating-vs-standard-boxes" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Custom Crating vs. Standard Boxes</h3>
                <p className="text-grey-600 text-sm">When a wood crate is the only safe option — and when standard packaging is fine.</p>
              </Link>
              <Link href="/blog/moving-to-austin-ship-valuables" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Moving to Austin? Ship Your Valuables First</h3>
                <p className="text-grey-600 text-sm">A practical guide to the items your moving company is not equipped to handle.</p>
              </Link>
              <Link href="/blog/antique-shipping-guide" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-1">Antique Shipping Guide: Protecting Heirlooms in Transit</h3>
                <p className="text-grey-600 text-sm">Insurance, custom crating, and documentation before an antique leaves your hands.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
