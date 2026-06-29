'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What are your operating hours?',
    a: 'We are open Monday to Friday from 8:00 AM to 5:00 PM, and weekends from 7:00 AM to 7:00 PM. Overnight stays are available by reservation.',
  },
  {
    q: 'What makes the water so pure?',
    a: 'Our pool is fed by a natural underground spring, so the water stays fresh, cool, and naturally pure — straight from the earth with no additives needed.',
  },
  {
    q: 'Do you allow outside food?',
    a: 'We have poolside dining available, but you are also welcome to bring your own food. A dirty kitchen is available for guest use.',
  },
  {
    q: 'Is there parking available?',
    a: 'Yes, we offer free and secure parking for all our guests.',
  },
  {
    q: 'Can I host an event at the resort?',
    a: 'Absolutely. We have function rooms and cottages available for private events, birthdays, and corporate outings.',
  },
  {
    q: 'How do I get there?',
    a: 'We are located at Purok 4 Alfonso - Indang Road, Tambo Kulit, Indang, Cavite. From Manila, take the South Luzon Tollway to Carmona, then head towards Silang and Indang. About a 1.5 to 2-hour drive.',
  },
]

function FaqItem({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-spring-pale/50 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-display text-lg text-stone pr-4">{q}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-spring-mid text-spring-mid transition-all duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60 pb-5' : 'max-h-0'
        }`}
      >
        <p className="font-body text-sm text-stone/70 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-cream py-10 md:py-12">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf text-center mb-4">
          Frequently Asked
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone text-center mb-10">
          Got Questions?
        </h2>
        <div className="bg-white rounded-2xl px-6 md:px-10 shadow-sm border border-spring-pale/50">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              q={faq.q}
              a={faq.a}
              open={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
