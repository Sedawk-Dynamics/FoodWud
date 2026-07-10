'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const brands = [
  {
    id: 'upton-tea',
    name: 'Upton Tea',
    tagline: 'Traditional Quality Tea',
    desc: 'Our flagship tea brand bringing the finest Darjeeling and Assam tea blends to households across India. From classic CTC to premium loose leaf, Upton Tea delivers rich aroma in every cup.',
    image: '/images/brand-upton-tea.png',
    color: '#0d3d1a',
    accent: '#c9a227',
    tags: ['Darjeeling Tea', 'CTC', 'Green Tea', 'Loose Leaf'],
    highlight: 'Flagship Brand',
  },
  {
    id: 'spices',
    name: 'Foodwud Spices',
    tagline: 'Pure Spices, Pure Flavor',
    desc: 'Authentic Indian spice blends crafted with zero adulterants. Our spices are sourced directly, hygienically processed, and packaged to lock in the true essence of Indian culinary tradition.',
    image: '/images/brand-spices.png',
    color: '#3d1a0d',
    accent: '#c9a227',
    tags: ['Turmeric', 'Chili Powder', 'Masala Blends', 'Kitchen Staples'],
    highlight: 'Zero Adulteration',
  },
  {
    id: 'makhana',
    name: 'Foodwud Makhana',
    tagline: 'The Superfood Snack',
    desc: "Premium quality roasted fox nuts — 100% natural, gluten-free, and packed with protein. The ideal healthy snack for today's health-conscious consumers.",
    image: '/images/brand-makhana.png',
    color: '#1a3d0d',
    accent: '#c9a227',
    tags: ['Gluten Free', 'High Protein', 'Roasted', 'No Preservatives'],
    highlight: 'Superfood',
  },
  {
    id: 'honey',
    name: "Nature's Honey",
    tagline: "Nature's Golden Goodness",
    desc: 'Pure, raw honey harvested from the pristine forests of the Himalayan foothills. Unadulterated goodness with no artificial additives — just pure nature in every drop.',
    image: '/images/brand-honey.png',
    color: '#3d2e0d',
    accent: '#c9a227',
    tags: ['Raw Honey', 'Forest Honey', 'No Additives', 'Himalayan Origin'],
    highlight: '100% Pure',
  },
]

export default function BrandsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState(brands[0].id)

  const activeBrand = brands.find((b) => b.id === active)!

  return (
    <section id="brands" ref={ref} className="py-24 lg:py-32 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#c9a227]" />
            <span className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a227">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Our Brands
            </span>
            <span className="h-px w-12 bg-[#c9a227]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0d3d1a] mb-4 text-balance">
            Brands Built on <span className="italic text-green-gradient">Trust & Purity</span>
          </h2>
          <p className="text-[#4a6650] text-base max-w-xl mx-auto leading-relaxed">
            Each Foodwud brand carries the same promise — quality you can see, taste you can trust, and safety you can count on.
          </p>
        </motion.div>

        {/* Brand Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActive(brand.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                active === brand.id
                  ? 'bg-[#0d3d1a] text-[#c9a227] border-[#0d3d1a]'
                  : 'bg-white text-[#4a6650] border-[#d4e8d4] hover:border-[#0d3d1a] hover:text-[#0d3d1a]'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </motion.div>

        {/* Active Brand Showcase */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-green-900/10">
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${activeBrand.color}ee, ${activeBrand.color}99)` }}
            />
            <Image
              src={activeBrand.image}
              alt={`${activeBrand.name} product lineup`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Highlight badge */}
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#c9a227] text-[#0d3d1a]">
                {activeBrand.highlight}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-[#c9a227] text-xs font-bold tracking-[0.2em] uppercase mb-2">{activeBrand.tagline}</p>
              <h3 className="font-serif text-3xl md:text-4xl text-[#0d3d1a] leading-tight mb-4">{activeBrand.name}</h3>
              <p className="text-[#4a6650] text-base leading-relaxed">{activeBrand.desc}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {activeBrand.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#e8f5e9] text-[#1a5c2a] border border-[#c3e6c3]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Brand promise */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0d3d1a]/5 border border-[#0d3d1a]/10">
              <div className="w-10 h-10 rounded-xl bg-[#0d3d1a] flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-[#0d3d1a] font-semibold text-sm mb-1">Foodwud Quality Promise</p>
                <p className="text-[#4a6650] text-xs leading-relaxed">
                  Every product under this brand is tested for quality, packaged hygienically, and certified for safety before it reaches your hands.
                </p>
              </div>
            </div>

            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-[#0d3d1a] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#c9a227] hover:text-[#0d3d1a] transition-all duration-300 cursor-pointer"
            >
              Enquire About This Brand
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* All Brands Mini Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-[#d4e8d4]"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              onClick={() => setActive(brand.id)}
              className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 ${
                active === brand.id
                  ? 'border-[#0d3d1a] bg-[#0d3d1a]/5 shadow-md'
                  : 'border-[#d4e8d4] bg-white hover:border-[#c9a227] hover:shadow-sm'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="font-semibold text-[#0d3d1a] text-sm">{brand.name}</p>
              <p className="text-[#4a6650] text-xs mt-0.5">{brand.tagline}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
