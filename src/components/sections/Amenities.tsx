'use client'

import Image from 'next/image'

const amenities = [
  { img: '/images/hero-pool.jpg', title: 'Natural Spring Pool', desc: 'Main pool, spring-fed, open daily' },
  { img: '/images/spring-source.jpg', title: 'Lush Garden Grounds', desc: 'Tropical landscaping, shaded rest areas' },
  { img: '/images/cottages.jpg', title: 'Function Rooms / Cottages', desc: 'Rent private spaces for events' },
  { img: '/images/night-pool.jpg', title: 'Poolside Dining', desc: 'Food & beverages on site' },
  { img: null, title: 'Ample Parking', desc: 'Free secure parking' },
  { img: '/images/night-aerial.jpg', title: 'Scenic Views', desc: 'Hills + colonial architecture backdrop' },
  { img: null, title: 'Kiddie Pool', desc: 'Shallow pool safe for children' },
  { img: null, title: 'Dirty Kitchen', desc: 'Guest cooking area available' },
  { img: null, title: 'Karaoke / Videoke', desc: 'Sing with family and friends' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf mb-4">
          What&apos;s Included
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone mb-12">
          Everything You Need to Unwind
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="bg-white border border-spring-pale rounded-2xl overflow-hidden text-left hover:-translate-y-1 hover:shadow-lg hover:border-spring-mid transition-all duration-300"
            >
              {a.img ? (
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="h-40 bg-gradient-to-br from-spring-foam to-spring-pale flex items-center justify-center">
                  <span className="text-4xl text-spring-deep/40" aria-hidden="true">&#10022;</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display text-xl text-stone mb-1">{a.title}</h3>
                <p className="font-body text-sm text-stone/70">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
