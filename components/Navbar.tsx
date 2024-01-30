'use client';
import { useState } from 'react';
import Hamburger from './Hamburger';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { containerVariants, itemsVariants_2 } from '@/utils/variants';

type MenuList = {
  name: string;
  link: string;
};

const menuList: MenuList[] = [
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
    <motion.nav
      className='z-50'
      variants={containerVariants}
      initial='hidden'
      animate='inView'
    >
      {/* Navbar in mobile view */}
      <Hamburger showMenuToggle={showMenuToggle} />
      <AnimatePresence>
        {isShow && (
          <motion.ul
            className='md:hidden inset-x-0 absolute flex flex-col text-center text-black font-semibold shadow-md top-16'
            variants={containerVariants}
            initial='hidden'
            animate='inView'
            exit='hidden'
          >
            {menuList.map((menu) => (
              <motion.li
                key={menu.name}
                className='bg-white py-4'
                variants={itemsVariants_2}
                transition={{
                  duration: 0.5,
                }}
              >
                <a
                  href={menu.link}
                  className={clsx('hover:underline')}
                  onClick={showMenuToggle}
                >
                  {menu.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Navbar in desktop view */}
      <motion.ul
        className='hidden md:flex justify-center gap-20'
        variants={containerVariants}
        initial='hidden'
        animate='inView'
      >
        {menuList.map((menu) => (
          <motion.li
            key={menu.name}
            variants={itemsVariants_2}
            transition={{ duration: 0.7 }}
          >
            <a
              href={menu.link}
              className={clsx(
                'px-3 py-1 rounded-md transition-colors hover:bg-white hover:text-black'
              )}
            >
              {menu.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
