'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import type { Project, SelectedTab } from '@/app/Projects';
import { containerVariants, itemsVariants_2 } from '@/utils/variants';

type ProjectTabsProps = {
  projects: Project[];
  selectedTab: SelectedTab;
  setSelectedTab: Dispatch<SetStateAction<SelectedTab>>;
};

const tabsLabelVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const ProjectTabs = ({ projects, selectedTab, setSelectedTab }: ProjectTabsProps) => {
  return (
    <motion.ul
      className='flex justify-center items-end gap-2 md:gap-4 mb-16'
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
    >
      {projects.map((project, index) => (
        <motion.li
          key={index}
          className='text-center text-base md:text-lg relative cursor-pointer'
          variants={itemsVariants_2}
          transition={{
            duration: 0.5,
          }}
          onClick={() => setSelectedTab({ index: index, name: project.name })}
        >
          <span className='px-2 md:px-4 opacity-80 hover:opacity-100 transition-opacity'>
            {project.name}
          </span>
          <AnimatePresence>
            {project.name === selectedTab.name && (
              <>
                <motion.div
                  layoutId='selected'
                  className='bg-white inset-0 absolute z-0 rounded-xl'
                />
                <motion.span
                  className='z-10 text-black font-semibold absolute inset-0'
                  variants={tabsLabelVariants}
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                >
                  {project.name}
                </motion.span>
              </>
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ProjectTabs;
