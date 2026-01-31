import { Users } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Setup & Onboarding',
    description:
      'We set up your payroll system, enroll employees, and configure pension auto-enrolment with your chosen provider.',
  },
  {
    number: '02',
    title: 'Monthly Processing',
    description:
      'You provide timesheets/hours, we calculate PAYE, NI, pensions, and produce payslips for your team.',
  },
  {
    number: '03',
    title: 'Submissions & Payments',
    description:
      'We submit RTI to HMRC on time and provide payment summaries for HMRC and pension contributions.',
  },
  {
    number: '04',
    title: 'Year-End & Reporting',
    description:
      'We handle P60s, P11Ds, Employment Allowance claims, and all year-end compliance requirements.',
  },
]

export function Payroll() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('payroll')}
      title="Payroll & Pension"
      subtitle="Hassle-free payroll processing with full pension auto-enrolment compliance"
      overviewTitle="Payroll Shouldn't Be a Headache"
      overviewParagraphs={[
        'Managing payroll is time-consuming and fraught with potential compliance issues. One mistake can result in penalties, unhappy employees, and damaged trust. Our comprehensive payroll service takes this burden off your shoulders, ensuring your team is paid accurately and on time, every time.',
        'We handle everything from calculating PAYE and National Insurance to managing pension auto-enrolment with providers like NEST, The People\'s Pension, or your chosen scheme. Our service includes producing payslips, submitting Real Time Information (RTI) to HMRC, handling statutory payments (sick pay, maternity pay), and managing CIS returns for construction contractors.',
        'With our payroll service, you get more than just processing - you get expertise, compliance assurance, and dedicated support. We stay current with changing employment regulations and pension rules, so you don\'t have to. Your employees receive professional payslips, and you get peace of mind.',
      ]}
      targetAudience="Businesses with employees, contractors on PAYE, construction companies using CIS, and any employer needing reliable payroll processing."
      includedItems={[
        'Weekly/Monthly Payslips',
        'PAYE & NIC Calculations',
        'Pension Auto Enrolment',
        'P60s & P45s',
        'CIS Returns',
        'RTI Submissions',
        'Statutory Payment Management',
        'Year-End Compliance',
      ]}
      benefits={serviceBenefits.payroll}
      process={process}
      faqs={serviceFaqs.payroll}
      ServiceIcon={Users}
    />
  )
}
