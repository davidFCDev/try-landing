"use client";

import { CLASS } from "../../../../constants";
import ClassItem, { ClassItemType } from "../classitem";
import MotionWrapper from "../text-wrapper";

const Class: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-start gap-40 py-20">
      <div className="w-full flex flex-col pl-20 justify-center items-start">
        <MotionWrapper className="items-start">
          <h2 className="font-bold text-4xl sm:text-6xl uppercase tracking-wide">
            Elige tu clase favorita
          </h2>
          <p className="font-light tracking-wide text-lg sm:text-xl">
            Ya busques mejorar tu resistencia, desarrollar tu fuerza o
            perfeccionar tus habilidades gimnásticas, tenemos la clase perfecta
            para ti.
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/11BxSCEmBlY49k70ADOW8dRaj5bZn7mEOm-sTWc1IPVg/edit?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
            className="font-bold border border-black text-white bg-black hover:bg-white hover:text-black px-6 py-3 transition-all tracking-widest uppercase text-sm"
          >
            Ver horarios
          </a>
        </MotionWrapper>
      </div>

      <div className="flex flex-col gap-20 sm:gap-10 w-full justify-around">
        {CLASS.map((item: ClassItemType) => (
          <ClassItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Class;
