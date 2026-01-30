import { ContactForm } from '@/components/ContactForm'
import { Linkedin } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'

/** Unique hero image - desk/workspace (no people). Not used elsewhere. */
const CONTACT_HERO_IMAGE = 'https://images.pexels.com/photos/7688327/pexels-photo-7688327.jpeg?auto=compress&cs=tinysrgb&w=1920'

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
          <AnimatedText
            as="p"
            className="mt-4 text-xl text-white/90 max-w-2xl mx-auto"
            mode="word"
            start="top 90%"
            delay={0.2}
          >
            Get in touch by phone, email, or the form below. We're here to help with your accounting and tax needs.
          </AnimatedText>
        }
      />
      <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section: Contact Details */}
            <div className="space-y-8">
              <div>
                <AnimatedText
                  as="h2"
                  className="text-3xl font-bold text-slate-900 mb-4"
                  highlightWords={['Details']}
                  start="top 85%"
                  stagger={0.025}
                >
                  Contact Details
                </AnimatedText>
                <div className="w-20 h-1 bg-primary mb-4" />
                <AnimatedText
                  as="p"
                  className="text-slate-600 mb-8 text-lg"
                  mode="word"
                  start="top 85%"
                  delay={0.2}
                >
                  Connect with us by phone, email, or contact form below.
                </AnimatedText>
              </div>

              {/* Company Information Card */}
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-primary/20 hover:border-primary transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/149736/pexels-photo-149736.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="ProfitWise Accountants office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <p className="font-bold text-primary mb-4 text-lg">ProfitWise Accountants</p>
                  <div className="space-y-3 text-slate-900">
                    <p>
                      <span className="font-medium">Address:</span>
                      <br />
                      12 Swale Close
                      <br />
                      Aveley
                      <br />
                      SOUTH OCKENDON
                      <br />
                      Essex, RM15 4LX
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span>{' '}
                      <a href="tel:+447939018799" className="underline hover:text-primary">
                        +44 7939 018799
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{' '}
                      <a href="mailto:info@profitwiseaccountants.com" className="underline hover:text-primary">
                        info@profitwiseaccountants.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-medium">LinkedIn:</span>{' '}
                      <a
                        href="https://www.linkedin.com/company/profitwiseaccountants/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                      >
                        Follow us on LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <div>
                <AnimatedText
                  as="h2"
                  className="text-3xl font-bold text-slate-900 mb-6"
                  highlightWords={['Form']}
                  start="top 85%"
                  stagger={0.025}
                >
                  Contact Form
                </AnimatedText>
                <div className="w-20 h-1 bg-primary mb-6" />
                <ContactForm />
              </div>
            </div>

            {/* Right Section: Find Us */}
            <div className="space-y-8">
              <div>
                <AnimatedText
                  as="h2"
                  className="text-3xl font-bold text-slate-900 mb-4"
                  highlightWords={['Us']}
                  start="top 85%"
                  stagger={0.025}
                >
                  Find Us
                </AnimatedText>
                <div className="w-20 h-1 bg-primary mb-4" />
                <AnimatedText
                  as="p"
                  className="text-slate-600 mb-8 text-lg"
                  mode="word"
                  start="top 85%"
                  delay={0.2}
                >
                  Use the map below to see our office location and get directions by car, bus, bike or on foot.
                </AnimatedText>
              </div>

              {/* Embedded Google Map */}
              <motion.div
                className="rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-[600px]">
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
            </div>
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
    </div>
  )
}
