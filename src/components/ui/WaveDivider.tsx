interface WaveDividerProps {
  position?: 'top' | 'bottom'
  color?: string
}

export default function WaveDivider({ position = 'top', color = '#3AB8C8' }: WaveDividerProps) {
  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-[0] ${position === 'top' ? 'top-0' : 'bottom-0'}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-12 md:h-16"
      >
        <path
          d={position === 'top'
            ? 'M0,60 C300,0 600,60 900,0 C1050,-20 1200,10 1200,10 L1200,60 L0,60 Z'
            : 'M0,0 C300,60 600,0 900,60 C1050,80 1200,50 1200,50 L1200,0 L0,0 Z'
          }
          fill={color}
        />
      </svg>
    </div>
  )
}
