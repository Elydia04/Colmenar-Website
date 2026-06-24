'use client'

import Button from '@/components/ui/Button'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-stone flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-sun/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl text-sun">&#9888;</span>
        </div>
        <h1 className="font-display text-4xl text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="font-body text-white/60 mb-8">
          We hit a snag. Please try again or head back to the homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" onClick={reset}>
            Try Again
          </Button>
          <Button variant="ghost" href="/">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}
