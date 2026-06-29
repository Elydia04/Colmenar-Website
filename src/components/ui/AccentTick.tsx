'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'

interface AccentTickProps {
  variant?: 'sun' | 'mid'
  className?: string
}

export default function AccentTick({ variant = 'sun', className = '' }: AccentTickProps) {
  const ref = useScrollReveal(0.1)
  const color = variant === 'mid' ? 'accent-tick--mid' : ''

  return (
    <div
      ref={ref}
      className={`accent-tick ${color} ${className}`}
      aria-hidden="true"
    />
  )
}
