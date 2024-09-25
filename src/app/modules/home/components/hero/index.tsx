"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };

  return (
    <div className="w-full min-h-screen relative flex items-end justify-center">
      <Image
        src="/images/fondo.webp"
        alt="fondo hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 filter brightness-50"
        priority
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animationOptions}
        className="absolute font-bold text-center text-white text-[40px] sm:text-[60px] md:text-[100px] tracking-wider z-10 mb-20"
      >
        TRY <span className="bg-black px-2">AGAIN,</span> FAIL{" "}
        <span className="bg-black px-2">BETTER</span>
      </motion.div>
    </div>
  );
};

export default Hero;
