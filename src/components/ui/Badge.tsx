interface BadgeProps {
  children: React.ReactNode
  variant?: 'leaf' | 'sun'
  className?: string
}

export default function Badge({ children, variant = 'leaf', className = '' }: BadgeProps) {
  const bg = variant === 'leaf' ? 'bg-leaf' : 'bg-sun'
  const text = variant === 'leaf' ? 'text-white' : 'text-stone'
  return (
    <span
      className={`${bg} ${text} font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full ${className}`}
    >
      {children}
    </span>
  )
}
