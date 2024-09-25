"use client";

import Link from "next/link";
import MotionWrapper from "../text-wrapper";

const FreeClass = () => {
  return (
    <div className="w-full flex flex-col pt-20 pb-40 justify-center items-center">
      <MotionWrapper>
        <h2 className="font-bold text-4xl sm:text-6xl uppercase tracking-wide">
          Tu primera clase es gratis
        </h2>
        <p className="font-light tracking-wide text-lg sm:text-xl">
          Contacta con nosotros y ven a
          <Link
            href="/contact"
            className="ml-2 font-bold bg-black text-white px-4 py-1 hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            probar
          </Link>
        </p>
      </MotionWrapper>
    </div>
  );
};

export default FreeClass;
