import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getWhyUsAsync } from '../content';
import { Target, Zap, ShieldCheck, Users, Code2, Rocket } from 'lucide-react';
import Section from '../components/Section';

// Map icon strings from CMS to actual icon components
const IconMap: Record<string, any> = {
  Target, Zap, ShieldCheck, Users, Code2, Rocket
};

const defaultValues = [
  { title: 'Fast Iteration', desc: 'Weekly staging updates and bi-weekly release cycles.', icon: 'Zap' },
  { title: 'SME Focus', desc: 'Built specifically for the operational needs of mid-sized firms.', icon: 'Target' },
  { title: 'Founder-Led Delivery', desc: 'You work directly with architectural leads, no junior handoffs.', icon: 'Users' },
  { title: 'Modern Tech Stack', desc: 'Resilient, type-safe infrastructure that scales effortlessly.', icon: 'Code2' }
];

export default function WhyUs() {
  const [values, setValues] = useState<any[]>(defaultValues);

  useEffect(() => {
    getWhyUsAsync().then(data => {
      if (data) setValues(data);
    });
  }, []);

  return (
    <Section id="why-us" className="bg-brand-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 skew-x-12 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Why ambitious <span className="text-brand-accent">SMEs</span> choose Ashrey.
          </motion.h2>
          <p className="text-xl text-white/50">
            We operate as your fractional technical co-founders, bringing institutional-grade engineering to your local business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => {
            const IconComponent = IconMap[value.icon] || Zap; // Default to Zap if missing
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-brand-accent/50 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-500">
                  <IconComponent className="w-7 h-7 text-brand-accent group-hover:text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-medium capitalize">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40">
          {[
            { label: 'Uptime Guarantee', val: '99.9%', icon: ShieldCheck },
            { label: 'Average Delivery', val: '8 Weeks', icon: Rocket },
            { label: 'Technical Audits', val: '50+', icon: Target }
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-4">
               <stat.icon className="w-5 h-5 text-brand-accent" />
               <div>
                  <div className="text-xl font-black tracking-tight">{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider">{stat.label}</div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}