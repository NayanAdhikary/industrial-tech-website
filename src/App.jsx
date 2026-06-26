import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Industries from './pages/Industries';
import Solutions from './pages/Solutions';
import ComputerVision from './pages/ComputerVision';
import NLP from './pages/NLP';
import ContentModeration from './pages/ContentModeration';
import ProductCategorization from './pages/ProductCategorization';
import DataAnnotation from './pages/DataAnnotation';
import BackgroundShader from './components/BackgroundShader';

function App() {
  return (
    <Router>
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
            <Route path="*" element={<Industries />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
