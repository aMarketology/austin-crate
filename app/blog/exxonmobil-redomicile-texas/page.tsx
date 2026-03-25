import { Metadata } from 'next'
import SEOWrapper from '@/app/components/SEOWrapper'
import BlogSeoAtx from '@/app/components/BlogSeoAtx'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/exxonmobil-redomicile-texas'

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
  }
}

export default function ExxonMobilRedomicileBlog() {
  return (
    <SEOWrapper slug={SLUG}>
      <BlogSeoAtx
        title="ExxonMobil Looks to Move Its Legal Home from New Jersey to Texas"
        date="March 10, 2026"
        isoDate="2026-03-10"
        author="Katharine Finnerty & Valencia Jones"
        category="Texas Business"
        readTime="4 min read"
        description="ExxonMobil's board unanimously recommends redomiciling its corporate registration from New Jersey to Texas — citing the state's legal environment, the new Texas Business Court, and alignment with its Spring, TX headquarters."
      >
        <p className="lead text-xl text-gray-700 mb-8">
          <strong>TEXAS —</strong> ExxonMobil announced on Tuesday that it is recommending moving its corporate
          registration from New Jersey to Texas, where its headquarters has been located since 1989. The move, known
          as a{' '}
          <a
            href="https://spectrumlocalnews.com/tx/austin/news/2026/03/10/exxonmobil-looks-to-move-its-legal-home-to-texas"
            target="_blank"
            rel="noopener noreferrer"
          >
            redomiciliation
          </a>
          , would make Texas ExxonMobil&apos;s legal home as well as its operational one.
        </p>

        <h2>What Is Redomiciliation?</h2>
        <p>
          Redomiciling is the process of moving a corporation&apos;s <strong>legal home</strong> to a new jurisdiction
          while maintaining its existing legal existence. It does not create a new company or dissolve the old one —
          it simply shifts which state&apos;s corporate law governs the business.
        </p>
        <p>
          According to ExxonMobil, the redomiciliation{' '}
          <em>&ldquo;will not affect business operations, management, strategy, assets, or employee locations.&rdquo;</em>
        </p>

        <h2>Why Texas?</h2>
        <p>
          ExxonMobil cited two primary reasons for the proposed move:
        </p>
        <ul>
          <li>Texas&apos; <strong>legal and regulatory environment</strong>, which the company says is more aligned with
          its business interests than New Jersey&apos;s.</li>
          <li>The creation of the <strong>Texas Business Court</strong> — a specialised court system designed to handle
          complex commercial disputes, which launched in 2024.</li>
        </ul>

        <p>
          ExxonMobil Chairman and CEO <strong>Darren Woods</strong> put it plainly in the company&apos;s news release:
        </p>
        <blockquote>
          <p>
            &ldquo;Over the past several years, Texas has made a noticeable effort to embrace the business community.
            In doing so, it has created a policy and regulatory environment that can allow the company to maximize
            shareholder value. Aligning our legal home with our operating home, in a state that understands our business
            and has a stake in the company&apos;s success, is important.&rdquo;
          </p>
        </blockquote>

        <h2>Governor Abbott Welcomes the Move</h2>
        <p>
          Texas Governor <strong>Greg Abbott</strong> issued a statement praising the company&apos;s decision:
        </p>
        <blockquote>
          <p>
            &ldquo;Freed from the stranglehold of over-regulation, Texas is where global brand leaders thrive and jobs
            for hardworking Texans grow. I thank ExxonMobil for their decision to redomicile in Texas and for their
            long-standing partnership with our state. With this decision, Texas will further dominate the corporate
            landscape and ensure our economic growth reaches new heights.&rdquo;
          </p>
        </blockquote>

        <h2>ExxonMobil&apos;s Texas Roots</h2>
        <p>
          The announcement underscores a corporate identity that has long been rooted in the Lone Star State.
          ExxonMobil has been headquartered in <strong>Spring, Texas</strong> since 1989, and approximately{' '}
          <strong>30% of its global employees</strong> are located in Texas.
        </p>
        <p>
          The company joins a growing list of major corporations that have shifted their legal or operational home to
          Texas. Most notably, both <strong>SpaceX</strong> and <strong>Tesla</strong> — previously incorporated in
          Delaware — relocated to Texas under Elon Musk&apos;s leadership.
        </p>

        <h2>What Happens Next?</h2>
        <p>
          The proposal was filed Tuesday with the <strong>U.S. Securities and Exchange Commission (SEC)</strong>.
          ExxonMobil shareholders will be asked to vote on the measure at an upcoming annual meeting. The board has
          unanimously recommended the move.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Detail</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200">Info</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Current legal home', 'New Jersey'],
                ['Proposed legal home', 'Texas'],
                ['HQ location (since 1989)', 'Spring, Texas'],
                ['TX employee share', '~30% of global workforce'],
                ['Board recommendation', 'Unanimous'],
                ['Next step', 'Shareholder vote at upcoming annual meeting'],
                ['SEC filing date', 'March 10, 2026'],
              ].map(([detail, info]) => (
                <tr key={detail} className="even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{detail}</td>
                  <td className="px-4 py-3 text-gray-700">{info}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          <em>
            Source:{' '}
            <a
              href="https://spectrumlocalnews.com/tx/austin/news/2026/03/10/exxonmobil-looks-to-move-its-legal-home-to-texas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spectrum News Austin — ExxonMobil looks to move its legal home from New Jersey to Texas
            </a>
            , reported by Katharine Finnerty and Valencia Jones, March 10, 2026.
          </em>
        </p>
      </BlogSeoAtx>
    </SEOWrapper>
  )
}
