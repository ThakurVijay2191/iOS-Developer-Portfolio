import React, { useEffect, useState } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = ' Software Engineer';
  
  useEffect(() => {
    let currentIndex = 0;
    let intervalId: number;
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    };
    
    intervalId = window.setInterval(typeText, 100);
    
    const cursorIntervalId = window.setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(intervalId);
      clearInterval(cursorIntervalId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Grid patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Vijay Thakur
            <br />
            <h5 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
              📱 iOS Developer | Passionate about Crafting Seamless Mobile Experiences 🚀
            </h5>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              {typedText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
           With 2.5 years of experience in iOS development, I thrive on turning innovative ideas into user-friendly, high-performance mobile applications. My expertise lies in leveraging the latest technologies and design principles to create apps that resonate with users and exceed expectations.

Whether it's building elegant UIs, optimizing app performance, or integrating complex features, I am committed to delivering top-notch solutions that make a difference. I thrive in collaborative environments, where I can contribute my skills in Swift, Objective-C, and various frameworks to drive project success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ChevronRight className="inline-block ml-1 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;