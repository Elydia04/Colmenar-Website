'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'

const testimonials = [
  {
    initials: 'MT',
    name: 'Maria T.',
    location: 'Manila',
    quote:
      'We drove 2 hours just for this pool. The water felt completely different — so clean and cool. Kids didn\'t want to leave.',
    rating: 5,
  },
  {
    initials: 'RC',
    name: 'Ramon C.',
    location: 'Cavite',
    quote:
      'The spring water is the real deal. You can feel it\'s natural the moment you jump in.',
    rating: 5,
  },
  {
    initials: 'JF',
    name: 'Jen & Family',
    location: 'Laguna',
    quote:
      'Beautiful resort, stunning views, and that pool... we\'re already planning our return.',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-sun text-sm">
          &#9733;
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section className="bg-cream py-20 md:py-28">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf text-center mb-4">
          What Guests Say
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone text-center mb-12">
          Real Stories from Real Families
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-spring-mid"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-spring-mid flex items-center justify-center text-white font-body font-medium text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body font-medium text-stone text-sm">{t.name}</p>
                  <p className="font-body text-xs text-stone/50">{t.location}</p>
                </div>
              </div>
              <Stars count={t.rating} />
              <p className="font-display italic text-stone text-base leading-relaxed mt-4">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
