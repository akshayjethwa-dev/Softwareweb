import Services from '../sections/Services';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Our <span className="text-brand-accent">Services</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Comprehensive solutions tailored to your operational headaches. Explore our full range of offerings, deep-dive use cases, and how we solve specific industry bottlenecks.
        </p>
      </div>
      <Services />
    </div>
  );
}