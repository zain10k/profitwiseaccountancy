import { Building2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { motion } from 'framer-motion'

export function AboutCompanySection() {
  return (
    <section className="relative py-20 sm:py-28 bg-background overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-8"
          >
            <Building2 className="h-4 w-4" aria-hidden />
            <span>Who We Are</span>
          </motion.div>

          <AnimatedText
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !text-slate-900 mb-8"
            highlightWords={['ProfitWise']}
            start="top 85%"
            stagger={0.02}
          >
            ProfitWise Accountants LTD
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-lg sm:text-xl !text-slate-700 leading-relaxed mb-6"
            mode="word"
            start="top 85%"
            delay={0.15}
          >
            We are a UK accountancy practice dedicated to giving small and medium businesses the clarity and confidence they need to grow. More than just number-crunchers, we act as your strategic financial partner—handling compliance, tax, and reporting so you can focus on running your business.
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-lg !text-slate-700 leading-relaxed"
            mode="word"
            start="top 85%"
            delay={0.25}
          >
            From bookkeeping and payroll to tax planning and business advisory, we provide tailored solutions that keep you HMRC-compliant, reduce your tax burden, and support your long-term success. Your growth is our mission.
          </AnimatedText>
        </div>
      </Container>
    </section>
  )
}
