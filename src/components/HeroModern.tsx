import { useRef, useLayoutEffect, Suspense } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Spline from '@splinetool/react-spline'

export function HeroModern() {
  const charsRef = useRef<HTMLSpanElement[]>([])

  // Split text into characters and store refs
  const text = "Financial Clarity For Your Future"
  const words = text.split(' ')

  useLayoutEffect(() => {
    // Animate characters in with stagger
    gsap.fromTo(
      charsRef.current,
      { 
        opacity: 0, 
        y: 50,
        rotationX: -90
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3
      }
    )

    // Cleanup
    return () => {
      gsap.killTweensOf(charsRef.current)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <div className="text-slate-400 text-sm tracking-widest uppercase animate-pulse">Loading Experience</div>
            </div>
          </div>
        }>
          <Spline scene="https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode" />
        </Suspense>
      </div>
      
      {/* Overlay Gradient for readability - Reduced opacity to show more 3D detail */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-900/60 pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start sm:px-12 lg:px-24">
        
        {/* Badge */}
        <div className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards]">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-sm font-medium tracking-wide text-white">
            Premium Financial Services
          </span>
        </div>

        {/* Animated H1 Heading */}
        <h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          style={{ perspective: '1000px' }}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-4 sm:mr-6">
              {word.split('').map((char, charIndex) => {
                const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex
                return (
                  <span
                    key={charIndex}
                    ref={(el) => {
                      if (el) charsRef.current[globalIndex] = el
                    }}
                    className={`inline-block ${
                      word === 'Financial' || word === 'Clarity'
                        ? 'text-primary'
                        : 'text-white'
                    }`}
                    style={{ 
                      display: 'inline-block',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {char}
                  </span>
                )
              })}
              {wordIndex < words.length - 1 && (
                <span 
                  ref={(el) => {
                    if (el) {
                      const globalIndex = words.slice(0, wordIndex + 1).join('').length + wordIndex
                      charsRef.current[globalIndex] = el
                    }
                  }}
                  className="inline-block"
                  style={{ 
                    width: '0.25em',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {' '}
                </span>
              )}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p 
          className="text-lg sm:text-2xl text-slate-200 max-w-2xl leading-relaxed mb-10 font-light opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]"
        >
          Elevating financial clarity for modern businesses. 
          Expert audit, tax, and advisory services tailored for growth.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]"
        >
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:bg-slate-100 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Partner with us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <Link 
            to="/services" 
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/40 rounded-full backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/60"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* Drifting Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none overflow-hidden opacity-[0.03] flex select-none">
         <div className="whitespace-nowrap text-[20vw] font-bold leading-none text-white animate-marquee-ltr shrink-0">
            AUDIT • TAX • ADVISORY • GROWTH • COMPLIANCE •&nbsp;
         </div>
         <div className="whitespace-nowrap text-[20vw] font-bold leading-none text-white animate-marquee-ltr shrink-0">
            AUDIT • TAX • ADVISORY • GROWTH • COMPLIANCE •&nbsp;
         </div>
      </div>
    </div>
  )
}
