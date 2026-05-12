import { PricingPlan } from '../types';

export const plans: PricingPlan[] = [
  {
    id: 'project-build',
    name: 'Project-Based Build',
    model: 'Project',
    price: 'Custom quote',
    idealFor: 'Startups & SMEs needing new products.',
    description: 'A focused, high-speed engineering sprint to bring your core vision to life from scratch.',
    features: [
      'Strategic Architecture',
      'High-Fidelity UI/UX',
      'Core Product Development',
      'Cloud Launch & 2-Month Support',
      'Full Source Code Ownership'
    ],
    ctaLabel: 'Book a Strategy Call',
  },
  {
    id: 'automation-maintenance',
    name: 'Ops & Automation',
    model: 'Subscription',
    price: '$2,500/mo',
    billingNote: 'Billed monthly. Cancel anytime.',
    idealFor: 'Businesses wanting ongoing growth and stability.',
    description: 'Your external technical team for WhatsApp tweaks, landing pages, and infrastructure health.',
    features: [
      'WhatsApp Bot Management',
      'Performance Optimization',
      'Security Patching & Backups',
      'Up to 20 Development Hours',
      'Priority Technical Support'
    ],
    limitations: ['Excludes major features', 'Single product focus'],
    recommended: true,
    ctaLabel: 'Join the Retainer',
  },
  {
    id: 'growth-partner',
    name: 'Growth Partner',
    model: 'Subscription',
    price: '$6,000/mo',
    billingNote: 'Billed monthly. Fractional CTO included.',
    idealFor: 'Scaling brands needing continuous engineering power.',
    description: 'High-tier technical partnership for ongoing product evolution and strategic scaling.',
    features: [
      'Dedicated Product Lead',
      'Fractional CTO Consultation',
      'Unlimited Maintenance',
      'Up to 60 Development Hours',
      'Weekly Strategic Reviews',
      'Infrastructure Scaling'
    ],
    recommended: false,
    ctaLabel: 'Level Up Now',
  },
];
