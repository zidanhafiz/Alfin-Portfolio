"use client";
import { motion } from "framer-motion";
import { containerVariants, itemsVariants } from "@/utils/variants";
import Heading from "@/components/Heading";
import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  {
    name: "Davinci Resolve",
    icon: "/images/icons/davinci.png",
  },
  {
    name: "Lens Distortion",
    icon: "/images/icons/lens.png",
  },
  {
    name: "Adobe Premiere",
    icon: "/images/icons/premiere-pro.png",
  },
  {
    name: "Adobe Lightroom",
    icon: "/images/icons/photoshop-lightroom.png",
  },
  {
    name: "Capcut",
    icon: "/images/icons/capcut-seeklogo.png",
  },
  {
    name: "Canva",
    icon: "/images/icons/canva.png",
  },
  {
    name: "Pixelab",
    icon: "/images/icons/pixelab.png",
  },
  {
    name: "Snapseed",
    icon: "/images/icons/snapseed.png",
  },
];

const Skills = () => {
  return (
    <div id='skills' className='max-w-6xl px-5'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
      >
        <Heading
          variants={itemsVariants}
          type='solid'
        >
          My Skills
        </Heading>
        <motion.div
          className='flex flex-wrap justify-center mt-12 gap-12'
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className='flex items-center gap-3'
              variants={itemsVariants}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
              />
              <p className='font-semibold'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
