// Navigation.js
import { Button } from '@/components/ui/button';

export function Navigation({ activeSection, scrollToSection }) {
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
