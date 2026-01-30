import { Calculator, TrendingUp, FileText, Users, PieChart, Briefcase, Shield, Search, FileCheck, Scale } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/PageHero'
import { motion } from 'framer-motion'

/** Unique hero image - calculator/desk (no people). Not used elsewhere. */
const SERVICES_HERO_IMAGE = 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920'

const allServices = [
  {
    id: 'tax',
    title: 'Tax Planning & Preparation',
    description: 'We go beyond simple compliance. Our proactive tax planning strategies help you minimize liability while ensuring you meet all HMRC obligations.',
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

const serviceImageMap: Record<string, string> = {
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

function getServiceImage(id: string) {
  return serviceImageMap[id] ?? 'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800'
}

export function Services() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
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

      {/* Services List */}
      <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <Container className="space-y-24">
          {allServices.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            >
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-4 text-primary mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <AnimatedText
                  as="p"
                  className="text-lg text-slate-600 mb-8 leading-relaxed"
                  mode="word"
                  start="top 85%"
                  delay={0.2}
                >
                  {service.description}
                </AnimatedText>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {service.details.map((item, idx) => (
                    <motion.li
                      key={item}
                      className="flex items-center text-slate-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                    >
                      <Shield className="h-5 w-5 text-primary mr-3 shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button to="/contact" variant="primary" size="md">
                    Get a Quote
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 bg-white rounded-2xl overflow-hidden border-2 border-primary/20 shadow-inner h-full min-h-[300px]">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      {/* Dark accent: Need a tailored solution? */}
      <section className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-transparent pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
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
              highlightWords={['solution']}
              start="top 85%"
              stagger={0.025}
            >
              Need a tailored solution?
            </AnimatedText>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Every business is different. Tell us your goals and we'll put together a package that fits.
            </p>
            <Button
              to="/contact"
              className="bg-primary text-primary-foreground hover:brightness-110 shadow-lg border-none text-lg h-14 px-10"
            >
              Get in Touch
            </Button>
          </motion.div>
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
