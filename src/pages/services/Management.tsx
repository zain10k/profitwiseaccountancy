import { PieChart } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Requirements Analysis',
    description:
      'We discuss your business goals, KPIs, and reporting needs to design management accounts that deliver real value.',
  },
  {
    number: '02',
    title: 'System Setup',
    description:
      'We ensure your bookkeeping and accounting systems are properly configured for accurate management reporting.',
  },
  {
    number: '03',
    title: 'Monthly Reporting',
    description:
      'Detailed management accounts delivered promptly each month, showing profit & loss, balance sheet, and cash flow.',
  },
  {
    number: '04',
    title: 'Analysis & Advisory',
    description:
      'We provide commentary, highlight trends, and offer strategic advice based on your numbers to drive better decisions.',
  },
]

export function Management() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('management')}
      title="Management Accounts"
      subtitle="Regular financial reports that provide real-time insights into your business performance"
      overviewTitle="Understand Your Numbers, Drive Your Success"
      overviewParagraphs={[
        'Year-end accounts tell you where you\'ve been. Management accounts tell you where you are right now and where you\'re headed. These regular financial reports (typically monthly or quarterly) provide the insights you need to make informed decisions quickly and confidently.',
        'Our management accounts go beyond basic numbers. We provide comprehensive profit & loss statements, balance sheets, cash flow analysis, and KPI tracking tailored to your business. We compare performance against budget, prior periods, and industry benchmarks to identify opportunities and address concerns early.',
        'More importantly, we explain what the numbers mean for your business. Our expert commentary highlights important trends, flags areas requiring attention, and provides actionable recommendations. With ProfitWise management accounts, you\'re not just looking at data - you\'re gaining business intelligence that drives growth.',
      ]}
      targetAudience="Growing businesses, companies with investors or boards, businesses needing better financial visibility, and entrepreneurs wanting to make data-driven decisions."
      includedItems={[
        'Monthly/Quarterly Profit & Loss',
        'Balance Sheet Analysis',
        'Cash Flow Analysis',
        'KPI Tracking',
        'Board Meeting Support',
        'Budget vs Actual Comparison',
        'Expert Commentary',
        'Strategic Recommendations',
      ]}
      benefits={serviceBenefits.management}
      process={process}
      faqs={serviceFaqs.management}
      ServiceIcon={PieChart}
    />
  )
}
