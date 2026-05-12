import { services } from './services';
import { industries } from './industries';
import { caseStudies } from './caseStudies';
import { plans } from './plans';
import { process } from './process';
import { faqs } from './faqs';
import { navItems } from './navigation';
import { testimonials } from './testimonials';
import { siteConfig } from './siteConfig';
import { articles } from './blog';

export const getServices = () => services;
export const getIndustries = () => industries;
export const getCaseStudies = () => caseStudies;
export const getPlans = () => plans;
export const getProcess = () => process;
export const getFAQs = () => faqs;
export const getNavItems = () => navItems;
export const getTestimonials = () => testimonials;
export const getSiteConfig = () => siteConfig;
export const getArticles = () => articles;

// Helper to get service by ID
export const getServiceById = (id: string) => services.find(s => s.id === id);

// Helper to get case study by ID
export const getCaseStudyById = (id: string) => caseStudies.find(cs => cs.id === id);

// Helper to get industry by ID
export const getIndustryById = (id: string) => industries.find(ind => ind.id === id);

// Helper to get article by slug
export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
