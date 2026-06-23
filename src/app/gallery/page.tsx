const images = [
  { src: '/images/hero-pool.jpg', caption: 'The spring pool with colonnaded building' },
  { src: '/images/spring-source.jpg', caption: 'Natural spring source in the jungle' },
  { src: '/images/pool-aerial.jpg', caption: 'Aerial view of the pool' },
  { src: '/images/hero-pool.jpg', caption: 'Guests enjoying the pool' },
  { src: '/images/spring-source.jpg', caption: 'Lush tropical garden grounds' },
  { src: '/images/pool-aerial.jpg', caption: 'Mediterranean-style architecture' },
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
