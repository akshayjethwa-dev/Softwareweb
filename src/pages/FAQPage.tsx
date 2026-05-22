import FAQ from '../sections/FAQ';

export default function FAQPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Common <span className="text-brand-accent">Questions</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Straight answers to your biggest objections. Everything you need to know about timelines, ownership, and working with us before signing a contract.
        </p>
      </div>
      <FAQ />
    </div>
  );
}