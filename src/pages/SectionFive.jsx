"use client";
import Benefits from "@/components/Benefits";
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

const SectionFive = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-fit bg-white flex flex-col items-center justify-center">
      <div className="w-full bg-white pt-10 md:pt-20 pb-8 flex justify-center items-center z-10">
        <h1
          data-aos="fade-left"
          data-aos-duration="500"
          className={`${aspekta.className} w-4/5 text-start text-3xl md:text-6xl font-light text-black`}
        >
          Results & Changes in Calisthenics considering{" "}
          <span className={`${ppeditorialul.className} text-main `}>
            4 days
          </span>{" "}
          a week of consistency
        </h1>
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

export default SectionFive;
