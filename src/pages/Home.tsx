import { HeroCarousel } from '@/components/HeroCarousel'
import { HeroContent } from '@/components/Hero'
import { ServiceHighlights } from '@/components/ServiceHighlights'
import { Testimonials } from '@/components/Testimonials'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import { Pricing } from '@/components/Pricing'
import { Link } from 'react-router-dom'

export function Home() {
  const carouselSlides = [
    {
      id: 'hero-1',
      backgroundImage: 'https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=1920',
      content: <HeroContent />,
      showOverlay: true
    },
    {
      id: 'image-1',
      backgroundImage: '/1.png',
      content: <div></div>,
      showOverlay: false
    },
    {
      id: 'image-2',
      backgroundImage: '/2.png',
      content: <div></div>,
      showOverlay: false
    },
    {
      id: 'image-3',
      backgroundImage: '/3.png',
      content: <div></div>,
      showOverlay: false
    },
    {
      id: 'image-4',
      backgroundImage: '/4.png',
      content: <div></div>,
      showOverlay: false
    },
    {
      id: 'image-5',
      backgroundImage: '/5.png',
      content: <div></div>,
      showOverlay: false
    },
    {
      id: 'image-6',
      backgroundImage: '/6.png',
      content: <div></div>,
      showOverlay: false,
      // onClickLink: '/about#what-sets-us-apart'
    },
  ]

  return (
    <div className="flex flex-col">
      <HeroCarousel slides={carouselSlides} autoPlay={true} autoPlayInterval={10000} />
      
      {/* Mobile-only description section */}
      <section className="block sm:hidden bg-transparent py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Your Trusted <span className="text-primary">Financial Partner</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed text-center">
            We help small and medium businesses navigate complex financial landscapes. 
            Get proactive advice, accurate bookkeeping, and strategic tax planning tailored to your goals.
          </p>
        </div>
      </section>
      
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
