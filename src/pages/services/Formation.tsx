import { Briefcase } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Structure Consultation',
    description:
      'We assess your situation and advise whether a limited company is right for you, or if sole trading might be better.',
  },
  {
    number: '02',
    title: 'Company Setup',
    description:
      'We handle all paperwork, register your company with Companies House, and obtain your incorporation certificate.',
  },
  {
    number: '03',
    title: 'Post-Incorporation',
    description:
      'We set up business bank accounts, register for Corporation Tax, and ensure all statutory requirements are met.',
  },
  {
    number: '04',
    title: 'Ongoing Compliance',
    description:
      'We manage Confirmation Statements, annual accounts filing, and Companies House compliance throughout your company\'s life.',
  },
]

export function Formation() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('formation')}
      title="Company Formation & Secretarial"
      subtitle="Fast, professional company registration with ongoing Companies House compliance support"
      overviewTitle="Start Your Business the Right Way"
      overviewParagraphs={[
        'Forming a limited company is an exciting step, but it comes with responsibilities and compliance requirements. Our company formation service makes the process simple, fast, and stress-free. We register your company with Companies House within 24-48 hours and ensure everything is set up correctly from day one.',
        'Choosing the right business structure is crucial. We provide expert advice on whether a limited company, sole trader status, or partnership best suits your circumstances, considering factors like tax efficiency, liability protection, and administrative requirements.',
        'Our service doesn\'t stop at formation. We provide ongoing company secretarial support, ensuring you meet all Companies House obligations: annual Confirmation Statements, accounts filing, change notifications, and statutory record maintenance. We can also provide a professional registered office address for privacy and compliance.',
      ]}
      targetAudience="New businesses, sole traders wanting to incorporate, entrepreneurs starting their first company, and established businesses needing secretarial services."
      includedItems={[
        'Company Registration',
        'Registered Office Address',
        'Confirmation Statement Filing',
        'Share Transfers',
        'Director Appointments',
        'Company Name Check',
        'Articles of Association',
        'Ongoing Compliance Support',
      ]}
      benefits={serviceBenefits.formation}
      process={process}
      faqs={serviceFaqs.formation}
      ServiceIcon={Briefcase}
    />
  )
}
