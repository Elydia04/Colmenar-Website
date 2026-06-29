'use client'

import Image from 'next/image'
import { useScrollReveal } from '@/lib/useScrollReveal'
import AccentTick from '@/components/ui/AccentTick'

const attractions = [
  {
    name: 'Tagaytay Ridge',
    desc: 'Scenic mountain ridge with restaurants, cafes, and Taal Volcano views — 30 min drive',
    img: '/images/tagaytay-ridge.jpg',
  },
  {
    name: 'Sky Ranch Tagaytay',
    desc: 'Family amusement park with rides, games, and dining — 31 min drive',
    img: '/images/sky-ranch.jpg',
  },
  {
    name: "People's Park in the Sky",
    desc: 'Mountaintop park with a former mansion and panoramic overlook — 52 min drive',
    img: '/images/peoples-park.jpg',
  },
  {
    name: 'Caleruega Philippines',
    desc: 'Spiritual retreat center with a brick church and scenic gardens — 41 min drive',
    img: '/images/caleruega-church.jpg',
  },
  {
    name: 'Paradizoo Theme Park',
    desc: 'Animal farm and garden theme park, great for kids — 19 min drive',
    img: '/images/paradizoo.jpg',
  },
  {
    name: "Yoki's Farm",
    desc: 'Farm resort with recreational activities and fresh produce — 14 min drive',
    img: '/images/yokis-farm.jpg',
  },
]

export default function NearbyAttractions() {
  const ref = useScrollReveal()
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf text-center mb-4">
          Explore Around
        </p>
        <AccentTick className="mx-auto" />
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone text-center mb-12">
          Nearby Attractions
        </h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {attractions.map((a) => (
            <div
              key={a.name}
              className="border border-spring-pale rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-spring-mid transition-all duration-300"
            >
              <div className="h-40 relative -mx-6 -mt-6 mb-4 overflow-hidden">
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-stone mb-2">{a.name}</h3>
              <p className="font-body text-sm text-stone/70 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
