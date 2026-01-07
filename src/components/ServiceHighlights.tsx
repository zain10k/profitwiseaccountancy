import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, FileText, Users, PieChart, Briefcase, Search, FileCheck, Scale } from 'lucide-react'

const services = [
  {
    title: 'Tax Planning & Returns',
    description: 'Strategic tax planning to minimize liabilities and ensure full compliance with HMRC regulations.',
    icon: Calculator,
    link: '/services#tax',
  },
  {
    title: 'Bookkeeping & VAT',
    description: 'Accurate, timely bookkeeping and VAT return services using the latest cloud accounting software.',
    icon: FileText,
    link: '/services#bookkeeping',
  },
  {
    title: 'Payroll Management',
    description: 'Complete payroll solutions including payslips, PAYE, pension contributions, and year-end reporting.',
    icon: Users,
    link: '/services#payroll',
  },
  {
    title: 'Business Advisory',
    description: 'Expert guidance to help you make informed decisions, improve cash flow, and grow your business.',
    icon: TrendingUp,
    link: '/services#advisory',
  },
  {
    title: 'Management Accounts',
    description: 'Regular financial reports giving you a clear picture of your business performance.',
    icon: PieChart,
    link: '/services#management',
  },
  {
    title: 'Company Formation',
    description: 'Assistance with setting up new limited companies, including registration and initial structuring.',
    icon: Briefcase,
    link: '/services#formation',
  },
  {
    title: 'VAT Investigation',
    description: 'Expert representation and support during HMRC VAT investigations to protect your business interests.',
    icon: Search,
    link: '/services#vat-investigation',
  },
  {
    title: 'Self Assessment',
    description: 'Expert preparation and submission of your Self Assessment tax returns with accuracy and deadline compliance.',
    icon: FileCheck,
    link: '/services#self-assessment',
  },
  {
    title: 'Wills, Trust & Probate',
    description: 'Comprehensive estate planning and probate services to protect your assets and ensure tax-efficient estate administration.',
    icon: Scale,
    link: '/services#wills-trust-probate',
  },
]

export function ServiceHighlights() {
  return (
    <section className="bg-transparent py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive <span className="text-primary">Accounting Solutions</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-4 text-lg text-slate-600">
            We provide a full range of accounting and tax services tailored to the unique needs of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group rounded-2xl border-2 border-slate-200 bg-white overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={
                    service.title.includes('Tax') ? 'https://images.pexels.com/photos/6801876/pexels-photo-6801876.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('Bookkeeping') ? 'https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('Payroll') ? 'https://images.pexels.com/photos/3184321/pexels-photo-3184321.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('Advisory') ? 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('Management') ? 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('VAT Investigation') ? 'https://images.pexels.com/photos/6801876/pexels-photo-6801876.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('Self Assessment') ? 'https://images.pexels.com/photos/6801876/pexels-photo-6801876.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    service.title.includes('Wills') ? 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600' :
                    'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Learn more <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

