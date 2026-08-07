'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Image from 'next/image'

type Variant = {
  size: string
  note?: string
  premium?: boolean
}

type Product = {
  id: string
  name: string
  category: string
  tagline: string
  desc: string
  images: string[]
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
    images: ['/tea/upton-tea-1.jpeg', '/tea/upton-tea-2.jpeg', '/tea/upton-tea-3.jpeg'],
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
    desc: 'Hand-picked premium makhana, classic roasted for a light, crisp bite. A naturally gluten-free, protein-rich snack that fits every moment of the day.',
    images: ['/images/product-foxnuts.png'],
    alt: 'Foodwud premium roasted fox nuts (makhana)',
    status: 'coming-soon',
    variantLabel: 'Range at Launch',
    variants: [
      { size: 'Classic Roasted', note: 'Lightly roasted, everyday snack' },
      { size: 'Flavoured', note: 'Flavoured nutrients range' },
    ],
    highlights: ['Classic Roasted', 'Flavoured Nutrients', 'Gluten Free', 'High Protein'],
    details: [
      { label: 'Status', value: 'Launching soon' },
      { label: 'Type', value: 'Premium grade fox nuts (makhana)' },
      { label: 'Processing', value: 'Classic roasted, hygienically packed' },
      { label: 'Nutrition', value: 'High protein, gluten free, low fat' },
    ],
  },
  {
    id: 'mustard-oil',
    name: 'Premium Mustard Oil',
    category: 'Edible Oil',
    tagline: 'Pure Ingredients. Pure Promise.',
    desc: 'Cold pressed kachi ghani mustard oil — pure, natural, and full-bodied. Extracted the traditional way to retain natural pungency, aroma, and nutrients.',
    images: ['/images/products-spread.png'],
    alt: 'Foodwud premium cold pressed kachi ghani mustard oil',
    status: 'coming-soon',
    variantLabel: 'Range at Launch',
    variants: [
      { size: 'Cold Pressed', note: 'Traditional kachi ghani extraction' },
      { size: 'Pure & Natural', note: 'No blending, no additives' },
    ],
    highlights: ['Cold Pressed Kachi Ghani', 'Pure & Natural', 'Traditional Aroma'],
    details: [
      { label: 'Status', value: 'Launching soon' },
      { label: 'Extraction', value: 'Cold pressed kachi ghani' },
      { label: 'Purity', value: '100% pure mustard oil, unblended' },
      { label: 'Use', value: 'Cooking, tempering, pickling' },
    ],
  },
  {
    id: 'spices',
    name: 'Foodwud Spice Range',
    category: 'Spices',
    tagline: 'Quality You Can Taste. Trust You Can Relish.',
    desc: 'Six authentic Indian kitchen staples — ground and blended for consistent colour, aroma, and flavour, with zero adulteration and hygienic packaging.',
    images: ['/images/product-spices.png'],
    alt: 'Foodwud spice range — turmeric, chilli, coriander and masala blends',
    status: 'coming-soon',
    variantLabel: 'Range at Launch',
    variants: [
      { size: 'Turmeric Powder' },
      { size: 'Red Chilli Powder' },
      { size: 'Coriander Powder' },
      { size: 'Cumin Powder' },
      { size: 'Garam Masala' },
      { size: 'Kitchen King Masala' },
    ],
    highlights: ['Zero Adulteration', 'Consistent Colour', 'Fresh Ground'],
    details: [
      { label: 'Status', value: 'Launching soon' },
      { label: 'Range', value: '6 kitchen staples at launch' },
      { label: 'Sourcing', value: 'Directly sourced whole spices' },
      { label: 'Quality', value: 'No fillers, no artificial colour' },
    ],
  },
]

const featured = products.find((p) => p.status === 'available')!
const upcoming = products.filter((p) => p.status === 'coming-soon')

const scrollToContact = () =>
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

/* ------------------------------- Carousel ------------------------------- */

