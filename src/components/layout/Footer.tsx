import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#111A16] text-spring-foam">
      <div className="max-w-300 mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display italic text-spring-mid text-xl mb-3">
              Villa Colmenar
            </h3>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Natural spring water pool resort in Indang, Cavite. Cool, clear, and naturally pure.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-spring-mid mb-4">Pages</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="font-body text-sm text-white/60 hover:text-white transition-colors">Home</Link>
              <Link href="/gallery" className="font-body text-sm text-white/60 hover:text-white transition-colors">Gallery</Link>
              <Link href="/book" className="font-body text-sm text-white/60 hover:text-white transition-colors">Book Now</Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-spring-mid mb-4">Amenities</h4>
            <div className="flex flex-col gap-2">
              <span className="font-body text-sm text-white/60">Spring Pool</span>
              <span className="font-body text-sm text-white/60">Poolside Dining</span>
              <span className="font-body text-sm text-white/60">Function Rooms</span>
              <span className="font-body text-sm text-white/60">Parking</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-spring-mid mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://www.facebook.com/VillaColmenarResort" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Villa Colmenar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
