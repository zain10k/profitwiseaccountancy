import { ExternalLink } from 'lucide-react'

export const partners = [
  {
    name: 'Croner-i',
    url: 'https://www.croneri.co.uk/',
    domain: 'croneri.co.uk',
    description: 'Leading provider of information, software, and services for tax, audit, and accounting professionals.',
    logo: '/croner-i.svg'
  },
  {
    name: 'QuickBooks',
    url: 'https://quickbooks.intuit.com/uk/',
    domain: 'quickbooks.intuit.com',
    description: 'Smart, simple online accounting software for small businesses.',
    logo: '/quickbooks.png'
  },
  {
    name: 'Sage',
    url: 'https://www.sage.com/en-gb/',
    domain: 'sage.com',
    description: 'Integrated accounting, payroll, and payment systems.',
    logo: '/sage.png'
  },
  {
    name: 'Xero',
    url: 'https://www.xero.com/uk/',
    domain: 'xero.com',
    description: 'Beautiful accounting software that helps small businesses thrive.',
    logo: '/xero.png'
  },
  {
    name: 'TaxCalc',
    url: 'https://www.taxcalc.com/',
    domain: 'taxcalc.com',
    description: 'Award-winning tax return and accounts production software.',
    logo: '/taxcalc.jpg'
  },
  {
    name: 'Nest Pensions',
    url: 'https://www.nestpensions.org.uk/',
    domain: 'nestpensions.org.uk',
    description: 'Workplace pension scheme set up by the government.',
    logo: '/nest-pension.png'
  },
  {
    name: 'Moneysoft',
    url: 'https://moneysoft.co.uk/',
    domain: 'moneysoft.co.uk',
    description: 'Payroll, HR, and accounting software solutions.',
    logo: '/moneysoft.png'
  },
  {
    name: 'Smart Pension',
    url: 'https://www.smartpension.co.uk/',
    domain: 'smartpension.co.uk',
    description: 'Technologically advanced workplace pension provider.',
    logo: '/smart-pension.png'
  },
  {
    name: 'Institute of Financial Accountants',
    url: 'https://www.ifa.org.uk/',
    domain: 'ifa.org.uk',
    description: 'Internationally recognized professional accountancy membership body.',
    logo: '/ifa.png',
    className: 'scale-[2.5]'
  }
]

export function Partners() {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div className="bg-transparent py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Our <span className="text-primary">Partners</span></h1>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We collaborate with industry-leading software providers and organizations to ensure we deliver the highest quality service to our clients.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="py-16 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center bg-white p-8 rounded-xl border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-white rounded-lg">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${partner.className || ''}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {partner.name}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-center text-slate-600">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}