"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "@/components/services";

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
      <div className="w-4/5 mb-10">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-black text-center`}
        >
          Our{" "}
          <span className={`${ppeditorialul.className} text-main`}>
            Services
          </span>
        </h1>
      </div>
      <div>
        <Services />
      </div>
      <div id="fill-out-form" />
    </div>
  );
};

export default SectionSix;
