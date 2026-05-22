import { sanityClient } from '../lib/sanityClient';
import { fetchSiteConfig } from '../lib/queries';
// --- ASYNC FETCH FUNCTIONS ---

export const getServices = async () => {
  // We map slug.current to "id" so your React components don't break
  return sanityClient.fetch(`*[_type == "service"] | order(title asc) {
    ...,
    "id": slug.current,
    "faqs": faqs[]->{question, answer}
  }`);
};

export const getServiceById = async (slug: string) => {
  return sanityClient.fetch(`*[_type == "service" && slug.current == $slug][0]{
    ...,
    "id": slug.current,
    "faqs": faqs[]->{question, answer}
  }`, { slug });
};

export const getCaseStudies = async () => {
  return sanityClient.fetch(`*[_type == "caseStudy"] | order(_createdAt desc) {
    ...,
    "id": slug.current,
    "imageUrl": image.asset->url 
  }`);
};

export const getCaseStudyById = async (slug: string) => {
  return sanityClient.fetch(`*[_type == "caseStudy" && slug.current == $slug][0] {
    ...,
    "id": slug.current,
    "imageUrl": image.asset->url
  }`, { slug });
};

export const getArticles = async () => {
  return sanityClient.fetch(`*[_type == "article"] | order(date desc) {
    ...,
    "id": slug.current,
    "imageUrl": image.asset->url
  }`);
};

export const getArticleBySlug = async (slug: string) => {
  return sanityClient.fetch(`*[_type == "article" && slug.current == $slug][0] {
    ...,
    "id": slug.current,
    "imageUrl": image.asset->url
  }`, { slug });
};

export const getPlans = async () => {
  return sanityClient.fetch(`*[_type == "plan"] | order(price asc)`);
};

export const getTestimonials = async () => {
  return sanityClient.fetch(`*[_type == "testimonial"] {
    ...,
    "avatar": avatar.asset->url
  }`);
};

export const getFAQs = async () => {
  return sanityClient.fetch(`*[_type == "faq"]`);
};

// For static things you haven't moved to Sanity yet, you can keep them static for now:
import { siteConfig } from './siteConfig';
import { process } from './process';
import { industries } from './industries';
import { navItems } from './navigation';

// getSiteConfigAsync now tries Sanity first, falls back to static
export async function getSiteConfigAsync() {
  try {
    const data = await fetchSiteConfig();
    return data ?? siteConfig;
  } catch (error) {
    console.error("Failed to fetch Site Config from Sanity, using fallback:", error);
    return siteConfig; // fallback if Sanity is unreachable
  }
}

export const getSiteConfig = () => siteConfig;
export const getProcess = () => process;
export const getIndustries = () => industries;
export const getNavItems = () => navItems;