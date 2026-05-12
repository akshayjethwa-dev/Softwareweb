import { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Chemicals & Manufacturing',
    description: 'Optimizing supply chains and workforce management for Gujarat\'s industrial backbone.',
    exampleUseCases: ['Inventory Tracking Apps', 'Staff Attendance Portals', 'Logistics Dashboards'],
    keyFeatures: ['Offline Mode Support', 'Data Syncing', 'Role-Based Access'],
    recommendedServices: ['custom-apps', 'maintenance'],
  },
  {
    id: 'sme-workforce',
    name: 'SME Workforce Management',
    description: 'Replacing messy spreadsheets with streamlined digital portals for HR and operations.',
    exampleUseCases: ['Payroll Automation', 'Contractor Portals', 'Task Delegation Tools'],
    keyFeatures: ['Ease of Use', 'Mobile Accessibility', 'Reporting Engines'],
    recommendedServices: ['custom-apps', 'whatsapp-automation'],
  },
  {
    id: 'local-services',
    name: 'Local Service Businesses',
    description: 'Enabling clinics, salons, and coaches to automate bookings and capture leads via WhatsApp.',
    exampleUseCases: ['Appointment Bots', 'Review Generation Funnels', 'Loyalty Programs'],
    keyFeatures: ['Lead Capture', 'Automated Reminders', 'Seamless Payments'],
    recommendedServices: ['whatsapp-automation', 'lead-gen-funnels', 'local-seo'],
  },
  {
    id: 'real-estate-edu',
    name: 'Real Estate & Education',
    description: 'Powering high-volume inquiry management with intelligent chat automation and SEO sites.',
    exampleUseCases: ['Property Portfolio Sites', 'Admissions Chatbots', 'Virtual Tour Booking'],
    keyFeatures: ['Conversion Design', 'CRM Integration', 'Omnichannel Reach'],
    recommendedServices: ['lead-gen-funnels', 'whatsapp-automation', 'local-seo'],
  },
];
