import { Star } from 'lucide-react'

const testimonials = [
  {
    content: "ProfitWise Accountants have been instrumental in our growth. Their proactive advice and attention to detail saved us significant money on taxes last year.",
    author: "Sarah Jenkins",
    role: "Director, Creative Solutions Ltd",
    rating: 5
  },
  {
    content: "Moving to ProfitWise was the best decision we made. They handled our transition to Xero seamlessly and the ongoing support is fantastic.",
    author: "David Chen",
    role: "Founder, TechStart Inc",
    rating: 5
  },
  {
    content: "Professional, responsive, and truly knowledgeable. They don't just crunch numbers; they explain what they mean for my business.",
    author: "Emma Thompson",
    role: "Owner, Thompson Retail",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="bg-transparent py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-4 text-lg text-slate-600">
            Don't just take our word for it. Here's why businesses trust us with their finances.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border-2 border-slate-100 hover:border-primary transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-slate-900 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

