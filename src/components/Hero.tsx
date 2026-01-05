import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Accepting New Clients for {new Date().getFullYear()} Tax Year
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Trusted Accountancy & Tax Services for <span className="text-primary">Growing Businesses</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We help small and medium businesses navigate complex financial landscapes. 
              Get proactive advice, accurate bookkeeping, and strategic tax planning tailored to your goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-white px-8 py-3 text-base font-semibold text-primary shadow-sm hover:bg-primary/5 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md border-4 border-primary/20">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional accountants working on financial reports"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 sm:opacity-100 lg:opacity-0 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

