import { useNavigate } from 'react-router-dom'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/PageHero'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

const COOKIES_HERO_IMAGE =
  'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1920'

const STORAGE_KEY = 'cookie_consent'

function clearCookiePreference() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function Cookies() {
  const navigate = useNavigate()

  const handleChangePreferences = () => {
    clearCookiePreference()
    navigate('/')
    window.scrollTo(0, 0)
    window.location.reload()
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={COOKIES_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Cookie']}
            start="top 90%"
            stagger={0.03}
          >
            Cookie Policy
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
            How we use cookies and how you can manage your preferences.
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
                  Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, to improve the user experience, and to provide information to site owners. This policy explains what cookies we use on the ProfitWise Accountants website and how you can manage your preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Types of cookies we use
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li><strong>Essential cookies</strong> – Necessary for the website to function (e.g. security, load balancing). These cannot be disabled.</li>
                  <li><strong>Analytics cookies</strong> – Help us understand how visitors use our site (e.g. pages viewed, time on site) so we can improve it.</li>
                  <li><strong>Functional cookies</strong> – Remember your preferences (e.g. language, region) to give you a more personalised experience.</li>
                  <li><strong>Marketing cookies</strong> – We do not currently use marketing or advertising cookies on our website.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. How we use cookies
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We use cookies to run our website, improve your experience, and understand how the site is used. We do not sell your data. Cookie data is used only in line with this policy and our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. How to manage cookies
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You can manage or disable cookies in your browser settings. Most browsers allow you to block or delete cookies. If you block all cookies, some parts of our website may not work as intended. You can also change your cookie preferences for this site at any time using the button below; this will show the cookie consent banner again so you can make a new choice.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleChangePreferences}
                  className="rounded-lg"
                >
                  Change cookie preferences
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Third-party cookies
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Some content on our site is provided by third parties (for example, Google Maps for location and Elfsight for reviews). These services may set their own cookies. We do not control these cookies; their use is governed by the respective third party&apos;s privacy and cookie policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Updates
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. The &quot;Last updated&quot; date at the top of this page will be revised when we make changes. We encourage you to check this page periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Contact
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  For any questions about our use of cookies or this policy, please contact us at{' '}
                  <a href="mailto:info@profitwiseaccountants.com" className="text-primary hover:underline font-medium">
                    info@profitwiseaccountants.com
                  </a>
                  {' '}or at 12 Swale Close, Aveley, Essex RM15 4LX.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
