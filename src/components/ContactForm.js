// ContactForm.js
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp } from '../helpers';
const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ContactForm() {
  return (
    <motion.form
      className='space-y-4'
      variants={staggerChildren}
      initial='initial'
      animate='animate'
    >
      <motion.div variants={fadeInUp}>
        <Input
          placeholder='Tu nombre'
          className='bg-white border-gray-300'
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Input
          type='email'
          placeholder='Tu email'
          className='bg-white border-gray-300'
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Textarea
          placeholder='Tu mensaje'
          className='bg-white border-gray-300'
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Button
          type='submit'
          className='bg-blue-500 text-white hover:bg-blue-600'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enviar Mensaje
        </Button>
      </motion.div>
    </motion.form>
  );
}
