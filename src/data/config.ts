export const BUSINESS_CONFIG = {
  name: 'Aetheria Studio',
  tagline: 'Engineering the next generation of digital excellence.',
  description: 'A premium software development studio in Gujarat, India, specializing in custom apps, WhatsApp automation, and local SEO for SMEs.',
  url: 'https://aetheria.studio', // Replace with real URL
  whatsappNumber: '919876543210',
  email: 'hello@aetheria.studio',
  logo: 'https://aetheria.studio/logo.png',
  address: {
    street: '102 Business Hub, Station Road',
    city: 'Anand',
    region: 'Gujarat',
    postalCode: '388001',
    country: 'India'
  },
  geo: {
    latitude: 22.5645,
    longitude: 72.9289
  },
  socials: {
    twitter: 'https://twitter.com/aetheria',
    linkedin: 'https://linkedin.com/company/aetheria',
    github: 'https://github.com/aetheria',
  },
  defaultMessages: {
    consultation: 'Hello! I would like to book a free strategy session for my project.',
    whatsappAudit: 'Hi, I saw your automation services and would like an audit of my current WhatsApp setup.',
    pricingInquiry: (planName: string) => `Hi, I'm interested in the ${planName} plan. Can we discuss how this fits my business?`,
  }
};
