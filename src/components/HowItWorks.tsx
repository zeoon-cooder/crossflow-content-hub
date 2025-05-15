
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
    <section className="py-20 bg-dark-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">CrossPostify</span> Works
          </h2>
          <p className="text-gray-300">
            A simple four-step process to automate your video publishing workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-dark-400 border border-white/10 overflow-hidden relative">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-teal to-brand-purple"></div>
              <CardContent className="p-6 pt-8">
                <div className="text-4xl font-bold text-white/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
