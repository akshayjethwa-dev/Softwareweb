import {defineType, defineField} from 'sanity'

const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'icon', title: 'Icon Name (e.g., Users, Workflow, Cpu)', type: 'string' }),
    defineField({ name: 'problem', title: 'The Problem', type: 'text' }),
    defineField({ name: 'solution', title: 'The Solution', type: 'text' }),
    defineField({ name: 'outcomes', title: 'Key Outcomes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'bestFor', title: 'Best For (Target Audience)', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'fullDescription', title: 'Full Description', type: 'text' }),
    defineField({ name: 'keyOutcomes', title: 'Key Outcomes (Bullet points)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'typicalClients', title: 'Typical Clients', type: 'text' }),
    defineField({ 
      name: 'features', 
      title: 'Core Capabilities', 
      type: 'array', 
      of: [{ type: 'object', fields: [{name: 'title', type: 'string'}, {name: 'description', type: 'text'}] }] 
    }),
    defineField({ name: 'faqs', title: 'Related FAQs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
  ]
})

const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'clientName', title: 'Client Name', type: 'string' }),
    defineField({ name: 'category', title: 'Category (e.g., Fintech, Healthcare)', type: 'string' }),
    defineField({ name: 'industryId', title: 'Industry ID', type: 'string' }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'problem', title: 'The Challenge', type: 'text' }),
    defineField({ name: 'solution', title: 'Our Solution', type: 'text' }),
    defineField({ name: 'impact', title: 'Key Impacts & Results', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'servicesUsed', title: 'Services Used', type: 'array', of: [{ type: 'string' }] }),
  ]
})

const article = defineType({
  name: 'article',
  title: 'Article / Insight',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({ name: 'content', title: 'Content (Markdown)', type: 'text' }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date' }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string', 
      options: { list: ['App Development', 'WhatsApp Automation', 'Local SEO', 'SME Digital Transformation'] } 
    }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'readTime', title: 'Read Time (e.g., 5 min)', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
  ]
})

const faq = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'string' }),
    defineField({ name: 'answer', title: 'Answer', type: 'text' }),
  ]
})

const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'company', title: 'Company', type: 'string' }),
    defineField({ name: 'content', title: 'Quote / Content', type: 'text' }),
    defineField({ name: 'avatar', title: 'Avatar Image', type: 'image', options: { hotspot: true } }),
  ]
})

const plan = defineType({
  name: 'plan',
  title: 'Pricing Plan',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Plan Name', type: 'string' }),
    defineField({ name: 'model', title: 'Model Type', type: 'string', options: { list: ['Project', 'Subscription', 'Partnership'] } }),
    defineField({ name: 'price', title: 'Price String (e.g. $2,500/mo)', type: 'string' }),
    defineField({ name: 'billingNote', title: 'Billing Note', type: 'string' }),
    defineField({ name: 'idealFor', title: 'Ideal For', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'features', title: 'Features Included', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'limitations', title: 'Limitations', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'recommended', title: 'Highlight as Recommended?', type: 'boolean', initialValue: false }),
    defineField({ name: 'ctaLabel', title: 'CTA Button Label', type: 'string' }),
  ]
})

export const schemaTypes = [service, caseStudy, article, faq, testimonial, plan]