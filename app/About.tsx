"use client";
import { teko } from "@/utils/fonts";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { containerVariants } from "@/utils/variants";
import Image from "next/image";

const itemsVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.7,
    },
  },
};

const lineVariants = {
  hidden: {
    scaleX: 0,
  },
  inView: {
    scaleX: 1,
    transition: {
      duration: 1,
    },
  },
};

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
    name: "Adobe Premiere",
    icon: "/images/icons/premiere-pro.png",
  },
  {
    name: "Adobe Lightroom",
    icon: "/images/icons/photoshop-lightroom.png",
  },
  {
    name: "Lens Distortion",
    icon: "/images/icons/lens.png",
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

const About = () => {
  return (
    <div
      id='skills'
      className='bg-[url("/images/about.png")] bg-fixed bg-top bg-auto py-32'
    >
      <motion.article
        className='max-w-6xl px-5 mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
        viewport={{ once: true }}
      >
        <motion.h2
          className={clsx(teko.className, "font-bold text-4xl md:text-5xl md:leading-[1.2em]")}
          variants={itemsVariants}
        >
          I&apos;M ALFIN
        </motion.h2>
        <motion.div
          className='bg-white w-14 h-1 mt-5 md:mt-8 mb-8 md:mb-12'
          variants={lineVariants}
        ></motion.div>
        <motion.p
          className={`md:leading-7 md:text-lg`}
          variants={itemsVariants}
        >
          An experienced Videographer and Photographer with over one year of expertise. Skilled in producing various types of video content tailored for social
          media needs. Proficient in editing applications such as DaVinci Resolve, Adobe Premiere Pro, Adobe Lightroom, CapCut, Lens Distortion, Canva, and
          PixelLab. Strong teamwork skills enable effective collaboration within a team. I am eager to join as a Video Editor and Photographer in a company,
          organization, or community, and contribute to society by delivering visual and digital innovations.
        </motion.p>
        <motion.div
          className='flex flex-wrap mt-10 gap-4'
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className='flex items-center gap-3 border border-white/20 p-3 rounded-md bg-white/10 backdrop-blur-md cursor-default'
              variants={itemsVariants}
              whileHover={{
                y: -5,
              }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={30}
                height={30}
              />
              <p className='font-semibold'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.article>
    </div>
  );
};

export default About;
