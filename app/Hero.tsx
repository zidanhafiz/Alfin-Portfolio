'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SvgGradient from '@/components/SvgGradient';
import { containerVariants, itemsVariants, itemsVariants_2 } from '@/utils/variants';
import { contactsList } from './Contact';
import Button from '@/components/Button';

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <div
      id='home'
      className='grid grid-rows-[1fr, 2fr, 1fr] gap-4 place-items-center h-screen bg-gradient-to-tr from-black via-black to-slate-900'
    >
      <div className='row-start-2 px-5 md:mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10 md:gap-32'>
        <HeadingColumn />
        <ImageColumn />
      </div>
      <SosmedColumn />
    </div>
  );
};

const HeadingColumn = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
    >
      <motion.h1
        className='bg-gradient-to-r from-purple-800 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text text-center md:text-start text-3xl md:text-5xl md:leading-[1.2]'
        variants={itemsVariants}
      >
        Capturing moments with
        <br /> Alfin Ilham Maulidi.
      </motion.h1>
      <motion.p
        className='mt-4 text-gray-300 text-center md:text-start'
        variants={itemsVariants}
      >
        Photograhy & Videography
      </motion.p>
      <ButtonsColumn />
    </motion.div>
  );
};

const ButtonsColumn = () => {
  return (
    <motion.div
      className='flex gap-x-5 mx-auto md:mx-0 w-fit mt-7 md:mt-10'
      variants={itemsVariants}
    >
      <Button
        type='gradient'
        link='#contact'
      >
        Contact Me
      </Button>
      <Button
        type='outline'
        link='#projects'
      >
        My Projects
      </Button>
    </motion.div>
  );
};

const ImageColumn = () => {
  return (
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
  );
};

const SosmedColumn = () => {
  return (
    <motion.ul
      className='row-start-3 flex justify-center gap-10'
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{ once: true }}
    >
      <SvgGradient />
      {contactsList.map((contact, index) => (
        <motion.li
          key={index}
          variants={itemsVariants_2}
          transition={{
            duration: 0.7,
          }}
        >
          <a
            href={contact.link}
            target='_blank'
            className='text-lg'
          >
            {contact.logo('url(#blue-gradient)')}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Hero;
