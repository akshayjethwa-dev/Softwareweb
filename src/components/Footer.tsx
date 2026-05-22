import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSiteConfig, getNavItems, getServices } from '../content';
import { Service } from '../types';
import { Github, Twitter, Linkedin, Layout as LayoutIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const config = getSiteConfig();
  const navItems = getNavItems();
  
  // 1. Initialize strictly with an empty array, relying ONLY on Sanity
  const [services, setServices] = useState<Service[]>([]);

  // 2. Fetch fresh data from Sanity in the background
  useEffect(() => {
    const fetchFooterServices = async () => {
      try {
        const data = await getServices();
        if (data && data.length > 0) {
          setServices(data);
        }
      } catch (error) {
        console.error("Failed to fetch services for footer:", error);
        setServices([]); // fallback to empty
      }
    };

    fetchFooterServices();
  }, []);

  return (
    <footer className="bg-background py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <LayoutIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-black tracking-tighter text-brand-primary">Ashrey<span className="text-brand-accent"> Systems.</span></span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              {config.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-border rounded-lg hover:border-brand-primary transition-colors text-muted-foreground hover:text-brand-primary"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 border border-border rounded-lg hover:border-brand-primary transition-colors text-muted-foreground hover:text-brand-primary"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 border border-border rounded-lg hover:border-brand-primary transition-colors text-muted-foreground hover:text-brand-primary"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {navItems.slice(0, 5).map(item => (
                <li key={item.label}>
                  <Link to={item.href} className="hover:text-brand-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {services.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-brand-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Our Impact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link to="/case-studies" className="hover:text-brand-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/faq" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-brand-primary transition-colors">Metrics</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-muted-foreground space-y-1 text-center md:text-left">
            <p>© {currentYear} {config.name}. All rights reserved.</p>
            <p>A premium software development studio based in {config.location}.</p>
          </div>
          <div className="flex gap-8 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}