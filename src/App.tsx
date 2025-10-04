import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ImpactResults from './components/ImpactResults';
import ValuePropositions from './components/ValuePropositions';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ServicesPage from './pages/Services';
import CaseStudiesPage from './pages/CaseStudies';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans">
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Services />
              <ImpactResults />
              <ValuePropositions />
              <Testimonial />
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;