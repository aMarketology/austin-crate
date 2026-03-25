'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function BlogIndexClient() {
  const blogPosts = [
    {
      slug: 'what-is-white-glove-shipping',
      title: 'What Is White-Glove Shipping? (And Is It Worth It?)',
      excerpt: 'A plain-English explanation of white-glove delivery — what it includes, when to choose it, and whether the cost is worth it for your item.',
      date: 'March 25, 2026',
      category: 'Shipping Guide',
      readTime: '5 min read',
      image: '🤍',
    },
    {
      slug: 'piano-shipping-austin',
      title: 'Piano Shipping in Austin, Texas: Complete Guide & Costs for 2026',
      excerpt: 'From uprights to concert grands — professional piano crating, moving, and transport in Central Texas. Costs, process, and what to ask before booking.',
      date: 'March 22, 2026',
      category: 'Specialist Shipping',
      readTime: '6 min read',
      image: '🎹',
    },
    {
      slug: 'ship-large-furniture-texas',
      title: 'How to Ship Large Furniture Across Texas (Without the Headaches)',
      excerpt: 'Custom crating, costs, and what to expect when moving large furniture pieces across the Lone Star State — antiques, designer sofas, dining tables, and more.',
      date: 'March 18, 2026',
      category: 'Shipping Guide',
      readTime: '7 min read',
      image: '🛋️',
    },
    {
      slug: 'safety-speed-6400-panel-saw',
      title: 'New Equipment Spotlight: Safety Speed 6400 Panel Saw',
      excerpt: 'We just added the Safety Speed 6400 vertical panel saw to our shop. See how this precision machine is raising the bar on every custom crate we build.',
      date: 'March 7, 2026',
      category: 'Equipment & Shop',
      readTime: '5 min read',
      image: '/IMG_8539.jpeg',
    },
    {
      slug: 'cost-to-ship-heavy-items-austin',
      title: 'How Much Does It Cost to Ship Heavy Items in Austin? (2026 Price Guide)',
      excerpt: 'Complete pricing guide for shipping heavy items in Austin, TX. Compare costs for heavy package pickup, custom furniture shipping, oversized item transport, and freight solutions.',
      date: 'February 26, 2026',
      category: 'Shipping Guide',
      readTime: '8 min read',
      image: '📦',
    },
    {
      slug: 'austin-marathon-2026',
      title: 'Austin Marathon 2026: Everything You Need to Know',
      excerpt: 'Join 30,000 runners from around the world on February 15, 2026, for the running social event of the year. Complete guide including registration, course details, and race weekend schedule.',
      date: 'February 3, 2026',
      category: 'Events',
      readTime: '6 min read',
      image: '🏃',
    },
    {
      slug: 'apartment-fire-se-austin',
      title: 'Partial Structural Collapse Reported in SE Austin Abandoned Apartment Fire',
      excerpt: 'Emergency crews respond to a major fire at an abandoned apartment complex where a partial structural collapse was reported. Latest updates on the investigation and community impact.',
      date: 'February 3, 2026',
      category: 'News',
      readTime: '4 min read',
      image: '🚒',
    },
    {
      slug: 'exxonmobil-redomicile-texas',
      title: 'ExxonMobil Looks to Move Its Legal Home from New Jersey to Texas',
      excerpt: "ExxonMobil's board unanimously recommends redomiciling from New Jersey to Texas, citing the state's legal environment and the new Texas Business Court.",
      date: 'March 10, 2026',
      category: 'Texas Business',
      readTime: '4 min read',
      image: '🛢️',
    },
    {
      slug: 'austin-kiva-hub-small-business-microloans',
      title: 'City of Austin Launches Kiva Hub to Support Small Business Owners',
      excerpt: 'Austin partners with global nonprofit Kiva to offer crowdfunded microloans from $1,000–$15,000 at 0% interest with no minimum credit score required.',
      date: 'March 24, 2026',
      category: 'Local Business',
      readTime: '3 min read',
      image: '💼',
    },
    {
      slug: 'best-furniture-stores-austin-texas',
      title: 'Best Furniture Stores in Austin, Texas (2026 Guide)',
      excerpt: 'From Four Hands Home to Mockingbird Made — the top-rated furniture stores in Austin for 2026, plus budget-friendly and free furniture resources.',
      date: 'March 25, 2026',
      category: 'Austin Living',
      readTime: '5 min read',
      image: '🛋️',
    },
    {
      slug: 'moveoutatx-austin-resource-recovery-returns-in-partnership-to-ut-office-of-sustainability',
      title: 'MoveOutATX and Free Furniture Market Return for Summer 2026',
      excerpt: 'Austin Resource Recovery and the UT Office of Sustainability bring back MoveOutATX — donation stations and a free furniture market returning to West Campus in late July 2026.',
      date: 'March 25, 2026',
      category: 'Community',
      readTime: '4 min read',
      image: '♻️',
    },
    {
      slug: 'lottery-ticket-round-rock',
      title: '$1 Million Scratch Lottery Ticket Sold at Round Rock Gas Station',
      excerpt: 'A lucky lottery player in Round Rock is $1 million richer after purchasing a winning scratch-off ticket at a local Chevron gas station on I-35.',
      date: 'February 3, 2026',
      category: 'Local News',
      readTime: '3 min read',
      image: '🎰',
    },
  ]

  return (
    <div className="min-h-screen bg-grey-50 flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Austin News & Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-grey-300 max-w-3xl mx-auto"
          >
            Stay informed with the latest news, events, and stories from Austin and Central Texas
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="flex-1 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col group">
                    {/* Icon/Image Header */}
                    {post.image.startsWith('/') ? (
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-center">
                        <span className="text-6xl">{post.image}</span>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3 w-fit">
                        {post.category}
                      </span>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-grey-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-grey-600 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-grey-500 pt-4 border-t border-grey-200">
                        <span>📅 {post.date}</span>
                        <span>⏱️ {post.readTime}</span>
                      </div>
                      
                      {/* Read More Link */}
                      <div className="mt-4">
                        <span className="text-emerald-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                          Read More 
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Subscribe to get the latest Austin news and stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-grey-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-grey-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
