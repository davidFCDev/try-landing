"use client";
import React, { useState } from "react";
import Image from "next/image";
import MotionWrapper from "../text-wrapper";

interface ImageProps {
  src: string;
  alt: string;
}

const images: ImageProps[] = [
  { src: "/images/running.jpg", alt: "Running" },
  { src: "/images/yoga.jpg", alt: "Yoga" },
  { src: "/images/thryrox.jpg", alt: "Thryrox" },
  { src: "/images/box.jpg", alt: "Box" },
  { src: "/images/yoga2.jpg", alt: "Yoga 2" },
  { src: "/images/arenal.jpg", alt: "Arenal" },
  { src: "/images/running2.jpg", alt: "Running 2" },
  { src: "/images/yoga.jpg", alt: "Yoga" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  const handleImageClick = (image: ImageProps) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mx-auto px-4 py-20 flex flex-col gap-40">
      <div className="w-full flex flex-col justify-center items-center text-center">
        <MotionWrapper>
          <h2 className="font-bold text-4xl sm:text-6xl uppercase tracking-wide">
            Variedad, intensidad y comunidad
          </h2>
          <p className="font-light tracking-wide text-lg sm:text-xl">
            Todo a tu alcance.
          </p>
        </MotionWrapper>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-0 pb-[75%] overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseClick} // Cierra la imagen cuando se hace clic en cualquier lugar
        >
          <div className="relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
