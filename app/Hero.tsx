'use client';
import { inter } from '@/utils/fonts';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
import SvgGradient from '@/components/SvgGradient';
import { containerVariants, itemsVariants, itemsVariants_2 } from '@/utils/variants';

const sosMedList = [
  {
    logo: () => <FaFacebook style={{ fill: 'url(#blue-gradient)' }} />,
    link: 'https://facebook.com',
  },
  {
    logo: () => <FaInstagram style={{ fill: 'url(#blue-gradient)' }} />,
    link: 'https://instagram.com',
  },
  {
    logo: () => <FaXTwitter style={{ fill: 'url(#blue-gradient)' }} />,
    link: 'https://twitter.com',
  },
  {
    logo: () => <FaTiktok style={{ fill: 'url(#blue-gradient)' }} />,
    link: 'https://tiktok.com',
  },
];

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
    <div
      id='home'
      className='grid grid-rows-[1fr, 2fr, 1fr] gap-4 place-items-center h-screen'
    >
      <div className='row-start-2 px-5 md:mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-32'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='inView'
        >
          <motion.h1
            className={clsx(
              inter.className,
              'bg-gradient-to-r from-purple-800 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text',
              'text-center md:text-start text-2xl md:text-5xl md:leading-[1.2]'
            )}
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

          {/* Buttons Column */}
          <motion.div
            className='block mx-auto md:mx-0 w-fit mt-7 md:mt-10'
            variants={itemsVariants}
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
        </motion.div>

        {/* Image Column */}
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

      {/* Sosmed Column */}
      <motion.ul
        className='row-start-3 flex justify-center gap-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
      >
        <SvgGradient />
        {sosMedList.map((list) => (
          <motion.li
            key={list.link}
            variants={itemsVariants_2}
            transition={{
              duration: 0.7,
            }}
          >
            <a
              href={list.link}
              target='_blank'
              className='text-lg'
            >
              {list.logo()}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Hero;
