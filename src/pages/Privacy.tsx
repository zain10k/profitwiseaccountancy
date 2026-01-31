import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'

const PRIVACY_HERO_IMAGE =
  'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920'

export function Privacy() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={PRIVACY_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Privacy']}
            start="top 90%"
            stagger={0.03}
          >
            Privacy Policy
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
            How we collect, use, and protect your personal information.
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
                  1. Who we are
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  ProfitWise Accountants (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a UK accountancy practice. We are the data controller for the personal data we collect in connection with our services. Our registered address is 12 Swale Close, Aveley, Essex RM15 4LX.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. What data we collect
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We may collect and process:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Identity and contact data (name, address, email, phone)</li>
                  <li>Financial and tax-related information you provide for our services</li>
                  <li>Technical data (IP address, browser type) when you use our website</li>
                  <li>Communications and correspondence with us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. How we use your data
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We use your data to provide accounting, tax, and related services; to communicate with you; to comply with legal and regulatory obligations (including HMRC); and to improve our website and services. We do not sell your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Legal basis
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We process your data where necessary for the performance of a contract with you, to comply with legal obligations, for our legitimate interests (e.g. running our practice and improving our services), or with your consent where required.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Retention
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We retain your data for as long as necessary to provide our services and to meet legal, regulatory, and professional requirements (typically at least seven years for tax and accounting records).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Your rights
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Under UK GDPR you have the right to access, rectify, erase, restrict processing, object, and data portability in certain circumstances. You also have the right to complain to the ICO. To exercise your rights or ask questions, contact us at info@profitwiseaccountants.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Cookies and our website
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Our website may use cookies and similar technologies for essential operation, analytics, and improving your experience. You can manage cookie preferences in your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  8. Contact
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  For any questions about this privacy policy or our use of your data, please contact us at info@profitwiseaccountants.com or 12 Swale Close, Aveley, Essex RM15 4LX.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
