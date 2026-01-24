import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
    color: 'from-blue-500 to-cyan-500'
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
    mostPopular: true,
    color: 'from-amber-500 to-orange-500'
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
    mostPopular: false,
    color: 'from-purple-500 to-pink-500'
  },
]

export function Pricing() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 })

  return (
    <section className="relative bg-white py-20 sm:py-32 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Transparent <span className="text-primary">Pricing Packages</span>
          </h2>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-orange-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your business stage. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PricingCardProps {
  tier: typeof tiers[0]
  index: number
}

function PricingCard({ tier, index }: PricingCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={cardRef}
      className={`relative group h-full ${tier.mostPopular ? 'lg:-mt-4' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className={`relative bg-white rounded-3xl shadow-sm border-2 transition-all duration-500 h-full flex flex-col overflow-hidden ${
        tier.mostPopular 
          ? 'border-primary shadow-xl shadow-primary/10 lg:scale-105' 
          : 'border-slate-200 hover:border-primary/30 hover:shadow-xl'
      }`}>
        
        {/* Gradient Background on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

        {/* Most Popular Badge */}
        {tier.mostPopular && (
          <div className="absolute top-0 right-0 -mr-1 -mt-1">
            <div className={`bg-gradient-to-r ${tier.color} text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl shadow-lg`}>
              Most Popular
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="relative p-8 sm:p-10 flex-grow flex flex-col">
          
          {/* Tier Name */}
          <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
            {tier.name}
          </h3>
          
          {/* Description */}
          <p className="text-slate-600 mb-6">
            {tier.description}
          </p>

          {/* Price */}
          <div className="mb-8">
            <span className="text-5xl font-bold text-slate-900 tracking-tight">
              {tier.price}
            </span>
            {tier.period && (
              <span className="text-lg text-slate-500 ml-1">
                {tier.period}
              </span>
            )}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className={`w-full py-3.5 px-6 rounded-full text-center font-semibold transition-all duration-300 mb-8 ${
              tier.mostPopular
                ? `bg-gradient-to-r ${tier.color} text-white hover:shadow-lg hover:scale-105`
                : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-105'
            }`}
          >
            {tier.cta}
          </Link>

          {/* Features */}
          <div className="mt-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              What's included
            </h4>
            <ul className="space-y-3">
              {tier.features.map((feature, i) => (
                <motion.li 
                  key={feature} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.15 + i * 0.05 + 0.2
                  }}
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mt-0.5`}>
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-slate-600">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-400 italic">
              *Conditions apply
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className={`h-1 bg-gradient-to-r ${tier.color} w-full`} />
      </div>
    </motion.div>
  )
}
