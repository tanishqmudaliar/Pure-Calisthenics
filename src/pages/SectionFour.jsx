"use client";
import Benefits from "@/components/benefits";
import localFont from "next/font/local";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Every 7 Days",
    body: "Better Exercise Capacity",
  },
  {
    title: "Every 15 Days",
    body: "Improved Strength & Better Abilities",
  },
  {
    title: "Every Month",
    body: "Improved Daily Movements",
  },
  {
    title: "Every 45 Days",
    body: "Visible Fat Loss",
  },
  {
    title: "Every 2 Months",
    body: "Progress to Advanced Exercises",
  },
  {
    title: "Every 3 Months",
    body: "Surroundings Observe Changes in You",
  },
  {
    title: "Every 6 Months",
    body: "Better Personality, More Confident, Feeling Light",
  },
  { title: "Every 1 Year", body: "Significant Transformation" },
];

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionFour = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-fit bg-white flex flex-col items-center justify-center">
      <div className="w-full pt-10 md:pt-20 pb-8 z-10 flex flex-col justify-center items-center">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className={`${aspekta.className} w-4/5 text-start text-4xl md:text-6xl xl:text-7xl font-light text-black`}
        >
          Results & Changes After Calisthe
          <span className={`${ppeditorialul.className} text-main `}>n</span>ics
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${aspekta.className} text-lg md:text-xl font-medium text-[#505050] w-4/5 mt-4`}
        >
          Considering 4 days a week of training.
        </p>
      </div>
      <div className="w-4/5 mb-20 flex flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Benefits title={project.title} body={project.body} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default SectionFour;
