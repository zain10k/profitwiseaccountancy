import { useRef, memo } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { MessageSquare, Search, FileCheck, Rocket, ArrowRight, ChevronDown } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We start with a complimentary consultation to understand your business, goals, and financial challenges.',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Deep Analysis',
    description: 'Our team conducts a comprehensive review of your current financial position, identifying opportunities and risks.',
    icon: Search,
    color: 'from-purple-500 to-pink-500'
  },
  {
    number: '03',
    title: 'Strategic Planning',
    description: 'We develop a tailored financial strategy that aligns with your business objectives and maximizes efficiency.',
    icon: FileCheck,
    color: 'from-amber-500 to-orange-500'
  },
  {
    number: '04',
    title: 'Execution & Growth',
    description: 'We implement the plan and provide ongoing support, monitoring progress and adapting as your business evolves.',
    icon: Rocket,
    color: 'from-emerald-500 to-green-500'
  }
]

export function ProcessSection() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-20 sm:py-32 bg-blue-50 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      {/* Large Background Text */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-[0.02] select-none whitespace-nowrap"
        style={{ y }}
      >
        <div className="text-[15vw] font-bold text-slate-900">PROCESS</div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Our Approach
          </span>
          <AnimatedText
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            highlightWords={['Partner']}
            start="top 85%"
            stagger={0.025}
          >
            How We Partner with You
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            mode="word"
            start="top 85%"
            delay={0.3}
          >
            A proven methodology that transforms financial complexity into business clarity
          </AnimatedText>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 lg:gap-12 sm:items-start">
          {steps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-xl group"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

interface ProcessCardProps {
  step: typeof steps[0]
  index: number
}

const ProcessCard = memo(function ProcessCard({ step, index }: ProcessCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      whileHover="hover"
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 1,
        delay: index * 0.15
      }}
    >
      <div className="relative bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-700 hover:shadow-xl hover:border-primary/20 transition-all duration-500 overflow-hidden h-full">
        
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Step Number - Large Background */}
        <div className="absolute top-4 right-4 text-[120px] font-bold text-slate-800 leading-none select-none">
          {step.number}
        </div>

        {/* Icon */}
        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-3.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <step.icon className="w-full h-full text-white" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-center justify-between w-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
              {step.title}
            </h3>
            <motion.div
              variants={{
                visible: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 10 }
              }}
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                default: { duration: 0.2 }
              }}
              className="text-primary/50 mb-4"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
          <motion.div
            variants={{
                hover: { height: 'auto', opacity: 1 }
            }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pb-1">
                {step.description}
            </p>
          </motion.div>
        </div>

        {/* Connecting Arrow (except last item) */}
        {index < steps.length - 1 && (
          <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            >
              <ArrowRight className="w-12 h-12 text-primary/30" />
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  )
})
