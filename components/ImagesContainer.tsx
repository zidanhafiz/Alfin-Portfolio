import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, itemsVariants } from '@/utils/variants';

type ImagesContainerProps = {
  images: string[];
  index: number;
};

const ImagesContainer = ({ images, index }: ImagesContainerProps) => {
  return (
    <motion.div
      className='w-screen flex flex-wrap items-center justify-center gap-x-3 gap-y-4 md:gap-4'
      variants={containerVariants}
      initial={index === 0 ? 'hidden' : 'inView'}
      whileInView='inView'
      viewport={{ once: true }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          variants={itemsVariants}
          className='w-content'
        >
          <Image
            src={image}
            width={800}
            height={800}
            alt='nature'
            className='w-[170px] md:w-[250px] rounded-lg'
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ImagesContainer;
