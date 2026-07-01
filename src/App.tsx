import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import DynamicLandingPage from './pages/DynamicLandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SLAAgreement from './pages/SLAAgreement';
import DataSecurity from './pages/DataSecurity';

// Scroll to top helper on route transitions
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-brand-bg-light dark:bg-brand-bg-dark transition-colors duration-300">
          
          {/* Sticky Navbar */}
          <Navbar />
          
          {/* Page Routing */}
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sla-agreement" element={<SLAAgreement />} />
              <Route path="/data-security" element={<DataSecurity />} />
              
              {/* Catch-all dynamic SEO landing routes for 120+ pages */}
              <Route path="/:category" element={<DynamicLandingPage />} />
              <Route path="/:category/:slug" element={<DynamicLandingPage />} />
              
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          
          {/* Floating WhatsApp Action Widget */}
          <FloatingWhatsApp />
          
          {/* Mega Footer */}
          <Footer />
          
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
