import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getFAQs } from '../content';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { FAQ as FAQType } from '../types';

export default function MiniFAQ() {
  const [faqs, setFaqs] = useState<FAQType[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    getFAQs().then(data => {
      // Only keep the first 3 FAQs for the homepage
      setFaqs(data?.slice(0, 3) || []);
    });
  }, []);

  if (!faqs.length) return null;

  return (
    <Section id="mini-faq">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Common <span className="text-brand-accent">Questions</span>
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 mb-12">
        {faqs.map((faq, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "border rounded-2xl overflow-hidden transition-all duration-300",
              openIndex === idx ? "border-brand-accent bg-brand-accent/5" : "border-border"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 flex items-center justify-between text-left group"
            >
              <span className="font-bold tracking-tight pr-8">{faq.question}</span>
              <div className={cn(
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                openIndex === idx ? "bg-brand-primary text-white" : "bg-muted group-hover:bg-brand-primary/10"
              )}>
                {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors">
          Read All Answers <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  );
}