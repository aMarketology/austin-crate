import { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import SEOWrapper from '@/app/components/SEOWrapper'
import { getEntry } from '@/lib/content-registry'

const SLUG = '/blog/austin-marathon-2026'

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

export default function AustinMarathonBlog() {
  return (
    <SEOWrapper slug={SLUG}>
    <div className="min-h-screen bg-grey-50 flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-emerald-200 hover:underline mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Austin Marathon 2026: Everything You Need to Know
          </h1>
          <div className="flex gap-4 text-grey-200 text-sm">
            <span>📅 February 3, 2026</span>
            <span>🏃 Race Day: February 15, 2026</span>
            <span>⏱️ 6 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="flex-1 py-16 px-4 bg-white">
        <article className="max-w-3xl mx-auto prose prose-lg">
          <p className="lead text-xl text-grey-700 mb-8">
            Get ready to run Austin! The 2026 Austin Marathon is set for Sunday, February 15, 2026, bringing together 30,000 runners from around the world for the running social event of the year. Whether you're a seasoned marathoner or a first-time half-marathoner, here's everything you need to know.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald p-6 my-8">
            <p className="font-semibold text-emerald-800 mb-2">🎯 Quick Facts</p>
            <ul className="text-grey-700 mb-0 space-y-2">
              <li><strong>Date:</strong> Sunday, February 15, 2026</li>
              <li><strong>Start Time:</strong> 6:55 AM (Wave starts)</li>
              <li><strong>Expected Participants:</strong> 30,000+ runners</li>
              <li><strong>Registration:</strong> Now open at youraustinmarathon.com</li>
            </ul>
          </div>

          <h2>Race Weekend Schedule</h2>
          <p>
            The Austin Marathon weekend is packed with events for runners, families, and spectators. Here's the complete schedule:
          </p>

          <h3>Saturday, February 14, 2026</h3>
          <ul>
            <li><strong>10:00 AM - 8:00 PM</strong> - Expo & Packet Pickup at Palmer Events Center</li>
            <li><strong>12:00 PM - 4:00 PM</strong> - Running Seminars & Clinics</li>
            <li><strong>6:00 PM</strong> - Pre-Race Pasta Dinner</li>
          </ul>

          <h3>Sunday, February 15, 2026 - Race Day</h3>
          <ul>
            <li><strong>5:30 AM</strong> - Gear check and corrals open</li>
            <li><strong>6:55 AM</strong> - Marathon wave 1 starts</li>
            <li><strong>7:00 AM</strong> - Half Marathon wave 1 starts</li>
            <li><strong>8:00 AM</strong> - 5K starts</li>
            <li><strong>12:00 PM</strong> - Post-race celebration begins</li>
            <li><strong>2:00 PM</strong> - Course closes (6.5 hour limit)</li>
          </ul>

          <h2>Registration & Pricing</h2>
          <p>
            Online registration is now open! Early bird pricing is available through December 31, 2025. Here's the pricing breakdown:
          </p>

          <div className="bg-grey-100 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">2026 Registration Fees</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span><strong>Full Marathon</strong></span>
                <span className="text-emerald-700 font-bold">$120 - $180</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span><strong>Half Marathon</strong></span>
                <span className="text-emerald-700 font-bold">$90 - $140</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span><strong>5K</strong></span>
                <span className="text-emerald-700 font-bold">$40 - $60</span>
              </div>
              <p className="text-sm text-grey-600 mt-4">
                *Prices increase as race day approaches. Register early to save!
              </p>
            </div>
          </div>

          <h2>The Course</h2>
          <p>
            The Austin Marathon is known for its scenic, challenging course that showcases the best of Austin. The course winds through downtown Austin, along Lady Bird Lake, through the University of Texas campus, and features the iconic mile-long climb up Congress Avenue.
          </p>

          <h3>Course Highlights:</h3>
          <ul>
            <li>🌉 Cross the Congress Avenue Bridge at sunrise</li>
            <li>🎵 Live music at multiple aid stations</li>
            <li>🎓 Run through the University of Texas campus</li>
            <li>🌳 Scenic views along Lady Bird Lake Trail</li>
            <li>🏛️ Finish at the Texas State Capitol</li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <p className="font-semibold text-amber-800 mb-2">⚠️ Course Challenge</p>
            <p className="text-grey-700 mb-0">
              The Austin Marathon course features several challenging hills, including the infamous mile 10-11 climb. Train accordingly and respect the course!
            </p>
          </div>

          <h2>Training Tips</h2>
          <p>
            With the race in mid-February, now is the perfect time to begin your training program. Most marathon training plans require 16-20 weeks of preparation.
          </p>

          <h3>Training Recommendations:</h3>
          <ul>
            <li><strong>Beginners:</strong> Start with a base of 15-20 miles per week</li>
            <li><strong>Experienced:</strong> Follow a structured 18-week plan</li>
            <li><strong>Heat Adaptation:</strong> Train in Austin's climate when possible</li>
            <li><strong>Hill Training:</strong> Include weekly hill repeats</li>
            <li><strong>Long Runs:</strong> Build to 20+ miles for full marathon</li>
          </ul>

          <h2>What's Included</h2>
          <p>
            Your registration includes a full race experience with premium amenities:
          </p>

          <ul>
            <li>✅ Official race tech shirt</li>
            <li>✅ Finisher medal (all distances)</li>
            <li>✅ Post-race food and beverages</li>
            <li>✅ Professional timing and results</li>
            <li>✅ Aid stations every 1.5-2 miles</li>
            <li>✅ Medical support along the course</li>
            <li>✅ Gear check service</li>
            <li>✅ Live race tracking for spectators</li>
            <li>✅ Post-race party with live music</li>
          </ul>

          <h2>Spectator Information</h2>
          <p>
            The Austin Marathon is a fantastic spectator event! With multiple viewing areas and easy access via public transportation, friends and family can cheer on runners throughout the course.
          </p>

          <h3>Best Viewing Spots:</h3>
          <ul>
            <li><strong>Mile 1:</strong> Congress Avenue Bridge</li>
            <li><strong>Mile 6:</strong> University of Texas campus</li>
            <li><strong>Mile 13:</strong> Halfway point celebration</li>
            <li><strong>Mile 20:</strong> Lamar Boulevard</li>
            <li><strong>Finish Line:</strong> Texas State Capitol</li>
          </ul>

          <div className="bg-emerald-50 border-l-4 border-emerald p-6 my-8">
            <p className="font-semibold text-emerald-800 mb-2">🎉 Race Weekend Activities</p>
            <p className="text-grey-700">
              The marathon weekend features a health and fitness expo, live music, food vendors, and family-friendly activities. The expo at the Palmer Events Center is free and open to the public on Saturday.
            </p>
          </div>

          <h2>Hotel and Travel</h2>
          <p>
            Austin hotels fill up quickly for marathon weekend. Book early to secure the best rates and locations. The marathon offers special hotel rates with partner properties throughout downtown Austin.
          </p>

          <h3>Recommended Areas to Stay:</h3>
          <ul>
            <li><strong>Downtown Austin</strong> - Walking distance to start/finish</li>
            <li><strong>South Congress</strong> - Near course and restaurants</li>
            <li><strong>University Area</strong> - Budget-friendly options</li>
            <li><strong>East Austin</strong> - Trendy hotels and dining</li>
          </ul>

          <h2>Race Day Tips</h2>
          <div className="bg-grey-100 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4">🏃‍♂️ Essential Race Day Checklist</h3>
            <ul className="space-y-2">
              <li>✅ Arrive at least 90 minutes before your start time</li>
              <li>✅ Use the restroom before entering your corral</li>
              <li>✅ Eat a familiar breakfast 2-3 hours before the race</li>
              <li>✅ Pin your bib on the front of your shirt</li>
              <li>✅ Carry ID and emergency contact information</li>
              <li>✅ Dress for race day weather (layers recommended)</li>
              <li>✅ Bring gear check bag if needed</li>
              <li>✅ Have a spectator plan and meeting spot</li>
            </ul>
          </div>

          <h2>Weather Expectations</h2>
          <p>
            February in Austin typically offers ideal running weather with temperatures ranging from 40-65°F. However, conditions can vary, so be prepared for anything from cold starts to warming temperatures as the sun rises.
          </p>

          <h2>Why Run Austin?</h2>
          <p>
            The Austin Marathon has earned its reputation as one of the best marathons in the country. Here's why runners love it:
          </p>

          <blockquote className="border-l-4 border-emerald pl-6 italic my-8">
            "The Austin Marathon is more than just a race – it's a celebration of our city's vibrant running community. The energy from the crowds, the live music, and the incredible volunteers make it an unforgettable experience."
            <footer className="text-grey-600 mt-2">— 2025 Marathon Participant</footer>
          </blockquote>

          <ul>
            <li>🎵 Live music every mile - over 40 bands!</li>
            <li>🌮 Best post-race food in the country</li>
            <li>👥 Incredibly supportive crowd</li>
            <li>🏙️ Beautiful course through Austin landmarks</li>
            <li>🎉 Amazing post-race party atmosphere</li>
            <li>💯 Well-organized with excellent volunteer support</li>
          </ul>

          <h2>Charity Running</h2>
          <p>
            Consider running for one of the official Austin Marathon charity partners. Charity runners receive guaranteed entry, fundraising support, and VIP race weekend experiences while supporting important causes in the Austin community.
          </p>

          <h2>Register Now</h2>
          <p>
            Don't wait – registration prices increase as race day approaches. Visit{' '}
            <a href="https://youraustinmarathon.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">
              youraustinmarathon.com
            </a>
            {' '}to register for the 2026 Austin Marathon today!
          </p>

          <div className="bg-emerald-600 text-white p-8 rounded-lg my-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Run?</h3>
            <p className="mb-6">Join 30,000 runners on February 15, 2026</p>
            <a 
              href="https://youraustinmarathon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-bold hover:bg-grey-100 transition"
            >
              Register Now →
            </a>
          </div>

          <h2>Stay Connected</h2>
          <p>
            Follow the Austin Marathon on social media for training tips, course updates, and race day information:
          </p>
          <ul>
            <li>📱 Instagram: @AustinMarathon</li>
            <li>📘 Facebook: Austin Marathon</li>
            <li>🐦 Twitter: @AustinMarathon</li>
            <li>💌 Sign up for email updates at youraustinmarathon.com</li>
          </ul>
        </article>
      </section>

      {/* Related Articles */}
      <section className="py-12 px-4 bg-grey-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-4">
            <Link href="/blog/apartment-fire-se-austin" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-grey-900 mb-2">Partial Structural Collapse in SE Austin Apartment Fire</h3>
              <p className="text-grey-600 text-sm">Emergency crews respond to abandoned building...</p>
            </Link>
            <Link href="/blog/lottery-ticket-round-rock" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg text-grey-900 mb-2">$1 Million Lottery Ticket Sold in Round Rock</h3>
              <p className="text-grey-600 text-sm">Lucky winner hasn't come forward yet...</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </SEOWrapper>
  )
}
