import { HeroModern } from '@/components/HeroModern'
import { ServiceHighlights } from '@/components/ServiceHighlights'
import { Testimonials } from '@/components/Testimonials'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { PartnersStrip } from '@/components/PartnersStrip'
import { ValueProposition } from '@/components/ValueProposition'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { motion } from 'framer-motion'

export function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroModern />
      <ValueProposition />
      <ServiceHighlights />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Final CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-foreground/5 dark:bg-black/10 pattern-dots" />
        <Container className="relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto"
          >
            <AnimatedText
              as="h2"
              className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
              highlightWords={['Control']}
              start="top 85%"
              stagger={0.025}
            >
              Ready to Take Control?
            </AnimatedText>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Join the hundreds of businesses who trust ProfitWise Accountants to handle their accounting, tax, and payroll needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button 
                  to="/contact" 
                  className="bg-white text-primary hover:bg-slate-100 shadow-xl border-none text-lg h-14 px-10"
               >
                  Book Your Free Consultation
               </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <PartnersStrip />
    </div>
  )
}
