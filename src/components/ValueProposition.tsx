import { useRef, useLayoutEffect, Suspense } from 'react'
import { BarChart3, ShieldCheck, TrendingUp, Zap } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Spline from '@splinetool/react-spline'
import { Container } from '@/components/ui/Container'

gsap.registerPlugin(ScrollTrigger)

const valuePillars = [
  {
    title: 'Data-Driven Insights',
    description: 'Turn numbers into narrative. We analyze your financial data to uncover opportunities for optimization and efficiency.',
    icon: BarChart3,
  },
  {
    title: 'Proactive Compliance',
    description: 'Stay ahead of regulations. Our team ensures you meet every deadline and requirement before it becomes an issue.',
    icon: ShieldCheck,
  },
  {
    title: 'Strategic Growth',
    description: 'Scale with confidence. We provide the financial roadmap and forecasting you need to expand your market reach.',
    icon: TrendingUp,
  },
]

export function ValueProposition() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const charsRef = useRef<HTMLSpanElement[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  const text = "Values That Drive Your Success"
  const words = text.split(' ')

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Character Animation
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
          stagger: 0.02,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // List Items Animation
      gsap.fromTo(
        ".value-item",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Suspense fallback={<div className="w-full h-full bg-slate-900" />}>
           {/* Using a finance-abstract sphere scene */}
           <Spline scene="https://prod.spline.design/KQjjjnNtcywOg-kH/scene.splinecode" />
        </Suspense>
      </div>
      
      {/* Gradient Overlay for content readability - Lighter to show more 3D detail */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30 z-0 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Animated Heading */}
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase mb-6">
                <Zap className="w-4 h-4" />
                <span>Our Philosophy</span>
             </div>
             
             <h2 
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                style={{ perspective: '1000px' }}
             >
                {words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block mr-3 sm:mr-4">
                    {word.split('').map((char, charIndex) => {
                      const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex
                      return (
                        <span
                          key={charIndex}
                          ref={(el) => {
                            if (el) charsRef.current[globalIndex] = el
                          }}
                          className={`inline-block ${
                            word === 'Success' ? 'text-primary' : 'text-white'
                          }`}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {char}
                        </span>
                      )
                    })}
                    {wordIndex < words.length - 1 && (
                      <span className="inline-block w-[0.25em]">&nbsp;</span>
                    )}
                  </span>
                ))}
             </h2>
             
             <p className="mt-6 text-lg text-slate-400 max-w-lg leading-relaxed">
                We believe in more than just balancing books. We believe in building a foundation for sustainable wealth and long-term stability.
             </p>
          </div>

          {/* Right Column: Value Pillars List */}
          <div ref={listRef} className="space-y-8">
            {valuePillars.map((pillar, index) => (
              <div key={index} className="value-item group flex gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
