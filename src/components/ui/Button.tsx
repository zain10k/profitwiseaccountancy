import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { motion } from 'framer-motion'
import { useMagneticHover } from '@/hooks/useMagneticHover'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  className?: string
  children: React.ReactNode
}

const shineOverlay = (
  <span
    aria-hidden
    className="pointer-events-none absolute inset-0 h-full w-1/2 -left-1/2 animate-shine"
    style={{
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
    }}
  />
)

export const Button = React.memo(React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', to, children, ...props }, ref) => {
    const wrapRef = useRef<HTMLDivElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    const btnRef = useRef<HTMLButtonElement>(null)
    const isPrimary = variant === 'primary'
    useMagneticHover(wrapRef, to ? linkRef : btnRef)

    const variants = {
      primary: cn(
        'bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20',
        'hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.2)]'
      ),
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    }

    const sizes = {
      sm: 'h-9 px-3 text-xs',
      md: 'h-11 px-6 text-sm',
      lg: 'h-14 px-8 text-base',
    }

    const base = cn(
      'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
      'disabled:pointer-events-none disabled:opacity-50 active:scale-95',
      variants[variant],
      sizes[size],
      className
    )

    const withEffects = cn(base, isPrimary && 'relative overflow-hidden')

    if (to) {
      return (
        <div ref={wrapRef} className="inline-flex">
          <Link
            ref={linkRef}
            to={to}
            className={withEffects}
          >
            {isPrimary && shineOverlay}
            <span className={cn(isPrimary && 'relative z-10')}>{children}</span>
          </Link>
        </div>
      )
    }

    return (
      <div ref={wrapRef} className="inline-flex">
        <motion.button
          ref={(el) => {
            (btnRef as React.MutableRefObject<HTMLButtonElement | null>).current = el
            if (typeof ref === 'function') ref(el)
            else if (ref) ref.current = el
          }}
          className={withEffects}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...(props as any)}
        >
          {isPrimary && shineOverlay}
          <span className={cn(isPrimary && 'relative z-10')}>{children}</span>
        </motion.button>
      </div>
    )
  }
))

Button.displayName = 'Button'
