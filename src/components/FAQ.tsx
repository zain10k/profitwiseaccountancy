import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { AnimatedText } from '@/components/ui/AnimatedText'

const faqData: { question: string; answer: string }[] = [
  {
    question: 'What accounting and tax services do you offer?',
    answer:
      'We offer a full range of services including tax planning and preparation, bookkeeping and cloud accounting, VAT and payroll, management accounts, business advisory, and company formation. We also support self assessment, wills, trusts, and probate. Every engagement is tailored to your business size and goals.',
  },
  {
    question: 'How do your fees work?',
    answer:
      'We use fixed monthly fees where possible so you know exactly what you are paying. Fees depend on the scope of work—bookkeeping, payroll, tax returns, and advisory—and we provide a clear quote after an initial discussion. There are no surprise bills.',
  },
  {
    question: 'Who do you typically work with?',
    answer:
      'We work mainly with small and medium businesses, sole traders, and limited companies across the UK. Our clients range from start-ups to established firms who want proactive accounting, clear reporting, and a dedicated point of contact.',
  },
  {
    question: 'Do you help with HMRC deadlines and compliance?',
    answer:
      'Yes. We keep track of key deadlines for VAT, payroll, corporation tax, and self assessment, and we’ll remind you in good time. We also help you stay compliant with Making Tax Digital (MTD) and other HMRC requirements.',
  },
  {
    question: 'What accounting software do you use?',
    answer:
      'We use leading cloud tools such as Xero and QuickBooks so your books are up to date and you can see real-time figures. We can set up and train you on the software and handle ongoing bookkeeping and reconciliation.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Get in touch for a free consultation. We’ll discuss your situation, what you need, and how we can help. From there we’ll agree the scope of work and a fixed fee, then get you set up with minimal disruption.',
  },
]

interface FAQProps {
  /** When true, hide the section heading (e.g. when used on dedicated FAQ page with PageHero). */
  hideHeading?: boolean
}

export function FAQ({ hideHeading = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative bg-background dark:bg-slate-950 py-24 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
      <Container className="relative z-10">
        {!hideHeading && (
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <AnimatedText
              as="h2"
              className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4"
              highlightWords={['Asked']}
              start="top 85%"
              stagger={0.025}
            >
              Frequently Asked Questions
            </AnimatedText>
            <AnimatedText
              as="p"
              className="text-lg text-slate-600 dark:text-slate-400"
              mode="word"
              start="top 85%"
              delay={0.2}
            >
              Quick answers to common questions about our services and how we work.
            </AnimatedText>
          </div>
        )}

        <dl className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-primary/30 transition-colors overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-semibold text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span>{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-primary"
                      aria-hidden
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                </dt>
                <dd id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                </dd>
              </motion.div>
            )
          })}
        </dl>
      </Container>
    </section>
  )
}
