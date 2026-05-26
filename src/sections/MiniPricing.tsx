import { motion } from 'motion/react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

export default function MiniPricing() {
  return (
    <Section id="mini-pricing" className="bg-brand-primary text-white py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/20 text-brand-accent rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" /> Transparent Investment
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Predictable scaling, <span className="text-brand-accent">zero hidden fees</span>.
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you need a one-off project build or an ongoing engineering partnership, our productized services scale with you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="text-left px-8 py-4 bg-white/10 rounded-2xl border border-white/20">
              <span className="block text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-1">Partnerships Starting From</span>
              <span className="text-3xl font-bold">$2,500<span className="text-lg text-white/50 font-normal">/mo</span></span>
            </div>
            
            <Link 
              to="/pricing" 
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-brand-primary bg-white px-8 py-5 rounded-2xl hover:bg-brand-accent hover:text-white transition-all shadow-xl w-full sm:w-auto h-full"
            >
              Compare All Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}