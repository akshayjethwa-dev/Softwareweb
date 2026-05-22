import { MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { BUSINESS_CONFIG } from '../data/config';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { trackEvent } from '../lib/analytics';

interface WhatsAppCTAProps {
  label?: ReactNode;
  message?: string;
  variant?: 'button' | 'ghost' | 'floating' | 'outline';
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

export default function WhatsAppCTA({ 
  label = 'Chat on WhatsApp', 
  message = BUSINESS_CONFIG.defaultMessages.consultation,
  variant = 'button',
  className,
  prefix,
  suffix
}: WhatsAppCTAProps) {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackEvent('whatsapp_click', {
      message_template: message,
      variant
    });
  };

  if (variant === 'floating') {
    return (
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "fixed bottom-8 right-8 z-100 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors",
          className
        )}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    );
  }

  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all transform active:scale-95";
  const variants = {
    button: "bg-[#25D366] text-white px-6 py-3 rounded-2xl hover:bg-[#128C7E] shadow-lg shadow-green-500/20",
    outline: "border-2 border-[#25D366] text-[#25D366] px-6 py-3 rounded-2xl hover:bg-green-50",
    ghost: "text-[#25D366] hover:bg-green-50 px-4 py-2 rounded-xl",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(baseStyles, variants[variant as keyof typeof variants], className)}
    >
      {prefix ? prefix : <MessageCircle className="w-5 h-5 fill-current" />}
      {label}
      {suffix}
    </a>
  );
}
