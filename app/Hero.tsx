'use client';
import Navbar from '@/components/Navbar';
import clsx from 'clsx';
import { Limelight } from 'next/font/google';
import { motion } from 'framer-motion';

const limelight = Limelight({ subsets: ['latin'], weight: '400' });

const Hero = () => {
  return (
    <div
      id='home'
      className='bg-gradient-to-r from-black via-gray-900 to-gray-800 py-8 md:py-12 h-[700px]'
    >
      <Navbar />
      <div className='mt-20 md:mt-52 mx-4 md:mx-28'>
        <motion.h1
          className={clsx(limelight.className, 'text-3xl md:text-6xl md:leading-[1.2]')}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Capturing
          <br /> moments with
          <br /> Alfin Ilham Maulidi.
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
