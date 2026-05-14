import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isWaitlist = location.pathname === '/waitlist';

  return (
    <div className={`flex flex-col min-h-screen ${isWaitlist ? 'pattern' : ''}`}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
