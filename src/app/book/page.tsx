'use client'

import { useState, use, type FormEvent } from 'react'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import WaveDivider from '@/components/ui/WaveDivider'

const highlights = [
  { icon: '\u2699', label: 'Spring-fed Pool', desc: 'No chemicals, just nature' },
  { icon: '\u2600', label: 'Open Daily', desc: '8 AM \u2013 5 PM (Weekdays), 7 AM \u2013 7 PM (Weekends)' },
  { icon: '\u26FA', label: 'Family-Friendly', desc: 'Cottages, gardens, and plenty of space' },
  { icon: '\u{1F3D8}', label: 'Scenic Views', desc: 'Mediterranean-style architecture' },
]

export default function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>
}) {
  const params = use(searchParams)
  const preselected = params.package || ''
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="min-h-screen bg-stone flex items-center justify-center px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/10">
            <div className="w-16 h-16 bg-leaf/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-leaf">&#10003;</span>
            </div>
            <h2 className="font-display text-3xl font-semibold text-white mb-4">
              Inquiry Sent!
            </h2>
            <p className="font-body text-white/60 mb-8">
              We&rsquo;ll get back to you within 24 hours.
            </p>
            <Button variant="ghost" href="/">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <div
          role="img"
          aria-label="Villa Colmenar pool at night"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/night-pool.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-spring-deep/80 via-spring-deep/60 to-spring-deep/90" />
        <WaveDivider color="#f5f0e7" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="font-mono text-xs uppercase tracking-widest text-spring-mid mb-3">
              Reserve Your Visit
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-white">
              Book Your Dip
            </h1>
            <p className="font-body text-white/70 mt-3 max-w-md mx-auto">
              Ready for a day of pure spring water? Let us know when you&rsquo;re coming.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-stone mb-2">
                Plan Your Visit
              </h2>
              <p className="font-body text-stone/60 text-sm leading-relaxed">
                Fill out the form and we&rsquo;ll confirm your booking within 24 hours.
                Walk-ins are also welcome!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-white rounded-xl p-4 shadow-sm border border-spring-pale/50 flex items-start gap-3"
                >
                  <span className="text-xl text-spring-deep mt-0.5" aria-hidden="true">{h.icon}</span>
                  <div>
                    <p className="font-display text-sm font-semibold text-stone">{h.label}</p>
                    <p className="font-body text-xs text-stone/60">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-spring-deep rounded-xl p-5 text-white space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-spring-mid">
                Got Questions?
              </p>
              <p className="font-body text-sm text-spring-foam/90">
                Call or message us &mdash; we&rsquo;re happy to help you plan the perfect day.
              </p>
              <div className="flex items-center gap-2 text-sm font-body">
                <span aria-hidden="true">&#9742;</span>
                <span>(046) 123-4567 / 0917-123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-body">
                <span aria-hidden="true">&#9993;</span>
                <span>hello@villacolmenar.com</span>
              </div>
              <Badge variant="sun">Open Today</Badge>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-md space-y-5 border border-spring-pale/50">
              <div className="flex items-center gap-2 pb-2 border-b border-spring-pale/50">
                <span className="text-leaf text-lg" aria-hidden="true">&#10022;</span>
                <p className="font-mono text-xs uppercase tracking-widest text-leaf">
                  Your Details
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Juan dela Cruz"
                    className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    required
                    placeholder="e.g. 0917-123-4567"
                    className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-center gap-2 pb-2 border-b border-spring-pale/50 pt-2">
                <span className="text-leaf text-lg" aria-hidden="true">&#10022;</span>
                <p className="font-mono text-xs uppercase tracking-widest text-leaf">
                  Booking Details
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="date" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="package" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                    Package
                  </label>
                  <select
                    id="package"
                    name="package"
                    defaultValue={preselected}
                    className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all"
                  >
                    <option>Day Pass</option>
                    <option>Group Package</option>
                    <option>Event Booking</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                  Number of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  required
                  placeholder="e.g. 4"
                  className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                  Message / Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Allergies, celebrations, specific cottage preference..."
                  className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone placeholder:text-stone/30 focus:outline-none focus:ring-2 focus:ring-spring-mid focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button variant="primary" className="w-full" type="submit">
                Submit Inquiry
              </Button>

              <p className="font-body text-xs text-stone/40 text-center">
                We respect your privacy. Your information will only be used for booking purposes.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
