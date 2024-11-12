import { containerVariants, itemsVariants } from "@/utils/variants";
import { motion } from "framer-motion";

function VideosCard({
  title,
  url,
  description,
  director,
  editor,
  colorGrading,
  talent,
  category,
}: {
  title: string;
  url: string;
  description: string;
  director: string;
  editor: string;
  colorGrading: string;
  talent?: string;
  category: string;
}) {
  return (
    <motion.div
      className='grid grid-cols-1 justify-items-center md:grid-cols-[auto_1fr] gap-10 p-4 items-start'
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{
        once: true,
      }}
    >
      <motion.iframe
        variants={itemsVariants}
        src={url}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        className='w-[400px] h-[225px] lg:w-[480px] lg:h-[270px]'
      />
      <motion.div variants={itemsVariants} className="max-w-[400px] lg:max-w-xl">
        <h4 className={`text-2xl font-bold uppercase`}>{title}</h4>
        <p className='text-sm text-gray-300 mt-3'>{description}</p>
        <div className='space-y-2 font-semibold mt-6'>
          <span className='text-sm text-gray-400 block'>Director: {director}</span>
          <span className='text-sm text-gray-400 block'>Editor: {editor}</span>
          <span className='text-sm text-gray-400 block'>Color Grading: {colorGrading}</span>
          {talent && <span className='text-sm text-gray-400 block'>Talent: {talent}</span>}
          <span className='text-sm text-gray-400 block'>Category: {category}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default VideosCard;
