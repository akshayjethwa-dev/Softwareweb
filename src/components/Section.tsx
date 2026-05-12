import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export default function Section({ 
  children, 
  id, 
  className, 
  containerClassName,
  animate = true 
}: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!animate || shouldReduceMotion) {
    return (
      <section id={id} className={cn("py-20 md:py-32 px-6", className)}>
        <div className={cn("max-w-7xl mx-auto", containerClassName)}>
          {children}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn("py-20 md:py-32 px-6", className)}
    >
      <div className={cn("max-w-7xl mx-auto", containerClassName)}>
        {children}
      </div>
    </motion.section>
  );
}
