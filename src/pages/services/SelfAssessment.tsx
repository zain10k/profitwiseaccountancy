import { FileCheck } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Information Gathering',
    description:
      'We provide a simple checklist of information needed and guide you through what records to provide.',
  },
  {
    number: '02',
    title: 'Return Preparation',
    description:
      'Our tax experts prepare your Self Assessment return, claiming all allowable expenses and reliefs.',
  },
  {
    number: '03',
    title: 'Review & Approval',
    description:
      'We review the return with you, explain the calculations, and obtain your approval before submission.',
  },
  {
    number: '04',
    title: 'Filing & Payment',
    description:
      'We file your return online well before the deadline and advise on tax payment dates to avoid penalties.',
  },
]

export function SelfAssessment() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('self-assessment')}
      title="Self Assessment"
      subtitle="Expert personal tax return preparation that maximizes deductions and meets all HMRC deadlines"
      overviewTitle="Self Assessment Made Simple"
      overviewParagraphs={[
        'Filing your Self Assessment tax return can be confusing and time-consuming. One mistake can lead to penalties, underpayments, or overpayments. Our Self Assessment service takes the stress out of personal tax returns, ensuring accuracy, maximizing your deductions, and filing well before HMRC deadlines.',
        'We work with sole traders, company directors, landlords, partners, and individuals with complex income sources. Our tax experts understand the nuances of personal taxation and ensure you claim every allowable expense - from working from home allowances to professional subscriptions and travel costs.',
        'Beyond just filling out forms, we provide strategic tax advice. We help you understand your tax position, plan for future payments on account, and structure your affairs more tax-efficiently. With ProfitWise handling your Self Assessment, you can be confident your return is accurate, compliant, and optimized.',
      ]}
      targetAudience="Sole traders, company directors, landlords, partners, contractors, and anyone required to complete a Self Assessment tax return."
      includedItems={[
        'Individual Tax Return Preparation',
        'Sole Trader Returns',
        'Partnership Returns',
        'Tax Calculation & Optimization',
        'Deadline Management',
        'HMRC Correspondence Handling',
        'Expense Claim Review',
        'Payment Planning Advice',
      ]}
      benefits={serviceBenefits['self-assessment']}
      process={process}
      faqs={serviceFaqs['self-assessment']}
      ServiceIcon={FileCheck}
    />
  )
}
