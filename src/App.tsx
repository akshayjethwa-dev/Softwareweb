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
import { persistUTMs } from './lib/analytics';

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

// Initial tracker
function AnalyticsInit() {
  useEffect(() => {
    persistUTMs();
  }, []);
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

