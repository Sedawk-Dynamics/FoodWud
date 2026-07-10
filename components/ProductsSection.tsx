'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    id: 'tea',
    title: 'Premium Tea',
    tagline: 'Rich Aroma, Perfect Taste',
    desc: 'Hand-picked Darjeeling tea leaves delivering an unmatched aroma and taste. From classic CTC to premium loose leaf blends.',
    image: '/images/product-tea.png',
    badge: 'Bestseller',
    badgeColor: '#1a5c2a',
    bgColor: 'from-[#0d3d1a] to-[#1e5e30]',
    highlights: ['Darjeeling CTC', 'Loose Leaf', 'Green Tea'],
  },
  {
    id: 'spices',
    title: 'Pure Spices',
    tagline: 'Pure Spices, Pure Flavor',
    desc: 'Authentic Indian spice blends processed with zero adulterants. Experience the true essence of Indian culinary tradition.',
    image: '/images/product-spices.png',
    badge: 'Premium',
    badgeColor: '#c9a227',
    bgColor: 'from-[#3d1a0d] to-[#6b2e0e]',
    highlights: ['Masala Magic', 'Turmeric', 'Blended Spices'],
  },
  {
    id: 'foxnuts',
    title: 'Fox Nuts (Makhana)',
    tagline: 'Healthy Snacking Choice',
    desc: 'Premium quality roasted fox nuts, the superfood snack that is 100% natural, gluten-free, and packed with protein.',
    image: '/images/product-foxnuts.png',
    badge: 'Healthy',
    badgeColor: '#2e7d32',
    bgColor: 'from-[#1a3d0d] to-[#2e6b1a]',
    highlights: ['Lightly Salted', 'Roasted Not Fried', 'Gluten Free'],
  },
  {
    id: 'honey',
    title: "Nature's Honey",
    tagline: "Nature's Golden Goodness",
    desc: 'Pure, raw, and natural honey harvested from the pristine forests of the Himalayan foothills. Unadulterated goodness in every drop.',
    image: '/images/product-honey.png',
    badge: 'Pure',
    badgeColor: '#c9a227',
    bgColor: 'from-[#3d2e0d] to-[#6b5210]',
    highlights: ['Raw Honey', 'Forest Honey', 'No Additives'],
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
  const [hovered, setHovered] = useState<string | null>(null)

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
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            From morning tea rituals to festive feasts — Foodwud delivers premium quality products that enrich everyday life.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-[480px]"
            >
              {/* Card BG Image */}
              <div className={`absolute inset-0 bg-gradient-to-b ${product.bgColor}`} />
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ scale: hovered === product.id ? 1.08 : 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover opacity-50 mix-blend-luminosity"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: product.badgeColor }}
                >
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-serif text-xl text-white font-semibold mb-1">{product.title}</h3>
                <p className="text-[#c9a227] text-xs font-medium mb-3">{product.tagline}</p>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: hovered === product.id ? 'auto' : 0, opacity: hovered === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-white/70 text-xs leading-relaxed mb-3">{product.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.highlights.map((h) => (
                      <span key={h} className="px-2 py-1 rounded-full text-xs bg-white/10 text-white/80 border border-white/10">
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-4 flex items-center gap-2 text-[#c9a227] text-xs font-semibold cursor-pointer group-hover:gap-3 transition-all duration-300"
                >
                  Explore Product
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{ opacity: hovered === product.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ boxShadow: `inset 0 0 0 1.5px rgba(201,162,39,0.6), 0 0 30px rgba(201,162,39,0.15)` }}
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
