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

// --- PRODUCT SCHEMA ---

const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  preview: {
    select: {
      title: 'name',
      status: 'status',
      productType: 'productType',
      media: 'coverImage',
      logo: 'logo'
    },
    prepare({ title, status, productType, media, logo }) {
      const subtitleArray = [
        status ? status.replace(/-/g, ' ').toUpperCase() : 'NO STATUS',
        productType ? productType.replace(/-/g, ' ').toUpperCase() : 'NO TYPE'
      ]
      return {
        title: title || 'Untitled Product',
        subtitle: subtitleArray.join(' | '),
        media: media || logo
      }
    }
  },
  fields: [
    // Core Info & Validation
    defineField({ 
      name: 'name', title: 'Product Name', type: 'string',
      description: 'The official name of the product.',
      validation: (Rule) => Rule.required().error('Product Name is strictly required.') 
    }),
    defineField({ 
      name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' },
      description: 'Used for the product page URL (e.g., /products/your-product-slug).',
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: 'tagline', title: 'Short Tagline', type: 'string',
      description: 'A catchy one-liner summarizing the product.',
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: 'status', title: 'Status', type: 'string',
      description: 'Current lifecycle state of the product.',
      options: { list: ['live', 'beta', 'private', 'available-for-licensing', 'white-label-ready'] },
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: 'productType', title: 'Product Type', type: 'string',
      description: 'Categorization of the product structure.',
      options: { list: ['saas', 'internal-tool', 'marketplace', 'automation-platform', 'fintech-platform'] }
    }),
    
    // Descriptions
    defineField({ 
      name: 'description', title: 'Short Description', type: 'text',
      description: 'A brief 1-2 sentence overview for cards and listings.',
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: 'fullDescription', title: 'Full Description / Overview', type: 'text',
      description: 'Comprehensive overview for the main product detail page.',
      validation: (Rule) => Rule.required() 
    }),
    defineField({ name: 'primaryProblemSolved', title: 'Primary Problem Solved', type: 'text' }),
    defineField({ name: 'idealFor', title: 'Ideal For', type: 'string', description: 'Who is this product built for?' }),
    
    // Features & Outcomes
    defineField({ 
      name: 'keyFeatures', title: 'Key Features', type: 'array', 
      description: 'Add at least 3 core features of the product.',
      validation: (Rule) => Rule.required().min(3).error('You must add at least 3 Key Features.'),
      of: [{ 
        type: 'object', 
        fields: [
          {name: 'title', title: 'Feature Title', type: 'string', validation: Rule => Rule.required()}, 
          {name: 'description', title: 'Feature Description', type: 'text'}
        ] 
      }] 
    }),
    defineField({ name: 'keyOutcomes', title: 'Key Outcomes', type: 'array', of: [{ type: 'string' }] }),
    
    // Relationships
    defineField({ 
      name: 'industries', title: 'Industries', type: 'array', 
      description: 'Select which industries this product applies to.',
      of: [{ type: 'reference', to: [{ type: 'industry' }] }] 
    }),
    defineField({ 
      name: 'servicesRelated', title: 'Related Services', type: 'array', 
      of: [{ type: 'reference', to: [{ type: 'service' }] }] 
    }),
    
    // --- NEW: Trust Signals & Narrative (Tasks 4.1, 4.2 & 5.2) ---
    defineField({
      name: 'isBuiltInHouse',
      title: 'Built In-House Badge',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide the "Built In-House by Ashrey Systems" trust badge. Defaults to true.'
    }),
    defineField({
      name: 'founderNote',
      title: "Founder's Note",
      type: 'object',
      description: "Optional founder's perspective block to add narrative trust.",
      fields: [
        { name: 'text', title: 'Quote Text', type: 'text', description: 'The quote from the founder about why this product was built.' },
        { name: 'signature', title: 'Signature / Name', type: 'string', description: 'e.g., Akshay Jethwa' }
      ]
    }),
    defineField({
      name: 'relatedCaseStudies',
      title: 'Related Case Studies',
      type: 'array',
      description: 'Link products directly to case studies (Task 5.2).',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }]
    }),
    defineField({
      name: 'relatedCaseStudyLinks',
      title: 'External Success Story Links',
      type: 'array',
      description: 'Direct links to external success stories to build trust.',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Link Title', type: 'string' },
          { name: 'url', title: 'URL', type: 'url' }
        ]
      }]
    }),
    // --------------------------------------------------------

    // Media
    defineField({ 
      name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true },
      description: 'Main image used for preview cards and headers.',
    }),
    defineField({ 
      name: 'gallery', 
      title: 'Product Gallery / Screenshots', 
      type: 'array', 
      of: [{ 
        type: 'image', 
        options: { hotspot: true },
        fields: [{ name: 'caption', type: 'string', title: 'Caption' }]
      }] 
    }),
    defineField({ name: 'logo', title: 'Product Logo / Wordmark', type: 'image', options: { hotspot: true } }),
    
    // Calls to Action & Pricing
    defineField({ name: 'demoUrl', title: 'Demo URL', type: 'url' }),
    defineField({ 
      name: 'ctaLabel', title: 'CTA Label', type: 'string',
      description: 'Text for the primary button (e.g., "Request Demo", "Get Started").'
    }),
    defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'url' }),
    defineField({ 
      name: 'pricingModel', title: 'Pricing Model', type: 'string',
      options: { list: ['custom', 'license', 'subscription', 'private'] }
    }),
    defineField({ name: 'startingPriceText', title: 'Starting Price Text', type: 'string', description: 'e.g., "Starts at $99/mo" or "Custom Pricing"' }),
    
    // Toggles & Admin
    defineField({ 
      name: 'showOnWebsite', title: 'Product Visibility Toggle (Show on Website)', type: 'boolean', initialValue: true,
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: 'featuredProduct', title: 'Featured Toggle', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number', description: 'Used to control display order.' }),
    
    // SEO Settings
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text' }),
    defineField({ name: 'seoKeywords', title: 'SEO Keywords', type: 'string' }),
    defineField({ name: 'faqs', title: 'FAQ References', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
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
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Used to sort items on the website (e.g., 1, 2, 3)' }), 
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
    // NEW: Task 5.1
    defineField({ name: 'relatedProducts', title: 'Relevant Products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }),
  ]
})

const caseStudy = defineType({
  name: 'caseStudy', title: 'Case Study', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Used to sort case studies on the website (e.g., 1, 2, 3)' }), 
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
    // NEW: Task 5.2
    defineField({ name: 'relatedProducts', title: 'Products Used', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }] }),
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
    defineField({ name: 'order', title: 'Display Order', type: 'number', description: 'Used to sort FAQs' }), 
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
  service, caseStudy, article, faq, testimonial, plan,
  product
]