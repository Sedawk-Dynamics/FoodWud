'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2z" />
      </svg>
    ),
    title: 'Premium Quality Products',
    desc: 'Each product is meticulously sourced and processed to ensure the highest quality standards that consumers deserve.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Hygienic & Secure Packaging',
    desc: 'State-of-the-art packaging technology ensures your products stay fresh, hygienic, and tamper-proof from factory to home.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Affordable Pricing',
    desc: 'We believe premium quality should not be a luxury. Our products are priced to be accessible to every household.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Trusted Brand',
    desc: 'Built on transparency and integrity, Foodwud is a brand consumers can rely on for safe, authentic, and consistent products.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Customer Satisfaction Focus',
    desc: 'Our customers are at the heart of everything we do. We constantly innovate to exceed expectations and deliver delight.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Reliable Supply Chain',
    desc: 'Our robust network ensures consistent product availability across markets, keeping retailers and consumers well-stocked.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Innovation-Driven Approach',
    desc: 'We continuously develop new products and improve packaging to stay ahead of consumer needs and market trends.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zM12 6v6l4 2" />
      </svg>
    ),
    title: 'Consistent Quality & Freshness',
    desc: 'Strict quality checks at every stage of production guarantee that each pack meets our uncompromising freshness standards.',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" ref={ref} className="py-24 lg:py-32 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a227">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Why Choose Us
            </span>
            <span className="h-px w-12 bg-[#c9a227]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0d3d1a] mb-4 text-balance">
            The Foodwud <span className="italic text-green-gradient">Difference</span>
          </h2>
          <p className="text-[#4a6650] text-base max-w-xl mx-auto leading-relaxed">
            We combine heritage, science, and passion to bring you food products that you can trust, love, and share.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {reasons.slice(0, 4).map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#d4e8d4] hover:border-[#c9a227] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e8f5e9] group-hover:bg-[#0d3d1a] flex items-center justify-center text-[#1a5c2a] group-hover:text-[#c9a227] transition-all duration-300 flex-shrink-0">
                  {r.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#0d3d1a] text-sm mb-1">{r.title}</p>
                  <p className="text-[#4a6650] text-xs leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative w-56 h-80 rounded-full overflow-hidden border-4 border-[#c9a227]/30 shadow-2xl shadow-green-900/20">
              <Image
                src="/images/quality-lab.png"
                alt="Foodwud quality assurance"
                fill
                className="object-cover"
                sizes="224px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d3d1a]/40" />
              {/* Center badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#c9a227] text-[#0d3d1a] text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
                Quality Assured
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {reasons.slice(4).map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#d4e8d4] hover:border-[#c9a227] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#e8f5e9] group-hover:bg-[#0d3d1a] flex items-center justify-center text-[#1a5c2a] group-hover:text-[#c9a227] transition-all duration-300 flex-shrink-0">
                  {r.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#0d3d1a] text-sm mb-1">{r.title}</p>
                  <p className="text-[#4a6650] text-xs leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
