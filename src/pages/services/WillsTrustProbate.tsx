import { Scale } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Initial Consultation',
    description:
      'We discuss your wishes, family situation, assets, and tax planning objectives to understand your needs.',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description:
      'We develop an estate plan that protects your assets, minimizes inheritance tax, and provides for your beneficiaries.',
  },
  {
    number: '03',
    title: 'Document Preparation',
    description:
      'We draft your will, establish trusts if beneficial, and ensure all documents are legally sound and tax-efficient.',
  },
  {
    number: '04',
    title: 'Review & Updates',
    description:
      'Regular reviews ensure your estate plan remains current as your circumstances and tax laws change.',
  },
]

export function WillsTrustProbate() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('wills-trust-probate')}
      title="Wills, Trust & Probate"
      subtitle="Comprehensive estate planning and probate services that protect your wealth for future generations"
      overviewTitle="Protect Your Legacy, Provide for Your Loved Ones"
      overviewParagraphs={[
        'Estate planning isn\'t just for the wealthy - everyone with assets, property, or dependents should have a properly structured will and estate plan. Without proper planning, your assets may not go to your intended beneficiaries, your loved ones may face unnecessary tax bills, and the probate process can be lengthy and costly.',
        'Our wills, trust, and probate service provides comprehensive estate planning tailored to your circumstances. We help you draft a clear will that reflects your wishes, establish trusts where beneficial for tax efficiency or asset protection, and plan strategically to minimize inheritance tax using all available reliefs and exemptions.',
        'When it comes to probate, dealing with a loved one\'s estate can be overwhelming during an already difficult time. We handle the entire probate process professionally and sensitively: obtaining the grant of probate, collecting assets, paying debts and taxes, and distributing the estate according to the will. Our expertise often speeds up the process significantly while ensuring everything is done correctly.',
      ]}
      targetAudience="Individuals wanting to protect their estates, families planning for inheritance tax, executors managing estates, and anyone needing professional probate administration."
      includedItems={[
        'Will Preparation & Review',
        'Trust Formation & Administration',
        'Probate Services',
        'Inheritance Tax Planning',
        'Estate Administration',
        'Beneficiary Support',
        'Grant of Probate',
        'Tax-Efficient Strategies',
      ]}
      benefits={serviceBenefits['wills-trust-probate']}
      process={process}
      faqs={serviceFaqs['wills-trust-probate']}
      ServiceIcon={Scale}
    />
  )
}
