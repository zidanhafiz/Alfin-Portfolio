import Image from "next/image";
import { useEffect, useState } from "react";
import { getPhotos } from "@/actions/photos";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemsVariants } from "@/utils/variants";

const categories = ["building", "nature", "human interest", "graphics design", "product"];

const PhotoList = () => {
  const [activeCategory, setActiveCategory] = useState<string>("human interest");
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await getPhotos(activeCategory);
      setPhotos(photos);
    };
    fetchPhotos();
  }, [activeCategory]);

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='inView'
      viewport={{
        once: true,
      }}
    >
      <motion.div
        variants={itemsVariants}
        className='flex flex-wrap gap-4 justify-center mb-10'
      >
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </motion.div>
      <motion.div
        variants={itemsVariants}
        className='flex flex-wrap gap-4 justify-center'
      >
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={photo.url}
          >
            <Image
              src={photo.url}
              alt={photo.category}
              width={800}
              height={800}
              className='max-h-[500px] w-full max-w-[670px]'
              loading='lazy'
            />
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

const CategoryButton = ({
  category,
  activeCategory,
  setActiveCategory,
}: {
  category: string;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => {
  return (
    <button
      className={`capitalize border border-white px-6 py-1 rounded-full transition-all duration-300 ${
        activeCategory === category ? "bg-white text-black" : "text-white"
      }`}
      onClick={() => setActiveCategory(category)}
    >
      {category}
    </button>
  );
};
export default PhotoList;
