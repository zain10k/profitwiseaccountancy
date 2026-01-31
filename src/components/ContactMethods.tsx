import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    content: '+44 7939 018799',
    subtext: 'Mon-Fri, 9am-6pm',
    href: 'tel:+447939018799',
    isExternal: false,
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@profitwiseaccountants.com',
    subtext: '24hr response time',
    href: 'mailto:info@profitwiseaccountants.com',
    isExternal: false,
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '12 Swale Close, Aveley',
    subtext: 'Essex, RM15 4LX',
    href: 'https://www.google.com/maps?q=12+Swale+Close,+Aveley,+South+Ockendon+RM15+4LX',
    isExternal: true,
  },
  {
    icon: Linkedin,
    title: 'Connect',
    content: 'Follow us on LinkedIn',
    subtext: 'Stay updated',
    href: 'https://www.linkedin.com/company/profitwiseaccountants/?viewAsMember=true',
    isExternal: true,
  },
]

export function ContactMethods() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactMethods.map((method, index) => {
        const Icon = method.icon
        const Component = method.isExternal ? 'a' : 'a'
        const linkProps = method.isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {}

        return (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group"
          >
            <Component
              href={method.href}
              {...linkProps}
              className="block h-full p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-sm hover:border-primary/40 hover:bg-white hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 border border-primary/40 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                <p className="text-slate-700 text-sm mb-1 break-words">{method.content}</p>
                <p className="text-slate-600 text-xs">{method.subtext}</p>
              </div>
            </Component>
          </motion.div>
        )
      })}
    </div>
  )
}
