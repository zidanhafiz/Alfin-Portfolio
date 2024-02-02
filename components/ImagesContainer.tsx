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
        <motion.a
          key={index}
          variants={itemsVariants}
          className='w-content'
          href={image}
          target='_blank'
          whileHover={{ y: -20 }}
        >
          <Image
            src={image}
            width={600}
            height={600}
            alt='nature'
            className='w-[160px] md:w-[250px] rounded-lg'
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ImagesContainer;
