import { motion } from 'motion/react';
import { ArrowLeft, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | Aetheria Studio" description="The page you are looking for does not exist." />
      
      <Section className="min-h-[70vh] flex items-center justify-center pt-40">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <Ban className="w-10 h-10 text-red-500" />
          </motion.div>

          <h1 className="text-8xl font-black mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Path Not Resolved.</h2>

          <p className="text-muted-foreground mb-12">
            The resource you requested could not be located in our architecture. It may have been moved or deleted.
          </p>

          <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform">
            <ArrowLeft className="w-5 h-5" /> Return to Root
          </Link>
        </div>
      </Section>
    </>
  );
}
