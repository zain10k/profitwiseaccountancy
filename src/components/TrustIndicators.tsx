import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, TrendingUp, Shield } from 'lucide-react'

const stats = [
  {
    id: 1,
    value: '500+',
    label: 'Clients Served',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    value: '15+',
    label: 'Years Experience',
    icon: Award,
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 3,
    value: '£2M+',
    label: 'Tax Saved',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 4,
    value: '100%',
    label: 'Compliance Rate',
    icon: Shield,
    color: 'from-purple-500 to-pink-500'
  }
]

export function TrustIndicators() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section className="relative py-16 sm:py-20 bg-section-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Businesses <span className="text-primary">Across the UK</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-primary/50 transition-all duration-500 overflow-hidden group-hover:shadow-xl group-hover:shadow-primary/10">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-full h-full text-white" />
                </div>

                {/* Value */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-sm sm:text-base text-slate-400 font-medium">
                  {stat.label}
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm uppercase tracking-widest text-slate-500 mb-6">
            Certified & Regulated
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            <div className="text-slate-400 text-sm font-semibold">AFA - MIPA</div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <div className="text-slate-400 text-sm font-semibold">HMRC Registered</div>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <div className="text-slate-400 text-sm font-semibold">FCA Compliant</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
