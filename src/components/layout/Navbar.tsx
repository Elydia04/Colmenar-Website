'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Pool', href: '/#spring' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Book Now', href: '/book' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.includes('#') && href === pathname) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        window.dispatchEvent(new CustomEvent('replay-animations'))
      }
    },
    [pathname]
  )

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
          onClick={(e) => handleNav(e, '/')}
          className="font-display text-lg md:text-xl font-semibold text-white bg-spring-deep/80 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          Villa Colmenar
        </Link>

        <div className="hidden md:flex items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="font-body text-sm text-white bg-spring-deep/70 hover:bg-spring-deep/90 backdrop-blur-sm rounded-full px-4 py-1.5 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={(e) => handleNav(e, '/book')}
            className="bg-sun text-stone font-body font-medium rounded-full px-5 py-1.5 text-sm hover:brightness-110 transition-all"
          >
            Book a Dip
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
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
              onClick={(e) => {
                setMenuOpen(false)
                handleNav(e, link.href)
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
