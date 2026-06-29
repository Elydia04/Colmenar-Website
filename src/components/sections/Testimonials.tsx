'use client'

import { useState } from 'react'
import AccentTick from '@/components/ui/AccentTick'

type Testimonial = {
  initials: string
  name: string
  location: string
  quote: string
  quoteEn?: string
  rating: number
  source: string
}

const testimonials: Testimonial[] = [
  {
    initials: 'JG',
    name: 'Jonaden G.',
    location: 'Indang, Cavite',
    quote:
      'Ang ganda po talaga ng resort nyo. Pumunta kami noong April 5, ang sarap mag-swimming, daming pool. Sana maka-punta ulit kami jan. More powers po sa inyo!',
    quoteEn:
      'Your resort is really beautiful. We went there last April 5, swimming was so enjoyable, so many pools. Hope we can go there again. More power to you!',
    rating: 5,
    source: 'Blog Guest',
  },
  {
    initials: 'MT',
    name: 'Maria T.',
    location: 'Manila',
    quote:
      'We drove 2 hours just for this pool. The water felt completely different — so clean and cool. Kids didn\'t want to leave.',
    rating: 5,
    source: 'Guest',
  },
  {
    initials: 'RC',
    name: 'Ramon C.',
    location: 'Cavite',
    quote:
      'The spring water is the real deal. You can feel it\'s natural the moment you jump in.',
    rating: 5,
    source: 'Guest',
  },
  {
    initials: 'JF',
    name: 'Jen & Family',
    location: 'Laguna',
    quote:
      'Beautiful resort, stunning views, and that pool... we\'re already planning our return.',
    rating: 5,
    source: 'Guest',
  },
  {
    initials: 'AB',
    name: 'Alex B.',
    location: 'Tagaytay',
    quote:
      'Been coming here for years. The water quality is unmatched — no chlorine smell, no itchy skin. Pure natural spring at its finest.',
    rating: 5,
    source: 'Guest',
  },
  {
    initials: 'CS',
    name: 'Cathy & Sam',
    location: 'Manila',
    quote:
      'We booked a cottage for my birthday and it was perfect. The kids loved the diving board and the adults loved the cool spring water. Will definitely be back!',
    rating: 5,
    source: 'Guest',
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
  const [translate, setTranslate] = useState(false)

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf text-center mb-4">
          What Guests Say
        </p>
        <AccentTick className="mx-auto" />
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone text-center mb-10">
          Real Stories from Real Families
        </h2>

        <div className="flex justify-center mb-10">
          <button
            onClick={() => setTranslate((p) => !p)}
            className="font-mono text-xs uppercase tracking-widest bg-white border border-spring-pale rounded-full px-5 py-2 text-stone/60 hover:text-stone hover:border-spring-mid transition-all cursor-pointer"
          >
            {translate ? 'Show Original' : 'Translate to English'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-spring-mid opacity-0 animate-[fadeUp_0.6s_ease_forwards]"
              style={{ animationDelay: `${i * 120}ms` }}
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
              <p className="font-display italic text-black text-base leading-relaxed mt-4">
                &ldquo;{translate && t.quoteEn ? t.quoteEn : t.quote}&rdquo;
              </p>
              {t.source === 'Blog Guest' && (
                <p className="font-mono text-[10px] uppercase tracking-wider text-spring-mid mt-3">
                  &#10022; From a blog visitor
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
