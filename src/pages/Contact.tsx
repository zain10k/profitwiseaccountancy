import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <div className="bg-slate-50/60 min-h-screen backdrop-blur-sm py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Section: Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact <span className="text-primary">Details</span></h2>
              <div className="w-20 h-1 bg-primary mb-4"></div>
              <p className="text-slate-600 mb-8">
                Connect with us by phone, email, or contact form below.
              </p>
            </div>

            {/* Company Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-2 border-primary/20">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/149736/pexels-photo-149736.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="ProfitWise Accountants office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <p className="font-bold text-primary mb-4 text-lg">ProfitWise Accountants</p>
                <div className="space-y-3 text-slate-700">
                  <p>
                    <span className="font-medium">Address:</span><br />
                    12 Swale Close<br />
                    Aveley<br />
                    SOUTH OCKENDON<br />
                    Essex, RM15 4LX
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span>{' '}
                    <a href="tel:+442012345678" className="underline hover:text-primary">
                      +44 (0) 20 1234 5678
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:info@profitwiseaccountants.com" className="underline hover:text-primary">
                      info@profitwiseaccountants.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact <span className="text-primary">Form</span></h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <ContactForm />
            </div>
          </div>

          {/* Right Section: Find Us */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Find <span className="text-primary">Us</span></h2>
              <div className="w-20 h-1 bg-primary mb-4"></div>
              <p className="text-slate-600 mb-8">
                Use the map below to see our office location and get directions by car, bus, bike or on foot.
              </p>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
              <div className="w-full h-[600px]">
                <iframe
                  src="https://www.google.com/maps?q=12+Swale+Close,+Aveley,+South+Ockendon+RM15+4LX&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
