'use client';
import Carousel from '@/components/Carousel';
import Heading from '@/components/Heading';
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
    <div
      id='projects'
      className='px-4 min-h-screen py-24 md:py-36 bg-gradient-to-r from-slate-950 to-black'
    >
      <motion.div
        className='flex flex-col items-center overflow-hidden'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
        viewport={{
          once: true,
        }}
      >
        <Heading
          variants={itemsVariants}
          type='gradient'
        >
          My Projects
        </Heading>
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
    </div>
  );
};

export default Projects;
