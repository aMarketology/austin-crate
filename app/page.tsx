'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { faqSchema } from '@/lib/faq-schema'

export default function Home() {
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
    const maxDotSize = 4
    const trailLength = 150 // Longer trail

    // True light prism spectrum colors (rainbow order)
    const prismColors = [
      { r: 255, g: 0, b: 0 },      // red
      { r: 255, g: 69, b: 0 },     // red-orange
      { r: 255, g: 140, b: 0 },    // orange
      { r: 255, g: 200, b: 0 },    // yellow-orange
      { r: 255, g: 255, b: 0 },    // yellow
      { r: 180, g: 255, b: 0 },    // yellow-green
      { r: 0, g: 255, b: 100 },    // green
      { r: 0, g: 220, b: 180 },    // cyan-green
      { r: 0, g: 200, b: 255 },    // cyan
      { r: 0, g: 150, b: 255 },    // light blue
      { r: 65, g: 105, b: 225 },   // blue
      { r: 100, g: 80, b: 220 },   // indigo
      { r: 138, g: 43, b: 226 },   // violet
      { r: 180, g: 0, b: 255 },    // purple
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
            const trailRadius = 35 - (i * 0.15) // Slower shrink for longer persistence
            const influence = Math.max(0, 1 - distFromTrail / Math.max(trailRadius, 12))
            const fadedInfluence = influence * (1 - (i / trailLength) * 0.85) // Fade along trail
            
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
            const blend = Math.min(smoothInfluence * 1.0, 0.7) // Color blend at 0.7
            r = Math.round(r + (prismColor.r - r) * blend)
            g = Math.round(g + (prismColor.g - g) * blend)
            b = Math.round(b + (prismColor.b - b) * blend)
          }

          // Save state for next frame
          dotStates.set(dotKey, { size: dotSize, colorIndex: finalColorIndex, influence: smoothInfluence })

          // Full opacity (no radial fade)
          const alpha = 0.6 + smoothInfluence * 0.4

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
      <section className="lg:hidden relative bg-gradient-to-br from-grey-950 via-grey-800 to-grey-900 pt-24 pb-12 px-4 overflow-hidden">
        {/* Multi-layered background effects */}
        <div className="absolute inset-0">
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-grey-950/40" />
          
          {/* Emerald accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 via-transparent to-emerald/8" />
          
          {/* Large glowing orbs in corners */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-emerald/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '5s' }} />
          
          {/* Smaller accent orbs */}
          <div className="absolute top-1/3 right-8 w-48 h-48 bg-emerald/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-1/4 left-8 w-40 h-40 bg-emerald/8 rounded-full blur-[50px]" />
          
          {/* Radial gradient from center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,24,39,0.4)_100%)]" />
        </div>
        
        <div className="max-w-xl mx-auto text-center relative z-10">
          {/* Badge with enhanced glow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald/50 bg-emerald/10 backdrop-blur-sm mb-4 shadow-lg shadow-emerald/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald shadow-sm shadow-emerald" />
            <span className="text-xs font-semibold text-emerald uppercase tracking-widest">Austin, Texas</span>
          </div>

          {/* Headline with text shadow for depth */}
          <h1 className="text-4xl font-bold text-white mb-1 drop-shadow-lg">
            Austin Crate
          </h1>
          <h2 className="text-4xl font-bold text-emerald mb-4 drop-shadow-[0_0_15px_rgba(80,200,120,0.3)]">
            & Freight
          </h2>

          {/* Tagline with subtle glow */}
          <p className="text-lg text-grey-200 mb-6 drop-shadow-md">
            White-Glove Specialty Shipping for Fine Art, Furniture & Medical Equipment
          </p>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="tel:(512) 240-9818"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald hover:bg-emerald/90 rounded-lg font-bold text-white text-base shadow-lg shadow-emerald/30 transition-all hover:shadow-xl hover:shadow-emerald/40 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (512) 240-9818
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-grey-600 hover:border-emerald/50 rounded-lg font-bold text-white text-base backdrop-blur-sm hover:bg-emerald/5 transition-all"
            >
              Our Services
            </Link>
          </div>

          {/* Service Badges with backdrop blur */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {['Fine Art', 'Furniture', 'Medical Equipment'].map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-grey-800/70 backdrop-blur-sm text-grey-200 text-sm font-medium rounded-full border border-grey-700/50 shadow-md">
                {item}
              </span>
            ))}
          </div>

          {/* Stats Row with enhanced glass effect */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '10+', label: 'Years' },
              { value: '100%', label: 'Insured' },
              { value: '24/7', label: 'Tracking' }
            ].map((stat, i) => (
              <div key={i} className="p-3 bg-grey-800/60 backdrop-blur-md rounded-lg border border-grey-700/50 shadow-lg hover:bg-grey-800/70 transition-all">
                <div className="text-2xl font-bold text-emerald drop-shadow-[0_0_10px_rgba(80,200,120,0.3)]">{stat.value}</div>
                <div className="text-xs text-grey-300 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DESKTOP HERO SECTION (hidden below lg) === */}
      <section className="hidden lg:flex relative min-h-screen items-center overflow-hidden bg-grey-50 pt-24">
        {/* Interactive Dot Canvas */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-32">
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
                  <span className="text-xs font-semibold text-grey-800 uppercase tracking-widest">Austin, Texas</span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-0 relative z-50"
              >
                <h1 className="text-8xl font-bold text-grey-900 tracking-tight leading-none relative z-50">
                  Austin Crate
                </h1>
                <h2 className="text-8xl font-bold text-emerald leading-none relative z-50">
                  & Freight
                </h2>
              </motion.div>

              {/* Tagline */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="text-4xl text-grey-800 font-medium leading-tight -mt-2"
              >
                White-Glove Specialty Shipping for Your Most Valuable Assets
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-grey-600 leading-relaxed max-w-2xl"
              >
                Expert crating and freight services for your valuable items inlcuding, fine art, designer furniture, and medical equipment. We handle your treasures with museum-quality care, delivering peace of mind with every shipment.
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
                {/* Featured Image */}
                <div className="relative h-52 rounded-2xl overflow-hidden border-2 border-grey-200 shadow-lg bg-white">
                  <Image
                    src="/2.jpg"
                    alt="Designer Furniture Shipping Austin - White Glove Furniture Transport Services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    quality={75}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg">Furniture Transport</span>
                  </div>
                </div>

                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white">
                    <Image
                      src="/1.jpg"
                      alt="Fine Art Shipping Services Austin Texas - Museum Quality Crating and Transport"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      quality={75}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEjFBE1Fx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEEECCDggEeD5rR+mdQu3tFr2b0rTTsZcyP7Pnf2ffsV1EaFEBBqAn//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                      <span className="text-white text-sm font-bold">Fine Art Expertise</span>
                    </div>
                  </div>
                  <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white">
                    <Image
                      src="/3.jpg"
                      alt="Medical Equipment Shipping Austin TX - Compliant Medical Device Transport"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                      quality={75}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEjFBE1Fx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEEECCDggEeD5rR+mdQu3tFr2b0rTTsZcyP7Pnf2ffsV1EaFEBBqAn//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                      <span className="text-white text-sm font-bold">Medical Equipment</span>
                    </div>
                  </div>
                </div>

                {/* General Shipping Box */}
                <div className="relative h-32 rounded-xl overflow-hidden border border-grey-200 shadow-md bg-white mt-4">
                  <Image
                    src="/IMG_4446_1703172460423.jpg"
                    alt="General Shipping and Crating Services Austin TX"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFESEGEjFBE1Fx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEZEQA/ANE6Z1C7e0WvZvStNOxlzI/s+d/Z9+xXURoUQEGoCf/Z"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent flex items-end p-4">
                    <span className="text-white text-sm font-bold">General Shipping & Crates</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="pt-3">
                  <div className="p-4 rounded-xl bg-white border-2 border-emerald/20 text-center shadow-sm">
                    <div className="text-3xl font-bold text-emerald mb-1">10+</div>
                    <div className="text-xs text-grey-600 font-medium">Years Experience</div>
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
            <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-grey-900 mb-2 md:mb-4">
              Why Choose <span className="text-emerald">Austin Crate</span>
            </h2>
            <h3 className="text-lg md:text-xl lg:text-3xl font-semibold text-grey-700 mb-3 md:mb-6">
              Premium Shipping for Every Need
            </h3>
            <p className="text-sm md:text-base lg:text-xl text-grey-600 max-w-3xl mx-auto">
              Austin Crate provides white-glove specialty shipping services for fine art, designer furniture, and medical equipment. Our expert team combines meticulous handling with cutting-edge logistics to ensure your most precious items arrive safely.
            </p>
          </div>

          {/* Services Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-14 lg:mb-20">
            
            {/* Service Card 1 - Fine Art */}
            <div className="group relative p-5 md:p-6 lg:p-8 rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3 md:mb-4 lg:mb-6 rounded-xl bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-grey-900 mb-3 md:mb-4">Fine Art Shipping</h3>
              <p className="text-grey-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
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

            {/* Service Card 2 - Designer Furniture */}
            <div className="group relative p-5 md:p-6 lg:p-8 rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3 md:mb-4 lg:mb-6 rounded-xl bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-grey-900 mb-3 md:mb-4">Designer Furniture</h3>
              <p className="text-grey-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
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

            {/* Service Card 3 - Medical Equipment */}
            <div className="group relative p-6 md:p-8 rounded-2xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-xl transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mb-3 md:mb-4 lg:mb-6 rounded-xl bg-emerald/10 border-2 border-emerald/30 flex items-center justify-center">
                <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-grey-900 mb-3 md:mb-4">Medical Equipment</h3>
              <p className="text-grey-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
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

            {/* Right Column - Materials & Features */}
            <div className="bg-grey-800/50 rounded-2xl p-6 md:p-8 border border-grey-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Premium Crating Materials</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '🪵', label: '2x4 Lumber Framing' },
                  { icon: '🌲', label: 'Kiln-Dried Lumber' },
                  { icon: '🔩', label: 'Stainless Steel Hardware' },
                  { icon: '📦', label: 'Foam & Polyethylene Padding' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-grey-300">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm md:text-base">{item.label}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold text-white mb-4">Crate Features</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Weather-resistant construction',
                  'Shock-absorbing designs available',
                  'Stackable for efficient storage',
                  'International shipping ready',
                  'Forklift accessible options'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-grey-300 text-sm md:text-base">
                    <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-grey-700">
                <p className="text-grey-400 text-sm mb-3">Delivery Options:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm font-medium rounded-full">We Deliver</span>
                  <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm font-medium rounded-full">Customer Pickup</span>
                  <span className="px-3 py-1 bg-emerald/20 text-emerald text-sm font-medium rounded-full">Nationwide Shipping</span>
                </div>
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
              Austin • Round Rock • Cedar Park • Georgetown • Pflugerville & More
            </p>
          </div>

          {/* Cities Grid - 5 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-10 lg:mb-12">
            {['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'Lakeway', 'Bee Cave', 'Dripping Springs', 'Kyle'].map((city, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border-2 border-grey-200 hover:border-emerald hover:shadow-md transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-emerald" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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

      {/* === FINAL CTA SECTION === */}
      <section className="relative py-10 md:py-20 lg:py-32 bg-white border-t-4 border-emerald/20">
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-grey-900 mb-3 md:mb-6">
            Ready to Ship
            <br />
            <span className="text-emerald">Your Items?</span>
          </h2>
          
          <p className="text-sm md:text-lg lg:text-xl text-grey-600 mb-6 md:mb-10 lg:mb-12 max-w-2xl mx-auto">
            Request your free shipping quote today. Let our expert team handle your fine art, furniture, or medical equipment with care.
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
