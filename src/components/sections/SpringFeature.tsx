'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { useCountUp } from '@/lib/useCountUp'
import Badge from '@/components/ui/Badge'
import WaveDivider from '@/components/ui/WaveDivider'
import RippleRing from '@/components/ui/RippleRing'

function Stat({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const { ref } = useCountUp(value)

  return (
    <div className="relative flex flex-col items-center w-full">
      <RippleRing />
      <span className="font-display text-5xl md:text-6xl font-semibold text-white mt-4">
        <span ref={ref}>0</span>{suffix}
      </span>
      <span className="font-body text-sm text-spring-foam/80 mt-1">{label}</span>
    </div>
  )
}

export default function SpringFeature() {
  const ref = useScrollReveal()
  const galleryRef = useScrollReveal()

  return (
    <section id="spring" className="relative bg-spring-deep py-20 md:py-28 overflow-hidden">
      <WaveDivider position="top" />
      <WaveDivider position="bottom" />

      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        <div className="flex flex-col items-center lg:items-start gap-8">
          <Stat value={100} suffix="%" label="Spring Water Purity" />
          <Stat value={0} suffix="" label="Added Chemicals" />
          <Stat value={24} suffix="°C" label="Natural Temp. Year-Round" />
        </div>

        <div className="reveal-on-scroll space-y-6">
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

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 md:mt-16">
        <div ref={galleryRef} className="slide-from-right grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            role="img"
            aria-label="Villa Colmenar resort overview"
            className="aspect-[4/3] rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/images/overview.jpg')" }}
          />
          <div
            role="img"
            aria-label="Pool with evening lights"
            className="aspect-[4/3] rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/images/night-lights.jpg')" }}
          />
          <div
            role="img"
            aria-label="Aerial night view of Villa Colmenar"
            className="aspect-[4/3] rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/images/ar-night.jpg')" }}
          />
        </div>
      </div>
    </section>
  )
}
