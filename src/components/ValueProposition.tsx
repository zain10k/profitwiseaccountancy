import { Suspense } from 'react'
import { BarChart3, ShieldCheck, TrendingUp, Zap, ChevronDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import { Container } from '@/components/ui/Container'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { motion } from 'framer-motion'

const valuePillars = [
  {
    title: 'Data-Driven Insights',
    description: 'Turn numbers into narrative. We analyze your financial data to uncover opportunities for optimization and efficiency.',
    icon: BarChart3,
  },
  {
    title: 'Proactive Compliance',
    description: 'Stay ahead of regulations. Our team ensures you meet every deadline and requirement before it becomes an issue.',
    icon: ShieldCheck,
  },
  {
    title: 'Strategic Growth',
    description: 'Scale with confidence. We provide the financial roadmap and forecasting you need to expand your market reach.',
    icon: TrendingUp,
  },
]

export function ValueProposition() {
  const [splineRef, shouldLoadSpline] = useIntersectionObserver({ rootMargin: '200px' })

  return (
    <section className="relative py-32 sm:py-40 bg-slate-900 overflow-hidden">
      {/* Background Spline Scene - lazy loaded */}
      <div ref={splineRef as React.RefObject<HTMLDivElement>} className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {shouldLoadSpline && (
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
             {/* Using a finance-abstract sphere scene */}
             <Spline scene="https://prod.spline.design/KQjjjnNtcywOg-kH/scene.splinecode" />
          </Suspense>
        )}
      </div>
      
      {/* Gradient Overlay — smooth fade (gentler steps) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to right, transparent 0%, transparent 100%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Animated Heading */}
          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold tracking-wide uppercase mb-6">
                <Zap className="w-4 h-4" />
                <span>Our Philosophy</span>
             </div>
             
             <AnimatedText
                as="h2"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                highlightWords={['Success']}
                start="top 80%"
                stagger={0.03}
             >
                Values That Drive Your Success
             </AnimatedText>
             
             <AnimatedText
                as="p"
                className="mt-6 text-lg text-slate-300 max-w-lg leading-relaxed"
                mode="word"
                start="top 80%"
                delay={0.2}
             >
                We believe in more than just balancing books. We believe in building a foundation for sustainable wealth and long-term stability.
             </AnimatedText>
          </div>

          {/* Right Column: Value Pillars List */}
          <div className="space-y-8">
            {valuePillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                className="group flex gap-5 p-4 rounded-xl bg-transparent border border-transparent hover:border-primary/30 transition-colors duration-300 relative cursor-pointer"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  type: "spring", 
                  stiffness: 50, 
                  damping: 15, 
                  delay: index * 0.15 
                }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                    <pillar.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {pillar.title}
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
                      className="text-primary/50"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <motion.div
                    variants={{
                        hidden: { height: 0, opacity: 0 },
                        visible: { height: 0, opacity: 0 },
                        hover: { height: 'auto', opacity: 1 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-slate-300 leading-relaxed text-sm sm:text-base pb-1">
                      {pillar.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
