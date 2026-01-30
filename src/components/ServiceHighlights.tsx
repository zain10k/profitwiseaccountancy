import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectCoverflow } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper'
import { 
  Calculator,
  FileText,
  Search,
  Users,
  PieChart,
  TrendingUp,
  Briefcase,
  FileCheck,
  Scale,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimatedText } from '@/components/ui/AnimatedText'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

// --- Data Structure ---
const servicesData = [
  {
    id: 'tax',
    title: 'Tax Planning & Preparation',
    icon: Calculator,
    description: 'We go beyond simple compliance. Our proactive tax planning strategies help you minimize liability while ensuring you meet all HMRC obligations.',
    bullets: ['Corporation Tax Returns', 'Corporation Tax Advisory', 'Tax Consultancy', 'Capital Gains Tax Advice', 'Inheritance Tax Planning'],
    color: 'bg-blue-500'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Cloud Accounting',
    icon: FileText,
    description: 'Say goodbye to shoeboxes of receipts. We implement modern cloud systems (Xero, QuickBooks) to keep your books accurate and up-to-date in real-time.',
    bullets: ['Cloud Software Setup & Training', 'Bank Reconciliation', 'VAT Returns (MTD Compliant)', 'VAT Accounting', 'Receipt Management'],
    color: 'bg-indigo-500'
  },
  {
    id: 'vat-investigation',
    title: 'VAT Investigation',
    icon: Search,
    description: 'Expert support and representation during HMRC VAT investigations. We help you navigate the process, respond to enquiries, and minimize potential penalties.',
    bullets: ['HMRC Investigation Representation', 'VAT Dispute Resolution', 'Penalty Mitigation', 'Documentation Review', 'Appeal Support'],
    color: 'bg-emerald-500'
  },
  {
    id: 'payroll',
    title: 'Payroll & Pension',
    icon: Users,
    description: 'Paying your team shouldn\'t be a headache. We handle the entire payroll process, ensuring accuracy and compliance with pension regulations.',
    bullets: ['Weekly/Monthly Payslips', 'PAYE & NIC Calculations', 'Pension Auto Enrolment', 'P60s & P45s', 'CIS Returns'],
    color: 'bg-rose-500'
  },
  {
    id: 'management',
    title: 'Management Accounts',
    icon: PieChart,
    description: 'Understand your business performance with regular, detailed financial reports that go deeper than the statutory year-end accounts.',
    bullets: ['Monthly/Quarterly Profit & Loss', 'Balance Sheet Analysis', 'Cash Flow Analysis', 'KPI Tracking', 'Board Meeting Support'],
    color: 'bg-violet-500'
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    icon: TrendingUp,
    description: 'Strategic advice to help you start, grow, or sell your business. We act as your sounding board and financial guide.',
    bullets: ['Business Plan Creation', 'Cash Flow Forecasting', 'Budgeting', 'Growth Strategy', 'Exit Planning'],
    color: 'bg-orange-500'
  },
  {
    id: 'formation',
    title: 'Company Formation & Secretarial',
    icon: Briefcase,
    description: 'Professional support for setting up your Limited Company and maintaining statutory records with Companies House.',
    bullets: ['Company Registration', 'Registered Office Address', 'Confirmation Statement Filing', 'Share Transfers', 'Director Appointments'],
    color: 'bg-cyan-500'
  },
  {
    id: 'self-assessment',
    title: 'Self Assessment',
    icon: FileCheck,
    description: 'Expert preparation and submission of your Self Assessment tax returns. We ensure accuracy, maximize your allowances, and meet all HMRC deadlines.',
    bullets: ['Individual Tax Return Preparation', 'Sole Trader Returns', 'Partnership Returns', 'Tax Calculation & Optimization', 'Deadline Management'],
    color: 'bg-purple-500'
  },
  {
    id: 'wills-trust-probate',
    title: 'Wills, Trust & Probate',
    icon: Scale,
    description: 'Comprehensive estate planning and probate services to protect your assets and ensure your wishes are carried out efficiently and tax-efficiently.',
    bullets: ['Will Preparation & Review', 'Trust Formation & Administration', 'Probate Services', 'Inheritance Tax Planning', 'Estate Administration'],
    color: 'bg-teal-500'
  }
]

