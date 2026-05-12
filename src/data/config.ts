export const BUSINESS_CONFIG = {
  name: 'Ashrey Systems',
  tagline: 'Engineering the next generation of digital excellence.',
  description: 'A premium software development studio in Gujarat, India, specializing in custom apps, WhatsApp automation, and local SEO for SMEs.',
  url: 'https://ashrey.systems', // Replace with real URL
  whatsappNumber: '919876543210',
  email: 'hello@ashrey.systems',
  logo: 'https://ashrey.systems/logo.png',
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
    twitter: 'https://twitter.com/ashrey_systems',
    linkedin: 'https://linkedin.com/company/ashrey_systems',
    github: 'https://github.com/ashrey_systems',
  },
  defaultMessages: {
    consultation: 'Hello! I would like to book a free strategy session for my project.',
    whatsappAudit: 'Hi, I saw your automation services and would like an audit of my current WhatsApp setup.',
    pricingInquiry: (planName: string) => `Hi, I'm interested in the ${planName} plan. Can we discuss how this fits my business?`,
  }
};
