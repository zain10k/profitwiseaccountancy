// import { Link } from 'react-router-dom' // Not currently used
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-slate-100 dark:bg-slate-900 rounded-full blur-3xl opacity-50" />
      </div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-900 px-4 py-1.5 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Accepting New Clients for {new Date().getFullYear()}
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
            Financial Clarity <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-600">
              For Your Future.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            ProfitWise helps ambitious businesses navigate complex financial landscapes with proactive advice, precision bookkeeping, and strategic tax planning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start lg:items-start">
            <Button to="/contact" size="lg" className="shadow-xl shadow-primary/20">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-500 font-medium">
             <div className="flex items-center gap-2">
               <CheckCircle2 className="h-4 w-4 text-primary" />
               <span>HMRC Compliant</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 className="h-4 w-4 text-primary" />
               <span>Xero & QuickBooks Certified</span>
             </div>
          </div>
        </motion.div>

        {/* Visual Content - Jeton Style Floating Cards */}
        <div className="relative hidden lg:block h-[600px] w-full">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
           >
              {/* Main Card */}
              <div className="absolute top-10 right-10 w-[380px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 p-6 z-20">
                 <div className="flex items-center justify-between mb-8">
                    <div>
                       <div className="text-sm text-slate-500">Total Revenue</div>
                       <div className="text-2xl font-bold text-slate-900 dark:text-white">£1,245,000</div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">+12%</div>
                 </div>
                 <div className="h-32 bg-slate-50 dark:bg-slate-800 rounded-lg w-full mb-4 flex items-end justify-between px-2 pb-2 gap-1">
                    {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                      <div key={i} className="w-full bg-primary/20 rounded-sm" style={{ height: `${h}%` }}></div>
                    ))}
                 </div>
                 <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                       <span className="text-slate-500">Tax Saved</span>
                       <span className="font-semibold text-slate-900 dark:text-white">£45,200</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-primary w-[75%]"></div>
                    </div>
                 </div>
              </div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 z-30 flex items-center gap-4"
              >
                 <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    <CheckCircle2 className="h-6 w-6" />
                 </div>
                 <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Payroll Processed</div>
                    <div className="text-xs text-slate-500">Just now</div>
                 </div>
              </motion.div>
              
               {/* Floating Element 3 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-20 left-20 bg-slate-900 text-white p-5 rounded-xl shadow-2xl z-10 w-48"
              >
                 <div className="text-xs text-slate-400 mb-1">Upcoming Tax Deadline</div>
                 <div className="text-lg font-bold">Jan 31</div>
                 <div className="mt-2 w-full bg-slate-800 h-1.5 rounded-full">
                    <div className="bg-amber-500 h-1.5 rounded-full w-[80%]"></div>
                 </div>
              </motion.div>
           </motion.div>
        </div>
      </Container>
    </section>
  )
}
