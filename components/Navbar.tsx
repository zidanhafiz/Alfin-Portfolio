'use client';
import { useState } from 'react';
import Hamburger from './Hamburger';
import { motion, AnimatePresence } from 'framer-motion';

const menuList = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const Navbar = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const showMenuToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div className='w-full fixed top-0 py-4 md:py-10'>
      {/* Navbar in mobile view */}
      <Hamburger showMenuToggle={showMenuToggle} />
      <AnimatePresence>
        {isShow && (
          <motion.ul
            className='md:hidden inset-x-0 absolute py-8 flex flex-col gap-6 bg-white text-center text-black font-semibold border-y-2 shadow-md z-10 top-16'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {menuList.map((menu) => (
              <li
                key={menu.name}
                className='mx-auto'
              >
                <a
                  href={menu.link}
                  className='hover:underline'
                  onClick={showMenuToggle}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Navbar in desktop view */}
      <ul className='hidden md:flex justify-center gap-20'>
        {menuList.map((menu) => (
          <li
            key={menu.name}
            className='font-semibold'
          >
            <a
              href={menu.link}
              className='px-3 py-1 rounded-md transition-colors hover:bg-white hover:text-black'
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
