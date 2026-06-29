'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'
import Link from 'next/link'

const photos = [
  { src: '/images/hero-pool.jpg', caption: 'The natural spring pool' },
  { src: '/images/cottages.jpg', caption: 'Cozy cottage accommodations' },
  { src: '/images/night-pool.jpg', caption: 'Evening at the pool' },
  { src: '/images/spring-source.jpg', caption: 'Tropical resort overview' },
  { src: '/images/night-aerial.jpg', caption: 'Aerial night view' },
]

export default function GalleryStrip() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const pauseAnimation = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'paused'
  }

  const resumeAnimation = () => {
    if (trackRef.current) trackRef.current.style.animationPlayState = 'running'
  }

  return (
    <section className="bg-stone py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-spring-mid mb-4">
          In &amp; Around the Resort
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white">
          See It Before You Feel It
        </h2>
      </div>

      <div className="relative w-full marquee-wrapper">
        <div
          ref={trackRef}
          className="flex gap-4 marquee-track"
          onTouchStart={pauseAnimation}
          onTouchEnd={resumeAnimation}
          onMouseDown={pauseAnimation}
          onMouseUp={resumeAnimation}
          onMouseLeave={resumeAnimation}
        >
          {[...photos, ...photos].map((photo, i) => (
            <button
              key={i}
              onClick={() => setLightbox(photo)}
              aria-haspopup="dialog"
              aria-label={photo.caption}
              className="relative group flex-shrink-0 w-[380px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer text-left"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-all duration-400 group-hover:-translate-y-0.5 group-hover:shadow-xl"
                sizes="380px"
              />
              <p className="absolute bottom-0 left-0 right-0 p-3 text-white font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-t from-black/60 to-transparent pt-6">
                {photo.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-8 text-right">
        <Link
          href="/gallery"
          className="font-body text-sun hover:brightness-110 transition-all"
        >
          View Full Gallery <span className="link-arrow">&rarr;</span>
        </Link>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
