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

const SectionThree = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full h-fit bg-white flex flex-col justify-start items-center pt-20">
      <div className="w-4/5 mx-10 md:mx-24 xl:mx-28">
        <h1
          data-aos="fade-left"
          data-aos-duration="500"
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-black`}
        >
          Calisthenics broken down,
          <br />J
          <span className={`${ppeditorialul.className} text-main`}>u</span>
          st for you
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-neutral-500 mt-10 md:mt-7 xl:mt-10 w-full md:w-1/2`}
        >
          We only teach what we are good at and that is pretty much everything
          you'll ever need. With us you will experiece:
        </p>
      </div>
      <SwipeCards />
    </div>
  );
};

export default SectionThree;
