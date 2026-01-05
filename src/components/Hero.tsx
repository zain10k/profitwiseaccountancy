import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function HeroContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mt-8 sm:mt-12">
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Accepting New Clients for {new Date().getFullYear()} Tax Year
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-lg">
          Trusted Accountancy & Tax Services for <span className="text-primary">Growing Businesses</span>
        </h1>
        <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          We help small and medium businesses navigate complex financial landscapes. 
          Get proactive advice, accurate bookkeeping, and strategic tax planning tailored to your goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  )
}

// Keep the old Hero component for backward compatibility if needed
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent min-h-[60vh] flex items-center justify-center pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      <HeroContent />
    </section>
  )
}

