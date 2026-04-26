'use client'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import emailjs from '@emailjs/browser'

// Common item size presets, lets customers skip manual measurement entry
const SIZE_PRESETS = [
  { label: 'Small Box', icon: '📦', desc: 'Under 2 cu ft · ~50 lbs', length: '24', width: '18', height: '12', weight: '50' },
  { label: 'Artwork / Print', icon: '🎨', desc: 'Framed or canvas piece', length: '48', width: '36', height: '4', weight: '15' },
  { label: 'TV / Monitor', icon: '📺', desc: '55" flat screen', length: '52', width: '6', height: '33', weight: '45' },
  { label: 'Chair / Side Table', icon: '🪑', desc: 'Small furniture', length: '36', width: '36', height: '36', weight: '80' },
  { label: 'Sofa / Cabinet', icon: '🛋️', desc: 'Large furniture piece', length: '84', width: '36', height: '36', weight: '200' },
  { label: 'Medical Equipment', icon: '🏥', desc: 'Varies by device', length: '48', width: '24', height: '24', weight: '150' },
] as const

export default function ContactClient() {
  const router = useRouter()
  const formLoadTime = useRef(Date.now())

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
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null)
  // Honeypot, hidden from real users; bots will fill it
  const [honeyPot, setHoneyPot] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Auto-format phone number as (XXX) XXX-XXXX while typing
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    let formatted = digits
    if (digits.length >= 7) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    } else if (digits.length >= 4) {
      formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else if (digits.length >= 1) {
      formatted = `(${digits}`
    }
    setFormData(prev => ({ ...prev, phone: formatted }))
  }

  const applyPreset = (preset: typeof SIZE_PRESETS[number]) => {
    setSelectedPreset(preset.label)
    setUnknownDimensions(false)
    setFormData(prev => ({
      ...prev,
      length: preset.length,
      width: preset.width,
      height: preset.height,
      weight: preset.weight,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Spam guard 1, honeypot filled = bot
    if (honeyPot) {
      router.push('/thank-you')
      return
    }

    // Spam guard 2, submitted in under 4 seconds = bot
    if (Date.now() - formLoadTime.current < 4000) {
      router.push('/thank-you')
      return
    }

    setIsSubmitting(true)
    setError('')

    const dimensionsText = unknownDimensions
      ? 'Unknown, customer will discuss'
      : `${formData.length}" L × ${formData.width}" W × ${formData.height}" H`
    const weightText = unknownDimensions ? 'Unknown' : `${formData.weight} lbs`
    const serviceLabel = formData.serviceType === 'shipping' ? 'Shipping Service' : 'Crate Purchase Only'

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service_type: serviceLabel,
      dimensions: dimensionsText,
      weight: weightText,
      destination_zip: formData.serviceType === 'shipping' ? (formData.zipcode || 'Not provided') : 'N/A',
      message: formData.message || 'No additional details provided.',
      source_url: typeof window !== 'undefined' ? window.location.href : '',
      reply_to: formData.email,
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      // Fire Google Ads conversion before redirecting
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        ;(window as any).gtag('event', 'conversion', {
          send_to: 'AW-17672216220/jQfaCPH1vI8cEJy94upB',
          value: 20.0,
          currency: 'USD',
        })
      }
      router.push('/thank-you')
    } catch (err: any) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please try again or call us at (512) 240-9818.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <Breadcrumbs />

      {/* Contact Section */}
      <section className="flex-1 py-16 px-4 bg-white mt-20">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Free Quote</h2>
            <p className="text-gray-500 mb-6 text-sm">Takes about 60 seconds, no commitment required</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Honeypot, must stay hidden from real users */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={honeyPot}
                  onChange={(e) => setHoneyPot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name + Phone side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    autoComplete="tel"
                    placeholder="(512) 000-0000"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-gray-700 font-semibold mb-1">
                  What do you need? *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="shipping">Crating + Shipping (end-to-end)</option>
                  <option value="crate">Crate Purchase Only (I handle shipping)</option>
                </select>
              </div>

              {/* ── Size Presets ──────────────────────────────────── */}
              <div>
                <p className="text-gray-700 font-semibold mb-2">
                  What best describes your item? <span className="text-gray-400 font-normal">(tap to pre-fill size)</span>
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                  {SIZE_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => applyPreset(preset)}
                      className={`text-left p-3 rounded-lg border-2 transition-all ${
                        selectedPreset === preset.label
                          ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50'
                      }`}
                    >
                      <div className="text-xl mb-0.5">{preset.icon}</div>
                      <div className="text-sm font-bold text-gray-800 leading-tight">{preset.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{preset.desc}</div>
                    </button>
                  ))}
                  {/* "I don't know" tile */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPreset("unknown")
                      setUnknownDimensions(true)
                      setFormData(prev => ({ ...prev, length: '', width: '', height: '', weight: '' }))
                    }}
                    className={`text-left p-3 rounded-lg border-2 transition-all ${
                      selectedPreset === 'unknown'
                        ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50'
                    }`}
                  >
                    <div className="text-xl mb-0.5">🤷</div>
                    <div className="text-sm font-bold text-gray-800 leading-tight">Not Sure</div>
                    <div className="text-xs text-gray-500 mt-0.5">We&apos;ll figure it out</div>
                  </button>
                </div>

                {/* Manual entry, shown when no preset or "unknown" not selected */}
                {!unknownDimensions && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                      Approximate dimensions &amp; weight, your best guess is fine
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label htmlFor="length" className="block text-gray-700 text-sm font-semibold mb-1">
                          Length (in)
                        </label>
                        <input
                          type="number"
                          id="length"
                          name="length"
                          value={formData.length}
                          onChange={handleChange}
                          required={!unknownDimensions}
                          min="1"
                          placeholder="48"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="width" className="block text-gray-700 text-sm font-semibold mb-1">
                          Width (in)
                        </label>
                        <input
                          type="number"
                          id="width"
                          name="width"
                          value={formData.width}
                          onChange={handleChange}
                          required={!unknownDimensions}
                          min="1"
                          placeholder="36"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="height" className="block text-gray-700 text-sm font-semibold mb-1">
                          Height (in)
                        </label>
                        <input
                          type="number"
                          id="height"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          required={!unknownDimensions}
                          min="1"
                          placeholder="24"
                          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="weight" className="block text-gray-700 text-sm font-semibold mb-1">
                        Approx. Weight (lbs)
                      </label>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required={!unknownDimensions}
                        min="1"
                        placeholder="150"
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                    </div>
                  </div>
                )}

                {unknownDimensions && (
                  <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-4 py-2">
                    ✅ No problem, we&apos;ll reach out to get measurements or send someone to take a look.
                  </p>
                )}
              </div>

              {/* Destination ZIP, only for shipping */}
              {formData.serviceType === 'shipping' && (
                <div>
                  <label htmlFor="zipcode" className="block text-gray-700 font-semibold mb-1">
                    Destination ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    required={formData.serviceType === 'shipping'}
                    placeholder="e.g. 90210"
                    maxLength={5}
                    pattern="[0-9]{5}"
                    inputMode="numeric"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                  Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Fragile antique, needs pickup from 2nd floor, destination is a museum..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition transform hover:-translate-y-1 disabled:hover:translate-y-0 text-lg"
              >
                {isSubmitting ? '⏳ Sending your request...' : '🚀 Get My Free Quote'}
              </button>

              <p className="text-center text-xs text-gray-400">
                We typically respond within a few hours during business hours. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
