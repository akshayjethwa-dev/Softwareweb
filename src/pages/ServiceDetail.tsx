import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { getServiceById, getServices, getCaseStudies } from '../content';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Contact from '../sections/Contact';
import FAQ from '../sections/FAQ';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { Service, CaseStudy } from '../types';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const [service, setService] = useState<Service | null>(null);
  const [allServices, setAllServices] = useState<Service[]>([]);
  const [allProjects, setAllProjects] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [serviceData, servicesData, projectsData] = await Promise.all([
          getServiceById(slug || ''),
          getServices(),
          getCaseStudies()
        ]);
        
        setService(serviceData);
        setAllServices(servicesData);
        setAllProjects(projectsData);
      } catch (error) {
        console.error("Error fetching detail data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center bg-muted/20">
        <div className="animate-pulse text-brand-accent font-bold text-xl tracking-widest uppercase">Loading Details...</div>
      </Section>
    );
  }

  if (!service) {
    return (
      <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="text-brand-primary font-bold hover:underline">Back to Home</Link>
      </Section>
    );
  }

  return (
    <>
      <SEO 
        title={service.metaTitle || `${service.title} | Ashrey Systems`}
        description={service.metaDescription || service.description}
      />

      <Section className="pt-40 pb-20 bg-muted/20">
        <Breadcrumbs items={[
          { label: 'Services', href: '/#services' },
          { label: service.title }
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary text-sm font-black uppercase tracking-widest mb-6">
              Expert Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {service.fullDescription || service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppCTA 
                variant="button"
                className="px-8 py-4"
                label="Discuss Your Project"
              />
              <Link 
                to="/#pricing" 
                className="px-8 py-4 border border-border rounded-2xl font-bold hover:border-brand-primary transition-colors flex items-center justify-center gap-2"
              >
                View Plans <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-brand-primary/5 rounded-[4rem] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-brand-primary/10 to-transparent" />
              <div className="w-32 h-32 bg-background rounded-3xl shadow-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <span className="text-4xl font-bold text-brand-primary">{service.title.charAt(0)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="features" className="bg-background">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Capabilities</h2>
          <p className="text-muted-foreground">Detailed features designed to solve your specific technical challenges.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(service.features || [
            { title: 'Scalable Architecture', description: 'Built to handle growth from 10 to 10k+ users without breaking a sweat.' },
            { title: 'Security First', description: 'Enterprise-grade security protocols baked into every line of code.' },
            { title: 'Performance Optimized', description: 'Sub-second load times and efficient resource management.' }
          ]).map((feature: any, idx: number) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-border rounded-3xl hover:border-brand-accent transition-all group"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-brand-primary group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="outcomes" className="bg-brand-primary text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">The Ashrey Edge.</h2>
            <div className="space-y-6">
              {service.keyOutcomes?.map((outcome, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 text-xl font-medium"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                  {outcome}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="p-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[3rem]">
              <h3 className="text-2xl font-bold mb-6">Who is this for?</h3>
              <p className="text-lg opacity-80 mb-8 leading-relaxed">
                {service.typicalClients}
              </p>
              <WhatsAppCTA 
                variant="outline"
                className="w-full justify-start text-white border-white/20 hover:bg-white hover:text-brand-primary"
                label="Get Expert Consultation"
              />
            </div>
          </div>
        </div>
      </Section>

      {service.faqs && (
        <FAQ faqs={service.faqs} />
      )}

      {/* Relevant Products */}
      {service.relatedProducts && service.relatedProducts.length > 0 && (
        <Section className="bg-muted/20 border-t border-border">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Relevant Products & Solutions</h2>
            <p className="text-muted-foreground">Ready-to-deploy software assets we use to accelerate this service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.relatedProducts.map((product: { id: string; name: string; slug: string; tagline: string; coverImageUrl?: string }) => (
              <Link 
                key={product.id}
                to={`/products/${product.slug}`}
                className="group flex flex-col md:flex-row bg-background border border-border rounded-3xl overflow-hidden hover:border-brand-primary transition-all"
              >
                {product.coverImageUrl && (
                  <div className="w-full md:w-1/3 aspect-video md:aspect-auto bg-muted">
                    <img src={product.coverImageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-sm mt-auto">
                    Explore Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Related Success Stories - CMS Driven */}
      {(service as any).relatedSuccessStories && (service as any).relatedSuccessStories.length > 0 && (
        <Section className="bg-background">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Related Success Stories</h2>
              <p className="text-muted-foreground">See how we applied these capabilities for our partners.</p>
            </div>
            <Link to="/#case-studies" className="text-brand-primary font-bold hover:underline flex items-center gap-2">
              View All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(service as any).relatedSuccessStories.map((project: any) => (
              <Link 
                key={project._id || project.id}
                to={`/case-studies/${project.slug || project.id}`}
                className="group block p-8 bg-muted/20 border border-border rounded-3xl hover:border-brand-primary transition-all"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={project.imageUrl || project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.clientName}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-brand-primary font-bold text-sm">
                  Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Other Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allServices.filter(s => s.id !== service.id).slice(0, 3).map(s => (
            <Link 
              key={s.id} 
              to={`/services/${s.id}`}
              className="p-6 bg-background border border-border rounded-2xl hover:border-brand-primary transition-all group"
            >
              <h4 className="font-bold mb-2 group-hover:text-brand-primary transition-colors">{s.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{s.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Contact />
    </>
  );
}