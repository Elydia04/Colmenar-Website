import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import BackToTop from '@/components/BackToTop'
import MobileBookBar from '@/components/MobileBookBar'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Villa Colmenar — Natural Spring Water Pool Resort',
  description:
    'Escape to Villa Colmenar, a tropical resort in Indang, Cavite with a natural spring-fed pool. Crystal-clear water, lush surroundings, and family-friendly fun.',
  openGraph: {
    title: 'Villa Colmenar — Spring Water Pool Resort',
    description:
      'Natural spring-fed pool, tropical gardens, and the perfect family escape.',
    images: [
      {
        url: '/images/hero-pool.jpg',
        width: 1200,
        height: 800,
        alt: 'Villa Colmenar natural spring pool',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Resort',
    name: 'Villa Colmenar',
    description:
      'Natural spring water pool resort in Indang, Cavite. Crystal-clear spring-fed pool with naturally pure water.',
    url: 'https://villacolmenar.com',
    telephone: '(046) 123-4567',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Tambo Kulit',
      addressLocality: 'Indang',
      addressRegion: 'Cavite',
      addressCountry: 'PH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.2,
      longitude: 120.9,
    },
    image: '/images/hero-pool.jpg',
    priceRange: '₱120 - ₱8,000',
  }

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body text-stone bg-white">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <MobileBookBar />
      </body>
    </html>
  )
}
