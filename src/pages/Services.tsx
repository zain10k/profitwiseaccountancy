import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, FileText, Users, PieChart, Briefcase, Shield, Search, FileCheck, Scale } from 'lucide-react'

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
        'Inheritance Tax Planning'
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
        'Expense Tracking'
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
        'Appeal Support'
    ],
    icon: Search,
  },
  {
    id: 'payroll',
    title: 'Payroll & Pension',
    description: 'Paying your team shouldn’t be a headache. We handle the entire payroll process, ensuring accuracy and compliance with pension regulations.',
    details: [
        'Weekly/Monthly Payslips',
        'PAYE & NIC Calculations',
        'Pension Auto Enrolment',
        'P60s & P45s',
        'CIS Returns'
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
        'Board Meeting Support'
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
        'Exit Planning'
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
        'Director Appointments'
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
        'HMRC Correspondence Handling'
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
        'Beneficiary Support'
    ],
    icon: Scale,
  }
]

export function Services() {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <div className="bg-transparent py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Our <span className="text-primary">Services</span></h1>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive accounting and tax solutions designed to help your business thrive.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {allServices.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 p-4 text-primary mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                    {service.details.map((item) => (
                        <li key={item} className="flex items-center text-slate-600">
                            <Shield className="h-5 w-5 text-primary mr-3 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="mt-10">
                    <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors">
                        Get a Quote
                    </Link>
                </div>
              </div>
              <div className="lg:w-1/2 bg-white rounded-2xl overflow-hidden border-2 border-primary/20 shadow-inner h-full min-h-[300px]">
                <img 
                  src={
                    service.id === 'tax' ? 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'bookkeeping' ? 'https://images.pexels.com/photos/5905703/pexels-photo-5905703.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'payroll' ? 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'management' ? 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'advisory' ? 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'vat-investigation' ? 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'self-assessment' ? 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    service.id === 'wills-trust-probate' ? 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800' :
                    'https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
       <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-2xl font-bold text-white mb-4">Not sure what you need?</h2>
           <p className="text-primary-foreground/90 mb-8">Schedule a free consultation and we'll help you figure out the best package for your business.</p>
           <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-slate-100 transition-colors">
             Book Free Consultation
           </Link>
        </div>
       </div>
    </div>
  )
}

