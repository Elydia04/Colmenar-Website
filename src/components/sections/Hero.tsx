'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'

function seeded(i: number, offset = 0) {
  return (Math.sin(i * 12.9898 + offset * 78.233) * 43758.5453) % 1
}

const droplets = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${10 + seeded(i, 1) * 80}%`,
  top: `${30 + seeded(i, 2) * 50}%`,
  size: `${8 + seeded(i, 3) * 14}px`,
  delay: `${seeded(i, 4) * 3}s`,
}))

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    rootRef.current?.classList.add('hero-loaded')
  }, [])

  return (
    <section ref={rootRef} className="relative h-screen w-full overflow-hidden">
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
            width: d.size,
            height: d.size,
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
            className="font-mono text-xs uppercase tracking-widest text-white/80 mb-4 transition-all duration-[600ms] hero-loaded:opacity-100 opacity-0"
            style={{ transitionDelay: '200ms' }}
          >
            Natural Spring Water &middot; Est. 2005
          </p>

          <h1
            className="font-display text-6xl md:text-8xl font-light tracking-tight leading-none text-white mb-6 transition-all duration-[800ms] hero-loaded:opacity-100 hero-loaded:translate-y-0 opacity-0 translate-y-[30px]"
            style={{ transitionDelay: '400ms' }}
          >
            Dive Into
            <br />
            Pure Spring
          </h1>

          <p
            className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-[600px] mx-auto mb-8 transition-all duration-[600ms] hero-loaded:opacity-100 opacity-0"
            style={{ transitionDelay: '700ms' }}
          >
            Fed by underground springs, our pool stays crystal-clear and naturally cool &mdash; no chemicals, just nature.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[600ms] hero-loaded:opacity-100 hero-loaded:scale-100 opacity-0 scale-95"
            style={{ transitionDelay: '900ms' }}
          >
            <Button variant="primary" href="/book">
              Book Your Visit
            </Button>
            <Button variant="ghost" href="#spring">
              See the Pool &darr;
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
