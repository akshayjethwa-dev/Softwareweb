import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'workforce-tracking',
    title: 'Site Attendance & Workforce Tracking',
    icon: 'Users',
    problem: 'Proxy attendance, manual register books, and spending days calculating month-end payroll for blue-collar staff or field workers.',
    solution: 'A custom, mobile-friendly portal featuring face-scan attendance and geolocation tagging, feeding directly into an automated payroll calculator.',
    outcomes: [
      'Eliminate proxy attendance completely',
      'Reduce payroll processing from days to hours',
      'Real-time visibility of staff across multiple sites'
    ],
    bestFor: 'MSME Contractors, Builders, and Factory Owners in Gujarat.',
    // Fallback fields for backwards compatibility
    benefit: 'Know exactly who is on site, instantly.',
    description: 'Track attendance and automate payroll for your distributed workforce.',
    keyOutcomes: ['Face-scan attendance', 'Geolocation tracking', 'Automated payroll reporting'],
    typicalClients: 'MSME Contractors, Builders, and Factory Owners in Gujarat.'
  },
  {
    id: 'b2b-portals',
    title: 'B2B Dealer & Procurement Portals',
    icon: 'Workflow',
    problem: 'Managing distributor orders through scattered WhatsApp messages, leading to missed orders, inventory confusion, and delayed collections.',
    solution: 'A centralized B2B ordering platform where your dealers can log in, view live stock, place orders, and track their ledger balances.',
    outcomes: [
      'Zero lost orders from WhatsApp chaos',
      'Automated invoice generation and ledger sync',
      'Faster order-to-cash cycles'
    ],
    bestFor: 'Chemical manufacturers in Vatva, ceramic traders in Morbi, and industrial distributors.',
    benefit: 'Centralize your B2B sales channels.',
    description: 'Stop taking orders on WhatsApp. Give your dealers a professional portal.',
    keyOutcomes: ['Live inventory sync', 'Ledger management', 'Automated order tracking'],
    typicalClients: 'Chemical manufacturers and industrial distributors.'
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp-First Lead & Support Bots',
    icon: 'MessageSquare',
    problem: 'Losing high-intent leads because your team cannot reply to inquiries instantly 24/7, or getting bogged down by repetitive customer questions.',
    solution: 'Official WhatsApp Business API integration with an intelligent bot that captures lead details, qualifies them, and handles basic support 24/7.',
    outcomes: [
      'Capture and qualify leads while you sleep',
      'Reduce manual WhatsApp follow-ups by 50%',
      'Seamless handover to human agents when needed'
    ],
    bestFor: 'Local clinics in Anand/Vadodara, real estate brokers, and retail showrooms.',
    benefit: 'Never miss a lead again.',
    description: 'Automate your customer service and lead qualification.',
    keyOutcomes: ['24/7 Lead capture', 'Automated FAQs', 'CRM integration'],
    typicalClients: 'Local clinics, real estate brokers, and retail showrooms.'
  },
  {
    id: 'owner-dashboards',
    title: 'Custom Dashboards for Owners',
    icon: 'Cpu',
    problem: 'Waiting for your accountant to send Excel reports at the end of the month to know your cash flow, pending collections, or project status.',
    solution: 'A secure, real-time dashboard pulling data from your existing tools to give you a bird\'s-eye view of your business health on your phone.',
    outcomes: [
      'Instant visibility into daily collections and expenses',
      'Track project profitability in real-time',
      'Make data-driven decisions without waiting for reports'
    ],
    bestFor: 'SME Founders and Managing Directors managing multiple business verticals.',
    benefit: 'Your business health at a glance.',
    description: 'Custom dashboards for real-time operational oversight.',
    keyOutcomes: ['Live cash flow tracking', 'Project health metrics', 'Mobile-friendly oversight'],
    typicalClients: 'SME Founders and Managing Directors.'
  }
];