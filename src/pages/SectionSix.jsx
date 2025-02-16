"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
import { BentoGridDemo } from "@/components/BentoGrid";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionSix = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-fit bg-white flex flex-col justify-center items-center py-10">
      <h1
        data-aos="fade-right"
        data-aos-duration="500"
        className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl text-center font-light text-black w-full xl:w-3/4 mb-10`}
      >
        What can{" "}
        <span className={`${ppeditorialul.className} text-main`}>we</span> do
        for <span className={`${ppeditorialul.className} text-main`}>you</span>
      </h1>
      <BentoGridDemo />
    </div>
  );
};

export default SectionSix;
