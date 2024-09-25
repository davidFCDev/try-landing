"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Centers = () => {
  const animationOptions = {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  };

  const [ref1, inView1] = useInView({ threshold: 0.4, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <div
      id="centros"
      className="w-full flex flex-col gap-20 sm:gap-10 py-10 sm:py-20"
    >
      {/* Fila 1 */}
      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 bg-black text-white pt-10 sm:pt-0">
        <div className="relative w-full sm:w-[70%] h-[400px]">
          <Image
            src="/images/arenal.jpg"
            alt="Imagen de Centro Arenal"
            layout="fill"
            objectFit="cover"
            className="filter brightness-75"
            priority 
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={inView1 ? animationOptions : {}}
          className="flex flex-col gap-6 sm:w-[30%] px-4 py-10 sm:py-0"
          ref={ref1}
        >
          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> ZENTER
          </h2>
          <p className="text-xs sm:text-sm font-thin italic tracking-wide">
            Estrada Fragosiño, 30, 36214 Vigo, Pontevedra
          </p>
          <p className="text-sm sm:text-lg font-light tracking-wide">
            Situado en el interior del recinto de Twelve Pádel Center.
          </p>
        </motion.div>
      </div>

      {/* Fila 2 */}
      <div className="flex flex-col sm:flex-row-reverse items-center gap-10 sm:gap-16 bg-black text-white pt-10 sm:pt-0">
        <div className="relative w-full sm:w-[70%] h-[400px]">
          <Image
            src="/images/box.jpg"
            alt="Imagen de Centro Zenter"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={inView2 ? animationOptions : {}}
          className="flex flex-col gap-6 sm:w-[30%] px-6 py-10 sm:py-0 items-end text-right"
          ref={ref2}
        >
          <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-wide">
            <span className="text-red-600">TRY</span> BOX ARENAL
          </h2>
          <p className="text-xs sm:text-sm font-thin italic tracking-wide">
            Rúa do Areal, 140, 36201 Vigo, Pontevedra
          </p>
          <p className="text-sm sm:text-lg font-light tracking-wide">
            Situado en el interior del recinto del Gimnasio Arenal.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Centers;
