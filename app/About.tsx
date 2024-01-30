'use client';
import { limelight } from '@/utils/fonts';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { containerVariants } from '@/utils/variants';

const itemsVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      duration: 0.7,
    },
  },
};

const lineVariants = {
  hidden: {
    scaleX: 0,
  },
  inView: {
    scaleX: 1,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <div className='h-fit py-20 bg-gradient-to-l from-purple-900 via-violet-800 to-indigo-800 flex flex-col items-center justify-center'>
      <motion.article
        className='max-w-4xl px-5'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
        viewport={{ once: true }}
      >
        <motion.h2
          className={clsx(limelight.className, 'text-4xl md:text-5xl md:leading-[1.2em]')}
          variants={itemsVariants}
        >
          My Name is <br />
          Alfin Ilham Maulidi
        </motion.h2>
        <motion.div
          className='bg-white w-1/3 h-1 mt-5 md:mt-8 mb-8 md:mb-12'
          variants={lineVariants}
        ></motion.div>
        <motion.p
          className='md:leading-7'
          variants={itemsVariants}
        >
          I am a freelancer in the fields of photography, videography, and creative
          design. I am based in South Jakarta, and I am ready to collaborate and work
          together.
        </motion.p>
        <motion.p
          className='mt-6 md:leading-7'
          variants={itemsVariants}
        >
          For the past 2 years, I have been dedicated to freelancing in the areas of
          photography, videography, and creative design. I am also actively involved in a
          university organization that focuses on PDD (Publication, Documentation, and
          Decoration). Additionally, I have contributed to a community organization in my
          hometown.
        </motion.p>
      </motion.article>
    </div>
  );
};

export default About;
