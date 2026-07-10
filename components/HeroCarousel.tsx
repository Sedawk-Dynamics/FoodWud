'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Section%20design%201.png-5pscoZX0y2aGA8W5hvMsdJYc8XyK1Z.jpeg',
    tag: 'PURE IN EVERY LEAF',
    headline: ['Tea, Made Simple.', 'Naturally Better.'],
    description: 'Thoughtfully selected tea leaves crafted for a smooth, refreshing cup every day.',
    cta: 'Explore Collection',
    badges: ['100% Natural', 'Carefully Sourced', 'Rich Aroma'],
    accentColor: '#1a5c2a',
  },
  {
    id: 2,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Section%20design%202.png-CY6ZfB5JHnhjYFPiSt4AeALRjyDglA.jpeg',
    tag: 'NATURE\'S FINEST',
    headline: ["Nature's Finest.", 'Perfectly Crafted.'],
    description: 'From the misty highlands to your cup, experience tea in its purest, most authentic form.',
    cta: 'Explore Collection',
    badges: ['100% Natural', 'Carefully Sourced', 'Rich Aroma'],
    accentColor: '#c9a227',
  },
  {
    id: 3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Section%20design%203.png-qvKNSo50t8vVhvWUEaBvKSIdvY89qR.jpeg',
    tag: 'PURE IN EVERY LEAF',
    headline: ["Nature's Finest.", 'Perfectly Crafted.'],
    description: 'From the misty highlands to your cup, experience tea in its purest, most authentic form.',
    cta: 'Explore Collection',
    badges: ['100% Natural', 'Carefully Sourced', 'Rich Aroma'],
    accentColor: '#1a5c2a',
  },
  {
    id: 4,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Section%20design%204.png-hnGaX73HTkB9KUAdgsypd4d2W9Em18.jpeg',
    tag: 'REAL LEAVES. REAL GOODNESS.',
    headline: ['Better Leaves.', 'Better Every Day.'],
    description: 'Made from carefully picked tea leaves for a naturally refreshing experience.',
    cta: 'Discover the Difference',
    badges: ['100% Natural', 'Carefully Sourced', 'Rich Aroma', 'Full of Goodness'],
    accentColor: '#2e7d32',
  },
]



export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + slides.length) % slides.length)
    },
    []
  )

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images — all rendered, only current visible */}
      {slides.map((s, i) => (
        <motion.div
          key={s.id}
          className="absolute inset-0 z-0"
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <Image
            src={s.image}
            alt={s.headline.join(' ')}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#c9a227] hover:border-[#c9a227] transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#c9a227] hover:border-[#c9a227] transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="cursor-pointer transition-all duration-300"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.span
              animate={{
                width: i === current ? 28 : 8,
                opacity: i === current ? 1 : 0.5,
              }}
              className="block h-2 rounded-full bg-[#c9a227]"
            />
          </button>
        ))}
      </div>

    </section>
  )
}
