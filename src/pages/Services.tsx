import { Calculator, TrendingUp, FileText, Users, PieChart, Briefcase, Search, FileCheck, Scale, ArrowRight, MapPin } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'
import { clientTypes } from '@/data/clientTypes'
import { onboardingSteps } from '@/data/onboardingSteps'

/** Unique hero image - calculator/desk (no people). Not used elsewhere. */
const SERVICES_HERO_IMAGE = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920'

export const allServices = [
  {
    id: 'tax',
    title: 'Tax Planning & Preparation',
    description: 'We go beyond simple compliance. Our proactive tax planning strategies help you minimize liability while ensuring you meet all HMRC obligations.',
    shortDescription: 'Strategic tax planning and compliance services',
    details: [
      'Corporation Tax Returns',
      'Corporation Tax Advisory',
      'Tax Consultancy',
      'Capital Gains Tax Advice',
      'Inheritance Tax Planning',
    ],
    icon: Calculator,
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Cloud Accounting',
    description: 'Say goodbye to shoeboxes of receipts. We implement modern cloud systems (Xero, QuickBooks) to keep your books accurate and up-to-date in real-time.',
    shortDescription: 'Modern cloud accounting and bookkeeping',
    details: [
      'Cloud Software Setup & Training',
      'Bank Reconciliation',
      'VAT Returns (MTD Compliant)',
      'VAT Accounting',
      'Receipt Management (Dext/Hubdoc)',
      'Expense Tracking',
    ],
    icon: FileText,
  },
  {
    id: 'vat-investigation',
    title: 'VAT Investigation',
    description: 'Expert support and representation during HMRC VAT investigations. We help you navigate the process, respond to enquiries, and minimize potential penalties.',
    shortDescription: 'Expert HMRC investigation support',
    details: [
      'HMRC Investigation Representation',
      'VAT Dispute Resolution',
      'Penalty Mitigation',
      'Documentation Review',
      'Correspondence Management',
      'Appeal Support',
    ],
    icon: Search,
  },
  {
    id: 'payroll',
    title: 'Payroll & Pension',
    description: "Paying your team shouldn't be a headache. We handle the entire payroll process, ensuring accuracy and compliance with pension regulations.",
    shortDescription: 'Complete payroll and pension services',
    details: [
      'Weekly/Monthly Payslips',
      'PAYE & NIC Calculations',
      'Pension Auto Enrolment',
      'P60s & P45s',
      'CIS Returns',
    ],
    icon: Users,
  },
  {
    id: 'management',
    title: 'Management Accounts',
    description: 'Understand your business performance with regular, detailed financial reports that go deeper than the statutory year-end accounts.',
    shortDescription: 'Real-time financial insights and reporting',
    details: [
      'Monthly/Quarterly Profit & Loss',
      'Balance Sheet Analysis',
      'Cash Flow Analysis',
      'KPI Tracking',
      'Board Meeting Support',
    ],
    icon: PieChart,
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    description: 'Strategic advice to help you start, grow, or sell your business. We act as your sounding board and financial guide.',
    shortDescription: 'Strategic business growth guidance',
    details: [
      'Business Plan Creation',
      'Cash Flow Forecasting',
      'Budgeting',
      'Growth Strategy',
      'Exit Planning',
    ],
    icon: TrendingUp,
  },
  {
    id: 'formation',
    title: 'Company Formation & Secretarial',
    description: 'Professional support for setting up your Limited Company and maintaining statutory records with Companies House.',
    shortDescription: 'Company setup and compliance',
    details: [
      'Company Registration',
      'Registered Office Address',
      'Confirmation Statement Filing',
      'Share Transfers',
      'Director Appointments',
    ],
    icon: Briefcase,
  },
  {
    id: 'self-assessment',
    title: 'Self Assessment',
    description: 'Expert preparation and submission of your Self Assessment tax returns. We ensure accuracy, maximize your allowances, and meet all HMRC deadlines.',
    shortDescription: 'Personal tax return services',
    details: [
      'Individual Tax Return Preparation',
      'Sole Trader Returns',
      'Partnership Returns',
      'Tax Calculation & Optimization',
      'Deadline Management',
      'HMRC Correspondence Handling',
    ],
    icon: FileCheck,
  },
  {
    id: 'wills-trust-probate',
    title: 'Wills, Trust & Probate',
    description: 'Comprehensive estate planning and probate services to protect your assets and ensure your wishes are carried out efficiently and tax-efficiently.',
    shortDescription: 'Estate planning and probate services',
    details: [
      'Will Preparation & Review',
      'Trust Formation & Administration',
      'Probate Services',
      'Inheritance Tax Planning',
      'Estate Administration',
      'Beneficiary Support',
    ],
    icon: Scale,
  },
]

