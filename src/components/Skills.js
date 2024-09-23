// Skills.js
import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Globe } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const colorfulIcons = {
  React: <Code className='text-blue-500' />,
  'Next.js': <Globe className='text-black' />,
  'Node.js': <Server className='text-green-500' />,
  TypeScript: <Code className='text-blue-700' />,
  'Tailwind CSS': <Palette className='text-teal-500' />,
  GraphQL: <Database className='text-pink-500' />
};

const staggerChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export function Skills() {
  return (
    <AnimatedSection
      id='skills'
      className='space-y-4'
    >
      <h2 className='text-3xl font-semibold text-gray-900'>Habilidades</h2>
      <motion.div
        className='flex flex-wrap gap-4'
        variants={staggerChildren}
      >
        {Object.entries(colorfulIcons).map(([skill, icon]) => (
          <motion.div
            key={skill}
            className='flex items-center gap-2 px-4 py-2 bg-white rounded-full text-lg shadow-sm transition-all hover:shadow-md cursor-default'
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            {icon}
            <span className='text-gray-700'>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
