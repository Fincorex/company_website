import React from 'react';
import Hero from '../components/Hero';
import Clientele from '../components/Clientele';
import InfrastructurePositioning from '../components/InfrastructurePositioning';
import ProductsOverview from '../components/ProductsOverview';
import WhoWeServe from '../components/WhoWeServe';
import Process from '../components/Process';
import Integrations from '../components/Integrations';
import ScalableInfrastructure from '../components/ScalableInfrastructure';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import CallToAction from '../components/CallToAction';
import Blog from '../components/Blog';

export default function LandingPage() {
  return (
    <>
      <Hero className='mt-32' />
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
