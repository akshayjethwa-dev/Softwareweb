// src/content/index.ts
import { sanityClient } from '../lib/sanityClient';

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

// --- STATIC MODULES & NEW ASYNC WRAPPERS ---
import { process } from './process';
import { industries } from './industries';
import { navItems } from './navigation';
import { BUSINESS_CONFIG } from '../data/config';

export async function getSiteConfigAsync() {
  try {
    // Attempt to fetch the siteSettings singleton from Sanity
    const sanityData = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
    
    if (sanityData) {
      // If it exists in Sanity, merge it with our local BUSINESS_CONFIG
      return {
        ...BUSINESS_CONFIG,
        name: sanityData.name || BUSINESS_CONFIG.name,
        tagline: sanityData.tagline || BUSINESS_CONFIG.tagline,
        description: sanityData.description || BUSINESS_CONFIG.description,
        url: sanityData.url || BUSINESS_CONFIG.url,
        whatsappNumber: sanityData.whatsappNumber || BUSINESS_CONFIG.whatsappNumber,
        email: sanityData.email || BUSINESS_CONFIG.email,
        founderName: sanityData.founderName || BUSINESS_CONFIG.founderName,
      };
    }
    
    // Fallback to static if document hasn't been created yet
    return BUSINESS_CONFIG;
  } catch (error) {
    console.error("Failed to fetch Site Settings from Sanity, using fallback:", error);
    return BUSINESS_CONFIG;
  }
}

// 1. Process Fetcher
export async function getProcessAsync() {
  try {
    const data = await sanityClient.fetch(`*[_type == "processStep"] | order(order asc) { ..., "id": _id }`);
    return data && data.length > 0 ? data : process;
  } catch (error) {
    console.error("Failed to fetch Process Steps from Sanity:", error);
    return process; // fallback
  }
}

// 2. Industries Fetcher
export async function getIndustriesAsync() {
  try {
    const data = await sanityClient.fetch(`*[_type == "industry"] | order(order asc) { ..., "id": slug.current }`);
    return data && data.length > 0 ? data : industries;
  } catch (error) {
    console.error("Failed to fetch Industries from Sanity:", error);
    return industries; // fallback
  }
}

// 3. Why Us Fetcher
export async function getWhyUsAsync() {
  try {
    const data = await sanityClient.fetch(`*[_type == "whyUsPoint"] | order(order asc)`);
    return data && data.length > 0 ? data : null;
  } catch (error) {
    console.error("Failed to fetch Why Us Points from Sanity:", error);
    return null;
  }
}

export const getSiteConfig = () => BUSINESS_CONFIG;
export const getProcess = () => process;
export const getIndustries = () => industries;
export const getNavItems = () => navItems;