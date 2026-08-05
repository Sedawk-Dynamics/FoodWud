'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 'upton-pouch-black',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-05%20at%2017.24.13-d3R5b7aX6Br77evXZ98w7vAZDBTpC9.jpeg',
    alt: 'Black and gold Upton Tea pouch',
  },
  {
    id: 'upton-tea-jar',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-05%20at%2017.25.53-q1fhwNPSSlanpNlvN51AhYGzsgFTve.jpeg',
    alt: 'Upton Tea jar filled with tea leaves',
  },
  {
    id: 'upton-pouch-green',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-05%20at%2017.24.13%20%281%29-DBZX2VbVdrwlGt4JLN02cHLFO890wO.jpeg',
    alt: 'Dark green and gold Upton Tea pouch',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" ref={ref} className="py-24 lg:py-32 bg-[#0d3d1a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c9a227 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a227">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2z" />
              </svg>
              Our Products
            </span>
            <span className="h-px w-12 bg-[#c9a227]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 text-balance">
            Goodness for <span className="shimmer-text">Every Moment</span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-6 md:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="relative h-[420px] overflow-hidden rounded-3xl bg-white shadow-xl md:h-[520px]"
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-[#0d3d1a] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
