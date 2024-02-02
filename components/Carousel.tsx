'use client';
import type { Project, SelectedTab } from '@/app/Projects';
import ImagesContainer from './ImagesContainer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type CarouselProps = {
  projects: Project[];
  selectedTab: SelectedTab;
};

const Carousel = ({ projects, selectedTab }: CarouselProps) => {
  const [positionX, setPositionX] = useState<number>(selectedTab.index);

  useEffect(() => {
    switch (selectedTab.index) {
      case 1:
        setPositionX(-100);
        break;
      case 2:
        setPositionX(-200);
        break;
      case 3:
        setPositionX(-300);
        break;
      default:
        setPositionX(0);
        break;
    }
  }, [selectedTab]);

  return (
    <div className='w-screen'>
      <div className='flex w-max'>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ x: positionX }}
            animate={{ x: `${positionX}%` }}
            transition={{
              type: 'spring',
              damping: 13,
              stiffness: 50,
            }}
          >
            <ImagesContainer images={project.links} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