function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const multiple = images.length > 1

  const go = useCallback(
    (next: number) => setIndex((next + images.length) % images.length),
    [images.length]
  )

  useEffect(() => {
    if (!multiple || paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500)
    return () => clearInterval(timer)
  }, [multiple, paused, images.length])

  return (
    <div
      className="relative h-full w-full min-h-[440px] sm:min-h-[560px] lg:min-h-[680px] overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0d3d1a]/50 via-transparent to-transparent pointer-events-none" />

      {multiple && (
        <>
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#c9a227] hover:text-[#0d3d1a] transition-colors duration-300 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#c9a227] hover:text-[#0d3d1a] transition-colors duration-300 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((img, i) => (
              <button
                key={img}
                onClick={() => go(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? 'w-7 bg-[#c9a227]' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ------------------------------ Coming Soon ----------------------------- */

function UpcomingCard({ product, delay }: { product: Product; delay: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className="group flex flex-col rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden hover:border-[#c9a227]/40 transition-colors duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] min-h-[340px] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.alt}
          fill
          className="object-cover saturate-[0.7] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[#0d3d1a]/40 group-hover:bg-[#0d3d1a]/20 transition-colors duration-500" />

        {/* Coming Soon ribbon */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] bg-[#c9a227] text-[#0d3d1a] shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0d3d1a] animate-pulse" />
            Coming Soon
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] bg-black/40 backdrop-blur-sm text-white/90 border border-white/20">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-[#c9a227] text-[10px] font-bold tracking-[0.16em] uppercase mb-2">
          {product.tagline}
        </p>
        <h3 className="font-serif text-xl text-white mb-2.5">{product.name}</h3>
        <p className="text-white/55 text-sm leading-relaxed mb-5">{product.desc}</p>

        <p className="text-white/35 text-[10px] font-semibold uppercase tracking-wider mb-2.5">
          {product.variantLabel}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.variants.map((v) => (
            <span
              key={v.size}
              title={v.note}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/80"
            >
              {v.size}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#c9a227]/10 text-[#e6c45a] border border-[#c9a227]/20"
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {h}
            </span>
          ))}
        </div>

        {open && (
          <motion.dl
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="grid gap-3 mb-5 pt-4 border-t border-white/10 overflow-hidden"
          >
            {product.details.map((d) => (
              <div key={d.label} className="flex gap-3">
                <dt className="text-[#c9a227] text-[10px] font-semibold uppercase tracking-wide w-24 flex-shrink-0 pt-0.5">
                  {d.label}
                </dt>
                <dd className="text-white/65 text-xs leading-relaxed">{d.value}</dd>
              </div>
            ))}
          </motion.dl>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-[#c9a227] text-[11px] font-semibold uppercase tracking-wider hover:text-[#e6c45a] transition-colors cursor-pointer"
          >
            {open ? 'Less' : 'Details'}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <button
            onClick={scrollToContact}
            className="px-4 py-2 rounded-full text-[11px] font-semibold border border-white/15 text-white/70 hover:bg-[#c9a227] hover:text-[#0d3d1a] hover:border-[#c9a227] transition-all duration-300 cursor-pointer"
          >
            Notify Me
          </button>
        </div>
      </div>
    </motion.article>
  )
}

/* -------------------------------- Section ------------------------------- */

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
          <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
            Delivering Purity. Packaging Trust. Serving Every Home.
          </p>
        </motion.div>

        {/* ----------------------- Featured product ----------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-24"
        >
          {/* Carousel */}
          <div className="relative">
            <ProductGallery images={featured.images} alt={featured.alt} />
            <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] bg-[#c9a227] text-[#0d3d1a] shadow-lg">
                {featured.category}
              </span>
              <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.12em] bg-white text-[#0d3d1a] shadow-lg">
                Available Now
              </span>
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-[#c9a227] text-[11px] font-bold tracking-[0.2em] uppercase mb-3">
              {featured.tagline}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">{featured.name}</h3>
            <p className="text-white/65 text-base leading-relaxed mb-8">{featured.desc}</p>

            {/* Pricing grid */}
            <p className="text-white/35 text-[11px] font-semibold uppercase tracking-wider mb-3">
              {featured.variantLabel}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 mb-8">
              {featured.variants.map((v) => (
                <div
                  key={v.size}
                  title={v.note}
                  className={`px-3 py-3 rounded-xl border text-center transition-all duration-300 hover:-translate-y-0.5 ${
                    v.premium
                      ? 'bg-[#c9a227]/15 border-[#c9a227]/50'
                      : 'bg-white/5 border-white/12 hover:border-[#c9a227]/50'
                  }`}
                >
                  <p className="text-white text-sm font-semibold leading-tight">{v.size}</p>
                  {v.premium && (
                    <p className="text-[#c9a227] text-[9px] font-bold uppercase tracking-wider mt-1">Premium</p>
                  )}
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.highlights.map((h) => (
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

            {/* Spec table */}
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-white/10 mb-8">
              {featured.details.map((d) => (
                <div key={d.label}>
                  <dt className="text-[#c9a227] text-[10px] font-semibold uppercase tracking-wide mb-1">
                    {d.label}
                  </dt>
                  <dd className="text-white/70 text-sm leading-relaxed">{d.value}</dd>
                </div>
              ))}
            </dl>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#c9a227] text-[#0d3d1a] px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#e6c45a] transition-colors duration-300 cursor-pointer"
            >
              Enquire About Upton Tea
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* ------------------------ Coming soon grid ---------------------- */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227] animate-pulse" />
                <span className="text-[#c9a227] text-[11px] font-bold tracking-[0.2em] uppercase">
                  Launching Soon
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white">The Range Ahead</h3>
            </div>
            <p className="text-white/50 text-sm max-w-md sm:text-right leading-relaxed">
              Three new lines are on their way. Register your interest now and we will reach out the moment they launch.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((product, i) => (
              <UpcomingCard key={product.id} product={product} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* ------------------------ Quality assurance --------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#c9a227]/10 border border-[#c9a227]/25 p-8 lg:p-10"
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={scrollToContact}
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
