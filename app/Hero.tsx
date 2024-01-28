'use client';
import { inter, limelight } from '@/utils/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id='home'>
      <div className='mx-auto h-screen flex justify-center items-center'>
        <motion.h1
          className={clsx(
            inter.className,
            'text-center text-3xl md:text-5xl md:leading-[1.2]'
          )}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Capturing moments with
          <br /> Alfin Ilham Maulidi.
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
