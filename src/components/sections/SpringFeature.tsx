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
    <div className="relative flex flex-col items-center">
      <RippleRing />
      <span
        ref={ref}
        className="font-display text-5xl md:text-6xl font-semibold text-white mt-4"
      >
        0{suffix}
      </span>
      <span className="font-body text-sm text-spring-foam/80 mt-1">{label}</span>
    </div>
  )
}

export default function SpringFeature() {
  const ref = useScrollReveal()

  return (
    <section id="spring" className="relative bg-spring-deep py-20 md:py-28 overflow-hidden">
      <WaveDivider position="top" />
      <WaveDivider position="bottom" />

      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
    </section>
  )
}
