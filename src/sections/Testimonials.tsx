import { motion } from 'motion/react';
import { getTestimonials } from '../content';
import { Quote } from 'lucide-react';
import Section from '../components/Section';

export default function Testimonials() {
  const testimonials = getTestimonials();
  return (
    <Section id="testimonials" className="bg-muted/20">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Voices from the <span className="text-brand-accent">field</span>.
        </motion.h2>
        <p className="text-xl text-muted-foreground">
          Engineering success is measured by the growth of our partners. Here's what they say about the Aetheria process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 bg-background border border-border rounded-[2.5rem] relative group hover:border-brand-accent transition-all duration-500"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-primary/5 group-hover:text-brand-accent/10 transition-colors" />
            
            <p className="text-lg leading-relaxed mb-8 italic relative z-10">
              "{t.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary font-black text-xl">
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-brand-primary">{t.name}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
