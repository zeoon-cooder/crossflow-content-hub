
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-teal/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Create Once, <span className="text-gradient">Publish Everywhere</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Automate your video publishing workflow across all social platforms. 
            Save hours with AI-powered content adaptation for each platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-brand-teal to-brand-purple text-white hover:opacity-90">
              <Link to="/app" className="flex items-center">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-glass rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <div className="relative aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1920" 
                alt="CrossPostify Dashboard Preview" 
                className="object-cover w-full h-full" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 -z-10 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://placehold.co/200x80/png?text=YouTube" alt="YouTube" className="h-8 mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://placehold.co/200x80/png?text=Instagram" alt="Instagram" className="h-8 mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://placehold.co/200x80/png?text=Facebook" alt="Facebook" className="h-8 mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://placehold.co/200x80/png?text=TikTok" alt="TikTok" className="h-8 mx-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
            <img src="https://placehold.co/200x80/png?text=LinkedIn" alt="LinkedIn" className="h-8 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
