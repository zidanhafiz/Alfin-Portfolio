"use client";
import { Contact } from "@/app/Contact";
import { motion } from "framer-motion";

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
      type: "spring",
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
      className='bg-white/10 border border-white/40 rounded-lg p-[1px]'
      variants={contactsListVariants}
      initial='hidden'
      whileInView='inView'
      whileHover='inHover'
      viewport={{ once: true }}
    >
      <div className='bg-black hover:bg-white hover:text-black transition-colors flex items-center gap-2 h-full w-full py-2 px-3 rounded-lg'>
        <span className=''>{contact.logo()}</span>
        <span className='text-sm'>{contact.name}</span>
      </div>
    </motion.a>
  );
};

export default ContactBtn;
