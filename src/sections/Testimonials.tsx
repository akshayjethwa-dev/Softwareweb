import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { getTestimonials } from '../content';
import { Quote, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { Testimonial } from '../types';
import { Link } from 'react-router-dom';

interface TestimonialsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function Testimonials({ limit, showViewAll = false }: TestimonialsProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <Section id="testimonials" className="bg-muted/20 flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-brand-accent/50 font-bold text-xl tracking-widest uppercase">Loading Testimonials...</div>
      </Section>
    );
  }

  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

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
          Engineering success is measured by the growth of our partners. Here's what they say about the Ashrey process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedTestimonials.map((t, idx) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 bg-background border border-border rounded-[2.5rem] relative group hover:border-brand-accent transition-all duration-500 flex flex-col"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-primary/5 group-hover:text-brand-accent/10 transition-colors" />
            
            <p className="text-lg leading-relaxed mb-8 italic relative z-10 grow">
              "{t.content}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              {t.avatar ? (
                <div className="w-12 h-12 rounded-2xl overflow-hidden shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary font-black text-xl shrink-0">
                  {t.name.charAt(0)}
                </div>
              )}
              
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

      {showViewAll && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-brand-primary px-8 py-4 rounded-xl hover:bg-brand-accent transition-colors shadow-lg">
            Work With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </Section>
  );
}