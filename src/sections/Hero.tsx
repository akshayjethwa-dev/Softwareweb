import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, MessageCircle, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { useLeadModal } from '../components/Layout';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { BUSINESS_CONFIG } from '../data/config';
import { useSanityConfig } from '../hooks/useSanityConfig';
import { trackEvent } from '../lib/analytics';

export default function Hero() {
  const { openModal } = useLeadModal();
  const { config, loading } = useSanityConfig();

  const handleCTAClick = () => {
    trackEvent('consultation_cta_click', { location: 'hero' });
    openModal();
  };

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const metricsY = useTransform(scrollYProgress, [0, 0.5], [0, 20]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-150 h-150 bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-100 h-100 bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              Based in {config?.location || 'India'}
            </div>
            {/* NEW: ICP Statement */}
            <div className="text-xs font-black text-brand-primary uppercase tracking-widest hidden sm:block border-l-2 border-border pl-4">
              Built for Ambitious SMEs & Founders
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-balance">
            We build the tools that <span className="text-brand-accent">scale</span> your business.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            {config?.description || 'We engineer custom SaaS and internal tools that eliminate bottlenecks.'}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button 
              onClick={handleCTAClick}
              className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-brand-primary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Get a Free Roadmap
              <ArrowRight className="w-5 h-5" />
            </button>
            <WhatsAppCTA 
              variant="outline" 
              label="Audit My Setup"
              message={BUSINESS_CONFIG.defaultMessages.whatsappAudit}
              className="px-8 py-4 border-border! text-foreground! hover:bg-muted!"
            />
          </div>

          {/* Metrics */}
          {config?.metrics && (
            <motion.div 
              style={{ y: metricsY }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border"
            >
              {config.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          )}

          {/* NEW: Trust Strip */}
          <motion.div 
            style={{ y: metricsY }}
            className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-accent"/> 14-Day Sprints</div>
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-accent"/> IP Ownership</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-accent"/> Direct Tech Lead Access</div>
          </motion.div>
        </motion.div>

        {/* Visual Mockup Block (Unchanged) */}
        <motion.div
          style={{ y: mockupY, scale: mockupScale }}
          className="relative perspective-1000 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="bg-background border border-border rounded-3xl shadow-2xl p-6 relative z-10 overflow-hidden group">
            <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="h-2 w-32 bg-muted rounded-full ml-4" />
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-muted/50 rounded-2xl p-4">
                  <div className="w-8 h-8 bg-brand-accent/10 rounded-lg mb-3" />
                  <div className="h-2 w-full bg-muted-foreground/20 rounded-full" />
                </div>
                <div className="h-24 bg-muted/50 rounded-2xl" />
              </div>
              <div className="h-40 bg-muted/30 rounded-2xl" />
            </div>

            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 border border-border p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold">WhatsApp Bot</div>
                <div className="text-[10px] text-green-500 font-medium tracking-tight whitespace-nowrap">Lead Captured Successfully</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-border p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold">Lead Funnel</div>
                <div className="text-[10px] text-brand-accent font-medium tracking-tight whitespace-nowrap">+24% Conv. Rate Increase</div>
              </div>
            </motion.div>
          </div>

          <div className="absolute -top-10 -left-10 w-full h-full bg-brand-accent/5 rounded-3xl rotate-3 -z-10" />
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-brand-primary/5 rounded-3xl -rotate-3 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}