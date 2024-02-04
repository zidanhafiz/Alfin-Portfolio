'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

type HamburgerProps = {
  showMenuToggle: () => void;
  isShow: boolean;
};

const Hamburger = ({ showMenuToggle, isShow }: HamburgerProps) => {
  return (
    <div
      className='md:hidden text-4xl w-fit p-1 cursor-pointer border border-transparent rounded-md transition hover:border-white'
      onClick={showMenuToggle}
    >
      {isShow ? <IoClose /> : <HiMenuAlt2 />}
    </div>
  );
};

export default Hamburger;
