import { sanityClient } from './sanityClient'

export async function fetchSiteConfig() {
  return sanityClient.fetch(`*[_type == "siteConfig"][0]`)
}

export async function fetchServices() {
  // Sorts by order first, then falls back to newest created
  return sanityClient.fetch(`*[_type == "service"] | order(order asc, _createdAt desc)`)
}

export async function fetchCaseStudies() {
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