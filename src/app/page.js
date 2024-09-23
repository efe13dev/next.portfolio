// Portfolio.js (componente principal)
'use client';
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Portfolio() {
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
    <div className='min-h-screen bg-gray-50 text-gray-800 relative'>
      {/* Cuadrícula de fondo */}
      <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0),
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            maskImage:
              'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>

      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className='container mx-auto px-6 py-24 space-y-24 relative z-10'>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
