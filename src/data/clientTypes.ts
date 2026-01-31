import { Building2, Briefcase, Users, Hammer, Home, Globe, type LucideIcon } from 'lucide-react'

export interface ClientType {
  id: string
  title: string
  icon: LucideIcon
  description: string
}

export const clientTypes: ClientType[] = [
  {
    id: 'ltd-companies',
    title: 'LTD Companies',
    icon: Building2,
    description:
      'We help LTD companies manage finances, offer strategic advice for business growth and ensure compliance with tax laws.',
  },
  {
    id: 'self-employment',
    title: 'Self Employment',
    icon: Briefcase,
    description:
      'Our team can assist self-employed individuals by optimizing tax efficiency, managing their financial records and offer strategic advice for growth.',
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    icon: Users,
    description:
      'Our services cater to jointly owned businesses by managing their tax filings, provide advice on profit distribution and compliance with tax regulations.',
  },
  {
    id: 'contractors',
    title: 'Contractors',
    icon: Hammer,
    description:
      'We aid contractors by ensuring accurate financial planning, helping manage tax obligations, and producing precise cost estimations for improved profitability.',
  },
  {
    id: 'landlords',
    title: 'Landlords',
    icon: Home,
    description:
      'Our experts can optimize tax planning and offer advice on legal compliance and property-related tax deductions to maximize rental income.',
  },
  {
    id: 'non-residents',
    title: 'Non-Residents',
    icon: Globe,
    description:
      'We benefit non-residents by managing their tax liabilities in compliance with the tax regulations in their home country and residential location.',
  },
]
