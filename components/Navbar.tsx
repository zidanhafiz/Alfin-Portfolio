'use client';
import { useState } from 'react';
import Hamburger from './Hamburger';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import clsx from 'clsx';

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
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const showMenuToggle = () => {
    setIsShow(!isShow);
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 60) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  return (
    <div
      className={clsx(
        'w-full',
        isFixed && 'fixed top-0 bg-white text-black py-3 shadow-md'
      )}
    >
      {/* Navbar in mobile view */}
      <Hamburger
        showMenuToggle={showMenuToggle}
        isFixed={isFixed}
      />
      <AnimatePresence>
        {isShow && (
          <motion.ul
            className={clsx(
              'md:hidden inset-x-0 absolute py-8 flex flex-col gap-6 bg-white text-center text-black font-semibold border-y-2 shadow-md z-10',
              isFixed ? 'top-16' : 'top-24'
            )}
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
              className={clsx(
                'px-3 py-1 rounded-md transition-colors',
                isFixed
                  ? 'hover:bg-black hover:text-white'
                  : 'hover:bg-white hover:text-black'
              )}
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
