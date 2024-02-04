'use client';
import type { Project, SelectedTab } from '@/app/Projects';
import ImagesContainer from './ImagesContainer';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type CarouselProps = {
  projects: Project[];
  selectedTab: SelectedTab;
};

const Carousel = ({ projects, selectedTab }: CarouselProps) => {
  const [positionX, setPositionX] = useState<number>(selectedTab.index);
  const ref = useRef(null);
  const isInView = useInView(ref);

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
    <div
      ref={ref}
      className='w-screen'
    >
      <div className='flex w-max'>
        {projects.map((project) => (
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
            <ImagesContainer
              images={project.links}
              isInView={isInView}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
