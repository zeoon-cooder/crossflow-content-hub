
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Integrations from '@/components/Integrations';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-400">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
