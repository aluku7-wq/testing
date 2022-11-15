// cursor animations
// project page animations
export const projects_animation = {
  // logo
  logo: {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  },
  // title
  title: {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hide: { opacity: 0, scale: 0.9, y: -50, transition: { duration: 0.5 } },
  },
  grid: {
    show: { transition: { staggerChildren: 0.05 } },
    hide: { transition: { staggerChildren: 0.01, staggerDirection: -1 } },
  },
  card: {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: { opacity: 0, scale: 0.9 },
  },
};
