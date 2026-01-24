import { Award, ShieldCheck, Clock, Check, BarChart3, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

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
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
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
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            A Better Way to Manage Your <br /> Business Finances
          </motion.h3>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-slate-400"
          >
            We combine traditional accounting expertise with modern technology to deliver a superior, proactive service.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-primary/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {feature.name}
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
