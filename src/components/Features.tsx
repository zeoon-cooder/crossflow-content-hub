
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  Bot, 
  Repeat, 
  Clock, 
  Image, 
  BarChart3 
} from 'lucide-react';

const features = [
  {
    title: "Unified Upload Dashboard",
    description: "Upload once and distribute to all platforms. Control everything from a single dashboard with intuitive workflows.",
    icon: <Upload className="w-10 h-10 text-brand-teal" />,
  },
  {
    title: "AI Caption Adapter",
    description: "Automatically optimizes your titles, descriptions, and hashtags for each platform's character limits and audience preferences.",
    icon: <Bot className="w-10 h-10 text-brand-purple" />,
  },
  {
    title: "Multi-Platform Integration",
    description: "Seamlessly connect to YouTube, Instagram, Facebook, X, TikTok, LinkedIn and more with secure OAuth authentication.",
    icon: <Repeat className="w-10 h-10 text-brand-blue" />,
  },
  {
    title: "Smart Scheduling",
    description: "Plan your content calendar with intelligent scheduling that posts at the optimal time for each platform.",
    icon: <Clock className="w-10 h-10 text-brand-teal" />,
  },
  {
    title: "Thumbnail Management",
    description: "Create platform-specific thumbnails with automatic cropping and AI-suggested designs for maximum engagement.",
    icon: <Image className="w-10 h-10 text-brand-purple" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance across all platforms in one unified analytics dashboard with exportable reports.",
    icon: <BarChart3 className="w-10 h-10 text-brand-blue" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-dark-400 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mb-6 inline-block px-4 py-1 bg-glass rounded-full text-sm font-medium text-brand-purple">
            Key Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            All-in-One <span className="text-gradient">Video Publishing</span> Solution
          </h2>
          <p className="text-gray-300">
            Streamline your workflow and save hours of repetitive work with our powerful features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-dark-300 border border-white/10 hover:border-brand-purple/50 transition-all hover:shadow-lg hover:shadow-brand-purple/5 group">
              <CardContent className="p-6">
                <div className="mb-4 bg-dark-400/60 w-16 h-16 rounded-xl flex items-center justify-center group-hover:animate-glow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
