import {
  TrendingDown,
  Shield,
  Target,
  HeartHandshake,
  Clock,
  CloudLightning,
  FileCheck,
  AlertCircle,
  LineChart,
  PiggyBank,
  Users,
  Smile,
  Zap,
  BookOpen,
  Lightbulb,
  Award,
  CheckCircle2,
  Scale,
  Home as HomeIcon,
  type LucideIcon,
} from 'lucide-react'

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

export const serviceBenefits: Record<string, Benefit[]> = {
  tax: [
    {
      icon: TrendingDown,
      title: 'Minimize Tax Liability',
      description:
        'We employ strategic tax planning to legally reduce your tax burden, ensuring you keep more of your hard-earned money.',
    },
    {
      icon: Shield,
      title: 'HMRC Compliance',
      description:
        'Stay fully compliant with all HMRC regulations and deadlines, avoiding penalties and reducing audit risk.',
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description:
        'Proactive tax strategies throughout the year, not just at year-end, optimizing your financial structure.',
    },
    {
      icon: HeartHandshake,
      title: 'Peace of Mind',
      description:
        'Expert handling of all tax matters means you can focus on growing your business without tax worries.',
    },
  ],
  bookkeeping: [
    {
      icon: CloudLightning,
      title: 'Real-Time Insights',
      description:
        'Cloud accounting provides instant access to your financial data from anywhere, enabling informed decisions.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description:
        'Automated processes and expert management free up your time to focus on core business activities.',
    },
    {
      icon: FileCheck,
      title: 'Accuracy Guaranteed',
      description:
        'Professional bookkeeping ensures error-free records, ready for tax filing and financial reporting.',
    },
    {
      icon: CheckCircle2,
      title: 'MTD Compliant',
      description:
        'Fully compliant with Making Tax Digital requirements using HMRC-approved software.',
    },
  ],
  'vat-investigation': [
    {
      icon: Shield,
      title: 'Expert Representation',
      description:
        'Experienced professionals handle all HMRC correspondence and negotiations on your behalf.',
    },
    {
      icon: AlertCircle,
      title: 'Penalty Mitigation',
      description:
        'We work to minimize or eliminate penalties through proper disclosure and cooperation strategies.',
    },
    {
      icon: FileCheck,
      title: 'Documentation Management',
      description:
        'Organized and comprehensive documentation presentation to expedite the investigation process.',
    },
    {
      icon: HeartHandshake,
      title: 'Stress Reduction',
      description:
        'Let experts handle the complexity while you focus on running your business with confidence.',
    },
  ],
  payroll: [
    {
      icon: Clock,
      title: 'Always On Time',
      description:
        'Never miss a payroll deadline - employees paid accurately and on schedule, every time.',
    },
    {
      icon: Shield,
      title: 'Full Compliance',
      description:
        'Stay compliant with PAYE, NI, pension auto-enrolment, and all employment regulations.',
    },
    {
      icon: Users,
      title: 'Happy Employees',
      description:
        'Accurate payslips and smooth payroll processes keep your team satisfied and focused.',
    },
    {
      icon: Smile,
      title: 'Hassle-Free',
      description:
        'We handle all the complexity - you just approve, and we take care of the rest.',
    },
  ],
  management: [
    {
      icon: LineChart,
      title: 'Better Decisions',
      description:
        'Real-time financial insights enable data-driven decisions that drive business growth.',
    },
    {
      icon: Target,
      title: 'Track Performance',
      description:
        'Monitor KPIs and compare against budget to identify opportunities and address issues early.',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Insights',
      description:
        'Expert analysis and commentary help you understand what the numbers mean for your business.',
    },
    {
      icon: PiggyBank,
      title: 'Improve Profitability',
      description:
        'Identify cost savings, optimize pricing, and improve margins through detailed financial analysis.',
    },
  ],
  advisory: [
    {
      icon: Zap,
      title: 'Accelerate Growth',
      description:
        'Strategic advice and financial planning help you scale faster and more efficiently.',
    },
    {
      icon: Target,
      title: 'Clear Direction',
      description:
        'Set achievable goals with actionable plans, turning ambitions into reality.',
    },
    {
      icon: BookOpen,
      title: 'Expert Guidance',
      description:
        'Decades of combined business experience available as your trusted advisor.',
    },
    {
      icon: PiggyBank,
      title: 'Maximize Value',
      description:
        'Optimize your business structure and operations to build and preserve wealth.',
    },
  ],
  formation: [
    {
      icon: Zap,
      title: 'Fast Setup',
      description:
        'Company formed and ready to trade within 24-48 hours with all paperwork handled expertly.',
    },
    {
      icon: Shield,
      title: 'Limited Liability',
      description:
        'Protect your personal assets with limited liability company structure.',
    },
    {
      icon: TrendingDown,
      title: 'Tax Efficient',
      description:
        'Limited companies often provide superior tax efficiency compared to sole trading.',
    },
    {
      icon: Award,
      title: 'Professional Image',
      description:
        'Enhance credibility with clients and suppliers as a registered limited company.',
    },
  ],
  'self-assessment': [
    {
      icon: TrendingDown,
      title: 'Maximize Deductions',
      description:
        'Claim all allowable expenses and reliefs to minimize your tax bill legally.',
    },
    {
      icon: Clock,
      title: 'Never Miss Deadlines',
      description:
        'Timely filing avoids penalties - we ensure your return is submitted well before deadlines.',
    },
    {
      icon: FileCheck,
      title: 'Accuracy Guaranteed',
      description:
        'Expert preparation reduces errors and audit risk, ensuring HMRC acceptance.',
    },
    {
      icon: HeartHandshake,
      title: 'Stress-Free',
      description:
        'We handle everything from records review to submission - you just provide information.',
    },
  ],
  'wills-trust-probate': [
    {
      icon: Shield,
      title: 'Asset Protection',
      description:
        'Safeguard your wealth for future generations through proper estate planning.',
    },
    {
      icon: TrendingDown,
      title: 'Tax Efficiency',
      description:
        'Minimize inheritance tax through strategic planning, trusts, and legitimate tax reliefs.',
    },
    {
      icon: Scale,
      title: 'Peace of Mind',
      description:
        'Ensure your wishes are carried out and your loved ones are provided for.',
    },
    {
      icon: HomeIcon,
      title: 'Family Security',
      description:
        'Protect vulnerable family members and provide clear guidance for executors.',
    },
  ],
}
