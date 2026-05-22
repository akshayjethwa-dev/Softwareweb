import { motion } from 'motion/react';
import { getProcess } from '../content';
import { Check } from 'lucide-react';
import Section from '../components/Section';

export default function Process() {
  const process = getProcess();
  return (
    <Section id="process" className="bg-muted/40 relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            How we build <span className="text-brand-accent">ambitious</span> software.
          </motion.h2>
          <p className="text-xl text-muted-foreground">
            Our engineering-first approach eliminates guesswork and focuses on rapid, high-quality execution through disciplined cycles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          {process.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative pl-20"
            >
              {/* Connector Line */}
              {idx !== process.length - 1 && (
                <div className="absolute left-9.75 top-20 -bottom-12 w-0.5 bg-border group-hover:bg-brand-accent transition-colors duration-500" />
              )}
              
              {/* Step Circle */}
              <div className="absolute left-0 top-0 w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center text-2xl font-black text-muted-foreground group-hover:border-brand-accent group-hover:text-brand-primary transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-brand-accent/5">
                {(idx + 1).toString().padStart(2, '0')}
              </div>

              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-accent transition-colors tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.details.map(detail => (
                    <span key={detail} className="px-4 py-1.5 bg-background border border-border rounded-xl text-xs font-bold uppercase tracking-wider">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Side Block */}
        <div className="relative hidden lg:block">
          <div className="sticky top-32 bg-brand-primary rounded-[3rem] p-12 text-white overflow-hidden shadow-2xl shadow-brand-primary/20">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h4 className="text-3xl font-bold mb-8 tracking-tight">The Ashrey Principle</h4>
              <div className="space-y-8">
                {[
                  { t: 'Velocity over Inertia', d: 'Deliver something usable every 14 days.' },
                  { t: 'Type-Safety by Default', d: 'Catch bugs before they reach staging.' },
                  { t: 'Ownership as Service', d: 'We think like founders, not like hired guns.' }
                ].map(p => (
                  <div key={p.t} className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">{p.t}</div>
                      <div className="text-sm text-white/50">{p.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-4">Our Commitment</div>
                <p className="text-lg font-medium leading-relaxed italic">
                  "We don't build projects. We build the engine that drives your revenue."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
