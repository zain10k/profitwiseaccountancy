import { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/utils/cn'

interface PageHeroProps {
  /** Background image URL - unique per page, no repeat */
  backgroundImage: string
  /** Hero title (e.g. AnimatedText or string) */
  title: ReactNode
  /** Optional subtitle/description */
  subtitle?: ReactNode
  /** Optional bar under title */
  showBar?: boolean
  className?: string
}

export function PageHero({ backgroundImage, title, subtitle, showBar = true, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center py-24 sm:py-32 overflow-hidden',
        className
      )}
    >
      {/* Background image - cover, no repeat, no people */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        aria-hidden
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-slate-900/60" aria-hidden />
      <Container className="relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {title}
          {showBar && <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4" />}
          {subtitle}
        </div>
      </Container>
    </section>
  )
}
