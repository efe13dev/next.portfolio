'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className='bg-white bg-opacity-90 backdrop-blur-sm shadow-sm relative z-10'>
      <nav className='container mx-auto p-4'>
        <ul className='flex justify-center space-x-4'>
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <Button
                variant='ghost'
                className={`capitalize text-gray-600 hover:text-gray-900 ${
                  activeSection === section ? 'bg-gray-100' : ''
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
