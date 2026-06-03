import { sanityClient } from './sanityClient'

export async function fetchSiteConfig() {
  return sanityClient.fetch(`*[_type == "siteConfig"][0]`)
}

export async function fetchServices() {
  // Added GROQ object expansions so the frontend gets the actual objects, not just references
  return sanityClient.fetch(`*[_type == "service"] | order(order asc, _createdAt desc) {
    ...,
    "relatedProducts": relatedProducts[]->{ 
      _id, name, "slug": slug.current, tagline, "coverImageUrl": coverImage.asset->url 
    },
    "relatedSuccessStories": relatedSuccessStories[]->{ 
      _id, title, clientName, description, "slug": slug.current, "imageUrl": image.asset->url 
    }
  }`)
}

export async function fetchCaseStudies() {
  // Because you are querying the whole document with '*', 
  // 'role' and 'timeline' will automatically be fetched as long as they are defined in your Sanity Schema!
  return sanityClient.fetch(`*[_type == "caseStudy"] | order(order asc, _createdAt desc)`)
}

export async function fetchTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"]`)
}

export async function fetchFAQs() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc, _createdAt desc)`)
}

// --- NEW QUERY FOR PRODUCTS LISTING PAGE (Fixes the error) ---
export async function fetchProducts() {
  // Fetches visible products, prioritizes featured, then explicit order
  return sanityClient.fetch(`*[_type == "product" && showOnWebsite == true] | order(featuredProduct desc, order asc, _createdAt desc) {
    "id": _id,
    name,
    "slug": slug.current,
    tagline,
    status,
    productType,
    description,
    fullDescription,
    primaryProblemSolved,
    idealFor,
    keyFeatures,
    keyOutcomes,
    "coverImageUrl": coverImage.asset->url,
    "logoUrl": logo.asset->url,
    demoUrl,
    ctaLabel,
    ctaUrl,
    pricingModel,
    startingPriceText,
    showOnWebsite,
    featuredProduct
  }`)
}

// --- NEW QUERY FOR PRODUCT DETAIL PAGE ---
export async function fetchProductBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "product" && slug.current == $slug][0] {
    "id": _id,
    name,
    "slug": slug.current,
    tagline,
    status,
    productType,
    description,
    fullDescription,
    primaryProblemSolved,
    idealFor,
    keyFeatures,
    keyOutcomes,
    "coverImageUrl": coverImage.asset->url,
    "logoUrl": logo.asset->url,
    "gallery": gallery[]{ "url": asset->url, caption },
    demoUrl,
    ctaLabel,
    ctaUrl,
    pricingModel,
    startingPriceText,
    showOnWebsite,
    featuredProduct,
    seoTitle,
    seoDescription,
    // Expand relationships
    "industries": industries[]->{ _id, name, slug },
    "servicesRelated": servicesRelated[]->{ _id, title, "slug": slug.current, icon },
    "relatedCaseStudies": relatedCaseStudies[]->{ _id, title, "slug": slug.current, clientName, "imageUrl": image.asset->url },
    "faqs": faqs[]->{ question, answer }
  }`, { slug })
}