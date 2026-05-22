export interface Service {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
  bestFor: string;
  icon: string;
  // Keeping older fields optional for backwards compatibility with other pages
  benefit?: string;
  description?: string;
  keyOutcomes?: string[];
  typicalClients?: string;
  metaTitle?: string;
  metaDescription?: string;
  fullDescription?: string;
  features?: { title: string; description: string }[];
  faqs?: FAQ[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  exampleUseCases: string[];
  keyFeatures: string[];
  recommendedServices: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  category: string;
  industryId: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  imageUrl: string;
  techStack: string[];
  servicesUsed: string[];
  // SEO fields
  metaTitle?: string;
  metaDescription?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  model: 'Project' | 'Subscription' | 'Partnership';
  price: string;
  billingNote?: string;
  idealFor: string;
  description: string;
  features: string[];
  limitations?: string[];
  recommended?: boolean;
  ctaLabel: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  category: 'App Development' | 'WhatsApp Automation' | 'Local SEO' | 'SME Digital Transformation';
  imageUrl: string;
  readTime: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  navItems: NavItem[];
  services: Service[];
  industries: Industry[];
  caseStudies: CaseStudy[];
  pricing: PricingPlan[];
  process: ProcessStep[];
  faqs: FAQ[];
}
