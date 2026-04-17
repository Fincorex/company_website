import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import HRMDashboard from './pages/HRMDashboard';
import ProductsOverviewPage from './pages/ProductsOverviewPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/hrm" replace />} />
            <Route path="hrm" element={<HRMDashboard />} />
            <Route path="products" element={<ProductsOverviewPage />} />
            <Route path="products/:slug" element={<ProductPage />} />
            <Route path="company/about" element={<AboutPage />} />
            <Route path="company/case-studies" element={<CaseStudiesPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
