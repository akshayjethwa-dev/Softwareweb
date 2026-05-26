import SEO from '../components/SEO';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';

export default function FAQPage() {
  return (
    <div className="pt-24">
      <SEO 
        title="Frequently Asked Questions | Ashrey Systems"
        description="Get straight answers on our engineering process, timelines, IP ownership, and what to expect when hiring Ashrey Systems for custom software."
      />
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Objections & <span className="text-brand-accent">Answers</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Straight answers to your biggest objections. Everything you need to know about timelines, code ownership, and working with us before signing a contract.
        </p>
      </div>
      <FAQ />
      <Contact variant="preview" />
    </div>
  );
}