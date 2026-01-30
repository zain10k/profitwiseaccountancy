import { useRef, memo } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calculator, TrendingUp, FileText, Users, PieChart, Briefcase, Search, FileCheck, Scale } from 'lucide-react'

// Data model
const services = [
  {
    id: 'tax',
    title: 'Tax Planning & Returns',
    description: 'Strategic tax planning to minimize liabilities and ensure full compliance with HMRC regulations. We proactively identify opportunities for efficiency.',
    icon: Calculator,
    link: '/services#tax',
    image: '/tax.png'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & VAT',
    description: 'Accurate, timely bookkeeping and VAT return services using the latest cloud accounting software. Keep your records audit-ready at all times.',
    icon: FileText,
    link: '/services#bookkeeping',
    image: '/book%20keeping.png'
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Complete payroll solutions including payslips, PAYE, pension contributions, and year-end reporting. Seamless compliance for your workforce.',
    icon: Users,
    link: '/services#payroll',
    image: '/payroll.png'
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    description: 'Expert guidance to help you make informed decisions, improve cash flow, and grow your business. Your long-term success is our priority.',
    icon: TrendingUp,
    link: '/services#advisory',
    image: '/advisory.png'
  },
  {
    id: 'management',
    title: 'Management Accounts',
    description: 'Regular financial reports giving you a clear picture of your business performance. Make data-driven decisions with confidence.',
    icon: PieChart,
    link: '/services#management',
    image: '/accounts.png'
  },
  {
    id: 'formation',
    title: 'Company Formation',
    description: 'Assistance with setting up new limited companies, including registration and initial structuring. Start your journey on solid ground.',
    icon: Briefcase,
    link: '/services#formation',
    image: '/company%20formation.png'
  },
  {
    id: 'vat-investigation',
    title: 'VAT Investigation',
    description: 'Expert representation and support during HMRC VAT investigations to protect your business interests and minimize disruption.',
    icon: Search,
    link: '/services#vat-investigation',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'self-assessment',
    title: 'Self Assessment',
    description: 'Expert preparation and submission of your Self Assessment tax returns with accuracy and deadline compliance. Avoid penalties and stress.',
    icon: FileCheck,
    link: '/services#self-assessment',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'wills-trust-probate',
    title: 'Wills, Trust & Probate',
    description: 'Comprehensive estate planning and probate services to protect your assets and ensure tax-efficient estate administration.',
    icon: Scale,
    link: '/services#wills-trust-probate',
    image: '/will.png'
  }
]

export function ServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section ref={containerRef} className="relative bg-slate-50" style={{ height: `${services.length * 100}vh` }}>
      
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Title Watermark */}
        <div className="absolute top-12 left-0 w-full text-center z-0 pointer-events-none opacity-[0.03]">
             <h2 className="text-[12vw] font-bold text-slate-900 leading-none tracking-tighter">
                SERVICES
             </h2>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex flex-col justify-center">
            
            {/* Header stays static */}
            <div className="absolute top-8 left-0 right-0 text-center z-20">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Expertise</h3>
                <h2 className="text-3xl font-bold text-slate-900">Comprehensive Financial Solutions</h2>
            </div>

            {/* Cards Stack */}
            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[2/1] lg:aspect-[2.4/1] flex items-center justify-center">
                {services.map((service, index) => {
                    return (
                        <ServiceCard 
                            key={service.id}
                            service={service}
                            index={index}
                            total={services.length}
                            progress={smoothProgress}
                        />
                    )
                })}
            </div>

            {/* Scroll Progress Indicator */}
            <div className="absolute bottom-12 left-0 w-full flex justify-center gap-3 z-20">
                {services.map((_, i) => (
                    <ProgressDot key={i} index={i} total={services.length} progress={smoothProgress} />
                ))}
            </div>

        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  service: typeof services[0]
  index: number
  total: number
  progress: MotionValue<number>
}

const ServiceCard = memo(function ServiceCard({ service, index, total, progress }: ServiceCardProps) {
    // Calculate the range for this card
    const rangeStart = index / total
    const rangeEnd = (index + 1) / total
    
    // Opacity: Fade in when entering range, fade out when leaving
    const opacity = useTransform(
        progress,
        [
          Math.max(0, rangeStart - 0.05), 
          rangeStart, 
          rangeEnd, 
          Math.min(1, rangeEnd + 0.05)
        ],
        [0, 1, 1, 0]
    )

    // Scale: Slight zoom effect for depth
    const scale = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [0.92, 1]
    )
    
    // Y-position: Subtle rise effect
    const y = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [30, -10]
    )

    return (
        <motion.div 
            style={{ opacity, scale, y }}
            className="absolute inset-0 w-full h-full flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        >
            {/* Content Side */}
            <div className="flex-1 p-6 md:p-10 lg:p-14 flex flex-col justify-center items-start">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-3 text-primary mb-6">
                    <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                </h3>
                
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                    {service.description}
                </p>

                <Link 
                    to={service.link}
                    className="group inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors"
                >
                    Learn more 
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative h-48 md:h-auto overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/5 z-10" /> 
                <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
    )
})

interface ProgressDotProps {
  index: number
  total: number
  progress: MotionValue<number>
}

const ProgressDot = memo(function ProgressDot({ index, total, progress }: ProgressDotProps) {
    const rangeStart = index / total
    const rangeEnd = (index + 1) / total
    
    const scale = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [1, 1.5]
    )
    
    const backgroundColor = useTransform(
        progress,
        (p) => {
            if (p >= rangeStart && p < rangeEnd) {
                return 'hsl(37, 73%, 44%)' // Primary color
            }
            return '#cbd5e1' // slate-300
        }
    )

    return (
        <motion.div 
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{ scale, backgroundColor }}
        />
    )
})
