import { motion } from 'motion/react';
import { Code2, Database, Cloud, Smartphone, MessageSquare, ShieldCheck } from 'lucide-react';
import Section from '../components/Section';

export default function TechStack() {
  const categories = [
    {
      title: 'Frontend',
      icon: Code2,
      techs: ['React', 'Next.js', 'Typescript', 'Tailwind', 'Framer Motion']
    },
    {
      title: 'Backend',
      icon: Database,
      techs: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Supabase']
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      techs: ['React Native', 'Expo', 'Ionic', 'PWA']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      techs: ['AWS', 'Docker', 'Vercel', 'Terraform', 'GitHub Actions']
    },
    {
      title: 'Automation',
      icon: MessageSquare,
      techs: ['WhatsApp API', 'OpenAI', 'LangChain', 'n8n']
    },
    {
      title: 'Security',
      icon: ShieldCheck,
      techs: ['Auth0', 'Firebase Auth', 'SSL/TLS', 'Pentesting-Ready']
    }
  ];

  return (
    <Section id="tech-stack" className="bg-muted/20 relative overflow-hidden">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Powered by modern <span className="text-brand-accent">infrastructure</span>.
        </motion.h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We select only the most resilient and scalable technologies to ensure your business remains technically superior.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={cat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-8 bg-background border border-border rounded-3xl hover:border-brand-accent transition-all group text-center"
          >
            <div className="w-12 h-12 bg-brand-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
              <cat.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-widest">{cat.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.techs.slice(0, 3).map(tech => (
                <span key={tech} className="text-[10px] font-bold text-muted-foreground whitespace-nowrap">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Marquee-like row for all tech names */}
      <div className="mt-20 pt-10 border-t border-border overflow-hidden relative">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-16 items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {['Google Cloud', 'Stripe', 'Twilio', 'Vercel', 'AWS', 'TensorFlow', 'PostgreSQL', 'Docker', 'Kubernetes'].map(t => (
                <span key={t} className="text-2xl font-black italic tracking-tighter uppercase">{t}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </Section>
  );
}
