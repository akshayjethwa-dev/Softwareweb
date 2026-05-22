import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import LeadCaptureForm from './LeadCaptureForm';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function LeadModal({ isOpen, onClose, title = "Get a Free Digital Roadmap" }: LeadModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12 border-b border-border flex justify-between items-center bg-muted/30">
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">Fill in the details below and we'll reach out shortly.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto">
              <LeadCaptureForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
