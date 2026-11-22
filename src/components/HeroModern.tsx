import { useRef, useMemo } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function HeroModern() {
  const charsRef = useRef<HTMLSpanElement[]>([])
  const partnerWrapRef = useRef<HTMLDivElement>(null)
  const partnerLinkRef = useRef<HTMLAnchorElement>(null)

  // Laptops and larger screens get the rising-bars animation; phones and
  // tablets get the static photo, since the animation isn't tuned for them.
  const showAnimation = useMediaQuery('(min-width: 1024px)')

  const text = useMemo(() => "Financial Clarity For Your Future", [])
  const words = useMemo(() => text.split(' '), [text])

  const heroImage = (
    <img
      src="/title photo.webp"
      alt="Professional accounting workspace"
      className="w-full h-full object-cover"
      loading="eager"
      // React 18 only forwards the lowercase attribute; spread keeps TS happy
      {...{ fetchpriority: 'high' }}
    />
  )

  return (
    <div className="relative h-screen w-full overflow-hidden bg-transparent text-foreground">
      {/* Hero Background Visual */}
      {showAnimation ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* A ~200 KB recording of the bars rising (formerly a 3D Spline
              scene that needed ~2 MB of JS). It plays once and holds on the
              last frame.
              The 16:9 video fills 75% of the hero's height so the bars sit
              below the headline; from 1800px wide there's room beside it, so it
              fills the full height. In the frame the bars
              span ~37–70% of the width, so it's shifted right until the bars
              end ~4% from the screen's right edge, keeping them beside the
              headline. Its left and top edges fade out to hide the seam with
              the page colour (see .hero-video-fade). */}
          <video
            src="/hero-bars.mp4"
            className="hero-video-fade absolute bottom-0 max-w-none h-[75vh] w-[133.33vh] right-[calc(4vw-40vh)] min-[1800px]:h-full min-[1800px]:w-[177.78vh] min-[1800px]:right-[calc(4vw-53.33vh)]"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
      ) : (
        // Phones and tablets: the static photo instead of the animation
        <div className="absolute inset-0 z-10">{heroImage}</div>
      )}

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start sm:px-12 lg:px-24">
        
        {/* Badge */}
        <div className="mb-6">
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
          className="text-lg sm:text-2xl text-slate-900 max-w-2xl leading-relaxed mb-10 font-medium drop-shadow-lg [text-shadow:_0_2px_8px_rgba(255,255,255,0.8)]"
        >
          Elevating financial clarity for modern businesses. 
          Expert audit, tax, and advisory services tailored for growth.
        </p>

        {/* CTA Buttons - centered on mobile, left-aligned from sm up */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 items-center sm:items-start">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-slate-600/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

    </div>
  )
}
