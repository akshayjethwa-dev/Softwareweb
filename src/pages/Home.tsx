import SEO from '../components/SEO';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import MiniProcess from '../sections/MiniProcess';
import FeaturedProof from '../sections/FeaturedProof';
import MiniPricing from '../sections/MiniPricing';
import FeaturedInsight from '../sections/FeaturedInsight';
import Testimonials from '../sections/Testimonials';
import MiniFAQ from '../sections/MiniFAQ';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <>
      <SEO 
        title="Ashrey Systems | Custom B2B SaaS & Internal Tools"
        description="We engineer custom software, SaaS, and internal tools for ambitious SMEs and founders. Eliminate operational bottlenecks and scale with Ashrey Systems."
      />
      <Hero />
      <Services limit={2} showViewAll={true} />
      <WhyUs />
      <MiniProcess /> 
      <FeaturedProof /> 
      <MiniPricing /> 
      <Testimonials limit={3} showViewAll={true} />
      <FeaturedInsight />
      <MiniFAQ />
      
      {/* H8: Compact CTA band */}
      <Contact variant="preview" />
    </>
  );
}