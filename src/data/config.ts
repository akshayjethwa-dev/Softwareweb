export const BUSINESS_CONFIG = {
  name: 'Ashrey Systems', // Update this to your actual brand name if different
  tagline: 'Engineering the next generation of digital excellence.',
  description: 'A premium software development organization in Anand, Gujarat, specializing in B2B SaaS, Website and App creation, MSME workforce management, and WhatsApp automation.',
  url: 'https://ashreysystems.com', // Replace with real URL
  whatsappNumber: '918460852903', // Replace with your real number
  email: 'hello@ashreysystems.com',
  logo: '/logo.png',
  
  // Added Founder Details for centralization
  founderName: 'Akshay Jethwa', // Update to full name if desired
  founderRole: 'Managing Director',
  founderImage: '/akshay.jpeg', // Replace with your actual photo URL
  
  address: {
    street: '201, Radhaswami Sangat, Anand-Vidhyanagar road',
    city: 'Anand',
    region: 'Gujarat',
    postalCode: '388001',
    country: 'India'
  },
  geo: {
    latitude: 22.5645, // Update if needed
    longitude: 72.9289
  },
  socials: {
    twitter: 'https://twitter.com/ashrey_systems',
    linkedin: 'https://www.linkedin.com/company/ashrey-systems/',
  },
  defaultMessages: {
    consultation: 'Hello! I would like to book a free strategy session for my project.',
    whatsappAudit: 'Hi, I saw your automation services and would like an audit of my current WhatsApp setup.',
    pricingInquiry: (planName: string) => `Hi, I'm interested in the ${planName} plan. Can we discuss how this fits my business?`,
  }
};