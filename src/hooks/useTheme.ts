import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Check if user has a theme preference in localStorage or prefers dark mode
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      
      // Check for system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  };
  
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());
  
  useEffect(() => {
    // Update HTML class when theme changes
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return { isDarkMode, toggleTheme };
};