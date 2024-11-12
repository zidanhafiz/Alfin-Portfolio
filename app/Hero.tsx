"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SvgGradient from "@/components/SvgGradient";
import { containerVariants, ctaVariants, itemsVariants, itemsVariants_2 } from "@/utils/variants";
import { contactsList } from "./Contact";

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
      className='grid grid-rows-[1fr, 2fr, 1fr] gap-4 place-items-center h-screen bg-gradient-to-tr from-black via-black to-neutral-800'
    >
      <div className='row-start-2 px-5 md:mx-auto max-w-5xl flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-28'>
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
      className='max-w-[550px]'
      viewport={{ once: true }}
    >
      <motion.div
        className='flex items-center justify-center lg:justify-start gap-x-2 lg:gap-x-4 mb-3'
        variants={itemsVariants}
      >
        <motion.span
          className='text-sm text-white/90 font-semibold border border-white/60 px-3 py-1 rounded-full'
          variants={itemsVariants}
        >
          PHOTOGRAPHER
        </motion.span>
        <motion.span
          className='text-sm text-white/90 font-semibold border border-white/60 px-3 py-1 rounded-full'
          variants={itemsVariants}
        >
          VIDEOGRAPHER
        </motion.span>
      </motion.div>
      <motion.h1
        className='text-white text-center lg:text-start text-3xl lg:text-5xl md:leading-[1.2]'
        variants={itemsVariants}
      >
        Capturing moments with Alfin Ilham Maulidi.
      </motion.h1>
      <motion.p
        className='mt-4 text-gray-300 text-center lg:text-start'
        variants={itemsVariants}
      >
        I am a freelancer in the fields of photography, videography, and creative design.
      </motion.p>
      <ButtonsColumn />
    </motion.div>
  );
};

const ButtonsColumn = () => {
  return (
    <motion.div
      className='flex gap-x-5 mx-auto lg:mx-0 w-fit mt-7 md:mt-10'
      variants={itemsVariants}
    >
      <motion.a
        variants={ctaVariants}
        initial='init'
        whileHover='inHover'
        href='/resume.pdf'
        target='_blank'
        className='bg-white text-black px-6 py-2 rounded-md'
      >
        My Resume
      </motion.a>
      <motion.a
        variants={ctaVariants}
        initial='init'
        whileHover='inHover'
        href='#projects'
        className='bg-white/10 border border-white/40 text-white px-6 py-2 rounded-md backdrop-blur-md'
      >
        Latest Projects
      </motion.a>
    </motion.div>
  );
};

const ImageColumn = () => {
  return (
    <motion.div
      variants={imgVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{ once: true }}
    >
      <Image
        src='/images/profile.jpg'
        alt='alfin'
        width={800}
        height={800}
        className='w-[200px] h-[280px] md:w-[250px] lg:w-[600px] lg:h-[380px] object-cover object-[10%_70%] rounded-xl grayscale shadow-lg'
      />
    </motion.div>
  );
};

const SosmedColumn = () => {
  return (
    <>
      <SvgGradient />
      <motion.ul
        className='row-start-3 flex justify-center gap-10'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
        viewport={{ once: true }}
      >
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
              {contact.logo()}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default Hero;
