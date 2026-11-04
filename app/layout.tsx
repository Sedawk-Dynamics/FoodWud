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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
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
