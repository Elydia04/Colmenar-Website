'use client'

import { useEffect, useRef } from 'react'

interface RevealImageProps {
  children: React.ReactNode
  className?: string
  threshold?: number
}

export default function RevealImage({ children, className = '', threshold = 0.15 }: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('revealed')
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={`reveal-image ${className}`}>
      {children}
    </div>
  )
}
