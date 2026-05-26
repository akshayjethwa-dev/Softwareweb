export interface Service {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
  bestFor: string;
  icon: string;
  benefit?: string;
  description?: string;
  keyOutcomes?: string[];
  typicalClients?: string;
  metaTitle?: string;
  metaDescription?: string;
  fullDescription?: string;
  features?: { title: string; description: string }[];
  faqs?: FAQ[];
  // Task 5.1: Added relatedProducts
  relatedProducts?: { id: string; name: string; slug: string; tagline: string; coverImageUrl?: string }[];
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
  metaTitle?: string;
  metaDescription?: string;
  // Task 5.2: Added relatedProducts
  relatedProducts?: { id: string; name: string; slug: string; tagline: string; coverImageUrl?: string }[];
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

// --- PRODUCT INTERFACE ---
export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  status: 'live' | 'beta' | 'private' | 'available-for-licensing' | 'white-label-ready';
  productType?: 'saas' | 'internal-tool' | 'marketplace' | 'automation-platform' | 'fintech-platform';
  description: string;
  fullDescription: string;
  primaryProblemSolved?: string;
  idealFor?: string;
  keyFeatures: { title: string; description?: string }[];
  keyOutcomes?: string[];
  coverImageUrl?: string;
  logoUrl?: string;
  gallery?: { url: string; caption?: string }[];
  demoUrl?: string;
  ctaLabel: string;
  ctaUrl?: string;
  pricingModel?: 'custom' | 'license' | 'subscription' | 'private';
  startingPriceText?: string;
  showOnWebsite: boolean;
  featuredProduct?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  
  isBuiltInHouse?: boolean; 
  relatedCaseStudyLinks?: { title: string; url: string }[];
  
  // Task 5.2: Added relatedCaseStudies for internal CMS references
  relatedCaseStudies?: { _id: string; title: string; slug: string; clientName: string; imageUrl?: string }[];
  
  founderNote?: {
    text: string;
    signature?: string;
  };

  industries?: { _id: string; name: string; slug: { current: string } }[];
  servicesRelated?: { _id: string; title: string; slug: string; icon: string }[];
  faqs?: FAQ[];
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