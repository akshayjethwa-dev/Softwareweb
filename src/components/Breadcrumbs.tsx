import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items, className }: { items: BreadcrumbItem[], className?: string }) {
  return (
    <nav className={cn("flex items-center gap-2 text-sm text-muted-foreground mb-8", className)}>
      <a href="/" className="hover:text-brand-primary transition-colors flex items-center gap-1">
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </a>
      
      {items.map((item, idx) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 opacity-40" />
          {item.href ? (
            <a 
              href={item.href} 
              className="hover:text-brand-primary transition-colors font-medium"
            >
              {item.label}
            </a>
          ) : (
            <span className="font-bold text-brand-primary">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
