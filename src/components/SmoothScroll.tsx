import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Reduced from 0.1 for smoother, less aggressive smoothing
      duration: 1.2, // Reduced from 1.5 for snappier response
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduce scroll sensitivity
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Use GSAP's ticker for better performance (more efficient than RAF loop)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)

    // Disable GSAP's lag smoothing for better performance
    gsap.ticker.lagSmoothing(0)

    // Update ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.off('scroll', ScrollTrigger.update)
      lenis.destroy()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{children}</>
}
