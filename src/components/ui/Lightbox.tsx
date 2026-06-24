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
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
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
