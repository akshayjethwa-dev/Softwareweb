// src/sections/Services.tsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getServices } from '../content';
import { Service } from '../types';
import { CheckCircle2, AlertCircle, ArrowRight, Lightbulb, Users, Workflow, MessageSquare, Cpu } from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

const IconMap: Record<string, any> = {
  Users,
  Workflow,
  MessageSquare,
  Cpu
};

export default function Services() {
  // Initialize purely empty, strictly relying on Sanity now
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServicesData = async () => {
      setLoading(true);
      const data = await getServices();
      setServices(data || []);
      setLoading(false);
    };

    fetchServicesData();
  }, []);

  const handleServiceClick = (serviceName: string) => {
    trackEvent('consultation_cta_click', { service: serviceName, location: 'services_grid' });
  };

  // Graceful loading state
  if (loading) {
    return (
      <Section id="services" className="bg-muted/40 relative overflow-hidden min-h-[50vh] flex items-center justify-center">
         <div className="animate-pulse text-brand-accent font-bold text-xl tracking-widest uppercase">Loading Services...</div>
      </Section>
    );
  }

  // Graceful "No Data" state if Sanity is empty or network fails
  if (!services || services.length === 0) {
    return null; // Simply hide the section if there's no data
  }

  return (
    <Section id="services" className="bg-muted/40 relative overflow-hidden">
      <div className="max-w-3xl mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Built for the reality of <span className="text-brand-accent">local business</span>.
        </motion.h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We skip the technical jargon. We look at the operational headaches slowing you down and build targeted software to permanently solve them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service: Service, idx: number) => {
          const Icon = IconMap[service.icon] || Cpu;
          
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col p-8 md:p-10 bg-background border border-border rounded-[2rem] hover:border-brand-accent transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/5"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-accent/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                  <Icon className="w-7 h-7 text-brand-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
              </div>
              
              <div className="space-y-6 mb-8 grow">
                {/* Problem Section */}
                <div className="p-5 bg-red-500/5 rounded-2xl border border-red-500/10">
                  <div className="flex items-center gap-2 mb-2 text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">The Problem</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.problem}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="p-5 bg-green-500/5 rounded-2xl border border-green-500/10">
                  <div className="flex items-center gap-2 mb-2 text-green-600">
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Our Solution</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.solution}
                  </p>
                </div>
              </div>

              {/* Outcomes */}
              <div className="mb-10">
                <h4 className="text-xs font-black text-brand-primary uppercase tracking-widest mb-4">Key Outcomes</h4>
                <ul className="space-y-3">
                  {service.outcomes?.map((outcome: string) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / Best For */}
              <div className="mt-auto pt-6 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
                <div className="flex-1">
                  <span className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Ideal For:</span>
                  <span className="text-xs font-bold text-brand-primary leading-tight block pr-4">{service.bestFor}</span>
                </div>
                
                <Link 
                  to={`/services/${service.id}`}
                  onClick={() => handleServiceClick(service.title)}
                  className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-brand-primary px-5 py-3 rounded-xl hover:bg-brand-accent transition-colors shrink-0"
                >
                  Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}