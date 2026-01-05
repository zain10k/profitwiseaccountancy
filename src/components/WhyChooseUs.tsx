import { Check, ShieldCheck, Clock, Award } from 'lucide-react'

const features = [
  {
    name: 'Professional & Certified',
    description: 'We are qualified financial accountants, AFA - MIPA, with years of experience helping businesses succeed.',
    icon: Award,
  },
  {
    name: 'Proactive Tax Planning',
    description: 'We don’t just record history; we help you shape your future with strategic tax efficiency planning.',
    icon: ShieldCheck,
  },
  {
    name: 'Responsive Support',
    description: 'We pride ourselves on fast response times. No more waiting days for a reply to your urgent questions.',
    icon: Clock,
  },
  {
    name: 'Modern Tech Stack',
    description: 'We use the latest cloud accounting software (Xero, QuickBooks) to give you real-time financial insights.',
    icon: Check,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-primary">Why Choose ProfitWise</h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-4xl">
              A Better Way to Manage Your Business Finances
            </p>
            <p className="mt-4 text-xl text-slate-500">
              We combine traditional accounting expertise with modern technology to deliver a superior service experience.
            </p>
            <div className="mt-6 w-24 h-1 bg-primary"></div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
            <img 
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional accounting services" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-slate-900">{feature.name}</p>
                </dt>
                <dd className="ml-16 mt-2 text-base text-slate-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

