'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'

const images = [
  { src: '/images/hero-pool.jpg', caption: 'The natural spring pool' },
  { src: '/images/night-pool.jpg', caption: 'Evening at Villa Colmenar' },
  { src: '/images/cottages.jpg', caption: 'Cozy cottage accommodations' },
  { src: '/images/spring-source.jpg', caption: 'Tropical resort overview' },
  { src: '/images/night-aerial.jpg', caption: 'Aerial view at night' },
  { src: '/images/room-a.jpg', caption: 'Room A — accommodates 2-6 guests' },
  { src: '/images/room-b.jpg', caption: 'Room B — accommodates 2-6 guests' },
  { src: '/images/room-c.jpg', caption: 'Room C — accommodates 8-12 guests' },
  { src: '/images/room-d.jpg', caption: 'Room D — accommodates 18-22 guests' },
  { src: '/images/room-e.jpg', caption: 'Room E — accommodates 12-15 guests' },
  { src: '/images/room-small.jpg', caption: 'Cozy room — accommodates 2-4 guests' },
]

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  return (
    <div className="pt-24 pb-20 bg-stone min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-spring-mid text-center mb-4">
          In &amp; Around the Resort
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-white text-center mb-12">
          Villa Colmenar Gallery
        </h1>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img)}
              aria-haspopup="dialog"
              aria-label={img.caption}
              className="break-inside-avoid rounded-xl overflow-hidden group relative block w-full text-left cursor-pointer"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-all duration-400 group-hover:-translate-y-0.5 group-hover:shadow-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
