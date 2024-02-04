'use client';
import ContactBtn from '@/components/ContactBtn';
import Heading from '@/components/Heading';
import { containerVariants, itemsVariants } from '@/utils/variants';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export type Contact = {
  name: string;
  link: string;
  logo: (fill?: string) => ReactNode;
};

export const contactsList: Contact[] = [
  {
    name: '+6282340361781',
    link: `https://wa.me/6282340361781`,
    logo: (fill) => (fill ? <FaWhatsapp style={{ fill: fill }} /> : <FaWhatsapp />),
  },
  {
    name: 'alfinjuni2002@gmail.com',
    link: 'mailto:alfinjuni2002@gmail.com',
    logo: (fill) =>
      fill ? <MdOutlineEmail style={{ fill: fill }} /> : <MdOutlineEmail />,
  },
  {
    name: 'alfin.ilham.maulidi',
    link: 'https://instagram.com/alfin.ilham.maulidi',
    logo: (fill) => (fill ? <FaInstagram style={{ fill: fill }} /> : <FaInstagram />),
  },
  {
    name: 'alfinilham',
    link: 'https://tiktok.com/@alfinilham',
    logo: (fill) => (fill ? <FaTiktok style={{ fill: fill }} /> : <FaTiktok />),
  },
  {
    name: 'alfinilhamm',
    link: 'https://youtube.com/@alfinilhamm',
    logo: (fill) => (fill ? <FaYoutube style={{ fill: fill }} /> : <FaYoutube />),
  },
];

const Contact = () => {
  return (
    <div
      id='contact'
      className='h-screen py-24 md:py-36 px-4 bg-gradient-to-bl from-black to-slate-950'
    >
      <motion.div
        className='flex flex-col'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
      >
        <Heading
          variants={itemsVariants}
          type='gradient'
        >
          Let&apos;s Work Together
        </Heading>
        <motion.div
          className='mt-20 md:mt-28 flex flex-col gap-8 justify-center mx-auto max-w-lg'
          variants={containerVariants}
          initial='hidden'
          whileInView='inView'
        >
          {contactsList.map((contact, index) => (
            <ContactBtn
              key={index}
              contact={contact}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
