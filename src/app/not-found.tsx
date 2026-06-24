import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-mono text-sun text-7xl font-bold mb-4">404</p>
        <h1 className="font-display text-4xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-white/60 mb-8">
          Looks like this page drifted away. Let&apos;s get you back on course.
        </p>
        <Button variant="primary" href="/">
          Back to Home
        </Button>
      </div>
    </div>
  )
}
