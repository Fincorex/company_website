import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@shared/context/AuthContext';
import { ThemeProvider } from '@shared/context/ThemeContext';
import Layout from '@shared/components/layout/Layout';
import ScrollToTop from '@shared/components/ScrollToTop';
import { ROUTES } from '@shared/constants/routes';

// Marketing Pages
import LandingPage from '@marketing/pages/LandingPage';
import ProductsPage from '@marketing/pages/ProductsPage';
import ProductDetailPage from '@marketing/pages/ProductDetailPage';
import AboutPage from '@marketing/pages/AboutPage';
import CaseStudiesPage from '@marketing/pages/CaseStudiesPage';
import WaitlistPage from '@marketing/pages/WaitlistPage';
import ContactPage from '@marketing/pages/ContactPage';

const AppRouter = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Website Routes */}
            <Route path={ROUTES.HOME} element={<Layout />}>
              <Route index element={<Navigate to={ROUTES.HRM} replace />} />
              <Route path={ROUTES.HRM.slice(1)} element={<LandingPage />} />
              <Route path={ROUTES.PRODUCTS.slice(1)} element={<ProductsPage />} />
              <Route path={ROUTES.PRODUCT_DETAIL.slice(1)} element={<ProductDetailPage />} />
              <Route path={ROUTES.ABOUT.slice(1)} element={<AboutPage />} />
              <Route path={ROUTES.CASE_STUDIES.slice(1)} element={<CaseStudiesPage />} />
              <Route path={ROUTES.WAITLIST.slice(1)} element={<WaitlistPage />} />
              <Route path={ROUTES.CONTACT.slice(1)} element={<ContactPage />} />
            </Route>

            {/* Catch-all - Redirect to Home */}
            <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppRouter;
