'use client'

export default function MobileBookBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex items-center justify-between">
      <span className="font-display text-white text-sm">Villa Colmenar</span>
      <a
        href="/book"
        className="bg-sun text-stone font-body font-medium rounded-full px-6 py-2 text-sm hover:brightness-110 transition-all"
      >
        Book Now
      </a>
    </div>
  )
}
