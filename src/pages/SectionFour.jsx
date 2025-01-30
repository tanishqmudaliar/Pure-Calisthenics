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

const ppeditorial = localFont({
  src: "../fonts/ppeditorialold-italic.otf",
});

const SectionFour = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-fit md:h-svh bg-secondary flex flex-col justify-evenly items-center pt-20 pb-10">
      <div className="w-4/5 mx-10 md:mx-10 xl:mx-14">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className={`${aspekta.className} text-5xl md:text-6xl xl:text-7xl font-light text-white`}
        >
          It’s all quite,
          <br />
          Si
          <span className={`${ppeditorialul.className} text-main `}>m</span>ple
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${aspekta.className} text-sm md:text-base xl:text-lg font-medium text-slate-200 mt-10`}
        >
          We're obsessed with you feeling strong, light & and in control of your
          health.
        </p>
      </div>
      <div className="flex w-full md:w-4/5 justify-center md:justify-end my-14 md:my-10">
        <div className="relative w-36 h-36 md:w-44 md:h-44 z-15 left-5 bg-white rounded-full flex flex-col justify-center items-center text-3xl">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className={`${ppeditorial.className} font-medium text-5xl mt-3 md:mt-0`}
          >
            700+
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="500"
            className={`${aspekta.className} text-xs text-center font-medium uppercase`}
          >
            students
            <span> </span>
            <br className="md:hidden" />
            trained
          </h1>
        </div>
        <div className="w-36 h-36 md:w-44 md:h-44 z-10 bg-main rounded-full flex flex-col justify-center items-center text-3xl">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className={`${ppeditorial.className} ml-4 md:ml-0 font-medium text-5xl`}
          >
            100+
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="500"
            className={`${aspekta.className} text-xs font-medium uppercase`}
          >
            transformed
          </h1>
        </div>
        <div className="relative w-36 h-36 md:w-44 md:h-44 -left-5 bg-white rounded-full flex flex-col justify-center items-center text-3xl">
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className={`${ppeditorial.className} font-medium text-5xl mt-3 md:mt-0`}
          >
            4+
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="500"
            className={`${aspekta.className} text-xs text-center font-medium uppercase`}
          >
            years of
            <span> </span>
            <br className="md:hidden" />
            experience
          </h1>
        </div>
      </div>
      <div className="w-screen h-fit bg-white inline-flex flex-nowrap py-1">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-7 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-7 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
          <li>
            <img
              src="/logo/pure-calisthenics.png"
              className="w-28 h-auto"
              alt="Pure Calisthenics"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionFour;
