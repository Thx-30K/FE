import { motion } from 'framer-motion';

const ScrollMotion = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        ease: 'easeOut',
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
