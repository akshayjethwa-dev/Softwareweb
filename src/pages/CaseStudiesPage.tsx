import CaseStudies from '../sections/CaseStudies';

export default function CaseStudiesPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Proof & <span className="text-brand-accent">Outcomes</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Real-world data and business impact. Explore our full portfolio of completed projects and see exactly how we drive ROI for our partners.
        </p>
      </div>
      <CaseStudies />
    </div>
  );
}