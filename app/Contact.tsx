"use client";
import ContactBtn from "@/components/ContactBtn";
import { Form } from "@/components/Form";
import Heading from "@/components/Heading";
import { containerVariants, itemsVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export type Contact = {
  name: string;
  link: string;
  logo: (fill?: string) => ReactNode;
};

export const contactsList: Contact[] = [
  {
    name: "Whatsapp",
    link: `https://wa.me/6282340361781`,
    logo: (fill) => (fill ? <FaWhatsapp style={{ fill: fill }} /> : <FaWhatsapp />),
  },
  {
    name: "Email",
    link: "mailto:alfinjuni2002@gmail.com",
    logo: (fill) => (fill ? <MdOutlineEmail style={{ fill: fill }} /> : <MdOutlineEmail />),
  },
  {
    name: "Instagram",
    link: "https://instagram.com/alfin.ilham.maulidi",
    logo: (fill) => (fill ? <FaInstagram style={{ fill: fill }} /> : <FaInstagram />),
  },
  {
    name: "Tiktok",
    link: "https://tiktok.com/@alfinilham",
    logo: (fill) => (fill ? <FaTiktok style={{ fill: fill }} /> : <FaTiktok />),
  },
  {
    name: "Youtube",
    link: "https://youtube.com/@alfinilhamm",
    logo: (fill) => (fill ? <FaYoutube style={{ fill: fill }} /> : <FaYoutube />),
  },
];

const Contact = () => {
  return (
    <div
      id='contact'
      className='h-screen py-24 md:py-36 px-4 bg-gradient-to-bl from-black to-neutral-950'
    >
      <motion.div
        className='flex flex-col max-w-xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
        viewport={{ once: true }}
      >
        <Heading
          variants={itemsVariants}
          type='solid'
        >
          Let&apos;s Work Together
        </Heading>
        <motion.div
          className='mt-12 md:mt-16 mb-10 flex flex-wrap gap-3 justify-center'
          variants={containerVariants}
          initial='hidden'
          whileInView='inView'
          viewport={{ once: true }}
        >
          {contactsList.map((contact, index) => (
            <ContactBtn
              key={index}
              contact={contact}
              index={index}
            />
          ))}
        </motion.div>
        <Form />
      </motion.div>
    </div>
  );
};

export default Contact;
