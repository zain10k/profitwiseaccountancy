import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const tickingRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset
          setIsScrolled(scrollY > 50)
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = useMemo(
    () => [
      { path: '/', label: 'Home' },
      { path: '/services', label: 'Services' },
      { path: '/about', label: 'About' },
      { path: '/partners', label: 'Partners' },
    ],
    []
  )

  const handleNavClick = useCallback(
    (path: string) => {
      if (location.pathname === path) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      setIsOpen(false)
    },
    [location.pathname]
  )

  return (
    <motion.header
      layout
      initial={false}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-slate-950/30 border-b border-slate-200/60 dark:border-slate-700/50 py-5 md:py-6'
          : 'bg-transparent py-4 md:py-5'
      )}
    >
      <Container className="relative flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4 md:items-center">
        {/* Logo - left aligned */}
        <Link
          to="/"
          onClick={() => handleNavClick('/')}
          className="relative z-50 flex items-center justify-start"
        >
          <motion.img
            src="/Logo.svg"
            alt="ProfitWise Accountants"
            className={cn(
              'h-auto w-auto transition-all duration-300',
              isScrolled ? 'h-11 md:h-12' : 'h-10 md:h-11'
            )}
            initial={false}
            animate={{
              scale: isScrolled ? 1.05 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation - centered (links only) */}
        <nav className="hidden md:flex items-center justify-center gap-1 md:gap-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path
            return (
              <motion.div
                key={item.path}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }}
                className="relative"
              >
                <Link
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={cn(
                    'relative block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-primary'
                      : isScrolled
                        ? 'text-slate-900 hover:text-primary dark:text-slate-200 dark:hover:text-primary'
                        : 'text-white hover:text-primary dark:text-white dark:hover:text-primary'
                  )}
                  style={{
                    textShadow:
                      '0 1px 2px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.2), 0 6px 16px rgba(0,0,0,0.25)',
                  }}
                >
                  {/* Hover background pill - behind text */}
                  <motion.span
                    className="absolute inset-0 z-0 rounded-lg bg-primary/10 dark:bg-primary/15"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                  />
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.span>
                  {/* Active indicator bar */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-1 left-1/2 z-10 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Free Consultation - right aligned (no shadow) */}
        <div className="hidden md:flex items-center justify-end">
          <motion.div
            initial={false}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'rounded-full ring-2',
              isScrolled ? 'ring-slate-200/80 dark:ring-slate-600/50' : 'ring-slate-200/40 dark:ring-slate-600/40'
            )}
          >
            <Button to="/contact" size="md" variant="primary" className="shadow-none">
              Free Consultation
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
            className="relative z-50 flex items-center justify-end p-2.5 rounded-lg md:hidden transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className={cn('h-6 w-6', isScrolled ? 'text-slate-900 dark:text-slate-200' : 'text-white dark:text-white')} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className={cn('h-6 w-6', isScrolled ? 'text-slate-900 dark:text-slate-200' : 'text-white dark:text-white')} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </Container>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md dark:bg-slate-900/95 pt-24"
          >
            <motion.nav
              className="flex flex-col items-center justify-center gap-2 px-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: -10 },
                    }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={cn(
                        'block w-full rounded-xl py-4 text-center text-lg font-medium transition-colors',
                        isActive
                          ? 'text-primary bg-primary/10 dark:bg-primary/15'
                          : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -10 },
                }}
                className="mt-4"
              >
                <Button to="/contact" size="lg" onClick={() => setIsOpen(false)}>
                  Free Consultation
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
