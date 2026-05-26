import {defineType, defineField} from 'sanity'

// --- NEW MARKETING SCHEMAS ---

const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'details', title: 'Details / Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Order / Step Number', type: 'number', description: 'Used to sort the steps (e.g., 1, 2, 3)' }),
  ]
})

const industry = defineType({
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Industry Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'exampleUseCases', title: 'Example Use Cases', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'keyFeatures', title: 'Key Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ]
})

const whyUsPoint = defineType({
  name: 'whyUsPoint',
  title: 'Why Us Point',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'desc', title: 'Description', type: 'text' }),
    defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ]
})

// --- EXISTING SCHEMAS ---

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Business Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'url', title: 'Website URL', type: 'url' }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'founderName', title: 'Founder Name', type: 'string' }),
    defineField({ name: 'founderRole', title: 'Founder Role', type: 'string' }),
    defineField({ name: 'address', title: 'Physical Address', type: 'text' }),
  ]
})

const service = defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'icon', title: 'Icon Name', type: 'string' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Used to sort items on the website (e.g., 1, 2, 3)' }), // Added missing field
    defineField({ name: 'problem', title: 'The Problem', type: 'text' }),
    defineField({ name: 'solution', title: 'The Solution', type: 'text' }),
    defineField({ name: 'outcomes', title: 'Key Outcomes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'bestFor', title: 'Best For', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'fullDescription', title: 'Full Description', type: 'text' }),
    defineField({ name: 'keyOutcomes', title: 'Key Outcomes (Bullets)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'typicalClients', title: 'Typical Clients', type: 'text' }),
    defineField({ name: 'features', title: 'Core Capabilities', type: 'array', of: [{ type: 'object', fields: [{name: 'title', type: 'string'}, {name: 'description', type: 'text'}] }] }),
    defineField({ name: 'faqs', title: 'Related FAQs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
  ]
})

const caseStudy = defineType({
  name: 'caseStudy', title: 'Case Study', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Used to sort case studies on the website (e.g., 1, 2, 3)' }), // Added missing field
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'industryId', title: 'Industry ID', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'problem', title: 'The Challenge', type: 'text' }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text' }),
    defineField({ name: 'impact', title: 'Key Impacts', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'servicesUsed', title: 'Services Used', type: 'array', of: [{ type: 'string' }] }),
  ]
})

const article = defineType({
  name: 'article', title: 'Article', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({ name: 'content', title: 'Content (Markdown)', type: 'text' }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['App Development', 'WhatsApp Automation', 'Local SEO', 'SME Digital Transformation'] } }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
  ]
})

const faq = defineType({
  name: 'faq', title: 'FAQ', type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string' }),
    defineField({ name: 'answer', title: 'Answer', type: 'text' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Used to sort FAQs' }), // Added missing field
  ]
})

const testimonial = defineType({
  name: 'testimonial', title: 'Testimonial', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'content', title: 'Quote', type: 'text' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
  ]
})

const plan = defineType({
  name: 'plan', title: 'Pricing Plan', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Plan Name', type: 'string' }),
    defineField({ name: 'model', title: 'Model Type', type: 'string', options: { list: ['Project', 'Subscription', 'Partnership'] } }),
    defineField({ name: 'price', title: 'Price String', type: 'string' }),
    defineField({ name: 'billingNote', title: 'Billing Note', type: 'string' }),
    defineField({ name: 'idealFor', title: 'Ideal For', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'limitations', title: 'Limitations', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'recommended', title: 'Recommended?', type: 'boolean', initialValue: false }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
  ]
})

export const schemaTypes = [
  siteSettings, processStep, industry, whyUsPoint,
  service, caseStudy, article, faq, testimonial, plan
]