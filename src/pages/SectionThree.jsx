"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
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
    <div className="bg-secondary w-full h-fit flex flex-col justify-center items-center">
      <div className="my-20 w-full flex flex-col justify-center items-center">
        <div className="w-4/5">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white text-center`}
          >
            About{" "}
            <span className={`${ppeditorialul.className} text-main`}>us</span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="150"
            className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-slate-200 mt-5 text-center`}
          >
            We help you build strength, agility, and control so you move, feel,
            and perform at your best every day.
          </p>
        </div>
        <div className="w-full mt-10 flex flex-col md:flex-row justify-evenly items-center">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="w-box h-box md:w-56 md:h-56 xl:w-80 xl:h-80 bg-[url(/images/about-1.jpg)] bg-cover bg-center my-5 flex justify-center items-center group"
          >
            <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <h1 className="w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                Text1
              </h1>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="w-box h-box md:w-56 md:h-56 xl:w-80 xl:h-80 bg-[url(/images/about-1.jpg)] bg-cover bg-center my-5 flex justify-center items-center group"
          >
            <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <h1 className="w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                Text1
              </h1>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="w-box h-box md:w-56 md:h-56 xl:w-80 xl:h-80 bg-[url(/images/about-1.jpg)] bg-cover bg-center my-5 flex justify-center items-center group"
          >
            <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <h1 className="w-full text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                Text1
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
