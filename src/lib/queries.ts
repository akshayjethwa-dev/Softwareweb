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