import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Home, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';
import WhatsAppCTA from '../components/WhatsAppCTA';

export default function ThankYou() {
  return (
    <>
      <SEO title="Thank You | Ashrey Systems" description="We've received your request and will get back to you shortly." />
      
      <Section className="min-h-[80vh] flex items-center justify-center pt-40">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-10"
          >
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Transmission Received.
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            Our engineering team has been notified. We'll audit your requirements and reach out within 12-24 business hours to schedule your free architecture roadmap session.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/" className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              <Home className="w-5 h-5" /> Back to Dashboard
            </Link>
            <WhatsAppCTA 
              variant="outline"
              className="px-8 py-4 border-border hover:border-brand-accent"
              label="Immediate Inquiry?"
              prefix={<MessageCircle className="w-5 h-5 text-brand-accent" />}
            />
          </motion.div>

          <div className="mt-20 pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm opacity-60">
            <div>
              <div className="font-bold uppercase tracking-widest mb-1">Response Time</div>
              <div>&lt; 24 Hours</div>
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest mb-1">Office Hours</div>
              <div>Mon - Sat: 9AM - 8PM</div>
            </div>
            <div>
              <div className="font-bold uppercase tracking-widest mb-1">Status</div>
              <div>Active Intake</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
