import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedText } from '@/components/ui/AnimatedText'

export function Testimonials() {
  return (
    <section className="relative bg-background dark:bg-slate-950 py-24 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
      {/* Top fade from WhyChooseUs — smooth color transition */}
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent dark:from-slate-900 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <AnimatedText
            as="h2"
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4"
            highlightWords={['Ambitious']}
            start="top 85%"
            stagger={0.025}
          >
            Trusted by Ambitious Founders
          </AnimatedText>
          <AnimatedText
            as="p"
            className="text-lg text-slate-600 dark:text-slate-400"
            mode="word"
            start="top 85%"
            delay={0.2}
          >
            Don't just take our word for it. Here's why businesses trust us with their finances.
          </AnimatedText>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div
            className="elfsight-app-45df810a-1bcc-4a55-b35a-24a88fd717d7"
            data-elfsight-app-lazy
          />
        </motion.div>
      </Container>
    </section>
  )
}
