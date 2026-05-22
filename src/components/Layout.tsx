import Header from './Header';
import Footer from './Footer';
import { ReactNode, useState, createContext, useContext } from 'react';
import WhatsAppCTA from './WhatsAppCTA';
import LeadModal from './LeadModal';

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
      <div className="flex flex-col min-h-screen selection:bg-brand-accent selection:text-white">
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
      </div>
    </ModalContext.Provider>
  );
}
