'use client';
import { clsx } from 'clsx';
import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  variants?: Variants;
  initial?: string;
  animate?: string;
  whileInView?: string;
  type: 'gradient' | 'solid';
};

const Heading = (props: HeadingProps) => {
  return (
    <motion.h2
      className={clsx(
        'text-3xl md:text-4xl text-center w-content mx-auto',
        props.type === 'gradient'
          ? 'bg-gradient-to-r from-purple-800 via-sky-200 to-indigo-300 inline-block text-transparent bg-clip-text'
          : 'text-white font-semibold'
      )}
      viewport={{
        once: true,
      }}
      {...props}
    >
      {props.children}
    </motion.h2>
  );
};

export default Heading;
