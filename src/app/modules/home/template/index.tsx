import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Centers from "../components/centers";
import Class from "../components/class";
import FreeClass from "../components/freeclass";
import Gallery from "../components/gallery";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <About />
      <Centers />
      <Gallery />
      <Class />
      <FreeClass />
    </>
  );
};

export default HomeTemplate;
