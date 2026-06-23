'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import Button from '@/components/ui/Button'

export default function Contact() {
  const ref = useScrollReveal()

  return (
    <section className="bg-stone py-20 md:py-28">
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        <div className="rounded-2xl overflow-hidden h-[300px] md:h-[400px] reveal-on-scroll">
          <iframe
            title="Villa Colmenar location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.0!2d120.9!3d14.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEyJzAwLjAiTiAxMjDCsDU0JzAwLjBF!5e0!3m2!1sen!2sph!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-white space-y-6 reveal-on-scroll">
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
              <span className="text-leaf mt-1">&#9906;</span>
              <span>Tambo Kulit, Indang, Cavite</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-leaf mt-1">&#9742;</span>
              <span>(046) 123-4567 / 0917-123-4567</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-leaf mt-1">&#9993;</span>
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

          <Button variant="primary" href="https://maps.google.com" target="_blank">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  )
}
