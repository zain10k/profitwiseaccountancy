import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'

type ServicesMegaItem = {
  label: string
  to: string
  description?: string
}

type ServicesMegaGroup = {
  heading: string
  items: ServicesMegaItem[]
}

const servicesGroups: ServicesMegaGroup[] = [
  {
    heading: 'Tax & Compliance',
    items: [
      { label: 'Tax Planning & Preparation', to: '/services/tax' },
      { label: 'Self Assessment', to: '/services/self-assessment' },
      { label: 'VAT Investigation', to: '/services/vat-investigation' },
    ],
  },
  {
    heading: 'Accounts & Bookkeeping',
    items: [
      { label: 'Bookkeeping & Cloud Accounting', to: '/services/bookkeeping' },
      { label: 'Management Accounts', to: '/services/management' },
      { label: 'Company Formation & Secretarial', to: '/services/formation' },
    ],
  },
  {
    heading: 'Advisory & Estate',
    items: [
      { label: 'Business Advisory', to: '/services/advisory' },
      { label: 'Wills, Trust & Probate', to: '/services/wills-trust-probate' },
    ],
  },
]

const featuredService: ServicesMegaItem & { eyebrow: string } = {
  eyebrow: 'Popular Service',
  label: 'Digital Accounting & QuickBooks',
  description: 'Cloud accounting, real‑time reporting and QuickBooks ProAdvisor support tailored to your business.',
  to: '/services',
}

interface ServicesMegaMenuProps {
  isOpen: boolean
  onClose?: () => void
}

export function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  if (!isOpen) return null

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose?.()
    }
  }

  return (
    <div
      className="hidden md:block"
      onKeyDown={handleKeyDown}
    >
      <div
        className={cn(
          'absolute left-1/2 top-full mt-4 w-[min(100vw-3rem,880px)] -translate-x-1/2 rounded-3xl border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-900/10',
          'text-slate-900'
        )}
      >
        <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.3fr_1.3fr_1.3fr_1.6fr]">
          {servicesGroups.map((group) => (
            <div key={group.heading} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {group.heading}
              </h3>
              <ul className="space-y-1.5 text-sm">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 rounded-md px-0.5 py-1 text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <span className="inline-block h-0.5 w-3 rounded-full bg-slate-200 group-hover:bg-primary" aria-hidden />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 rounded-2xl bg-slate-50 border border-slate-200 px-5 py-6 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {featuredService.eyebrow}
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                {featuredService.label}
              </h3>
              {featuredService.description && (
                <p className="text-sm text-slate-600 leading-relaxed">
                  {featuredService.description}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Link
                to={featuredService.to}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span>Explore service</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <div className="mt-3 text-xs text-slate-500">
                Or{' '}
                <Link
                  to="/services#OurServices"
                  className="font-semibold text-slate-700 hover:text-primary"
                >
                  view all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

