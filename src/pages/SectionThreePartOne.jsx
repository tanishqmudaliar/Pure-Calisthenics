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

const SectionThreePartOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-secondary w-full h-fit flex flex-col justify-center items-center">
      <div className="mt-20 w-full flex flex-col justify-center items-center">
        <div className="w-4/5">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white text-start md:text-center`}
          >
            Why our members,
            <br />
            <span className={`${ppeditorialul.className} text-main`}>
              love
            </span>{" "}
            us
          </h1>
        </div>
        <div className="w-full mt-6 md:mt-7 xl:mt-8 flex flex-col md:flex-row justify-evenly items-center md:items-end">
          <div data-aos="fade-up" data-aos-duration="500">
            <h1
              className={`${aspekta.className} flex w-box md:w-[30vw] xl:w-80 h-20 justify-center items-center text-lg font-medium text-white text-center my-2`}
            >
              We have crystal clear systems & structure.
            </h1>
            <img
              src="/images/img1.jpg"
              alt="image"
              className="w-box h-box md:w-[30vw] md:h-[30vw] xl:w-80 xl:h-80 object-cover "
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <h1
              className={`${aspekta.className} flex w-box md:w-[30vw] xl:w-80 h-20 justify-center items-center text-lg font-medium text-white text-center my-2`}
            >
              We are passionate about teaching.
            </h1>
            <img
              src="/images/img2.jpg"
              alt="image"
              className="w-box h-box md:w-[30vw] md:h-[30vw] xl:w-80 xl:h-80 object-cover "
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <h1
              className={`${aspekta.className} flex w-box md:w-[30vw] xl:w-80 h-20 justify-center items-center text-lg font-medium text-white text-center my-2`}
            >
              We bring improvements from the very start.
            </h1>
            <img
              src="/images/img3.jpg"
              alt="image"
              className="w-box h-box md:w-[30vw] md:h-[30vw] xl:w-80 xl:h-80 object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThreePartOne;
