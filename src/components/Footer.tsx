import React from 'react';
import { Heart, Apple } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Apple className="h-7 w-7 text-blue-400 mr-2" />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              iOS Dev
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} John Appleseed. All rights reserved.
          </p>
          
          <p className="text-gray-400 flex items-center">
            Made with 
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;