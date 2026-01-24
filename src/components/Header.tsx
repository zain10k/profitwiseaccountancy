import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/partners', label: 'Partners' },
  ]

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2 dark:bg-slate-950/80'
          : 'bg-transparent py-4'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => handleNavClick('/')}
          className="relative z-50 flex items-center"
        >
           <img 
              src="/Logo.svg" 
              alt="ProfitWise Accountants" 
              className={cn(
                "h-auto w-auto transition-all duration-300",
                isScrolled ? "h-10" : "h-12"
              )}
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === item.path
                  ? 'text-primary'
                  : isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-slate-800 dark:text-slate-100' // Darker text on transparent since bg is light-ish usually, or we need to ensure hero is light. Wait, prompt says Jeton (Dark?). 
                  // If hero is dark, text should be white. 
                  // Let's assume Hero is Dark/Colored for Jeton feel.
              )}
            >
              <span className={cn(
                 !isScrolled && "text-slate-900 font-semibold" // Force dark text if background is white-ish, OR white if hero is dark.
              )}>
                {item.label}
              </span>
            </Link>
          ))}
          <Button to="/contact" size="md" variant="primary">
            Free Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-slate-900 dark:text-white" />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled ? "text-slate-900" : "text-slate-900")} />
          )}
        </button>
      </Container>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white dark:bg-slate-950 pt-20"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={cn(
                    'text-2xl font-medium transition-colors hover:text-primary',
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-slate-900 dark:text-slate-100'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button to="/contact" size="lg" onClick={() => setIsOpen(false)}>
                Free Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
