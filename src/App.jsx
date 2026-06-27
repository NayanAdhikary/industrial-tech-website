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
import BackgroundShader from './components/BackgroundShader';

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

function App() {
  return (
    <Router>
      <ScrollRevealManager />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <BackgroundShader />
        <Navbar />
        <main style={{ flex: 1, paddingTop: '64px' }}>
          <Routes>
            <Route path="/" element={<Industries />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/computer-vision" element={<ComputerVision />} />
            <Route path="/nlp" element={<NLP />} />
            <Route path="/content-moderation" element={<ContentModeration />} />
            <Route path="/product-categorization" element={<ProductCategorization />} />
            <Route path="/data-annotation" element={<DataAnnotation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Industries />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
