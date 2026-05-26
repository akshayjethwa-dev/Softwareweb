import SEO from '../components/SEO';
import Services from '../sections/Services';
import Contact from '../sections/Contact'; // Imported for H8

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <SEO 
        title="Custom Software Services & Solutions | Ashrey Systems"
        description="Explore our B2B software services. From internal operational tools to full-scale SaaS development, see how we solve industry-specific bottlenecks."
      />
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Offerings & <span className="text-brand-accent">Use Cases</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Comprehensive solutions tailored to your operational headaches. Explore our full range of offerings, deep-dive use cases, and how we solve specific industry bottlenecks.
        </p>
      </div>
      <Services />
      
      {/* H8: Compact CTA band instead of dead end */}
      <Contact variant="preview" />
    </div>
  );
}