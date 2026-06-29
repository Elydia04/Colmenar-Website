'use client'

import { useRef, useState } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import AccentTick from '@/components/ui/AccentTick'

const packages = [
  {
    name: 'Day Pass',
    price: '—',
    period: '',
    featured: false,
    features: [
      'Access to spring pool',
      'Use of cottages & tables',
      'Parking included',
      '8 AM – 5 PM',
    ],
  },
  {
    name: 'Group Package',
    price: '—',
    period: '',
    featured: true,
    features: [
      'All Day Pass benefits',
      'Group rate (10+ pax)',
      'Reserved area',
      'Overnight option available',
    ],
  },
  {
    name: 'Event Booking',
    price: '—',
    period: '',
    featured: false,
    features: [
      'Private event rental',
      'Function room access',
      'Pool area exclusive',
      'Catering add-on available',
    ],
  },
]

function CursorGlow({
  color,
  children,
}: {
  color: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl"
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect()
        if (rect) setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{ opacity: hovering ? 1 : 0 }}
      >
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 280,
            height: 280,
            background: color,
            left: pos.x - 140,
            top: pos.y - 140,
          }}
        />
      </div>
      {children}
    </div>
  )
}

export default function Pricing() {
  const ref = useScrollReveal()
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf mb-4">
          Entrance &amp; Packages
        </p>
        <AccentTick className="mx-auto" />
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone mb-12">
          Simple, Honest Pricing
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {packages.map((pkg) => (
            <div key={pkg.name} className="relative">
              {pkg.featured && (
                <Badge variant="sun" className="absolute -top-3 right-6 z-20">
                  Most Popular
                </Badge>
              )}
              <CursorGlow
                color={pkg.featured ? 'rgba(255,255,255,0.35)' : 'rgba(26,122,138,0.25)'}
              >
                <div
                  className={`rounded-2xl text-left flex flex-col ${
                    pkg.featured
                      ? 'bg-spring-deep text-white shadow-xl p-10'
                      : 'bg-white border border-spring-pale text-stone p-8'
                  }`}
                >
                  <h3
                    className={`font-display text-xl mb-1 ${
                      pkg.featured ? 'text-white' : 'text-stone'
                    }`}
                  >
                    {pkg.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className={`font-display text-5xl ${
                        pkg.featured ? 'text-white' : 'text-stone'
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`font-body text-sm ${
                        pkg.featured ? 'text-spring-foam/70' : 'text-stone/50'
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-body text-sm">
                        <span className="text-leaf mt-0.5" aria-hidden="true">&#10003;</span>
                        <span className={pkg.featured ? 'text-spring-foam/90' : 'text-stone/70'}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.featured ? 'primary' : 'outline'}
                    href={`/book?package=${encodeURIComponent(pkg.name)}`}
                  >
                    Book This
                  </Button>
                </div>
              </CursorGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
