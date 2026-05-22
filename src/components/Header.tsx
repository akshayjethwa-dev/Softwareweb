import { Menu, X, ArrowRight, Layout as LayoutIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { getNavItems } from '../content';
import { useLeadModal } from './Layout';
import WhatsAppCTA from './WhatsAppCTA';
import { BUSINESS_CONFIG } from '../data/config';
import { Link } from 'react-router-dom';
import { trackEvent } from '../lib/analytics';

export default function Header() {
  const { openModal } = useLeadModal();
  const navItems = getNavItems();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    trackEvent('consultation_cta_click', { location: 'header' });
    openModal();
  };

  const Logo = () => {
    const nameParts = BUSINESS_CONFIG.name.split(' ');
    const firstName = nameParts[0];
    const restName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    return (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform">
          <LayoutIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-black tracking-tighter text-brand-primary">
          {firstName}
          {restName && <span className="text-brand-accent"> {restName}.</span>}
        </span>
      </div>
    );
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <WhatsAppCTA 
            variant="ghost" 
            label="WhatsApp" 
            className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-brand-primary" 
          />
          <button 
            onClick={handleCTAClick}
            className="flex items-center gap-2 px-6 py-2.5 bg-brand-primary text-white text-sm rounded-full font-bold hover:shadow-lg hover:shadow-brand-primary/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get a Free Roadmap
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors text-brand-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background z-60 flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-muted rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 mb-12 overflow-y-auto">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    to={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black tracking-tighter hover:text-brand-accent transition-colors block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <WhatsAppCTA 
                variant="outline" 
                label="WhatsApp" 
                className="w-full py-4 rounded-2xl font-bold text-lg"
              />
              <button 
                onClick={() => {
                  setIsOpen(false);
                  handleCTAClick();
                }}
                className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-primary/20"
              >
                Get a Free Roadmap
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}