
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description: "Link your YouTube, Instagram, TikTok, and other social media accounts securely with OAuth.",
  },
  {
    number: "02",
    title: "Upload Your Video",
    description: "Upload your video once, add a global title and description that will be intelligently adapted.",
  },
  {
    number: "03",
    title: "Customize Per Platform",
    description: "Review AI-suggested adaptations for each platform and make adjustments if needed.",
  },
  {
    number: "04",
    title: "Schedule & Publish",
    description: "Set publishing times for each platform or publish immediately across all networks.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-dark-300 relative">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 inline-block px-4 py-1 bg-glass rounded-full text-sm font-medium text-brand-blue">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">CrossPostify</span> Works
          </h2>
          <p className="text-gray-300">
            A simple four-step process to automate your video publishing workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-dark-400 border border-white/10 overflow-hidden relative group hover:transform hover:scale-105 transition-transform">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-teal to-brand-purple"></div>
              <CardContent className="p-6 pt-8">
                <div className="text-4xl font-bold text-white/10 mb-4 group-hover:text-gradient transition-all">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-glass p-6 rounded-xl max-w-2xl text-center">
            <p className="text-lg text-gray-200">
              "CrossPostify saves me 7+ hours every week. I now focus on creating content, not wrestling with different platform requirements."
            </p>
            <div className="mt-4">
              <p className="font-medium">Sarah L.</p>
              <p className="text-sm text-gray-400">Content Creator • 250K+ Followers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
