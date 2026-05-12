import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { submitLead } from '../lib/leadService';

export interface LeadFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL_DATA: LeadFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function LeadCaptureForm({ className }: { className?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_DATA);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof LeadFormData, string>> = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.service) newErrors.service = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMessage(null);

    const result = await submitLead(formData, location.pathname);

    if (result.success) {
      setStatus('success');
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Submission failed. Please try WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 bg-green-50 rounded-3xl border border-green-100"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Transmission Received</h3>
        <p className="text-green-700">Redirecting to project briefing page...</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-black uppercase tracking-widest opacity-40">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className={cn(
              "w-full px-6 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:border-brand-accent transition-colors",
              errors.name && "border-red-400"
            )}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-black uppercase tracking-widest opacity-40">Company</label>
          <input
            id="company"
            type="text"
            placeholder="ACME Corp"
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-6 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-black uppercase tracking-widest opacity-40">Work Email</label>
          <input
            id="email"
            type="email"
            placeholder="john@acme.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className={cn(
              "w-full px-6 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:border-brand-accent transition-colors",
              errors.email && "border-red-400"
            )}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest opacity-40">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className={cn(
              "w-full px-6 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:border-brand-accent transition-colors",
              errors.phone && "border-red-400"
            )}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-xs font-black uppercase tracking-widest opacity-40">Service Interest</label>
        <select
          id="service"
          value={formData.service}
          onChange={e => setFormData({ ...formData, service: e.target.value })}
          className={cn(
            "w-full px-6 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:border-brand-accent transition-colors appearance-none",
            errors.service && "border-red-400"
          )}
        >
          <option value="">Select a service</option>
          <option value="custom-apps">Custom Web & Mobile Apps</option>
          <option value="whatsapp">WhatsApp API & Automation</option>
          <option value="lead-funnels">Lead Generation Funnels</option>
          <option value="seo">Local SEO & Performance</option>
          <option value="maintenance">Maintenance & Support</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-black uppercase tracking-widest opacity-40">Message</label>
        <textarea
          id="message"
          placeholder="Tell us about your project or current bottlenecks..."
          rows={4}
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-6 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:border-brand-accent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-brand-primary/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Engineering your roadmap...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Get a Free Digital Roadmap
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-500 text-sm justify-center">
          <AlertCircle className="w-4 h-4" />
          Something went wrong. Please try again or WhatsApp us directly.
        </div>
      )}

      <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
        Secure & Confidential • No Spam • Results Focused
      </p>
    </form>
  );
}
