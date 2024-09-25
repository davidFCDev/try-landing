'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ children, className }) => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  return (
    <motion.div
      animate={inView ? animationOptions : {}}
      initial={{ opacity: 0, y: 50 }}
      className={`${className} sm:max-w-xl flex flex-col gap-5`}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
