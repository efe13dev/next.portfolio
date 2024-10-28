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
      <div className="w-full md:w-1/2 lg:w-2/3">
        <motion.div className="mb-2" variants={fadeInUp}>
          <Input
            placeholder='Tu nombre'
            className='bg-white border-gray-300 w-full'
          />
        </motion.div>
        <motion.div className="mb-2" variants={fadeInUp}>
          <Input
            type='email'
            placeholder='Tu email'
            className='bg-white border-gray-300 w-full'
          />
        </motion.div>
        <motion.div className="mb-2" variants={fadeInUp}>
          <Textarea
            placeholder='Tu mensaje'
            className='bg-white border-gray-300 w-full'
          />
        </motion.div>
      </div>
      <motion.div  variants={fadeInUp}>
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
