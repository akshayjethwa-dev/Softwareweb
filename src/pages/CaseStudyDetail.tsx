import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getCaseStudyById, getCaseStudies, getServices } from '../content';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { CheckCircle2, ArrowLeft, ExternalLink, Code2, Target, Zap } from 'lucide-react';
import Contact from '../sections/Contact';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getCaseStudyById(slug || '');
  const allProjects = getCaseStudies();

  if (!project) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">This case study doesn't exist or is currently being documented.</p>
        <Link to="/" className="text-brand-primary font-bold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </Section>
    );
  }

  return (
    <>
      <SEO 
        title={project.metaTitle || `${project.clientName}: ${project.title} | Case Study`}
        description={project.metaDescription || project.description}
      />

      <Section className="pt-40 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[
            { label: 'Work', href: '/#case-studies' },
            { label: project.clientName }
          ]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-brand-primary/5 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest border border-brand-primary/10">
                {project.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{project.techStack[0]} Project</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border mb-16">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Client</div>
                <div className="font-bold">{project.clientName}</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Industry</div>
                <div className="font-bold">E-commerce</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Role</div>
                <div className="font-bold">Engineering</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Timeline</div>
                <div className="font-bold">12 Weeks</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 40 }}
          className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[21/9] mt-20"
        >
          <img 
            src={project.imageUrl} 
            alt={project.clientName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>
      </Section>

      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="p-12 bg-background border border-border rounded-[3rem] space-y-8">
              <h2 className="text-3xl font-bold">Key Impacts & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.impact.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div className="text-lg font-medium leading-relaxed">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="p-10 bg-brand-primary text-white rounded-[2.5rem] sticky top-32">
              <Code2 className="w-10 h-10 mb-6 opacity-30" />
              <h3 className="text-2xl font-bold mb-6">Technical Architecture</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-white/10 rounded-xl text-sm font-bold border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4">Focus Areas</h3>
              <ul className="space-y-3 mb-10 opacity-70">
                {project.servicesUsed.map(serviceName => {
                  const s = getServices().find(srv => srv.title === serviceName);
                  return (
                    <li key={serviceName} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white" />
                      {s ? (
                        <Link to={`/services/${s.id}`} className="hover:text-brand-accent transition-colors underline underline-offset-4 decoration-white/20">
                          {serviceName}
                        </Link>
                      ) : serviceName}
                    </li>
                  );
                })}
              </ul>
              <button className="w-full py-4 bg-white text-brand-primary rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                View Live Demo <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Inspired by this result?</h2>
            <p className="text-muted-foreground">Let's audit your current architecture and find optimizations.</p>
          </div>
          <Link 
            to="/#contact"
            className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>

      <Contact />
    </>
  );
}
