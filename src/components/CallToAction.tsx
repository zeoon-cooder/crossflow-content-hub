
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  "Save 10+ hours per week on manual publishing",
  "Optimize content for each platform automatically",
  "Track performance with unified analytics",
  "No credit card required for free trial"
];

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-teal/20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto bg-glass rounded-2xl p-10 text-center md:text-left">
          <div className="md:flex items-center justify-between">
            <div className="md:max-w-lg mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Streamline Your <span className="text-gradient">Video Publishing</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of content creators saving 10+ hours each week with CrossPostify's automation
              </p>
              
              <ul className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/20 text-brand-teal flex items-center justify-center mr-2">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-purple text-white hover:opacity-90">
                  <Link to="/app" className="flex items-center">
                    Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block bg-dark-400/50 p-4 rounded-xl border-3 border-white/5">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-teal/20 rounded-lg blur"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <p className="text-5xl font-bold text-white mb-2">14</p>
                  <p className="text-lg font-medium text-brand-teal">Day Free Trial</p>
                  <p className="text-sm text-gray-400 mt-2">No credit card required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
