export const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
  inView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemsVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const itemsVariants_2 = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  inView: {
    opacity: 1,
    x: 0,
  },
};
