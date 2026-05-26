import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getCaseStudies } from '../content';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../types';

export default function FeaturedProof() {
  const [study, setStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    getCaseStudies().then(data => {
      // Pick the first case study to feature
      if (data && data.length > 0) setStudy(data[0]);
    });
  }, []);

  if (!study) return null;

  return (
    <Section id="featured-proof" className="bg-brand-primary text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <TrendingUp className="w-4 h-4 text-brand-accent" /> Featured Outcome
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Proof is in the <span className="text-brand-accent">Performance</span>.
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
            <p className="text-white/60 leading-relaxed mb-8">"{study.description}"</p>
            
            <div className="space-y-4 mb-10">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Measurable Impact</h4>
              {study.impact?.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              to={`/case-studies/${study.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary bg-white px-6 py-3 rounded-xl hover:bg-brand-accent hover:text-white transition-colors"
            >
              Read Full Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-2xl">
            <img src={study.imageUrl} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}