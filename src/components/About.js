import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { fadeInUp } from '../helpers';

export function About() {
  return (
    <AnimatedSection
      id='about'
      className='space-y-4'
    >
      <motion.h1
        className='text-5xl font-bold text-gray-900'
        variants={fadeInUp}
      >
        Juan Desarrollador
      </motion.h1>
      <motion.p
        className='text-2xl font-semibold text-gray-700'
        variants={fadeInUp}
      >
        Desarrollador Full Stack
      </motion.p>
      <motion.p
        variants={fadeInUp}
        className='text-lg text-gray-600'
      >
        Soy un desarrollador apasionado con experiencia en crear aplicaciones
        web modernas y eficientes. Me especializo en React, Next.js y Node.js, y
        siempre estoy buscando aprender nuevas tecnologías.
      </motion.p>
    </AnimatedSection>
  );
}
