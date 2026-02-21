import { BarChart3, ShieldCheck, TrendingUp, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
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
  return (
    <section className="relative py-32 sm:py-40 bg-slate-900 overflow-hidden">
      {/* Static gradient background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(251, 146, 60, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom left, rgba(59, 130, 246, 0.1) 0%, transparent 50%), linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.8) 100%)',
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Animated Heading */}
          <div className="w-full">
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

          {/* Right Column: Value Pillars List - full width single column on mobile */}
          <div className="space-y-4 sm:space-y-8 w-full">
            {valuePillars.map((pillar, index) => (
              <motion.div 
                key={index} 
                className="group flex gap-5 p-5 sm:p-4 rounded-xl bg-transparent border border-transparent hover:border-primary/30 transition-colors duration-300 relative cursor-pointer w-full"
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <motion.div
                    variants={{
                        hidden: { height: 0, opacity: 0 },
                        visible: { height: 0, opacity: 0 },
                        hover: { height: 'auto', opacity: 1 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden mobile-extended-description"
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
