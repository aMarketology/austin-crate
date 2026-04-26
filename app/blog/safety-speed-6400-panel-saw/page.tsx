import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/safety-speed-6400-panel-saw'

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
      images: [{ url: 'https://austincrate.com/IMG_8539.jpeg', width: 1200, height: 800, alt: 'Safety Speed 6400 Panel Saw at Austin Crate & Freight' }],
      publishedTime: entry?.publishDate,
      modifiedTime: entry?.modifiedDate,
    },
  }
}

export default function SafetySpeed6400Blog() {
  return (
    <SEOWrapper slug={SLUG}>
      <div className="min-h-screen bg-grey-50 flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-emerald hover:underline mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              New Equipment Spotlight: Safety Speed 6400 Panel Saw
            </h1>
            <p className="text-xl text-grey-300 mb-6">
              How our latest panel saw is raising the bar on precision crating in Austin
            </p>
            <div className="flex flex-wrap gap-4 text-grey-300 text-sm">
              <span>📅 March 7, 2026</span>
              <span>🏭 Equipment & Shop</span>
              <span>⏱️ 5 min read</span>
            </div>
          </div>
        </section>

        {/* Thumbnail Image */}
        <div className="w-full bg-grey-900">
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/IMG_8539.jpeg"
                alt="Safety Speed 6400 Panel Saw at Austin Crate & Freight shop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <section className="flex-1 py-16 px-4 bg-white">
          <article className="max-w-3xl mx-auto prose prose-lg">

            <p className="lead text-xl text-grey-700 mb-8">
              We are excited to introduce the newest addition to the Austin Crate &amp; Freight shop floor: the <strong>Safety Speed 6400 vertical panel saw</strong>. This machine is a serious upgrade, and it directly translates into tighter, cleaner, and more reliable custom crates for every customer we serve.
            </p>

            <h2>What Is the Safety Speed 6400?</h2>
            <p>
              The Safety Speed 6400 is a heavy-duty vertical panel saw built for professional woodworking and industrial applications. Designed and manufactured in the United States, it is purpose-built to rip and crosscut large sheet goods, plywood, OSB, MDF, and hardwood panels, with extreme accuracy and repeatable results.
            </p>
            <p>
              Unlike a standard table saw, a vertical panel saw holds the material upright against a wall-mounted frame. This means we can safely and efficiently process full 4×8 and 4×10 sheets without taking up a massive footprint on the shop floor, and without the safety hazards that come with man-handling large panels through a horizontal blade.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-2 text-lg">🪚 Key Specs at a Glance</p>
              <ul className="text-grey-700 space-y-2 mt-3">
                <li><strong>Model:</strong> Safety Speed 6400 Vertical Panel Saw</li>
                <li><strong>Max Panel Size:</strong> 60" × 120" (supports oversize sheet goods)</li>
                <li><strong>Motor:</strong> 3 HP, heavy-duty direct-drive</li>
                <li><strong>Blade Speed:</strong> 4,000 RPM for clean, splinter-free cuts</li>
                <li><strong>Cut Types:</strong> Rip cuts, crosscuts, diagonal cuts</li>
                <li><strong>Made in:</strong> USA 🇺🇸</li>
              </ul>
            </div>

            <h2>Why a Panel Saw Matters for Custom Crating</h2>
            <p>
              Custom shipping crates are only as good as the cuts that build them. When panels are even a fraction of an inch off, gaps form, corners won&apos;t close flush, and the structural integrity of the crate is compromised. For items like fine art, medical equipment, and antique furniture, where vibration, moisture, and impact protection are critical, there is zero room for sloppy joinery.
            </p>
            <p>
              Before adding the Safety Speed 6400 to our shop, our team was already producing high-quality crates. But we knew that investing in a dedicated panel saw would allow us to cut faster, hold tighter tolerances, and waste less material in the process.
            </p>

            <h2>What Changes for Our Customers</h2>

            <h3>Tighter Tolerances, Stronger Crates</h3>
            <p>
              The 6400&apos;s precision fence system and roller-bearing carriage allow cuts accurate to within 1/32". For museum-quality crating, where foam inserts must fit perfectly and panels must seal completely, that level of precision matters enormously.
            </p>

            <h3>Faster Turnaround</h3>
            <p>
              A vertical panel saw dramatically reduces the time it takes to process sheet goods. What used to require two people and multiple setups can now be handled by one operator in a single pass. That means we can quote faster builds without sacrificing quality, a direct win for customers with tight timelines.
            </p>

            <h3>Cleaner Cuts on Fine Materials</h3>
            <p>
              The 6400 pairs with a fine-tooth scoring blade that virtually eliminates tearout on plywood face veneers. When we are building interior panels for fine art crates or decorative furniture pieces, the finish quality of every cut panel matters, both structurally and aesthetically.
            </p>

            <h3>Improved Safety in the Shop</h3>
            <p>
              Panel saws are inherently safer than table saws for large sheet goods. The material stays vertical and gravity-supported against the frame rather than being fed manually through a horizontal blade. Fewer awkward lifts, less binding, and a much lower risk of kickback. Our team appreciates the upgrade as much as our customers will.
            </p>

            <div className="bg-grey-100 p-6 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-3 text-grey-900">🏗️ What We Build With It</h3>
              <p className="text-grey-700 mb-3">
                The Safety Speed 6400 is now part of every custom crate build at Austin Crate &amp; Freight. That includes:
              </p>
              <ul className="text-grey-700 space-y-2">
                <li>✅ <strong>Fine art crates</strong>, museum-spec panel crates for paintings, sculpture, and prints</li>
                <li>✅ <strong>Custom furniture crates</strong>, snug-fit crates for antiques, designer pieces, and upholstered items</li>
                <li>✅ <strong>Medical equipment packaging</strong>, reinforced crates for sensitive devices and imaging equipment</li>
                <li>✅ <strong>Oversized & heavy item crates</strong>, industrial-spec crates for machinery, equipment, and trade show displays</li>
              </ul>
            </div>

            <h2>A Note From the Team</h2>
            <blockquote className="border-l-4 border-emerald pl-6 italic my-8">
              &ldquo;We take a lot of pride in the quality of our crates. Adding the Safety Speed 6400 lets us work faster without cutting corners, pun intended. Every panel comes off that saw clean and square. It shows in the finished product.&rdquo;
              <footer className="text-grey-600 mt-2">Austin Crate &amp; Freight Shop Team</footer>
            </blockquote>

            <h2>What This Means if You Need a Custom Crate</h2>
            <p>
              If you have been putting off getting a quote for a custom shipping crate, now is a great time to reach out. With the Safety Speed 6400 in the shop, we are producing better crates, faster, and we are ready to take on projects of any size.
            </p>
            <p>
              Whether you need a single specialty crate for a valuable piece of art or a production run of crates for an equipment rollout, Austin Crate &amp; Freight has the equipment and experience to get it done right.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 not-prose">
              <p className="font-semibold text-emerald-800 mb-3 text-lg">📞 Ready to Get a Quote?</p>
              <p className="text-grey-700 mb-4">
                Call us at <strong>(512) 240-9818</strong> or fill out our online form. We will get back to you with a custom quote, usually within 24 hours.
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

        {/* Related Articles */}
        <section className="py-12 px-4 bg-grey-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-4">
              <Link href="/blog/cost-to-ship-heavy-items-austin" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">How Much Does It Cost to Ship Heavy Items in Austin?</h3>
                <p className="text-grey-600 text-sm">Complete 2026 pricing guide for specialty shipping in Austin, TX.</p>
              </Link>
              <Link href="/services/fine-art" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-grey-900 mb-2">Fine Art Shipping &amp; Custom Crating</h3>
                <p className="text-grey-600 text-sm">Museum-quality crating and white-glove transport for paintings, sculpture, and more.</p>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </SEOWrapper>
  )
}
