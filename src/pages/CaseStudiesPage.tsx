import SEO from '../components/SEO';
import CaseStudies from '../sections/CaseStudies';
import Contact from '../sections/Contact';

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      <SEO 
        title="B2B Software Case Studies & Outcomes | Ashrey Systems"
        description="Real-world data and business impact. Explore our portfolio of B2B SaaS and internal tools to see how we drive measurable ROI."
      />
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Proof & <span className="text-brand-accent">Outcomes</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Real-world data and measurable business impact. Explore our full portfolio of completed projects and see exactly how we drive ROI for our partners.
        </p>
      </div>
      <CaseStudies />
      <Contact variant="preview" />
    </div>
  );
}