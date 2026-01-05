import { Hero } from '@/components/Hero'
import { ServiceHighlights } from '@/components/ServiceHighlights'
import { Testimonials } from '@/components/Testimonials'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Pricing } from '@/components/Pricing'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      
      {/* Final CTA Section */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join the hundreds of businesses who trust ProfitWise Accountants to handle their accounting, tax, and payroll needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-slate-100 transition-colors"
              >
                Book Your Free Consultation
              </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
