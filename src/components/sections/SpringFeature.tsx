'use client'

import { useState, useCallback } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { useCountUp } from '@/lib/useCountUp'
import Badge from '@/components/ui/Badge'
import WaveDivider from '@/components/ui/WaveDivider'
import RippleRing from '@/components/ui/RippleRing'
import Lightbox from '@/components/ui/Lightbox'

function Stat({
  value,
  suffix,
  label,
  icon,
}: {
  value: number
  suffix: string
  label: string
  icon: React.ReactNode
}) {
  const { ref } = useCountUp(value)

  return (
    <div className="relative flex flex-col items-center w-full">
      <RippleRing>{icon}</RippleRing>
      <span className="font-display text-5xl md:text-6xl font-semibold text-white mt-4">
        <span ref={ref}>0</span>{suffix}
      </span>
      <span className="font-body text-sm text-spring-foam/80 mt-1">{label}</span>
    </div>
  )
}

const galleryImages = [
  { src: '/images/ar-night.jpg', caption: 'Aerial night view of Villa Colmenar' },
  { src: '/images/night-lights.jpg', caption: 'Pool with evening lights' },
  { src: '/images/overview.jpg', caption: 'Villa Colmenar resort overview' },
]

export default function SpringFeature() {
  const ref = useScrollReveal()
  const [items, setItems] = useState(galleryImages)
  const [slidingOut, setSlidingOut] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  const handleImageClick = useCallback(() => {
    if (slidingOut) return
    setSlidingOut(true)
    setTimeout(() => {
      setItems(prev => {
        const next = [...prev]
        next.push(next.shift()!)
        return next
      })
      setSlidingOut(false)
    }, 500)
  }, [slidingOut])

  return (
    <section id="spring" className="relative bg-spring-deep py-16 md:py-20 overflow-hidden">
      <WaveDivider position="top" />
      <WaveDivider position="bottom" />

      <div
        ref={ref}
        className="reveal-wrapper max-w-[1260px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        <div className="reveal-left">
          <div className="relative max-w-[31.5rem] mx-auto lg:ml-[12%]">
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg group">
              {items.map((img, i) => {
                const isTop = i === 0
                return (
                  <button
                    key={img.src}
                    onClick={handleImageClick}
                    aria-label={img.caption}
                    className={`absolute inset-y-0 rounded-xl overflow-hidden ${
                      isTop ? 'right-0 left-4' : i === 1 ? 'right-0 left-[9px]' : 'right-0 left-0'
                    }`}
                    style={{
                      zIndex: items.length - i,
                      transition: isTop && slidingOut ? 'all 500ms ease-in-out' : 'none',
                      opacity: isTop && slidingOut ? 0 : 1,
                      transform: isTop
                        ? slidingOut
                          ? 'translateX(100%)'
                          : 'none'
                        : `translateY(${i * 4}px)`,
                      filter: isTop
                        ? 'none'
                        : slidingOut && i === 1
                          ? 'none'
                          : i === 1
                            ? 'blur(2px) brightness(0.6) saturate(0.3)'
                            : 'blur(4px) brightness(0.4) saturate(0.15)',
                    }}
                  >
                    <div
                      role="img"
                      aria-label={img.caption}
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${img.src}')` }}
                    />
                  </button>
                )
              })}
              <button
                onClick={() => setLightbox(items[0])}
                aria-label="View fullscreen"
                className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/50 text-white/90 text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <path d="M1 4v6h6M23 20v-6h-6" />
                  <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
                </svg>
                Click to cycle photos
              </div>
            </div>
          </div>
        </div>

        <div className="reveal-right space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Stat
              value={100}
              suffix="%"
              label="Spring Water Purity"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M12 2C12 2 5 10 5 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-5-7-13-7-13z" />
                </svg>
              }
            />
            <Stat
              value={0}
              suffix=""
              label="Added Chemicals"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path d="M17 8c-5 0-13 8-13 8s8-2 12-4c2-1 4-4 4-4-2 0-6-2-10-2z" />
                  <path d="M9 15c-1.5 1.5-3 4-3 4s4-1 6-2.5" />
                </svg>
              }
            />
            <Stat
              value={24}
              suffix="°C"
              label="Natural Temp. Year-Round"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <rect x="9" y="2" width="6" height="16" rx="3" />
                  <circle cx="12" cy="18" r="3" />
                  <path d="M12 8v2" />
                  <path d="M12 12v2" />
                </svg>
              }
            />
          </div>

          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-spring-mid">
              Why Our Water Is Different
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight">
              Straight from the Earth,
              <br />
              Into Your Day
            </h2>
            <p className="font-body text-base md:text-lg text-spring-foam/80 leading-relaxed">
              The pool is fed by a natural underground spring, keeping the water
              fresh, cool, and completely chemical-free. Families feel the
              difference the moment they step in &mdash; no chlorine smell, no
              stinging eyes, just pure, natural water.
            </p>
            <Badge>&#10022; Spring-Certified Natural Water</Badge>
          </div>
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
