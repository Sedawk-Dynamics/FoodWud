'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

type Variant = {
  size: string
  price?: string
  note?: string
  premium?: boolean
}

type Product = {
  id: string
  name: string
  category: string
  tagline: string
  desc: string
  image: string
  alt: string
  status: 'available' | 'coming-soon'
  variants: Variant[]
  variantLabel: string
  highlights: string[]
  details: { label: string; value: string }[]
}

const products: Product[] = [
  {
    id: 'upton-tea',
    name: 'Upton Tea',
    category: 'Tea',
    tagline: 'Every Sip, Pure Satisfaction',
    desc: 'Experience the rich aroma and balanced flavour of our premium Assam and Darjeeling tea blend, carefully selected and hygienically packed to bring freshness and quality to every cup.',
    image: '/images/product-tea.png',
    alt: 'Upton Tea premium Assam CTC tea packs',
    status: 'available',
    variantLabel: 'Available Variants',
    variants: [
      { size: '₹5 Pack', note: 'Premium Assam CTC' },
      { size: '₹10 Pack', note: 'Premium Assam CTC' },
      { size: '₹20 Pack', note: 'Premium Assam CTC' },
      { size: '50g Pack', note: 'Premium Assam Tea Leaves' },
      { size: '100g Pack', note: 'Premium Assam Tea Leaves' },
      { size: '250g Pack', note: 'Premium Assam Tea Leaves' },
      { size: '1kg Pack', note: 'Premium Assam Tea Leaves', premium: true },
      { size: '3kg Pack', note: 'Premium Assam Tea Leaves', premium: true },
    ],
    highlights: ['Rich Aroma', 'Strong Colour', 'Refreshing Taste', 'Hygienically Packed', 'Excellent Value for Money'],
    details: [
      { label: 'Blend', value: 'Premium Assam & Darjeeling' },
      { label: 'Grade', value: 'Assam CTC and whole leaf' },
      { label: 'Price Packs', value: '₹5, ₹10 and ₹20 sachets' },
      { label: 'Weight Packs', value: '50g, 100g, 250g, 1kg, 3kg' },
    ],
  },
  {
    id: 'fox-nuts',
    name: 'Premium Fox Nuts',
    category: 'Makhana',
    tagline: 'Flavoured Nutrients, Classic Crunch',
    desc: 'Hand-picked premium makhana, classic roasted for a light, crisp bite. A naturally gluten-free, protein-rich snack that fits every moment of the day — packed hygienically to lock in the crunch.',
    image: '/images/product-foxnuts.png',
    alt: 'Foodwud premium roasted fox nuts (makhana)',
    status: 'available',
    variantLabel: 'Available Range',
    variants: [
      { size: 'Classic Roasted', note: 'Lightly roasted, everyday snack' },
      { size: 'Flavoured', note: 'Flavoured nutrients range' },
    ],
    highlights: ['Classic Roasted', 'Flavoured Nutrients', 'Gluten Free', 'High Protein', 'No Preservatives'],
    details: [
      { label: 'Type', value: 'Premium grade fox nuts (makhana)' },
      { label: 'Processing', value: 'Classic roasted, hygienically packed' },
      { label: 'Nutrition', value: 'High protein, gluten free, low fat' },
      { label: 'Best For', value: 'Everyday snacking and fasting diets' },
    ],
  },
  {
    id: 'mustard-oil',
    name: 'Premium Mustard Oil',
    category: 'Edible Oil',
    tagline: 'Pure Ingredients. Pure Promise.',
    desc: 'Cold pressed kachi ghani mustard oil — pure, natural, and full-bodied. Extracted the traditional way to retain the natural pungency, aroma, and nutrients that Indian kitchens have trusted for generations.',
    image: '/images/products-spread.png',
    alt: 'Foodwud premium cold pressed kachi ghani mustard oil',
    status: 'available',
    variantLabel: 'Product Highlights',
    variants: [
      { size: 'Cold Pressed', note: 'Traditional kachi ghani extraction' },
      { size: 'Pure & Natural', note: 'No blending, no additives' },
    ],
    highlights: ['Cold Pressed Kachi Ghani', 'Pure & Natural', 'Traditional Aroma', 'Hygienically Packed'],
    details: [
      { label: 'Extraction', value: 'Cold pressed kachi ghani' },
      { label: 'Purity', value: '100% pure mustard oil, unblended' },
      { label: 'Use', value: 'Cooking, tempering, pickling, massage' },
      { label: 'Packaging', value: 'Food-grade sealed packs' },
    ],
  },
  {
    id: 'spices',
    name: 'Foodwud Spice Range',
    category: 'Spices',
    tagline: 'Quality You Can Taste. Trust You Can Relish.',
    desc: 'Our upcoming spice range brings authentic Indian kitchen staples — ground and blended for consistent colour, aroma, and flavour, with zero adulteration and hygienic packaging.',
    image: '/images/product-spices.png',
    alt: 'Foodwud spice range — turmeric, chilli, coriander and masala blends',
    status: 'coming-soon',
    variantLabel: 'Range (Coming Soon)',
    variants: [
      { size: 'Turmeric Powder' },
      { size: 'Red Chilli Powder' },
      { size: 'Coriander Powder' },
      { size: 'Cumin Powder' },
      { size: 'Garam Masala' },
      { size: 'Kitchen King Masala' },
    ],
    highlights: ['Zero Adulteration', 'Consistent Colour', 'Fresh Ground', 'Hygienically Packed'],
    details: [
      { label: 'Status', value: 'Launching soon' },
      { label: 'Range', value: '6 kitchen staples at launch' },
      { label: 'Sourcing', value: 'Directly sourced whole spices' },
      { label: 'Quality', value: 'No fillers, no artificial colour' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ProductsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState<string | null>('upton-tea')

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
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Delivering Purity. Packaging Trust. Serving Every Home. Explore our range with full pack sizes, variants, and pricing.
          </p>
        </motion.div>

        {/* Products */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {products.map((product) => {
            const isOpen = expanded === product.id
            return (
              <motion.article
                key={product.id}
                variants={cardVariants}
                className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="grid lg:grid-cols-5">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto lg:col-span-2 min-h-[280px]">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d1a]/70 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-[#c9a227] text-[#0d3d1a] uppercase tracking-wide">
                        {product.category}
                      </span>
                      {product.status === 'coming-soon' && (
                        <span className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-white/90 text-[#0d3d1a] uppercase tracking-wide">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-7 lg:p-10">
                    <p className="text-[#c9a227] text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                      {product.tagline}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-3">{product.name}</h3>
                    <p className="text-white/65 text-sm leading-relaxed mb-6">{product.desc}</p>

                    {/* Variants & pricing */}
                    <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-3">
                      {product.variantLabel}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.variants.map((variant) => (
                        <div
                          key={variant.size}
                          title={variant.note}
                          className={`px-4 py-2.5 rounded-xl border text-center transition-colors duration-300 ${
                            variant.premium
                              ? 'bg-[#c9a227]/15 border-[#c9a227]/50'
                              : 'bg-white/5 border-white/15 hover:border-[#c9a227]/50'
                          }`}
                        >
                          <p className="text-white text-sm font-semibold leading-tight">{variant.size}</p>
                          {variant.premium && (
                            <p className="text-[#c9a227] text-[10px] font-bold uppercase tracking-wider mt-0.5">
                              Premium
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#c9a227]/10 text-[#e6c45a] border border-[#c9a227]/25"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Detail toggle */}
                    <button
                      onClick={() => setExpanded(isOpen ? null : product.id)}
                      aria-expanded={isOpen}
                      className="mt-5 inline-flex items-center gap-2 text-[#c9a227] text-xs font-semibold uppercase tracking-wider hover:text-[#e6c45a] transition-colors cursor-pointer"
                    >
                      {isOpen ? 'Hide Details' : 'View Full Details'}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {isOpen && (
                      <motion.dl
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-5 grid sm:grid-cols-2 gap-4 pt-5 border-t border-white/10 overflow-hidden"
                      >
                        {product.details.map((d) => (
                          <div key={d.label}>
                            <dt className="text-[#c9a227] text-[11px] font-semibold uppercase tracking-wide mb-1">
                              {d.label}
                            </dt>
                            <dd className="text-white/70 text-sm leading-relaxed">{d.value}</dd>
                          </div>
                        ))}
                      </motion.dl>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-[#c9a227]/10 border border-[#c9a227]/25 p-8 lg:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">Quality Assurance</h3>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              Every Foodwud product undergoes strict quality checks to ensure:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Purity', 'Freshness', 'Safety', 'Consistent Taste'].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-11 h-11 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0d3d1a" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-[#0d3d1a] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
          >
            Request Price List &amp; Catalogue
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
