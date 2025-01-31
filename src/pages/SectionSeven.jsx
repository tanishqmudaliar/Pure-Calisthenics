"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const SectionSeven = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-fit bg-white flex flex-col justify-center items-center py-10">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="w-[90%] h-fit bg-main rounded-3xl flex flex-col justify-center items-center"
      >
        <h1
          className={`${aspekta.className} w-4/5 text-4xl md:text-5xl xl:text-7xl font-light text-white text-start md:text-center mt-10`}
        >
          Experience Power of the Calisthenics and Get Started on Your Fitness
          Journey
        </h1>
        <p
          className={`${aspekta.className} w-4/5 text-xl xl:text-2xl font-normal text-secondary mt-5 text-justify`}
        >
          Join us for a personalized demo session where you will get hands-on
          training and expert guidance. Feel the difference calisthenics can
          make in your fitness journey!
        </p>
        <button
          className={`${aspekta.className} bg-white w-fit h-fit p-4 text-lg rounded-full font-semibold text-main my-7 hover:text-secondary`}
        >
          Book a Demo Session
        </button>
        <div className="w-[90%] mb-10 flex flex-col xl:flex-row justify-center items-start text-white">
          <h1 className={`${aspekta.className} text-lg mr-3 flex`}>
            <li className="text-secondary" />
            Personalized Training Plans
          </h1>
          <h1 className={`${aspekta.className} text-lg mr-3 flex`}>
            <li className="text-secondary" />
            Expert Coaches Ready to Guide You
          </h1>
          <h1 className={`${aspekta.className} text-lg mr-3 flex`}>
            <li className="text-secondary" />
            Progress Tracking for Real Results
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
