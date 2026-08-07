'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '100%', label: 'Trusted Quality' },
  { value: '4', label: 'Product Lines' },
  { value: 'ISO', label: 'Certified 9001:2015' },
  { value: 'FSSAI', label: 'Licensed & Compliant' },
]

const values = ['Quality', 'Trust', 'Integrity', 'Innovation', 'Food Safety', 'Sustainability']

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="h-px w-12 bg-[#c9a227]" />
          <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a227">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2z" />
            </svg>
            Our Story
          </span>
          <span className="h-px w-12 bg-[#c9a227]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-serif text-4xl md:text-5xl lg:text-6xl text-[#0d3d1a] mb-16 text-balance"
        >
          Bringing Darjeeling&apos;s Goodness<br />
          <span className="text-green-gradient font-italic italic">To Every Home</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20 aspect-[4/3]">
              <Image
                src="/images/about-darjeeling.png"
                alt="Darjeeling tea gardens — the source of Foodwud products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0d3d1a]/30 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-8 -right-4 lg:-right-10 bg-white rounded-2xl p-5 shadow-xl border border-[#d4e8d4] grid grid-cols-2 gap-4 w-60"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#1a5c2a]">{stat.value}</p>
                  <p className="text-[#4a6650] text-xs mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-dashed border-[#c9a227]/30 -z-10" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full bg-[#c9a227]/10 -z-10" />
          </motion.div>

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6 pt-8 lg:pt-0"
          >
            <h3 className="font-serif text-2xl md:text-3xl text-[#0d3d1a] leading-snug">
              A Fast-Growing FMCG Company Rooted in the Purity of the Himalayas
            </h3>

            <p className="text-[#4a6650] text-base leading-relaxed">
              Foodwud Private Limited is an emerging FMCG company committed to delivering
              premium-quality food products to households across India. Our products are carefully
              sourced, hygienically processed, and packaged using modern quality standards to ensure
              freshness, purity, and customer satisfaction.
            </p>

            <p className="text-[#4a6650] text-base leading-relaxed">
              We believe that quality, affordability, and trust are the foundation of every
              successful brand — and that good food builds good life.
            </p>

            {/* Mission & Vision Pills */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#e8f5e9] rounded-2xl p-5 border border-[#c3e6c3]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#1a5c2a] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <path d="M12 22V12M12 12L6 6M12 12l6-6" />
                    </svg>
                  </div>
                  <span className="text-[#1a5c2a] font-semibold text-sm">Our Mission</span>
                </div>
                <p className="text-[#0d3d1a] text-xs leading-relaxed">
                  To provide high-quality FMCG products that enrich everyday life while maintaining the highest standards of quality, hygiene, and customer satisfaction.
                </p>
              </div>
              <div className="bg-[#fdf8e1] rounded-2xl p-5 border border-[#e6d98a]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#c9a227] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <span className="text-[#8b6914] font-semibold text-sm">Our Vision</span>
                </div>
                <p className="text-[#5a4400] text-xs leading-relaxed">
                  To become one of India&apos;s most trusted FMCG brands by delivering excellence in every product we offer.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <p className="text-[#0d3d1a] font-semibold text-sm mb-3">Our Core Values</p>
              <div className="flex flex-wrap gap-2">
                {values.map((val) => (
                  <span
                    key={val}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#0d3d1a] text-[#c9a227] border border-[#1a5c2a]"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>

            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-[#0d3d1a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#c9a227] hover:text-[#0d3d1a] transition-all duration-300 cursor-pointer"
            >
              Partner With Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
