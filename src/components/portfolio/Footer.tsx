import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left: Copyright */}
          <div className="text-muted-foreground text-sm">
            © {currentYear} umscripts. All rights reserved.
          </div>

          {/* Center: Made with love */}
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="mx-1 h-4 w-4 text-red-500 fill-current" />
            <span>by Usman</span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex space-x-6 text-sm">
            <button 
              onClick={() => {
                const element = document.getElementById('home');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;