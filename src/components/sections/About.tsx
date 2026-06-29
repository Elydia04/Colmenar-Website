'use client'

import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import AccentTick from '@/components/ui/AccentTick'
import Link from 'next/link'

export default function About() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-300 mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-3 relative">
          <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-lg relative">
            <Image
              src="/images/spring-source.jpg"
              alt="Natural spring water source at Villa Colmenar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <Badge className="absolute -bottom-3 -right-3 shadow-md">
            Since 2005
          </Badge>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-leaf">
            Our Story
          </p>
          <AccentTick />
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
            Learn more about us <span className="link-arrow">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
