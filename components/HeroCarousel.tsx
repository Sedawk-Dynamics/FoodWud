'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    "id": 5,
    "image": "/images/hero/05-group-hero-banner.png",
    "alt": "Upton Tea collection - Better Leaves. Better Every Day."
  },
  {
    "id": 1,
    "image": "/images/hero/03-premium-pouch.png",
    "alt": "Upton Premium Blended Tea ? Better Tea. Better Every Day."
  },
  {
    "id": 2,
    "image": "/images/hero/04-platinum-jar.png",
    "alt": "Upton Tea Platinum ? Pure Taste. Natural Goodness."
  },
  {
    "id": 3,
    "image": "/images/hero/01-ctc-jar.png",
    "alt": "Upton CTC Black Tea ? Every Sip, Pure Satisfaction."
  },
  {
    "id": 4,
    "image": "/images/hero/02-gold-pouch.png",
    "alt": "Upton Tea Gold ? Unfold Perfection."
  }
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
      className="relative mt-[72px] w-full aspect-[2/1] overflow-hidden scroll-mt-[72px]"
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
            alt={s.alt}
            fill
            className="object-contain object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#c9a227] hover:border-[#c9a227] transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#c9a227] hover:border-[#c9a227] transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
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
