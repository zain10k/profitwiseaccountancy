import { useRef, useLayoutEffect, useMemo } from 'react'
import { gsap } from '@/utils/gsap'

interface AnimatedTextProps {
  children: string
  className?: string
  highlightWords?: string[]
  trigger?: string | Element | null
  start?: string
  stagger?: number
  duration?: number
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  mode?: 'char' | 'word'
}

export function AnimatedText({
  children,
  className = '',
  highlightWords = [],
  trigger,
  start = 'top 80%',
  stagger,
  duration = 0.6,
  delay = 0,
  as: Component = 'span',
  mode = 'char'
}: AnimatedTextProps) {
  const elementsRef = useRef<HTMLElement[]>([])
  const containerRef = useRef<HTMLElement>(null)
  const words = useMemo(() => children.split(' '), [children])

  // Default stagger depends on mode if not provided
  const actualStagger = stagger ?? (mode === 'char' ? 0.03 : 0.05)

  useLayoutEffect(() => {
    // Filter out nulls/undefined in case of rapid re-renders
    const targets = elementsRef.current.filter(Boolean)
    if (targets.length === 0) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { 
          opacity: 0, 
          y: 40,
          rotationX: -60
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          stagger: actualStagger,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger || containerRef.current,
            start,
            toggleActions: "play none none none"
          }
        }
      )
    })

    return () => ctx.revert()
  }, [children, trigger, start, actualStagger, duration, delay, mode])

  return (
    <Component 
      ref={containerRef as any}
      className={className}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightWords.includes(word)
        
        if (mode === 'word') {
          return (
            <span key={wordIndex} className="inline-block mr-2 sm:mr-3">
              <span
                ref={(el) => {
                  if (el) elementsRef.current[wordIndex] = el
                }}
                className={`inline-block ${isHighlighted ? 'text-primary' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {word}
              </span>
            </span>
          )
        }

        // Char mode
        return (
          <span key={wordIndex} className="inline-block mr-2 sm:mr-3">
            {word.split('').map((char, charIndex) => {
              const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex
              return (
                <span
                  key={charIndex}
                  ref={(el) => {
                    if (el) elementsRef.current[globalIndex] = el
                  }}
                  className={`inline-block ${isHighlighted ? 'text-primary' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
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
                    elementsRef.current[globalIndex] = el
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
        )
      })}
    </Component>
  )
}
