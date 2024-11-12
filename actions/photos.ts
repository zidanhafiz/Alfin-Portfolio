"use server";
import photos from "@/database/photos.json";

export const getPhotos = async (category: string) => {
  const filteredPhotos = photos.filter((photo) => photo.category === category);
  return filteredPhotos;
};
