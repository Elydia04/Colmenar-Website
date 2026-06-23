'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'

const droplets = [
  { id: 0, left: '15%', top: '40%', size: 12, delay: '0s' },
  { id: 1, left: '35%', top: '55%', size: 8, delay: '0.5s' },
  { id: 2, left: '55%', top: '35%', size: 16, delay: '1s' },
  { id: 3, left: '75%', top: '60%', size: 10, delay: '1.5s' },
  { id: 4, left: '20%', top: '70%', size: 14, delay: '2s' },
  { id: 5, left: '60%', top: '45%', size: 9, delay: '2.5s' },
  { id: 6, left: '85%', top: '50%', size: 18, delay: '0.8s' },
  { id: 7, left: '45%', top: '75%', size: 11, delay: '1.8s' },
]

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    rootRef.current?.classList.add('hero-loaded')
  }, [])

  return (
    <section ref={rootRef} className="hero-root relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-pool.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1A7A8A]/70 to-transparent" />

      {droplets.map((d) => (
        <svg
          key={d.id}
          className="absolute text-spring-pale/60"
          style={{
            left: d.left,
            top: d.top,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animation: `dropletFloat 4s ease-in-out infinite`,
            animationDelay: d.delay,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C12 2 5 10 5 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-5-7-13-7-13z" />
        </svg>
      ))}

      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24">
        <div className="text-center max-w-[800px] px-4">
          <p
            className="hero-eyebrow font-mono text-xs uppercase tracking-widest text-white/80 mb-4"
          >
            Natural Spring Water &middot; Est. 2005
          </p>

          <h1
            className="hero-title font-display text-6xl md:text-8xl font-light tracking-tight leading-none text-white mb-6"
          >
            Dive Into
            <br />
            Pure Spring
          </h1>

          <p
            className="hero-sub font-body text-base md:text-lg text-white/80 leading-relaxed max-w-[600px] mx-auto mb-8"
          >
            Fed by underground springs, our pool stays crystal-clear and naturally cool &mdash; no chemicals, just nature.
          </p>

          <div
            className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" href="/book">
              Book Your Visit
            </Button>
            <Button variant="ghost" href="#spring">
              See the Pool <span className="arrow-down">&darr;</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
