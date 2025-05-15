
import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';

const platforms = [
  {
    name: "YouTube",
    icon: <Youtube className="w-10 h-10 text-red-500" />,
    description: "Direct upload via YouTube Data API with full metadata control",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-10 h-10 text-pink-500" />,
    description: "Post to IGTV, Reels, and Stories via Graph API",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-10 h-10 text-blue-500" />,
    description: "Share to Pages and personal profiles with custom formatting",
  },
  {
    name: "Twitter/X",
    icon: <Twitter className="w-10 h-10 text-sky-400" />,
    description: "Auto-adapt content for Twitter's character limits",
  },
  {
    name: "TikTok",
    icon: <div className="relative w-10 h-10 flex items-center justify-center">
            <span className="text-2xl font-bold">TT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-teal opacity-50 rounded-md"></div>
          </div>,
    description: "Direct posting with trending hashtag recommendations",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-10 h-10 text-blue-700" />,
    description: "Professional formatting for business audience engagement",
  },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-20 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless <span className="text-gradient">Platform Integrations</span>
          </h2>
          <p className="text-gray-300">
            Connect once and publish everywhere with our comprehensive API integrations
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-glass rounded-xl p-6 text-center flex flex-col items-center hover:transform hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex items-center justify-center">{platform.icon}</div>
              <h3 className="font-semibold mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-300">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
