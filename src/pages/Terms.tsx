import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'

const TERMS_HERO_IMAGE =
  'https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1920'

export function Terms() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={TERMS_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Conditions']}
            start="top 90%"
            stagger={0.03}
          >
            Terms and Conditions
          </AnimatedText>
        }
        subtitle={
          <AnimatedText
            as="p"
            className="mt-4 text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            mode="word"
            start="top 90%"
            delay={0.2}
          >
            The terms on which we provide our accounting and tax services.
          </AnimatedText>
        }
      />

      <section className="py-24 bg-slate-50 text-slate-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 text-sm mb-12">
              Last updated: January 2026
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  1. Introduction
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  These terms and conditions (&quot;Terms&quot;) apply to the engagement of ProfitWise Accountants (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) to provide accounting, tax, and related services to you (&quot;you&quot;, &quot;client&quot;). By engaging our services or using our website, you agree to these Terms. Our registered address is 12 Swale Close, Aveley, Essex RM15 4LX.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Services and engagement
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  The scope of our services, fees, and deliverables will be set out in our engagement letter or written agreement with you. We will perform the services with reasonable skill and care and in accordance with applicable professional standards. You agree to provide us with information and access we reasonably need to perform the services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Fees and payment
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Fees will be as agreed in our engagement letter. Unless otherwise agreed, we may charge on a fixed monthly basis, per project, or on a time basis. Invoices are payable within the period stated on the invoice (typically 14 or 30 days). We reserve the right to charge interest on overdue amounts and to suspend services until payment is received.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Confidentiality
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We will keep your information confidential except where disclosure is required by law, by our regulators, or with your consent. We may use sub-contractors or third-party services (e.g. cloud software) under confidentiality obligations where necessary to perform the services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Liability
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Our liability to you for loss or damage arising from our services is limited to the amount of fees paid by you for the relevant services in the 12 months preceding the claim, unless a higher limit is agreed in writing or we have acted fraudulently. We are not liable for indirect or consequential loss, or for matters outside our control. Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence or for fraud.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Termination
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Either party may terminate the engagement in accordance with the terms of our engagement letter, or on reasonable notice. On termination, you will pay all fees and disbursements due up to the date of termination. We will hand over papers and information to which you are entitled in accordance with professional obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Governing law
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  8. Contact
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  For questions about these Terms, please contact us at info@profitwiseaccountants.com or 12 Swale Close, Aveley, Essex RM15 4LX.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
