'use client';
import Carousel from '@/components/Carousel';
import ProjectTabs from '@/components/ProjectTabs';
import { generateImagesLink } from '@/utils/tools';
import { containerVariants, itemsVariants } from '@/utils/variants';
import { motion } from 'framer-motion';
import { useState } from 'react';

export enum ProjectNames {
  NATURE = 'NATURE',
  BUILDING = 'BUILDING',
  TYPHO = 'TYPHO',
  PRODUCT = 'PRODUCT',
}

export type Project = {
  name: ProjectNames;
  links: string[];
};

export type SelectedTab = {
  index: number;
  name: ProjectNames;
};

const projects: Project[] = [
  {
    name: ProjectNames.NATURE,
    links: generateImagesLink(ProjectNames.NATURE),
  },
  {
    name: ProjectNames.BUILDING,
    links: generateImagesLink(ProjectNames.BUILDING),
  },
  {
    name: ProjectNames.TYPHO,
    links: generateImagesLink(ProjectNames.TYPHO),
  },
  {
    name: ProjectNames.PRODUCT,
    links: generateImagesLink(ProjectNames.PRODUCT),
  },
];

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>({
    index: 0,
    name: ProjectNames.NATURE,
  });

  return (
    <motion.div
      className='px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden'
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{
        once: true,
      }}
    >
      <motion.h2
        className='text-3xl md:text-5xl text-center bg-gradient-to-r from-purple-800 via-sky-200 to-indigo-300 block text-transparent bg-clip-text'
        variants={itemsVariants}
        transition={{
          delay: 1,
        }}
      >
        My Projects
      </motion.h2>
      <div className='my-20'>
        <ProjectTabs
          projects={projects}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Carousel
          projects={projects}
          selectedTab={selectedTab}
        />
      </div>
    </motion.div>
  );
};

export default Projects;
