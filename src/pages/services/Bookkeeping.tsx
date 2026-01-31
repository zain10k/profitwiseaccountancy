import { FileText } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Setup & Migration',
    description:
      'We set up your cloud accounting software (Xero, QuickBooks) and migrate your historical data seamlessly.',
  },
  {
    number: '02',
    title: 'Process Design',
    description:
      'We establish efficient workflows for receipt capture, bank feeds, and categorization tailored to your business.',
  },
  {
    number: '03',
    title: 'Ongoing Maintenance',
    description:
      'Regular bookkeeping, bank reconciliation, and VAT returns ensure your records are always accurate and up-to-date.',
  },
  {
    number: '04',
    title: 'Reporting & Support',
    description:
      'Monthly financial reports and unlimited support help you understand your numbers and make informed decisions.',
  },
]

export function Bookkeeping() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('bookkeeping')}
      title="Bookkeeping & Cloud Accounting"
      subtitle="Modern cloud accounting solutions that keep your financial records accurate and accessible in real-time"
      overviewTitle="Say Goodbye to Shoeboxes of Receipts"
      overviewParagraphs={[
        'In today\'s digital age, manual bookkeeping is outdated and inefficient. We implement cutting-edge cloud accounting systems like Xero and QuickBooks that transform how you manage your finances. Real-time access to your numbers means you can make informed decisions anytime, anywhere.',
        'Our bookkeeping service goes beyond data entry. We reconcile your bank accounts, manage VAT returns with Making Tax Digital (MTD) compliance, track expenses through digital receipt capture, and provide regular financial reports that help you understand your business performance.',
        'With cloud accounting, tax filing becomes streamlined, collaboration with your accountant is effortless, and you gain valuable insights through automated reporting. We handle the technical setup, train your team, and provide ongoing support so you can focus on growing your business.',
      ]}
      targetAudience="Small to medium businesses, e-commerce companies, startups, and any business seeking to modernize their accounting with cloud technology."
      includedItems={[
        'Cloud Software Setup & Training',
        'Bank Reconciliation',
        'VAT Returns (MTD Compliant)',
        'VAT Accounting',
        'Receipt Management (Dext/Hubdoc)',
        'Expense Tracking',
        'Monthly Financial Reporting',
        'Unlimited Email Support',
      ]}
      benefits={serviceBenefits.bookkeeping}
      process={process}
      faqs={serviceFaqs.bookkeeping}
      ServiceIcon={FileText}
    />
  )
}
