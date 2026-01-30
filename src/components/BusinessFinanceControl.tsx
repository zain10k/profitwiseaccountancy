import { useRef, useState, useEffect, useCallback, Suspense, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from '@/utils/gsap'
import Spline from '@splinetool/react-spline'
import { Database, FileCheck, Zap, Target } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/utils/cn'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const TABS = ['Analyze', 'Plan', 'Grow'] as const
type TabId = (typeof TABS)[number]

const DATA_HEALTH_METRICS = [
  { label: 'Data Accuracy', value: 99, suffix: '%', icon: Database },
  { label: 'Reports Generated', value: 1247, suffix: '', icon: FileCheck },
  { label: 'Integrations Live', value: 12, suffix: '', icon: Zap },
  { label: 'Uptime', value: 99.9, suffix: '%', icon: Target },
]

const TAX_MILESTONES = [
  { month: 'Apr 6', label: 'Tax Year Start', detail: 'New tax year begins' },
  { month: 'Jul 31', label: 'Q1 VAT Return', detail: 'VAT filing deadline' },
  { month: 'Oct 31', label: 'Q2 VAT Return', detail: 'VAT filing deadline' },
  { month: 'Jan 31', label: 'Self Assessment', detail: 'Online filing deadline' },
  { month: 'Mar 31', label: 'Corporation Tax', detail: 'Accounting period end' },
]

const GROWTH_DATA = [
  { label: 'Q1', value: 72, color: 'bg-primary' },
  { label: 'Q2', value: 85, color: 'bg-primary' },
  { label: 'Q3', value: 78, color: 'bg-primary' },
  { label: 'Q4', value: 95, color: 'bg-primary' },
]

export function BusinessFinanceControl() {
  const [activeTab, setActiveTab] = useState<TabId>('Analyze')
  const activeIndex = TABS.indexOf(activeTab)
  const charsRef = useRef<HTMLSpanElement[]>([])
  const statRefs = useRef<(HTMLSpanElement | null)[]>([])
  const [sectionRef, shouldLoadSpline] = useIntersectionObserver({ rootMargin: '200px' })

  const titles: Record<TabId, string> = useMemo(() => ({
    Analyze: 'Data Health',
    Plan: 'Tax Year Timeline',
    Grow: 'Growth Projection',
  }), [])
  const title = useMemo(() => titles[activeTab], [titles, activeTab])
  const words = useMemo(() => title.split(' '), [title])

  const runCharReveal = useCallback((titleText: string) => {
    gsap.killTweensOf(charsRef.current)
    const n = titleText.replace(/\s/g, '').length
    const chars = charsRef.current.filter(Boolean).slice(0, n)
    if (!chars.length) return
    // Reduced stagger and duration for better performance
    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
      }
    )
  }, [])

  const runCounters = useCallback(() => {
    DATA_HEALTH_METRICS.forEach((m, i) => {
      const el = statRefs.current[i]
      if (!el) return
      const obj = { val: 0 }
      // Reduced duration for snappier feel
      gsap.to(obj, {
        val: m.value,
        duration: 1,
        ease: 'power2.out',
        snap: { val: 0.1 },
        onUpdate: () => {
          const v = m.value
          const s = typeof v === 'number' && v % 1 !== 0 ? obj.val.toFixed(1) : Math.round(obj.val)
          el.textContent = `${s}${m.suffix}`
        },
      })
    })
  }, [])

  useEffect(() => {
    runCharReveal(title)
  }, [activeTab, runCharReveal, title])

  useEffect(() => {
    if (activeTab !== 'Analyze') return
    const t = setTimeout(runCounters, 400)
    return () => clearTimeout(t)
  }, [activeTab, runCounters])

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Spline background – rotation syncs to active tab, lazy loaded */}
      {shouldLoadSpline && (
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-transform duration-700 ease-out"
          style={{
            transform: `perspective(1200px) rotateY(${activeIndex * 18}deg) scale(1.15)`,
            transformOrigin: '60% 50%',
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 opacity-40">
            <Suspense
              fallback={
                <div className="w-full h-full bg-slate-950 flex items-center justify-center" />
              }
            >
              <Spline scene="https://prod.spline.design/KQjjjnNtcywOg-kH/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      )}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.6) 45%, rgba(2,6,23,0.3) 70%, transparent 100%)',
        }}
      />

      <Container className="relative z-10">
        {/* Segmented control – glass tabs */}
        <div
          className={cn(
            'inline-flex p-1.5 rounded-2xl',
            'bg-white/5 backdrop-blur-md border border-white/10',
            'shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
            'mb-12 md:mb-16'
          )}
          style={{ willChange: 'transform' }}
        >
          {TABS.map((tab, i) => (
            <motion.button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative px-6 py-3 rounded-xl text-sm font-semibold transition-colors min-w-[100px] md:min-w-[120px]"
            >
              {activeIndex === i && (
                <motion.div
                  layoutId="glass-pill"
                  className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span
                className={cn(
                  'relative z-10',
                  activeIndex === i ? 'text-primary' : 'text-slate-400 hover:text-slate-200'
                )}
              >
                {tab}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'Analyze' && (
            <motion.div
              key="Analyze"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="space-y-10"
            >
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex flex-wrap gap-x-2 gap-y-0"
                style={{ letterSpacing: '-0.05em' }}
              >
                {words.map((w, wi) => (
                  <span key={wi} className="inline-flex">
                    {w.split('').map((c, ci) => {
                      const idx = words.slice(0, wi).join('').length + ci
                      return (
                        <span
                          key={ci}
                          ref={(el) => {
                            if (el) charsRef.current[idx] = el
                          }}
                          className="inline-block"
                        >
                          {c}
                        </span>
                      )
                    })}
                    {wi < words.length - 1 ? '\u00A0' : null}
                  </span>
                ))}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {DATA_HEALTH_METRICS.map((m, i) => {
                  const Icon = m.icon
                  return (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                      className={cn(
                        'rounded-2xl p-5 md:p-6',
                        'bg-slate-900/40 backdrop-blur-md border border-white/10',
                        'shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
                      )}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <Icon className="h-4 w-4 md:h-5 md:w-5" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">
                          {m.label}
                        </span>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold tabular-nums text-primary">
                        <span ref={(el) => { statRefs.current[i] = el }}>
                          0{m.suffix}
                        </span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'Plan' && (
            <motion.div
              key="Plan"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="space-y-10"
            >
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex flex-wrap gap-x-2"
                style={{ letterSpacing: '-0.05em' }}
              >
                {words.map((w, wi) => (
                  <span key={wi} className="inline-flex">
                    {w.split('').map((c, ci) => {
                      const idx = words.slice(0, wi).join('').length + ci
                      return (
                        <span
                          key={ci}
                          ref={(el) => {
                            if (el) charsRef.current[idx] = el
                          }}
                          className="inline-block"
                        >
                          {c}
                        </span>
                      )
                    })}
                    {wi < words.length - 1 ? '\u00A0' : null}
                  </span>
                ))}
              </h2>
              <div className="relative pl-6 md:pl-8 border-l-2 border-white/10">
                {TAX_MILESTONES.map((milestone, i) => (
                  <motion.div
                    key={milestone.month}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    className="relative pb-10 last:pb-0"
                  >
                    <div
                      className="absolute -left-[29px] md:-left-[33px] top-0.5 w-3 h-3 rounded-full bg-primary border-2 border-slate-950"
                      aria-hidden
                    />
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-sm font-bold text-primary tabular-nums">
                        {milestone.month}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {milestone.label}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">{milestone.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'Grow' && (
            <motion.div
              key="Grow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="space-y-10"
            >
              <h2
                className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex flex-wrap gap-x-2"
                style={{ letterSpacing: '-0.05em' }}
              >
                {words.map((w, wi) => (
                  <span key={wi} className="inline-flex">
                    {w.split('').map((c, ci) => {
                      const idx = words.slice(0, wi).join('').length + ci
                      return (
                        <span
                          key={ci}
                          ref={(el) => {
                            if (el) charsRef.current[idx] = el
                          }}
                          className="inline-block"
                        >
                          {c}
                        </span>
                      )
                    })}
                    {wi < words.length - 1 ? '\u00A0' : null}
                  </span>
                ))}
              </h2>
              <div className="flex items-end gap-3 md:gap-6 h-48 md:h-56">
                {GROWTH_DATA.map((d, i) => (
                  <motion.div
                    key={d.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.5,
                    }}
                    className="flex-1 flex flex-col items-center gap-2 h-full"
                  >
                    <div className="flex-1 w-full flex items-end justify-center min-h-0">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${d.value}%` }}
                        transition={{
                          delay: 0.3 + i * 0.1,
                          duration: 0.9,
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                        className={cn(
                          'w-full rounded-t-lg min-h-[8px]',
                          d.color,
                          'shadow-[0_-4px_20px_rgba(0,0,0,0.15)]'
                        )}
                      />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 tabular-nums">
                      {d.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
