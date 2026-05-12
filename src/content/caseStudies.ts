import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'nexus-pay',
    title: 'NexusPay Settlements',
    clientName: 'NexusPay Global',
    category: 'Fintech',
    industryId: 'local-services',
    description: 'A blockchain-powered settlements engine for cross-border B2B payments.',
    problem: 'Manual reconciliation was causing 3-day delays in vendor payouts, leading to friction in vendor relationships and high operational overhead.',
    solution: 'Automated ledger system with real-time tracking, integrated with Ethereum smart contracts for instant verification, and automated WhatsApp notifications for payment status.',
    impact: [
      '95% reduction in reconciliation time',
      'Same-day vendor payouts achieved',
      '2 full-time staff members redeployed'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbb6518147ad?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Solidity'],
    servicesUsed: ['custom-apps', 'whatsapp-automation'],
  },
  {
    id: 'orbit-health',
    title: 'Orbit Telemedicine',
    clientName: 'Orbit Health Group',
    category: 'Healthcare',
    industryId: 'local-services',
    description: 'Distributed healthcare platform serving half a million patients.',
    problem: 'High latency in rural video calls and a messy appointment scheduling system resulted in a 40% patient drop-off rate.',
    solution: 'Peer-to-peer optimized streaming using WebRTC and a fully automated WhatsApp booking engine that handles reminders.',
    impact: [
      '400% increase in monthly visits',
      'Patient retention improved by 65%',
      'Scheduling overhead reduced by 80%'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    techStack: ['Next.js', 'WebRTC', 'Firebase', 'Twilio'],
    servicesUsed: ['custom-apps', 'whatsapp-automation', 'maintenance'],
  },
  {
    id: 'chem-logistics',
    title: 'ChemLog Track',
    clientName: 'Astra Chemicals',
    category: 'Manufacturing',
    industryId: 'manufacturing',
    description: 'Inventory and workforce tracking for a leading chemical plant.',
    problem: 'Zero internet penetration in warehouse zones meant workers used paper logs, leading to 15% discrepancy in reports.',
    solution: 'An offline-first PWA with background synchronization. Workers use tablets to scan assets, and data syncs automatically.',
    impact: [
      'Inventory discrepancies reduced to <1%',
      'Real-time workforce visibility',
      'Eliminated 2,000+ paper forms per month'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'IndexedDB', 'Node.js', 'Docker', 'SQLite'],
    servicesUsed: ['custom-apps', 'maintenance'],
  },
];
