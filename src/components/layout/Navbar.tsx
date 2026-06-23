'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Pool', href: '/#spring' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book Now', href: '/book' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 md:h-[72px] ${
        scrolled
          ? 'bg-stone/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-display italic text-spring-mid text-xl md:text-2xl"
        >
          Villa Colmenar
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-sun text-stone font-body font-medium rounded-full px-5 py-2 text-sm hover:brightness-110 transition-all"
          >
            Book a Dip
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        className={`md:hidden bg-stone/98 backdrop-blur-md transition-all overflow-hidden ${
          menuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 py-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-white/80 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-sun text-stone font-body font-medium rounded-full px-5 py-2 text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book a Dip
          </Link>
        </div>
      </div>
    </nav>
  )
}
