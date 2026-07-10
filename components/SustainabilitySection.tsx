'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const commitments = [
  {
    title: 'Farmer First',
    desc: 'We work directly with farmers across Darjeeling, West Bengal to ensure fair pricing and sustainable agricultural practices.',
  },
  {
    title: 'Eco Packaging',
    desc: 'Our packaging is designed to minimize environmental impact, using recyclable and biodegradable materials wherever possible.',
  },
  {
    title: 'Zero Adulteration',
    desc: 'We take an unwavering stance — no artificial colors, no added chemicals. Every product is tested and certified pure.',
  },
]

export default function SustainabilitySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0a1f0d] relative">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(45deg, #1a5c2a 25%, transparent 25%), linear-gradient(-45deg, #1a5c2a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a5c2a 75%), linear-gradient(-45deg, transparent 75%, #1a5c2a 75%)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src="/images/sustainability.png"
                alt="Foodwud sustainability and natural sourcing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f0d]/50 to-transparent" />
            </div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-30 blur-3xl -z-10 bg-[#c9a227]" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#c9a227]" />
              <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase">Our Commitment</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight text-balance">
              Nourishing People.<br />
              <span className="text-gold-gradient">Nurturing the Planet.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              At Foodwud, we believe that doing good business means doing good by nature. Our commitment to sustainability runs from the farm to your table — every step of the way.
            </p>

            <div className="space-y-6">
              {commitments.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                  className="flex items-start gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#c9a227]/40 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#c9a227]/10 border border-[#c9a227]/30 flex items-center justify-center text-2xl flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2">
                      {i === 0 && <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2z" />}
                      {i === 1 && <><path d="M23 7l-7 5-4-4-9 6" /><path d="M16 7h7v5" /></>}
                      {i === 2 && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
