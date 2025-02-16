"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import SwipeCards from "../components/SwipeCards";
import AOS from "aos";
import "aos/dist/aos.css";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full h-fit bg-white flex flex-col justify-start items-center pt-20">
      <div className="w-4/5 mx-10 md:mx-24 xl:mx-28">
        <h1
          data-aos="fade-left"
          data-aos-duration="500"
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-black w-full xl:w-3/4`}
        >
          Unspoken benefits of Calisthe
          <span className={`${ppeditorialul.className} text-main`}>n</span>ics
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${aspekta.className} text-lg md:text-xl font-medium text-[#666666] mt-5 md:mt-6 xl:mt-7 w-full xl:w-1/2`}
        >
          It provides just what you need. After Calisthenics, you will
          experience:
        </p>
      </div>
      <SwipeCards />
    </div>
  );
};

export default SectionTwo;
