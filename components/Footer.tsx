'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Products', href: '#products' },
    { label: 'Our Brands', href: '#brands' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Products: [
    { label: 'Premium Tea', href: '#products' },
    { label: 'Pure Spices', href: '#products' },
    { label: 'Fox Nuts (Makhana)', href: '#products' },
    { label: "Nature's Honey", href: '#products' },
    { label: 'More Coming Soon', href: '#products' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Quality Standards', href: '#' },
    { label: 'Certifications', href: '#' },
  ],
}

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080f09] text-white">
      {/* Top CTA Banner */}
      <div className="bg-[#c9a227] py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0d3d1a 1px, transparent 0)`,
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-3xl text-[#0d3d1a] font-bold mb-2">
                Ready to Partner with Foodwud?
              </h3>
              <p className="text-[#0d3d1a]/70 text-sm">
                Join our network of distributors and retailers. Bring Darjeeling&apos;s finest to your customers.
              </p>
            </div>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 flex items-center gap-3 bg-[#0d3d1a] text-[#c9a227] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#1a5c2a] transition-colors cursor-pointer"
            >
              Get In Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EzMT6aFTP81C5n6QG77TolKBFEo7yZ.png"
              alt="Foodwud Private Limited"
              width={180}
              height={50}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              A fast-growing FMCG company specializing in the packaging and marketing of high-quality food products under its own brand name from the pristine Darjeeling region.
            </p>
            <div className="space-y-2 text-sm text-white/40">
              <div className="flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>Panchkalguri, Matigara, Siliguri, WB 734010</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@foodwud.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" />
                </svg>
                <span>GST: 19AAGCF7122F1ZP</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#c9a227] font-semibold text-xs tracking-widest uppercase mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200 cursor-pointer text-left hover:translate-x-1 transition-transform block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Foodwud Private Limited. All rights reserved. Registered in West Bengal, India.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Made with</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#c9a227">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>in Darjeeling</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
