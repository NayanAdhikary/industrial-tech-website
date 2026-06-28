import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import ComputerVision from './pages/ComputerVision';
import NLP from './pages/NLP';
import ContentModeration from './pages/ContentModeration';
import ProductCategorization from './pages/ProductCategorization';
import DataAnnotation from './pages/DataAnnotation';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import BackgroundShader from './components/BackgroundShader';
import CtaSection from './components/CtaSection';

import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMessages from './pages/admin/AdminMessages';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';

function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px'
    });

    // Observe all elements with .reveal class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [location]);

  return null;
}

function PublicLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <BackgroundShader />
      <Navbar />
      <main style={{ flex: 1, paddingTop: '64px' }}>
        {children}
      </main>
      <CtaSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollRevealManager />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="*" element={<AdminDashboard />} />
        </Route>

        {/* Public Routes */}
        <Route path="*" element={
          <PublicLayout>
            <Routes>
              <Route path="/" element={<Industries />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/computer-vision" element={<ComputerVision />} />
              <Route path="/nlp" element={<NLP />} />
              <Route path="/content-moderation" element={<ContentModeration />} />
              <Route path="/product-categorization" element={<ProductCategorization />} />
              <Route path="/data-annotation" element={<DataAnnotation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="*" element={<Industries />} />
            </Routes>
          </PublicLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
