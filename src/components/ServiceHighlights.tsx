import { Link } from 'react-router-dom'
import { Calculator, TrendingUp, FileText, Users, PieChart, Briefcase, Search, FileCheck, Scale, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const services = [
  {
    id: 'tax',
    title: 'Tax Planning & Returns',
    description: 'Strategic tax planning to minimize liabilities and ensure full compliance with HMRC regulations.',
    icon: Calculator,
    link: '/services#tax',
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & VAT',
    description: 'Accurate, timely bookkeeping and VAT return services using the latest cloud accounting software.',
    icon: FileText,
    link: '/services#bookkeeping',
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Complete payroll solutions including payslips, PAYE, pension contributions, and year-end reporting.',
    icon: Users,
    link: '/services#payroll',
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    description: 'Expert guidance to help you make informed decisions, improve cash flow, and grow your business.',
    icon: TrendingUp,
    link: '/services#advisory',
  },
  {
    id: 'management',
    title: 'Management Accounts',
    description: 'Regular financial reports giving you a clear picture of your business performance.',
    icon: PieChart,
    link: '/services#management',
  },
  {
    id: 'formation',
    title: 'Company Formation',
    description: 'Assistance with setting up new limited companies, including registration and initial structuring.',
    icon: Briefcase,
    link: '/services#formation',
  },
  {
    id: 'vat-investigation',
    title: 'VAT Investigation',
    description: 'Expert representation and support during HMRC VAT investigations to protect your business interests.',
    icon: Search,
    link: '/services#vat-investigation',
  },
  {
    id: 'self-assessment',
    title: 'Self Assessment',
    description: 'Expert preparation and submission of your Self Assessment tax returns with accuracy and deadline compliance.',
    icon: FileCheck,
    link: '/services#self-assessment',
  },
  {
    id: 'wills-trust-probate',
    title: 'Wills, Trust & Probate',
    description: 'Comprehensive estate planning and probate services to protect your assets and ensure tax-efficient estate administration.',
    icon: Scale,
    link: '/services#wills-trust-probate',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotationX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotationX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
}

export function ServiceHighlights() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Subtle gradient fade for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950 pointer-events-none" />
      
      {/* Optional: Allow Spline background to show through */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Comprehensive <span className="text-primary">Financial Solutions</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              We provide a full range of accounting and tax services tailored to the unique needs of your business.
            </motion.p>
          </div>
          <Link 
            to="/services" 
            className="hidden md:inline-flex items-center px-6 py-3 rounded-full bg-primary/10 backdrop-blur-lg border border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.5)]"
          >
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]"
              style={{ 
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              {/* Decorative background icon */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <service.icon className="h-32 w-32 text-primary" />
              </div>

              {/* Inner glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon container with glassmorphism */}
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm p-3 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.4)]">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-sm font-bold text-slate-300 group-hover:text-primary transition-colors duration-300"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center md:hidden">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 backdrop-blur-lg border border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
