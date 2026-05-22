import { motion } from 'motion/react';
import Section from '../components/Section';
import { Twitter, Linkedin, Github } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { BUSINESS_CONFIG } from '../data/config';

export default function Founder() {
  return (
    <Section className="bg-muted/30 overflow-hidden relative">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-4/5 bg-muted/50 rounded-[3rem] overflow-hidden relative group">
            <img 
              src={BUSINESS_CONFIG.founderImage} 
              alt={BUSINESS_CONFIG.founderName}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-primary/60 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem]">
              <div className="text-white">
                <div className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">{BUSINESS_CONFIG.founderRole}</div>
                <div className="text-2xl font-bold">{BUSINESS_CONFIG.founderName}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-black uppercase tracking-widest mb-8">
             AI-Powered Development
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
            "We don't just build software. We build <span className="text-brand-primary">scalable leverage</span> for MSMEs."
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
            <p>
              I founded {BUSINESS_CONFIG.name} because I saw MSMEs across Anand and Gujarat struggling with outdated workflows and manual processes. 
            </p>
            <p>
              My philosophy is simple: you don't need to manually code every line to build incredible products. By aggressively leveraging AI productivity tools alongside robust frameworks like React Native and Expo, we rapidly deploy high-performance B2B SaaS solutions and workforce management systems that scale seamlessly.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 items-center mb-12">
            <div className="flex gap-4">
              <a href={BUSINESS_CONFIG.socials.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 border border-border rounded-xl flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={BUSINESS_CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 border border-border rounded-xl flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={BUSINESS_CONFIG.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 border border-border rounded-xl flex items-center justify-center hover:border-brand-primary hover:text-brand-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Available for Consultation</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppCTA 
              variant="button"
              className="px-8 py-4"
              label={`Talk to ${BUSINESS_CONFIG.founderName} directly`}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}