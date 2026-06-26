'use client'

import Button from '@/components/ui/Button'
import ShareButtons from '@/components/ShareButtons'

export default function Contact() {
  return (
    <section className="bg-stone py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            title="Villa Colmenar location"
            src="https://www.google.com/maps?q=Villa+Colmenar+Natural+Spring+Resort+Tambo+Kulit+Indang+Cavite&output=embed&t=k"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-white space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-spring-mid">
            Find Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            We&apos;re Easy to Find,
            <br />
            Hard to Leave
          </h2>

          <div className="space-y-4 font-body text-base text-white/70">
            <div className="flex items-start gap-3">
              <span className="text-leaf mt-1" aria-hidden="true">&#9906;</span>
              <span>Purok 4 Alfonso - Indang Road, Tambo Kulit, Indang, 4122 Cavite</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-leaf mt-1" aria-hidden="true">&#9742;</span>
              <span>0906 424 4079</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-leaf mt-1" aria-hidden="true">&#9993;</span>
              <span>hello@villacolmenar.com</span>
            </div>
          </div>

          <div className="font-body text-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-spring-mid mb-2">
              Operating Hours
            </p>
            <div className="space-y-1 text-white/70">
              <p>Mon – Fri: 8:00 AM – 5:00 PM</p>
              <p>Sat – Sun: 7:00 AM – 7:00 PM</p>
              <p>Overnight: by reservation</p>
            </div>
          </div>

          <Button variant="primary" href="https://maps.google.com/?q=Villa+Colmenar+Natural+Spring+Resort,+Tambo+Kulit,+Indang,+Cavite" target="_blank">
            Get Directions
          </Button>

          <ShareButtons />
        </div>
      </div>
    </section>
  )
}
