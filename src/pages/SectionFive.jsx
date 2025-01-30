"use client";
import Benefits from "@/components/Benefits";
import localFont from "next/font/local";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Muscle Development",
    subtitle: "Build Lean Mass",
    body: "Gain muscle through bodyweight exercises that enhance strength, endurance, and overall athletic performance.",
  },
  {
    title: "Visible Fat Loss",
    subtitle: "Shed Stubborn Fat",
    body: "Burn excess fat efficiently with dynamic calisthenics workouts that boost metabolism and sculpt your physique.",
  },
  {
    title: "Noticeable Strength Gains",
    subtitle: "Increase Your Power",
    body: "Develop raw power by mastering bodyweight resistance, improving endurance, and unlocking explosive strength.",
  },
  {
    title: "Core Strength & Stability",
    subtitle: "Stronger Core Foundation",
    body: "Strengthen your core for better posture, balance, and total body control in every movement.",
  },
  {
    title: "Moving Better Every Day",
    subtitle: "Improved Daily Mobility",
    body: "Enhance flexibility, mobility, and coordination to move effortlessly and prevent injuries in daily life.",
  },
  {
    title: "Mastering Bodyweight Control",
    subtitle: "Control Your Movement",
    body: "Refine your coordination, balance, and technique to execute precise and controlled bodyweight movements.",
  },
  {
    title: "Better Confidence & Personality",
    subtitle: "Elevate Your Presence",
    body: "Boost self-confidence, discipline, and charisma by building a strong, athletic, and well-balanced physique.",
  },
];

const aspekta = localFont({
  src: "../fonts/AspektaVF.woff2",
});

const ppeditorialul = localFont({
  src: "../fonts/ppeditorialold-ultralightitalic.otf",
});

const SectionFive = () => {
  return (
    <div className="w-full h-fit bg-white flex flex-col items-center justify-center">
      <div className="w-full bg-white pt-10 md:pt-20 pb-8 flex justify-center items-center z-10">
        <div
          className={`${aspekta.className} w-4/5 text-start text-3xl md:text-6xl xl:text-7xl font-light text-black`}
        >
          We make sure you recieve
          <br />
          <span className={`${ppeditorialul.className} text-main `}>
            more
          </span>{" "}
          than you invest
        </div>
      </div>
      <div className="w-4/5 mb-20 flex flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Benefits
              title={project.title}
              subtitle={project.subtitle}
              body={project.body}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionFive;
