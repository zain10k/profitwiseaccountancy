import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'

const RADIUS = 50
const STRENGTH = 0.2

export function useMagneticHover(
  wrapRef: RefObject<HTMLDivElement | null>,
  innerRef: RefObject<HTMLAnchorElement | HTMLButtonElement | null>
) {
  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return

    const setX = gsap.quickTo(inner, 'x', { duration: 0.35, ease: 'power2.out' })
    const setY = gsap.quickTo(inner, 'y', { duration: 0.35, ease: 'power2.out' })

    const handleMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < RADIUS) {
        const f = 1 - dist / RADIUS
        setX(dx * f * STRENGTH)
        setY(dy * f * STRENGTH)
      } else {
        setX(0)
        setY(0)
      }
    }

    const handleLeave = () => {
      setX(0)
      setY(0)
    }

    wrap.addEventListener('mousemove', handleMove)
    wrap.addEventListener('mouseleave', handleLeave)
    return () => {
      wrap.removeEventListener('mousemove', handleMove)
      wrap.removeEventListener('mouseleave', handleLeave)
    }
  }, [wrapRef, innerRef])
}
