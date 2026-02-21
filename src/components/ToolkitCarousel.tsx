import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { allServices, getServiceImage } from '@/pages/Services'
import { Button } from '@/components/ui/Button'
import type { LucideIcon } from 'lucide-react'

const AUTO_PLAY_DURATION_MS = 5000
const TICK_INTERVAL_MS = 100
const PROGRESS_INCREMENT = 100 / (AUTO_PLAY_DURATION_MS / TICK_INTERVAL_MS)

interface ToolkitCategory {
  id: string
  title: string
  headline: string
  description: string
  features: string[]
  image: string
  icon: LucideIcon
}

/** Short labels for carousel tabs; full title used as headline. */
const tabLabelMap: Record<string, string> = {
  tax: 'Tax',
  bookkeeping: 'Bookkeeping',
  'vat-investigation': 'VAT Investigation',
  payroll: 'Payroll',
  management: 'Management Accounts',
  advisory: 'Advisory',
  formation: 'Company Formation',
  'self-assessment': 'Self Assessment',
  'wills-trust-probate': 'Wills & Probate',
}

/** Shorter labels for mobile so tabs fit and stay readable. */
const tabLabelMapMobile: Record<string, string> = {
  tax: 'Tax',
  bookkeeping: 'Bookkeeping',
  'vat-investigation': 'VAT',
  payroll: 'Payroll',
  management: 'Management',
  advisory: 'Advisory',
  formation: 'Formation',
  'self-assessment': 'Self Assess.',
  'wills-trust-probate': 'Wills & Probate',
}

const toolkitData: ToolkitCategory[] = allServices.map((service) => ({
  id: service.id,
  title: tabLabelMap[service.id] ?? service.title,
  headline: service.title,
  description: service.description,
  features: service.details,
  image: getServiceImage(service.id),
  icon: service.icon,
}))

export function ToolkitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const rafRef = useRef<number | null>(null)
  const lastTickRef = useRef<number>(0)
  const containerRef = useRef<HTMLElement>(null)

  const totalTabs = toolkitData.length

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
    lastTickRef.current = performance.now()
  }, [])

  const handleMouseEnter = useCallback(() => setIsPaused(true), [])
  const handleMouseLeave = useCallback(() => setIsPaused(false), [])

  // Intersection Observer to pause when not in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  // RAF-based progress animation
  useEffect(() => {
    if (isPaused || !isInView) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      return
    }

    const tick = (currentTime: number) => {
      if (lastTickRef.current === 0) {
        lastTickRef.current = currentTime
      }

      const elapsed = currentTime - lastTickRef.current
      if (elapsed >= TICK_INTERVAL_MS) {
        setProgress((prev) => {
          const next = prev + PROGRESS_INCREMENT
          if (next >= 100) {
            setActiveIndex((i) => (i + 1) % totalTabs)
            lastTickRef.current = currentTime
            return 0
          }
          lastTickRef.current = currentTime
          return next
        })
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    lastTickRef.current = performance.now()

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [activeIndex, isPaused, isInView, totalTabs])

  const activeCategory = toolkitData[activeIndex]
  const IconComponent = activeCategory.icon

  return (
    <section ref={containerRef} className="w-full min-w-0 min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full min-w-0">
        {/* Top Navigation - Tabs: scrollable on mobile, full labels on sm+ */}
        <div className="border-b border-slate-200 dark:border-slate-700 mb-6 overflow-x-auto overflow-y-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex sm:flex-row sm:flex-wrap gap-2 sm:gap-0 min-w-0">
            {toolkitData.map((category, index) => {
              const Icon = category.icon
              const isActive = index === activeIndex
              const labelMobile = tabLabelMapMobile[category.id] ?? category.title
              const labelDesktop = category.title
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleTabClick(index)}
                  className={`
                    relative flex items-center gap-2 px-4 sm:px-6 py-4 text-left font-medium transition-colors shrink-0
                    min-w-0 sm:min-w-[140px]
                    ${isActive ? 'text-primary bg-white dark:bg-slate-800 shadow-lg' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
                  `}
                  aria-pressed={isActive}
                  aria-label={`Show ${labelDesktop} toolkit`}
                  title={labelDesktop}
                >
                  <Icon
                    className="h-5 w-5 shrink-0"
                    aria-hidden
                  />
                  <span className="truncate sm:inline hidden">{labelDesktop}</span>
                  <span className="truncate sm:hidden">{labelMobile}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: TICK_INTERVAL_MS / 1000, ease: 'linear' }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content Display - Card */}
        <div
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden min-w-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-10 min-w-0">
            <div className="flex flex-col justify-center min-h-[280px] lg:min-h-0 min-w-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="space-y-4 min-w-0"
                >
                  <div className="flex items-center gap-2 text-primary min-w-0">
                    <IconComponent className="h-6 w-6 shrink-0" aria-hidden />
                    <span className="text-sm font-semibold uppercase tracking-wide truncate">
                      {activeCategory.title}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white break-words">
                    {activeCategory.headline}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed break-words min-w-0">
                    {activeCategory.description}
                  </p>
                  <ul className="space-y-2 pt-2 min-w-0">
                    {activeCategory.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-700 dark:text-slate-300 min-w-0"
                      >
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span className="break-words min-w-0">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Button
                      to={`/services/${activeCategory.id}`}
                      variant="primary"
                      size="md"
                      className="inline-flex items-center justify-center p-2.5 group"
                      aria-label={`View ${activeCategory.headline} service page`}
                    >
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative hidden lg:block rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeCategory.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
