import Header from './Header';
import Footer from './Footer';
import { ReactNode, useState, createContext, useContext } from 'react';
import WhatsAppCTA from './WhatsAppCTA';
import LeadModal from './LeadModal';
import { ArrowRight } from 'lucide-react';

interface ModalContextType {
  openModal: (title?: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useLeadModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useLeadModal must be used within Layout');
  return context;
};

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [modalState, setModalState] = useState<{ isOpen: boolean; title?: string }>({
    isOpen: false,
  });

  const openModal = (title?: string) => setModalState({ isOpen: true, title });
  const closeModal = () => setModalState({ ...modalState, isOpen: false });

  return (
    <ModalContext.Provider value={{ openModal }}>
      {/* Added pb-20 to ensure content isn't hidden behind the sticky CTA on mobile */}
      <div className="flex flex-col min-h-screen selection:bg-brand-accent selection:text-white pb-20 md:pb-0">
        <Header />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Global UI Elements */}
        <WhatsAppCTA variant="floating" />
        <LeadModal 
          isOpen={modalState.isOpen} 
          onClose={closeModal} 
          title={modalState.title}
        />

        {/* NEW: Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-xl border-t border-border md:hidden z-40 flex items-center justify-center shadow-2xl">
          <button 
            onClick={() => openModal('Mobile Sticky CTA')}
            className="w-full bg-brand-primary text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-brand-primary/20"
          >
            Get a Free Roadmap <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </ModalContext.Provider>
  );
}