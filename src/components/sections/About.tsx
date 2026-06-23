'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import Badge from '@/components/ui/Badge'
import Link from 'next/link'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="bg-cream py-20 md:py-28">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center"
      >
        <div className="lg:col-span-3 relative reveal-on-scroll">
          <div
            className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: "url('/images/spring-source.jpg')" }}
          />
          <Badge className="absolute -bottom-3 -right-3 shadow-md">
            Since 2005
          </Badge>
        </div>

        <div className="lg:col-span-2 space-y-6 reveal-on-scroll">
          <p className="font-mono text-xs uppercase tracking-widest text-leaf">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone leading-tight">
            A Hidden Escape Built Around One Gift
          </h2>
          <div className="space-y-4 font-body text-base md:text-lg text-stone/70 leading-relaxed">
            <p>
              Villa Colmenar was built around a single, extraordinary feature: a
              natural spring that feeds crystal-clear water into the pool
              year-round. What started as a family getaway is now a destination
              for anyone looking to escape the city heat.
            </p>
            <p>
              The Mediterranean-style architecture, tropical gardens, and
              family-friendly atmosphere make it feel a world away &mdash; even
              though it&apos;s just a short drive from Manila.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-block font-body text-spring-deep underline underline-offset-4 hover:text-spring-mid transition-colors"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
