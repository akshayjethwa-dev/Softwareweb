import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import Section from '../components/Section';
import { getFAQs } from '../content';
import { cn } from '../lib/utils';
import { FAQ as FAQType } from '../types';

export default function FAQ({ faqs: customFaqs }: { faqs?: FAQType[] }) {
  const [fetchedFaqs, setFetchedFaqs] = useState<FAQType[]>([]);
  const [loading, setLoading] = useState(!customFaqs); // Only load if customFaqs is undefined
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    // If FAQs are passed in as props, we don't need to fetch
    if (customFaqs) return;

    const fetchFaqs = async () => {
      try {
        const data = await getFAQs();
        setFetchedFaqs(data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [customFaqs]);

  const faqs = customFaqs || fetchedFaqs;

  if (loading) {
    return (
      <Section id="faq" className="flex items-center justify-center min-h-[30vh]">
        <div className="animate-pulse text-brand-accent/50 font-bold text-xl tracking-widest uppercase">Loading FAQs...</div>
      </Section>
    );
  }

  return (
    <Section id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Frequent <span className="text-brand-accent">Inquiries</span>.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to know about our engineering process, pricing, and how we handle your digital growth.
            </p>
            <div className="p-6 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
              <p className="text-sm font-medium mb-4">Still have questions?</p>
              <a 
                href="#contact" 
                className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center gap-2"
              >
                Connect with our technical lead
              </a>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-4">
            {faqs?.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "border rounded-3xl overflow-hidden transition-all duration-500",
                  openIndex === idx ? "border-brand-accent bg-brand-accent/5 shadow-xl shadow-brand-accent/5" : "border-border hover:border-muted-foreground/30"
                )}
              >
                <button
                  id={`faq-trigger-${idx}`}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-content-${idx}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className="text-xl font-bold tracking-tight group-hover:text-brand-primary transition-colors pr-8">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500",
                    openIndex === idx ? "bg-brand-primary text-white" : "bg-muted group-hover:bg-brand-primary/10"
                  )}>
                    {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}