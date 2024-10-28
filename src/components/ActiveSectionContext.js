'use client';
import { createContext, useState, useEffect } from 'react';

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContext;
