'use client'
import MotionWrapper from "../text-wrapper";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col pt-40 pb-20 pl-20 justify-center items-start">
      <MotionWrapper>
        <h2 className="font-bold text-4xl sm:text-6xl uppercase tracking-wide">
          Descubre nuestros dos centros en Vigo
        </h2>
        <p className="font-light tracking-wide text-lg sm:text-xl">
          Dos espacios de entrenamiento distintos, para que puedas elegir el que más se adapte a ti.
        </p>
      </MotionWrapper>
    </div>
  );
};

export default About;
