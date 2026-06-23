import Button from '@/components/ui/Button'

export default function BookPage() {
  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-160 mx-auto px-4 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-leaf text-center mb-4">
          Reserve Your Visit
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-stone text-center mb-8">
          Book Your Dip
        </h1>

        <form className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                Contact Number
              </label>
              <input
                type="tel"
                required
                className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid"
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                Preferred Date
              </label>
              <input
                type="date"
                required
                className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
                Package
              </label>
              <select
                className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid"
              >
                <option>Day Pass</option>
                <option>Group Package</option>
                <option>Event Booking</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
              Number of Guests
            </label>
            <input
              type="number"
              min={1}
              required
              className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid"
            />
          </div>

          <div>
            <label className="font-mono text-xs uppercase tracking-widest text-leaf block mb-1.5">
              Message / Special Requests
            </label>
            <textarea
              rows={4}
              className="w-full border border-spring-pale rounded-lg px-4 py-2.5 font-body text-sm text-stone focus:outline-none focus:ring-2 focus:ring-spring-mid resize-none"
            />
          </div>

          <Button variant="primary" className="w-full">
            Submit Inquiry
          </Button>
        </form>
      </div>
    </div>
  )
}
