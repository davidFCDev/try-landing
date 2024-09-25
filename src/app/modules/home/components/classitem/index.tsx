import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ClassItemType {
  id: number;
  style: string;
  image: string;
  initial: { opacity: number; y: number };
  title: {
    first?: string;
    red: string;
    end?: string;
  };
  subtitle: string;
  description: string;
}

const ClassItem: React.FC<{ item: ClassItemType }> = ({ item }) => {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  const animationOptions = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  };

  return (
    <div
      className={`${item.style} justify-center bg-black text-white`}
      ref={ref}
    >
      <div className="relative w-full sm:w-[80%] h-[300px]">
        <Image
          src={item.image}
          alt={item.description}
          layout="fill"
          objectFit="cover" // Mantiene la imagen en su proporción sin estirarse
          className="filter brightness-75"
          priority // Prioriza la carga de la imagen
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw" // Optimización de tamaños para diferentes pantallas
        />
      </div>

      <motion.div
        animate={inView ? animationOptions : {}}
        initial={item.initial}
        className="flex flex-col items-center justify-center gap-3 sm:gap-8 px-6 sm:px-10 w-[20%]"
        key={item.id}
      >
        <h3 className="flex text-3xl sm:text-5xl uppercase font-bold tracking-wide">
          {item.title.first}
          <p className="text-red-600">{item.title.red}</p>
          {item.title.end}
        </h3>
        <p className="text-lg font-light tracking-wide italic">
          {item.subtitle}
        </p>
      </motion.div>
    </div>
  );
};

export default ClassItem;
