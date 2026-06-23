'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'

const amenities = [
  { icon: '🏊', title: 'Natural Spring Pool', desc: 'Main pool, spring-fed, open daily' },
  { icon: '🌿', title: 'Lush Garden Grounds', desc: 'Tropical landscaping, shaded rest areas' },
  { icon: '🏠', title: 'Function Rooms / Cottages', desc: 'Rent private spaces for events' },
  { icon: '🍽️', title: 'Poolside Dining', desc: 'Food & beverages on site' },
  { icon: '🅿️', title: 'Ample Parking', desc: 'Free secure parking' },
  { icon: '📸', title: 'Scenic Views', desc: 'Hills + colonial architecture backdrop' },
]

export default function Amenities() {
  const ref = useScrollReveal()

  return (
    <section id="amenities" className="bg-white py-20 md:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf mb-4">
          What&apos;s Included
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone mb-12">
          Everything You Need to Unwind
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-spring-pale rounded-2xl p-6 text-left hover:-translate-y-1 hover:shadow-lg hover:border-spring-mid transition-all duration-300"
            >
              <div className="w-10 h-10 bg-spring-foam rounded-full flex items-center justify-center text-lg mb-4">
                {a.icon}
              </div>
              <h3 className="font-display text-xl text-stone mb-1">{a.title}</h3>
              <p className="font-body text-sm text-stone/70">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
