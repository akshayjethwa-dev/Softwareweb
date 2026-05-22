import Process from '../sections/Process';

export default function ProcessPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Our <span className="text-brand-accent">Delivery Process</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          From initial audit to final deployment. Discover our disciplined, rapid-execution methodology and know exactly what to expect at every phase of the build.
        </p>
      </div>
      <Process />
    </div>
  );
}