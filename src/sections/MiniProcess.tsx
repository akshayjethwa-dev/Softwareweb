import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getProcessAsync } from '../content';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function MiniProcess() {
  const [process, setProcess] = useState<any[]>([]);

  useEffect(() => {
    getProcessAsync().then(data => {
      // Only keep the first 3 steps for the summary
      setProcess(data?.slice(0, 3) || []);
    });
  }, []);

  if (!process.length) return null;

  return (
    <Section id="mini-process" className="bg-muted/30 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Our <span className="text-brand-accent">Delivery Engine</span>
        </motion.h2>
        <p className="text-lg text-muted-foreground">
          We eliminate guesswork through disciplined, rapid execution cycles.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 mb-12">
        {process.map((step, idx) => (
          <motion.div 
            key={step.id || idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:border-brand-accent transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-brand-primary/5 text-brand-primary font-black flex items-center justify-center shrink-0">
              {(idx + 1).toString().padStart(2, '0')}
            </div>
            <div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link to="/process" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-primary px-8 py-4 rounded-xl hover:bg-brand-accent transition-colors shadow-lg">
          View Full Methodology <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  );
}