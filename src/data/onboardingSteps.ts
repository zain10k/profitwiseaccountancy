import { FileText, PenTool, CheckCircle2, type LucideIcon } from 'lucide-react'

export interface OnboardingStep {
  number: string
  title: string
  icon: LucideIcon
  description: string
}

export const onboardingSteps: OnboardingStep[] = [
  {
    number: '01',
    title: 'Form Fill',
    icon: FileText,
    description:
      'Fill out the form with your credentials including business information.',
  },
  {
    number: '02',
    title: 'Sign Letter of Engagement',
    icon: PenTool,
    description:
      'Sign the letter of engagement to ensure your complete support during the process.',
  },
  {
    number: '03',
    title: 'Onboard',
    icon: CheckCircle2,
    description:
      'After all legal formalities you are officially onboard for a smooth and hassle-free experience.',
  },
]
