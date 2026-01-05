import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/partners', label: 'Partners' },
  ]

  const handleNavClick = (path: string) => {
    // If clicking on the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'bg-slate-900 text-slate-300'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
            }}
            className="flex items-center pl-16 pr-16 py-8"
          >
            <img 
              src="/Logo.svg" 
              alt="ProfitWise Accountants" 
              className="h-14 w-auto"
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
                    : 'text-slate-300'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Get a Free Consultation
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={cn(
                  'block text-base font-medium transition-colors hover:text-primary',
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-slate-300'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

