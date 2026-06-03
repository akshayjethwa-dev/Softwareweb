import { motion } from 'motion/react';
import Section from '../components/Section';
import { MessageCircle, Linkedin, CheckCircle2, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="bg-muted/20 border-t border-border pt-24 pb-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Start a Conversation</h2>
          <p className="text-xl text-muted-foreground">Ready to scale your business? Reach out to us today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side: General Contact Info & Quick Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border p-8 md:p-10 rounded-[2.5rem] shadow-sm flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-8">General Inquiries</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email Us</p>
                  <a href="mailto:hello@ashreysystems.com" className="font-bold hover:text-brand-primary transition-colors">
                    hello@ashreysystems.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="font-bold">Anand, Gujarat, India</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 mt-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-primary transition-colors" 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-primary transition-colors" 
                />
              </div>
              <textarea 
                placeholder="How can we help you?" 
                rows={4} 
                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-hidden focus:border-brand-primary transition-colors resize-none"
              ></textarea>
              <button 
                type="button"
                className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side: Founder Direct Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-primary text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Decorative background gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                
                <div className="relative shrink-0">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-white/10">
                    {/* Make sure akshay.jpg or akshay.png is in your /public folder */}
                    <img 
                      src="/akshay.jpeg" 
                      alt="Akshay Jethwa" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Online Status Dot */}
                  <div className="absolute bottom-1 right-1 bg-[#25D366] w-6 h-6 rounded-full border-4 border-brand-primary flex items-center justify-center shadow-lg" title="Available">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-1">Akshay Jethwa</h3>
                  <p className="text-white/80 font-medium text-lg mb-3">Managing Director</p>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-1.5 rounded-full w-fit">
                    <CheckCircle2 className="w-4 h-4" />
                    Available for Consultation
                  </div>
                </div>

              </div>

              <p className="text-white/90 text-lg mb-10 leading-relaxed font-medium">
                ""We don't build projects. We build digital leverage."
                I founded Ashrey Systems because I saw too many local businesses in Gujarat struggling with slow, template-based websites that couldn't handle real scale.
My background is in high-performance cloud architecture. At Ashrey, we apply enterprise-grade engineering principles to SMEs. Every project is overseen by me personally to ensure the technical foundation is unbreakable."
              </p>

              <div className="space-y-4 mt-auto">
                {/* WhatsApp Direct Link - UPDATE PHONE NUMBER */}
                <a 
                  href="https://wa.me/8460852903?text=Hello!%20I%20would%20like%20to%20book%20a%20free%20strategy%20session%20for%20my%20project." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  Talk to Akshay Directly
                </a>

                {/* LinkedIn Link - UPDATE URL */}
                <a 
                  href="https://www.linkedin.com/in/akshayjethwa/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold transition-all hover:scale-[1.02]"
                >
                  <Linkedin className="w-6 h-6" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}