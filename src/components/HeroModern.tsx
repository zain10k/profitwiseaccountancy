import { useRef, useLayoutEffect, useMemo } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { gsap } from '@/utils/gsap'
import { useMagneticHover } from '@/hooks/useMagneticHover'

export function HeroModern() {
  const charsRef = useRef<HTMLSpanElement[]>([])
  const partnerWrapRef = useRef<HTMLDivElement>(null)
  const partnerLinkRef = useRef<HTMLAnchorElement>(null)
  useMagneticHover(partnerWrapRef, partnerLinkRef)

  const text = useMemo(() => "Financial Clarity For Your Future", [])
  const words = useMemo(() => text.split(' '), [text])

  useLayoutEffect(() => {
    // Simplified word-by-word animation instead of character-by-character
    const wordElements = words.map((_, wordIndex) => {
      const startIdx = words.slice(0, wordIndex).join('').length + wordIndex
      const endIdx = startIdx + words[wordIndex].length
      return charsRef.current.slice(startIdx, endIdx).filter(Boolean)
    }).filter(arr => arr.length > 0)

    gsap.fromTo(
      wordElements,
      { 
        opacity: 0, 
        y: 20
      },
      { 
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2
      }
    )

    // Cleanup
    return () => {
      wordElements.forEach(word => gsap.killTweensOf(word))
    }
  }, [words])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-transparent text-foreground">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/title photo.png" 
          alt="Professional accounting workspace" 
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
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
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] drop-shadow-2xl [text-shadow:_0_4px_12px_rgba(255,255,255,0.9)]"
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
                    className={`inline-block drop-shadow-lg ${
                      word === 'Financial' || word === 'Clarity'
                        ? 'text-primary [text-shadow:_0_2px_8px_rgba(255,255,255,0.9)]'
                        : 'text-slate-900 [text-shadow:_0_2px_8px_rgba(255,255,255,0.9)]'
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
          className="text-lg sm:text-2xl text-slate-900 max-w-2xl leading-relaxed mb-10 font-medium opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] drop-shadow-lg [text-shadow:_0_2px_8px_rgba(255,255,255,0.8)]"
        >
          Elevating financial clarity for modern businesses. 
          Expert audit, tax, and advisory services tailored for growth.
        </p>

        {/* CTA Buttons - centered on mobile, left-aligned from sm up */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 items-center sm:items-start opacity-0 animate-[fadeIn_0.8s_ease-out_0.9s_forwards]">
          <div ref={partnerWrapRef} className="flex justify-center sm:justify-start w-full sm:w-auto">
            <Link
              ref={partnerLinkRef}
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-foreground bg-primary rounded-full overflow-hidden transition-all hover:brightness-110 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-1/2 -left-1/2 animate-shine"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Partner with us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full border-2 border-slate-400 shadow-md transition-all hover:bg-slate-50 hover:border-primary/60 hover:shadow-lg w-full sm:w-auto sm:max-w-none max-w-[min(100%,20rem)]"
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
