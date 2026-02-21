import { ContactForm } from '@/components/ContactForm'
import { ContactMethods } from '@/components/ContactMethods'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/PageHero'
import { motion, AnimatePresence } from 'framer-motion'
import { contactFaqs } from '@/data/contactFaqs'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/** Unique hero image - professional handshake/meeting (contact/communication theme). Not used elsewhere. */
const CONTACT_HERO_IMAGE =
  'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1920'

export function Contact() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={CONTACT_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Us']}
            start="top 90%"
            stagger={0.03}
          >
            Contact Us
          </AnimatedText>
        }
        subtitle={
          <>
            <AnimatedText
              as="p"
              className="mt-4 text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              mode="word"
              start="top 90%"
              delay={0.2}
            >
              Get in touch by phone, email, or the form below. We're here to help with your
              accounting and tax needs.
            </AnimatedText>
            <p className="mt-3 text-sm text-white/70">We typically respond within 24 hours</p>
          </>
        }
      />

      {/* Main Form Section - Centered with Dark Gradient Background */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Ambient blur decorations */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-slate-300 text-lg">
                Fill out the form below and we'll get back to you shortly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactMethods />
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-4"
              highlightWords={['Questions']}
              start="top 85%"
              stagger={0.02}
            >
              Frequently Asked Questions
            </AnimatedText>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about contacting us
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {contactFaqs.map((faq, index) => (
              <ContactFAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Find Us</h2>
            <p className="text-slate-600 text-lg">
              Visit our office or get directions by car, bus, bike or on foot
            </p>
          </div>

          <motion.div
            className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=12+Swale+Close,+Aveley,+South+Ockendon+RM15+4LX&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="ProfitWise Accountants location"
              />
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              <span className="font-semibold text-slate-900">Address:</span> 12 Swale Close, Aveley,
              South Ockendon, Essex, RM15 4LX
            </p>
            <a
              href="https://www.google.com/maps?q=12+Swale+Close,+Aveley,+South+Ockendon+RM15+4LX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Get Directions →
            </a>
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
              Join the hundreds of businesses who trust ProfitWise Accountants to handle their
              accounting, tax, and payroll needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
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

// FAQ Item Component for Contact Page
function ContactFAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 overflow-hidden hover:border-slate-600/70 transition-colors"
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
