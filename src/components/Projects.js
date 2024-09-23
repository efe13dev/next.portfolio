// Projects.js
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';
import { ProjectCard } from './ProjectCard';

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Projects() {
  return (
    <AnimatedSection
      id='projects'
      className='space-y-4'
    >
      <h2 className='text-3xl font-semibold text-gray-900'>
        Proyectos Destacados
      </h2>
      <motion.div
        className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
        variants={staggerChildren}
      >
        {[1, 2, 3].map((project) => (
          <ProjectCard
            key={project}
            project={project}
          />
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
