'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function CEOMessage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#faf8f2]">
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
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase">
              From Our Founder
            </span>
            <span className="h-px w-12 bg-[#c9a227]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0d3d1a] text-balance">
            A Message From Leadership
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* CEO Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start"
          >
            <div className="relative">
              <div className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
                <Image
                  src="/images/ceo-portrait.png"
                  alt="Founder and CEO of Foodwud Private Limited"
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#c9a227]/30 -z-10" />
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-3xl border border-[#c9a227]/15 -z-10" />

              {/* Quote badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0d3d1a">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="font-serif text-xl text-[#0d3d1a] font-semibold">Founder & CEO</p>
              <p className="text-[#c9a227] text-sm font-medium mt-1">Foodwud Private Limited</p>
              <div className="flex items-center gap-1 mt-3 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#c9a227">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 lg:p-10 bg-white rounded-3xl border border-[#d4e8d4] shadow-lg">
              {/* Large quote mark */}
              <div className="absolute top-6 left-8 font-serif text-8xl text-[#c9a227]/15 leading-none select-none">
                &ldquo;
              </div>

              <div className="relative space-y-4 pt-4">
                <p className="text-[#1a5c2a] font-semibold text-sm tracking-wide uppercase mb-6">
                  — To our valued customers and partners
                </p>

                <p className="text-[#2d4a35] text-base lg:text-lg leading-relaxed font-serif italic">
                  &ldquo;At Foodwud, we believe that quality food begins with trust. Our journey started with a simple vision — to bring safe, hygienic, and high-quality food products to consumers through reliable packaging and a brand they can depend on.&rdquo;
                </p>

                <p className="text-[#4a6650] text-sm lg:text-base leading-relaxed mt-4">
                  Every product carrying the Foodwud name reflects our commitment to excellence, consistency, and customer satisfaction. In today&apos;s fast-changing marketplace, consumers seek products that are not only affordable but also trustworthy — and we are dedicated to meeting those expectations.
                </p>

                <p className="text-[#4a6650] text-sm lg:text-base leading-relaxed">
                  As we continue to grow, our mission remains unchanged: to create products that enrich everyday lives and establish Foodwud as a respected and trusted FMCG brand. We are grateful for the support and confidence placed in us.
                </p>

                <div className="pt-4 border-t border-[#d4e8d4] flex items-center justify-between flex-wrap gap-4">
                  <p className="text-[#0d3d1a] font-semibold text-sm">
                    Warm Regards,<br />
                    <span className="font-serif text-lg text-[#1a5c2a]">Founder & CEO</span>
                  </p>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EzMT6aFTP81C5n6QG77TolKBFEo7yZ.png"
                    alt="Foodwud logo"
                    width={100}
                    height={30}
                    className="h-8 w-auto object-contain opacity-60"
                  />
                </div>
              </div>
            </div>

            {/* Metric chips */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                {
                  label: 'Est. in Siliguri',
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: 'Darjeeling Heritage',
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  ),
                },
                {
                  label: 'FMCG Excellence',
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ),
                },
                {
                  label: 'Consumer First',
                  icon: (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ),
                },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e8f5e9] text-[#1a5c2a] text-xs font-medium border border-[#c3e6c3]"
                >
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
