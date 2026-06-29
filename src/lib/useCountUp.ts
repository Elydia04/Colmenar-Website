'use client'

import { useEffect, useRef } from 'react'

export function useCountUp(end: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationId: number

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        let startTime: number | null = null

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const elapsed = timestamp - startTime
          const progress = Math.min(elapsed / duration, 1)
          el.textContent = String(Math.floor(progress * end))

          if (progress < 1) {
            animationId = requestAnimationFrame(animate)
          } else {
            el.classList.add('count-complete')
            setTimeout(() => el.classList.remove('count-complete'), 800)
          }
        }

        animationId = requestAnimationFrame(animate)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationId)
    }
  }, [end, duration])

  return { ref }
}
