import { motion } from 'motion/react';
import { getServices } from '../content';
import { CheckCircle2, Smartphone, Globe, Workflow, ShieldCheck, Zap, Code, MessageSquare, Target, Search, Cpu, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

const IconMap: Record<string, any> = {
  Smartphone,
  Globe,
  Workflow,
  ShieldCheck,
  Zap,
  Code,
  MessageSquare,
  Target,
  Search,
  Cpu
};

export default function Services() {
  const services = getServices();

  const handleServiceClick = (serviceName: string) => {
    trackEvent('consultation_cta_click', { service: serviceName, location: 'services_grid' });
  };

  return (
    <Section id="services" className="bg-muted/40 relative overflow-hidden">
      <div className="max-w-3xl mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Capabilities engineered for <span className="text-brand-accent">impact</span>.
        </motion.h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          We don't just write code; we architect systems that solve core business bottlenecks, from lead generation to full-scale automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = IconMap[service.icon] || Code;
          
          return (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 bg-background border border-border rounded-[2rem] hover:border-brand-accent transition-all duration-500 hover:shadow-2xl hover:shadow-brand-accent/5"
            >
              <div className="w-14 h-14 bg-brand-accent/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                <Icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm font-semibold text-brand-accent mb-4 uppercase tracking-widest leading-none">
                {service.benefit}
              </p>
              <p className="text-muted-foreground mb-8 line-clamp-2">
                {service.description}
              </p>

              <ul className="space-y-3 mb-10">
                {service.keyOutcomes.map((outcome) => (
                   <li key={outcome} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <Link 
                  to={`/services/${service.id}`}
                  onClick={() => handleServiceClick(service.title)}
                  className="flex items-center gap-2 text-sm font-bold text-brand-primary group/item"
                >
                  Learn More <ArrowRight className="w-4 h-4 group-hover/item:translate-x-1 transition-transform" />
                </Link>

                <div className="pt-6 border-t border-border flex items-center justify-between group-hover:border-brand-accent/20 transition-colors">
                  <span className="text-xs font-bold text-muted-foreground">IDEAL FOR:</span>
                  <span className="text-xs font-bold uppercase">{service.typicalClients}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
