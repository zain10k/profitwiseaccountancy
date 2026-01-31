export interface FAQ {
  question: string
  answer: string
}

export const serviceFaqs: Record<string, FAQ[]> = {
  tax: [
    {
      question: 'When is the deadline for Corporation Tax returns?',
      answer:
        'Corporation Tax returns must be filed within 12 months of your company year-end. However, the tax itself must be paid within 9 months and 1 day of your accounting period end. We ensure you never miss a deadline with proactive reminders and timely filing.',
    },
    {
      question: 'Can you help with HMRC tax investigations?',
      answer:
        'Yes, we provide comprehensive support during HMRC investigations. Our experienced team will handle all correspondence, prepare necessary documentation, and represent you throughout the process to achieve the best possible outcome.',
    },
    {
      question: 'How can you help me minimize my tax liability?',
      answer:
        'We employ strategic tax planning throughout the year, not just at year-end. This includes optimizing salary/dividend mix, utilizing tax reliefs and allowances, timing income and expenses strategically, and structuring your business operations tax-efficiently.',
    },
    {
      question: 'What is the difference between tax planning and tax preparation?',
      answer:
        'Tax preparation involves completing and filing your tax returns based on transactions that have already occurred. Tax planning is proactive - we work with you throughout the year to structure transactions and make decisions that minimize your future tax liability legally.',
    },
    {
      question: 'Do you handle personal tax as well as business tax?',
      answer:
        'Absolutely. We handle personal Self Assessment returns, Capital Gains Tax, Inheritance Tax planning, and all aspects of personal taxation alongside your business tax needs for a comprehensive service.',
    },
  ],
  bookkeeping: [
    {
      question: 'Why should I use cloud accounting software?',
      answer:
        'Cloud accounting gives you real-time access to your financial data from anywhere, automates bank reconciliation, simplifies VAT returns, and allows us to work collaboratively with you. Systems like Xero and QuickBooks also integrate with your bank, saving hours of manual data entry.',
    },
    {
      question: 'Do I need to do my own bookkeeping if I hire you?',
      answer:
        'Not at all. We can handle everything from receipt capture to bank reconciliation. You simply focus on running your business while we ensure your books are accurate, up-to-date, and ready for reporting or tax filing at any time.',
    },
    {
      question: 'How often will my books be updated?',
      answer:
        'This depends on your package, but we typically update books weekly or monthly. With cloud software, you\'ll have real-time visibility even between our update cycles as bank transactions flow in automatically.',
    },
    {
      question: 'What is Making Tax Digital (MTD) and how does it affect me?',
      answer:
        'MTD requires VAT-registered businesses to keep digital records and submit VAT returns using compatible software. We ensure you\'re fully compliant by using MTD-compatible systems like Xero and QuickBooks, handling all submissions digitally.',
    },
    {
      question: 'Can you help me switch from my current bookkeeping system?',
      answer:
        'Yes, we handle the entire migration process. We\'ll export your historical data, set up your new cloud system properly, import your data, and train you on the new software. The transition is smooth and stress-free.',
    },
  ],
  'vat-investigation': [
    {
      question: 'What triggers an HMRC VAT investigation?',
      answer:
        'VAT investigations can be random or triggered by factors such as: late returns, errors in previous submissions, industry benchmarking discrepancies, or specific risk indicators. We help you minimize risk through accurate and timely VAT compliance.',
    },
    {
      question: 'How long does a VAT investigation typically last?',
      answer:
        'A routine VAT inspection might take a few weeks, while more complex investigations can last several months. We work to expedite the process by providing HMRC with complete and organized documentation promptly.',
    },
    {
      question: 'What happens if errors are found during the investigation?',
      answer:
        'If errors are discovered, HMRC may assess additional VAT due plus interest and potentially penalties. We work to minimize penalties by demonstrating reasonable care, correcting errors promptly, and negotiating with HMRC on your behalf.',
    },
    {
      question: 'Can penalties be reduced or waived?',
      answer:
        'Yes, penalties can often be reduced through disclosure, cooperation, and demonstrating that errors were not deliberate. We have extensive experience negotiating penalty reductions and can often achieve significant mitigation.',
    },
    {
      question: 'Should I be worried if I receive a VAT inspection notice?',
      answer:
        'Not necessarily. Many inspections are routine. However, it\'s crucial to respond properly and professionally. Contact us immediately upon receiving any HMRC notice - early expert involvement significantly improves outcomes.',
    },
  ],
  payroll: [
    {
      question: 'What is included in your payroll service?',
      answer:
        'Our comprehensive payroll service includes: calculating PAYE, National Insurance, and pension contributions; producing payslips; RTI submissions to HMRC; year-end P60s; handling P45s for leavers; auto-enrolment pension compliance; and CIS returns for construction contractors.',
    },
    {
      question: 'When do I need to start pension auto-enrolment?',
      answer:
        'You must enrol eligible employees into a workplace pension from your "duties start date" - typically when you hire your first employee. We handle the entire process: setting up your pension scheme, calculating contributions, and managing ongoing compliance.',
    },
    {
      question: 'How often should I run payroll?',
      answer:
        'Most businesses run payroll monthly, but we can accommodate weekly, fortnightly, or any custom schedule that suits your business. We\'ll advise on the most efficient approach based on your workforce and cash flow.',
    },
    {
      question: 'What happens if I miss a payroll deadline?',
      answer:
        'Missing payroll deadlines can result in HMRC penalties and unhappy employees. Our service includes deadline management and timely processing to ensure this never happens. We send reminders and process payroll well ahead of deadlines.',
    },
    {
      question: 'Do you handle statutory payments like sick pay and maternity pay?',
      answer:
        'Yes, we manage all statutory payments including SSP (Statutory Sick Pay), SMP (Statutory Maternity Pay), SPP (Statutory Paternity Pay), and other parental payments. We calculate amounts correctly and help you reclaim eligible amounts from HMRC.',
    },
  ],
  management: [
    {
      question: 'What is the difference between management accounts and year-end accounts?',
      answer:
        'Year-end accounts are statutory reports prepared annually for Companies House and HMRC. Management accounts are internal reports (usually monthly or quarterly) designed to help you understand your current financial position and make informed business decisions in real-time.',
    },
    {
      question: 'How quickly can I get my management accounts?',
      answer:
        'With cloud accounting and organized bookkeeping, we typically deliver management accounts within 5-10 working days of month-end. Faster turnaround is possible if needed for board meetings or investor presentations.',
    },
    {
      question: 'What should I look for in my management accounts?',
      answer:
        'Focus on key metrics like: gross profit margin, cash position, debtor days, creditor days, burn rate (for startups), and comparison to budget or prior periods. We provide commentary highlighting important trends and areas needing attention.',
    },
    {
      question: 'Are management accounts expensive?',
      answer:
        'Management accounts are an investment in business intelligence. Our fees are based on your business complexity and reporting frequency. Many clients find the insights gained far outweigh the cost through better decision-making.',
    },
    {
      question: 'Can you help me understand the numbers?',
      answer:
        'Absolutely. We don\'t just send reports - we explain what the numbers mean for your business. We\'re available for calls or meetings to walk through the accounts and answer any questions. Making the numbers accessible is a core part of our service.',
    },
  ],
  advisory: [
    {
      question: 'How is business advisory different from accounting?',
      answer:
        'Traditional accounting looks backward - recording what has happened. Business advisory is forward-looking: helping you plan for growth, forecast cash flow, structure deals, and make strategic decisions. We act as your financial partner, not just your compliance accountant.',
    },
    {
      question: 'Do I need to be a certain size to benefit from advisory services?',
      answer:
        'Not at all. Whether you\'re a startup validating your business model or an established company planning expansion, strategic advice adds value. We tailor our advisory approach to your stage and specific needs.',
    },
    {
      question: 'Can you help with fundraising or investor relations?',
      answer:
        'Yes. We assist with: preparing financial projections for investors, creating pitch deck financials, advising on valuation, structuring investment terms, and handling investor reporting requirements. We\'ve supported numerous successful fundraises.',
    },
    {
      question: 'What is a cash flow forecast and why do I need one?',
      answer:
        'A cash flow forecast projects your future cash position week-by-week or month-by-month. It\'s essential for avoiding cash crunches, planning investment, negotiating with banks, and making informed decisions about hiring or expansion. Many business failures are due to cash flow issues, not lack of profitability.',
    },
    {
      question: 'How much does business advisory cost?',
      answer:
        'Advisory fees vary based on scope and complexity. We offer fixed monthly retainers for ongoing advisory or project-based fees for specific initiatives like fundraising or exit planning. We\'ll provide a clear quote after understanding your needs.',
    },
  ],
  formation: [
    {
      question: 'How long does it take to form a limited company?',
      answer:
        'Company formation typically takes 24-48 hours once we submit your application to Companies House. We handle all the paperwork, ensuring everything is correct first time. You\'ll receive your incorporation certificate and be ready to trade almost immediately.',
    },
    {
      question: 'What do I need to provide to set up a company?',
      answer:
        'We need: your proposed company name, director and shareholder details, registered office address (we can provide one), nature of business, and share structure. We guide you through each decision to ensure your company is structured optimally.',
    },
    {
      question: 'Should I operate as a sole trader or limited company?',
      answer:
        'This depends on your circumstances. Limited companies often provide tax efficiency and limited liability protection, but have more admin requirements. We analyze your situation and recommend the most beneficial structure for your specific case.',
    },
    {
      question: 'What ongoing Companies House requirements are there?',
      answer:
        'Limited companies must file: an annual Confirmation Statement (verifying company details), annual accounts, and notify Companies House of changes to directors, shareholders, or registered office. Our secretarial service ensures all filings are timely and accurate.',
    },
    {
      question: 'Can you provide a registered office address?',
      answer:
        'Yes, we offer registered office services. This provides a professional business address, keeps your home address private from public records, and ensures official correspondence is received reliably. We forward all mail promptly.',
    },
  ],
  'self-assessment': [
    {
      question: 'When is the deadline for Self Assessment tax returns?',
      answer:
        'Paper returns must be filed by 31st October following the end of the tax year (5th April). Online returns have until 31st January. Tax payment is also due by 31st January, with a potential payment on account. We file online to maximize your time.',
    },
    {
      question: 'Who needs to complete a Self Assessment?',
      answer:
        'You need to file if you\'re self-employed, a company director, have income over £100k, receive rental income, have significant investment income, or HMRC has sent you a notice. We\'ll assess whether you need to register.',
    },
    {
      question: 'What records do I need to keep?',
      answer:
        'Keep records of all income and allowable expenses for at least 5 years after the filing deadline. This includes invoices, bank statements, receipts, and mileage logs. Cloud accounting makes record-keeping much simpler.',
    },
    {
      question: 'What expenses can I claim?',
      answer:
        'You can claim expenses that are "wholly and exclusively" for business purposes: office costs, travel (excluding commuting), equipment, professional fees, marketing, and more. We ensure you claim everything you\'re entitled to while staying HMRC-compliant.',
    },
    {
      question: 'What are the penalties for late filing?',
      answer:
        'Penalties start at £100 for returns filed one day late, increasing significantly over time. There are also daily penalties after 3 months and higher penalties after 6-12 months, plus interest on unpaid tax. Our service ensures you never face these penalties.',
    },
  ],
  'wills-trust-probate': [
    {
      question: 'Why do I need a will if I have a simple estate?',
      answer:
        'Without a will, your estate is distributed according to intestacy rules, which may not reflect your wishes. A will ensures your assets go to your chosen beneficiaries, can minimize inheritance tax, and appoints guardians for young children. Everyone should have one.',
    },
    {
      question: 'What is a trust and when should I consider one?',
      answer:
        'A trust is a legal arrangement where assets are held by trustees for beneficiaries. Trusts can: protect assets, minimize inheritance tax, provide for vulnerable family members, or control when beneficiaries receive inheritance. We advise when trusts are beneficial.',
    },
    {
      question: 'How long does the probate process take?',
      answer:
        'Probate typically takes 6-12 months, depending on estate complexity. We handle: obtaining the grant of probate, collecting assets, paying debts and taxes, and distributing the estate. Our expertise often speeds up the process significantly.',
    },
    {
      question: 'What is Inheritance Tax and how can it be reduced?',
      answer:
        'Inheritance Tax is charged at 40% on estates over £325,000 (with additional allowances for main residence). We employ strategies to reduce IHT: gifting during lifetime, trusts, business relief, charitable donations, and life insurance. Early planning is crucial.',
    },
    {
      question: 'Do I need to update my will?',
      answer:
        'Review your will every 3-5 years or after major life events: marriage, divorce, births, deaths, property purchases, or significant wealth changes. Outdated wills can cause problems. We offer will review services to ensure your will remains current.',
    },
  ],
}
