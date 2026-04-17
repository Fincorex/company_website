import React from 'react';
import Hero from '../components/sections/Hero';
import Clientele from '../components/sections/Clientele';
import InfrastructurePositioning from '../components/sections/InfrastructurePositioning';
import ProductsOverview from '../components/sections/ProductsOverview';
import WhoWeServe from '../components/sections/WhoWeServe';
import Process from '../components/sections/Process';
import Integrations from '../components/sections/Integrations';
import ScalableInfrastructure from '../components/sections/ScalableInfrastructure';
import Testimonial from '../components/sections/Testimonial';
import Faq from '../components/sections/Faq';
import CallToAction from '../components/sections/CallToAction';
import Blog from '../components/sections/Blog';

export default function HRMDashboard() {
  return (
    <>
      <Hero />
      <Clientele />
      <InfrastructurePositioning />
      <ProductsOverview />
      <WhoWeServe />
      <Process />
      <Integrations />
      <ScalableInfrastructure />
      <Testimonial />
      <Faq />
      <CallToAction />
      <Blog />
    </>
  );
}
