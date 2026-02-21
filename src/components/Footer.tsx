import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const location = useLocation()

  const handleLinkClick = useCallback((path: string) => {
    const basePath = path.split('#')[0]
    if (location.pathname === basePath && !path.includes('#')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-900 font-light">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Link 
              to="/" 
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              }}
              className="block"
            >
              <img 
                src="/Logo.svg" 
                alt="ProfitWise Accountants" 
                className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
                loading="eager"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional accountancy and tax services dedicated to helping small and medium businesses grow and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" onClick={() => handleLinkClick('/')} className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => handleLinkClick('/about')} className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" onClick={() => handleLinkClick('/services')} className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/partners" onClick={() => handleLinkClick('/partners')} className="hover:text-primary transition-colors">Partners</Link></li>
              <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className="hover:text-primary transition-colors">Get a Quote</Link></li>
              <li><Link to="/faq" onClick={() => handleLinkClick('/faq')} className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services#tax" onClick={() => handleLinkClick('/services#tax')} className="hover:text-primary transition-colors">Tax Planning</Link></li>
              <li><Link to="/services#bookkeeping" onClick={() => handleLinkClick('/services#bookkeeping')} className="hover:text-primary transition-colors">Bookkeeping</Link></li>
              <li><Link to="/services#payroll" onClick={() => handleLinkClick('/services#payroll')} className="hover:text-primary transition-colors">Payroll & Pension</Link></li>
              <li><Link to="/services#management" onClick={() => handleLinkClick('/services#management')} className="hover:text-primary transition-colors">Management Accounts</Link></li>
              <li><Link to="/services#advisory" onClick={() => handleLinkClick('/services#advisory')} className="hover:text-primary transition-colors">Business Advisory</Link></li>
              <li><Link to="/services#formation" onClick={() => handleLinkClick('/services#formation')} className="hover:text-primary transition-colors">Company Formation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4 text-sm flex flex-col items-center md:items-start">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span className="leading-relaxed text-center md:text-left">12 Swale Close<br />Aveley, Essex<br />RM15 4LX</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>020 8507 1303</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:info@profitwiseaccountants.com" className="hover:text-white transition-colors">info@profitwiseaccountants.com</a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Linkedin className="h-5 w-5 shrink-0 text-primary" />
                <a 
                  href="https://www.linkedin.com/company/profitwiseaccountants/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} ProfitWise Accountants. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1" aria-label="Legal">
            <Link to="/privacy" onClick={() => handleLinkClick('/privacy')} className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" onClick={() => handleLinkClick('/terms')} className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/cookies" onClick={() => handleLinkClick('/cookies')} className="hover:text-primary transition-colors">Cookie Policy</Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
