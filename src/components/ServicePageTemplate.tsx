import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { CheckCircle2, ChevronDown, ArrowLeft, type LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedText } from '@/components/ui/AnimatedText'
import type { FAQ } from '@/data/serviceFaqs'
import type { Benefit } from '@/data/serviceBenefits'

export interface ServiceProcess {
  number: string
  title: string
  description: string
}

interface ServicePageTemplateProps {
  // Hero section
  heroImage: string
  title: string
  subtitle: string
  
  // Overview section
  overviewTitle: string
  overviewParagraphs: string[]
  targetAudience: string
  
  // What's Included
  includedItems: string[]
  
  // Benefits
  benefits: Benefit[]
  
  // Process
  process: ServiceProcess[]
  
  // FAQs
  faqs: FAQ[]
  
  // Service icon for decorative use
  ServiceIcon: LucideIcon
}

export function ServicePageTemplate({
  heroImage,
  title,
  subtitle,
  overviewTitle,
  overviewParagraphs,
  targetAudience,
  includedItems,
  benefits,
  process,
  faqs,
  ServiceIcon,
}: ServicePageTemplateProps) {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Back button - fixed top left below navbar; moves down when navbar expands on scroll */}
      <Link
        to="/services"
        className={cn(
          'fixed left-4 z-40 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-primary hover:border-primary shadow-lg transition-all duration-300 ease-out',
          isScrolled ? 'top-28 md:top-32' : 'top-20 md:top-24'
        )}
        aria-label="Back to Services"
      >
        <ArrowLeft className="h-4 w-4 shrink-0" />
        <span className="text-sm font-medium">Back to Services</span>
      </Link>

      {/* Hero Section */}
      <PageHero
        backgroundImage={heroImage}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            start="top 90%"
            stagger={0.03}
          >
            {title}
          </AnimatedText>
        }
        subtitle={
          <>
            <AnimatedText
              as="p"
              className="mt-4 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              mode="word"
              start="top 90%"
              delay={0.2}
            >
              {subtitle}
            </AnimatedText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10"
            >
              <Button
                to="/contact"
                size="lg"
                className="bg-primary text-primary-foreground hover:brightness-110 shadow-2xl text-lg h-14 px-10"
              >
                Get a Free Consultation
              </Button>
            </motion.div>
          </>
        }
      />

      {/* Overview Section */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-8">
                <ServiceIcon className="h-10 w-10" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">{overviewTitle}</h2>
              
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                {overviewParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-xl border-l-4 border-primary">
                <p className="text-slate-700">
                  <span className="font-semibold text-slate-900">Who this is for:</span> {targetAudience}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What's Included Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto">
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-12 text-center"
              highlightWords={['Included']}
              start="top 85%"
              stagger={0.02}
            >
              What's Included
            </AnimatedText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {includedItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-xl border border-slate-700/50 hover:border-slate-600/70 text-slate-200 transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <AnimatedText
            as="h2"
            className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-12 text-center"
            highlightWords={['Benefits']}
            start="top 85%"
            stagger={0.02}
          >
            Key Benefits
          </AnimatedText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 hover:border-slate-600/70 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none" />
        <Container className="relative z-10">
          <AnimatedText
            as="h2"
            className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center"
            highlightWords={['Process']}
            start="top 85%"
            stagger={0.02}
          >
            Our Process
          </AnimatedText>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex gap-6 items-start bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <AnimatedText
            as="h2"
            className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-12 text-center"
            highlightWords={['Questions']}
            start="top 85%"
            stagger={0.02}
          >
            Frequently Asked Questions
          </AnimatedText>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-foreground/5 dark:bg-black/10 pattern-dots" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Get in touch today for a free, no-obligation consultation. Let's discuss how we can help your business succeed.
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
    </div>
  )
}

// FAQ Item Component with Accordion
function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 overflow-hidden hover:border-slate-600/70 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-slate-300 leading-relaxed border-t border-slate-700 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
