// cursor animations
// project page animations
export const animation = {
  // general animation
  general: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
    hide: { opacity: 0, transition: { duration: 0.5 } },
  },
  // homepage
  options: {
    hidden: { scale: 1.2, opacity: 0 },
    show: { scale: 1, opacity: 1 },
    hide: { scale: 1.2, opacity: 0 },
  },
  // grid
  grid: {
    hidden: {
      x: -500,
      scaleX: 0,
      opacity: 0,
    },
    show: {
      x: 0,
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hide: {
      x: -500,
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
  // project animation
  text: {
    hidden: { y: 500, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7 } },
    hide: { y: 500, opacity: 0, transition: { duration: 0.5 } },
  },
  image: {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7 } },
    hide: { x: -100, opacity: 0, transition: { duration: 0.5 } },
  },
};
