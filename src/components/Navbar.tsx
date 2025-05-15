
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-500/90 backdrop-blur-lg shadow-lg' : 'bg-dark-500/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-teal to-brand-purple flex items-center justify-center mr-2 text-white font-bold">
                CP
              </div>
              <span className="text-2xl font-bold text-gradient">CrossPostify</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
            <Link to="/#integrations" className="text-gray-300 hover:text-white transition-colors">Integrations</Link>
            <Link to="/#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Button className="bg-gradient-to-r from-brand-teal to-brand-purple hover:opacity-90 transition-opacity">
              <Link to="/app">Get Started</Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 bg-dark-400/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/#features" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/#integrations" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link 
                to="/#pricing" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/login" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Button className="bg-gradient-to-r from-brand-teal to-brand-purple hover:opacity-90 transition-opacity w-full">
                <Link to="/app">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
