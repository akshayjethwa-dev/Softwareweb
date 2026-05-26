import SEO from '../components/SEO';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact'; // Imported for H8

export default function PricingPage() {
  return (
    <div className="pt-24">
      <SEO 
        title="Software Development Pricing & Plans | Ashrey Systems"
        description="Transparent, productized pricing for custom software development. No hidden fees. Compare project, subscription, and partnership models."
      />
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Plans & <span className="text-brand-accent">Investment Models</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Clear models, predictable costs, and no hidden fees. Understand our investment structures, choose your partnership level, and explore our cost FAQ below.
        </p>
      </div>
      <Pricing />
      
      <div className="mt-24 pt-24 border-t border-border/50">
        <FAQ />
      </div>

      <Contact variant="preview" />
    </div>
  );
}