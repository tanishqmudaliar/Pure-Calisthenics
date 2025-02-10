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
            className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white text-start md:text-center`}
          >
            Why our members,
            <br />
            <span className={`${ppeditorialul.className} text-main`}>
              love
            </span>{" "}
            us
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="150"
            className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-slate-200 mt-5 text-start md:text-center`}
          >
            We are passionate about teaching. We have crystal clear systems &
            structure. We bring improvements from the very start.
          </p>
        </div>
        <div className="w-full mt-10 flex flex-col md:flex-row justify-evenly items-center">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="w-box h-box md:w-56 md:h-56 xl:w-80 xl:h-80 bg-[url(/images/img2.jpg)] bg-cover bg-center my-5 flex justify-center items-center group"
          >
            <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <h1 className="w-4/5 text-justify opacity-0 group-hover:opacity-100 transition-all duration-300">
                Our expert coaches provide hands-on guidance, ensuring
                personalized training and steady progress. Whether you're a
                beginner or an advanced athlete, we focus on technique,
                strength, and mobility to help you reach your goals safely and
                effectively.
              </h1>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="w-box h-box md:w-56 md:h-56 xl:w-80 xl:h-80 bg-[url(/images/img3.jpg)] bg-cover bg-center my-5 flex justify-center items-center group"
          >
            <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <h1 className="w-4/5 text-justify opacity-0 group-hover:opacity-100 transition-all duration-300">
                We believe fitness is for everyone, including kids! Our fun and
                interactive approach helps children build confidence, strength,
                and coordination in a safe and supportive environment, making
                movement an enjoyable experience from an early age.
              </h1>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="500"
            className="w-box h-box md:w-56 md:h-56 xl:w-80 xl:h-80 bg-[url(/images/img1.jpg)] bg-cover bg-center my-5 flex justify-center items-center group"
          >
            <div className="bg-white w-full h-full flex justify-center items-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <h1 className="w-4/5 text-justify opacity-0 group-hover:opacity-100 transition-all duration-300">
                Our state-of-the-art training facility is designed for
                versatility, offering a well-structured and engaging space for
                all fitness levels. With high-quality equipment and a motivating
                atmosphere, every workout feels exciting and rewarding!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
