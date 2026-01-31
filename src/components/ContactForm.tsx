import { useState, useRef, useEffect } from 'react'
import { CheckCircle2, Loader2, ChevronDown } from 'lucide-react'
import { allServices } from '@/pages/Services'

const contactMethodOptions = [
  { value: 'either', label: 'No Preference' },
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
] as const

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    contactMethod: 'either',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [serviceOpen, setServiceOpen] = useState(false)
  const [contactMethodOpen, setContactMethodOpen] = useState(false)
  const serviceRef = useRef<HTMLDivElement>(null)
  const contactMethodRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeService = (e: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target as Node)) setServiceOpen(false)
    }
    const closeContactMethod = (e: MouseEvent) => {
      if (contactMethodRef.current && !contactMethodRef.current.contains(e.target as Node)) setContactMethodOpen(false)
    }
    document.addEventListener('mousedown', closeService)
    document.addEventListener('mousedown', closeContactMethod)
    return () => {
      document.removeEventListener('mousedown', closeService)
      document.removeEventListener('mousedown', closeContactMethod)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://formspree.io/f/xqeajazr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          contactMethod: 'either',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const isFieldFilled = (fieldName: string) => {
    return formData[fieldName as keyof typeof formData].length > 0
  }

  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl shadow-black/20 p-8 lg:p-10">
      {/* Ambient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-primary hover:text-primary/80 font-semibold underline transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name - Required */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                className="peer w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-transparent focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all pointer-events-none ${
                  focusedField === 'name' || isFieldFilled('name')
                    ? '-top-2.5 text-xs bg-slate-900 px-2 text-primary font-semibold'
                    : 'top-3.5 text-slate-300'
                }`}
              >
                Name <span className="text-primary">*</span>
              </label>
            </div>

            {/* Phone - Required */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder=" "
                className="peer w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-transparent focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
              />
              <label
                htmlFor="phone"
                className={`absolute left-4 transition-all pointer-events-none ${
                  focusedField === 'phone' || isFieldFilled('phone')
                    ? '-top-2.5 text-xs bg-slate-900 px-2 text-primary font-semibold'
                    : 'top-3.5 text-slate-300'
                }`}
              >
                Phone Number <span className="text-primary">*</span>
              </label>
            </div>

            {/* Email - Optional */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                className="peer w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-transparent focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all pointer-events-none ${
                  focusedField === 'email' || isFieldFilled('email')
                    ? '-top-2.5 text-xs bg-slate-900 px-2 text-slate-300 font-semibold'
                    : 'top-3.5 text-slate-300'
                }`}
              >
                Email <span className="text-slate-500 text-xs">(Optional)</span>
              </label>
            </div>

            {/* Company Name - Optional */}
            <div className="relative">
              <input
                type="text"
                id="company"
                name="company"
                placeholder=" "
                className="peer w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-transparent focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                value={formData.company}
                onChange={handleChange}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
              />
              <label
                htmlFor="company"
                className={`absolute left-4 transition-all pointer-events-none ${
                  focusedField === 'company' || isFieldFilled('company')
                    ? '-top-2.5 text-xs bg-slate-900 px-2 text-slate-300 font-semibold'
                    : 'top-3.5 text-slate-300'
                }`}
              >
                Company Name <span className="text-slate-500 text-xs">(Optional)</span>
              </label>
            </div>

            {/* Service Interest - Optional (custom dropdown opens below, label always floated to avoid overlap) */}
            <div className="relative" ref={serviceRef}>
              <label
                htmlFor="service"
                className="absolute left-4 -top-2.5 text-xs bg-slate-900 px-2 text-slate-300 font-semibold transition-all pointer-events-none z-[1]"
              >
                Service Interest <span className="text-slate-500 text-xs">(Optional)</span>
              </label>
              <button
                type="button"
                id="service"
                aria-haspopup="listbox"
                aria-expanded={serviceOpen}
                aria-label="Service interest (optional)"
                onClick={() => !(status === 'submitting') && setServiceOpen((o) => !o)}
                onFocus={() => setFocusedField('service')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
                className="w-full px-4 pt-5 pb-3.5 pr-10 bg-white/10 border border-white/30 rounded-lg text-left text-white focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none appearance-none cursor-pointer disabled:opacity-50 flex items-center justify-between"
              >
                <span className={formData.service ? 'text-white' : 'text-slate-400'}>
                  {formData.service
                    ? allServices.find((s) => s.id === formData.service)?.title ?? 'Select a service'
                    : 'Select a service (Optional)'}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${serviceOpen ? 'rotate-180' : ''}`} />
              </button>
              <input type="hidden" name="service" value={formData.service} />
              {serviceOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full mt-1 z-50 max-h-60 overflow-auto rounded-lg border border-white/30 bg-slate-800/95 backdrop-blur-lg shadow-xl py-1"
                >
                  <li
                    role="option"
                    aria-selected={formData.service === ''}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, service: '' }))
                      setServiceOpen(false)
                    }}
                    className="px-4 py-2.5 text-slate-400 hover:bg-white/10 cursor-pointer"
                  >
                    Select a service (Optional)
                  </li>
                  {allServices.map((service) => (
                    <li
                      key={service.id}
                      role="option"
                      aria-selected={formData.service === service.id}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, service: service.id }))
                        setServiceOpen(false)
                      }}
                      className="px-4 py-2.5 text-white hover:bg-white/10 cursor-pointer"
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Preferred Contact Method - Optional (custom dropdown opens below, label always floated) */}
            <div className="relative" ref={contactMethodRef}>
              <label
                htmlFor="contactMethod"
                className="absolute left-4 -top-2.5 text-xs bg-slate-900 px-2 text-slate-300 font-semibold transition-all pointer-events-none z-[1]"
              >
                Preferred Contact Method <span className="text-slate-500 text-xs">(Optional)</span>
              </label>
              <button
                type="button"
                id="contactMethod"
                aria-haspopup="listbox"
                aria-expanded={contactMethodOpen}
                aria-label="Preferred contact method (optional)"
                onClick={() => !(status === 'submitting') && setContactMethodOpen((o) => !o)}
                onFocus={() => setFocusedField('contactMethod')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
                className="w-full px-4 pt-5 pb-3.5 pr-10 bg-white/10 border border-white/30 rounded-lg text-left text-white focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none appearance-none cursor-pointer disabled:opacity-50 flex items-center justify-between"
              >
                <span className="text-white">
                  {contactMethodOptions.find((o) => o.value === formData.contactMethod)?.label ?? 'No Preference'}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${contactMethodOpen ? 'rotate-180' : ''}`} />
              </button>
              <input type="hidden" name="contactMethod" value={formData.contactMethod} />
              {contactMethodOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-full mt-1 z-50 overflow-auto rounded-lg border border-white/30 bg-slate-800/95 backdrop-blur-lg shadow-xl py-1"
                >
                  {contactMethodOptions.map((opt) => (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={formData.contactMethod === opt.value}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, contactMethod: opt.value }))
                        setContactMethodOpen(false)
                      }}
                      className="px-4 py-2.5 text-white hover:bg-white/10 cursor-pointer"
                    >
                      {opt.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Message - Required */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder=" "
                className="peer w-full px-4 py-3.5 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-transparent focus:bg-white/15 focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-y min-h-[150px]"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                disabled={status === 'submitting'}
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all pointer-events-none ${
                  focusedField === 'message' || isFieldFilled('message')
                    ? '-top-2.5 text-xs bg-slate-900 px-2 text-primary font-semibold'
                    : 'top-3.5 text-slate-300'
                }`}
              >
                Message <span className="text-primary">*</span>
              </label>
            </div>

            {status === 'error' && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg backdrop-blur-sm">
                <p className="text-sm">
                  There was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-lg hover:brightness-110 transition-all shadow-xl shadow-primary/20 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <CheckCircle2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </>
              )}
            </button>

            <p className="text-center text-slate-400 text-xs mt-4">
              * Required fields. We typically respond within 24 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
