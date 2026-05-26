import { motion } from 'motion/react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function FeaturedInsight() {
  return (
    <Section id="featured-insight" className="bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background border border-border p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-brand-primary/5"
        >
          <div className="w-12 h-12 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mx-auto mb-6">
            <BookOpen className="w-6 h-6" />
          </div>
          
          <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Latest Engineering Insight</h4>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            Why Custom Internal Tools Outperform "Off-The-Shelf" SaaS Subscriptions
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            A technical breakdown of how owning your IP and building targeted software eliminates recurring operational bottlenecks and reduces long-term costs.
          </p>
          
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors"
          >
            Read the Article <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}