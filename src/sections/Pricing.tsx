import { motion } from 'motion/react';
import { getPlans } from '../content';
import { Check, X, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLeadModal } from '../components/Layout';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { BUSINESS_CONFIG } from '../data/config';
import Section from '../components/Section';
import { trackEvent } from '../lib/analytics';

export default function Pricing() {
  const { openModal } = useLeadModal();
  const plans = getPlans();

  const handlePlanClick = (planName: string) => {
    trackEvent('pricing_plan_click', { plan: planName });
    openModal(`Discuss: ${planName}`);
  };

  return (
    <Section id="pricing" className="bg-white text-brand-primary overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Productized <span className="text-brand-accent">services</span> for agile growth.
          </h2>
          <p className="text-xl text-brand-primary/60 leading-relaxed max-w-3xl mx-auto">
            Clear scope, zero hidden fees, and predictable scaling. Choose the partnership level that fits your stage.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={cn(
              "relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col",
              plan.recommended 
                ? "bg-brand-primary text-white ring-4 ring-brand-accent/20 border-brand-accent shadow-2xl shadow-brand-primary/20" 
                : "bg-white border-brand-primary/10 hover:border-brand-primary/30"
            )}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                <Zap className="w-3 h-3 fill-current" /> Most Popular
              </div>
            )}

            <div className="mb-8">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
                plan.recommended ? "bg-white/10" : "bg-brand-primary/5"
              )}>
                {plan.model === 'Project' && <Shield className="w-6 h-6" />}
                {plan.model === 'Subscription' && plan.recommended && <Crown className="w-6 h-6" />}
                {plan.model === 'Subscription' && !plan.recommended && <Zap className="w-6 h-6" />}
                {plan.model === 'Partnership' && <Crown className="w-6 h-6" />}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className={cn(
                  "text-sm",
                  plan.recommended ? "text-white/60" : "text-brand-primary/40"
                )}>
                  {plan.billingNote ? `/${plan.billingNote.split('.')[0].toLowerCase().includes('month') ? 'mo' : ''}` : ''}
                </span>
              </div>
              {plan.billingNote && (
                <p className={cn(
                  "text-[10px] font-bold uppercase tracking-wider mb-4",
                  plan.recommended ? "text-brand-accent" : "text-brand-primary/40"
                )}>
                  {plan.billingNote}
                </p>
              )}
              <p className={cn(
                "text-sm leading-relaxed",
                plan.recommended ? "text-white/70" : "text-brand-primary/60"
              )}>
                {plan.description}
              </p>
            </div>

            <div className="space-y-6 mb-10 flex-grow">
              <div className="pt-6 border-t border-current/10">
                <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 italic">What's included:</h4>
                <ul className="space-y-4">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={cn(
                        "w-5 h-5 shrink-0",
                        plan.recommended ? "text-brand-accent" : "text-brand-primary"
                      )} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations && (
                <div className="pt-6 border-t border-current/10">
                  <ul className="space-y-4">
                    {plan.limitations.map(limit => (
                      <li key={limit} className="flex items-start gap-3 opacity-40">
                        <X className="w-5 h-5 shrink-0" />
                        <span className="text-sm font-medium">{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-4 border-t border-current/10 pt-6">
              <p className={cn(
                "text-[10px] font-bold text-center uppercase tracking-widest",
                plan.recommended ? "text-white/40" : "text-brand-primary/40"
              )}>
                  Ideal for: {plan.idealFor}
              </p>
              <div className="flex flex-col gap-4">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePlanClick(plan.name)}
                  className={cn(
                    "w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2",
                    plan.recommended 
                      ? "bg-brand-accent text-brand-primary hover:bg-white" 
                      : "bg-brand-primary text-white hover:bg-brand-primary/90"
                  )}
                >
                  {plan.ctaLabel} <ArrowRight className="w-4 h-4" />
                </motion.button>
                <WhatsAppCTA 
                  variant="ghost"
                  label="Discuss on WhatsApp"
                  message={BUSINESS_CONFIG.defaultMessages.pricingInquiry(plan.name)}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest",
                    plan.recommended ? "text-white/60 hover:text-white hover:bg-white/10" : "text-brand-primary/40 hover:text-brand-primary"
                  )}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-8 bg-brand-primary/5 rounded-[2rem] border border-brand-primary/10 text-center"
      >
        <p className="text-sm italic text-brand-primary/60">
          "We prioritize clarity over complexity. No hidden fees, no long-term lock-ins for subscriptions, just pure engineering output."
        </p>
      </motion.div>
    </Section>
  );
}