// --- Sub-Component: The Graphic (Chart) ---
const ServiceGraphic = ({ color }: { color: string }) => {
  return (
    <div className="relative w-full h-full min-h-[200px] flex items-center justify-center bg-slate-800/50 rounded-2xl overflow-hidden p-6 border border-slate-700/50">
      {/* Abstract Chart UI */}
      <div className="w-full flex items-end justify-between gap-2 h-32">
        {[40, 70, 55, 90, 65, 80].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className={`w-full rounded-t-lg opacity-80 ${color}`}
          />
        ))}
      </div>
      
      {/* Floating Card Element */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 right-6 bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-700"
      >
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`} />
          <div className="h-2 w-16 bg-slate-700 rounded-full" />
        </div>
        <div className="mt-2 h-2 w-10 bg-slate-700 rounded-full" />
      </motion.div>
    </div>
  )
}

// --- Main Component ---
export function ServiceHighlights() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [measuredHeight, setMeasuredHeight] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const contentRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.realIndex
    const el = contentRefs.current[newIndex]
    if (el) setMeasuredHeight(el.scrollHeight)
    setActiveIndex(newIndex)
  }

  useLayoutEffect(() => {
    const el = contentRefs.current[0]
    if (el) setMeasuredHeight(el.scrollHeight)
  }, [])

  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev()
  }

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext()
  }

  // Keep active tab centered in the tab strip only (do NOT scroll the document)
  useEffect(() => {
    const container = tabsRef.current
    if (!container) return

    const activeBtn = container.children[activeIndex] as HTMLElement
    if (!activeBtn) return

    // Scroll only the horizontal tab strip so the active tab is centered; never scroll the window
    const scrollLeft =
      activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.offsetWidth / 2
    container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' })
  }, [activeIndex])

  // Update Swiper layout to handle dynamic width changes
  useEffect(() => {
    if (!swiperRef.current) return
    const timer = setTimeout(() => {
      swiperRef.current?.update()
    }, 8000)
    return () => clearTimeout(timer)
  }, [activeIndex])

  return (
    <section className="w-full bg-background py-24 sm:py-32 overflow-hidden relative">
      <Container>
        
        {/* Header - Centered */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <AnimatedText
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            highlightWords={['Services']}
            start="top 85%"
            stagger={0.02}
          >
            Our Services
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-slate-600 mx-auto"
            mode="word"
            start="top 85%"
            delay={0.2}
          >
            Comprehensive accounting and tax solutions designed to help your business thrive.
          </AnimatedText>
        </div>

        {/* 1. Navigation Tabs - Centered */}
        <div className="relative mb-12">
          <div 
            ref={tabsRef}
            className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x no-scrollbar justify-start md:justify-center px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={service.id}
                  onClick={() => handleTabClick(index)}
                  className={`
                    relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 whitespace-nowrap snap-start outline-none focus-visible:ring-2 focus-visible:ring-primary hover:scale-105
                    ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}
                  `}
                >
                  {/* Active Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 1.0 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {service.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </Container>

      {/* 2. Carousel Container - Full Width (Outside Container) */}
      <div className="relative group w-full">
        
        {/* Navigation Arrows - Adjusted for full width */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 z-20 left-8 lg:left-[25%] -translate-x-1/2 pointer-events-none">
          <button 
            onClick={handlePrev}
            className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md shadow-xl border border-white/20 text-slate-900 hover:scale-110 hover:bg-white hover:text-primary transition-all active:scale-95 group"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        </div>
        
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 z-20 right-8 lg:right-[25%] translate-x-1/2 pointer-events-none">
          <button 
            onClick={handleNext}
            className="pointer-events-auto p-4 rounded-full bg-white/10 backdrop-blur-md shadow-xl border border-white/20 text-slate-900 hover:scale-110 hover:bg-white hover:text-primary transition-all active:scale-95 group"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          speed={8000} // Slower transition
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="w-full py-12"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}
          >
            {servicesData.map((service, index) => (
              <SwiperSlide 
                key={service.id} 
                className="w-[300px] md:w-[350px] [&.swiper-slide-active]:w-[85vw] [&.swiper-slide-active]:md:w-[800px] !flex items-center justify-center transition-all duration-[8000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
              >
              {({ isActive }) => {
                const shouldExpand = isActive

                return (
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.9,
                    }}
                    transition={{ duration: 4.0, ease: [0.25, 1, 0.5, 1] }}
                    className={`
                      relative w-full
                      bg-gradient-to-br from-slate-800 via-slate-900 to-black
                      rounded-[2rem] border border-slate-700/50
                      ${isActive ? 'shadow-2xl shadow-primary/20 ring-1 ring-white/10' : 'shadow-none blur-[1px]'}
                      overflow-hidden
                      before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/5 before:via-white/0 before:to-white/5 before:pointer-events-none
                    `}
                  >
                    <div className="flex flex-col p-8 md:p-10">
                      
                      {/* Header: Icon & Title - Always Visible */}
                      <div className="flex items-center gap-4 mb-6 shrink-0">
                        <div className={`w-12 h-12 rounded-2xl ${service.color} flex items-center justify-center text-white shadow-lg shrink-0`}>
                          <service.icon size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>

                      {/* Graphic: fade/scale on active (Semrush-style) */}
                      <motion.div
                        initial={{ opacity: 0.8, scale: 0.98 }}
                        animate={{
                          opacity: isActive ? 1 : 0.8,
                          scale: isActive ? 1 : 0.98,
                        }}
                        transition={{
                          duration: 4.0,
                          ease: [0.25, 1, 0.5, 1],
                          delay: isActive ? 0.2 : 0,
                        }}
                        className={`w-full mb-6 ${!isActive ? 'grayscale-[0.5]' : ''}`}
                        style={{ transformOrigin: 'center center' }}
                      >
                        <ServiceGraphic color={service.color.replace('bg-', 'bg-')} />
                      </motion.div>

                      {/* Content: Shows contracted first, then slowly expands to measured height (includes button space) */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: shouldExpand ? measuredHeight : 0,
                          opacity: shouldExpand ? 1 : 0,
                        }}
                      transition={{ 
                        height: { 
                          duration: 2.0, 
                          ease: [0.25, 1, 0.5, 1],
                          delay: shouldExpand ? 0.5 : 0, // Show contracted first, then expand
                        },
                        opacity: { 
                          duration: 0.8, 
                          ease: [0.25, 1, 0.5, 1],
                          delay: shouldExpand ? 0.5 : 0,
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        ref={(el) => {
                          if (el) contentRefs.current[index] = el
                        }}
                        className="pt-2"
                      >
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <ul className="space-y-3 mb-8">
                          {service.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, y: 8 }}
                              animate={
                                shouldExpand
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 8 }
                              }
                              transition={{
                                duration: 0.4,
                                ease: [0.25, 1, 0.5, 1],
                                delay: shouldExpand ? 0.1 * i : 0,
                              }}
                              className="flex items-center gap-3 text-slate-300 text-sm font-medium"
                            >
                              <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ 
                            opacity: shouldExpand ? 1 : 0,
                            scale: shouldExpand ? 1 : 0.98,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: [0.25, 1, 0.5, 1],
                            delay: shouldExpand ? 2.7 : 0, // 0.5s + 1.2s expansion + 1s wait
                          }}
                          style={{ transformOrigin: 'center bottom' }}
                        >
                          <a 
                            href="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                          >
                            Try for free
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
                )
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
