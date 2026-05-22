import Pricing from '../sections/Pricing';

export default function PricingPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Transparent <span className="text-brand-accent">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Clear models, predictable costs, and no hidden fees. Understand our investment structures and find the right engineering partnership for your scale.
        </p>
      </div>
      <Pricing />
    </div>
  );
}