'use client';
import { useState } from 'react';
import Hamburger from './Hamburger';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { clsx } from 'clsx';
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
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

const Navbar = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const showMenuToggle = () => {
    setIsShow(!isShow);
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 90) return setIsScroll(true);
    return setIsScroll(false);
  });

  return (
    <header
      className={clsx(
        isScroll && 'bg-black',
        'w-full fixed top-0 py-2 px-4 md:pt-10 md:pb-7 z-50 transition'
      )}
    >
      <motion.nav
        variants={containerVariants}
        initial='hidden'
        animate='inView'
      >
        {/* Navbar in mobile view */}
        <Hamburger
          showMenuToggle={showMenuToggle}
          isShow={isShow}
        />
        <AnimatePresence>
          {isShow && (
            <motion.ul
              className='md:hidden inset-x-0 absolute flex flex-col text-center text-black font-semibold shadow-md top-14'
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
                className='pb-1 border-b border-transparent hover:border-white hover:border-b transition'
                href={menu.link}
              >
                {menu.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
