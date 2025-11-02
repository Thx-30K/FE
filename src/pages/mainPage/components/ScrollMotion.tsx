import { motion, useAnimation } from 'framer-motion';
import React from 'react';

interface ScrollMotionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const ScrollMotion: React.FC<ScrollMotionProps> = ({
  children,
  direction = 'up',
  delay = 0,
}) => {
  const controls = useAnimation();
  const offset = 120;

  const directionMap = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  }[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap }}
      animate={controls}
      onViewportEnter={() =>
        controls.start({
          opacity: 1,
          x: 0,
          y: 0,
          transition: { ease: 'easeOut', duration: 1, delay },
        })
      }
      onViewportLeave={() =>
        controls.start({
          opacity: 0,
          transition: { ease: 'easeInOut', duration: 1.5 }, // 👈 사라질 때 천천히
        })
      }
      viewport={{ once: false, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
