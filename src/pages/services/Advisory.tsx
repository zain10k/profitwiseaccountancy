import { TrendingUp } from 'lucide-react'
import { ServicePageTemplate, type ServiceProcess } from '@/components/ServicePageTemplate'
import { serviceFaqs } from '@/data/serviceFaqs'
import { serviceBenefits } from '@/data/serviceBenefits'
import { getServiceImage } from '@/pages/Services'

const process: ServiceProcess[] = [
  {
    number: '01',
    title: 'Discovery Session',
    description:
      'We understand your business, goals, challenges, and aspirations through detailed discussion and analysis.',
  },
  {
    number: '02',
    title: 'Strategic Planning',
    description:
      'We develop tailored strategies and financial plans aligned with your objectives, whether growth, exit, or optimization.',
  },
  {
    number: '03',
    title: 'Implementation Support',
    description:
      'We provide ongoing guidance as you execute your plans, helping with forecasting, decision-making, and problem-solving.',
  },
  {
    number: '04',
    title: 'Performance Review',
    description:
      'Regular check-ins ensure you\'re on track, allowing us to adjust strategies as your business and market evolve.',
  },
]

export function Advisory() {
  return (
    <ServicePageTemplate
      heroImage={getServiceImage('advisory')}
      title="Business Advisory"
      subtitle="Strategic financial guidance to help you start, grow, and scale your business successfully"
      overviewTitle="Your Strategic Financial Partner"
      overviewParagraphs={[
        'Every business needs more than just compliance accounting - you need a trusted advisor who understands your goals and helps you achieve them. Our business advisory service provides the strategic guidance, financial planning, and expert support that drives sustainable growth.',
        'We work with startups validating their business models, growing companies expanding into new markets, and established businesses planning exits. Whether you need help with cash flow forecasting, fundraising preparation, acquisition due diligence, or growth strategy, we bring decades of combined experience to the table.',
        'As your advisory partner, we become part of your team. We challenge assumptions, provide objective perspectives, identify opportunities you might miss, and help you avoid costly mistakes. From business plans to financial projections to strategic decision support, we\'re with you every step of your journey.',
      ]}
      targetAudience="Startups, growth-stage companies, businesses planning expansion or exit, and entrepreneurs needing strategic financial guidance."
      includedItems={[
        'Business Plan Creation',
        'Cash Flow Forecasting',
        'Budgeting',
        'Growth Strategy',
        'Exit Planning',
        'Fundraising Support',
        'Financial Modeling',
        'Strategic Decision Support',
      ]}
      benefits={serviceBenefits.advisory}
      process={process}
      faqs={serviceFaqs.advisory}
      ServiceIcon={TrendingUp}
    />
  )
}
