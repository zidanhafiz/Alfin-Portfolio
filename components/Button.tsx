'use client';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  type: 'gradient' | 'outline';
  link: string;
};

const ctaVariants = {
  init: {
    y: 0,
  },
  inHover: {
    y: -5,
  },
};

const Button = ({ children, type, link }: ButtonProps) => {
  return (
    <motion.a
      className={clsx(
        'font-semibold px-4 py-2 rounded',
        type === 'gradient'
          ? 'bg-gradient-to-r from-purple-800 to-indigo-600 border border-transparent hover:border-white'
          : 'border hover:bg-white hover:text-black transition-colors'
      )}
      variants={ctaVariants}
      initial='init'
      whileHover='inHover'
      href={link}
    >
      {children}
    </motion.a>
  );
};

export default Button;
