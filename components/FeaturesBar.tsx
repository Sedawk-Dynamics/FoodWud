'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2z" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Pure & Natural',
    desc: 'Sourced from the finest tea gardens of Darjeeling',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'Quality Assured',
    desc: 'Hygienically processed and quality tested at every stage',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Goodness in Every Pack',
    desc: 'Packed with care to retain natural freshness',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
      </svg>
    ),
    title: 'Sustainable Future',
    desc: 'Committed to people, planet, and purity',
  },
]

export default function FeaturesBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative z-10 -mt-1 bg-white border-y border-[#d4e8d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#d4e8d4]">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              className="flex items-center gap-4 px-6 py-8 group hover:bg-[#f0f7f0] transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#d4e8d4] group-hover:border-[#c9a227] flex items-center justify-center text-[#1a5c2a] group-hover:text-[#c9a227] transition-all duration-300 flex-shrink-0 bg-[#f8fdf8]">
                {feat.icon}
              </div>
              <div>
                <p className="font-semibold text-[#0d3d1a] text-sm lg:text-base leading-tight">{feat.title}</p>
                <p className="text-[#4a6650] text-xs lg:text-sm mt-1 leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
