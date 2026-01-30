import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/utils/gsap'

function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return ((...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return
    }

    const lenis = new Lenis({
      lerp: 0.08, // Increased from 0.05 for better performance
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      syncTouch: false, /* Native touch scroll on mobile to prevent stutter with 3D scenes */
    })

    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    // Always start at the top when the app loads
    lenis.scrollTo(0, { immediate: true })

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    // Debounce resize handler for better performance
    const handleResize = debounce(() => {
      ScrollTrigger.refresh()
    }, 150)

    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.off('scroll', ScrollTrigger.update)
      lenis.destroy()
      window.removeEventListener('resize', handleResize)
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
