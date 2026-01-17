import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Starter',
    price: 'From £99',
    period: '/month',
    description: 'Perfect for sole traders and freelancers.',
    features: [
      'Self Assessment Tax Return',
      'Annual Accounts',
      'Xero/QuickBooks Subscription',
      'Email Support',
      'Quarterly Review',
    ],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Growth',
    price: 'From £199',
    period: '/month',
    description: 'Ideal for small growing limited companies.',
    features: [
      'Everything in Starter',
      'Corporation Tax Return',
      'VAT Returns',
      'Director\'s Payroll',
      'Monthly Management Reports',
      'Priority Phone Support',
    ],
    cta: 'Get Started',
    mostPopular: false,
  },
  {
    name: 'Premium',
    price: 'Custom',
    period: '',
    description: 'For established businesses needing full support.',
    features: [
      'Everything in Growth',
      'Dedicated Account Manager',
      'Tax Planning Strategy',
      'Cash Flow Forecasting',
      'Budgeting & Variance Analysis',
      'Unlimited Advisory',
    ],
    cta: 'Contact Us',
    mostPopular: true,
  },
]

export function Pricing() {
  return (
    <section className="bg-transparent py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-center sm:text-4xl">
            Transparent <span className="text-primary">Pricing Packages</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-5 text-xl text-slate-500 sm:text-center">
            Choose a plan that fits your business stage. No hidden fees.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg shadow-sm divide-y divide-slate-200 border bg-white flex flex-col ${
                tier.mostPopular ? 'border-primary ring-2 ring-primary relative' : 'border-slate-200'
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-full flex justify-end">
                   <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</span>
                </div>
              )}
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-slate-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-slate-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                  <span className="text-base font-medium text-slate-500">{tier.period}</span>
                </p>
                <Link
                  to="/contact"
                  className={`mt-8 block w-full rounded-md border border-transparent py-2 text-center text-sm font-semibold shadow-sm hover:bg-opacity-90 ${
                    tier.mostPopular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-primary/10 text-primary hover:bg-primary/20'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8 flex-1 flex flex-col justify-end">
                <h3 className="text-xs font-medium uppercase tracking-wide text-slate-900">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm text-slate-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-slate-400 italic">*Conditions apply</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

