import { ProcessStep } from '../types';

export const process: ProcessStep[] = [
  {
    id: 'discovery',
    title: 'Architecture & Discovery',
    description: 'We don\'t start with code; we start with your business logic.',
    details: ['Workflow Mapping', 'Tech Risk Audit', 'Feature Prioritization'],
  },
  {
    id: 'prototyping',
    title: 'Rapid Prototyping',
    description: 'Interactive wireframes that validate UX before a single line is written.',
    details: ['User Journey Design', 'Edge Case Review', 'Stakeholder Demo'],
  },
  {
    id: 'engineering',
    title: 'Aggressive Engineering',
    description: 'Bi-weekly sprints with high-quality, type-safe code and automated tests.',
    details: ['TDD Approach', 'Weekly Live Staging', 'Real-time Commits'],
  },
  {
    id: 'scale',
    title: 'Launch & Expansion',
    description: 'Going live is just the beginning. We optimize for high traffic from day one.',
    details: ['Lead Funnel Monitoring', 'Performance Tuning', 'Scaling Roadmap'],
  },
];
