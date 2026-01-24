import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

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
    <section className="bg-white dark:bg-slate-950 py-24 border-t border-slate-100 dark:border-slate-800">
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4"
          >
            Trusted by Ambitious Founders
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Don't just take our word for it. Here's why businesses trust us with their finances.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-700 dark:text-slate-300 mb-8 text-lg leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
