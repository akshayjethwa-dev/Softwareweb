// src/content/index.ts
import { sanityClient } from '../lib/sanityClient';
import { fetchSiteConfig } from '../lib/queries';

// --- ASYNC FETCH FUNCTIONS WITH GRACEFUL FALLBACKS ---

export const getServices = async () => {
  try {
    const data = await sanityClient.fetch(`*[_type == "service"] | order(title asc) {
      ...,
      "id": slug.current,
      "faqs": faqs[]->{question, answer}
    }`);
    return data || [];
  } catch (error) {
    console.error("Sanity fetch failed for Services:", error);
    return [];
  }
};

export const getServiceById = async (slug: string) => {
  try {
    return await sanityClient.fetch(`*[_type == "service" && slug.current == $slug][0]{
      ...,
      "id": slug.current,
      "faqs": faqs[]->{question, answer}
    }`, { slug });
  } catch (error) {
    console.error(`Sanity fetch failed for Service ${slug}:`, error);
    return null;
  }
};

export const getCaseStudies = async () => {
  try {
    const data = await sanityClient.fetch(`*[_type == "caseStudy"] | order(_createdAt desc) {
      ...,
      "id": slug.current,
      "imageUrl": image.asset->url 
    }`);
    return data || [];
  } catch (error) {
    console.error("Sanity fetch failed for Case Studies:", error);
    return [];
  }
};

export const getCaseStudyById = async (slug: string) => {
  try {
    return await sanityClient.fetch(`*[_type == "caseStudy" && slug.current == $slug][0] {
      ...,
      "id": slug.current,
      "imageUrl": image.asset->url
    }`, { slug });
  } catch (error) {
    console.error(`Sanity fetch failed for Case Study ${slug}:`, error);
    return null;
  }
};

export const getArticles = async () => {
  try {
    const data = await sanityClient.fetch(`*[_type == "article"] | order(date desc) {
      ...,
      "id": slug.current,
      "imageUrl": image.asset->url
    }`);
    return data || [];
  } catch (error) {
    console.error("Sanity fetch failed for Articles:", error);
    return [];
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    return await sanityClient.fetch(`*[_type == "article" && slug.current == $slug][0] {
      ...,
      "id": slug.current,
      "imageUrl": image.asset->url
    }`, { slug });
  } catch (error) {
    console.error(`Sanity fetch failed for Article ${slug}:`, error);
    return null;
  }
};

export const getPlans = async () => {
  try {
    const data = await sanityClient.fetch(`*[_type == "plan"] | order(price asc)`);
    return data || [];
  } catch (error) {
    console.error("Sanity fetch failed for Plans:", error);
    return [];
  }
};

export const getTestimonials = async () => {
  try {
    const data = await sanityClient.fetch(`*[_type == "testimonial"] {
      ...,
      "avatar": avatar.asset->url
    }`);
    return data || [];
  } catch (error) {
    console.error("Sanity fetch failed for Testimonials:", error);
    return [];
  }
};

export const getFAQs = async () => {
  try {
    const data = await sanityClient.fetch(`*[_type == "faq"]`);
    return data || [];
  } catch (error) {
    console.error("Sanity fetch failed for FAQs:", error);
    return [];
  }
};

// --- STATIC MODULES (Kept as requested since they are not in Sanity yet) ---
import { siteConfig } from './siteConfig';
import { process } from './process';
import { industries } from './industries';
import { navItems } from './navigation';

export async function getSiteConfigAsync() {
  try {
    const data = await fetchSiteConfig();
    return data ?? siteConfig;
  } catch (error) {
    console.error("Failed to fetch Site Config from Sanity, using fallback:", error);
    return siteConfig;
  }
}

export const getSiteConfig = () => siteConfig;
export const getProcess = () => process;
export const getIndustries = () => industries;
export const getNavItems = () => navItems;