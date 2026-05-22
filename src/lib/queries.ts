import { sanityClient } from './sanityClient'

// Fetch site config (singleton document)
export async function fetchSiteConfig() {
  return sanityClient.fetch(`*[_type == "siteConfig"][0]`)
}

// Fetch all services, sorted by order
export async function fetchServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(order asc)`)
}

// Fetch all case studies
export async function fetchCaseStudies() {
  return sanityClient.fetch(`*[_type == "caseStudy"] | order(order asc)`)
}

// Fetch all testimonials
export async function fetchTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"]`)
}

// Fetch all FAQs
export async function fetchFAQs() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc)`)
}