import Section from '../components/Section';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { Mail, MessageCircle, Calendar, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { BUSINESS_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';

interface ContactProps {
  variant?: 'preview' | 'full';
}

export default function Contact({ variant = 'full' }: ContactProps) {
  // If variant is "preview", show a compact strip instead of the full form
  if (variant === 'preview') {
    return (
      <Section id="contact-preview" className="bg-brand-primary text-white py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to solve your <span className="text-brand-accent">bottlenecks</span>?
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            Let's review your operational headaches and map out a digital roadmap for scaling your business—no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 text-sm font-bold text-brand-primary bg-brand-accent px-8 py-4 rounded-xl hover:bg-white transition-colors w-full sm:w-auto shadow-xl shadow-brand-accent/20"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppCTA 
              variant="outline"
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition-colors w-full sm:w-auto"
              label={<span className="font-bold text-sm">WhatsApp Us</span>}
            />
          </div>
        </div>
      </Section>
    );
  }

  // Otherwise, render the full page contact layout
  return (
    <Section id="contact" className="bg-brand-primary text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Book a free <span className="text-brand-accent">30-minute</span> consultation.
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-xl">
            We review your current technical bottlenecks and map out a digital roadmap for scaling your business—no strings attached.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <a 
              href={`mailto:${BUSINESS_CONFIG.email}`}
              className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Email Us</h4>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">hello@ashreysystems.com</p>
              </div>
            </a>
            
            <WhatsAppCTA 
              variant="outline"
              className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-left h-auto"
              label={
                <div className="flex flex-col items-start text-left">
                  <h4 className="font-bold text-sm">WhatsApp</h4>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Instant Support</p>
                </div>
              }
              prefix={
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
              }
            />
          </div>

          <div className="space-y-4 pt-12 border-t border-white/10">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-6">What to expect</h4>
            {[
              { icon: Clock, t: 'Response within 12 hours', d: 'We respect your time. Expect a technical lead to reach out same-day.' },
              { icon: ShieldCheck, t: 'Zero-pressure audit', d: 'The call is about your engineering challenges, not a sales pitch.' },
              { icon: Calendar, t: 'Agile scheduling', d: 'Pick a slot that works for your time zone effortlessly.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <item.icon className="w-5 h-5 text-brand-accent shrink-0" />
                <div>
                  <div className="font-bold text-sm mb-1">{item.t}</div>
                  <div className="text-xs text-white/40 leading-relaxed max-w-xs">{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] text-brand-primary shadow-2xl relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl" />
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            Send a Detailed Request
            <div className="px-3 py-1 bg-brand-primary/5 rounded-lg text-[10px] font-black text-brand-primary/40 uppercase">Safe & Private</div>
          </h3>
          <LeadCaptureForm />
        </div>
      </div>
    </Section>
  );
}