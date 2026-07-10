'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X, Leaf } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Our Brands', href: '#brands' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const { scrollYProgress } = useScroll()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => setProgress(v))
    return unsubscribe
  }, [scrollYProgress])

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-indicator"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white backdrop-blur-xl ${
          isScrolled
            ? 'shadow-lg shadow-green-900/10 py-2'
            : 'py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick('Home', '#home')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EzMT6aFTP81C5n6QG77TolKBFEo7yZ.png"
              alt="Foodwud Private Limited Logo"
              width={180}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 nav-link-underline cursor-pointer ${
                    activeLink === link.label
                      ? 'text-[#1a5c2a]'
                      : 'text-[#0d3d1a] hover:text-[#1a5c2a]'
                  }`}
                >
                  {link.label}
                  {activeLink === link.label && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a227]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleNavClick('Contact Us', '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:flex items-center gap-2 bg-[#1a5c2a] text-[#faf8f2] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c9a227] hover:text-[#0d3d1a] transition-all duration-300 cursor-pointer shadow-md"
          >
            <Leaf size={16} />
            Get In Touch
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-[#0d3d1a]"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-[#d4e8d4] overflow-hidden"
            >
              <ul className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.label, link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        activeLink === link.label
                          ? 'bg-[#e8f5e9] text-[#1a5c2a]'
                          : 'text-[#0d3d1a] hover:bg-[#f0f7f0]'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="pt-2"
                >
                  <button
                    onClick={() => handleNavClick('Contact Us', '#contact')}
                    className="w-full flex items-center justify-center gap-2 bg-[#1a5c2a] text-[#faf8f2] px-5 py-3 rounded-full text-sm font-semibold"
                  >
                    <Leaf size={16} />
                    Get In Touch
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
