
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-teal/20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto bg-glass rounded-2xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your <span className="text-gradient">Video Publishing</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of content creators saving 10+ hours each week with CrossPostify's automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-purple text-white hover:opacity-90">
              <Link to="/app" className="flex items-center">
                Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            No credit card required • Free 14-day trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
