import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'custom-apps',
    title: 'Custom Web & Mobile Apps',
    benefit: 'Own your platform, don\'t rent it.',
    description: 'Bespoke software solutions tailored to your unique business logic and growth trajectory.',
    icon: 'Smartphone',
    keyOutcomes: ['Cloud-Native Architecture', 'Seamless UX', 'Enterprise-Grade Security'],
    typicalClients: 'SMEs looking for proprietary workflows.',
    metaTitle: 'Custom Software & Mobile App Development | Aetheria Studio',
    metaDescription: 'We build scalable web and mobile applications tailored to Gujarat\'s growing SMEs. Engineering excellence for your unique business logic.',
    fullDescription: 'In a world of template solutions, custom software is your competitive advantage. We architect applications that don\'t just "work" but solve specific operational bottlenecks. Whether it\'s a custom CRM for your medical clinic or a proprietary inventory system for your factory, we build with scale and security at the core.',
    features: [
      { title: 'Full-Stack Excellence', description: 'React, Node.js, and Cloud-native architectures ensuring sub-second response times.' },
      { title: 'Mobile-First Design', description: 'Native-feel experiences for Android and iOS that keep users engaged.' },
      { title: 'API Integration', description: 'Connecting your existing tools (ERP, Accounting, CRM) into a single source of truth.' }
    ],
    faqs: [
      { question: 'How long does a typical build take?', answer: 'An MVP usually takes 8-12 weeks, depending on complexity. We follow an agile process with bi-weekly updates.' },
      { question: 'Who owns the source code?', answer: 'You do. Upon full payment, the IP and source code are transferred to your business.' }
    ]
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp API & Automation',
    benefit: 'Connect where your customers live.',
    description: 'Streamline customer engagement with intelligent, scale-ready WhatsApp business workflows.',
    icon: 'MessageSquare',
    keyOutcomes: ['Automated Lead Qualification', '24/7 Customer Support', 'Instant Notifications'],
    typicalClients: 'Retailers and service providers.',
    metaTitle: 'WhatsApp Business API & Chatbot Automation | Aetheria Studio',
    metaDescription: 'Automate your customer service and lead qualification with Official WhatsApp API. 24/7 engagement for your business in Gujarat.',
    fullDescription: 'Email is ignored. SMS is spam. But WhatsApp is where your customers are. Our WhatsApp automation services help you leverage the Official Business API to send automated notifications, qualify leads with AI chatbots, and handle customer support at scale without increasing your team size.',
    features: [
      { title: 'Official API Setup', description: 'Leave the documentation to us. We handle the Meta verification and API provisioning.' },
      { title: 'Lead Qualifiers', description: 'Automated chatbots that ask the right questions before a human ever steps in.' },
      { title: 'Bulk Notifications', description: 'Send order updates, appointment reminders, and promotional alerts legally and safely.' }
    ]
  },
  {
    id: 'lead-gen-funnels',
    title: 'Lead Generation Funnels',
    benefit: 'High-intent traffic, higher conversion.',
    description: 'High-performing, SEO-friendly landing pages designed to capture and convert more leads.',
    icon: 'Zap',
    keyOutcomes: ['Psychology-Driven UX', 'Fast Loading Times', 'A/B Tested Layouts'],
    typicalClients: 'Real Estate and Education consultancies.',
    metaTitle: 'Lead Generation Funnels & Landing Page Optimization | Aetheria Studio',
    metaDescription: 'High-conversion funnels designed for real estate and education firms in Gujarat. Maximize your ad spend with engineering-led design.',
    fullDescription: 'Traffic without conversion is just an expense. We build "Engineering-Led Funnels"—landing pages that load in under 1 second and use behavioral psychology to guide visitors toward a conversion. Perfect for businesses in high-competition industries like Real Estate and Coaching.'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Performance',
    benefit: 'Be found first in your region.',
    description: 'Dominating search results to connect your business with high-intent local customers.',
    icon: 'Globe',
    keyOutcomes: ['GMB Optimization', 'Technical Performance', 'Local Content Strategy'],
    typicalClients: 'Gujarat-based medical clinics and salons.',
    metaTitle: 'Local SEO & Technical Website Optimization Gujarat | Aetheria Studio',
    metaDescription: 'Dominate Google search results in your city. Specialized Local SEO for doctors, clinics, and SMEs in Anand and Vadodara.',
    fullDescription: 'If a customer searches for your service "near me" and you aren\'t in the Top 3, you\'re losing money. Our Local SEO strategy goes beyond just keywords; we optimize your technical core web vitals, manage your Google Business Profile, and build a local citation network that makes you the authority in your region.'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    benefit: 'Zero downtime, total peace of mind.',
    description: 'Dedicated support systems to keep your digital infrastructure resilient and performing.',
    icon: 'ShieldCheck',
    keyOutcomes: ['Security Patching', 'Cloud Monitoring', 'Priority Updates'],
    typicalClients: 'Long-term partners wanting growth stability.'
  },
];
