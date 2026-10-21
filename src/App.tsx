import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './pages/HomePage';
import { PilotPage } from './pages/PilotPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SolutionsHubPage } from './pages/solutions/SolutionsHubPage';
import { ClientAcquisitionPage } from './pages/solutions/ClientAcquisitionPage';
import { BusinessSystemsPage } from './pages/solutions/BusinessSystemsPage';
import { LaunchPage } from './pages/solutions/LaunchPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { WhoWeWorkWithPage } from './pages/WhoWeWorkWithPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPage } from './pages/LegalPage';
import { ResultsPage } from './pages/ResultsPage';
import { ResultDetailPage } from './pages/ResultDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { PilotBookPage } from './pages/pilot/PilotBookPage';
import { PilotThanksPage } from './pages/pilot/PilotThanksPage';
import { CareersPage } from './pages/CareersPage';
import {
  privacyPolicyContent,
  termsOfServiceContent,
  cookiePolicyContent,
} from './data/legalData';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const PilotRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://elvtera-pilot.zite.so';
  }, []);
  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          {/* Phase 1 Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/pilot" element={<PilotRedirect />} />
          <Route path="/book" element={<PilotBookPage />} />
          <Route path="/pilot/book" element={<PilotBookPage />} />
          <Route path="/pilot/thanks" element={<PilotThanksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/careers" element={<CareersPage />} />

          {/* Phase 2 Routes */}
          <Route path="/solutions" element={<SolutionsHubPage />} />
          <Route path="/solutions/client-acquisition" element={<ClientAcquisitionPage />} />
          <Route path="/solutions/business-systems" element={<BusinessSystemsPage />} />
          <Route path="/solutions/launch" element={<LaunchPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/who-we-work-with" element={<WhoWeWorkWithPage />} />
          <Route path="/who-we-work-with/:slug" element={<SectorDetailPage />} />

          {/* Phase 3 Routes: Company, Legal & Knowledge */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/privacy-policy"
            element={<LegalPage document={privacyPolicyContent} />}
          />
          <Route
            path="/terms"
            element={<LegalPage document={termsOfServiceContent} />}
          />
          <Route
            path="/cookie-policy"
            element={<LegalPage document={cookiePolicyContent} />}
          />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/results/:slug" element={<ResultDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/:slug" element={<ResourceDetailPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
