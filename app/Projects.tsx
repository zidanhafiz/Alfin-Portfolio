"use client";
import Heading from "@/components/Heading";
import { containerVariants, itemsVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import VideoList from "@/components/VideoList";
import { useState } from "react";
import PhotoList from "@/components/PhotoList";

const tabs = ["videos", "photos"];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"videos" | "photos">("videos");

  return (
    <div
      id='projects'
      className='px-4 min-h-screen py-12 md:py-40 bg-gradient-to-tr from-neutral-900 to-black'
    >
      <motion.div
        className={`flex flex-col items-center overflow-hidden mx-auto ${activeTab === "videos" ? "max-w-screen-lg" : "max-w-screen-2xl"}`}
        variants={containerVariants}
        initial='hidden'
        whileInView='inView'
        viewport={{
          once: true,
        }}
      >
        <Heading
          variants={itemsVariants}
          type='solid'
        >
          LATEST PROJECTS
        </Heading>
        <motion.div
          variants={itemsVariants}
          initial='hidden'
          whileInView='inView'
          className='flex gap-6 mt-20 mb-12'
          viewport={{
            once: true,
          }}
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              name={tab as "videos" | "photos"}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </motion.div>
        {activeTab === "videos" && <VideoList />}
        {activeTab === "photos" && <PhotoList />}
      </motion.div>
    </div>
  );
};

const TabButton = ({
  name,
  activeTab,
  setActiveTab,
}: {
  name: "videos" | "photos";
  activeTab: "videos" | "photos";
  setActiveTab: (tab: "videos" | "photos") => void;
}) => {
  return (
    <button
      className={`capitalize border border-white px-6 py-1 rounded-full transition-all duration-300 ${
        activeTab === name ? "bg-white text-black" : "text-white"
      }`}
      onClick={() => setActiveTab(name)}
    >
      {name}
    </button>
  );
};

export default Projects;
