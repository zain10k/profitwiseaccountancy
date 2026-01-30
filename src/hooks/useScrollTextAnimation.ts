import { useRef, useLayoutEffect, useMemo } from 'react'
import { gsap, ScrollTrigger } from '@/utils/gsap'

interface UseScrollTextAnimationOptions {
  trigger?: string | Element | null
  start?: string
  stagger?: number
  duration?: number
  delay?: number
  once?: boolean
}

export function useScrollTextAnimation(
  text: string,
  options: UseScrollTextAnimationOptions = {}
) {
  const charsRef = useRef<HTMLSpanElement[]>([])
  const words = useMemo(() => text.split(' '), [text])
  
  const {
    trigger,
    start = 'top 80%',
    stagger = 0.03,
    duration = 0.6,
    delay = 0,
    once = true,
  } = options

  useLayoutEffect(() => {
    if (charsRef.current.length === 0) return

    const ctx = gsap.context(() => {
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
          stagger,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trigger || charsRef.current[0]?.parentElement,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse"
          }
        }
      )
    })

    return () => ctx.revert()
  }, [text, trigger, start, stagger, duration, delay, once])

  const renderAnimatedText = (className?: string, highlightWords?: string[]) => {
    return (
      <span className={className} style={{ perspective: '1000px' }}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2 sm:mr-3">
            {word.split('').map((char, charIndex) => {
              const globalIndex = words.slice(0, wordIndex).join('').length + wordIndex + charIndex
              const isHighlighted = highlightWords?.includes(word)
              return (
                <span
                  key={charIndex}
                  ref={(el) => {
                    if (el) charsRef.current[globalIndex] = el
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
      </span>
    )
  }

  return { renderAnimatedText, charsRef }
}
