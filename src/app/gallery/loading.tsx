export default function GalleryLoading() {
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
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-xl overflow-hidden aspect-[4/3] bg-white/5 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
