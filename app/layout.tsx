import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Foodwud Private Limited — Pure by Nature, Trusted for Generations',
  description:
    'Foodwud Pvt. Ltd. is a premium FMCG company from Darjeeling, West Bengal, delivering safe, hygienic, and high-quality food products — Tea, Spices, Fox Nuts, Honey and more.',
  keywords: 'Foodwud, FMCG, Darjeeling tea, spices, fox nuts, honey, premium food, natural food',
  authors: [{ name: 'Foodwud Private Limited' }],
  openGraph: {
    title: 'Foodwud Private Limited',
    description: 'Pure by Nature. Trusted for Generations.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a5c2a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
