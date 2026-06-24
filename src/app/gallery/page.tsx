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
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden group relative"
            >
              <div
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
              />
              <div className="absolute inset-0 bg-spring-deep/0 group-hover:bg-spring-deep/40 transition-all duration-400" />
              <p className="absolute bottom-0 left-0 right-0 p-4 text-white font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
