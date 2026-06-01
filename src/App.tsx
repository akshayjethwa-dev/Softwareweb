/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import Layout from './components/Layout';
import SEO from './components/SEO';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

// Updated imports to include GA4 initialization and tracking
import { persistUTMs, initAnalytics, trackPageView } from './lib/analytics';

// Import New Dedicated Section Pages
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import PricingPage from './pages/PricingPage';
import ProcessPage from './pages/ProcessPage';
import TechStackPage from './pages/TechStackPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail'; 

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

// Updated Analytics & UTM Tracker
function AnalyticsInit() {
  const location = useLocation();

  // 1. Initialize GA4 and persist UTMs once when the app loads
  useEffect(() => {
    initAnalytics();
    persistUTMs();
  }, []);

  // 2. Track a page view every time the route (URL) changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AnalyticsInit />
        <Layout>
          <SEO />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thank-you" element={<ThankYou />} />
            
            {/* New Dedicated Section Pages */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/tech-stack" element={<TechStackPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Detail & Blog Pages */}
            <Route path="/products/:slug" element={<ProductDetail />} /> 
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/insights" element={<Blog />} />
            <Route path="/insights/:slug" element={<ArticleDetail />} />
            
            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}