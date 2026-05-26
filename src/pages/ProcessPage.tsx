import SEO from '../components/SEO';
import Process from '../sections/Process';
import Contact from '../sections/Contact';

export default function ProcessPage() {
  return (
    <div className="pt-24">
      <SEO 
        title="Our Agile Engineering Process | Ashrey Systems"
        description="Discover our disciplined, rapid-execution methodology for software development. Learn how we take your B2B app from initial audit to final deployment."
      />
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Delivery Method & <span className="text-brand-accent">Expectations</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          From initial audit to final deployment. Discover our disciplined, rapid-execution methodology and know exactly what to expect at every phase of the build.
        </p>
      </div>
      <Process />
      <Contact variant="preview" />
    </div>
  );
}