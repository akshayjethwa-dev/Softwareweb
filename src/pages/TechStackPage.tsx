import SEO from '../components/SEO';
import TechStack from '../sections/TechStack';
import Contact from '../sections/Contact';

export default function TechStackPage() {
  return (
    <div className="pt-24">
      <SEO 
        title="Our Tech Stack & Infrastructure | Ashrey Systems"
        description="Built for scale and security. Explore the modern frontend, backend, cloud, and DevOps technologies we rely on to deliver bulletproof software."
      />
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Technical <span className="text-brand-accent">Confidence</span> & Capability
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Built for scale, security, and speed. Explore the modern technologies, frameworks, and architecture we rely on to ensure robust delivery capability.
        </p>
      </div>
      <TechStack />
      <Contact variant="preview" />
    </div>
  );
}