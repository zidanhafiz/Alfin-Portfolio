import { type ProjectNames } from '@/app/Projects';

export const generateImagesLink = (name: ProjectNames): string[] => {
  const nameLowerCase = name.toLowerCase();
  const imgArr = [];

  for (let i = 1; i <= 6; i++) {
    const link = `/images/${nameLowerCase}/0${i}.jpg`;
    imgArr.push(link);
  }

  return imgArr;
};
