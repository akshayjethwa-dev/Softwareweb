import { Helmet } from 'react-helmet-async';
import { BUSINESS_CONFIG } from '../data/config';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
}

export default function SEO({ 
  title = `${BUSINESS_CONFIG.name} | ${BUSINESS_CONFIG.tagline}`, 
  description = BUSINESS_CONFIG.description,
  canonical = BUSINESS_CONFIG.url,
  type = 'website' 
}: SEOProps) {
  
  // JSON-LD LocalBusiness Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_CONFIG.name,
    "image": BUSINESS_CONFIG.logo,
    "@id": BUSINESS_CONFIG.url,
    "url": BUSINESS_CONFIG.url,
    "telephone": BUSINESS_CONFIG.whatsappNumber,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.address.street,
      "addressLocality": BUSINESS_CONFIG.address.city,
      "addressRegion": BUSINESS_CONFIG.address.region,
      "postalCode": BUSINESS_CONFIG.address.postalCode,
      "addressCountry": BUSINESS_CONFIG.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_CONFIG.geo.latitude,
      "longitude": BUSINESS_CONFIG.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      BUSINESS_CONFIG.socials.twitter,
      BUSINESS_CONFIG.socials.linkedin,
      BUSINESS_CONFIG.socials.github
    ],
    "areaServed": [
      "Anand",
      "Gujarat",
      "India"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${BUSINESS_CONFIG.url}/og-image.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
