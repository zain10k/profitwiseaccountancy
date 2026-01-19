import { HeroModern } from '@/components/HeroModern'
import { ServicesScroll } from '@/components/ServicesScroll'
import { Testimonials } from '@/components/Testimonials'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Pricing } from '@/components/Pricing'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="flex flex-col">
      <HeroModern />
      
      {/* Scroll-driven services presentation */}
      <ServicesScroll />
      
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      
      {/* Final CTA Section */}
      <section className="bg-primary py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join the hundreds of businesses who trust ProfitWise Accountants to handle their accounting, tax, and payroll needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-slate-50 hover:scale-105 transition-all"
              >
                Book Your Free Consultation
              </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
