'use client';
import { Contact } from '@/app/Contact';
import { motion } from 'framer-motion';

type ContactBtnProps = {
  contact: Contact;
  index: number;
};

const contactsListVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.7,
      delay: 0.3,
    },
  },
  inHover: {
    y: -7,
  },
};

const ContactBtn = ({ contact, index }: ContactBtnProps) => {
  return (
    <motion.a
      key={index}
      href={contact.link}
      target='_blank'
      className='bg-gradient-to-l from-purple-400 via-sky-200 to-violet-400 rounded-lg p-[1px]'
      variants={contactsListVariants}
      initial='hidden'
      whileInView='inView'
      whileHover='inHover'
    >
      <div className='bg-black hover:bg-white hover:text-black transition-colors flex items-center gap-5 h-full w-full p-4 rounded-lg'>
        <span className='text-lg'>{contact.logo()}</span>
        <span>{contact.name}</span>
      </div>
    </motion.a>
  );
};

export default ContactBtn;
