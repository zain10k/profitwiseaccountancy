import { Search } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Initial Assessment',
    description:
      'We review the HMRC notice and assess the scope of the investigation, gathering all relevant documentation.',
  },
  {
    number: '02',
    title: 'Documentation Preparation',
    description:
      'Our team organizes and prepares comprehensive documentation, ensuring all records are accurate and complete.',
  },
  {
    number: '03',
    title: 'HMRC Liaison',
    description:
      'We handle all correspondence and meetings with HMRC, representing your interests professionally throughout.',
  },
  {
    number: '04',
    title: 'Resolution & Follow-up',
    description:
      'We work to minimize penalties, negotiate settlements where appropriate, and implement processes to prevent future issues.',
  },
]

export function VatInvestigation() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('vat-investigation')}
      title="VAT Investigation"
      subtitle="Expert representation and support during HMRC VAT investigations to protect your business interests"
      overviewTitle="Navigate HMRC Investigations with Confidence"
      overviewParagraphs={[
        'Receiving a VAT investigation notice from HMRC can be stressful and overwhelming. Our specialized VAT investigation team has extensive experience representing businesses during HMRC inquiries, helping you navigate the process smoothly while protecting your interests.',
        'We understand HMRC procedures and what inspectors look for. Our proactive approach involves thorough preparation, professional representation, and strategic negotiation to achieve the best possible outcome. We handle all correspondence, prepare responses, and attend meetings on your behalf.',
        'Whether it\'s a routine inspection or a more serious investigation, early expert involvement makes a significant difference. We work to minimize penalties, resolve disputes efficiently, and implement robust VAT procedures to prevent future issues. With ProfitWise, you\'re never alone when facing HMRC.',
      ]}
      targetAudience="VAT-registered businesses facing HMRC investigations, inspections, or disputes, or those wanting to ensure robust VAT compliance."
      includedItems={[
        'HMRC Investigation Representation',
        'VAT Dispute Resolution',
        'Penalty Mitigation',
        'Documentation Review',
        'Correspondence Management',
        'Appeal Support',
        'VAT Compliance Advice',
        'Preventative Measures',
      ]}
      benefits={serviceBenefits['vat-investigation']}
      process={process}
      faqs={serviceFaqs['vat-investigation']}
      ServiceIcon={Search}
    />
  )
}
