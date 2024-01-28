'use client';
import { inter, limelight } from '@/utils/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
    rotateY: 40,
    rotateX: -15,
    rotateZ: 8,
  },
  inView: {
    opacity: 1,
    rotateY: 8,
    rotateX: -4,
    rotateZ: 2,
    transition: {
      duration: 1,
    },
  },
};

const ctaVariants = {
  init: {
    y: 0,
  },
  inHover: {
    y: -5,
  },
};

const Hero = () => {
  return (
    <div id='home'>
      <div className='px-5 md:mx-auto h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-32'>
        <div>
          <motion.h1
            className={clsx(
              inter.className,
              'bg-gradient-to-r from-purple-800 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text',
              'text-center md:text-start text-2xl md:text-5xl md:leading-[1.2]'
            )}
            variants={titleVariants}
            initial='hidden'
            whileInView='inView'
          >
            Capturing moments with
            <br /> Alfin Ilham Maulidi.
          </motion.h1>
          <motion.p
            className='mt-4 text-gray-300 text-center md:text-start'
            variants={titleVariants}
            initial='hidden'
            whileInView='inView'
          >
            Photograhy & Videography
          </motion.p>
          <motion.div
            className='block mx-auto md:mx-0 w-fit mt-7 md:mt-10'
            variants={titleVariants}
            initial='hidden'
            whileInView='inView'
          >
            <motion.button
              className='bg-gradient-to-r from-purple-800 to-indigo-600 border border-transparent hover:border-white font-semibold px-4 py-2 rounded'
              variants={ctaVariants}
              initial='init'
              whileHover='inHover'
            >
              Contact Me
            </motion.button>
            <motion.button
              className='border font-semibold px-4 py-2 rounded ml-5 hover:bg-white hover:text-black transition-colors'
              variants={ctaVariants}
              initial='init'
              whileHover='inHover'
            >
              My Projects
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          variants={imgVariants}
          initial='hidden'
          whileInView='inView'
        >
          <Image
            src='/images/hero-closeup.png'
            alt='alfin'
            width={800}
            height={800}
            className='w-[150px] md:w-[300px] rounded-full shadow-lg'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
