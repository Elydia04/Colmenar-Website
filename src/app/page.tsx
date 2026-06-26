import Hero from '@/components/sections/Hero'
import SpringFeature from '@/components/sections/SpringFeature'
import About from '@/components/sections/About'
import Amenities from '@/components/sections/Amenities'
import GalleryStrip from '@/components/sections/GalleryStrip'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import NearbyAttractions from '@/components/sections/NearbyAttractions'
import Pricing from '@/components/sections/Pricing'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <SpringFeature />
      <About />
      <Amenities />
      <GalleryStrip />
      <Testimonials />
      <FAQ />
      <NearbyAttractions />
      <Pricing />
      <Contact />
    </>
  )
}
