import { Award, ShieldCheck, Clock, Check, BarChart3, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedText } from '@/components/ui/AnimatedText'

const features = [
  {
    name: 'Professional & Certified',
    description: 'We are qualified financial accountants (AFA - MIPA) bringing years of regulated expertise to your business.',
    icon: Award,
  },
  {
    name: 'Proactive Tax Planning',
    description: 'We don’t just record history; we help shape your future with strategic tax efficiency planning and forecasting.',
    icon: ShieldCheck,
  },
  {
    name: 'Responsive Support',
    description: 'Direct access to your dedicated accountant. No call centers, no waiting days for a reply.',
    icon: Clock,
  },
  {
    name: 'Modern Tech Stack',
    description: 'We use the latest cloud accounting software (Xero, QuickBooks) for real-time insights.',
    icon: Smartphone,
  },
  {
    name: 'Growth Focused',
    description: 'Regular management accounts and advisory sessions to help you scale sustainably.',
    icon: BarChart3,
  },
  {
    name: 'Fixed Monthly Fees',
    description: 'Transparent pricing with no surprise bills. Know exactly what you are paying for.',
    icon: Check,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-wide uppercase text-sm mb-4"
          >
            Why Partner With Us
          </motion.h2>
          <AnimatedText
            as="h3"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900"
            highlightWords={['Business']}
            start="top 85%"
            stagger={0.025}
          >
            A Better Way to Manage Your Business Finances
          </AnimatedText>
          <AnimatedText
             as="p"
             className="text-lg text-slate-600"
             mode="word"
             start="top 85%"
             delay={0.2}
          >
            We combine traditional accounting expertise with modern technology to deliver a superior, proactive service.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                delay: index * 0.1, 
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1
              }}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
                hover: { 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }
              }}
              className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-primary/20 hover:ring-1 hover:ring-white/10 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col items-start w-full min-w-0"
            >
              {/* Metallic glare - visible only on hover */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden
              />
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <div className="w-full flex items-start">
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 relative z-10 shrink-0"
                  variants={{
                    hover: { 
                      scale: 1.15, 
                      transition: { duration: 0.5 }
                    }
                  }}
                >
                  <motion.div
                    variants={{
                      hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="h-6 w-6" />
                  </motion.div>
                </motion.div>
              </div>
              
              <motion.h4 
                className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors relative z-10"
                variants={{
                  hover: { x: 4 }
                }}
                transition={{ duration: 0.2 }}
              >
                {feature.name}
              </motion.h4>
              
              <motion.div
                variants={{
                  hidden: { height: 0, opacity: 0 },
                  visible: { height: 0, opacity: 0 },
                  hover: { height: 'auto', opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 overflow-hidden w-full mobile-extended-description"
              >
                <p className="text-slate-300 leading-relaxed pb-2">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
