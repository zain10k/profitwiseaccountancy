import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react'
import { PartnersStrip } from './PartnersStrip'

export function Footer() {
  const location = useLocation()

  const handleLinkClick = (path: string) => {
    // Extract the base path without hash
    const basePath = path.split('#')[0]
    // If clicking on the same page (without hash), scroll to top
    if (location.pathname === basePath && !path.includes('#')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <PartnersStrip />
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link 
              to="/" 
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              }}
              className="flex items-center"
            >
              <img 
                src="/Logo.svg" 
                alt="ProfitWise Accountants" 
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              Professional accountancy and tax services dedicated to helping small and medium businesses grow and succeed.
            </p>
            {/* <p className="text-sm font-semibold text-primary mt-2">
              We are qualified financial accountants, AFA - MIPA.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" onClick={() => handleLinkClick('/')} className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" onClick={() => handleLinkClick('/about')} className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" onClick={() => handleLinkClick('/services')} className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/partners" onClick={() => handleLinkClick('/partners')} className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#tax" onClick={() => handleLinkClick('/services#tax')} className="hover:text-white transition-colors">Tax Planning & Preparation</Link></li>
              <li><Link to="/services#bookkeeping" onClick={() => handleLinkClick('/services#bookkeeping')} className="hover:text-white transition-colors">Bookkeeping & Cloud Accounting</Link></li>
              <li><Link to="/services#vat-investigation" onClick={() => handleLinkClick('/services#vat-investigation')} className="hover:text-white transition-colors">VAT Investigation</Link></li>
              <li><Link to="/services#payroll" onClick={() => handleLinkClick('/services#payroll')} className="hover:text-white transition-colors">Payroll & Pension</Link></li>
              <li><Link to="/services#management" onClick={() => handleLinkClick('/services#management')} className="hover:text-white transition-colors">Management Accounts</Link></li>
              <li><Link to="/services#advisory" onClick={() => handleLinkClick('/services#advisory')} className="hover:text-white transition-colors">Business Advisory</Link></li>
              <li><Link to="/services#formation" onClick={() => handleLinkClick('/services#formation')} className="hover:text-white transition-colors">Company Formation & Secretarial</Link></li>
              <li><Link to="/services#self-assessment" onClick={() => handleLinkClick('/services#self-assessment')} className="hover:text-white transition-colors">Self Assessment</Link></li>
              <li><Link to="/services#wills-trust-probate" onClick={() => handleLinkClick('/services#wills-trust-probate')} className="hover:text-white transition-colors">Wills, Trust & Probate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>12 Swale Close<br />Aveley<br />SOUTH OCKENDON<br />Essex, RM15 4LX</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+44 7939 018799</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>info@profitwiseaccountants.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 shrink-0 text-primary" />
                <a 
                  href="https://www.linkedin.com/company/profitwiseaccountants/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ProfitWise Accountants. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

