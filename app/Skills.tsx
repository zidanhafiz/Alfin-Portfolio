'use client';
import { FaPenNib, FaCameraRetro } from 'react-icons/fa';
import { BsPersonVideo3 } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { containerVariants, itemsVariants } from '@/utils/variants';

type Skill = {
  name: string;
  desc: string;
  icon: () => JSX.Element;
};

const skills: Skill[] = [
  {
    name: 'Graphic Designer',
    desc: 'Using a smartphone and other free applications such as Canva, Pixelab, Lightroom, Lens distortion, and others.',
    icon: () => <FaPenNib />,
  },
  {
    name: 'Photgrapher',
    desc: 'POV Building, Human Interest, Nature, and Random Shoot.',
    icon: () => <FaCameraRetro />,
  },
  {
    name: 'Content Creator',
    desc: 'Creating tutorial content on typography and storytelling with simple motion graphics.',
    icon: () => <BsPersonVideo3 />,
  },
];

const Skills = () => {
  return (
    <motion.div
      className='px-4 py-28 md:py-36 h-fit bg-[url("/images/skills.png")] bg-auto bg-top bg-fixed'
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{ once: true }}
    >
      <motion.h2
        className='text-3xl md:text-4xl text-center font-semibold'
        variants={itemsVariants}
      >
        My Skills
      </motion.h2>
      <motion.div
        className='mt-20 md:mt-28 flex flex-col md:flex-row justify-center gap-12 md:gap-20'
        variants={containerVariants}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className='flex flex-col items-center text-center py-8 px-5 md:max-w-[400px] rounded-xl backdrop-blur-sm border'
            variants={itemsVariants}
          >
            <h6 className='font-semibold'>{skill.name.toUpperCase()}</h6>
            <p className='mt-5 mb-7'>{skill.desc}</p>
            <span className='text-3xl'>{skill.icon()}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