export const serviceImageMap: Record<string, string> = {
  tax: '/tax.png',
  bookkeeping: '/book%20keeping.png',
  payroll: '/payroll.png',
  management: '/accounts.png',
  advisory: '/advisory.png',
  formation: '/company%20formation.png',
  'vat-investigation': 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
  'self-assessment': 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
  'wills-trust-probate': '/will.png',
}

export function getServiceImage(id: string) {
  return serviceImageMap[id] ?? 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800'
}

const londonAreas = {
  'Central London': ['Soho', 'Mayfair', 'Marylebone', 'Paddington', 'Knightsbridge'],
  'East London': ['Stratford', 'Canary Wharf', 'Romford', 'Ilford', 'Barking', 'Dagenham'],
  'West London': ['Ealing', 'Hounslow', 'Hillingdon', 'Brentford', 'Hammersmith'],
  'North London': ['Camden', 'Islington', 'Enfield', 'Barnet', 'Haringey'],
  'South London': ['Croydon', 'Bromley', 'Sutton', 'Merton', 'Wandsworth', 'Lewisham'],
}

export function Services() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <PageHero
        backgroundImage={SERVICES_HERO_IMAGE}
        title={
          <AnimatedText
            as="h1"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            highlightWords={['Services']}
            start="top 90%"
            stagger={0.03}
          >
            Our Services
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
            Comprehensive accounting and tax solutions designed to help your business thrive.
          </AnimatedText>
        }
      />

      {/* Client Types Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-4"
              highlightWords={['Serve']}
              start="top 85%"
              stagger={0.02}
            >
              Who We Serve
            </AnimatedText>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored accounting solutions for diverse business types and structures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => {
              const Icon = client.icon
              return (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700/50 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{client.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{client.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Google Rating & Trust Section */}
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="elfsight-app-45df810a-1bcc-4a55-b35a-24a88fd717d7"
              data-elfsight-app-lazy
            />
          </motion.div>
        </Container>
      </section>

      {/* Onboarding Process Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-4"
              highlightWords={['Process']}
              start="top 85%"
              stagger={0.02}
            >
              Our Onboarding Process
            </AnimatedText>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three simple steps to get started with ProfitWise Accountants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {onboardingSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative text-center"
                >
                  {/* Connecting Line (desktop only) */}
                  {index < onboardingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/20 z-0" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-4 border-white shadow-lg mb-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-1">{step.number}</div>
                        <Icon className="h-8 w-8 text-primary mx-auto" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-4"
              highlightWords={['Services']}
              start="top 85%"
              stagger={0.02}
            >
              Our Services
            </AnimatedText>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/70 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">{service.shortDescription}</p>
                    <Button
                      to={`/services/${service.id}`}
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary p-2"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase mb-6">
              <MapPin className="h-4 w-4" />
              <span>Coverage Area</span>
            </div>
            <AnimatedText
              as="h2"
              className="text-3xl sm:text-4xl font-bold !text-slate-900 mb-4"
              highlightWords={['Greater London']}
              start="top 85%"
              stagger={0.02}
            >
              Areas We Serve
            </AnimatedText>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proudly serving businesses across Greater London
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(londonAreas).map(([region, areas], index) => (
              <motion.div
                key={region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b-2 border-primary/20">
                  {region}
                </h3>
                <ul className="space-y-2">
                  {areas.map((area) => (
                    <li key={area} className="text-slate-600 text-sm">
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 text-slate-600"
          >
            <p>Can't find your area? <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a> - we serve all of Greater London</p>
          </motion.div>
        </Container>
      </section>

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
