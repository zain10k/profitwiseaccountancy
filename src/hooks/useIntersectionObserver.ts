import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<HTMLElement>, boolean] {
  const elementRef = useRef<HTMLElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        rootMargin: '100px', // Start loading 100px before entering viewport
        threshold: 0.01,
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return [elementRef as React.RefObject<HTMLElement>, isIntersecting]
}
