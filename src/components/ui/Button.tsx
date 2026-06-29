'use client'

import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost' | 'outline'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const styles: Record<ButtonVariant, string> = {
  primary:
    'bg-sun text-stone font-body font-medium rounded-full px-6 py-3 hover:brightness-110 transition-all duration-300 btn-glow',
  ghost:
    'text-white border-2 border-white/80 font-body font-medium rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300 btn-ghost-underline',
  outline:
    'text-spring-deep border-2 border-spring-deep font-body font-medium rounded-full px-6 py-3 hover:bg-spring-deep hover:text-white transition-all duration-300',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  target,
  rel,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const cls = `${styles[variant]} inline-flex items-center justify-center gap-2 ${className}`

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} type={type} className={cls}>
      {children}
    </button>
  )
}
