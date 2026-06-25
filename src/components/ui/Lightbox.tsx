'use client'

import { useCallback, useEffect } from 'react'

type LightboxProps = {
  src: string
  caption: string
  onClose: () => void
}

export default function Lightbox({ src, caption, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'Tab') {
        const dialog = document.querySelector('[role="dialog"]')
        if (!dialog) return
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    const prev = document.activeElement as HTMLElement | null

    requestAnimationFrame(() => {
      const closeBtn = document.getElementById('lightbox-close')
      closeBtn?.focus()
    })

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [handleKey])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={caption}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-[90vw] max-h-[85vh] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={caption}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
          />
        </div>
        <p className="mt-3 text-white/80 font-body text-sm text-center">
          {caption}
        </p>
        <button
          id="lightbox-close"
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white text-2xl transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  )
}
