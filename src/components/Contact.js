import { AnimatedSection } from './AnimatedSection';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <AnimatedSection
      id='contact'
      className='space-y-4'
    >
      <h2 className='text-3xl font-semibold text-gray-900'>Contáctame</h2>
      <ContactForm />
    </AnimatedSection>
  );
}
