import TechStack from '../sections/TechStack';

export default function TechStackPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Engineering & <span className="text-brand-accent">Tech Stack</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Built for scale, security, and speed. Explore the modern technologies, frameworks, and architecture we rely on to deliver bulletproof software.
        </p>
      </div>
      <TechStack />
    </div>
  );
}