'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { faqSchema } from '@/lib/faq-schema'

export default function HomeClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Get the parent section's dimensions
    const getParentDimensions = () => {
      const section = canvas.closest('section')
      if (section) {
        canvas.width = section.offsetWidth
        canvas.height = section.offsetHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }
    getParentDimensions()
    window.addEventListener('resize', getParentDimensions)

    const dotSpacing = 24
    const baseDotSize = 1.5
    const maxDotSize = 6 // Increased from 4 for bigger dots
    const trailLength = 250 // Increased from 150 for longer trails

    // Enhanced vibrant prism spectrum colors (more saturated and colorful)
    const prismColors = [
      { r: 255, g: 20, b: 20 },     // bright red
      { r: 255, g: 80, b: 0 },      // red-orange
      { r: 255, g: 150, b: 0 },     // bright orange
      { r: 255, g: 200, b: 0 },     // golden
      { r: 255, g: 255, b: 0 },     // yellow
      { r: 200, g: 255, b: 0 },     // yellow-green
      { r: 100, g: 255, b: 50 },    // lime green
      { r: 0, g: 255, b: 150 },     // spring green
      { r: 0, g: 230, b: 230 },     // cyan
      { r: 0, g: 180, b: 255 },     // sky blue
      { r: 80, g: 120, b: 255 },    // bright blue
      { r: 130, g: 80, b: 255 },    // indigo
      { r: 180, g: 50, b: 255 },    // violet
      { r: 230, g: 0, b: 255 },     // magenta
      { r: 255, g: 0, b: 180 },     // pink
    ]

    let animationId: number
    let mouseTrail: { x: number; y: number }[] = []
    let currentMouse = { x: -1000, y: -1000 }
    let colorOffset = 0 // Cycles the starting color

    const handleMouseMove = (e: MouseEvent) => {
      // Get position relative to canvas
      const rect = canvas.getBoundingClientRect()
      currentMouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      
      // Add to trail only if moved enough distance (creates tighter line)
      if (mouseTrail.length === 0 || 
          Math.sqrt((currentMouse.x - mouseTrail[0].x) ** 2 + (currentMouse.y - mouseTrail[0].y) ** 2) > 3) {
        mouseTrail.unshift({ x: currentMouse.x, y: currentMouse.y })
        colorOffset = (colorOffset + 1) % prismColors.length // Cycle starting color
      }
      
      // Limit trail length
      if (mouseTrail.length > trailLength) {
        mouseTrail.pop()
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Store dot states for smooth transitions
    const dotStates = new Map<string, { size: number; colorIndex: number; influence: number }>()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          const dotKey = `${x},${y}`

          // Check influence from trail (closest point in trail)
          let maxInfluence = 0
          let newColorIndex = colorOffset % prismColors.length // Default to current cycle color
          
          for (let i = 0; i < mouseTrail.length; i++) {
            const trailPoint = mouseTrail[i]
            const distFromTrail = Math.sqrt((x - trailPoint.x) ** 2 + (y - trailPoint.y) ** 2)
            const trailRadius = 80 - (i * 0.2) // Increased from 35, bigger surface area
            const influence = Math.max(0, 1 - distFromTrail / Math.max(trailRadius, 20)) // Increased min from 12
            const fadedInfluence = influence * (1 - (i / trailLength) * 0.75) // Reduced fade from 0.85 for more visibility
            
            if (fadedInfluence > maxInfluence) {
              maxInfluence = fadedInfluence
            }
          }

          // Get previous state for smooth transitions
          const prevState = dotStates.get(dotKey) || { size: baseDotSize, colorIndex: 0, influence: 0 }
          
          // Smooth transition for influence
          const smoothInfluence = prevState.influence + (maxInfluence - prevState.influence) * 0.3
          
          // Determine color index: keep previous color if dot was already active, otherwise use new cycling color
          let finalColorIndex = prevState.colorIndex
          if (prevState.influence < 0.05 && maxInfluence > 0.05) {
            // Dot just became active - assign current cycling color
            finalColorIndex = newColorIndex
          } else if (smoothInfluence < 0.02) {
            // Dot fully faded - reset color index
            finalColorIndex = 0
          }
          
          // Calculate dot size with smooth transition
          const targetSize = baseDotSize + (maxDotSize - baseDotSize) * smoothInfluence
          const dotSize = prevState.size + (targetSize - prevState.size) * 0.2

          // Calculate color
          let r = 156, g = 163, b = 175 // base grey color
          
          if (smoothInfluence > 0.05) {
            const prismColor = prismColors[finalColorIndex]
            const blend = Math.min(smoothInfluence * 1.2, 0.85) // Increased from 0.7 for more vibrant colors
            r = Math.round(r + (prismColor.r - r) * blend)
            g = Math.round(g + (prismColor.g - g) * blend)
            b = Math.round(b + (prismColor.b - b) * blend)
          }

          // Save state for next frame
          dotStates.set(dotKey, { size: dotSize, colorIndex: finalColorIndex, influence: smoothInfluence })

          // Dots invisible at rest — only glow when cursor is near
          const alpha = smoothInfluence

          ctx.beginPath()
          ctx.arc(x, y, dotSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          ctx.fill()
        }
      }

      // Slowly fade trail when mouse not moving
      if (mouseTrail.length > 0) {
        const lastPoint = mouseTrail[0]
        const distFromCurrent = Math.sqrt((lastPoint.x - currentMouse.x) ** 2 + (lastPoint.y - currentMouse.y) ** 2)
        if (distFromCurrent < 2 && mouseTrail.length > 1 && Math.random() < 0.6) {
          // Mouse stopped - slowly remove trail (60% chance per frame)
          mouseTrail.pop()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', getParentDimensions)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Navigation />

      {/* === MOBILE/TABLET HERO SECTION (hidden on lg+) === */}
      <section className="lg:hidden relative min-h-screen flex items-center overflow-hidden bg-grey-50 pt-20 pb-16 px-4">
        {/* Interactive Dot Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
        
        <div className="max-w-xl mx-auto text-center relative z-10 w-full">
          {/* Badge with enhanced glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
              <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Specialty Shipping — Austin, Texas</span>
            </div>
          </motion.div>

          {/* Headline with animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-0"
          >
            <h1 className="font-serif text-6xl sm:text-7xl font-bold text-grey-900 tracking-tighter leading-none">
              Austin Crate
            </h1>
            <h2 className="font-serif text-6xl sm:text-7xl font-bold text-emerald leading-none tracking-tighter">
              &amp; Freight
            </h2>
          </motion.div>

          {/* Tagline h3 */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.30 }}
            className="font-sans text-lg sm:text-xl text-grey-800 font-light leading-snug mt-4 px-2"
          >
            Austin&apos;s Premier Specialty Shipping: Custom Crating, Furniture Shipping &amp; Crating, Heavy Pickup &amp; Fine Art Transport
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-sans text-sm sm:text-base text-grey-600 mt-3 mb-6 font-light leading-relaxed max-w-md mx-auto px-2"
          >
            Austin&apos;s trusted specialty shipping &amp; custom crating company. Expert furniture shipping and crating, heavy item pickup, fine art crating, and medical equipment transport, delivered with museum-quality care across Austin and nationwide.
          </motion.p>

          {/* CTA Buttons - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8 px-4"
          >
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald hover:bg-emerald-600 rounded-xl font-bold text-white text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>(512) 240-9818</span>
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-emerald rounded-xl font-bold text-emerald text-base hover:bg-emerald hover:text-white transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Our Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>

          {/* Service Badges - Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap justify-center gap-2 mb-8 px-4"
          >
            {[
              { icon: '🎨', label: 'Fine Art Crating' },
              { icon: '🪑', label: 'Furniture Crating' },
              { icon: '⚕️', label: 'Medical Shipping' }
            ].map((item, i) => (
              <span key={i} className="px-4 py-2 bg-grey-100/80 backdrop-blur-sm text-grey-700 text-sm font-semibold rounded-full border border-grey-300 shadow-sm hover:shadow-md hover:scale-105 transition-all">
                <span className="mr-1.5">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </motion.div>

          {/* Image Gallery — mirrors desktop right column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="w-full mt-8 space-y-3 px-2"
          >
            {/* Featured image — real job photo */}
            <Link href="/services/furniture" className="block">
              <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-grey-200 shadow-lg hover:border-emerald transition-all hover:scale-[1.02]">
                <Image
                  src="/IMG_3155.jpg"
                  alt="White-glove furniture shipping completed in Austin TX — Austin Crate & Freight"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-5">
                  <span className="text-white font-bold text-base">Furniture Shipping &amp; Crating</span>
                </div>
              </div>
            </Link>

            {/* Fine Art + Medical row */}
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services/fine-art" className="block">
                <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md hover:border-emerald transition-all hover:scale-[1.02]">
                  <Image
                    src="/IMG_2981.jpg"
                    alt="Custom wood crate fabrication for fine art shipping — Austin Crate & Freight shop"
                    fill
                    sizes="50vw"
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-3">
                    <span className="text-white text-sm font-bold">Fine Art Crating</span>
                  </div>
                </div>
              </Link>
              <Link href="/services/medical-equipment" className="block">
                <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md hover:border-emerald transition-all hover:scale-[1.02]">
                  <Image
                    src="/IMG_3092.jpg"
                    alt="Workshop crate assembly for specialty shipping — Austin Crate & Freight"
                    fill
                    sizes="50vw"
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-3">
                    <span className="text-white text-sm font-bold">Medical Equipment Shipping</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Heavy Items + General row */}
            <div className="grid grid-cols-2 gap-3">
              <Link href="/services/heavy-items" className="block">
                <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md hover:border-emerald transition-all hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald/90 to-emerald-600/90 flex flex-col items-center justify-center p-3">
                    <svg className="w-7 h-7 text-white mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span className="text-white text-sm font-bold text-center">Heavy Item Shipping</span>
                  </div>
                </div>
              </Link>
              <Link href="/services/shipping-and-crating" className="block">
                <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md hover:border-emerald transition-all hover:scale-[1.02]">
                  <Image
                    src="/IMG_4446_1703172460423.jpg"
                    alt="Specialty Shipping and Custom Crating Austin TX"
                    fill
                    sizes="50vw"
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-3">
                    <span className="text-white text-sm font-bold">Specialty Shipping &amp; Crating</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-white border-2 border-emerald/20 shadow-sm text-sm font-semibold text-grey-700">
              <span>Licensed &amp; Bonded</span>
              <span className="text-grey-300">|</span>
              <span>Fully Insured</span>
              <span className="text-grey-300">|</span>
              <span>5-Star Rated</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === DESKTOP HERO SECTION (hidden below lg) === */}
      <section className="hidden lg:flex relative min-h-screen items-center overflow-hidden bg-grey-50">
        {/* Interactive Dot Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-12 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="col-span-7 space-y-8">
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Specialty Shipping & Custom Crating — Austin, Texas</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-0 relative z-50"
              >
                <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-grey-900 tracking-tighter leading-none relative z-50">
                  Austin Crate
                </h1>
                <h2 className="font-serif text-7xl md:text-8xl lg:text-9xl font-bold text-emerald leading-none relative z-50 tracking-tighter">
                  & Freight
                </h2>
              </motion.div>

              {/* Tagline */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="font-sans text-3xl md:text-4xl text-grey-800 font-light leading-tight -mt-2"
              >
                Austin&apos;s Premier Specialty Shipping — Custom Crating, Furniture Shipping &amp; Crating, Heavy Pickup &amp; Fine Art Transport
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-sans text-xl md:text-2xl text-grey-600 font-light leading-relaxed max-w-2xl"
              >
                Austin&apos;s trusted specialty shipping &amp; custom crating company. Expert furniture shipping and crating, heavy item pickup, fine art crating, and medical equipment transport — delivered with museum-quality care across Austin, Texas and nationwide.
              </motion.p>

              {/* CTA Buttons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-row gap-4 pt-4"
              >
                <a
                  href="tel:(512) 240-9818"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald rounded-lg font-bold text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (512) 240-9818
                </a>
                
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-emerald rounded-lg font-bold text-emerald hover:bg-emerald hover:text-white transition-all duration-300"
                >
                  Our Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image Gallery */}
            <div className="col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-4"
              >
                {/* Featured Image — real job photo */}
                <Link href="/services/furniture" className="block">
                  <div className="relative h-52 rounded-2xl overflow-hidden border-2 border-grey-200 shadow-lg bg-white hover:border-emerald transition-all hover:scale-[1.02] cursor-pointer">
                    <Image
                      src="/IMG_3155.jpg"
                      alt="White-glove furniture shipping completed in Austin TX — Austin Crate & Freight"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                      quality={75}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-6">
                      <span className="text-white font-bold text-lg">Furniture Shipping &amp; Crating</span>
                    </div>
                  </div>
                </Link>

                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/services/fine-art" className="block">
                    <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white hover:border-emerald transition-all hover:scale-[1.02] cursor-pointer">
                      <Image
                        src="/IMG_2981.jpg"
                        alt="Custom wood crate fabrication for fine art shipping — Austin Crate & Freight shop"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                        quality={75}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                        <span className="text-white text-sm font-bold">Fine Art Crating</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/services/medical-equipment" className="block">
                    <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white hover:border-emerald transition-all hover:scale-[1.02] cursor-pointer">
                      <Image
                        src="/IMG_3092.jpg"
                        alt="Workshop crate assembly for specialty shipping — Austin Crate & Freight"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                        quality={75}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                        <span className="text-white text-sm font-bold">Medical Equipment Shipping</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Heavy Items & General Shipping Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/services/heavy-items" className="block">
                    <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white hover:border-emerald transition-all hover:scale-[1.02] cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald/90 to-emerald-600/90 flex flex-col items-center justify-center p-4">
                        <svg className="w-8 h-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <span className="text-white text-sm font-bold text-center">Heavy Item Shipping</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="/services/shipping-and-crating" className="block">
                    <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white hover:border-emerald transition-all hover:scale-[1.02] cursor-pointer">
                      <Image
                        src="/IMG_4446_1703172460423.jpg"
                        alt="Specialty Shipping and Custom Crating Austin TX"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                        quality={75}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEjFBE1Fx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEZEQA/ANE6Z1C7e0WvZvStNOxlzI/s+d/Z9+xXURoUQEGoCf/Z"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                        <span className="text-white text-sm font-bold">Specialty Shipping &amp; Crating</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Trust Badge */}
                <div className="pt-3">
                  <div className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-white border-2 border-emerald/20 shadow-sm text-sm font-semibold text-grey-700">
                    <span>Licensed &amp; Bonded</span>
                    <span className="text-grey-300">|</span>
                    <span>Fully Insured</span>
                    <span className="text-grey-300">|</span>
                    <span>5-Star Rated</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICES & WHY CHOOSE US SECTION === */}
      <section className="relative py-8 md:py-16 lg:py-24 pb-0 bg-white border-t-4 border-grey-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 mb-3 md:mb-6">
              <span className="text-[10px] md:text-xs font-semibold text-grey-800 uppercase tracking-widest">Austin's Premier Specialty Shipping</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold text-grey-900 mb-2 md:mb-4 tracking-tight">
              Why Choose <span className="text-emerald">Austin Crate</span>
            </h2>
            <h3 className="font-serif text-xl md:text-2xl lg:text-4xl font-semibold text-grey-700 mb-3 md:mb-6 tracking-tight">
              Premium Shipping for Every Need
            </h3>
            <p className="font-sans text-sm md:text-base lg:text-xl text-grey-600 max-w-3xl mx-auto leading-relaxed font-light">
              Austin Crate &amp; Freight provides specialty shipping and custom crating in Austin, Texas — furniture shipping and crating, fine art transport, heavy item pickup, and medical equipment shipping. Our expert team ensures your most valuable items arrive safely, locally or nationwide.
            </p>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-14 lg:mb-20">
            
            {/* Service Card 1 - Fine Art */}
            <div className="group relative rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Photo header */}
              <Link href="/services/fine-art" className="block relative h-44 overflow-hidden">
                <Image src="/IMG_2982.jpg" alt="Fine art crating and specialty packing — Austin Crate & Freight" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" quality={70} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-90">Fine Art Shipping</span>
                </div>
              </Link>
              {/* Content */}
              <div className="p-5 md:p-6 lg:p-7">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-grey-900 mb-3 md:mb-4 tracking-tight">Fine Art Shipping</h3>
              <p className="font-sans text-grey-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base font-light">
                Museum-quality crating and transport for paintings, sculptures, and collectibles. Our climate-controlled handling ensures your artwork arrives in pristine condition.
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-4 md:mb-6">
                {['Custom Crating', 'Insurance Coverage', 'Gallery-Standard Care'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link href="/services/fine-art" className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>

            {/* Service Card 2 - Designer Furniture */}
            <div className="group relative rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Photo header */}
              <Link href="/services/furniture" className="block relative h-44 overflow-hidden">
                <Image src="/IMG_2984.jpg" alt="White-glove furniture packing and crating — Austin Crate & Freight" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" quality={70} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-90">Furniture Shipping</span>
                </div>
              </Link>
              {/* Content */}
              <div className="p-5 md:p-6 lg:p-7">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-grey-900 mb-3 md:mb-4 tracking-tight">Designer Furniture</h3>
              <p className="font-sans text-grey-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base font-light">
                White-glove furniture handling for luxury pieces and designer collections. Expert protective wrapping, and precision shipping.
              </p>

              <ul className="space-y-2 mb-4 md:mb-6">
                {['White-Glove Service', 'Protective Wrapping', 'Scratch-Free Transport'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services/furniture" className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>

            {/* Service Card 3 - Medical Equipment */}
            <div className="group relative rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Photo header */}
              <Link href="/services/medical-equipment" className="block relative h-44 overflow-hidden">
                <Image src="/IMG_3037.jpg" alt="Large item custom crate build — Austin Crate & Freight workshop" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" quality={70} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider opacity-90">Medical Equipment</span>
                </div>
              </Link>
              {/* Content */}
              <div className="p-5 md:p-6 lg:p-7">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-grey-900 mb-3 md:mb-4 tracking-tight">Medical Equipment</h3>
              <p className="font-sans text-grey-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base font-light">
                Transport for sensitive medical devices and laboratory equipment. Specialized handling with chain-of-custody documentation and calibration protection.
              </p>

              <ul className="space-y-2 mb-4 md:mb-6">
                {['Chain of Custody', 'Calibration Safe'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-grey-700">
                    <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/services/medical-equipment" className="inline-flex items-center gap-2 text-emerald font-bold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              </div>
            </div>
          </div>

          {/* Features Grid - 4 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { title: 'Museum-Quality Care', desc: 'White-glove handling for every shipment' },
              { title: 'Custom Crating', desc: 'Tailored packaging solutions' },
              { title: 'Insured & Certified', desc: 'Full coverage and compliance' },
              { title: 'Real-Time Tracking', desc: 'Monitor your shipment 24/7' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl bg-grey-50 border-2 border-grey-200">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald flex items-center justify-center mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-grey-900 font-bold mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-grey-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA in Services Section */}
          <div className="text-center py-8 md:py-12">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-emerald hover:bg-emerald-600 rounded-lg font-bold text-base md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (512) 240-9818 for Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* === OUR PROCESS & MATERIALS SECTION === */}
      <section className="relative py-10 md:py-20 lg:py-24 bg-grey-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Process */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-emerald/50 bg-emerald/10 mb-4 md:mb-6">
                <span className="text-[10px] md:text-xs font-semibold text-emerald uppercase tracking-widest">How It Works</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Simple <span className="text-emerald">3-Step</span> Process
              </h2>
              <p className="text-grey-400 mb-6 md:mb-8 text-sm md:text-lg">
                We make shipping your valuable items easy. From pickup to delivery, we handle everything.
              </p>

              <div className="space-y-4 md:space-y-6">
                {[
                  { step: '01', title: 'We Pick Up Your Item', desc: 'Free pickup in the Greater Austin area. We come to you and carefully collect your items.' },
                  { step: '02', title: 'Custom Crating & Packing', desc: 'Our craftsmen build a custom crate specifically designed to protect your item during transit.' },
                  { step: '03', title: 'Ship or Pickup', desc: 'Choose delivery to your destination or pick up your crated item from our facility.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-emerald/20 rounded-lg flex items-center justify-center">
                      <span className="text-emerald font-bold text-sm md:text-base">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1">{item.title}</h4>
                      <p className="text-grey-400 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Shop Photos */}
            <div className="space-y-4">
              {/* Main shop photo */}
              <div className="relative h-60 rounded-2xl overflow-hidden border border-grey-700">
                <Image src="/IMG_2980.jpg" alt="Custom crate being built in our Austin TX workshop — Austin Crate & Freight" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" quality={75} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <div>
                    <p className="text-white font-bold text-base">Hand-Built in Austin, TX</p>
                    <p className="text-grey-300 text-sm">3112 Windsor Rd · Every crate built to order</p>
                  </div>
                </div>
              </div>
              {/* Two smaller photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-36 rounded-xl overflow-hidden border border-grey-700">
                  <Image src="/IMG_2985.jpg" alt="Interior foam blocking detail — custom crate padding Austin TX" fill className="object-cover" sizes="25vw" quality={70} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-semibold">Custom Foam Blocking</span>
                  </div>
                </div>
                <div className="relative h-36 rounded-xl overflow-hidden border border-grey-700">
                  <Image src="/IMG_3112.jpg" alt="Specialty packaging complete — Austin Crate & Freight" fill className="object-cover" sizes="25vw" quality={70} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-semibold">Ready to Ship</span>
                  </div>
                </div>
              </div>
              {/* Delivery tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm font-medium rounded-full">We Deliver</span>
                <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm font-medium rounded-full">Customer Pickup</span>
                <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm font-medium rounded-full">Nationwide Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SERVICE AREAS SECTION === */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 mb-3 md:mb-6">
              <span className="text-[10px] md:text-xs font-semibold text-grey-800 uppercase tracking-widest">Service Areas</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-grey-900 mb-2 md:mb-4">
              Serving Austin & Surrounding Areas
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-grey-600">
              Austin • Round Rock • Cedar Park • Georgetown • San Marcos • Taylor & More
            </p>
          </div>

          {/* Cities Grid - linked pages + remaining cities */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-10 lg:mb-12">
            {[
              { city: 'Round Rock', href: '/locations/round-rock' },
              { city: 'Cedar Park', href: '/locations/cedar-park' },
              { city: 'Georgetown', href: '/locations/georgetown' },
              { city: 'San Marcos', href: '/locations/san-marcos' },
              { city: 'Taylor', href: '/locations/taylor' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="p-4 rounded-xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-md transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-grey-800">{item.city}</span>
                </div>
              </Link>
            ))}
            {['Austin', 'Pflugerville', 'Leander', 'Lakeway', 'Bee Cave', 'Dripping Springs', 'Kyle'].map((city, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-md transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-grey-800">{city}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA in Service Areas */}
          <div className="text-center pt-4 md:pt-8">
            <p className="text-base md:text-lg text-grey-700 mb-4 md:mb-6 font-medium">Need service in your area?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-white border-2 border-emerald rounded-lg font-bold text-base md:text-lg text-emerald hover:bg-emerald hover:text-white transition-all duration-300 shadow-md"
            >
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* === REAL WORK GALLERY + GOOGLE REVIEW SECTION === */}
      <section className="relative py-10 md:py-20 bg-white border-t-4 border-grey-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-emerald/30 bg-emerald/5 mb-4">
              <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Real Jobs. Real Results.</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-grey-900 mb-3 tracking-tight">
              Austin Crate &amp; Freight <span className="text-emerald">in Action</span>
            </h2>
            <p className="text-grey-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Every crate is hand-built by Peter Hall and his crew at 3112 Windsor Rd, Austin, TX. These are real photos from real jobs across Central Texas.
            </p>
          </div>

          {/* Photo grid — real business photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-12">
            {[
              { src: '/IMG_2980.jpg', alt: 'Custom crate build in progress — Austin Crate & Freight' },
              { src: '/IMG_2983.jpg', alt: 'Secured freight ready to ship — Austin TX' },
              { src: '/IMG_3037.jpg', alt: 'Large item custom crate — Austin Crate & Freight' },
              { src: '/IMG_3092.jpg', alt: 'Workshop crate assembly — Austin TX' },
              { src: '/IMG_3105.jpg', alt: 'Custom crate build — Austin Crate & Freight' },
              { src: '/IMG_3748.jpg', alt: 'Specialty freight crating Austin TX' },
              { src: '/IMG_4196_1695841417957.jpg', alt: 'White-glove packing service Austin' },
              { src: '/IMG_3954_1686069785125.jpg', alt: 'Museum-quality packing Austin Crate' },
            ].map((photo, i) => (
              <Link key={i} href="/gallery" className="block group">
                <div className="relative h-36 md:h-44 rounded-xl overflow-hidden border border-grey-200 shadow-sm hover:border-emerald hover:shadow-md transition-all hover:scale-[1.02]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={70}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgICAgMBAAAAAAAAAAAAAQIDBAUREiExQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Amz2tLSWyuoXlnmeZ2LSSMWZj6kk5J/tKUpWn/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          {/* Google Review + Meet the Team split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

            {/* Google Review Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-5">
                {/* Google G */}
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-lg leading-none mb-0.5">★★★★★</div>
                  <p className="text-sm font-bold text-gray-900">5.0 · Google Reviews</p>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed text-base italic mb-5">
                "Austin Crate &amp; Freight is exactly what you need when you have something truly irreplaceable to ship. Peter and his team built a custom crate that protected our piece perfectly — arrived without a scratch. Professional, communicative, and priced fairly. Will use again without question."
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                  AC
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Verified Google Customer</p>
                  <p className="text-xs text-gray-400">Austin, TX · via Google Business</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs text-gray-400">3112 Windsor Rd, Austin, TX 78703</div>
                <div className="text-xs font-semibold text-emerald-600">Mon–Fri: 8 AM – 6 PM</div>
              </div>
            </div>

            {/* Meet the Team Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">The People Behind the Crates</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Meet the Team</h3>

              <div className="space-y-5">
                <Link href="/authors/peter-hall" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shrink-0 group-hover:bg-emerald-500 transition-colors">
                    PH
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white group-hover:text-emerald-300 transition-colors">Peter Hall</p>
                    <p className="text-sm text-gray-400">Owner &amp; Master Crate Builder · 15+ years</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <div className="border-t border-gray-700" />

                <Link href="/authors/max-deleonardis" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg shrink-0 group-hover:bg-sky-500 transition-colors">
                    MD
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-white group-hover:text-sky-300 transition-colors">Max DeLeonardis</p>
                    <p className="text-sm text-gray-400">Marketing Manager · Content &amp; Growth</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-sky-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-4">
                  Our blog is written by the same people who build your crates — firsthand expertise, real Austin pricing, no fluff.
                </p>
                <div className="flex gap-3">
                  <Link href="/about" className="flex-1 text-center text-sm font-semibold bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-lg transition-colors">
                    About Us →
                  </Link>
                  <Link href="/blog" className="flex-1 text-center text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-lg transition-colors">
                    Read the Blog →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA SECTION === */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-white border-t-4 border-emerald/20">
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-grey-900 mb-3 md:mb-6">
            Ready to Ship
            <br />
            <span className="text-emerald">Your Items?</span>
          </h2>
          
          <p className="text-sm md:text-lg lg:text-xl text-grey-600 mb-6 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Request your free specialty shipping quote today. Whether you need custom furniture shipping, heavy package pickup, or fine art crating in Austin, our expert team handles it all.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-emerald hover:bg-emerald-600 rounded-lg font-bold text-sm md:text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (512) 240-9818
            </a>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-zinc-900/50 border-2 border-zinc-800 rounded-lg font-semibold text-sm md:text-lg text-zinc-300 hover:bg-zinc-800/50 hover:border-zinc-700 backdrop-blur-sm transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-6 md:mt-12 lg:mt-16 pt-4 md:pt-6 lg:pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 flex items-center justify-center gap-2 text-sm md:text-base">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Serving Austin & Surrounding Areas, Texas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
