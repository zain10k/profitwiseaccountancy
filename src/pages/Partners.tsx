import { ExternalLink } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'

/** Unique hero image - business desk (no people). Not used elsewhere. */
const PARTNERS_HERO_IMAGE = 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920'

export const partners = [
  {
    name: 'Croner-i',
    url: 'https://www.croneri.co.uk/',
    domain: 'croneri.co.uk',
    description: 'Leading provider of information, software, and services for tax, audit, and accounting professionals.',
    logo: '/croner-i.svg',
  },
  {
    name: 'QuickBooks',
    url: 'https://quickbooks.intuit.com/uk/',
    domain: 'quickbooks.intuit.com',
    description: 'Smart, simple online accounting software for small businesses.',
    logo: '/quickbooks.png',
  },
  {
    name: 'Sage',
    url: 'https://www.sage.com/en-gb/',
    domain: 'sage.com',
    description: 'Integrated accounting, payroll, and payment systems.',
    logo: '/sage.png',
  },
  {
    name: 'Xero',
    url: 'https://www.xero.com/uk/',
    domain: 'xero.com',
    description: 'Beautiful accounting software that helps small businesses thrive.',
    logo: '/xero.png',
  },
  {
    name: 'TaxCalc',
    url: 'https://www.taxcalc.com/',
    domain: 'taxcalc.com',
    description: 'Award-winning tax return and accounts production software.',
    logo: '/taxcalc.jpg',
  },
  {
    name: 'Nest Pensions',
    url: 'https://www.nestpensions.org.uk/',
    domain: 'nestpensions.org.uk',
    description: 'Workplace pension scheme set up by the government.',
    logo: '/nest-pension.png',
  },
  {
    name: 'Moneysoft',
    url: 'https://moneysoft.co.uk/',
    domain: 'moneysoft.co.uk',
    description: 'Payroll, HR, and accounting software solutions.',
    logo: '/moneysoft.png',
  },
  {
    name: 'Smart Pension',
    url: 'https://www.smartpension.co.uk/',
    domain: 'smartpension.co.uk',
    description: 'Technologically advanced workplace pension provider.',
    logo: '/smart-pension.png',
  },
  {
    name: 'Institute of Financial Accountants',
    url: 'https://www.ifa.org.uk/',
    domain: 'ifa.org.uk',
    description: 'Internationally recognized professional accountancy membership body.',
    logo: '/ifa.png',
    className: 'scale-[2.5]',
  },
]

export function Partners() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero
        backgroundImage={PARTNERS_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Partners']}
            start="top 90%"
            stagger={0.03}
          >
            Our Partners
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
            We collaborate with industry-leading software providers and organizations to ensure we deliver the highest quality service to our clients.
          </AnimatedText>
        }
      />

      {/* Partners Grid */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-white p-8 rounded-2xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
              >
                <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-white rounded-lg">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${partner.className ?? ''}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {partner.name}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-center text-slate-600">{partner.description}</p>
              </motion.a>
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
