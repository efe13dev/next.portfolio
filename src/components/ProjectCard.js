import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp } from '../helpers';
export function ProjectCard({ project }) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className='transition-all hover:shadow-lg bg-white'>
        <CardHeader>
          <CardTitle className='text-xl font-bold'>
            Proyecto {project}
          </CardTitle>
          <CardDescription>Descripción breve del proyecto</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-gray-600'>
            Detalles del proyecto y tecnologías utilizadas.
          </p>
          <Button className='mt-4 bg-blue-500 text-white hover:bg-blue-600'>
            Ver Proyecto
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
