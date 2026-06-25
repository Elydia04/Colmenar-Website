export default function RippleRing({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative w-[68px] h-[68px] flex items-center justify-center">
      <div className="ripple-ring w-full h-full" />
      <div className="ripple-ring w-full h-full" />
      <div className="ripple-ring w-full h-full" />
      <span className="relative z-10 text-spring-pale w-7 h-7">
        {children}
      </span>
    </div>
  )
}
