import { Calculator } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We discuss your current tax situation, business structure, and financial goals to understand your unique needs.',
  },
  {
    number: '02',
    title: 'Tax Assessment',
    description:
      'Our team conducts a comprehensive review of your tax position, identifying opportunities for savings and areas requiring attention.',
  },
  {
    number: '03',
    title: 'Planning & Strategy',
    description:
      'We develop a tailored tax strategy that minimizes liability while ensuring full HMRC compliance throughout the year.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Continuous monitoring, proactive advice, timely filing, and immediate support whenever HMRC matters arise.',
  },
]

export function Tax() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('tax')}
      title="Tax Planning & Preparation"
      subtitle="Strategic tax planning that minimizes your liability while ensuring full HMRC compliance"
      overviewTitle="Proactive Tax Management for Your Business"
      overviewParagraphs={[
        'Tax planning isn\'t just about filling out forms at year-end - it\'s a year-round strategic process that can significantly impact your bottom line. At ProfitWise, we go far beyond simple compliance to help you structure your affairs tax-efficiently.',
        'Our experienced tax professionals stay current with the latest HMRC regulations and tax law changes, ensuring you benefit from all available reliefs and allowances. We work proactively to minimize your tax liability through careful planning, strategic timing, and optimal business structure.',
        'Whether you\'re dealing with Corporation Tax, VAT, Capital Gains Tax, or Inheritance Tax, we provide expert guidance that saves you money while keeping you fully compliant. We handle all HMRC correspondence and represent you in any investigations, giving you complete peace of mind.',
      ]}
      targetAudience="Limited companies, sole traders, partnerships, landlords, and high-net-worth individuals looking to minimize tax liability legally and efficiently."
      includedItems={[
        'Corporation Tax Returns',
        'Corporation Tax Advisory',
        'Tax Consultancy',
        'Capital Gains Tax Advice',
        'Inheritance Tax Planning',
        'HMRC Investigation Support',
        'Tax Relief & Allowance Optimization',
        'Year-Round Tax Strategy',
      ]}
      benefits={serviceBenefits.tax}
      process={process}
      faqs={serviceFaqs.tax}
      ServiceIcon={Calculator}
    />
  )
}
