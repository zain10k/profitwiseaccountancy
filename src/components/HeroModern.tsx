import { useRef, useLayoutEffect, Suspense, useMemo } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap } from '@/utils/gsap'
import Spline from '@splinetool/react-spline'
import { useMagneticHover } from '@/hooks/useMagneticHover'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export function HeroModern() {
  const [heroRef, isHeroVisible] = useIntersectionObserver({ threshold: 0.1 })
  const charsRef = useRef<HTMLSpanElement[]>([])
  const partnerWrapRef = useRef<HTMLDivElement>(null)
  const partnerLinkRef = useRef<HTMLAnchorElement>(null)
  useMagneticHover(partnerWrapRef, partnerLinkRef)

  const text = useMemo(() => "Financial Clarity For Your Future", [])
  const words = useMemo(() => text.split(' '), [text])

  useLayoutEffect(() => {
    // Animate characters in with stagger - optimized
    gsap.fromTo(
      charsRef.current,
      { 
        opacity: 0, 
        y: 40,
        rotationX: -60
      },
      { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.2
      }
    )

    // Cleanup
    return () => {
      gsap.killTweensOf(charsRef.current)
    }
  }, [])

  return (
    <div ref={heroRef as React.RefObject<HTMLDivElement>} className="relative h-screen w-full overflow-hidden bg-transparent text-foreground">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        {!isHeroVisible ? null : (
          <Suspense
            fallback={
              <div className="absolute inset-0 bg-transparent flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                  <div className="text-slate-600 text-sm tracking-widest uppercase animate-pulse">
                    Loading Experience
                  </div>
                </div>
              </div>
            }
          >
            <Spline scene="https://prod.spline.design/inTyBAsCyiY4aWGe/scene.splinecode?v=3" />
          </Suspense>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start sm:px-12 lg:px-24">
        
        {/* Badge */}
        <div className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards]">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 backdrop-blur-md border border-primary/30 text-sm font-medium tracking-wide text-primary">
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
                        : 'text-slate-900'
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
          className="text-lg sm:text-2xl text-slate-700 max-w-2xl leading-relaxed mb-10 font-light opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]"
        >
          Elevating financial clarity for modern businesses. 
          Expert audit, tax, and advisory services tailored for growth.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]"
        >
          <div ref={partnerWrapRef} className="inline-flex">
            <Link 
              ref={partnerLinkRef}
              to="/contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:bg-slate-100 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.2)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-1/2 -left-1/2 animate-shine"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Partner with us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
          
          <Link 
            to="/services" 
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 border border-slate-300 rounded-full backdrop-blur-sm transition-all hover:bg-primary/10 hover:border-primary/60"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-slate-600/70 opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

    </div>
  )
}
