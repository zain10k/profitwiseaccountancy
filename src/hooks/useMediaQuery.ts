import { useState, useEffect } from 'react'

/**
 * Returns true when the viewport matches the given media query.
 */
export function useMediaQuery(query: string): boolean {
  // Read the real value on the first render so the wrong layout never flashes
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}
