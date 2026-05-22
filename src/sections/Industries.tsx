import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getIndustriesAsync } from '../content';
import { ArrowRight, Zap } from 'lucide-react';
import Section from '../components/Section';

export default function Industries() {
  const [industries, setIndustries] = useState<any[]>([]);

  useEffect(() => {
    getIndustriesAsync().then(setIndustries);
  }, []);

  if (!industries.length) return null;

  return (
    <Section id="industries">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div className="max-w-2xl text-balance">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Solving challenges across <span className="text-brand-accent">specialized</span> verticals.
          </motion.h2>
          <p className="text-xl text-muted-foreground">
            Our engineering approach adapts to the unique regulatory, operational, and UX needs of each industry we partner with.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((industry, idx) => (
          <motion.div 
            key={industry.id || industry.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden bg-background border border-border rounded-[2.5rem] p-10 hover:border-brand-primary transition-all duration-500"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 bg-brand-primary/5 rounded-full text-brand-primary text-xs font-bold mb-6">
                  {industry.id?.toUpperCase() || industry.name?.toUpperCase()}
                </div>
                <h3 className="text-3xl font-bold mb-4">{industry.name}</h3>
                <p className="text-muted-foreground leading-relaxed italic border-l-2 border-brand-accent pl-4">
                  {industry.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Example Use Cases</h4>
                  <ul className="space-y-3">
                    {industry.exampleUseCases?.map((useCase: string) => (
                      <li key={useCase} className="text-sm font-medium flex items-center gap-2">
                        <Zap className="w-3 h-3 text-brand-accent" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.keyFeatures?.map((feature: string) => (
                      <span key={feature} className="px-3 py-1 bg-muted rounded-lg text-xs font-bold">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-accent cursor-pointer">
                  View Solutions <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}