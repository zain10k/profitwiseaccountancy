import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeroScene } from './HeroScene'

export function HeroModern() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900 text-white">
      <HeroScene />
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/80 pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center sm:text-left sm:items-start sm:px-12 lg:px-24">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
        >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide text-white/90">
                Premium Financial Services
            </span>
        </motion.div>

        <motion.h1 
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ y: y1 }}
        >
          <span className="block text-white">ProfitWise</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-200">
            Accountancy.
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ y: y2 }}
        >
          Elevating financial clarity for modern businesses. 
          Expert audit, tax, and advisory services tailored for growth.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:bg-slate-100 hover:shadow-lg hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Partner with us <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <Link 
            to="/services" 
            className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white border border-white/30 rounded-full backdrop-blur-sm transition-all hover:bg-white/10"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>

      {/* Drifting Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none overflow-hidden opacity-[0.03] flex select-none">
         <div className="whitespace-nowrap text-[20vw] font-bold leading-none text-white animate-marquee-ltr shrink-0">
            AUDIT • TAX • ADVISORY • GROWTH • COMPLIANCE •&nbsp;
         </div>
         <div className="whitespace-nowrap text-[20vw] font-bold leading-none text-white animate-marquee-ltr shrink-0">
            AUDIT • TAX • ADVISORY • GROWTH • COMPLIANCE •&nbsp;
         </div>
      </div>
    </div>
  )
}
