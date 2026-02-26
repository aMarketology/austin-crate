'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ContactClient() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'shipping',
    length: '',
    width: '',
    height: '',
    weight: '',
    zipcode: '',
    message: ''
  })
  const [unknownDimensions, setUnknownDimensions] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted, preventing default...')
    setIsSubmitting(true)
    setError('')

    try {
      console.log('Sending data to API:', formData)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, sourceUrl: window.location.href }),
      })

      console.log('Response status:', response.status)
      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Redirect to thank you page on success
      router.push('/thank-you')
    } catch (err: any) {
      console.error('Form submission error:', err)
      setError(err.message || 'Something went wrong. Please try again or call us directly.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Breadcrumbs />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-grey-900 to-grey-800 text-white py-24 px-4 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-grey-300">Get your free shipping quote today</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ready to ship your fine art, designer furniture, or medical equipment? Contact us today for a free consultation and quote. We're here to answer all your questions and provide expert specialty shipping solutions.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:(512) 240-9818" className="text-emerald-600 font-bold hover:text-emerald-700">
                    (512) 240-9818
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:hello@austincrate.com" className="text-emerald-600 font-bold hover:text-emerald-700">
                    hello@austincrate.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-700">3112 Windsor Rd<br/>Austin, TX 78703</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="text-3xl">🕒</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: Open - 6pm<br/>
                    Saturday: By Appointment<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(512) 240-9818"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-gray-700 font-semibold mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="shipping">Shipping Service</option>
                  <option value="crate">Crate Purchase Only</option>
                </select>
              </div>

              {/* Unknown Dimensions Checkbox */}
              <div className="flex items-center gap-3 p-3 bg-emerald-50 border border-emerald-200 rounded">
                <input
                  type="checkbox"
                  id="unknownDimensions"
                  checked={unknownDimensions}
                  onChange={(e) => {
                    setUnknownDimensions(e.target.checked)
                    if (e.target.checked) {
                      setFormData(prev => ({ ...prev, length: '', width: '', height: '', weight: '' }))
                    }
                  }}
                  className="w-5 h-5 accent-emerald-600 cursor-pointer"
                />
                <label htmlFor="unknownDimensions" className="text-gray-700 font-semibold cursor-pointer">
                  I don&apos;t know the dimensions — we&apos;ll figure it out together
                </label>
              </div>

              {/* Dimensions Grid */}
              {!unknownDimensions && (
                <>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="length" className="block text-gray-700 font-semibold mb-2">
                        Length (in) *
                      </label>
                      <input
                        type="number"
                        id="length"
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
                        required
                        placeholder="48"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="width" className="block text-gray-700 font-semibold mb-2">
                        Width (in) *
                      </label>
                      <input
                        type="number"
                        id="width"
                        name="width"
                        value={formData.width}
                        onChange={handleChange}
                        required
                        placeholder="36"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="height" className="block text-gray-700 font-semibold mb-2">
                        Height (in) *
                      </label>
                      <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                        placeholder="24"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="weight" className="block text-gray-700 font-semibold mb-2">
                      Weight (lbs) *
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      required
                      placeholder="150"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </>
              )}

              {/* Conditionally show zipcode for shipping */}
              {formData.serviceType === 'shipping' && (
                <div>
                  <label htmlFor="zipcode" className="block text-gray-700 font-semibold mb-2">
                    Destination Zipcode *
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    required={formData.serviceType === 'shipping'}
                    placeholder="78703"
                    maxLength={5}
                    pattern="[0-9]{5}"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your shipping needs..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded transition transform hover:-translate-y-1 disabled:hover:translate-y-0"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
